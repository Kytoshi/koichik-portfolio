import React, { useState, useEffect, useRef } from "react";

export default function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Trigger letter stagger animation
    setTimeout(() => setIsVisible(true), 100);
  });

  const name = "Koichi Kodama";
  const letters = name.split("");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Karla:wght@300;500&display=swap');
        
        .letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: letterReveal 0.8s ease-out forwards;
        }
        
        @keyframes letterReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="min-h-screen w-full bg-amber-50 relative overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 0 }}
        />

        <a
          href="/"
          className={`absolute top-8 left-8 md:top-12 md:left-12 transition-all duration-1000 hover:scale-110 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: 20 }}
          aria-label="Home"
        >
          <img
            src="/logo.png"
            alt="Koichi Kodama Logo"
            className="w-12 h-12 md:w-30 md:h-30 object-contain"
          />
        </a>

        <div
          className={`absolute top-12 right-12 w-32 h-px bg-green-800 transition-all duration-1500 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transformOrigin: "right", zIndex: 1 }}
        ></div>

        <div
          className="absolute bottom-0 left-0 w-full h-24 border-t border-stone-300"
          style={{ zIndex: 1 }}
        ></div>

        <div
          className="max-w-6xl mx-auto px-8 md:h-16 flex items-center justify-center min-h-screen relative"
          style={{ zIndex: 10 }}
        >
          <div className="text-center">
            <div
              className={`flex justify-center mb-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <div className="w-2 h-2 bg-green-800 rotate-45"></div>
            </div>

            <div>
              <h1
                className="text-7xl md:text-9xl font-normal text-stone-900 mb-12 leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {letters.map((letter, index) => (
                  <span
                    key={index}
                    className="letter"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                      whiteSpace: letter === " " ? "pre" : "normal",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h1>
            </div>

            <div
              className={`flex items-center justify-center gap-6 mb-12 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-px w-20 bg-stone-400"></div>
              <div className="w-1.5 h-1.5 bg-green-800 rounded-full"></div>
              <div className="h-px w-20 bg-stone-400"></div>
            </div>

            <div
              className={`flex items-center justify-center gap-8 md:gap-12 flex-wrap transition-all duration-1200 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ fontFamily: "'Karla', sans-serif" }}
            >
              <span className="text-stone-700 text-base tracking-widest uppercase">
                Developer
              </span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-700 text-base tracking-widest uppercase">
                Designer
              </span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-700 text-base tracking-widest uppercase">
                Creator
              </span>
            </div>

            <div
              className={`mt-20 transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <p
                className="text-xs text-stone-500 tracking-widest"
                style={{ fontFamily: "'Karla', sans-serif" }}
              >
                AVAILABLE FOR WORK
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
