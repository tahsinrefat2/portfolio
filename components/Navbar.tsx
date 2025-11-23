import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="relative group">
          <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
            TR<span className="text-blue-500">.</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="relative text-slate-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wider group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}

          <div className="h-6 w-px bg-slate-700 mx-4"></div>

          <div className="flex items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-white/10 backdrop-blur-xl overflow-hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;