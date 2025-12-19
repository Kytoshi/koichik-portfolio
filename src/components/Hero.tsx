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
                & I'm a&nbsp;
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
                className={`group relative inline-flex items-center gap-2 px-8 py-3 border overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? "border-stone-100 text-stone-100"
                    : "border-zinc-900 text-zinc-900"
                }`}>
                <span className='relative z-10 transition-transform duration-300 group-hover:translate-x-1'>
                  View Projects
                </span>
                <svg
                  className='relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
                <span
                  className={`absolute inset-0 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ${
                    darkMode ? "bg-stone-100" : "bg-zinc-900"
                  }`}
                />
                <span
                  className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    darkMode ? "text-zinc-900" : "text-stone-100"
                  }`}
                  style={{ zIndex: 11 }}>
                  <span className='flex items-center justify-center h-full gap-2'>
                    <span className='transition-transform duration-300 group-hover:translate-x-1'>
                      View Projects
                    </span>
                    <svg
                      className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
