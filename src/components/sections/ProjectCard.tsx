import React from 'react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps): React.JSX.Element {
  const hero = project.images?.find(img => img.type === 'hero');

  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left rounded-2xl p-[1px] transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/40 via-blue-400/10 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full rounded-2xl bg-[#0a0c10] border border-white/10 overflow-hidden flex flex-col group-hover:bg-[#0f1218] transition-colors duration-500 shadow-2xl">
        
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          {hero ? (
            <img
              src={hero.url}
              alt={hero.alt || project.title}
              className="h-full w-full object-cover group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-blue-950/20 text-blue-400/20 text-[10px] font-mono tracking-widest">
              NO IMAGE FOR NOW
            </div>
          )}

          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent" /> */}
        </div>

        <div className="flex flex-col justify-between p-4 sm:p-5 flex-1">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-blue-100 transition-colors break-words">
                {project.title}
              </h3>
              <span className="text-[9px] px-2.5 py-1 rounded-md border border-blue-200/30 bg-blue-200/10 text-blue-100 uppercase font-bold tracking-tighter">
                {project.status}
              </span>
            </div>

            <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed font-normal group-hover:text-gray-300 transition-colors">
              {project.description}
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center justify-between border-t border-white/5 pt-4">
            <div className="flex flex-wrap gap-3">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[10px] text-blue-200 font-mono">
                   {tech}
                </span>
              ))}
            </div>
            <span className="text-[10px] text-gray-500 font-mono shrink-0">
              {project.year}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}