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
  <div className="relative h-screen w-screen bg-black overflow-x-hidden overflow-y-auto">
    {/* Background stays put */}
    <div className="fixed inset-0 z-0">
      <WaveBackground />
    </div>

    {/* UI Layer floats on top */}
    <div className="relative z-10 flex flex-col min-h-screen">
      <Header />
      <Navigation active={active} setActive={setActive} />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div key={active} className="section-fade-in w-full">
          {renderSection()}
        </div>
      </main>
    </div>
  </div>
);
}

export default Home;