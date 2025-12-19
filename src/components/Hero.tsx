import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

interface HeroProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function PortfolioHero({ darkMode, setDarkMode }: HeroProps) {
  const words = ["DEVELOPER", "DESIGNER", "CREATOR"];

  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(words.length - 1);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      setAnimationKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, words.length]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap');

        html {
          scroll-behavior: smooth;
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes slideOut {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .word-animate {
          animation: slideDown 0.5s ease-out forwards;
        }

        .word-exit {
          animation: slideOut 0.5s ease-out forwards;
        }
      `}</style>

      <div
        className={`min-h-screen w-full relative overflow-hidden transition-colors duration-300 ${
          darkMode ? "bg-zinc-900" : "bg-stone-100"
        }`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div
          className='max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex items-center min-h-screen relative'
          style={{ fontFamily: "'Jost', sans-serif" }}>
          <div className='w-full'>
            <h1
              className={`text-6xl md:text-7xl lg:text-8xl font-semi tracking-wide mb-8 transition-all duration-1000 ${
                darkMode ? "text-stone-100" : "text-zinc-900"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}>
              KOICHI KODAMA
            </h1>

            <div
              className={`flex items-baseline text-2xl md:text-3xl lg:text-4xl font-light tracking-wide transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}>
              <span className={darkMode ? "text-stone-100" : "text-zinc-900"}>
                I'm a&nbsp;
              </span>
              <div
                className='overflow-hidden relative'
                style={{
                  height: "1em",
                  minWidth: "280px",
                  display: "inline-block",
                }}>
                <span
                  key={`exit-${prevIndex}`}
                  className='word-exit absolute top-0 left-0 whitespace-nowrap bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'
                  style={{ display: "inline-block" }}>
                  {words[prevIndex]}
                </span>
                <span
                  key={`enter-${animationKey}`}
                  className='word-animate whitespace-nowrap bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'
                  style={{ display: "inline-block" }}>
                  {words[currentIndex]}
                </span>
              </div>
            </div>

            <div
              className={`mt-20 md:mt-24 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}>
              <a
                href='#projects'
                className='group inline-flex justify-center items-center gap-3 w-60 h-20 rounded-full bg-zinc-800 cursor-pointer transition-all duration-[450ms] ease-in-out hover:bg-gradient-to-b hover:from-purple-400 hover:to-purple-600 hover:shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4),inset_0px_-4px_0px_0px_rgba(0,0,0,0.2),0px_0px_0px_4px_rgba(255,255,255,0.2),0px_0px_180px_0px_#9917FF] hover:-translate-y-0.5'>
                <svg
                  height='24'
                  width='24'
                  fill='#AAAAAA'
                  viewBox='0 0 24 24'
                  className='transition-all duration-[800ms] ease-in-out group-hover:fill-white group-hover:scale-110'>
                  <path d='M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z'></path>
                </svg>
                <span className='font-semibold text-base text-gray-400 transition-all duration-[800ms] ease-in-out group-hover:text-white'>
                  View Projects
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
