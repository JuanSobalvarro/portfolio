import React from 'react';
import Section from './Section';

const EXPERIENCES = [
  {
    company: "JuSo Software",
    role: "Founder & Lead Developer",
    period: "2025 — Present",
    description: "Developing custom ERP systems and landing pages for businesses in León. Focused on high-performance web solutions using Django and React.",
    tech: ["Django", "React", "PostgreSQL"]
  },
  {
    company: "ULSA Programming Club",
    role: "Club Leader",
    period: "2025 — 2026",
    description: "Leading a community of developers, organizing workshops on C++ and competitive programming, and mentoring junior engineering students.",
    tech: ["C++", "Algorithms", "Leadership"]
  },
  {
    company: "Universidad Tecnológica La Salle",
    role: "Cybernetic Electronics Engineering Student",
    period: "2021 — 2026",
    description: "Specializing in industrial automation and robotics. Developing a thesis on middleware for ABB IRB 140T robotic arms.",
    tech: ["Robotics", "Control Systems", "RAPID"]
  }
];

export default function ExperienceSection(): React.JSX.Element {
  return (
    <Section>
      <div className="space-y-12">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">
            My journey so far
          </p>
          <h2 className="text-4xl font-light tracking-tighter text-white md:text-6xl">
            Experience
          </h2>
        </div>

        <div className="relative space-y-0 pb-12">
          <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-10 pb-12 last:pb-0 group">
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full border border-white/20 bg-black flex items-center justify-center transition-all duration-500 group-hover:border-white/60">
                <div className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-white transition-colors" />
              </div>

              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <h3 className="text-xl font-light text-white group-hover:text-blue-400 transition-colors duration-500">
                    {exp.company}
                  </h3>
                  <span className="text-[10px] font-mono text-white/30 tracking-widest">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-sm font-medium text-white/70 tracking-wide uppercase">
                  {exp.role}
                </p>
                
                <p className="max-w-2xl text-base text-white/40 leading-relaxed font-light">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-[9px] text-white/20 border border-white/5 px-2 py-0.5 rounded uppercase tracking-tighter group-hover:border-white/10 group-hover:text-white/40 transition-all">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}