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
      className="group relative w-full text-left rounded-2xl p-[1px] transition-all duration-500 hover:scale-[1.02]"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

      <div className="relative h-full rounded-2xl bg-black/40 backdrop-blur-xl overflow-hidden flex flex-col">
        
        <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
          {hero ? (
            <img
              src={hero.url}
              alt={hero.alt || project.title}
              className="h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white/10 text-xs font-mono">
              NO SIGNAL
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="flex flex-col justify-between p-5 flex-1">
          <div className="space-y-3">
            
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-light tracking-tight text-white/90 group-hover:text-white transition-colors">
                {project.title}
              </h3>

              <span className="text-[9px] px-2 py-1 rounded-full border border-white/10 text-white/40 uppercase tracking-widest group-hover:border-white/30 group-hover:text-white/60 transition-all">
                {project.status}
              </span>
            </div>

            <p className="text-sm text-white/50 line-clamp-2 leading-relaxed font-light">
              {project.description}
            </p>

            {project.tags && (
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.slice(0, 2).map(tag => (
                  <span
                    key={tag}
                    className="text-[9px] uppercase tracking-wider text-white/30 border border-white/10 px-2 py-[2px] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between">
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] text-white/30 font-mono tracking-tighter"
                >
                  [{tech}]
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-[10px] text-white/20">+{project.technologies.length - 3}</span>
              )}
            </div>

            {project.year && (
              <span className="text-[10px] text-white/20 font-mono">
                {project.year}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}