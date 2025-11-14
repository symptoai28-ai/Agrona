
import React from 'react';
import { Citation } from '../../types';

interface CitationsProps {
  citations: Citation[];
}

const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);


const Citations: React.FC<CitationsProps> = ({ citations }) => {
  if (!citations || citations.length === 0) return null;

  return (
    <div className="mt-4 border-t border-gray-200 pt-3">
      <h4 className="text-xs font-semibold text-gray-600 mb-2">Sources:</h4>
      <ul className="space-y-1">
        {citations.map((citation, index) => (
          <li key={index} className="flex items-start">
            <LinkIcon className="w-3 h-3 text-blue-500 mt-1 mr-2 flex-shrink-0" />
            <a
              href={citation.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline break-all"
              title={citation.uri}
            >
              {citation.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Citations;
