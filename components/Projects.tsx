import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project, Category } from '../types';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Code2, Layers } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'web', label: 'Web Dev' },
    { id: 'other', label: 'Hardware' },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 relative z-10">

        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <div className="flex items-center gap-2 text-blue-500 mb-3">
                <Code2 size={20} />
                <span className="font-mono text-sm tracking-widest uppercase">Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Selected Works</h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 100}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer h-full rounded-2xl bg-slate-900/40 border border-white/5 overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col"
              >
                {/* Image Container */}
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-bold text-white rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20 bg-blue-600 text-white p-2.5 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;