import React, { useState, useRef } from 'react';
import { GlowBackground } from './components/GlowBackground';
import { ArticleContent } from './components/ArticleContent';
import { Sidebar } from './components/Sidebar';
import { ChristmasGame } from './components/ChristmasGame';
import { CookieConsent } from './components/CookieConsent';
import { Gift, Sparkles, Facebook, Twitter, Instagram, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const gameSectionRef = useRef<HTMLDivElement>(null);

  const handlePlayGame = () => {
    setIsGameOpen(true);
    setTimeout(() => {
      gameSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const navLinks = [
    { name: 'History', href: '#history' },
    { name: 'Traditions', href: '#traditions' },
    { name: 'Sustainability', href: '#sustainable' },
    { name: 'Psychology', href: '#psychology' },
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-christmas-red selection:text-white">
      <GlowBackground />
      
      {/* Sticky Navigation Header - Critical for AdSense UX Approval */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="text-christmas-gold" size={20} />
            <span className="text-lg font-serif font-bold text-white tracking-tight">Christmas Chronicles</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm text-slate-300 hover:text-christmas-gold transition-colors font-medium">
                {link.name}
              </a>
            ))}
            <button 
              onClick={handlePlayGame}
              className="px-4 py-1.5 bg-christmas-red text-white text-xs font-bold rounded-full hover:bg-red-700 transition-colors"
            >
              Play Game
            </button>
          </nav>

          <button className="md:hidden text-slate-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block text-slate-300 py-2 border-b border-slate-800 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10 pt-28 pb-20 container mx-auto px-4 lg:px-8">
        
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-christmas-green/20 border border-christmas-green/40 text-christmas-green text-xs font-bold uppercase tracking-widest">
            2025 Holiday Special Edition
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-2xl">
            The Magic of <span className="text-christmas-red">Christmas</span> 2025
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Exploring the rich history, ancient origins, and the modern spirit of connection that defines the world's most beloved festival.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handlePlayGame}
              className="px-8 py-4 bg-christmas-red hover:bg-red-700 text-white rounded-lg font-bold shadow-lg shadow-red-900/50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Gift size={20} /> Play Santa Rush
            </button>
            <a href="#history" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-medium transition-colors flex items-center justify-center">
              Explore History
            </a>
          </div>
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-20">
          <div className="lg:col-span-2">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-12 shadow-xl">
              <ArticleContent />
            </div>
            
            <div className="mt-8 flex items-center gap-6 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-slate-700 overflow-hidden shrink-0">
                <img src="https://picsum.photos/100/100?grayscale" alt="Editor" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-white font-bold font-serif">Editorial Team</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Our team is dedicated to documenting cultural heritage and modern celebrations. We verify all historical claims to provide a high-value resource for our readers.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Sidebar />
            </div>
          </div>
        </div>
        
        {isGameOpen && (
          <div ref={gameSectionRef} className="animate-in fade-in slide-in-from-bottom-10 duration-700 scroll-mt-24">
            <ChristmasGame onClose={() => setIsGameOpen(false)} />
          </div>
        )}

      </main>

      <footer className="relative z-10 bg-slate-950 border-t border-slate-900 pt-16 pb-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            <Sparkles className="text-christmas-gold" size={24} />
            <span className="text-xl font-serif font-bold text-white">Christmas Chronicles</span>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-sm text-slate-400 mb-12">
            <a href="#" className="hover:text-christmas-gold">About Our Mission</a>
            <a href="#" className="hover:text-christmas-gold">Privacy Policy</a>
            <a href="#" className="hover:text-christmas-gold">Ad Transparency</a>
            <a href="#" className="hover:text-christmas-gold">Contact Editor</a>
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Christmas Chronicles Editorial. All content is original and protected by copyright law. <br />
            Proudly serving the holiday community since 2024.
          </p>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
};

export default App;