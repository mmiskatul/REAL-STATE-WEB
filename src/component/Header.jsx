import React from 'react';
import { useDarkMode } from '../component/DarkModeContext.jsx';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="text-2xl font-bold">
          RealEstate
        </div>
        <nav className="hidden space-x-8 md:flex">
          <a href="#hero" className="hover:text-blue-600">Home</a>
          <a href="#properties" className="hover:text-blue-600">Properties</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
        <button 
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;