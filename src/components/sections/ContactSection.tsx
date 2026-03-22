import React from 'react';
import Section from './Section';
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
  ];

  return (
    <Section >
      <div className="mb-6 space-y-2">
        {/* <p className="text-xs uppercase tracking-[0.2em] text-white/50">How to reach me</p> */}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Contact Me!
        </h2>
        <p className="text-sm text-white/65">
          Open to collaboration and always excited to connect with fellow developers, potential clients, or anyone interested in tech. Feel free to reach out!
        </p>
      </div>

      <div className="space-y-3">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            className="group flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05]"
          >
            <span className="text-xs uppercase tracking-[0.14em] text-white/50">
              {item.label}
            </span>
            <span className="text-sm text-white/75 transition-colors duration-300 group-hover:text-white break-all sm:break-normal">
              {item.value}
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
