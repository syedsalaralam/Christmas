import React from 'react';
import { AdPlaceholder } from './AdPlaceholder';

export const ArticleContent: React.FC = () => {
  return (
    <article className="prose prose-lg prose-invert max-w-none text-slate-300 font-sans">

      {/* Intro */}
      <p className="lead text-xl md:text-2xl text-slate-100 font-serif leading-loose mb-10 tracking-wide">
        Every December, the world transforms. Streets light up with glowing colors, homes fill with warmth, and hearts open a little wider.
        <br /><br />
        Christmas, one of the most celebrated festivals across the globe, carries a legacy far beyond gifts and gatherings—it is a story of history, culture, connection, and evolving traditions that continue to shape our modern world.
      </p>

      {/* AdSense Policy: Clear separation between content and ads */}
      <div className="py-4">
        <AdPlaceholder format="horizontal" className="my-10" label="Advertisement" />
      </div>

      {/* History Section */}
      <h2 id="history" className="text-3xl font-bold text-christmas-gold mt-14 mb-8 font-serif scroll-mt-28 border-b border-white/10 pb-4">
        A Journey Through History: Where Christmas Began
      </h2>
      <p className="mb-6 leading-8">
        The origins of Christmas trace back over two thousand years, celebrated as the birth of Jesus Christ. Yet the celebration as we know it today is a blend of early Christian beliefs, ancient winter solstice festivals, and centuries of cultural adaptation.
      </p>
      
      <div className="relative h-64 md:h-96 w-full my-10 rounded-xl overflow-hidden shadow-2xl border border-white/10">
        <img
          src="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=1170&auto=format&fit=crop"
          alt="Vintage Christmas Scene showing historical decorations"
          className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
          <p className="text-sm text-slate-200 italic font-serif">Ancient traditions paved the way for modern celebrations.</p>
        </div>
      </div>
      
      <p className="mb-8 leading-8">
        From the Roman festival Saturnalia to the medieval feasts of Europe, Christmas evolved as humanity’s way of welcoming hope, light, and new beginnings during the darkest days of winter. This long, rich history is what gives Christmas its timeless charm—a festival rooted in meaning, shaped by tradition, and constantly reinvented by each generation.
      </p>

      {/* Rituals Section */}
      <h2 id="traditions" className="text-3xl font-bold text-christmas-gold mt-16 mb-8 font-serif scroll-mt-28 border-b border-white/10 pb-4">
        Rituals & Traditions: The Heart of the Celebration
      </h2>
      <p className="mb-8 text-lg text-slate-200">Every country adds its own color to Christmas. Here are the universal pillars of the season:</p>

      <ul className="list-none space-y-12 my-8 pl-0">

        {/* Decor Section */}
        <li id="decor" className="scroll-mt-32 flex flex-col gap-4 p-8 bg-slate-800/40 rounded-xl border-l-4 border-christmas-green shadow-lg">
          <div className="flex items-center gap-4 mb-2">
            <span className="flex items-center justify-center w-12 h-12 bg-christmas-green/20 rounded-full text-2xl">🎄</span>
            <span className="text-xl font-bold text-white">The Art of Decorating</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Decorating trees, a tradition born in 16th-century Germany, now symbolizes joy and renewal. It transforms a simple living space into a festive sanctuary.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            <a href="https://amzn.to/3L1v42S" target="_blank" rel="noopener noreferrer" className="group">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] border border-white/5">
                <img src="https://m.media-amazon.com/images/I/81MbJAxu+3L._AC_UL320_.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Christmas tree decoration" />
              </div>
              <span className="block text-center text-xs mt-2 text-christmas-gold opacity-0 group-hover:opacity-100 transition-opacity">View Item</span>
            </a>
            <a href="https://amzn.to/3MAPvV2" target="_blank" rel="noopener noreferrer" className="group hidden sm:block">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] border border-white/5">
                <img src="https://m.media-amazon.com/images/I/814B16YNuJL._AC_UL320_.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Christmas gift idea" />
              </div>
               <span className="block text-center text-xs mt-2 text-christmas-gold opacity-0 group-hover:opacity-100 transition-opacity">View Item</span>
            </a>
            <a href="https://amzn.to/4oROYva" target="_blank" rel="noopener noreferrer" className="group hidden sm:block">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] border border-white/5">
                <img src="https://m.media-amazon.com/images/I/91gcsaTU91L._AC_UL320_.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Festive decor" />
              </div>
               <span className="block text-center text-xs mt-2 text-christmas-gold opacity-0 group-hover:opacity-100 transition-opacity">View Item</span>
            </a>
          </div>
        </li>

        {/* Gifts Section */}
        <li id="gifts" className="scroll-mt-32 flex flex-col gap-4 p-8 bg-slate-800/40 rounded-xl border-l-4 border-christmas-red shadow-lg">
          <div className="flex items-center gap-4 mb-2">
            <span className="flex items-center justify-center w-12 h-12 bg-christmas-red/20 rounded-full text-2xl">🎁</span>
            <span className="text-xl font-bold text-white">The Joy of Giving</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Exchanging gifts isn't just about the material object; it reflects centuries-old values of generosity, thoughtfulness, and goodwill toward others.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            <a href="https://amzn.to/4q7Ri22" target="_blank" rel="noopener noreferrer" className="group">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] border border-white/5">
                <img src="https://m.media-amazon.com/images/I/61RIZoL4zJL._AC_AIweblab1228328,T3_FMavif_SF165,165_QL54_.jpg?aicid=homepage-qmacv2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Holiday Gift" />
              </div>
            </a>
            <a href="https://amzn.to/3KKKtok" target="_blank" rel="noopener noreferrer" className="group hidden sm:block">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] border border-white/5">
                <img src="https://m.media-amazon.com/images/I/91rTBPZPgUL._AC_UL320_.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Holiday Gift" />
              </div>
            </a>
            <a href="https://amzn.to/3KvGVWX" target="_blank" rel="noopener noreferrer" className="group hidden sm:block">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] border border-white/5">
                <img src="https://m.media-amazon.com/images/I/817eV9YO4jL._AC_UL320_.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Holiday Gift" />
              </div>
            </a>
          </div>
        </li>

        {/* Recipes Section */}
        <li id="recipes" className="scroll-mt-32 flex flex-col gap-4 p-8 bg-slate-800/40 rounded-xl border-l-4 border-christmas-green shadow-lg">
          <div className="flex items-center gap-4 mb-2">
            <span className="flex items-center justify-center w-12 h-12 bg-christmas-green/20 rounded-full text-2xl">🦃</span>
            <span className="text-xl font-bold text-white">Feasts & Flavors</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Festive meals, whether it’s turkey, roast, cookies, or regional delicacies, bring families together. The table becomes a place of shared stories and abundance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            <a href="https://www.delish.com/holiday-recipes/christmas/g2575/classic-dinner-recipes/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] border border-white/5">
                <img src="https://hips.hearstapps.com/hmg-prod/images/cranberry-feta-wreaths-lead-web-0156-mh-del069925-6931b78860dab.jpg?crop=1xw:1xh;center,top" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Holiday Recipe" />
              </div>
            </a>
            <a href="https://www.foodnetwork.com/holidays-and-parties/packages/holidays/holiday-central-christmas/the-best-christmas-recipes" target="_blank" rel="noopener noreferrer" className="group hidden sm:block">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] border border-white/5">
                <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/11/11/0/FNK_Classic-Crown-Roast-H-0345_s4x3.jpg.rend.hgtvcom.791.594.85.suffix/1573495954078.webp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Holiday Recipe" />
              </div>
            </a>
            <a href="https://www.culinaryartsswitzerland.com/en/news/traditional-christmas-foods/" target="_blank" rel="noopener noreferrer" className="group hidden sm:block">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] border border-white/5">
                <img src="https://www.culinaryartsswitzerland.com/_next/image/?url=https%3A%2F%2Fseg-news.swisseducation.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fnews_image_full%2Fpublic%2F2025-11%2Ftraditional-christmas-foods.png.jpeg&w=1920&q=90" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Holiday Recipe" />
              </div>
            </a>
          </div>
        </li>
      </ul>
      
      <p className="mb-8 leading-8">
        Even simple rituals like hanging stockings or lighting candles carry stories passed down through time. These traditions create a sense of identity and continuity—reminding us that even in a fast-paced world, some moments deserve to be cherished slowly.
      </p>

 
      {/* Modern Era */}
      <h2 className="text-3xl font-bold text-christmas-gold mt-16 mb-8 font-serif border-b border-white/10 pb-4">
        Christmas in the Modern Era: More Connected Than Ever
      </h2>
      <p className="mb-6 leading-8">
        As the world becomes more digital, Christmas has embraced modernity without losing its soul. Families video-call from different continents, online communities share recipes and décor ideas, and holiday celebrations have become beautifully hybrid—mixing old customs with new technology.
      </p>
      <p className="mb-8 leading-8">
        This global connectivity has transformed Christmas into a celebration that feels personal, no matter where you are. It is a season of sharing, discovering, creating, and inspiring.
      </p>

      {/* Social Importance */}
      <div className="bg-gradient-to-br from-christmas-green/10 to-slate-900 border border-christmas-green/30 p-10 rounded-2xl my-12 shadow-inner">
        <h3 className="text-2xl font-bold text-white mb-6 font-serif">The Social Importance of Christmas Today</h3>
        <p className="mb-6 text-slate-200 leading-relaxed">Beyond sparkling lights and festive melodies, Christmas plays a powerful social role in mental health and community building:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['Strengthens family bonds', 'Encourages kindness & charity', 'Facilitates cultural exchange', 'Offers a pause from daily stress'].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-3 h-3 bg-christmas-gold rounded-full shadow-[0_0_10px_rgba(248,178,41,0.5)]"></div>
              <span className="text-slate-300 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-slate-200 italic border-t border-white/5 pt-6">
          "In a world filled with noise and rush, Christmas stands as a reminder of warmth, gratitude, and human connection."
        </p>
      </div>

      {/* Economy */}
      <h2 className="text-3xl font-bold text-christmas-gold mt-16 mb-8 font-serif border-b border-white/10 pb-4">
        A Festival That Drives Celebration—and the Economy
      </h2>
      <p className="mb-6 leading-8">
        Christmas is not only culturally significant—it is one of the world’s biggest seasonal economic events. The holiday season boosts creativity, craftsmanship, entrepreneurship, and innovation across industries.
      </p>
      <p className="mb-8 leading-8">
        Homes glow with stylish décor, people explore unique gifts, and creative businesses flourish. This natural rise in festive interest makes Christmas a time when inspiration blends beautifully with thoughtful choices that enhance the season.
      </p>

      {/* Conclusion */}
      <h2 className="text-3xl font-bold text-christmas-gold mt-16 mb-8 font-serif border-b border-white/10 pb-4">
        The Beauty of Christmas: Where Past Meets Future
      </h2>
      <p className="mb-6 leading-8">
        Christmas is more than a date on the calendar. It is a tapestry woven with tradition, emotion, and modern expression. Its magic lies in how it evolves—how each year brings new ideas, new memories, and new ways to celebrate.
      </p>
      <p className="mb-10 leading-8">
        Whether you cherish the nostalgic charm of classic traditions or love exploring fresh, creative trends, Christmas has a way of making every moment feel special. It is a festival that invites you to decorate your space beautifully, choose meaningful gifts, celebrate style, and create stories worth keeping.
      </p>

      <div className="text-center p-12 border-y border-christmas-gold/20 bg-christmas-gold/5 rounded-lg my-16">
        <p className="text-3xl font-serif text-white italic leading-tight">
          "As the season arrives again, may your heart be open, your home warm, and your celebrations full of wonder."
        </p>
      </div>

    </article>
  );
};