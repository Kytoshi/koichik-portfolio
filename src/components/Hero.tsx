import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const words = ["DEVELOPER", "DESIGNER", "CREATOR"];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentWord.length) {
          setIsPaused(false);
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap');

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        .cursor-blink {
          animation: blink 1s infinite;
        }
      `}</style>

      <div
        className={`min-h-screen w-full relative overflow-hidden transition-colors duration-300 ${
          darkMode ? "bg-black" : "bg-white"
        }`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div
          className='max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex items-center min-h-screen relative'
          style={{ fontFamily: "'Jost', sans-serif" }}>
          <div className='w-full'>
            <h1
              className={`text-6xl md:text-7xl lg:text-8xl font-semi tracking-wide mb-8 transition-all duration-1000 ${
                darkMode ? "text-white" : "text-black"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}>
              KOICHI KODAMA
            </h1>

            <div
              className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-wide transition-all duration-1000 delay-300 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}>
              <p className='flex items-center'>
                {displayedText}
                <span className={`ml-1 ${isPaused ? "cursor-blink" : ""}`}>
                  |
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
