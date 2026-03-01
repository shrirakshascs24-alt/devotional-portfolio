import { useState } from 'react';

const Academy = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="academy" className="py-20 md:py-24 px-4 md:px-6 bg-ivory-200 border-y border-gold-500/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left Side: Editorial Image */}
        <div className="w-full md:w-1/2 relative group">
          <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-t-[40%] md:rounded-t-full border-4 border-white shadow-2xl relative z-10 bg-maroon-900">
            <img 
              src="/media/madhurya.jpeg" 
              alt="Madhurya Music Academy" 
              className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-maroon-900/10 mix-blend-color-burn"></div>
          </div>
          {/* Decorative Gold Accent Background */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-3/4 h-3/4 bg-gold-500/20 rounded-t-[40%] md:rounded-t-full -z-10"></div>
        </div>

        {/* Right Side: Typography & Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-gold-600 font-sans tracking-[0.2em] text-xs md:text-sm uppercase font-bold mb-3">
            Musical Heritage
          </h4>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-maroon-900 mb-6" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Madhurya
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto md:mx-0 mb-6 md:mb-8"></div>
          
          <div className="text-maroon-800/80 font-light text-sm md:text-base leading-relaxed text-left md:text-left">
            <p className="mb-4">
              True devotion is multiplied when it is shared. <strong>Madhurya</strong> is a dedicated music academy born from the desire to nurture the next generation of vocalists and practitioners of Indian classical arts. 
            </p>
            
            {/* Hidden Content that expands */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="mb-4">
             Madhurya was founded with a singular purpose — to preserve, nurture, and transmit the timeless richness of Indian classical arts to the next generation.

Conceived by Shriraksha S.H. Poojary, Madhurya is more than a music academy. It is a disciplined space of learning where tradition is treated with reverence and students are guided with clarity, structure, and artistic integrity.

Rooted in the classical frameworks of Carnatic music and allied art forms, Madhurya emphasizes:

• Strong foundational training
• Clarity in swara and bhava
• Structured progression
• Stage readiness and confidence
• Cultural understanding alongside technical mastery

At Madhurya, students are not trained merely to perform — they are trained to understand, internalize, and live the art.

Each session is built upon the belief that classical music is not a subject to be rushed, but a tradition to be absorbed patiently and respectfully.

Through systematic mentorship and value-based guidance, Madhurya aims to cultivate artists who carry forward heritage with authenticity and responsibility.

In a world moving rapidly toward instant gratification, Madhurya stands firm in its commitment to depth, discipline, and devotion.

It is not simply a classroom.
It is a continuation of parampara.
It is a sanctuary of sound.
              </p>
              <p>
                Beyond vocal training, this dedication to healing through sound extends to <strong>Strings of Serenity</strong>, a broader social initiative exploring the profound therapeutic impact of Saraswati Veena melodies on mental health and emotional well-being.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-6 md:mt-8">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gold-600 font-bold uppercase tracking-widest text-xs border-b-2 border-gold-500 hover:text-maroon-900 hover:border-maroon-900 transition-colors pb-1 outline-none self-center md:self-start mt-2"
            >
              {isExpanded ? 'Read Less' : 'View More'}
            </button>

            <a 
              href="#booking" 
              className="inline-block px-8 py-3 border border-maroon-900 text-maroon-900 font-bold uppercase tracking-widest text-xs hover:bg-maroon-900 hover:text-ivory-100 transition-colors duration-300 rounded-sm text-center w-full md:w-auto"
            >
              Inquire About Classes
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Academy;