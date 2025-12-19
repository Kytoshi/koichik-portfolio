import React from "react";

interface Project {
  id: number;
  title: string;
  skills: string[];
  image: string;
  link?: string;
}

interface ProjectSectionProps {
  darkMode: boolean;
}

export default function ProjectSection({ darkMode }: ProjectSectionProps) {
  // Add new projects at the BOTTOM of this array - they will appear FIRST on the page
  const projects: Project[] = [
    {
      id: 1,
      title: "SunSafe",
      skills: ["Figma"],
      image: "/Projects/SunSafe/SunSafeTN.png",
      link: "#",
    },
    {
      id: 2,
      title: "Vehicle & Equipment Management System",
      skills: ["Figma", "UX Research"],
      image: "/Projects/SMC/VEMS/VemsTN.png",
      link: "#",
    },
    {
      id: 3,
      title: "Organizational Management Chart System",
      skills: ["Figma"],
      image: "/Projects/SMC/OrgChart/OrgChartTN.png",
      link: "#",
    },
  ].reverse();

  return (
    <section
      className={`min-h-screen w-full py-20 transition-colors duration-300 ${
        darkMode ? "bg-zinc-900" : "bg-stone-100"
      }`}
      id='projects'
      style={{ scrollMarginTop: "120px" }}>
      <div
        className='max-w-7xl mx-auto px-8 md:px-16 lg:px-24'
        style={{ fontFamily: "'Jost', sans-serif" }}>
        {/* Section Title */}
        <div className='mb-12'>
          <h2
            className={`text-4xl md:text-4xl lg:text-4xl font-light tracking-wide mb-6 transition-colors duration-300 ${
              darkMode ? "text-stone-100" : "text-zinc-900"
            }`}>
            PROJECTS
          </h2>
          <div
            className={`h-px w-full transition-colors duration-300 ${
              darkMode ? "bg-stone-700" : "bg-zinc-300"
            }`}></div>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className={`group relative aspect-square overflow-hidden cursor-pointer rounded-lg border-2 transition-colors duration-300 ${
                darkMode ? "border-zinc-700" : "border-stone-300"
              }`}>
              {/* Project Image */}
              <div
                className={`absolute inset-0 transition-colors duration-300 ${
                  darkMode ? "bg-zinc-800" : "bg-stone-200"
                }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>

              {/* Hover Overlay */}
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/75 transition-all duration-300 flex items-center justify-center pointer-events-none'>
                <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6'>
                  <h3 className='text-stone-100 text-xl md:text-2xl font-light mb-3 tracking-wide'>
                    {project.title}
                  </h3>
                  <p className='text-stone-400 text-xs md:text-sm font-light tracking-wide'>
                    {project.skills.join(" • ")}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
