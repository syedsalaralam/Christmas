import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { AdPlaceholder } from './AdPlaceholder';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-80 space-y-8">
      
      {/* Ad Placeholder where Subscribe used to be */}
      <AdPlaceholder format="rectangle" label="Sponsored Ad" />

      {/* Affiliate Products Placeholder */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <ShoppingBag className="text-christmas-gold" size={20} />
          <h3 className="font-serif text-lg text-white">
          <a href="https://otieu.com/4/10329233" target="_blank" rel="noopener noreferrer" className="group snap-center shrink-0 w-[70%] sm:w-auto">
              <div className=" aspect-[3/4] border border-white/5 bg-slate-800">
                <img src="https://static.cdnroute.io/land/start-trading/svstatic/assets/features/mockup__devices.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Christmas gift idea" />
              </div>
               <span className="block text-center text-xs mt-2 text-christmas-gold opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity"><h4>"Ads"</h4></span>
            </a>
          </h3>
        </div>
        
      
      </div>
<div>
      
          <a href="https://www.effectivegatecpm.com/cc3uaikdap?key=e0f1cdc60201ea32d7578e3f6cb3d9b6" target="_blank" rel="noopener noreferrer" className="group snap-center shrink-0 w-[70%] sm:w-auto">
              <div className="flex justify-center">
                <img src="https://adsterra.com/_nuxt/img/logo_desktop.1932b11.svg" className="" alt="Christmas gift idea" />
              </div>
               <span className="block text-center text-xs mt-2 text-christmas-gold opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity"><h4>"Ads"</h4></span>
            </a>
      
          
</div>
    </aside>
  );
};