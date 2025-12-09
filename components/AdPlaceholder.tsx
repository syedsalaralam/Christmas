import React from 'react';

interface AdPlaceholderProps {
  format?: 'horizontal' | 'rectangle' | 'vertical';
  label?: string;
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ 
  format = 'horizontal', 
  label = 'Advertisement',
  className = ''
}) => {
  // In a real implementation, you would replace the div below with the Google AdSense <ins> tag logic
  // e.g., (window.adsbygoogle = window.adsbygoogle || []).push({});

  const sizeClasses = {
    horizontal: 'w-full h-24 sm:h-32',
    rectangle: 'w-full h-64',
    vertical: 'w-full h-[600px]'
  };

  return (
    <div className={`my-8 flex flex-col items-center justify-center ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
        {label}
      </span>
      <div className={`${sizeClasses[format]} bg-slate-900/50 border border-slate-800 rounded-lg flex items-center justify-center overflow-hidden relative group`}>
        {/* Placeholder Visuals */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20 animate-pulse" />
        <span className="text-slate-600 text-sm font-medium z-10 relative">
          Google Ad Slot ({format})
        </span>
        <div className="absolute bottom-2 right-2 text-xs text-slate-700">
          AdSense Ready
        </div>
      </div>
    </div>
  );
};