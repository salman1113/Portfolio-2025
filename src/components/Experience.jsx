import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from "./ScrollFloat";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = document.querySelectorAll(".experience-card");

            gsap.fromTo(
                cards,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const experiences = [
        {
            company: "Bridgeon Solutions",
            role: "Python Full Stack Developer",
            period: "2025 – Present",
            description: "Orchestrated 15+ REST APIs using Django & DRF, cutting service response time by 25%. Crafted 12+ responsive UI modules with React.js/Redux, reducing bugs by 30%. specialized in secure JWT role-based authentication and optimizing heavy database queries (1.5s to <600ms).",
        },
        {
            company: "Nochad Higher Secondary",
            role: "Higher Secondary Education",
            period: "2023 – 2025",
            description: "Specialized in Commerce with Computer Application. Built a strong foundation in programming logic and business workflows, graduating with top honors.",
        },
    ];

    return (
        <section className="min-h-screen py-20 text-white bg-[var(--color-dark-bg)] bg-grid-white/[0.02]" id="experience">
            <div className="container px-4 mx-auto">
                {/* Section Header */}
                <div className="mb-20">
                    <h2 className="text-sm font-bold text-[var(--color-accent)] tracking-[0.5em] uppercase text-center mb-4">
                        /// Career Path
                    </h2>
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                        containerClassName="text-5xl md:text-7xl font-black text-center text-white"
                        textClassName=""
                    >
                        Experience
                    </ScrollFloat>
                </div>

                <div ref={containerRef} className="max-w-4xl mx-auto space-y-24 relative pl-8 md:pl-0">
                    {/* Continuous Timeline Line */}
                    <div className="absolute left-4 md:left-[50%] top-10 bottom-10 w-[1px] bg-gradient-to-b from-[var(--color-accent)] via-gray-800 to-transparent md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card relative grid md:grid-cols-2 gap-8 md:gap-16 items-start group">

                            {/* COMPANY WATERMARK (Bridgeon) */}
                            {exp.company === "Bridgeon Solutions" && (
                                <div className="absolute top-0 right-0 md:-right-12 text-[rgba(255,255,255,0.02)] font-black text-6xl md:text-9xl uppercase tracking-tighter pointer-events-none select-none z-0 flex items-start justify-end gap-4 transition-all duration-500 group-hover:text-[rgba(56,189,248,0.06)] group-hover:-translate-y-2">
                                    {/* Simulated Logo Mark (Large Background) */}
                                    <div className="w-24 h-24 md:w-40 md:h-40 bg-blue-600/5 rounded-2xl flex items-center justify-center -skew-x-12 absolute -top-10 -right-10 md:-top-16 md:-right-16 blur-2xl opacity-50"></div>
                                    <span className="hidden md:block relative z-10">Bridgeon</span>
                                </div>
                            )}

                            {/* Start Dot (Centered on Desktop) */}
                            <div className="hidden md:block absolute left-[50%] top-0 w-4 h-4 rounded-full bg-[var(--color-dark-bg)] border-2 border-[var(--color-accent)] -translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-[var(--color-accent)] transition-all duration-500 shadow-[0_0_20px_var(--color-accent)]" />

                            {/* Mobile Dot */}
                            <div className="md:hidden absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-[var(--color-accent)] z-10" />

                            {/* Left Side: Period (Desktop) */}
                            <div className={`hidden md:block text-right pr-12 pt-2 ${index % 2 !== 0 ? 'md:order-2 md:text-left md:pl-12 md:pr-0' : ''}`}>
                                <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors font-display">
                                    {exp.period}
                                </span>
                            </div>

                            {/* Right Side: Content (Desktop) - Swaps based on index for ZigZag */}
                            <div className={`relative z-10 ${index % 2 !== 0 ? 'md:order-1 md:text-right md:pr-12' : 'md:pl-12'}`}>
                                <h3 className="text-3xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors mb-2">
                                    {exp.role}
                                </h3>
                                <div className="flex items-center gap-3 mb-6 md:justify-end">
                                    <span className="text-sm font-mono text-[var(--color-accent)] tracking-widest uppercase">
                                        {exp.company}
                                    </span>
                                    <span className="md:hidden text-xs text-gray-600">/ {exp.period}</span>
                                </div>
                                <p className="text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
