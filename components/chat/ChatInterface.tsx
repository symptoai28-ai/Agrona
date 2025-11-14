
import React, { useState, useRef, useEffect } from 'react';
import { useChatHistory } from '../../hooks/useChatHistory';
import { getAgronaResponse } from '../../services/geminiService';
import { Message, Role } from '../../types';
import MessageBubble from './Message';
import SuggestionPrompts from './SuggestionPrompts';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useChatHistory();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const handleSend = async (prompt?: string) => {
    const userMessageContent = prompt || input;
    if (!userMessageContent.trim() || isLoading) return;

    const newUserMessage: Message = { role: Role.USER, content: userMessageContent };
    const updatedHistory = [...messages, newUserMessage];
    setMessages(updatedHistory);
    setInput('');
    setIsLoading(true);

    const modelResponse = await getAgronaResponse(updatedHistory);
    setMessages([...updatedHistory, modelResponse]);
    setIsLoading(false);
  };
  
  const handleSuggestionClick = (prompt: string) => {
    setInput('');
    handleSend(prompt);
  };


  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
        {isLoading && <MessageBubble message={{ role: Role.MODEL, content: '...' }} />}
        <div ref={messagesEndRef} />
      </div>
      
      {messages.length <= 1 && !isLoading && (
         <SuggestionPrompts onPromptClick={handleSuggestionClick} />
      )}

      <div className="border-t bg-white p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Agrona a question..."
            className="flex-1 p-3 border rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-3 bg-[#005ea2] text-white rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-[#002f6c] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
