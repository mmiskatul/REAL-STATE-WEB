import React from 'react';
import { useDarkMode } from '../component/DarkModeContext';
import { FaHome, FaSearch, FaFileContract, FaCamera, FaChartLine, FaHandshake } from 'react-icons/fa';

const ServicesSection = () => {
  const { darkMode } = useDarkMode();

  const services = [
    {
      icon: <FaHandshake />,
      title: "Sell your home",
      description: "We sell your home at the best market price",
    },
    {
      icon: <FaHome />,
      title: "Home loans",
      description: "We offer you free consulting to get a loan",
    },
    {
      icon: <FaFileContract />,
      title: "Legal services",
      description: "Expert legal help for all related property items",
    },
    {
      icon: <FaSearch />,
      title: "Home inspection",
      description: "We make sure you get what you were promised",
    },
    {
      icon: <FaChartLine />,
      title: "Evaluation",
      description: "We offer you free evaluation to get a mortgage loan",
    },
    {
      icon: <FaCamera />,
      title: "Photoshoot",
      description: "We prepare your home visual presentation",
    }
  ];

  return (
    <section id='services' className={`py-16  ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container px-10 pt-24 pb-16 mx-auto bg-pink-100 rounded-xl">
        <h2 className={`text-4xl font-bold text-center mb-15 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          TOP Real Estate Services
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article 
              key={index} 
              className={`flex flex-col items-center text-center p-6 rounded-lg transform transition duration-300 ease-in-out group ${
                darkMode 
                  ? 'bg-gray-800 text-gray-200 hover:shadow-lg hover:bg-gray-300 hover:scale-110' 
                  : 'bg-gray-50 text-gray-700 hover:bg-pink-300 hover:scale-110  '
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}>
                {React.cloneElement(service.icon, { className: 'w-6 h-6 leading-none text-center' })}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white group-hover:text-black' : 'text-gray-800'}`}>
                {service.title}
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300 group-hover:text-black' : 'text-gray-600'}`}>
                {service.description}
              </p>
              <a 
                href="#" 
                className={`inline-flex items-center font-medium ${
                  darkMode ? 'text-blue-400 hover:text-blue-gray' : 'text-blue-600 group-hover:text-blue-800'
                }`}
              >
                READ MORE
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
