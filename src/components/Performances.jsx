const Performances = () => {
  return (
    <section id="performances" className="py-20 md:py-24 px-4 md:px-6 bg-ivory-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-maroon-900">Featured Performances</h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gold-500/20">
            <div className="aspect-video bg-maroon-900/10 flex items-center justify-center group cursor-pointer hover:bg-maroon-900/20 transition-all relative">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gold-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-maroon-900 border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="p-4 text-center bg-ivory-100">
              <span className="font-serif text-maroon-900 font-semibold text-sm md:text-base">Live at ISKCON Temple</span>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gold-500/20">
            <div className="aspect-video bg-maroon-900/10 flex items-center justify-center group cursor-pointer hover:bg-maroon-900/20 transition-all relative">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gold-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-maroon-900 border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="p-4 text-center bg-ivory-100">
              <span className="font-serif text-maroon-900 font-semibold text-sm md:text-base">Navratri Special Bhajans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performances;