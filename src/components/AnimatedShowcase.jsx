import { useState, useEffect } from 'react';

const AnimatedShowcase = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const backgroundImages = [
    "/media/shivagiri.png",
    "/media/veena4.png",
    "/media/sivagiri3.JPG",
    "/media/string.jpeg",
   "/media/onstageveena.jpg",
   "/media/guruvayur.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden bg-maroon-900 border-y-4 border-gold-500/30">
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImg ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${img})`, transitionProperty: 'opacity, transform' }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-maroon-900/30 mix-blend-multiply"></div>
    </section>
  );
};

export default AnimatedShowcase;