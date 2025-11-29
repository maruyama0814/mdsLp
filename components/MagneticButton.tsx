import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
}

export const MagneticButton: React.FC<ButtonProps> = ({ children, variant = 'solid', className = '', ...props }) => {
  const baseStyles = "relative px-8 py-4 uppercase font-display tracking-widest text-sm transition-all duration-300 overflow-hidden group border border-black";
  
  const variants = {
    solid: "bg-black text-white hover:bg-white hover:text-black",
    outline: "bg-transparent text-black hover:bg-black hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};