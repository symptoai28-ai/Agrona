
import React from 'react';

const AgronaAvatar: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#007A33', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#005ea2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#grad1)" />
      <path
        d="M65,30 C60,25 50,25 45,30 C40,35 40,45 45,50 C50,55 60,65 60,75 M35,40 C40,35 50,35 55,40"
        fill="none"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M70 70 L72 68 C75 65 80 68 80 72 L78 75 Z"
        fill="white"
        transform="rotate(10, 75, 71.5)"
      />
    </svg>
  );
};

export default AgronaAvatar;
