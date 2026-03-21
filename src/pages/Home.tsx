import React, { useState } from 'react';
import Header from '@/components/Header.tsx';
import Navigation from '@/components/Navigation.tsx';
import WaveBackground from '@/components/WaveBackground.tsx';
import {
  AboutSection,
  ContactSection,
  ProjectsSection,
} from '@/components/sections/index.ts';
import type { SectionId } from '@/types';

function Home(): React.JSX.Element {
  const [active, setActive] = useState<SectionId>('about');

  const renderSection = (): React.JSX.Element => {
    switch (active) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="h-screen w-screen bg-black overflow-hidden flex flex-col">
      <Header />

      <main className="flex-1 px-6 pb-6">
        <div className="relative w-full h-full bg-black border border-white/10 overflow-hidden rounded-xl">
          <WaveBackground />

          {/* 🧭 UI Layer */}
          <div className="relative z-10 w-full h-full flex flex-col">
            <Navigation active={active} setActive={setActive} />

            {/* 📦 CONTENT */}
            <section className="relative z-10 w-full h-full flex flex-col">
              <div key={active} className="section-fade-in w-full max-w-6xl">
                {renderSection()}
              </div>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Home;