import React from 'react';

interface SuggestionPromptsProps {
  onPromptClick: (prompt: string) => void;
}

const suggestions = [
  "Where can I find USDA crop data?",
  "Tell me about Rural Development grants.",
  "What is the latest news on food safety?",
  "How do I apply for a farm loan?",
];

const SuggestionPrompts: React.FC<SuggestionPromptsProps> = ({ onPromptClick }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
      {suggestions.map((prompt, index) => (
        <button
          key={index}
          onClick={() => onPromptClick(prompt)}
          className="p-3 text-sm text-left bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-blue-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default SuggestionPrompts;