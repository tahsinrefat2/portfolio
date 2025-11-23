import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Available for Work
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight animate-slide-up">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '100ms' }}>
              {PERSONAL_INFO.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <a 
                href="#projects" 
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] flex items-center gap-2"
              >
                View Work 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 backdrop-blur-sm transition-all hover:scale-105 flex items-center gap-2"
              >
                Contact Me 
                <Download size={18} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end relative animate-fade-in" style={{ animationDelay: '300ms' }}>
             {/* Profile Image Container */}
             <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] z-10 group">
                {/* Rotating Rings */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_10s_linear_infinite] group-hover:border-blue-500/40 transition-colors"></div>
                <div className="absolute inset-4 rounded-full border border-violet-500/20 animate-[spin_15s_linear_infinite_reverse] group-hover:border-violet-500/40 transition-colors"></div>
                
                {/* Main Image */}
                <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-slate-800 shadow-2xl relative z-10">
                  <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                  <img 
                    src={PERSONAL_INFO.heroImage} 
                    alt={PERSONAL_INFO.name} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 -right-4 lg:-right-10 bg-dark/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl animate-float delay-700">
                  <span className="text-3xl">🤖</span>
                </div>
                <div className="absolute bottom-10 -left-4 lg:-left-10 bg-dark/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl animate-float delay-1000">
                  <span className="text-3xl">🚀</span>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;