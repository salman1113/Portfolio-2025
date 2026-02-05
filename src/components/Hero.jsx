import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";
import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaPython } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDjango } from "react-icons/si";
import profileImage from "../assets/myimage.PNG";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const splitTextLeftRef = useRef(null);
    const splitTextRightRef = useRef(null);
    const centerImageRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // 1. Initial State
            gsap.set(cardRef.current, { scale: 0.95, opacity: 0 });
            gsap.set(".tech-text-left", { x: -50, opacity: 0 });
            gsap.set(".tech-text-right", { x: 50, opacity: 0 });
            gsap.set(centerImageRef.current, { y: 100, opacity: 0 });
            gsap.set(".tech-decoration", { scale: 0, opacity: 0 });

            // 2. Entrance Animation
            tl.to(cardRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out"
            })
                .to(centerImageRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out"
                }, "-=0.2")
                // Split Text Reveal
                .to(".tech-text-left", {
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6")
                .to(".tech-text-right", {
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6")
                // Tech Decor
                .to(".tech-decoration", {
                    scale: 1,
                    opacity: 1,
                    stagger: {
                        amount: 0.5,
                        from: "random"
                    },
                    duration: 0.6,
                    ease: "back.out(1.7)"
                }, "-=0.4");

            // 3. Mouse Interaction (3D Card Tilt)
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                const x = (clientX / innerWidth - 0.5) * 10;
                const y = (clientY / innerHeight - 0.5) * 10;

                gsap.to(cardRef.current, {
                    rotateY: x,
                    rotateX: -y,
                    transformPerspective: 1000,
                    duration: 1,
                    ease: "power2.out"
                });

                // Parallax Internal Elements
                gsap.to(centerImageRef.current, {
                    x: x * 0.5,
                    y: y * 0.5,
                    duration: 1,
                    ease: "power2.out"
                });
                gsap.to(".tech-icon", {
                    x: x * 1.5,
                    y: y * 1.5,
                    duration: 1,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen w-full flex items-center justify-center bg-black p-4 md:p-8"
        >
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none" />

            {/* MAIN TECH CARD CONTAINER */}
            <div
                ref={cardRef}
                className="relative w-full max-w-[90rem] h-[85vh] md:h-[80vh] bg-[#0c0c0c]/80 backdrop-blur-2xl rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-20"
                    style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Decoration: Corner Brackets */}
                <div className="tech-decoration absolute top-4 left-4 md:top-8 md:left-8 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-purple-500/50 rounded-tl-lg" />
                <div className="tech-decoration absolute top-4 right-4 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg" />
                <div className="tech-decoration absolute bottom-4 left-4 md:bottom-8 md:left-8 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg" />
                <div className="tech-decoration absolute bottom-4 right-4 md:bottom-8 md:right-8 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />

                {/* LEFT COLUMN: 'SALMAN' */}
                <div ref={splitTextLeftRef} className="relative z-10 hidden md:flex flex-col justify-center items-start w-[30%] h-full pl-12 lg:pl-20 space-y-4">
                    <p className="tech-decoration text-xs text-purple-400 tracking-[0.3em] font-sans font-medium mb-4">/// EST. 2025</p>
                    <h1 className="tech-text-left text-6xl lg:text-8xl font-black text-white/90 tracking-tighter leading-none">
                        SAL
                        <br />
                        MAN
                    </h1>
                    <div className="tech-text-left mt-8 flex items-center gap-3 opacity-60">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                        <span className="text-xs font-sans tracking-widest text-white">Python Full Stack Developer</span>
                    </div>
                </div>

                {/* CENTER COLUMN: IMAGE + MOBILE TEXT */}
                <div className="relative z-20 flex-1 h-full flex flex-col justify-end items-center relative">
                    {/* Mobile Text (Visible only on small screens) */}
                    <div className="md:hidden absolute top-[15%] w-full text-center z-0 space-y-2">
                        <h1 className="mobile-tech-text text-5xl font-black text-white tracking-tight">SALMAN</h1>
                        <h1 className="mobile-tech-text text-5xl font-black text-purple-500 tracking-tight">FARIS</h1>
                    </div>

                    {/* Tech Circle Behind Head */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] border border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                    {/* Main Image */}
                    <img
                        ref={centerImageRef}
                        src={profileImage}
                        alt="Salman Faris"
                        fetchPriority="high"
                        loading="eager"
                        className="relative z-10 w-auto h-[75%] md:h-[90%] object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                        style={{
                            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                        }}
                    />

                    {/* Floating Icons */}
                    <div className="absolute inset-0 pointer-events-none z-20">
                        <FaReact className="tech-icon absolute top-[30%] left-[20%] text-4xl text-blue-400/80 animate-bounce" style={{ animationDuration: '3s' }} />
                        <FaPython className="tech-icon absolute top-[25%] right-[25%] text-4xl text-yellow-300/80 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                        <SiDjango className="tech-icon absolute bottom-[30%] left-[25%] text-3xl text-green-500/80 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
                    </div>

                    {/* Floating Badge (Bottom Center) */}
                    <div className="absolute bottom-6 z-30 slide-up-fade">
                        <MagneticButton className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full text-sm font-sans tracking-widest hover:bg-white hover:text-black transition-all">
                            VIEW PROJECTS
                        </MagneticButton>
                    </div>
                </div>

                {/* RIGHT COLUMN: 'FARIS' */}
                <div ref={splitTextRightRef} className="relative z-10 hidden md:flex flex-col justify-center items-end w-[30%] h-full pr-12 lg:pr-20 space-y-4">
                    <p className="tech-decoration text-xs text-right text-gray-500 tracking-[0.3em] font-sans font-medium mb-4">DEV_MODE: ACTIVE</p>
                    <h1 className="tech-text-right text-6xl lg:text-8xl font-black text-white/90 tracking-tighter leading-none text-right">
                        FAR
                        <br />
                        IS
                    </h1>
                    <div className="tech-text-right mt-8 flex flex-col items-end gap-2">
                        <div className="flex gap-4 text-gray-400">
                            <a href="#" className="hover:text-purple-400 transition-colors"><FaGithub size={20} /></a>
                            <a href="#" className="hover:text-purple-400 transition-colors"><FaLinkedin size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;