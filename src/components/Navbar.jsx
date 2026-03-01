import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Performances', href: '#performances' },
    { name: 'Repertoire', href: '#repertoire' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Booking', href: '#booking' },
  ];

  return (
    <header className="fixed top-0 w-full bg-ivory-100/95 backdrop-blur-sm shadow-sm z-50 border-b border-gold-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold text-maroon-900 z-50">
          SSP<span className="text-gold-500">.</span>
        </a>
        
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold tracking-wide uppercase hover:text-gold-600 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button 
          className="md:hidden z-50 p-2 text-maroon-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        <div className={`fixed inset-0 bg-ivory-100 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <nav className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl text-maroon-900 hover:text-gold-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;