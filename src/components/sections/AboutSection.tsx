import React from 'react';
import Section from './Section';
import Face from '@/components/Face';
import { OWNER, PORTFOLIO_CONTENT, SKILLS } from '@/constants';

export default function AboutSection(): React.JSX.Element {
  return (
    <Section>
      <div className="grid gap-8 md:gap-12 md:grid-cols-[220px_1fr] md:items-center">
        <div className="mx-auto w-full max-w-[200px]">
          <div className="relative group">
            {/* soft glow that interacts with the glass */}
            <div className="absolute -inset-4 bg-white/30 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
            
            <div className="relative rounded-2xl border border-white/5 bg-black/20 p-4 backdrop-blur-sm">
              <Face className="h-auto w-full filter grayscale brightness-110 contrast-110" color="white" />
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">
              WHO AM I
            </p>
            <h1 className="text-4xl sm:text-5xl font-light tracking-tighter text-white md:text-7xl lg:text-8xl break-words">
              {OWNER.name}
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 leading-tight tracking-tight">
            {PORTFOLIO_CONTENT.bio}
          </p>
          
          <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-white/70 font-light mx-auto md:mx-0">
            {PORTFOLIO_CONTENT.message}
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-16 border-t border-white/10 pt-8 md:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {SKILLS.map((category) => (
            <div key={category.name} className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-blue-100/80 font-semibold">
                {category.name}
              </h2>
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-default flex items-center gap-2"
                  >
                    <span className="h-[1px] w-2 bg-white/20" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}