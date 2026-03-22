import React, { useState, useEffect } from 'react';
import type { Project } from '@/types';
import { createPortal } from 'react-dom';

export default function ProjectDetailView({ project }: { project: Project }): React.JSX.Element {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [animTrigger, setAnimTrigger] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setAnimTrigger(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimTrigger(false);
      const timer = setTimeout(() => setShouldRender(false), 500);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsExpanded(false);
    };
    if (isExpanded) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isExpanded]);

  const activeImage = project.images?.[activeImageIndex];

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <div className="flex flex-col gap-6">
          <button 
            onClick={() => setIsExpanded(true)}
            className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0a0c10] cursor-zoom-in transition-all duration-500 shadow-2xl"
          >
            {activeImage ? (
              <img 
                src={activeImage.url} 
                alt={activeImage.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-mono text-[10px] text-blue-400/20 italic">
                // ASSET_NOT_FOUND
              </div>
            )}
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
               <div className="px-6 py-3 bg-black border border-blue-500/40 rounded-full text-[10px] font-mono tracking-[0.3em] text-blue-200 uppercase shadow-2xl">
                 Expand Visuals
               </div>
            </div>
          </button>

          <div className="flex gap-4 h-20">
            {project.images?.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`flex-1 rounded-xl border-2 overflow-hidden transition-all duration-300 ${
                  activeImageIndex === i ? 'border-blue-500 bg-blue-500/20 scale-105' : 'border-white/5 opacity-50 hover:opacity-100 hover:border-white/20'
                }`}
              >
                <img src={img.url} className="w-full h-full object-cover" alt="thumbnail" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between h-full py-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.4em]">
                <span className="text-blue-400 font-bold">[{project.year || '2026'}]</span>
                <span className="uppercase text-gray-500">{project.status}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-medium text-white tracking-tighter leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed font-normal max-w-prose">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-5">
              <h4 className="text-[10px] uppercase tracking-[0.5em] text-blue-400/60 font-bold">Stack Trace</h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-[10px] font-mono text-blue-100 bg-blue-500/10 px-4 py-1.5 rounded-md border border-blue-500/20 uppercase tracking-widest">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6 pt-10 border-t border-white/10">
            {project.links?.map((link) => {
              const isGithub = link.type === 'github';
              const isDemo = link.type === 'demo';

              return (
                <a 
                  key={link.url}
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[11px] font-mono flex items-center gap-3 group transition-all text-gray-400 hover:text-white"
                >
                  <span className={`
                    w-2 h-2 rounded-full
                    ${isGithub ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : ''}
                    ${isDemo ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : ''}
                    ${!isGithub && !isDemo ? 'bg-gray-600' : ''}
                    group-hover:scale-125 transition-transform
                  `} />

                  <span className="tracking-[0.2em] uppercase font-bold text-gray-300 group-hover:text-white transition-colors">
                    {link.label}
                  </span>

                  <span className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400">
                    →
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {shouldRender && activeImage && createPortal(
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
            animTrigger ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsExpanded(false)}
        >
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              animTrigger ? 'opacity-40 scale-110' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${activeImage.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(100px)',
            }}
          />

          <div className={`absolute inset-0 bg-[#050505] transition-opacity duration-500 ${
            animTrigger ? 'opacity-80' : 'opacity-0'
          }`} />

          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 md:p-16">
            <img
              src={activeImage.url}
              alt={activeImage.alt || project.title}
              onClick={(e) => e.stopPropagation()}
              className={`
                max-w-[95vw] max-h-[80vh] 
                object-contain rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.8)]
                border border-white/10
                transition-all duration-500 ease-out
                ${animTrigger ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
              `}
            />
            
            <div className={`absolute bottom-12 flex items-center gap-4 font-mono text-[10px] tracking-[0.5em] text-blue-400/40 transition-all duration-700 delay-300 ${
              animTrigger ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <span className="uppercase">Press ESC to return</span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}