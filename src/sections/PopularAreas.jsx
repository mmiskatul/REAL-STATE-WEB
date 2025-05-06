import React, { useEffect } from "react";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";

import {
  DarkModeProvider,
  useDarkMode,
} from "../component/DarkModeContext.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function PopularAreas() {
  const { darkMode } = useDarkMode(); // Fixed: called once

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"} `}>
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`}
      >
        {/* Top Section */}
        <div
          id="top"
          className="grid items-center justify-center w-full grid-cols-1 gap-8 lg:grid-cols-3"
        >
          <div>
            <h2 data-aos="zoom-in" className="text-red-500 dark:text-white">
              POPULAR AREAS
            </h2>
            <h1
              data-aos="zoom-in"
              className="text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white"
            >
              Explore Most <br /> Popular Areas
            </h1>
          </div>

          <div className="grid items-center justify-center grid-cols-1 col-span-2 gap-6 lg:grid-cols-3">
            {[area1, area2, area3].map((areaImg, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay="400"
                style={{ backgroundImage: `url(${areaImg})` }}
                className="h-[400px] bg-cover bg-center rounded-xl"
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div
          id="bottom"
          className="grid items-center justify-center w-full gap-6 lg:grid-cols-3 grid-col-1"
        >
          {[
            { count: "5k", label: "Active Listings" },
            { count: "3k", label: "Happy Clients" },
            { count: "2k", label: "Homes Sold" },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="slide-up"
              data-aos-delay="2000"
              className="flex items-center justify-center w-full gap-8"
            >
              <h1 className="font-semibold text-black text-7xl dark:text-white">
                {item.count}
              </h1>
              <h2 className="text-lg font-medium leading-tight text-black dark:text-white">
                {item.label}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PopularAreas;
