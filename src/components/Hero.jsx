import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";
import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaPython, FaDownload } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDjango } from "react-icons/si";
import profileImage from "../assets/myimage.webp";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const centerImageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // 1. Initial State
            gsap.set(cardRef.current, { scale: 0.98, opacity: 0 });
            gsap.set(".hero-text", { y: 20, opacity: 0 });
            gsap.set(centerImageRef.current, { scale: 0.9, opacity: 0 });

            // 2. Entrance Animation
            tl.to(cardRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out"
            })
                .to(centerImageRef.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.8")
                .to(".hero-text", {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6");

            // 3. Simple Mouse Interaction (Parallax)
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;

                // Mapped range -1 to 1
                const xMap = (clientX / innerWidth - 0.5) * 2;
                const yMap = (clientY / innerHeight - 0.5) * 2;

                // Subtle Tilt on Card
                gsap.to(cardRef.current, {
                    rotateY: xMap * 2, // Very subtle tilt
                    rotateX: -yMap * 2,
                    transformPerspective: 1000,
                    duration: 0.5,
                    ease: "power1.out"
                });

                // Parallax for Image (Moves opposite to cursor slightly)
                gsap.to(centerImageRef.current, {
                    x: -xMap * 15,
                    y: -yMap * 15,
                    duration: 0.5,
                    ease: "power1.out"
                });

                // Tech Icons Reactivity ("Anti-Gravity" only on move)
                gsap.to(".tech-icon", {
                    x: (index) => xMap * (20 + index * 10),
                    y: (index) => yMap * (20 + index * 10),
                    duration: 0.8,
                    ease: "power2.out"
                });
            };

            // Only add mouse move listener if not on touch device
            if (!window.matchMedia("(pointer: coarse)").matches) {
                window.addEventListener("mousemove", handleMouseMove);
            }

            return () => window.removeEventListener("mousemove", handleMouseMove);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative w-full flex flex-col items-center justify-start bg-[#0a0a0a] pt-24 md:pt-32 pb-4"
        >
            {/* Soft Ambient Background Glow (Green Accent) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-[var(--color-accent)] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

            {/* MAIN HERO CARD (Reduced Height for 6-second rule) */}
            <div
                ref={cardRef}
                className="relative w-[95%] max-w-[90rem] h-[65vh] md:h-[70vh] bg-[#121212] rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between p-6 md:p-12 transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)]"
            >
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />

                {/* LEFT CONTENT: Name & Role */}
                <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-1/3 order-2 md:order-1 mt-4 md:mt-0">
                    <div className="hero-text overflow-hidden">
                        <p className="text-[10px] md:text-xs text-gray-500 tracking-[0.4em] font-sans font-bold mb-2 uppercase">
                            /// Full Stack Developer
                        </p>
                    </div>

                    {/* TYPOGRAPHY: SALMAN */}
                    <h1 className="hero-text text-5xl sm:text-7xl lg:text-9xl font-black text-white md:text-white/50 tracking-tighter leading-[0.9] md:leading-[0.8] mix-blend-difference z-20 whitespace-nowrap md:whitespace-normal">
                        SAL<span className="md:hidden">MAN</span>
                        <br className="hidden md:block" />
                        <span className="hidden md:inline">MAN</span>
                    </h1>

                    {/* MOBILE ONLY 'FARIS' (Placed above 'Available for Hire') */}
                    <h1
                        className="hero-text block md:hidden text-5xl sm:text-7xl font-black text-transparent tracking-tighter leading-[0.9] -mt-2 z-10 opacity-80 whitespace-nowrap mb-4"
                        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
                    >
                        FARIS
                    </h1>

                    <div className="hero-text flex items-center gap-4 text-gray-400 mt-2">
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-[var(--color-accent)] transition-colors transition-transform hover:scale-110"><FaGithub size={22} /></a>
                            <a href="#" className="hover:text-[var(--color-accent)] transition-colors transition-transform hover:scale-110"><FaLinkedin size={22} /></a>
                        </div>
                        <span className="w-12 h-[1px] bg-gray-700 block"></span>
                        <span className="text-xs font-mono text-[var(--color-accent)]">AVAILABLE FOR HIRE</span>
                    </div>
                </div>

                {/* CENTER: IMAGE (Product-First Presentation) */}
                <div className="relative z-20 flex-1 h-[50%] md:h-[110%] w-full flex justify-center items-end order-1 md:order-2 pointer-events-none">
                    {/* Circle Graphic Behind */}
                    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full" />

                    <img
                        ref={centerImageRef}
                        src={profileImage}
                        alt="Salman Faris"
                        width="800"
                        height="1000"
                        loading="eager"
                        fetchPriority="high"
                        className="relative z-10 h-[100%] md:h-[90%] w-auto object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] grayscale-[20%] contrast-[110%] transition-all duration-700 pointer-events-auto"
                        style={{
                            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                        }}
                    />

                    {/* Floating Tech Icons (Micro-Interactions) */}
                    <div className="absolute inset-0 pointer-events-none z-30">
                        <FaReact className="tech-icon absolute top-[20%] left-[20%] md:left-[25%] text-2xl md:text-3xl text-gray-600 opacity-60" />
                        <SiDjango className="tech-icon absolute top-[30%] right-[20%] md:right-[25%] text-2xl md:text-3xl text-gray-600 opacity-60" />
                        <SiJavascript className="tech-icon absolute bottom-[40%] left-[10%] md:left-[20%] text-xl md:text-2xl text-gray-600 opacity-60" />
                    </div>
                </div>

                {/* RIGHT CONTENT: "Visual Momentum" CTA */}
                <div className="relative z-10 flex flex-col items-center md:items-end text-center md:text-right md:w-1/3 order-3 space-y-6 flex">
                    {/* FARIS: Desktop Only now */}
                    <h1
                        className="hero-text hidden md:block text-5xl sm:text-7xl lg:text-9xl font-black text-transparent tracking-tighter leading-[0.9] md:leading-[0.8] select-none z-20 transition-all duration-500 hover:text-white whitespace-nowrap md:whitespace-normal"
                        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
                    >
                        FAR<span className="md:hidden">IS</span>
                        <br className="hidden md:block" />
                        <span className="hidden md:inline">IS</span>
                    </h1>
                    <div className="hero-text flex flex-col items-center md:items-end gap-4">
                        {/* VIEW WORK BUTTON - Glassmorphism */}
                        <MagneticButton className="group relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-[var(--color-accent)] text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest transition-all duration-500 overflow-hidden flex items-center gap-3 pointer-events-auto">
                            <div className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                            <span className="group-hover:text-[var(--color-accent)] transition-colors">VIEW WORK</span>
                            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] group-hover:shadow-[0_0_15px_var(--color-accent)] transition-all"></span>
                        </MagneticButton>

                        {/* DOWNLOAD CV BUTTON */}
                        <a
                            href="/resume.pdf"
                            download="Salman_Faris_CV.pdf"
                            className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors pointer-events-auto text-xs tracking-widest font-bold px-4 py-2"
                        >
                            <span className="group-hover:text-[var(--color-accent)] transition-colors">DOWNLOAD CV</span>
                            <FaDownload className="text-gray-500 group-hover:text-[var(--color-accent)] transition-colors transform group-hover:translate-y-1 duration-300" />
                        </a>
                    </div>
                </div>
            </div>

            {/* VISUAL MOMENTUM HINT (Scroll Down) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-pulse">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
