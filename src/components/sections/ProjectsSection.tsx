import React, { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectDetailView from './ProjectDetailView.tsx'; // New component
import { PROJECTS } from '@/constants';
import type { Project } from '@/types';

export default function ProjectsSection(): React.JSX.Element {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section>
      {selectedProject ? (
        <div className="section-fade-in">
          <button 
            onClick={() => setSelectedProject(null)}
            className="mb-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            <span className="text-lg">←</span> Back to Projects
          </button>
          <ProjectDetailView project={selectedProject} />
        </div>
      ) : (
        <div className="space-y-12">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">
              What defines me is what I create
            </p>
            <h2 className="text-4xl font-light tracking-tighter text-white md:text-6xl">
              Projects
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}