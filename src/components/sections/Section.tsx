import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps): React.JSX.Element {
  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
      
      {/* 🧊 GLASS WRAPPER */}
      <div className="relative w-full max-h-[80vh] rounded-[2.5rem] p-[1px] overflow-hidden">
        
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            background: `conic-gradient(from 225deg at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.2) 100%)`,
          }}
        />

        <div className="relative z-10 w-full rounded-[2.5rem] bg-black/80 backdrop-blur-xl overflow-hidden flex flex-col">
          
          {/* Subtle Internal Glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[100px]" />
        
          <div 
            className="overflow-y-auto custom-scrollbar px-8 md:px-14 py-20 max-h-[80vh] relative"
            // style={{
            //   /* We adjust the mask to start later so the padding is visible */
            //   maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            //   WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
            // }}
          >
            <div className="relative z-20">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}