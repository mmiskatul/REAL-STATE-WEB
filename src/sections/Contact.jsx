import React from 'react';
import { useDarkMode } from '../component/DarkModeContext';

const Contact = () => {
  const { darkMode } = useDarkMode();

  return (
    <section id="contract" className={`py-16 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-100 text-gray-900'}`}>
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">
        {/* Contact Form */}
        <div className={`p-8 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="mb-4 text-xl font-semibold">Send us a message today</h2>
          <form data-aos="zoom-in" className="space-y-4">
            <input
              type="text"
              placeholder="Enter your full name here"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500'
                  : 'border-gray-300 focus:ring-red-300'
              }`}
            />
            <input
              type="email"
              placeholder="Enter your valid email"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500'
                  : 'border-gray-300 focus:ring-red-300'
              }`}
            />
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500'
                  : 'border-gray-300 focus:ring-red-300'
              }`}
            />
            <textarea
              placeholder="Enter your message here..."
              rows="4"
              className={`w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500'
                  : 'border-gray-300 focus:ring-red-300'
              }`}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition bg-red-600 rounded-lg hover:bg-red-700"
            >
              SEND EMAIL
            </button>
          </form>
        </div>

        {/* Info Text */}
        <div data-aos="zoom-in">
          <p className="mb-2 text-sm font-semibold text-red-600 uppercase">Reach Us</p>
          <h2 className="mb-4 text-3xl font-bold leading-snug">
            Get in touch with us today and our team will assist you
          </h2>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Our experts and developers would love to contribute their expertise and insights and help you today.
            Contact us to help you plan your next transaction, either buying or selling a home.
          </p>
          <button data-aos="zoom-in" className="px-6 py-2 font-semibold text-white transition bg-red-600 rounded-lg hover:bg-red-700">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
