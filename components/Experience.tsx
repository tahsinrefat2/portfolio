import React from 'react';
import { EDUCATION, ACHIEVEMENTS } from '../constants';
import { GraduationCap, Award, Calendar, ArrowUpRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Experience: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Education Column */}
          <div>
            <RevealOnScroll>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 ring-1 ring-blue-500/20">
                  <GraduationCap size={28} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Education</h2>
              </div>
            </RevealOnScroll>

            <div className="space-y-12 relative pl-4">
              {/* Vertical Line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/50 via-slate-800 to-transparent"></div>

              {EDUCATION.map((edu, index) => (
                <RevealOnScroll key={edu.id} delay={index * 150}>
                  <div className="relative pl-12 group">
                    {/* Timeline Dot */}
                    <div className="absolute left-[13px] top-2 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 z-10"></div>

                    <div className="glass p-6 rounded-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-500/30 border border-white/5">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/10">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-slate-400 mb-4 font-medium">{edu.institution}</p>
                      <div className="inline-flex items-center gap-2 text-sm text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div>
            <RevealOnScroll delay={200}>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-violet-500/10 rounded-xl text-violet-500 ring-1 ring-violet-500/20">
                  <Award size={28} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Achievements</h2>
              </div>
            </RevealOnScroll>

            <div className="space-y-8">
              {ACHIEVEMENTS.map((ach, index) => (
                <RevealOnScroll key={ach.id} delay={200 + index * 150}>
                  <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-900/20">
                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent z-10 transition-all duration-500"></div>
                      <img
                        src={ach.image}
                        alt={ach.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10"></div>
                    </div>

                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider mb-2">
                          <Calendar size={12} /> {ach.date}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-violet-300 transition-colors">
                          {ach.title}
                        </h3>
                        <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-1">
                          {ach.event} <ArrowUpRight size={14} />
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;