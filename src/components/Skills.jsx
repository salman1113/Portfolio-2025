import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Folder from './Folder';
import { FaReact, FaPython, FaGitAlt, FaGithub, FaDatabase, FaCode } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiDjango, SiPostgresql, SiPostman, SiDocker, SiBootstrap } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  // Calculate initial mobile state safely
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skillCategories = [
    {
      id: 1,
      name: "Backend",
      color: "#22c55e", // Green
      skills: [
        { name: "Python", icon: FaPython, color: "#FFD43B" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "FastAPI", icon: FaCode, color: "#009688" },
        { name: "Celery", icon: FaDatabase, color: "#37814A" },
        { name: "WebSocket", icon: FaCode, color: "#FFFFFF" },
      ],
    },
    {
      id: 2,
      name: "AI & Vision",
      color: "#ec4899", // Pink
      skills: [
        { name: "LangChain", icon: FaCode, color: "#1C3C3C" },
        { name: "FAISS", icon: FaDatabase, color: "#3b82f6" },
        { name: "OpenCV", icon: FaCode, color: "#5C3EE8" },
        { name: "MediaPipe", icon: FaCode, color: "#01A2E8" },
        { name: "LLMs", icon: FaDatabase, color: "#FFFFFF" },
      ],
    },
    {
      id: 3,
      name: "Frontend",
      color: "#a855f7", // Purple
      skills: [
        { name: "React 19", icon: FaReact, color: "#61DAFB" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "Framer", icon: FaCode, color: "#e2e8f0" },
        { name: "Axios", icon: FaCode, color: "#5A29E4" },
      ],
    },
    {
      id: 4,
      name: "Database",
      color: "#3b82f6", // Blue
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "SQLite", icon: FaDatabase, color: "#003B57" },
        { name: "Redis", icon: FaDatabase, color: "#DC382D" },
      ],
    },
    {
      id: 5,
      name: "Cloud & DevOps",
      color: "#f97316", // Orange
      skills: [
        { name: "AWS", icon: FaCode, color: "#FF9900" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "GitActions", icon: FaGithub, color: "#FFFFFF" },
        { name: "Nginx", icon: FaCode, color: "#009639" },
        { name: "Vercel", icon: VscVscode, color: "#000000" },
      ],
    },
  ];





  return (
    <section id="skills" className="relative bg-black text-white py-24 overflow-hidden">

      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-4 text-white">
            Skills & <br className="md:hidden" /> Capabilities
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mx-auto">
            A comprehensive look at the technologies and tools I use to build scalable, high-performance applications.
          </p>
        </div>

        {/* Vertical Stack of Skill Categories */}
        <div className="flex flex-col gap-16 md:gap-32">
          {skillCategories.map((cat, index) => (
            <div
              key={cat.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-20 items-center justify-center w-full`}
            >

              {/* Folder/Visual Side */}
              <div className="w-full md:w-1/2 flex justify-center relative">
                {/* Background Glow for Folder */}
                <div
                  className="absolute inset-0 opacity-20 blur-[80px] pointer-events-none transform scale-75"
                  style={{ backgroundColor: cat.color }}
                />

                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 w-full max-w-[400px] aspect-[4/3] flex items-center justify-center">
                  <Folder
                    size={isMobile ? 1.8 : 3.5}
                    color={cat.color}
                    items={cat.skills.map((skill, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center h-full w-full p-1 text-center group-hover:scale-110 transition-transform">
                        <skill.icon className="text-3xl md:text-4xl mb-2" style={{ color: skill.color }} />
                        <span className="text-[10px] md:text-xs font-bold text-gray-200 leading-tight px-1">{skill.name}</span>
                      </div>
                    ))}
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                <h3 className="text-4xl md:text-6xl font-black font-display tracking-tight" style={{ color: cat.color }}>
                  {cat.name}
                </h3>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0">
                  {cat.name === "Frontend" && "Crafting responsive, pixel-perfect, and interactive user interfaces using modern React ecosystems."}
                  {cat.name === "Backend" && "Architecting robust, scalable server-side logic and secure APIs with Python and Django."}
                  {cat.name === "AI & Vision" && "Integrating LLMs, Vector Search (FAISS), and Computer Vision into production environments."}
                  {cat.name === "Database" && "Designing efficient data schemas and optimizing queries for high-performance data persistence."}
                  {cat.name === "Cloud & DevOps" && "Streamlining deployment pipelines and managing cloud infrastructure for 99.9% uptime."}
                </p>

                {/* Skill Tags List */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-4">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs md:text-sm border border-white/10 rounded-full text-gray-300 bg-white/5">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;