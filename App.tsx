import React, { useState, useEffect } from 'react';
import { GlowBackground } from './components/GlowBackground';
import { ArticleContent } from './components/ArticleContent';
import { Sidebar } from './components/Sidebar';
import { ChristmasGame } from './components/ChristmasGame';
import { Menu, Gift, Sparkles, Facebook, Twitter, Instagram } from 'lucide-react';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D42426', '#165B33', '#F8B229', '#ffffff']
    });
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-christmas-red selection:text-white">
      <GlowBackground />
      
      {/* Game Modal */}
      {isGameOpen && <ChristmasGame onClose={() => setIsGameOpen(false)} />}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={triggerConfetti}>
            <div className="w-10 h-10 bg-gradient-to-br from-christmas-red to-red-800 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <Sparkles className="text-white" size={20} />
            </div>
            <span className="text-2xl font-serif font-bold text-white tracking-tight">
              Christmas<span className="text-christmas-gold">Chronicles</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#traditions" className="hover:text-christmas-gold transition-colors">Traditions</a>
            <a href="#decor" className="hover:text-christmas-gold transition-colors">Decor</a>
            <a href="#gifts" className="hover:text-christmas-gold transition-colors">Gift Guide</a>
            <a href="#recipes" className="hover:text-christmas-gold transition-colors">Recipes</a>
          </div>

          <button className="md:hidden text-white">
            <Menu />
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-20 container mx-auto px-4 lg:px-8">
        
        {/* Hero Section */}
        <section className="text-center py-16 lg:py-24 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-christmas-green/20 border border-christmas-green/40 text-christmas-green text-xs font-bold uppercase tracking-widest">
            A Timeless Tradition
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-2xl">
            The Magic of Christmas: <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-christmas-gold to-yellow-200">
              Shaping Culture & Connection
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover the rich history and modern evolution of the world's most beloved festival.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             {/* Game Trigger */}
            <button 
              onClick={() => setIsGameOpen(true)}
              className="group relative px-8 py-4 bg-christmas-red hover:bg-red-700 text-white rounded-lg font-bold shadow-lg shadow-red-900/50 transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative flex items-center gap-2">
                <Gift className="animate-pulse" />
                Play Gift Dash
              </div>
            </button>
            
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-medium transition-colors">
              Read the Story
            </button>
          </div>
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* Main Article */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 lg:p-12 shadow-xl">
              <ArticleContent />
            </div>
            
            {/* Author / Bio Section */}
            <div className="mt-8 flex items-center gap-6 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-slate-700 overflow-hidden shrink-0">
                <img src="https://picsum.photos/100/100?grayscale" alt="Editor" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-white font-bold font-serif">Editorial Team</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Curating stories of heritage, festivity, and modern lifestyle. Dedicated to bringing the warmth of the season to your screen.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <Sidebar />
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-950 border-t border-slate-900 pt-16 pb-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-christmas-gold rounded flex items-center justify-center">
              <Sparkles className="text-slate-900" size={16} />
            </div>
            <span className="text-xl font-serif font-bold text-white">Christmas Chronicles</span>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-sm text-slate-400 mb-12">
            <a href="#" className="hover:text-christmas-gold">About Us</a>
            <a href="#" className="hover:text-christmas-gold">Privacy Policy</a>
            <a href="#" className="hover:text-christmas-gold">Advertising</a>
            <a href="#" className="hover:text-christmas-gold">Contact</a>
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Christmas Chronicles. All rights reserved. <br />
            Designed with festive cheer.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;