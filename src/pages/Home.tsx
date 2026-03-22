import React, { useState } from 'react';
import Header from '@/components/Header';
import WaveBackground from '@/components/WaveBackground';
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  ProjectsSection,
} from '@/components/sections';
import type { SectionId } from '@/types';

function Home(): React.JSX.Element {
  const [active, setActive] = useState<SectionId>('about');

  const renderSection = () => {
    switch (active) {
      case 'about': return <AboutSection />;
      case 'projects': return <ProjectsSection />;
      case 'contact': return <ContactSection />;
      default: return <AboutSection />;
    }
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col overflow-hidden selection:bg-white selection:text-black">
      
      <Header active={active} setActive={setActive} />

      <main className="flex-1 w-full p-4 md:p-6 min-h-0">
        <div className="relative w-full h-full border border-white/10 rounded-2xl overflow-hidden bg-[#030303]">
          
          {/* BACKGROUND LAYER */}
          <div className="absolute inset-0 z-0">
            <WaveBackground />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* 🎯 STATIC CONTENT LAYER (No more overflow here) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
            <div key={active} className="section-fade-in w-full h-full flex items-center justify-center">
              {renderSection()}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-3 px-10 text-[10px] uppercase tracking-[0.4em] text-white/20 flex justify-between items-center">
        <span>© Juan Sobalvarro 2026</span>
        <span>^-^</span>
      </footer>
    </div>
  );
}

export default Home;