import { useState, useEffect } from 'react';

const Gallery = () => {
  // --- ADD YOUR PICTURE LINKS HERE ---
  // You can add as many as you want to this list!
  const slides = [
    "/media/strings-serenitycollage.jpeg", // Your collage
    "/media/award.jpg", // Placeholder: Bharatanatyam
    "/media/Gemini_Generated_Image_es8r91es8r91es8r.png", // Placeholder: Concert
    "/media/sivagiiri.png" ,
    "/media/043fe686-e401-4cac-bc50-98e2468d2bd6.png"

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // This makes the slider move automatically every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4000 milliseconds = 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="gallery" className="py-24 px-6 bg-ivory-200 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-maroon-900">
            Devotional Kaleidoscope
          </h2>
          <p className="text-maroon-800/70 font-light max-w-xl mx-auto text-sm md:text-base">
            Moments captured from a journey of song and prayer, woven into a single canvas.
          </p>
        </div>

        {/* --- THE SLIDESHOW CONTAINER --- */}
        <div className="w-[98vw] md:w-full max-w-5xl -mx-4 md:mx-0 relative shadow-2xl rounded overflow-hidden aspect-[16/10] md:aspect-[21/9] group">
          
          {/* The Sliding Track */}
          <div 
            className="flex w-full h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <img 
                  src={slide} 
                  alt={`Gallery Slide ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Subtle warming screen layer to keep colors consistent */}
          <div className="absolute inset-0 bg-maroon-900/10 mix-blend-color-burn pointer-events-none z-10"></div>

          {/* Navigation Dots (Appears at the bottom of the image) */}
          <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-500 ${
                  currentIndex === index 
                    ? "bg-gold-500 w-6 md:w-8" // Expands the active dot into a pill shape
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Gallery;