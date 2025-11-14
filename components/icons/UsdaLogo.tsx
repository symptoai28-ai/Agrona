import React from 'react';

interface UsdaLogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

const UsdaLogo: React.FC<UsdaLogoProps> = ({ className, variant = 'color' }) => {
  const isWhite = variant === 'white';
  
  // Define colors based on the variant
  const blueColor = isWhite ? '#FFFFFF' : '#002f6c';
  const greenColor = isWhite ? '#FFFFFF' : '#006A35';
  // The white swoosh inside the green bar should not be visible in the white variant
  const innerSwooshStroke = isWhite ? 'none' : '#FFFFFF';

  return (
    <svg
      className={className}
      viewBox="0 0 300 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="USDA Rural Development Logo"
    >
      <text 
        x="0" 
        y="69" 
        fontFamily='"Times New Roman", Times, serif'
        fontSize="72" 
        fontWeight="bold" 
        fill={blueColor}
      >
        USDA
      </text>
      
      <path 
        d="M0.5,81.5 C0.5,81.5 287,68 287,68 C287,68 299.5,67.5 299.5,67.5 C299.5,67.5 300,90 300,90 C300,90 0,103 0,103 C0,103 0.5,81.5 0.5,81.5 Z" 
        fill={greenColor}
      />
      
      <path 
        d="M21.5,82.5 C21.5,82.5 129,78 129,78 C129,78 281.5,75 281.5,75" 
        stroke={innerSwooshStroke}
        strokeWidth="2"
        fill="none"
      />

      <text 
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="36" 
        fontWeight="600"
        fill={greenColor}
      >
        <tspan x="84.34" y="129">Rural</tspan>
        <tspan x="42.272" y="158">Development</tspan>
      </text>
    </svg>
  );
};

export default UsdaLogo;
