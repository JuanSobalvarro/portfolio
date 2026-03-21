import React from 'react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  featured: boolean;
}

const STATUS_LABELS: Record<Project['status'], string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planned: 'Planned',
};

export default function ProjectCard({
  project,
  featured,
}: ProjectCardProps): React.JSX.Element {
  return (
    <article
      className={`group relative rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/35 ${
        featured
          ? 'border-white/30 bg-white/[0.06] shadow-[0_0_30px_rgba(255,255,255,0.06)]'
          : 'border-white/10 bg-white/[0.03]'
      }`}
    >
      {featured && (
        <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-white/[0.06] px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-white/80">
          Featured
        </span>
      )}

      <div className="space-y-3">
        <h3 className="pr-20 text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-white/70">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/60 transition-colors duration-300 group-hover:border-white/30 group-hover:text-white/85"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-1 text-xs uppercase tracking-[0.14em] text-white/50">
          {STATUS_LABELS[project.status]}
        </div>
      </div>
    </article>
  );
}
