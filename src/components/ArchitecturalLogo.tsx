import React from 'react';

interface ArchitecturalLogoProps {
  className?: string;
}

const ArchitecturalLogo: React.FC<ArchitecturalLogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Diamond shape representing premium stone */}
      <path
        d="M50 15 L75 35 L75 65 L50 85 L25 65 L25 35 Z"
        fill="currentColor"
        className="text-deep-navy"
        opacity="0.9"
      />
      
      {/* Inner diamond for depth */}
      <path
        d="M50 25 L65 40 L65 60 L50 75 L35 60 L35 40 Z"
        fill="currentColor"
        className="text-pastel-blue"
        opacity="0.6"
      />
      
      {/* Granite veining lines */}
      <path
        d="M30 40 Q50 35 70 45"
        stroke="currentColor"
        strokeWidth="1"
        className="text-pastel-blue"
        opacity="0.8"
        fill="none"
      />
      <path
        d="M28 55 Q50 50 72 60"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-pastel-blue"
        opacity="0.7"
        fill="none"
      />
      <path
        d="M32 65 Q50 62 68 68"
        stroke="currentColor"
        strokeWidth="1"
        className="text-pastel-blue"
        opacity="0.6"
        fill="none"
      />
      
      {/* Central highlight for premium feel */}
      <circle
        cx="50"
        cy="50"
        r="3"
        fill="currentColor"
        className="text-cream"
        opacity="0.8"
      />
    </svg>
  );
};

export default ArchitecturalLogo;