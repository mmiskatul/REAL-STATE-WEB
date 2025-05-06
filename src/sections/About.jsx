import React, { useEffect } from "react";
import AboutImg from "../assets/images/about.jpg";
import {
  DarkModeProvider,
  useDarkMode,
} from "../component/DarkModeContext.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
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
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-black" : "light bg-transparent"
      } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 `}
    >
      {/* Image Section */}
      <div>
        <img
          data-aos="zoom-in"
          src={AboutImg}
          alt="About Us"
          className="rounded-2xl lg:w-[500px] lg:h-[600px]"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col items-start justify-center gap-8">
        <h2
          data-aos="zoom-in"
          className="text-sm tracking-widest text-red-500 uppercase dark:text-white"
        >
          Who We Are
        </h2>

        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-black text-[40px] font-semibold leading-tight dark:text-white"
        >
          Empowering You to Find the Perfect Home
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg text-gray-700 dark:text-gray-300 text-justify-center"
        >
          We are a team of real estate professionals dedicated to making your
          home search effortless. With deep knowledge of the market and a
          passion for helping clients, we guide you through every step of the
          property journey — from discovery to closing.
        </p>
        <button
              type="submit"
              className="p-4 text-lg font-semibold text-white transition-transform duration-300 transform bg-red-600 cursor-pointer rounded-xl hover:scale-110 dark:hover:bg-gray-400 hover:bg-gray-400 dark:bg-red-700 dark:hover:text-black"
            >
            READ MORE
            </button> 
      </div>
      
    </section>
  );
}

export default About;
