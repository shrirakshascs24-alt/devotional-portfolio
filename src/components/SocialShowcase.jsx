const SocialShowcase = () => {
  // Mock data for YouTube (16:9 format)
  const youtubeVideos = [
    {
      id: 1,
      thumbnail: "/media/ChatGPT Image Feb 24, 2026, 06_15_11 PM.png",
      title: "Live Devotional Concert - Full Performance",
    
      link: "https://youtu.be/4FPBI3T9phY?si=iNh5xXIc27DQ2D31"
    },
    {
      id: 2,
      thumbnail: "/media/ChatGPT Image Feb 24, 2026, 08_02_13 PM.png",
      title: "Oh Bhagavathi",
      
      link: "https://youtu.be/s6eMnRjAw2Q?si=DM_KAQGwCDNHlL_S"
    },
     {
      id: 3,
      thumbnail: "/media/navadurgaposter.webp",
      title: "Navadurga Stotram ",
    
      link: "https://youtu.be/SrqF6B7flqA?si=8o56ynPHVTQaoh8A"
    },
     {
      id: 4,
      thumbnail: "/media/daivadashakam.webp",
      title: "Daivadashakam",
    
      link: "https://youtu.be/tN6UKh8nzRw?si=YdjjSdE8Sg5PzYMJ"
    }
  ];

  // Mock data for Instagram Reels (9:16 format)
  const instagramReels = [
    {
      id: 1,
      thumbnail: "/media/insta1.jpg",
      views: "125K",
      link: "https://www.instagram.com/shriraksha_sh_poojary/reel/DTXEnvHkwHZ/"
    },
    {
      id: 2,
      thumbnail: "/media/strings4.jpeg",
     views:"30k",
      link: "https://www.instagram.com/shriraksha_sh_poojary/reel/DOdWsKPk1Y5/"
    },
    {
      id: 3,
      thumbnail: "/media/insta5.jpg",
      views: "30K",
      link: "https://www.instagram.com/shriraksha_sh_poojary/reel/DPlmI9XktQN/"
    },
    {
      id: 4,
      thumbnail: "/media/cm.jpg",
      views: "45.5K",
      link: "https://www.instagram.com/shriraksha_sh_poojary/reel/DR1UhIQEtK7/"
    }
  ];

  return (
    <section id="social" className="py-20 md:py-24 px-4 md:px-6 bg-ivory-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-maroon-900 mb-4">
            Digital Presence
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mb-4"></div>
          <p className="text-maroon-800/70 font-light text-sm md:text-base max-w-2xl mx-auto">
            Experience full musical performances and behind-the-scenes moments across my channels.
          </p>
        </div>

        {/* --- YOUTUBE SECTION --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            {/* Native YouTube SVG */}
            <svg className="w-8 h-8 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <h3 className="font-serif text-2xl font-bold text-maroon-900">Latest on YouTube</h3>
          </div>

          {/* YouTube Grid: 1 col mobile, 2 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {youtubeVideos.map((video) => (
              <a key={video.id} href={video.link} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-video overflow-hidden bg-maroon-900 rounded-lg shadow-md mb-3">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" loading="lazy" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#FF0000] border-b-[6px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-maroon-900 text-sm md:text-base group-hover:text-gold-600 transition-colors line-clamp-1">{video.title}</h4>
                <p className="text-xs text-maroon-800/60 mt-1 font-semibold tracking-wide">{video.views}</p>
              </a>
            ))}
          </div>
        </div>

        {/* --- INSTAGRAM REELS SECTION --- */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            {/* Native Instagram SVG */}
            <svg className="w-7 h-7 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <h3 className="font-serif text-2xl font-bold text-maroon-900">Trending Reels</h3>
          </div>

          {/* Reels Grid: 2 cols mobile, 4 cols desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {instagramReels.map((reel) => (
              <a key={reel.id} href={reel.link} target="_blank" rel="noopener noreferrer" className="relative group aspect-[9/16] overflow-hidden bg-maroon-900 rounded-md shadow-md block">
                <img src={reel.thumbnail} alt="Instagram Reel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                
                {/* View Count (Bottom Left) */}
                <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 font-sans font-bold text-xs tracking-wider">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {reel.views}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialShowcase;
