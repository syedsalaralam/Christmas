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
  const requestRef = useRef<number>(0);
  const itemsRef = useRef<GameItem[]>([]);
  const scoreRef = useRef(0);
  const timeRef = useRef(60);
  const speedMultiplierRef = useRef(1.0);
  
  // Game Configuration
  const SPAWN_RATE = 40; 
  const GRAVITY = 3; 

  const spawnItem = useCallback((width: number) => {
    const isCoal = Math.random() > 0.75; // 25% chance of coal
    const newItem: GameItem = {
      id: Date.now() + Math.random(),
      x: Math.random() * (width - 60), // Keep within bounds
      y: -60,
      baseSpeed: GRAVITY + Math.random() * 2,
      type: isCoal ? 'coal' : 'gift'
    };
    itemsRef.current.push(newItem);
  }, []);

  const updateGame = useCallback((timestamp: number) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (timeRef.current <= 0) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Spawn logic
    if (Math.random() < (1 / SPAWN_RATE)) {
      spawnItem(canvas.width);
    }

    // Update items position
    itemsRef.current.forEach(item => {
      item.y += item.baseSpeed * speedMultiplierRef.current;
    });

    // Handle off-screen items (Remove & Apply Penalties)
    itemsRef.current = itemsRef.current.filter(item => {
      const isOffScreen = item.y >= canvas.height;
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
    let interval: NodeJS.Timeout;
    if (isPlaying && !gameOver) {
      interval = setInterval(() => {
        timeRef.current = Math.max(0, timeRef.current - 1);
        setTimeLeft(timeRef.current);
      }, 1000);
    }
    return () => clearInterval(interval);
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

  const handleCanvasInteraction = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || gameOver || !isPlaying) return;

    // Get exact click coordinates relative to canvas scaling
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;
    
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;

    // Check collisions
    itemsRef.current = itemsRef.current.filter(item => {
      // Center of item is item.x + 25, item.y + 25 (since width/height is 50)
      const centerX = item.x + 25;
      const centerY = item.y + 25;
      const distance = Math.sqrt(Math.pow(clickX - centerX, 2) + Math.pow(clickY - centerY, 2));
      
      if (distance < 50) { // Generous hit radius
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

        {/* Game Area */}
        <div className="relative flex-grow bg-slate-900 cursor-crosshair overflow-hidden">
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 bg-slate-900/80 backdrop-blur-sm">
              <Gift size={64} className="text-christmas-gold mb-4 animate-bounce" />
              <h2 className="text-3xl font-bold text-white mb-2">Ready?</h2>
              <div className="text-slate-300 text-sm mb-6 space-y-1">
                <p>🎁 Click to Smash: <span className="text-green-400">+2s</span> & Speed Up</p>
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
            width={1200} 
            height={800}
            className="w-full h-full block touch-none"
            onMouseDown={handleCanvasInteraction}
          />
        </div>
      </div>
    </div>
  );
};