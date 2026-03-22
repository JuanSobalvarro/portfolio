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
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => setIsExpanded(true)}
            className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40 cursor-zoom-in transition-transform duration-500 active:scale-[0.98]"
          >
            {activeImage ? (
              <img 
                src={activeImage.url} 
                alt={activeImage.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-mono text-[10px] text-white/10 italic">
                // ASSET_NOT_FOUND
              </div>
            )}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
               <div className="px-4 py-2 bg-black/60 border border-white/20 rounded-full text-[10px] font-mono tracking-widest text-white uppercase shadow-2xl">
                 Initialize Full-Screen View
               </div>
            </div>
          </button>

          <div className="flex gap-3 h-16">
            {project.images?.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`flex-1 rounded-xl border overflow-hidden transition-all duration-300 ${
                  activeImageIndex === i ? 'border-blue-500/60 ring-1 ring-blue-500/20' : 'border-white/5 opacity-40 hover:opacity-80'
                }`}
              >
                <img src={img.url} className="w-full h-full object-cover" alt="thumb" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between h-full py-2">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] text-white/30">
                <span className="text-blue-500">[{project.year || '2026'}]</span>
                <span className="uppercase">{project.status}</span>
              </div>
              <h1 className="text-5xl font-light text-white tracking-tighter leading-none">
                {project.title}
              </h1>
              <p className="text-lg text-white/50 leading-relaxed font-light">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="pt-8 border-t border-white/5 space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold italic">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-[10px] font-mono text-white/70 bg-white/[0.03] px-3 py-1 rounded border border-white/5 uppercase tracking-tighter">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/5">
            {project.links?.map((link) => {
              const isGithub = link.type === 'github';
              const isDemo = link.type === 'demo';

              return (
                <a 
                  key={link.url}
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`
                    text-[11px] font-mono flex items-center gap-2 group transition-all
                    ${isGithub ? 'text-white/80 hover:text-white' : ''}
                    ${isDemo ? 'text-white/80 hover:text-white' : ''}
                    ${!isGithub && !isDemo ? 'text-white/40 hover:text-white/70' : ''}
                  `}
                >
                  {/* Visual Cues based on type */}
                  <span className={`
                    text-[8px]
                    ${isGithub ? 'text-blue-500 group-hover:animate-pulse' : ''}
                    ${isDemo ? 'text-purple-500 group-hover:animate-pulse' : ''}
                    ${!isGithub && !isDemo ? 'text-white/20' : ''}
                  `}>
                    {isGithub ? '●' : isDemo ? '▲' : '◆'}
                  </span>

                  <span className="tracking-widest uppercase">
                    {link.label}
                  </span>

                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
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
              animTrigger ? 'opacity-30 scale-110' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${activeImage.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(80px)',
            }}
          />

          <div className={`absolute inset-0 bg-black/80 backdrop-blur-3xl transition-opacity duration-500 ${
            animTrigger ? 'opacity-50' : 'opacity-0'
          }`} />

          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 md:p-12">
            <img
              src={activeImage.url}
              alt={activeImage.alt || project.title}
              onClick={(e) => e.stopPropagation()}
              className={`
                max-w-[90vw] max-h-[85vh] 
                object-contain rounded-lg shadow-[0_0_80px_rgba(0,0,0,0.5)]
                transition-all duration-500 ease-out delay-75
                ${animTrigger ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
              `}
            />
            
            <div className={`absolute bottom-8 mt-10 flex items-center gap-6 font-mono text-[9px] tracking-[0.4em] text-white/30 transition-all duration-700 delay-300 ${
              animTrigger ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <span className="hidden md:block hover:text-white cursor-pointer transition-colors" onClick={() => setIsExpanded(false)}>
                Click Outside or ESC to exit
              </span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}