import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SkeletonLoader from "./SkeletonLoader";

// Import project images (User to provided assets)
// Import project images (User to provided assets)
import echoBayImg from "../assets/echobay.webp";
import courseImg from "../assets/coursestore.webp";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Data Insights Agent",
    category: "AI Analytics Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    description: "Spearheaded an AI-powered analytics platform using FastAPI and React 19. Enables non-technical users to query datasets via natural language (LLM), reducing manual analysis time by 90%. Architecture includes high-performance Pandas pipelines and automated PDF reporting (Jinja2).",
    tech: ["FastAPI", "React 19", "LLM Integration", "Pandas", "Recharts"],
    links: { github: "#", live: "#" }
  },
  {
    id: 2,
    title: "Echobay",
    category: "Full Stack E-Commerce",
    image: echoBayImg,
    description: "Architected a decoupled application using DRF and React.js, hosted on AWS EC2 with Nginx. Unified secure authentication (Google OAuth 2.0 + JWT) and optimized reverse proxies for 99.9% uptime. Handles 500+ daily requests with robust CI/CD via Vercel.",
    tech: ["React", "Django REST", "AWS EC2", "Nginx", "Channels", "Celery", "PSQL"],
    links: { github: "https://github.com/salman1113/Echobay-Ecommerce_backend.git", live: "https://echobay.vercel.app/" }
  },
  {
    id: 3,
    title: " Learnest Course Platform",
    category: "LMS Backend API",
    image: courseImg,
    description: "Formulated a scalable LMS backend supporting 500+ concurrent users. Enforced robust RBAC via JWT for Admins, Instructors, and Students. Secured video delivery with Signed URLs and optimized Django filtering to reduce API payload size by 50%.",
    tech: ["Django", "PostgreSQL", "RBAC", "Docker", "Stripe"],
    links: { github: "https://github.com/salman1113/Learnest-AI-Backend.git", live: "#" }
  },
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Reveal Animation on Scroll
    gsap.fromTo(cardRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=10%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div ref={cardRef} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center py-20 px-4 max-w-7xl mx-auto w-full`}>

      {/* IMAGE SIDE (Browser Mockup) */}
      <div className="w-full md:w-3/5 group cursor-pointer perspective-1000">
        <div className="relative transform transition-transform duration-700 group-hover:rotate-x-2 group-hover:scale-[1.02]">
          {/* Browser Header Mockup */}
          <div className="h-8 bg-[#1e1e1e] rounded-t-xl flex items-center px-4 gap-2 border border-white/10 border-b-0">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="flex-1 text-center text-[10px] text-gray-500 font-mono hidden sm:block">
              {project.title.toLowerCase().replace(/\s/g, '')}.app
            </div>
          </div>

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-b-xl border border-white/10 border-t-0 bg-gray-900 aspect-video">

            {!imageLoaded && (
              <SkeletonLoader type="image" className="absolute inset-0 z-20" />
            )}

            <img
              src={project.image}
              alt={project.title}
              width="800"
              height="450"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-105 transition-transform duration-700`}
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
              <button className="px-6 py-2 bg-[var(--color-accent)] text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Case Study
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT SIDE */}
      <div className="w-full md:w-2/5 space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-[var(--color-accent)] font-mono text-sm tracking-widest uppercase">0{index + 1} // {project.category}</span>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
          {project.title}
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 text-xs border border-white/10 rounded text-gray-400 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-6 pt-4">
          <a href={project.links.github} className="text-white hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 underline underline-offset-8 decoration-white/30 decoration-1 hover:decoration-[var(--color-accent)]">
            <FaGithub /> GitHub
          </a>
          <a href={project.links.live} className="text-white hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 underline underline-offset-8 decoration-white/30 decoration-1 hover:decoration-[var(--color-accent)]">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>

    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0a] py-20 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6">
        <div className="mb-24 md:mb-32 text-center relative">
          <h2 className="text-6xl md:text-9xl font-black text-white/5 tracking-tighter absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full select-none pointer-events-none">
            WORK
          </h2>
          <h2 className="text-4xl md:text-6xl font-black text-white relative z-10 font-display uppercase tracking-widest">
            Selected <br /> Projects
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-0">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-24">
          <button className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-[var(--color-accent)] hover:text-black hover:border-transparent transition-all duration-300 font-bold uppercase tracking-widest text-sm">
            View All Archives
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
