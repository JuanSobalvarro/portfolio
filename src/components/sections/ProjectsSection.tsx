import React, { useMemo } from 'react';
import { FEATURED_PROJECTS, PROJECTS } from '@/constants';
import ProjectCard from './ProjectCard';

export default function ProjectsSection(): React.JSX.Element {
  const featuredIds = useMemo(
    () => new Set(FEATURED_PROJECTS.map((project) => project.id)),
    [],
  );

  return (
    <section className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm md:p-10">
      <div className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">Projects</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Selected Work
        </h2>
        <p className="text-sm text-white/65">
          A curated set of robotics, systems, and full-stack projects.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={featuredIds.has(project.id)}
          />
        ))}
      </div>
    </section>
  );
}
