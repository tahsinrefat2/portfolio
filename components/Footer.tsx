import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
           <h2 className="text-3xl font-heading font-bold text-white mb-2">TR.</h2>
           <p className="text-slate-500">Building the future with AI & Code.</p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
            <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <Github size={20} />
            </a>
            <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-blue-700 transition-all">
                <Linkedin size={20} />
            </a>
        </div>

        <div className="text-slate-600 text-sm flex items-center justify-center gap-1">
          <p>&copy; {new Date().getFullYear()} Tahsinul Refat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;