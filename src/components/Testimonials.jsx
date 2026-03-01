const Testimonials = () => {
  const testimonials = [
    {
      quote: "Listening to Shriraksha is like experiencing a direct connection to the divine. Her voice brings absolute peace.",
      name: "Swami Vikyathananda",
      role: "Spiritual Leader"
    },
    {
      quote: "A rare talent who honors the strict traditions of classical music while pouring immense, relatable emotion into every note.",
      name: "Shekhar Bangera Delhi",
      role: "Owner - Naivedyam Group of Restaurants"
    },
    {
      quote: "Her performance at our annual festival left the entire audience in a state of meditative bliss. Truly mesmerizing.",
      name: "Somanath Poojary",
      role: "Entreprenurs"
    }
  ];

  return (
    <section className="py-20 md:py-24 px-6 bg-ivory-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-maroon-900">
          Words of Grace
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-ivory-100 p-6 md:p-8 rounded shadow-sm border-t-4 border-gold-500 relative">
              <span className="absolute text-gold-500/20 text-6xl md:text-7xl font-serif top-2 md:top-4 left-4">"</span>
              <p className="text-maroon-800/80 italic mb-6 relative z-10 font-serif leading-relaxed text-sm md:text-base">
                {test.quote}
              </p>
              <div>
                <h4 className="font-bold text-maroon-900 text-xs md:text-sm uppercase tracking-wider">{test.name}</h4>
                <p className="text-xs text-maroon-800/60 mt-1">{test.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;