const Footer = () => {
  return (
    <footer className="bg-maroon-900 text-ivory-100 py-10 md:py-12 px-6 border-t-4 border-gold-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-xl md:text-2xl font-bold text-gold-500 mb-1" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Shriraksha S H Poojary</h3>
          <p className="text-xs md:text-sm font-light text-ivory-200/70 tracking-wider uppercase">Veena and Vocal Fusion</p>
        </div>
        
        <div className="flex gap-4 md:gap-6">
          <a href="http://www.youtube.com/@ShrirakshaSHPoojary" className="text-ivory-100 hover:text-gold-500 transition-colors uppercase tracking-widest text-xs font-bold border border-transparent hover:border-gold-500 px-3 py-2 rounded">
            YouTube
          </a>
          <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbGlZekt4U3o1NHlQWFNKZjNhbEIxemY5WER5d3xBQ3Jtc0tsX1JJMnZzVzBvanRRcEpfVEM4blkteE1ZMHVHSmRQOU0wV3RUcGZsSU1hb25aV2NsVlF6MnQ5emZFcGs3QmZEcjVMZEJ5Z3Z4aUx0blJLbmxlVHdMc3I3OGgyaW0yWW9KT3d2TWhZQWZQenRaTGlIQQ&q=https%3A%2F%2Fwww.instagram.com%2Fshriraksha_sh_poojary%3Figsh%3DMThxMnBreDM5eXo1eQ%3D%3D" className="text-ivory-100 hover:text-gold-500 transition-colors uppercase tracking-widest text-xs font-bold border border-transparent hover:border-gold-500 px-3 py-2 rounded">
            Instagram
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 md:mt-12 pt-6 border-t border-white/10 text-center text-[10px] md:text-xs font-light text-ivory-200/50 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Shriraksha S H Poojary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;