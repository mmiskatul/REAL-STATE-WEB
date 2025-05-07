import React, { useEffect } from "react";
import { useDarkMode } from "../component/DarkModeContext.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { property } from "../component/export.js";
import {
  FaBath,
  FaBed,
  FaUser,
  FaShareAlt,
  FaHeart,
  FaPlus,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

function Properties() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({ offset: 200, duration: 800, easing: "ease-in-sine", delay: 100 });
  }, []);

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        id="properties"
        className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10"
      >
        {/* Header */}
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-4xl font-semibold text-black dark:text-white"
          >
            Explore the Latest
          </h1>
        </div>

        {/* Property Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {property.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white shadow-md dark:bg-gray-800 rounded-xl"
              data-aos="zoom-in"
            >
              {/* Image Section */}
              <div
                className="relative bg-center bg-cover h-60"
                style={{ backgroundImage: `url(${item.images})` }}
              >
                {/* Tags */}
                <div className="absolute flex gap-2 top-3 left-3">
                  {["Featured", "Sales", "active"].map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Info */}
                <div className="absolute flex items-center gap-2 text-white bottom-3 left-3">
                  <FaMapMarkerAlt />
                  <p className="text-sm">{item.address}</p>
                </div>
                <div className="absolute flex gap-2 text-white bottom-3 right-3">
                  <FaVideo />
                  <FaCamera />
                </div>
              </div>

              {/* Details Section */}
              <div className="p-4 space-y-2 text-black dark:text-white">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <h3 className="text-xl font-bold text-red-500">{item.price}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.about}</p>

                {/* Features */}
                <div className="flex items-center justify-between pt-3 text-sm text-red-500">
                  <span className="flex items-center gap-1">
                    <FaBath /> {item.bath}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBed /> {item.bed}
                  </span>
                  <span className="flex items-center gap-1">
                    <MdSpaceDashboard /> {item.area}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <FaUser className="text-lg" /> {item.owner}
                  </span>
                  <div className="flex gap-2 text-red-500">
                    <FaShareAlt className="cursor-pointer" />
                    <FaHeart className="cursor-pointer" />
                    <FaPlus className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex items-center justify-center w-full mt-12">
          <button
            data-aos="zoom-in"
            className="px-6 py-3 font-semibold text-white transition-all duration-300 bg-red-500 hover:bg-red-600 rounded-xl"
          >
            LOAD MORE
          </button>
        </div>
      </section>
    </div>
  );
}

export default Properties;
