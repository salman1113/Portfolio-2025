import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from './ScrollFloat';
import Folder from './Folder';
import { FaReact, FaPython, FaGitAlt, FaGithub, FaDatabase, FaCode } from 'react-icons/fa';
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
      name: "Backend",
      color: "#22c55e", // Green
      skills: [
        { name: "Python", icon: FaPython, color: "#FFD43B" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "DRF", icon: SiDjango, color: "#A30000" },
        { name: "Celery", icon: FaDatabase, color: "#37814A" }, // Placeholder Icon
        { name: "REST APIs", icon: FaCode, color: "#FFFFFF" },
      ],
    },
    {
      id: 2,
      name: "Frontend",
      color: "#a855f7", // Purple
      skills: [
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "Axios", icon: FaCode, color: "#5A29E4" },
      ],
    },
    {
      id: 3,
      name: "Database",
      color: "#3b82f6", // Blue
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "SQLite", icon: FaDatabase, color: "#003B57" },
        { name: "Redis", icon: FaDatabase, color: "#DC382D" },
      ],
    },
    {
      id: 4,
      name: "Cloud & DevOps",
      color: "#f97316", // Orange
      skills: [
        { name: "AWS", icon: FaCode, color: "#FF9900" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "Vercel", icon: VscVscode, color: "#000000" }, // Use placeholder
        { name: "CI/CD", icon: FaGithub, color: "#FFFFFF" },
      ],
    },
  ];

  // Calculate initial mobile state safely to avoid layout shift on mount
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      const sections = gsap.utils.toArray(".skill-card");

      gsap.to(wrapperRef.current, {
        xPercent: -100 * (skillCategories.length - 1) / skillCategories.length,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1, // Smoother scrubbing
          snap: {
            snapTo: 1 / (skillCategories.length - 1),
            duration: { min: 0.2, max: 0.3 },
            delay: 0,
            ease: "power1.inOut"
          },
          start: "top top",
          end: () => "+=" + wrapperRef.current.offsetWidth,
          invalidateOnRefresh: true,
          anticipatePin: 1, // Helps prevents jitter on start
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section id="skills" ref={containerRef} className="relative bg-black text-white overflow-hidden overscroll-none">

      <div
        ref={wrapperRef}
        className="flex h-[100dvh] items-center overflow-x-hidden min-h-[100dvh]"
        style={{ width: `${skillCategories.length * 100}%` }}
      >
        {/* Fixed Heading Mobile Adjustments - Moved down to avoid Navbar overlap */}
        <div className="absolute top-32 md:top-24 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display uppercase tracking-widest text-white">Skills & <br className="md:hidden" />Capabilities</h2>
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
                  size={isMobile ? 2 : 3} // Dynamic sizing based on listener
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