import React from 'react';
import RotatingIcon from '@/components/RotatingCubeIcon';
import { OWNER } from '@/constants';

function Header(): React.JSX.Element {
  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-10">
      <div className="flex items-center">
        <RotatingIcon className="mr-4 h-14 w-14" size="1.1rem" color="#f5f5f5" />
        <div>
          <h1 className="flex items-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {OWNER.title}
            <span className="ml-2 inline-block h-6 w-[2px] bg-white/70 animate-pulse" />
          </h1>
          <p className="mt-1 text-sm text-white/70">By {OWNER.name}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;