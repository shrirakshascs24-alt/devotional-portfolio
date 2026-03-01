const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-28 pb-10 bg-ivory-100 min-h-[85svh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Massive Trending Arch with VIDEO */}
      <div className="w-[90vw] md:w-[60vw] lg:w-[45vw] max-w-2xl aspect-[3/4] rounded-t-[45%] md:rounded-t-[50%] overflow-hidden shadow-2xl mb-8 md:mb-12 relative group border-b-4 border-gold-500/50">
        
        {/* The Video Element */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          /* The poster is the image that shows before the video loads */
          poster="/media/Veena2.JPG"
          className="w-full h-full object-cover object-top transition-transform duration-[3000ms] group-hover:scale-105"
        >
          {/* Replace this src with your actual video link (e.g., from your public folder like "/hero-video.mp4") */}
          <source src="/media/veenapromo.mp4" type="video/mp4" />
        </video>

        {/* Subtle warming overlay so it matches the site's colors */}
        <div className="absolute inset-0 bg-maroon-900/10 mix-blend-overlay"></div>
      </div>
      
      {/* Small, Unique, Trending Name Typography */}
      <h1 
        className="text-lg md:text-xl lg:text-2xl text-maroon-900 tracking-[0.3em] md:tracking-[0.5em] uppercase text-center ml-2 md:ml-4 font-bold"
        style={{ fontFamily: "'Cinzel Decorative', serif" }}
      >
        Shriraksha S H Poojary
      </h1>
      
    </section>
  );
};

export default Hero;