import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ScrollFloat from "./ScrollFloat";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Ecobay",
    category: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
    description: "A fully functional shopping cart and product showcase for headsets. Built with React, Tailwind, and JSON Server/Django.",
    tech: ["React", "Tailwind", "Django"],
    links: { github: "#", live: "#" }
  },
  {
    id: 2,
    title: "TaskMaster API",
    category: "Backend System",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000",
    description: "Robust task management system with authentication and CRUD operations. Powered by Python, Django, and DRF.",
    tech: ["Python", "Django", "DRF"],
    links: { github: "#", live: "#" }
  },
  {
    id: 3,
    title: "Coming Soon",
    category: "Future Project",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
    description: "More exciting projects are in the works. Stay tuned for updates on new full-stack applications.",
    tech: [],
    links: { github: "#", live: "#" }
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      // Horizontal Scroll - GLOBAL
      const sections = gsap.utils.toArray(".project-card");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + wrapperRef.current.offsetWidth,
          invalidateOnRefresh: true,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative bg-black text-white overflow-hidden">

      {/* UNIFIED SCROLL VIEW (Horizontal on all devices) */}
      <div
        ref={wrapperRef}
        className="flex h-screen items-center overflow-x-hidden min-h-screen"
        style={{ width: `${projects.length * 100}%` }}
      >
        {projects.map((project) => (
          <div key={project.id} className="project-card w-screen h-screen flex items-center justify-center p-4 md:p-10 flex-shrink-0 border-r border-gray-900/50">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl w-full items-center">

              {/* Image Container */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[40vh] md:h-[50vh] object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                <span className="text-purple-400 tracking-widest uppercase text-xs md:text-sm font-semibold">{project.category}</span>
                <h3 className="text-4xl md:text-7xl font-bold font-display">{project.title}</h3>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">{project.description}</p>

                {/* Tech Stack Pills (New) */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center md:justify-start gap-4 pt-4">
                  <button className="flex items-center gap-2 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors clickable text-sm md:text-base">
                    <FaGithub /> Code
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors clickable text-sm md:text-base">
                    <FaExternalLinkAlt /> Live Demo
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;