import { useState, useRef, useEffect } from "react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (hoveredIndex !== null && navRefs.current[hoveredIndex]) {
      const element = navRefs.current[hoveredIndex];
      if (element) {
        setIndicatorStyle({
          width: element.offsetWidth,
          left: element.offsetLeft,
        });
      }
    }
  }, [hoveredIndex]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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
          <div className='flex items-center gap-4 md:gap-6'>
            {/* Navigation Links - Single Pill Container */}
            <div
              className={`relative flex items-center rounded-full p-1 border ${
                darkMode ? "border-zinc-700" : "border-stone-300"
              }`}
              onMouseLeave={handleMouseLeave}>
              {/* Sliding background indicator */}
              {hoveredIndex !== null && (
                <div
                  className={`absolute rounded-full transition-all duration-300 ease-out ${
                    darkMode ? "bg-zinc-700" : "bg-stone-300"
                  }`}
                  style={{
                    width: `${indicatorStyle.width}px`,
                    height: "calc(100% - 8px)",
                    left: `${indicatorStyle.left}px`,
                    top: "4px",
                  }}
                />
              )}
              <a
                ref={(el) => {
                  navRefs.current[0] = el;
                }}
                href='/'
                onMouseEnter={() => handleMouseEnter(0)}
                className={`relative z-10 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-light tracking-wide transition-colors duration-300 ${
                  darkMode ? "text-stone-100" : "text-zinc-900"
                }`}
                style={{ fontFamily: "'Jost', sans-serif" }}>
                Projects
              </a>
              <a
                ref={(el) => {
                  navRefs.current[1] = el;
                }}
                href='#about'
                onMouseEnter={() => handleMouseEnter(1)}
                className={`relative z-10 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-light tracking-wide transition-colors duration-300 ${
                  darkMode ? "text-stone-100" : "text-zinc-900"
                }`}
                style={{ fontFamily: "'Jost', sans-serif" }}>
                About
              </a>
              <a
                ref={(el) => {
                  navRefs.current[2] = el;
                }}
                href='#resume'
                onMouseEnter={() => handleMouseEnter(2)}
                className={`relative z-10 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-light tracking-wide transition-colors duration-300 ${
                  darkMode ? "text-stone-100" : "text-zinc-900"
                }`}
                style={{ fontFamily: "'Jost', sans-serif" }}>
                Resume
              </a>
            </div>

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
