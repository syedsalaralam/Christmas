import React from 'react';
import { AdPlaceholder } from './AdPlaceholder';

export const ArticleContent: React.FC = () => {
  return (
    <article className="prose prose-base md:prose-lg prose-invert max-w-none text-slate-200 font-sans">

      {/* Intro */}
      <section>
        <p className="lead text-lg md:text-2xl text-slate-100 font-serif leading-relaxed mb-8 md:mb-10 tracking-wide">
          As <strong>Christmas 2025</strong> approaches, the world begins to transform into a tapestry of light and shared humanity. Beyond the commercial veneer, the festival remains a profound anchor for culture, providing a sense of continuity in an ever-changing digital age.
          <br /><br />
          This year, the theme of "Connection" resonates more than ever. From the ancient solstice fires to the modern glowing LED displays, Christmas is a story of how we find light in the darkest days of the year.
        </p>
      </section>

      <div className="py-4">
        <AdPlaceholder format="horizontal" label="Advertisement" />
      </div>

      {/* Detailed History */}
      <section id="history">
        <h2 className="text-2xl md:text-3xl font-bold text-christmas-gold mt-10 md:mt-14 mb-6 md:mb-8 font-serif border-b border-white/10 pb-4">
          1. The Historical Tapestry: Where It All Began
        </h2>
        <p className="mb-6 leading-8">
          The history of Christmas is not a single thread but a complex weaving of diverse cultures. Long before the modern era, European tribes celebrated the <strong>Winter Solstice</strong>—the turning point where days began to lengthen. In Scandinavia, the Norse celebrated <strong>Yule</strong> from December 21 through January, honoring the return of the sun with massive logs and feasting.
        </p>
        <p className="mb-6 leading-8">
          In Rome, the celebration of <strong>Saturnalia</strong> (a hedonistic festival in honor of Saturn) coincided with the winter season. It wasn't until the 4th century that Pope Julius I chose December 25th as the official date for Christmas. This strategic choice allowed the Church to adopt and transform existing pagan traditions, creating a unified celebration that could be embraced by many.
        </p>
        
        <div className="relative h-64 md:h-96 w-full my-8 md:my-10 rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=1170&auto=format&fit=crop"
            alt="Vintage Christmas Scene showing historical decorations"
            className="object-cover w-full h-full opacity-90"
          />
        </div>
      </section>

      {/* Global Traditions Expanded */}
      <section id="traditions">
        <h2 className="text-2xl md:text-3xl font-bold text-christmas-gold mt-12 md:mt-16 mb-6 md:mb-8 font-serif border-b border-white/10 pb-4">
          2. Global Variations: A World in Celebration
        </h2>
        <p className="mb-6 leading-8">
          While the core values remain constant, the expression of Christmas varies wildly across the globe. In <strong>Iceland</strong>, the tradition of <em>Jolabokaflod</em> (The Christmas Book Flood) sees families exchanging books on Christmas Eve and spending the night reading. 
        </p>
        <p className="mb-6 leading-8">
          In <strong>Mexico</strong>, the <em>Las Posadas</em> processions reenact Mary and Joseph’s search for shelter, ending in vibrant community parties with piñatas. Meanwhile, in <strong>Japan</strong>, a unique modern tradition involves a festive meal from KFC—a testament to how clever marketing and cultural curiosity can forge new legacies.
        </p>
        
        <div className="bg-slate-800/40 p-6 rounded-xl border-l-4 border-christmas-green my-8">
          <h4 className="text-white font-bold mb-3">Did You Know?</h4>
          <p className="text-sm text-slate-300 italic">The "X" in Xmas actually comes from the Greek letter 'Chi', which is the first letter of Christ's name. It has been used as a shorthand for centuries, not as a way to "cross out" the meaning of the holiday.</p>
        </div>
      </section>

      {/* Modern Sustainability Section - High Value Content */}
      <section id="sustainable">
        <h2 className="text-2xl md:text-3xl font-bold text-christmas-gold mt-12 md:mt-16 mb-6 md:mb-8 font-serif border-b border-white/10 pb-4">
          3. The Rise of Sustainable Festivity in 2025
        </h2>
        <p className="mb-6 leading-8">
          As we move into 2025, a significant shift has occurred in how we celebrate. "Sustainable Christmas" is no longer a niche trend but a mainstream movement. Families are increasingly opting for <strong>rented Christmas trees</strong>, digital greeting cards, and zero-waste gift wrapping using the Japanese art of <em>Furoshiki</em>.
        </p>
        <p className="mb-6 leading-8">
          This evolution reflects a deeper understanding of our responsibility to the planet. High-quality, durable decorations are being favored over disposable tinsel, and locally-sourced holiday feasts are supporting small-scale farmers and reducing carbon footprints.
        </p>
      </section>

      <AdPlaceholder format="rectangle" label="Advertisement" />

      {/* Psychological Impact Section */}
      <section id="psychology">
        <h2 className="text-2xl md:text-3xl font-bold text-christmas-gold mt-12 md:mt-16 mb-6 md:mb-8 font-serif border-b border-white/10 pb-4">
          4. The Psychology of the Season
        </h2>
        <p className="mb-6 leading-8">
          Why does the smell of cinnamon or the sound of a certain carol trigger such intense emotion? Psychologists suggest that Christmas rituals act as a "temporal landmark"—a way for our brains to mark the passage of time and reinforce our social identity.
        </p>
        <p className="mb-8 leading-8">
          Participating in these rituals has been shown to reduce anxiety by providing a sense of predictability and control. Even for those who do not celebrate for religious reasons, the communal spirit of "peace on earth" offers a much-needed respite from the pressures of global events.
        </p>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-christmas-gold mt-12 md:mt-16 mb-6 md:mb-8 font-serif border-b border-white/10 pb-4">
          Embracing the Magic
        </h2>
        <p className="mb-6 leading-8">
          Christmas 2025 is an invitation to pause. In a world that demands our attention through screens and notifications, the holiday asks us to look at the person sitting across from us, to share a meal, and to celebrate the simple fact of being together.
        </p>
        <p className="mb-10 leading-8">
          Whether through a simple gift, a shared song, or a quiet moment by the fire, may your holiday be a source of renewal and joy. The magic isn't in the perfection of the decor, but in the warmth of the intention.
        </p>
      </section>

      <div className="text-center p-8 md:p-12 border-y border-christmas-gold/20 bg-christmas-gold/5 rounded-lg my-12 md:my-16">
        <p className="text-2xl md:text-3xl font-serif text-white italic leading-tight">
          "The best of all gifts around any Christmas tree: the presence of a happy family all wrapped up in each other."
        </p>
      </div>

    </article>
  );
};