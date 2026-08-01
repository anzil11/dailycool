import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, MapPin, Calendar, CheckCircle2, ArrowUpRight, Filter, Shield } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onQuoteWithService?: (serviceTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onQuoteWithService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Mechanical', 'Electrical', 'Plumbing'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(
        (p) => p.category === selectedCategory || p.sector === selectedCategory
      );

  return (
    <section id="projects-section" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-extrabold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5 text-cyan-700" />
              Engineering Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2B40]">
              Featured Completed Projects
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Discover our track record of high-precision MEP execution across commercial towers, luxury villas, and industrial facilities in Dubai.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-slate-500 text-xs font-bold border-r border-slate-200 mr-1">
              <Filter className="w-3.5 h-3.5 text-cyan-600" />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0B2B40] text-white shadow-md'
                    : 'text-slate-700 hover:text-[#0B2B40] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-cyan-500/80 transition-all duration-300 overflow-hidden flex flex-col shadow-sm hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B40]/80 via-transparent to-transparent opacity-90" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 bg-[#0B2B40]/90 border border-cyan-500/40 rounded-md backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-950/90 border border-amber-500/40 rounded-md backdrop-blur-md">
                    {project.sector}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-100 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-md border border-slate-700/60">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                      Completed: {project.completionYear}
                    </span>
                    <span className="text-cyan-700 font-semibold flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5" />
                      Verified Case
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B2B40] group-hover:text-cyan-600 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1 transition-colors"
                  >
                    <span>View Project Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {onQuoteWithService && (
                    <button
                      onClick={() => onQuoteWithService(project.title)}
                      className="px-3 py-1.5 text-[11px] font-bold text-[#0B2B40] bg-slate-100 hover:bg-[#0B2B40] hover:text-white rounded-lg border border-slate-200 transition-all shadow-sm"
                    >
                      Inquire Similar Project
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#0B2B40] border border-cyan-500/40 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            >
              <div className="relative h-64">
                <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover filter brightness-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B40] via-transparent to-transparent" />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-cyan-600 transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 text-xs font-bold text-cyan-300 bg-cyan-950/90 border border-cyan-500/40 rounded-md">
                    {activeProject.category} • {activeProject.sector}
                  </span>
                  <h3 className="text-xl font-black text-white mt-2 leading-tight">{activeProject.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-3 gap-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Location: <strong>{activeProject.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>Year: <strong>{activeProject.completionYear}</strong></span>
                  </div>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  {activeProject.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase text-cyan-400 tracking-wider">Key Project Achievements & Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-200 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-3 border-t border-slate-800">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 text-xs font-bold text-slate-300 bg-slate-800 rounded-lg hover:bg-slate-700"
                  >
                    Close Window
                  </button>
                  {onQuoteWithService && (
                    <button
                      onClick={() => {
                        const title = activeProject.title;
                        setActiveProject(null);
                        onQuoteWithService(title);
                      }}
                      className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg shadow hover:from-cyan-500 hover:to-blue-600"
                    >
                      Request Quotation for Similar Work
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
