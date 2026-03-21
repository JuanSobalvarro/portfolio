import React from 'react';
import Face from '@/components/Face';
import { OWNER, PORTFOLIO_CONTENT, SKILLS } from '@/constants';

export default function AboutSection(): React.JSX.Element {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm md:p-10">
      <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-start">
        <div className="mx-auto w-full max-w-[220px]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <Face className="h-auto w-full" color="white" />
          </div>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">About</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {OWNER.name}
          </h1>
          <p className="text-lg text-white/80">{PORTFOLIO_CONTENT.bio}</p>
          <p className="text-sm uppercase tracking-[0.14em] text-white/60">
            {PORTFOLIO_CONTENT.specialization}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-white/70">
            {PORTFOLIO_CONTENT.message}
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <h2 className="mb-4 text-sm uppercase tracking-[0.16em] text-white/60">Skills</h2>
        <div className="space-y-4">
          {SKILLS.map((category) => (
            <div key={category.name} className="space-y-2">
              <p className="text-sm text-white/70">
                <span className={`${category.color} mr-2`} aria-hidden="true">
                  ●
                </span>
                {category.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-white/75 transition-colors duration-300 hover:border-white/35 hover:text-white"
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
