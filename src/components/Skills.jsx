import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from './ScrollFloat';
import Folder from './Folder';
import { FaReact, FaPython, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiDjango, SiPostgresql, SiPostman, SiDocker, SiBootstrap } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const customPostgre = BiLogoPostgresql || SiPostgresql;

  const skillCategories = [
    {
      id: 1,
      name: "Frontend",
      color: "#a855f7", // Purple
      skills: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ],
    },
    {
      id: 2,
      name: "Backend",
      color: "#22c55e", // Green
      skills: [
        { name: "Python", icon: FaPython, color: "#FFD43B" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "DRF", icon: SiDjango, color: "#A30000" },
        { name: "ORM", icon: FaDatabase, color: "#FFFFFF" },
      ],
    },
    {
      id: 3,
      name: "Database",
      color: "#3b82f6", // Blue
      skills: [
        { name: "SQL", icon: customPostgre, color: "#336791" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      ],
    },
    {
      id: 4,
      name: "DevOps",
      color: "#f97316", // Orange
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#000000" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      const sections = gsap.utils.toArray(".skill-card");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1, // Smoother scrubbing
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.2, max: 0.3 },
            delay: 0,
            ease: "power1.inOut"
          },
          start: "top top",
          // Reduce the scroll distance slightly for mobile to make it feel more responsive? 
          // Actually, standard logic is usually strictly width based. 
          // Let's ensure we use specific logic.
          end: () => "+=" + wrapperRef.current.offsetWidth,
          invalidateOnRefresh: true,
          anticipatePin: 1, // Helps prevents jitter on start
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="relative bg-black text-white overflow-hidden overscroll-none">

      <div
        ref={wrapperRef}
        className="flex h-[100dvh] items-center overflow-x-hidden min-h-[100dvh]"
        style={{ width: `${skillCategories.length * 100}%` }}
      >
        {/* Fixed Heading Mobile Adjustments - Move down slightly or make relative if overlapping on small screens */}
        <div className="absolute top-20 md:top-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none mix-blend-difference w-full text-center">
          <h2 className="text-xl md:text-3xl font-bold font-display uppercase tracking-widest text-white/50">Skills & <br className="md:hidden" />Capabilities</h2>
        </div>

        {skillCategories.map((cat) => (
          <div key={cat.id} className="skill-card w-screen h-[100dvh] flex flex-col items-center justify-center p-4 md:p-10 flex-shrink-0 border-r border-gray-900/50 relative">

            {/* Background Glow */}
            <div
              className="absolute inset-0 opacity-10 blur-[100px] pointer-events-none"
              style={{ backgroundColor: cat.color }}
            />

            <div className="relative z-10 flex flex-col items-center gap-4 md:gap-12 w-full px-4 mt-12 md:mt-0">

              {/* FOLDER COMPONENT */}
              <div className="relative h-[250px] md:h-[300px] flex items-end justify-center w-full">
                <Folder
                  size={window.innerWidth < 768 ? 2 : 3} // Reduced mobile size slightly to fit content better
                  color={cat.color}
                  items={cat.skills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center h-full w-full p-1 text-center group-hover:scale-105 transition-transform">
                      <skill.icon className="text-2xl md:text-4xl mb-1" style={{ color: skill.color }} />
                      <span className="text-[9px] md:text-xs font-bold text-gray-200 leading-tight break-words px-1">{skill.name}</span>
                    </div>
                  ))}
                />
              </div>

              {/* TITLE & DESCRIPTION */}
              <div className="text-center space-y-2 md:space-y-4 relative z-20 mt-4 md:mt-0">
                <h3 className="text-4xl sm:text-6xl md:text-8xl font-black font-display tracking-tighter" style={{ color: cat.color }}>
                  {cat.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-lg max-w-[280px] sm:max-w-md mx-auto leading-relaxed">
                  {cat.name === "Frontend" && "Building responsive, interactive interfaces."}
                  {cat.name === "Backend" && "Powering robust, scalable server logic."}
                  {cat.name === "Database" && "Designing efficient, reliable data stores."}
                  {cat.name === "DevOps" && "Streamlining deployment & workflows."}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;