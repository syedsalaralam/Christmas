import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl shadow-black/50 p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
        
        <div className="bg-christmas-green/20 p-3 rounded-full shrink-0">
          <ShieldCheck className="text-christmas-green" size={24} />
        </div>

        <div className="flex-1">
          <h4 className="text-white font-bold mb-2">We Value Your Privacy</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            We use cookies and third-party ad partners (including Google and Monetag) to personalize content, serve relevant ads, and analyze our traffic. By clicking "Accept", you consent to our use of cookies as described in our Privacy Policy.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-3 bg-christmas-gold hover:bg-yellow-500 text-slate-900 font-bold rounded-lg transition-colors shadow-lg shadow-yellow-900/20 whitespace-nowrap"
          >
            Accept All
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-2 text-slate-500 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};