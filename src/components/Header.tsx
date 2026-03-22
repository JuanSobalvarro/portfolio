import React from 'react';
import RotatingIcon from '@/components/RotatingCubeIcon';
import Navigation from '@/components/Navigation.tsx';
import { OWNER } from '@/constants';
import type { SectionId } from '@/types';

interface HeaderProps {
  active: SectionId;
  setActive: (section: SectionId) => void;
}

function Header({ active, setActive }: HeaderProps): React.JSX.Element {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center px-6 py-4 md:px-10 w-full">
    
      <div className="flex items-center justify-self-start">
        <RotatingIcon className="mr-4 h-12 w-12 md:h-14 md:w-14" size="1.1rem" color="#f5f5f5" />
        <div className="hidden sm:block"> {/* Hide name on very small screens to keep center clean */}
          <h1 className="flex items-center text-xl font-semibold tracking-tight text-white md:text-2xl">
            {OWNER.title}
            <span className="ml-2 inline-block h-5 w-[2px] bg-white/70 animate-pulse" />
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">By {OWNER.name}</p>
        </div>
      </div>

      <div className="justify-self-center">
        <Navigation active={active} setActive={setActive} />
      </div>

      {/* future theme switcher */}

    </header>
  );
}

export default Header;