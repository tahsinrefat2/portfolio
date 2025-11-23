import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="relative group">
           <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
             TR<span className="text-blue-500">.</span>
           </span>
           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative text-slate-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wider group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <div className="h-6 w-px bg-slate-700 mx-4"></div>

          <div className="flex items-center space-x-4">
              <a 
                href={PERSONAL_INFO.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                  <Github size={20} />
              </a>
              <a 
                href={PERSONAL_INFO.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
              >
                  <Linkedin size={20} />
              </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-dark/95 border-b border-white/10 backdrop-blur-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
          <div className="flex flex-col py-6 px-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-300 hover:text-blue-400 text-lg font-medium py-2 block border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 pt-6 justify-center">
                <a href={PERSONAL_INFO.social.github} className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
                <a href={PERSONAL_INFO.social.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-violet-400 transition-colors"><Mail size={24} /></a>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;