import React from 'react';
import { Message, Role } from '../../types';
import AgronaAvatar from './AgronaAvatar';
import Citations from './Citations';

interface MessageProps {
  message: Message;
}

const formatContent = (text: string) => {
  // A very simple markdown-like formatter
  const formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italics
    .replace(/^- (.*$)/gm, '<ul class="list-disc list-inside ml-4"><li>$1</li></ul>') // Basic list items
    .replace(/\n/g, '<br />'); // New lines
    
  return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
};


const MessageBubble: React.FC<MessageProps> = ({ message }) => {
  const isModel = message.role === Role.MODEL;
  const isError = message.role === Role.ERROR;

  if (isModel && message.content === '...') {
     return (
        <div className="flex items-end space-x-3 max-w-xl">
            <AgronaAvatar className="w-8 h-8 flex-shrink-0" />
            <div className="p-3 bg-gray-200 rounded-2xl rounded-bl-none">
                <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
     );
  }

  const bubbleClasses = isModel || isError
    ? 'bg-gray-200 text-gray-900 rounded-bl-none'
    : 'bg-[#005ea2] text-white rounded-br-none';
  
  const containerClasses = isModel || isError
    ? 'flex items-end space-x-3 max-w-2xl'
    : 'flex items-end justify-end';

  const contentClasses = isError ? '!text-red-700' : '';

  return (
    <div className={containerClasses}>
      {(isModel || isError) && <AgronaAvatar className="w-8 h-8 flex-shrink-0" />}
      <div className={`p-4 rounded-2xl ${bubbleClasses} ${contentClasses} prose prose-sm max-w-none`}>
        {formatContent(message.content)}
        {message.citations && <Citations citations={message.citations} />}
      </div>
    </div>
  );
};

export default MessageBubble;