import { useState, useEffect } from 'react';

const Offerings = () => {
  const [activeOffering, setActiveOffering] = useState(null);

  // Prevent background scrolling when the "separate page" modal is open
  useEffect(() => {
    if (activeOffering) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeOffering]);

  const offerings = [
    {
      id: 1,
      number: "01",
      title: "Temple Festivals",
      shortDesc: "Traditional concerts for sacred spaces and Utsavas.",
      longDesc: "Rooted deeply in tradition, these performances are designed specifically for the sanctified atmosphere of temple festivals, Brahmotsavams, and grand spiritual gatherings. The repertoire strictly adheres to classical Carnatic frameworks, featuring complex Pallavis, ancient Krithis, and soul-stirring Abhangs that elevate the spiritual energy of the temple premises. Every note is offered as a prayer, creating a divine resonance that connects the devotees directly to the deity.",
      image: "/media/CWKP9723.JPG"
    },
    {
      id: 2,
      number: "02",
      title: "Private Gatherings",
      shortDesc: "Intimate baithaks and soulful bhajan evenings.",
      longDesc: "Music experienced in an intimate setting has a profound emotional impact. These private sessions are curated for housewarmings, private spiritual ceremonies, and intimate baithaks. Stripping away the grand amplification, these acoustic or semi-acoustic performances focus on raw emotion and devotion. The setlist is highly personalized, featuring beloved Bhajans, Ashtapadis, and lighter classical pieces that invite the audience to close their eyes, sing along, and meditate collectively.",
      image: "/media/onstageveena.jpg"
    },
    {
      id: 3,
      number: "03",
      title: "Cultural Showcases",
      shortDesc: "Classical fusion for prestigious public auditoriums.",
      longDesc: "Bridging the gap between strict tradition and modern appreciation, Cultural Showcases are designed for auditoriums, music festivals, and symposiums. These performances often incorporate 'Fusion Devotional' elements—pairing traditional Ragas and ancient lyrical poetry with contemporary instrumentation. It is a celebration of India's rich musical heritage presented in a format that deeply moves both the seasoned classical connoisseur and the modern listener.",
      image: "/media/veena4.png"
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-maroon-900 text-ivory-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Minimal Front-Page Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold-500 mb-4">
            Curated Experiences
          </h2>
          <div className="w-16 h-px bg-gold-500/50 mb-6"></div>
          <p className="text-ivory-200/70 font-light text-sm md:text-base max-w-lg">
            Select an experience below to explore the detailed vision and repertoire for your specific gathering.
          </p>
        </div>

        {/* Ultra-Clean Grid Layout (Front Page) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {offerings.map((item) => (
            <div key={item.id} className="group border-b border-gold-500/20 pb-8 flex flex-col h-full">
              <span className="text-gold-500/40 font-serif text-4xl block mb-4 group-hover:text-gold-500 transition-colors duration-300">
                {item.number}
              </span>
              <h3 className="font-serif text-2xl font-bold mb-3 text-ivory-100 group-hover:text-gold-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-ivory-200/60 font-light text-sm leading-relaxed mb-6 flex-grow">
                {item.shortDesc}
              </p>
              
              <button 
                onClick={() => setActiveOffering(item)}
                className="self-start text-gold-500 font-bold uppercase tracking-widest text-xs border-b border-gold-500 hover:text-white hover:border-white transition-all pb-1 flex items-center gap-2"
              >
                View Details
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- FULL SCREEN OVERLAY ("SEPARATE PAGE") --- */}
      <div 
        className={`fixed inset-0 z-[100] bg-ivory-100 text-maroon-900 overflow-y-auto transition-transform duration-500 ease-in-out flex flex-col ${
          activeOffering ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {activeOffering && (
          <>
            {/* Close Button Header */}
            <div className="sticky top-0 w-full bg-ivory-100/90 backdrop-blur-md px-6 py-6 flex justify-end z-50 border-b border-gold-500/20">
              <button 
                onClick={() => setActiveOffering(null)}
                className="flex items-center gap-2 text-maroon-900 hover:text-gold-600 transition-colors font-bold uppercase tracking-widest text-xs"
              >
                Close
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* "Page" Content */}
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 flex-grow flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start">
              
              {/* Left Side: Large Image */}
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/5] rounded-t-[40%] overflow-hidden border-4 border-gold-500/30 shadow-2xl relative group">
                  <img 
                    src={activeOffering.image} 
                    alt={activeOffering.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-maroon-900/10 mix-blend-color-burn"></div>
                </div>
              </div>

              {/* Right Side: Deep Details */}
              <div className="w-full md:w-1/2 pt-4 md:pt-10">
                <span className="text-gold-600 font-serif text-2xl md:text-3xl block mb-2 opacity-60">
                  {activeOffering.number}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-maroon-900 mb-8 leading-tight">
                  {activeOffering.title}
                </h2>
                
                <div className="w-16 h-1 bg-gold-500 mb-8"></div>
                
                <p className="text-maroon-800/80 font-light text-base md:text-lg leading-relaxed mb-12">
                  {activeOffering.longDesc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => {
                      setActiveOffering(null);
                      setTimeout(() => {
                        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                    className="px-8 py-4 bg-maroon-900 text-gold-500 font-bold uppercase tracking-widest text-xs hover:bg-maroon-800 transition-colors text-center rounded-sm shadow-xl"
                  >
                    Request This Booking
                  </button>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Offerings;