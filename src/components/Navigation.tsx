import React from 'react';
import { SECTIONS } from '@/constants';
import type { SectionId } from '@/types';

interface NavigationProps {
  active: SectionId;
  setActive: (section: SectionId) => void;
}

export default function Navigation({
  active,
  setActive,
}: NavigationProps): React.JSX.Element {
  const orderedSections = [...SECTIONS].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0),
  );

  return (
    <nav className="flex w-full items-center justify-center px-0 sm:px-2 md:px-4 text-sm overflow-x-auto">
      <ul className="relative flex min-w-max items-center gap-1 sm:gap-2 rounded-2xl bg-gray-800/5 p-1.5 sm:p-2 before:absolute before:inset-0 before:rounded-2xl before:content-[''] before:[mask-composite:exclude] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor]">
        {orderedSections.map((section) => {
          const isActive = section.id === active;

          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => setActive(section.id)}
                className={`relative rounded-lg px-2.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm uppercase tracking-[0.08em] sm:tracking-[0.12em] whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/80'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {section.label}
                <span
                  className={`absolute bottom-1 left-2.5 sm:left-4 right-2.5 sm:right-4 h-px origin-left bg-blue-500 transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
