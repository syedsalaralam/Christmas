import React from 'react';
import { AdPlaceholder } from './AdPlaceholder';

export const ArticleContent: React.FC = () => {
  return (
    <article className="prose prose-lg prose-invert max-w-none text-slate-300">
      
      {/* Intro */}
      <p className="lead text-xl md:text-2xl text-slate-100 font-serif leading-relaxed mb-8">
        Every December, the world transforms. Streets light up with glowing colors, homes fill with warmth, and hearts open a little wider. 
        Christmas, one of the most celebrated festivals across the globe, carries a legacy far beyond gifts and gatherings—it is a story of history, culture, connection, and evolving traditions that continue to shape our modern world.
      </p>

      <AdPlaceholder format="horizontal" className="my-10" label="In-Article Ad" />

      {/* History Section */}
      <h2 id="history" className="text-3xl font-bold text-christmas-gold mt-12 mb-6 font-serif scroll-mt-28">A Journey Through History: Where Christmas Began</h2>
      <p className="mb-4">
        The origins of Christmas trace back over two thousand years, celebrated as the birth of Jesus Christ. Yet the celebration as we know it today is a blend of early Christian beliefs, ancient winter solstice festivals, and centuries of cultural adaptation.
      </p>
      <div className="relative h-64 md:h-80 w-full my-8 rounded-xl overflow-hidden shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Vintage Christmas Scene" 
          className="object-cover w-full h-full opacity-80 hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-sm text-slate-300 italic">Ancient traditions paved the way for modern celebrations.</p>
        </div>
      </div>
      <p className="mb-6">
        From the Roman festival Saturnalia to the medieval feasts of Europe, Christmas evolved as humanity’s way of welcoming hope, light, and new beginnings during the darkest days of winter. This long, rich history is what gives Christmas its timeless charm—a festival rooted in meaning, shaped by tradition, and constantly reinvented by each generation.
      </p>

      {/* Rituals Section (Linked to 'Traditions') */}
      <h2 id="traditions" className="text-3xl font-bold text-christmas-gold mt-12 mb-6 font-serif scroll-mt-28">Rituals & Traditions: The Heart of the Celebration</h2>
      <p className="mb-4">Every country adds its own color to Christmas.</p>
      
      <ul className="list-none space-y-8 my-6 pl-0">
        
        {/* Decor Section */}
        <li id="decor" className="scroll-mt-32 flex flex-col gap-2 p-6 bg-slate-800/30 rounded-lg border-l-4 border-christmas-green">
          <div className="flex items-center gap-3">
            <span className="text-christmas-red text-xl">🎄</span>
            <span className="text-lg font-bold text-slate-200">Decorating</span>
          </div>
          <p>Decorating trees, a tradition born in 16th-century Germany, now symbolizes joy and renewal.</p>
          
          {/* Ad Slot for Decor */}
          <AdPlaceholder format="horizontal" className="mt-4" label="Affiliate Slot: Decor & Lights" />
        </li>

        {/* Gifts Section */}
        <li id="gifts" className="scroll-mt-32 flex flex-col gap-2 p-6 bg-slate-800/30 rounded-lg border-l-4 border-christmas-red">
          <div className="flex items-center gap-3">
            <span className="text-christmas-gold text-xl">🎁</span>
            <span className="text-lg font-bold text-slate-200">Gift Giving</span>
          </div>
          <p>Exchanging gifts reflects centuries-old values of generosity and goodwill.</p>
          
          {/* Ad Slot for Gifts */}
          <AdPlaceholder format="horizontal" className="mt-4" label="Affiliate Slot: Top Gifts" />
        </li>

        {/* Recipes Section */}
        <li id="recipes" className="scroll-mt-32 flex flex-col gap-2 p-6 bg-slate-800/30 rounded-lg border-l-4 border-christmas-green">
          <div className="flex items-center gap-3">
            <span className="text-christmas-red text-xl">🦃</span>
            <span className="text-lg font-bold text-slate-200">Feasts & Recipes</span>
          </div>
          <p>Festive meals, whether it’s turkey, roast, cookies, or regional delicacies, bring families together in a moment of shared abundance.</p>
          
           {/* Ad Slot for Kitchen/Recipes */}
           <AdPlaceholder format="horizontal" className="mt-4" label="Affiliate Slot: Kitchenware & Cookbooks" />
        </li>
      </ul>
      <p className="mb-6">
        Even simple rituals like hanging stockings or lighting candles carry stories passed down through time. These traditions create a sense of identity and continuity—reminding us that even in a fast-paced world, some moments deserve to be cherished slowly.
      </p>

      <AdPlaceholder format="rectangle" className="my-12" label="Mid-Content Ad" />

      {/* Modern Era */}
      <h2 className="text-3xl font-bold text-christmas-gold mt-12 mb-6 font-serif">Christmas in the Modern Era: More Connected Than Ever</h2>
      <p className="mb-4">
        As the world becomes more digital, Christmas has embraced modernity without losing its soul. Families video-call from different continents, online communities share recipes and décor ideas, and holiday celebrations have become beautifully hybrid—mixing old customs with new technology.
      </p>
      <p className="mb-6">
        This global connectivity has transformed Christmas into a celebration that feels personal, no matter where you are. It is a season of sharing, discovering, creating, and inspiring.
      </p>

      {/* Social Importance */}
      <div className="bg-gradient-to-br from-christmas-green/20 to-slate-900 border border-christmas-green/30 p-8 rounded-2xl my-10">
        <h3 className="text-2xl font-bold text-white mb-4 font-serif">The Social Importance of Christmas Today</h3>
        <p className="mb-4 text-slate-200">Beyond sparkling lights and festive melodies, Christmas plays a powerful social role:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Strengthens family bonds', 'Encourages kindness & charity', 'Facilitates cultural exchange', 'Offers a pause from daily stress'].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-christmas-gold rounded-full"></div>
              <span className="text-slate-300">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-200 italic">
          In a world filled with noise and rush, Christmas stands as a reminder of warmth, gratitude, and human connection.
        </p>
      </div>

      {/* Economy */}
      <h2 className="text-3xl font-bold text-christmas-gold mt-12 mb-6 font-serif">A Festival That Drives Celebration—and the Economy</h2>
      <p className="mb-4">
        Christmas is not only culturally significant—it is one of the world’s biggest seasonal economic events. The holiday season boosts creativity, craftsmanship, entrepreneurship, and innovation across industries.
      </p>
      <p className="mb-6">
        Homes glow with stylish décor, people explore unique gifts, and creative businesses flourish. This natural rise in festive interest makes Christmas a time when inspiration blends beautifully with thoughtful choices that enhance the season.
      </p>

      <AdPlaceholder format="horizontal" className="my-10" label="Bottom Banner Ad" />

      {/* Conclusion */}
      <h2 className="text-3xl font-bold text-christmas-gold mt-12 mb-6 font-serif">The Beauty of Christmas: Where Past Meets Future</h2>
      <p className="mb-4">
        Christmas is more than a date on the calendar. It is a tapestry woven with tradition, emotion, and modern expression. Its magic lies in how it evolves—how each year brings new ideas, new memories, and new ways to celebrate.
      </p>
      <p className="mb-8">
        Whether you cherish the nostalgic charm of classic traditions or love exploring fresh, creative trends, Christmas has a way of making every moment feel special. It is a festival that invites you to decorate your space beautifully, choose meaningful gifts, celebrate style, and create stories worth keeping.
      </p>
      
      <div className="text-center p-8 border-t border-b border-christmas-gold/30 my-12">
        <p className="text-2xl font-serif text-white">"As the season arrives again, may your heart be open, your home warm, and your celebrations full of wonder."</p>
      </div>

    </article>
  );
};