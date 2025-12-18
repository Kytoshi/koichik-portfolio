import Hero from "../components/Hero";
// import Bio from "../components/Bio";
// import Portfolio from "../components/Portfolio";
// import Skills from "../components/Skills";
// import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      {/* <Bio />
      <Portfolio />
      <Skills />
      <Contact /> */}

      <footer className="py-12 text-center text-gray-500 border-t border-zinc-900">
        <p>© 2025 Koichi Kodama. All rights reserved.</p>
      </footer>
    </div>
  );
}
