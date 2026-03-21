import React from 'react';
import { CONTACT_INFO } from '@/constants';

interface ContactRow {
  label: string;
  href: string;
  value: string;
}

export default function ContactSection(): React.JSX.Element {
  const links: ContactRow[] = [
    {
      label: 'Email',
      href: `mailto:${CONTACT_INFO.email}`,
      value: CONTACT_INFO.email,
    },
    {
      label: 'GitHub',
      href: CONTACT_INFO.github ?? '#',
      value: CONTACT_INFO.github ?? 'N/A',
    },
    {
      label: 'LinkedIn',
      href: CONTACT_INFO.linkedin ?? '#',
      value: CONTACT_INFO.linkedin ?? 'N/A',
    },
    {
      label: 'Website',
      href: CONTACT_INFO.website ?? '#',
      value: CONTACT_INFO.website ?? 'N/A',
    },
  ];

  return (
    <section className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm md:p-10">
      <div className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">Contact</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Let&apos;s Build Something
        </h2>
        <p className="text-sm text-white/65">
          Open to collaboration, product work, and robotics-focused engineering.
        </p>
      </div>

      <div className="space-y-3">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05]"
          >
            <span className="text-xs uppercase tracking-[0.14em] text-white/50">
              {item.label}
            </span>
            <span className="text-sm text-white/75 transition-colors duration-300 group-hover:text-white">
              {item.value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
