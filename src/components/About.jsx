import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from "./ScrollFloat";
import VariableProximity from "./VariableProximity";
import { FaRocket, FaBrain, FaCode, FaLaptopCode } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax for the huge background text
            gsap.to(".bg-text", {
                y: 100,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Reveal animations for content
            gsap.fromTo(
                ".reveal-item",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 80%",
                    },
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className="relative w-full min-h-screen bg-[var(--color-dark-bg)] text-white flex flex-col justify-center py-20 overflow-hidden">

            {/* HUGE BACKGROUND TYPOGRAPHY */}
            <h1
                className="bg-text absolute top-32 left-6 md:top-20 md:left-0 text-[15vw] md:text-[25rem] font-black text-white/[0.03] pointer-events-none select-none z-0 tracking-tighter leading-none whitespace-nowrap"
                style={{ fontFamily: 'var(--font-display)' }}
            >
                ABOUT
            </h1>

            <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row gap-12 md:gap-24 items-start">

                {/* LEFT COLUMN: Title & Bio */}
                <div className="w-full md:w-3/5 space-y-12">
                    <div className="reveal-item">
                        <h2 className="text-sm md:text-base font-bold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4">
                            /// Who I Am
                        </h2>
                        <div className="text-4xl md:text-6xl font-black leading-tight">
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='top bottom+=20%'
                                scrollEnd='bottom bottom-=20%'
                                stagger={0.03}
                            >
                                Creative Developer.
                            </ScrollFloat>
                        </div>
                    </div>

                    <div className="reveal-item border-l-2 border-[var(--color-accent)] pl-6 md:pl-10 py-2">
                        <VariableProximity
                            label="I am a Full Stack Python Developer from Calicut, Kerala, specializing in building scalable web applications, real-time backend services, and AI-driven microservices. Currently a Developer at Bridgeon Solutions LLP, I seamlessly integrate powerful backends with interactive modern frontends. I believe in code that feels alive."
                            className="text-lg md:text-2xl leading-relaxed text-gray-400 hover:text-gray-200 transition-colors cursor-default"
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 500, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff="gaussian"
                            style={{ display: 'block' }}
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN: Interests / Specs Grid */}
                {/* RIGHT COLUMN: Stats & Languages */}
                <div className="w-full md:w-2/5 pt-10 md:pt-20">
                    <div className="reveal-item grid grid-cols-2 gap-8 border-l border-white/10 pl-8">
                        <div>
                            <h4 className="text-white font-bold text-3xl mb-1">15+</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">REST APIs</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-3xl mb-1">600ms</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">Query Speed</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-3xl mb-1">30%</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">Bug Reduction</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-3xl mb-1">100%</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">Delivered</p>
                        </div>
                    </div>

                    <div className="reveal-item mt-12 bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5">
                        <p className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4">Languages</p>
                        <div className="flex flex-wrap gap-3">
                            {['Malayalam', 'English', 'Hindi'].map((lang) => (
                                <span key={lang} className="px-3 py-1 bg-black/50 text-white text-sm rounded border border-white/10 border-l-2 border-l-[var(--color-accent)]">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
