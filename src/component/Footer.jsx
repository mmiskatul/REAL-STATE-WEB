import React from 'react';
import { useDarkMode } from '../component/DarkModeContext.jsx';

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-200'}`}>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">RealEstate</h3>
            <p>Helping you find your dream property since 2010.</p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
              <li><a href="#properties" className="hover:text-blue-400">Properties</a></li>
              <li><a href="#" className="hover:text-blue-400">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Buying</a></li>
              <li><a href="#" className="hover:text-blue-400">Selling</a></li>
              <li><a href="#" className="hover:text-blue-400">Renting</a></li>
              <li><a href="#" className="hover:text-blue-400">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
            <address className="not-italic">
              123 Property Ave<br />
              Las Vegas, NV 89101<br />
              <a href="mailto:info@realestate.com" className="hover:text-blue-400">info@realestate.com</a><br />
              (702) 555-1234
            </address>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Md.Miskatul Masabi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;