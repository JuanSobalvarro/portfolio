import React from 'react';

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-green-900 font-mono text-green-300 py-8">
      <p className="text-center text-xs text-white/50">{currentYear}</p>
    </footer>
  );
}
