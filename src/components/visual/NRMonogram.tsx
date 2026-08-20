import React from 'react';

interface NRMonogramProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'teal' | 'navy' | 'white' | 'glass';
  className?: string;
}

export const NRMonogram: React.FC<NRMonogramProps> = ({
  size = 'md',
  variant = 'teal',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs rounded-lg',
    md: 'w-11 h-11 text-sm rounded-xl',
    lg: 'w-14 h-14 text-base rounded-2xl',
    xl: 'w-20 h-20 text-2xl rounded-3xl',
  };

  const variantClasses = {
    teal: 'bg-gradient-to-br from-teal-600 via-teal-500 to-navy-900 text-white shadow-md shadow-teal-700/20 border border-teal-400/30',
    navy: 'bg-navy-900 text-white border border-navy-700 shadow-md',
    white: 'bg-white text-navy-900 shadow-md border border-slate-100',
    glass: 'bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center font-heading font-extrabold tracking-wider select-none shrink-0 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
    >
      <span className="relative z-10 flex items-center justify-center space-x-[1px]">
        <span className="text-white drop-shadow-sm">N</span>
        <span className="text-teal-200 drop-shadow-sm">R</span>
      </span>
      {/* Subtle shine accent */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-transparent via-white/10 to-white/25 pointer-events-none" />
    </div>
  );
};
