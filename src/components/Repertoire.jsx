const Repertoire = () => {
  const categories = [
    { title: "Krishna Bhajans", desc: "Soul-stirring melodies dedicated to Lord Krishna, evoking devotion and joy." },
    { title: "Ram Bhajans", desc: "Traditional and classical compositions honoring the life and virtues of Lord Ram." },
    { title: "Carnatic Devotional", desc: "Strictly traditional renditions rooted in the ancient Carnatic music framework." },
    { title: "Fusion Devotional", desc: "Contemporary spiritual music blending traditional ragas with modern instrumentation." }
  ];

  return (
    <section id="repertoire" className="py-20 md:py-24 px-6 bg-ivory-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-maroon-900">
          Musical Repertoire
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {categories.map((item, idx) => (
            <div key={idx} className="flex gap-4 md:gap-6 items-start group">
              <span className="text-gold-500 font-serif text-3xl md:text-4xl mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 text-maroon-900">{item.title}</h3>
                <p className="text-maroon-800/70 leading-relaxed font-light text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Repertoire;