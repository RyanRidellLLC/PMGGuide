import React from 'react';

interface DiamondLogoProps {
  className?: string;
}

const DiamondLogo: React.FC<DiamondLogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Diamond outline */}
      <g transform="rotate(45 50 50)">
        {/* Top section */}
        <path
          d="M50 15 75 40 50 50 25 40 Z"
          fill="currentColor"
          className="text-deep-navy"
          opacity="0.9"
        />
        {/* Right section */}
        <path
          d="M75 40 85 50 50 50 Z"
          fill="currentColor"
          className="text-pastel-blue"
          opacity="0.8"
        />
        {/* Bottom section */}
        <path
          d="M50 50 75 60 50 85 25 60 Z"
          fill="currentColor"
          className="text-deep-navy"
          opacity="0.7"
        />
        {/* Left section */}
        <path
          d="M25 40 15 50 50 50 Z"
          fill="currentColor"
          className="text-pastel-blue"
          opacity="0.6"
        />
        
        {/* Subtle inner lines for definition */}
        <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" className="text-cream" opacity="0.3" />
        <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-cream" opacity="0.3" />
      </g>
    </svg>
  );
};

export default DiamondLogo;