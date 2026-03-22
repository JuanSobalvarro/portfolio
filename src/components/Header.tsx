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
    <header className="flex flex-col gap-3 px-3 py-3 sm:px-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:px-10 md:py-4 w-full">
    
      <div className="flex items-center justify-start md:justify-self-start min-w-0">
        <div className="shrink-0">
          <RotatingIcon 
            className="mr-3 h-10 w-10 sm:h-12 sm:w-12 md:mr-4 md:h-14 md:w-14" 
            size="1.1rem" 
            color="#f5f5f5" 
          />
        </div>

        <div className="min-w-0">
          <h1 className="flex items-center text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl truncate">
            {OWNER.title}
            <span className="ml-2 inline-block h-5 w-[2px] bg-blue-200/90 animate-pulse shrink-0" />
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-blue-300/60 truncate">
            By {OWNER.name}
          </p>
        </div>
      </div>

      <div className="w-full md:w-auto md:justify-self-center overflow-x-auto no-scrollbar">
        <Navigation active={active} setActive={setActive} />
      </div>

      {/* future theme switcher */}

    </header>
  );
}

export default Header;