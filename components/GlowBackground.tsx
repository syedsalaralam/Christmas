import React, { useEffect, useState, useMemo } from 'react';

// Helper to generate random box-shadow coordinates for a "snow" layer
// This creates a seamless loop by duplicating particles at y and y-100vh
const generateSnow = (count: number) => {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100; // random vw position
    const y = Math.random() * 100; // random vh position
    const blur = Math.random() * 2; // slight blur variation
    
    // Push the shadow at (x, y) and its seamless loop counterpart at (x, y - 100vh)
    shadows.push(`${x}vw ${y}vh ${blur}px #fff`);
    shadows.push(`${x}vw ${y - 100}vh ${blur}px #fff`);
  }
  return shadows.join(', ');
};

export const GlowBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [snowLayers, setSnowLayers] = useState<string[]>([]);
  const [isBlackBg, setIsBlackBg] = useState(false);

  useEffect(() => {
    // Toggle background color every 20 seconds for a slow cycle
    const interval = setInterval(() => {
      setIsBlackBg((prev) => !prev);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate snow layers on client-side to ensure hydration consistency
    // Layer 1 (Small, Far): 120 particles
    // Layer 2 (Medium, Mid): 60 particles
    // Layer 3 (Large, Near): 30 particles
    setSnowLayers([
      generateSnow(120),
      generateSnow(60),
      generateSnow(30)
    ]);
  }, []);

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
    <div 
      className={`fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-[10000ms] ease-in-out ${isBlackBg ? 'bg-black' : 'bg-slate-950'}`}
    >
      
      {/* Styles for Snow Animation */}
      <style>{`
        @keyframes snowfall-slow {
          from { transform: translateY(0); }
          to { transform: translateY(100vh); }
        }
        @keyframes snowfall-med {
          from { transform: translateY(0) translateX(-15px); }
          to { transform: translateY(100vh) translateX(15px); }
        }
        @keyframes snowfall-fast {
          from { transform: translateY(0) translateX(20px); }
          to { transform: translateY(100vh) translateX(-20px); }
        }
      `}</style>

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
      
      {/* 
        SNOWFALL LAYERS 
        Using box-shadow technique for high performance (1 DOM node per layer)
      */}
      {snowLayers.length > 0 && (
        <>
          {/* Layer 1: Small, Far, Slow */}
          <div 
            className="absolute top-0 left-0 w-[2px] h-[2px] rounded-full opacity-40"
            style={{ 
              boxShadow: snowLayers[0],
              animation: 'snowfall-slow 40s linear infinite'
            }}
          />
          
          {/* Layer 2: Medium, Mid-ground */}
          <div 
            className="absolute top-0 left-0 w-[3px] h-[3px] rounded-full opacity-60"
            style={{ 
              boxShadow: snowLayers[1],
              animation: 'snowfall-med 25s linear infinite'
            }}
          />
          
          {/* Layer 3: Large, Near, Fast */}
          <div 
            className="absolute top-0 left-0 w-[4px] h-[4px] rounded-full opacity-80"
            style={{ 
              boxShadow: snowLayers[2],
              animation: 'snowfall-fast 15s linear infinite'
            }}
          />
        </>
      )}

      {/* Texture Overlay (Grain) */}
      <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    </div>
  );
};