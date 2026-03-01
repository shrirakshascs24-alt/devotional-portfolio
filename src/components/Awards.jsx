const Awards = () => {
  const awards = [
    { year: "2020", title: "Natya Bala", org: "International Classical Dance Festival Trissur Kerala" },
    { year: "2022", title: "Rajyotsava Sadaka Award", org: "Karnataka State Government" },
    { year: "2023", title: "Kanaka Puraskar", org: "Mangalore University" },
    { year: "2019", title: "Rajya Puraskar", org: "Bharath Scouts and Guides Karnataka" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-maroon-900 text-ivory-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Compact Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gold-500 mb-3">Recognitions</h2>
          <div className="w-12 md:w-16 h-px bg-gold-500/50"></div>
        </div>
        
        {/* Sleek, Compact List Layout */}
        <div className="flex flex-col border-t border-gold-500/20">
          {awards.map((award, idx) => (
            <div 
              key={idx} 
              className="flex flex-col md:flex-row items-start md:items-center py-4 border-b border-gold-500/20 hover:bg-black/10 transition-colors px-2 md:px-4 group"
            >
              {/* Year - Pushed to left on desktop, top on mobile */}
              <span className="text-gold-500 font-bold tracking-widest text-[11px] md:text-sm w-24 mb-1 md:mb-0 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                {award.year}
              </span>
              
              {/* Award Details - Tight line height for compact feel */}
              <div>
                <h3 className="font-serif text-sm md:text-lg font-bold text-ivory-100 leading-tight">
                  {award.title}
                </h3>
                <p className="text-ivory-200/50 font-light text-[10px] md:text-xs uppercase tracking-wider mt-1">
                  {award.org}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Awards;