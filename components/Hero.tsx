import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -60, 0],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 45, 0],
            x: [0, 40, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Available for Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight"
            >
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            {/* Profile Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] z-10 group">
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-violet-500/20 group-hover:border-violet-500/40 transition-colors"
              ></motion.div>

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
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-4 lg:-right-10 bg-slate-900/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl"
              >
                <span className="text-3xl">🤖</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-4 lg:-left-10 bg-slate-900/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl"
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;