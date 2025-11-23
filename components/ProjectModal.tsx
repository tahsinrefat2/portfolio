import React from 'react';
import { X, ExternalLink, Github, BarChart3, Layers, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div className="bg-slate-900 border border-white/10 w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in slide-in-from-bottom-8 duration-500 zoom-in-95">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all backdrop-blur-sm border border-white/10 group"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Header Image */}
        <div className="h-72 md:h-96 w-full relative shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
            <div className="flex gap-2 mb-3">
               <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/20">
                 {project.category}
               </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-2 leading-tight">{project.title}</h2>
            <p className="text-blue-300 text-lg md:text-xl font-medium max-w-2xl">{project.subtitle}</p>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto p-8 md:p-10 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Layers size={22} className="text-blue-500"/> Project Overview
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                  {project.description}
                </p>
                <div className="space-y-4">
                  {project.fullDescription.map((desc, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                      <p className="text-slate-300 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats if available */}
              {project.stats && (
                <div className="grid grid-cols-2 gap-4">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                      <p className="text-sm text-slate-400 mb-1 font-medium uppercase tracking-wider">{stat.label}</p>
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Code2 size={20} className="text-violet-500" /> Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-200 rounded-lg text-sm font-medium hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-300 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                {project.link && (
                    <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:scale-[1.02] shadow-xl shadow-blue-900/20"
                    >
                    <ExternalLink size={20} /> View Live Project
                    </a>
                )}
                <div className="flex items-center justify-center gap-2 w-full py-4 bg-slate-800 text-slate-500 rounded-xl font-medium cursor-not-allowed border border-slate-700">
                    <Github size={20} /> 
                    {project.link ? "Repository" : "Private Repository"}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

// Simple Code icon substitute
const Code2 = ({ size, className }: {size: number, className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m5 7 5 5-5 5"/><path d="m19 17-5-5 5-5"/></svg>
);

export default ProjectModal;