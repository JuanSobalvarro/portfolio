import React, { useEffect, useState } from "react";
import { initializeTheme, toggleTheme } from '../services/themes.js'; // Import theme functions

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'; // Import icons

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize theme based on saved preferences or system preference
    initializeTheme();
    // Set darkMode state based on the initial theme
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const handleThemeToggle = () => {
    toggleTheme(); // Toggle the theme
    setDarkMode(!darkMode); // Update state
  };

  return (
    <header className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 flex justify-between items-center shadow-md transition-colors">
      <div className="flex items-center">
        <img src="/logos/hexagon.svg" alt="Hexagon Logo" className={`w-12 h-12 mr-4 ${darkMode ? 'filter invert' : ''}`}/>
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">JuSo | Portfolio</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">By Juan Sobalvarro</p>
        </div>
      </div>
      <button
        onClick={handleThemeToggle}
        className="flex items-center justify-center bg-gray-300 dark:bg-gray-600 p-2 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6 text-yellow-500" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-600 dark:text-gray-200" />
        )}
      </button>
    </header>
  );
}

export default Header;
