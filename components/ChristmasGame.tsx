import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Gift, X, Play, Timer, Zap } from 'lucide-react';

interface GameItem {
  id: number;
  x: number;
  y: number;
  baseSpeed: number;
  type: 'gift' | 'coal';
}

export const ChristmasGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const itemsRef = useRef<GameItem[]>([]);
  const scoreRef = useRef(0);
  const timeRef = useRef(60);
  const speedMultiplierRef = useRef(1.0);
  
  // Game Configuration
  const SPAWN_RATE = 40; 
  const GRAVITY = 3; 

  // Handle resizing with Device Pixel Ratio (DPR) support
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const updateCanvasSize = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (container && canvas) {
        // Get the device pixel ratio, falling back to 1.
        const dpr = window.devicePixelRatio || 1;
        
        // Get the logical size (CSS pixels)
        const rect = container.getBoundingClientRect();

        // Set the actual internal resolution of the canvas
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        // Scale the context to ensure drawing operations use CSS pixels conceptually
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.scale(dpr, dpr);
        }
      }
    };

    // Initial sizing
    updateCanvasSize();

    // Use ResizeObserver for accurate detection of size changes (e.g., toolbar show/hide)
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    resizeObserver.observe(containerRef.current);

    // Also add window resize listener as a backup
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  const spawnItem = useCallback((containerWidth: number) => {
    const isCoal = Math.random() > 0.75; // 25% chance of coal
    // Keep items within horizontal bounds
    const maxX = Math.max(0, containerWidth - 60);
    const newItem: GameItem = {
      id: Date.now() + Math.random(),
      x: Math.random() * maxX, 
      y: -60,
      baseSpeed: GRAVITY + Math.random() * 2,
      type: isCoal ? 'coal' : 'gift'
    };
    itemsRef.current.push(newItem);
  }, []);

  const updateGame = useCallback((timestamp: number) => {
    if (!canvasRef.current || !containerRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use container dimensions for logic (CSS pixels), not canvas.width (Device pixels)
    const logicWidth = containerRef.current.clientWidth;
    const logicHeight = containerRef.current.clientHeight;

    if (timeRef.current <= 0) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    // Clear canvas - note: we clear based on internal resolution or use a massive rect
    // Since we scaled the context, clearing 0,0 to logicWidth,logicHeight works
    ctx.clearRect(0, 0, logicWidth, logicHeight);

    // Spawn logic
    if (Math.random() < (1 / SPAWN_RATE)) {
      spawnItem(logicWidth);
    }

    // Update items position
    itemsRef.current.forEach(item => {
      item.y += item.baseSpeed * speedMultiplierRef.current;
    });

    // Handle off-screen items (Remove & Apply Penalties)
    itemsRef.current = itemsRef.current.filter(item => {
      const isOffScreen = item.y >= logicHeight;
      if (isOffScreen) {
        // Penalty: If a gift is missed, reduce time by 1s
        if (item.type === 'gift') {
          timeRef.current = Math.max(0, timeRef.current - 1);
          setTimeLeft(timeRef.current);
        }
        return false; // Remove item
      }
      return true; // Keep item
    });

    // Draw Items
    itemsRef.current.forEach(item => {
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      if (item.type === 'gift') {
        ctx.fillStyle = "#D42426"; // Christmas Red
        ctx.fillRect(item.x, item.y, 50, 50);
        
        ctx.fillStyle = "#F8B229"; // Gold Ribbon
        ctx.fillRect(item.x + 20, item.y, 10, 50); // Vertical
        ctx.fillRect(item.x, item.y + 20, 50, 10); // Horizontal
        
        // Add a slight outline for better visibility against dark backgrounds
        ctx.strokeStyle = "rgba(255,255,255,0.3)";
        ctx.lineWidth = 2;
        ctx.strokeRect(item.x, item.y, 50, 50);

      } else {
        ctx.fillStyle = "#1e293b"; // Coal Dark
        ctx.beginPath();
        ctx.arc(item.x + 25, item.y + 25, 20, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = "#334155"; 
        ctx.font = "24px sans-serif";
        ctx.fillText("⚫", item.x + 25, item.y + 28);
      }
    });

    if (isPlaying && !gameOver) {
      requestRef.current = requestAnimationFrame(updateGame);
    }
  }, [isPlaying, gameOver, spawnItem]);

  // Timer Countdown
  useEffect(() => {
    if (isPlaying && !gameOver) {
      const interval = setInterval(() => {
        timeRef.current = Math.max(0, timeRef.current - 1);
        setTimeLeft(timeRef.current);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, gameOver]);

  // Animation Loop
  useEffect(() => {
    if (isPlaying && !gameOver) {
      requestRef.current = requestAnimationFrame(updateGame);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, gameOver, updateGame]);

  const handleInteraction = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || gameOver || !isPlaying) return;
    
    // Prevent default browser actions
    e.preventDefault();

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // Since we handle drawing in logic pixels (CSS pixels), we just need the click pos in CSS pixels.
    // rect.left/top are in CSS pixels. e.clientX/Y are in CSS pixels.
    // No advanced scaling needed if width/height attributes match rect (handled by DPR scaling in updateCanvasSize)
    // However, for safety, let's calculate the ratio of logical draw space to visual space.
    
    // Current logical drawing width (set in updateCanvasSize via ctx.scale) matches clientWidth effectively.
    // So clickX should just be relative to the element.
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Check collisions
    let hitSomething = false;

    // We filter items to remove the one that was clicked
    itemsRef.current = itemsRef.current.filter(item => {
      if (hitSomething) return true; // Only hit one item per tap

      // Center of item is item.x + 25, item.y + 25
      const centerX = item.x + 25;
      const centerY = item.y + 25;
      
      // Calculate distance
      const distance = Math.sqrt(Math.pow(clickX - centerX, 2) + Math.pow(clickY - centerY, 2));
      
      // Hit Radius: 50px (Generous)
      if (distance < 50) { 
        hitSomething = true;
        if (item.type === 'gift') {
          scoreRef.current += 10;
          timeRef.current += 2; // +2 seconds
          setTimeLeft(timeRef.current);
          speedMultiplierRef.current += 0.05; // Increase speed
        } else {
          scoreRef.current = Math.max(0, scoreRef.current - 20);
          timeRef.current = Math.max(0, timeRef.current - 1); // -1 second
          setTimeLeft(timeRef.current);
        }
        setScore(scoreRef.current);
        return false; // Remove item
      }
      return true; // Keep item
    });
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(60);
    scoreRef.current = 0;
    timeRef.current = 60;
    speedMultiplierRef.current = 1.0;
    itemsRef.current = [];
    setGameOver(false);
    setIsPlaying(true);
  };

  return (
    <div className="w-full flex justify-center py-12 px-4 sm:px-8">
      <div className="bg-slate-900 border-2 border-christmas-gold rounded-xl overflow-hidden shadow-2xl w-full max-w-5xl relative flex flex-col h-[70vh] min-h-[600px]">
        
        {/* Header */}
        <div className="bg-christmas-red p-3 flex justify-between items-center text-white shrink-0 shadow-md z-10">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Gift size={20} />
            Santa's Rush
          </h3>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded transition text-sm flex items-center gap-1">
            <X size={16} /> Close Game
          </button>
        </div>

        {/* Stats Bar */}
        <div className="bg-slate-800 p-2 grid grid-cols-3 gap-4 text-center shrink-0 border-b border-slate-700 z-10">
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">Score</span>
            <span className="text-xl font-bold text-christmas-gold">{score}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">Time</span>
            <span className={`text-xl font-bold font-mono ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
              {timeLeft}s
            </span>
          </div>
           <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">Speed</span>
            <span className="text-xl font-bold text-christmas-green flex items-center gap-1">
              <Zap size={14} fill="currentColor" />
              {((speedMultiplierRef.current - 0.95) * 100).toFixed(0)}%
            </span>
          </div>
        </div>

        {/* Game Area Container - This div defines the size */}
        <div 
          ref={containerRef}
          className="relative flex-grow bg-slate-900 cursor-crosshair overflow-hidden touch-none"
        >
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 bg-slate-900/80 backdrop-blur-sm">
              <Gift size={64} className="text-christmas-gold mb-4 animate-bounce" />
              <h2 className="text-3xl font-bold text-white mb-2">Ready?</h2>
              <div className="text-slate-300 text-sm mb-6 space-y-1">
                <p>🎁 Tap to Smash: <span className="text-green-400">+2s</span> & Speed Up</p>
                <p>⚫ Avoid Coal: <span className="text-red-400">-1s</span> penalty</p>
                <p>⏳ Missed Gift: <span className="text-red-400">-1s</span> penalty</p>
                <p>⏱️ Survive for <span className="text-christmas-gold">60s</span></p>
              </div>
              <button 
                onClick={startGame}
                className="bg-christmas-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-green-900/50"
              >
                <Play size={20} /> Start Game
              </button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 bg-slate-900/95 backdrop-blur-sm">
              <div className="text-christmas-gold mb-4">
                <Timer size={48} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Time's Up!</h2>
              <div className="bg-slate-800 px-8 py-4 rounded-xl border border-slate-700 mb-8">
                <span className="block text-slate-500 text-xs uppercase">Final Score</span>
                <span className="block text-4xl font-bold text-white">{score}</span>
              </div>
              <button 
                onClick={startGame}
                className="bg-christmas-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 flex items-center gap-2"
              >
                <Play size={20} /> Play Again
              </button>
            </div>
          )}

          <canvas 
            ref={canvasRef}
            className="block touch-none select-none w-full h-full"
            style={{ touchAction: 'none' }}
            onPointerDown={handleInteraction}
          />
        </div>
      </div>
    </div>
  );
};