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
          <h3 className="font-serif text-lg text-white">Holiday Deals</h3>
        </div>
        
        {/* Flexible container for Amazon Native Shopping Ads or Affiliate Grids */}
        <div className="min-h-[300px] border-2 border-dashed border-slate-700 bg-slate-800/30 rounded-lg flex flex-col items-center justify-center text-center p-4">
          <span className="text-slate-500 text-xs uppercase tracking-widest mb-2">Amazon / Affiliate Ad Space</span>
          <p className="text-slate-400 text-xs px-4">
            Place your Amazon Native Shopping Ads script or custom product grid code here.
            <br/><br/>
            (e.g., amzn_assoc_placement = "adunit0";)
          </p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-800 text-center">
          <p className="text-[10px] text-slate-500">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </div>

      <AdPlaceholder format="vertical" className="hidden lg:flex" label="Vertical Banner Ad" />

    </aside>
  );
};