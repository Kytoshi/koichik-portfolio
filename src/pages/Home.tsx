import { useState } from "react";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
// import Bio from "../components/Bio";
// import Portfolio from "../components/Portfolio";
// import Skills from "../components/Skills";
// import Contact from "../components/Contact";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-zinc-900" : "bg-stone-100"}>
      <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
      <ProjectSection darkMode={darkMode} />

      <footer className={`py-12 text-center border-t transition-colors duration-300 ${
        darkMode ? "text-stone-500 border-zinc-800" : "text-zinc-500 border-stone-300"
      }`}>
        <p>© {new Date().getFullYear()} Koichi Kodama. All rights reserved.</p>
      </footer>
    </div>
  );
}
