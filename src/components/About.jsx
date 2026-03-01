import { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 md:py-24 px-6 bg-ivory-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-maroon-900">
          The Voice of Devotion
        </h2>
        <div className="w-20 md:w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
        
        <div className="text-base md:text-xl text-maroon-800/80 font-light leading-relaxed">
          <p className="mb-4">
            Born with a deep reverence for the divine, Shriraksha S H Poojary has dedicated her life to the pursuit of musical spirituality. Her voice is not merely an instrument, but a vessel carrying ancient prayers to modern souls.
          </p>
          
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="mb-4">
             Shriraksha S.H. Poojary is a luminous presence in the world of Indian classical arts — a rare artist whose voice, veena, and movement converge in devotion.

Rooted in the sacred traditions of Carnatic music, Saraswati Veena, and Bharatanatyam, her artistic journey is not merely one of performance, but of preservation and purpose. Every note she sings carries centuries of heritage. Every gesture she performs speaks the language of timeless epics.

Her devotional rendering of Daivadashakam — presented for the first time in Kannada at the esteemed GuruGandhi Samvada — stands as a testament to her commitment to cultural continuity and spiritual expression. The performance, inaugurated by the Honorable Chief Minister, marked a significant milestone in her artistic path.

Shriraksha has also graced the globally renowned Sivagiri Theerthatanam in Kerala, offering her art at one of the most spiritually significant stages in the country — where devotion meets discipline, and art becomes offering.

As a vocalist, her music resonates with tonal purity, emotional depth, and bhava-rich expression.
As a Veena exponent, she channels serenity through strings.
As a Bharatanatyam performer, she transforms rhythm into storytelling.

Beyond the stage, Shriraksha is the Founder of Madhurya, a classical music academy nurturing young talent, and Strings of Serenity – Veena for Mental Health, a social initiative bringing the healing power of music to communities.

Her journey reflects not only artistic excellence, but responsibility — to heritage, to society, and to the evolving cultural landscape.

She is not merely performing tradition.
She is carrying it forward.
            </p>
            <p>
              Having performed at prestigious spiritual gatherings across the country, she continues to explore the limitless boundaries of devotion through her repertoire of Abhangs, Carnatic kritis, and soulful contemporary bhajans.
            </p>
          </div>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 text-gold-600 font-bold uppercase tracking-widest text-sm border-b-2 border-gold-500 hover:text-maroon-900 hover:border-maroon-900 transition-colors pb-1 outline-none"
        >
          {isExpanded ? 'Read Less' : 'View More'}
        </button>
      </div>
    </section>
  );
};

export default About;