import React from 'react';
import Face from '@/components/Face';
import { OWNER, PORTFOLIO_CONTENT, SKILLS } from '@/constants';

export default function AboutSection(): React.JSX.Element {
  return (
    <section className="mx-auto w-full max-w-5xl p-6 md:p-10 min-h-[70vh] flex flex-col justify-center">
      
      <div className="grid gap-12 md:grid-cols-[200px_1fr] md:items-center">
        {/* Face Image: Minimalist frame */}
        <div className="mx-auto w-full max-w-[180px]">
          <div className="relative group">
            {/* Subtle glow behind the face to merge with dots */}
            <div className="absolute -inset-1 bg-white/5 blur-2xl rounded-full opacity-50" />
            <Face className="relative h-auto w-full filter grayscale contrast-125" color="white" />
          </div>
        </div>

        {/* Text Content: Clean typography */}
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">
              Discovery / 01
            </p>
            <h1 className="text-4xl font-light tracking-tighter text-white md:text-7xl">
              {OWNER.name}
            </h1>
          </div>
          
          <p className="text-xl font-medium text-white/90 leading-tight">
            {PORTFOLIO_CONTENT.bio}
          </p>
          
          <p className="max-w-xl text-base leading-relaxed text-white/50">
            {PORTFOLIO_CONTENT.message}
          </p>
        </div>
      </div>

      {/* Skills: Minimalist list without heavy boxes */}
      <div className="mt-16 border-t border-white/5 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category) => (
            <div key={category.name} className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                {category.name}
              </h2>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="text-sm text-white/60 hover:text-white transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}