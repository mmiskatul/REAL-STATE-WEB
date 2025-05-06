import React, { useEffect } from "react";
import {
  DarkModeProvider,
  useDarkMode,
} from "../component/DarkModeContext.jsx";
import HeroImg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  const { darkMode, toggleDarkMoode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${HeroImg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl font-semibold text-white lg:pr-[500px] pr-0 lg:leading-[70px] leading-16 "
          >
            Find your next Home in Las Vegas{" "}
          </h1>
          <p
            data-aos="zoom-in"
            className="text-xl text-white lg:pr-[500px] pr-0 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            temporibus? Consequuntur atque quis ex quisquam quibusdam iure optio
            numquam placeat?
          </p>
        </section>
      </div>

      {/* from start from here */}

      <div
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent "
        } z-10`}
      >
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14 `}
        >
          <div className="w-full">
            <h1 className="font-semibold text-black dark:text-white ">
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter an Address ,states,City, pincode"
              className="w-full p-2 mt-2 bg-white border-b-[1px] border-[#c9c7c1]"
            />
          </div>
          {/* TYPE SELECTION OPTION*/}
          <div className="w-full ">
            <h1 className="font-semibold text-black dark:text-white">TYPE </h1>
            <select
              name="SelectOption"
              id="selectOption"
              className="p-2 bg-white border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md "
            >
              <option value="" disabled selected>
                Select Properties
              </option>
              <option value="rental">Rental</option>
              <option value="sale">Sale</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land</option>
              <option value="office">Office Space</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>
          {/* CATEGORY SELECTION OPTION */}
          <div className="w-full ">
            <h1 className="font-semibold text-black dark:text-white">
              CATEGORY{" "}
            </h1>
            <select
              name="SelectOption"
              id="selectOption"
              className="p-2 bg-white border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md "
            >
              <option value="" disabled selected>
                Property Category
              </option>
              <option value="apartment">Apartment</option>
              <option value="duplex">Duplex</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
              <option value="townhouse">Townhouse</option>
              <option value="bungalow">Bungalow</option>
              <option value="studio">Studio</option>
            </select>
          </div>
          {/*  */}

          <div className="w-full">
            <button
              type="submit"
              className="w-full p-4 text-lg font-semibold text-white transition-transform duration-300 transform bg-red-600 cursor-pointer rounded-xl hover:scale-110 dark:hover:bg-gray-400 hover:bg-gray-400 dark:bg-red-700 dark:hover:text-black"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
