import React from 'react';
import { PERSONAL_INFO, SKILLS } from '../constants';
import { Brain, Code, Database, Users, LineChart, Cpu, MessageSquare, Terminal, Layout } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={24} />,
  Code: <Code size={24} />,
  Database: <Database size={24} />,
  Users: <Users size={24} />,
  ChartLine: <LineChart size={24} />,
  Network: <Cpu size={24} />,
  Kanban: <Layout size={24} />,
  Terminal: <Terminal size={24} />,
  MessageSquare: <MessageSquare size={24} />
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                About Me
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="glass p-8 md:p-10 rounded-3xl mb-16 shadow-2xl relative overflow-hidden group border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-700"></div>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10 font-light">
                {PERSONAL_INFO.about}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                  </div>
                  <span className="text-slate-300 font-medium">Open to opportunities</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Code size={18} />
                  </div>
                  <span className="text-slate-300 font-medium">Based in {PERSONAL_INFO.location.split(',')[0]}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Technical Arsenal</h3>
              <p className="text-slate-400">Technologies I use to bring ideas to life</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SKILLS.map((skill, index) => (
              <RevealOnScroll key={skill.name} delay={index * 100}>
                <div
                  className="group h-full p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-slate-800 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="p-3 rounded-xl bg-slate-950 text-blue-500 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300 ring-1 ring-white/5 group-hover:ring-blue-500/20">
                    {iconMap[skill.icon] || <Code />}
                  </div>
                  <span className="font-medium text-slate-300 text-center text-sm group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;