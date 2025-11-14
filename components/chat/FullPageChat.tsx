
import React from 'react';
import ChatInterface from './ChatInterface';
import AgronaAvatar from './AgronaAvatar';

const FullPageChat: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="flex items-center justify-between p-4 bg-[#002f6c] text-white shadow-md z-10">
        <div className="flex items-center space-x-3">
          <AgronaAvatar className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold">Agrona</h1>
            <p className="text-sm text-gray-300">USDA AI Assistant</p>
          </div>
        </div>
         <a href="/" className="px-4 py-2 text-sm font-medium bg-white/10 rounded-md hover:bg-white/20 transition-colors">
            Back to USDA Homepage
          </a>
      </header>
      <main className="flex-1 overflow-hidden">
        <ChatInterface />
      </main>
    </div>
  );
};

export default FullPageChat;
