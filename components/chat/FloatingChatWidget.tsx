
import React, { useState } from 'react';
import ChatInterface from './ChatInterface';
import AgronaAvatar from './AgronaAvatar';

const FloatingChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#002f6c] text-white p-3 rounded-full shadow-lg hover:bg-[#005ea2] focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center space-x-3"
        >
           <AgronaAvatar className="w-8 h-8"/>
          <span className="font-semibold pr-2">Chat with Agrona</span>
        </button>
      </div>

      <div className={`fixed bottom-5 right-5 z-50 w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out transform origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <header className="flex items-center justify-between p-4 border-b bg-[#002f6c] text-white rounded-t-2xl">
          <div className="flex items-center space-x-2">
            <AgronaAvatar className="w-8 h-8" />
            <h2 className="text-lg font-bold">Agrona</h2>
          </div>
          <div className="flex items-center space-x-2">
            <a href="?chat=full" target="_blank" title="Open in new tab" className="p-1 hover:bg-white/20 rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <button onClick={() => setIsOpen(false)} title="Close chat" className="p-1 hover:bg-white/20 rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </div>
    </>
  );
};

export default FloatingChatWidget;
