import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../component/DarkModeContext.jsx';
import logo from '../assets/images/logo.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div  className="font-bold ">
          <img className='size-10' src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav  className="hidden space-x-8 md:flex">
          <a href="#hero" className="px-2 py-1 hover:border hover:text-white hover:bg-red-600 hover:rounded-xl">Home</a>
          <a href="#about" className="px-2 py-1 hover:border hover:text-white hover:bg-red-600 hover:rounded-xl">About</a>
          <a href="#properties" className="px-2 py-1 hover:border hover:text-white hover:bg-red-600 hover:rounded-xl">Properties</a>
          <a href="#services" className="px-2 py-1 hover:border hover:text-white hover:bg-red-600 hover:rounded-xl">Services</a>
          <a href="#contract" className="px-2 py-1 hover:border hover:text-white hover:bg-red-600 hover:rounded-xl">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button 
            data-aos="zoom-in"
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

          {/* Mobile Menu Button */}
          <button
            className="p-2 rounded-md md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container px-4 py-2 mx-auto">
          <a href="#hero" className="block py-2 hover:text-red-600">Home</a>
          <a href="#about" className="block py-2 hover:text-red-600">About</a>
          <a href="#properties" className="block py-2 hover:text-red-600">Properties</a>
          <a href="#services" className="block py-2 hover:text-red-600">Services</a>
          <a href="#contract" className="block py-2 hover:text-red-600">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;