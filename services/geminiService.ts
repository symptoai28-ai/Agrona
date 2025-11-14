
import { GoogleGenAI } from "@google/genai";
import { Message, Role, Citation } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `You are Agrona, a specialized AI assistant expert in the United States Department of Agriculture (USDA). Your persona is inspired by the goddess of the harvest: you are knowledgeable, helpful, and dedicated to helping people find the resources they need from the USDA. Your tone is professional, clear, and encouraging.
Your primary function is to act as an intelligent search interface for the official USDA website (usda.gov). You will use the provided Google Search tool to find the most accurate and up-to-date information.
Core Directives:
1.  Strict Grounding: Base your answers exclusively on the information returned by the Google Search tool.
2.  Mandatory Citations: For every factual claim, you MUST cite the source from the search results.
3.  Formatted for Readability: Structure your responses using Markdown (headings, bullet points, bold text).
4.  Answer Structure: Start with a direct answer, follow with details, and proactively suggest next steps.
5.  Handling "I don't know": If the search tool doesn't find a relevant answer, state that you could not find the information on the official USDA website.
6.  Be a Guide, Not a Replacement: Frame answers to guide users to the official USDA pages.`;


export const getAgronaResponse = async (history: Message[]): Promise<Message> => {
  try {
    const contents = history
      .filter(msg => msg.role === Role.USER || msg.role === Role.MODEL)
      .map(msg => ({
        role: msg.role === Role.USER ? 'user' : 'model',
        parts: [{ text: msg.content }],
      }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    const citations: Citation[] = (groundingChunks || [])
      .map((chunk: any) => ({
        uri: chunk.web?.uri || '',
        title: chunk.web?.title || 'Untitled Source',
      }))
      .filter((citation: Citation) => citation.uri);
    
    // Deduplicate citations based on URI
    const uniqueCitations = Array.from(new Map(citations.map(item => [item['uri'], item])).values());


    return {
      role: Role.MODEL,
      content: text || "I'm sorry, I couldn't generate a response. Please try again.",
      citations: uniqueCitations.length > 0 ? uniqueCitations : undefined,
    };

  } catch (error) {
    console.error("Error fetching from Gemini API:", error);
    return {
      role: Role.ERROR,
      content: "An error occurred while communicating with the AI. Please check your connection and API key, then try again."
    };
  }
};
