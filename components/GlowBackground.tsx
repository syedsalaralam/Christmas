import React, { useEffect, useState } from 'react';

export const GlowBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-slate-950" />
      
      {/* Moving festive glow */}
      <div 
        className="absolute w-[600px] h-[600px] bg-christmas-red/10 rounded-full blur-[100px] transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
        }}
      />
      
      <div 
        className="absolute w-[400px] h-[400px] bg-christmas-green/10 rounded-full blur-[80px] transition-transform duration-500 ease-out will-change-transform"
        style={{
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
        }}
      />

      {/* Static ambient lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-christmas-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-christmas-green/5 rounded-full blur-[120px]" />
      
      {/* Snowfall effect overlay (CSS only for performance) */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    </div>
  );
};