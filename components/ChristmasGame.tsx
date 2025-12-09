import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Gift, X, Play, RefreshCw, Trophy } from 'lucide-react';

interface GameItem {
  id: number;
  x: number;
  y: number;
  speed: number;
  type: 'gift' | 'coal';
}

export const ChristmasGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const itemsRef = useRef<GameItem[]>([]);
  const scoreRef = useRef(0);
  
  // Game Configuration
  const SPAWN_RATE = 50; // Frames between spawns
  const GRAVITY = 2; // Base speed
  
  const spawnItem = useCallback((width: number) => {
    const isCoal = Math.random() > 0.8; // 20% chance of coal
    const newItem: GameItem = {
      id: Date.now() + Math.random(),
      x: Math.random() * (width - 40),
      y: -50,
      speed: GRAVITY + Math.random() * 2,
      type: isCoal ? 'coal' : 'gift'
    };
    itemsRef.current.push(newItem);
  }, []);

  const updateGame = useCallback(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Spawn logic
    if (Math.random() < 1 / SPAWN_RATE) {
      spawnItem(canvas.width);
    }

    // Update items
    itemsRef.current.forEach(item => {
      item.y += item.speed;
    });

    // Remove off-screen items
    itemsRef.current = itemsRef.current.filter(item => item.y < canvas.height);

    // Draw Items
    itemsRef.current.forEach(item => {
      ctx.font = "30px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      if (item.type === 'gift') {
        ctx.fillStyle = "#D42426";
        // Draw Gift Box
        ctx.fillRect(item.x, item.y, 40, 40);
        ctx.fillStyle = "#F8B229";
        ctx.fillRect(item.x + 15, item.y, 10, 40); // Ribbon vertical
        ctx.fillRect(item.x, item.y + 15, 40, 10); // Ribbon horizontal
      } else {
        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.arc(item.x + 20, item.y + 20, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#334155"; // Highlight
        ctx.fillText("⚫", item.x + 20, item.y + 22);
      }
    });

    // Check game over condition (optional, for now just endless score)
    // If we wanted coal to end game, we'd check clicks.
    
    if (isPlaying && !gameOver) {
      requestRef.current = requestAnimationFrame(updateGame);
    }
  }, [isPlaying, gameOver, spawnItem]);

  useEffect(() => {
    if (isPlaying && !gameOver) {
      requestRef.current = requestAnimationFrame(updateGame);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, gameOver, updateGame]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || gameOver || !isPlaying) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check collisions
    let hit = false;
    itemsRef.current = itemsRef.current.filter(item => {
      const distance = Math.sqrt(Math.pow(x - (item.x + 20), 2) + Math.pow(y - (item.y + 20), 2));
      if (distance < 40) {
        if (item.type === 'gift') {
          scoreRef.current += 10;
          setScore(scoreRef.current);
        } else {
          scoreRef.current -= 20; // Coal penalty
          setScore(scoreRef.current);
          // Optional: End game on coal
          // setGameOver(true);
        }
        hit = true;
        return false; // Remove item
      }
      return true;
    });
  };

  const startGame = () => {
    setScore(0);
    scoreRef.current = 0;
    itemsRef.current = [];
    setGameOver(false);
    setIsPlaying(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border-2 border-christmas-gold rounded-xl overflow-hidden shadow-2xl w-full max-w-md relative flex flex-col">
        {/* Header */}
        <div className="bg-christmas-red p-4 flex justify-between items-center text-white">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Gift size={20} />
            Santa's Gift Dash
          </h3>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded transition">
            <X size={20} />
          </button>
        </div>

        {/* Game Area */}
        <div className="relative bg-slate-800 aspect-[3/4] cursor-crosshair">
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
              <Gift size={64} className="text-christmas-gold mb-4 animate-bounce" />
              <h2 className="text-2xl font-bold text-white mb-2">Help Santa!</h2>
              <p className="text-slate-300 mb-6">Click the falling gifts to collect them. Avoid the coal!</p>
              <button 
                onClick={startGame}
                className="bg-christmas-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 flex items-center gap-2"
              >
                <Play size={20} /> Start Game
              </button>
            </div>
          )}

          <canvas 
            ref={canvasRef}
            width={400} 
            height={533}
            className="w-full h-full block"
            onClick={handleCanvasClick}
          />
          
          <div className="absolute top-4 right-4 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-700 text-christmas-gold font-mono text-xl font-bold pointer-events-none">
            {score} pts
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-900 p-4 border-t border-slate-800 text-center text-xs text-slate-500">
          Click fast! Gifts disappear quickly.
        </div>
      </div>
    </div>
  );
};