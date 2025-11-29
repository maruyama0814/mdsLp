import React from 'react';

export const GridOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vertical Lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-black/5" />
      <div className="absolute left-[33.33%] top-0 bottom-0 w-px bg-black/5" />
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-black/5" />
      
      {/* Horizontal Lines */}
      <div className="absolute top-[12%] left-0 right-0 h-px bg-black/5" />
      <div className="absolute top-[45%] left-0 right-0 h-px bg-black/5" />
      <div className="absolute bottom-[15%] left-0 right-0 h-px bg-black/5" />

      {/* Golden Rectangle Hints */}
      <div className="absolute top-[25%] left-[33.33%] w-[33%] h-[15%] border border-black/5" />
      <div className="absolute bottom-[20%] right-[8%] w-[25%] h-[20%] border border-black/5" />
      
      {/* Diagonal */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1" />
      </svg>
    </div>
  );
};