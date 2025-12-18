import React, { useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        darkMode ? "bg-zinc-900" : "bg-stone-100"
      }`}>
      <div className='max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-6'>
        <div className='flex items-center justify-between'>
          {/* Logo - Left aligned */}
          <a
            href='/'
            className='transition-opacity duration-300 hover:opacity-70'
            aria-label='Home'>
            <img
              src='/logo.png'
              alt='Koichi Kodama Logo'
              className='w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain'
            />
          </a>

          {/* Navigation and Dark Mode Toggle - Right aligned */}
          <div className='flex items-center gap-8 md:gap-12'>
            {/* Navigation Links */}
            <a
              href='/'
              className={`text-sm md:text-base font-light tracking-wide transition-opacity duration-300 hover:opacity-60 ${
                darkMode ? "text-stone-100" : "text-zinc-900"
              }`}
              style={{ fontFamily: "'Jost', sans-serif" }}>
              Projects
            </a>
            <a
              href='#about'
              className={`text-sm md:text-base font-light tracking-wide transition-opacity duration-300 hover:opacity-60 ${
                darkMode ? "text-stone-100" : "text-zinc-900"
              }`}
              style={{ fontFamily: "'Jost', sans-serif" }}>
              About
            </a>
            <a
              href='#resume'
              className={`text-sm md:text-base font-light tracking-wide transition-opacity duration-300 hover:opacity-60 ${
                darkMode ? "text-stone-100" : "text-zinc-900"
              }`}
              style={{ fontFamily: "'Jost', sans-serif" }}>
              Resume
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`text-sm md:text-base font-light tracking-wide transition-opacity duration-300 hover:opacity-60 ${
                darkMode ? "text-stone-100" : "text-zinc-900"
              }`}
              style={{ fontFamily: "'Jost', sans-serif" }}
              aria-label='Toggle dark mode'>
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
