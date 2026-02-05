import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from "./ScrollFloat";
import VariableProximity from "./VariableProximity";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const textRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const lines = textRef.current.querySelectorAll(".about-line");

            gsap.fromTo(
                lines,
                { opacity: 0.3, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "bottom 70%",
                        scrub: 1,
                    },
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);



    return (
        <section id="about" ref={containerRef} className="relative w-full min-h-[80vh] bg-black text-white flex items-center justify-center p-8 md:p-20">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black z-0" />

            <div className="relative z-10 max-w-4xl mx-auto text-left">
                <div ref={textRef} className="space-y-8 p-8 md:p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                        containerClassName="about-line text-3xl font-bold text-white md:text-5xl"
                        textClassName=""
                    >
                        About Me
                    </ScrollFloat>
                    <div className="relative about-line">
                        <VariableProximity
                            label="I am a developer from Calicut who bridges the gap between interactive Frontend and powerful Backend. Currently an Intern at Bridgeon Solutions, I specialize in building scalable web applications using the Python-React ecosystem."
                            className="text-xl md:text-2xl leading-relaxed text-gray-300 cursor-default"
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 700, 'opsz' 40"
                            containerRef={containerRef}
                            radius={80}
                            falloff="gaussian"
                            style={{ display: 'block' }}
                        />
                    </div>
                    <div className="pt-8 about-line">
                        <h3 className="mb-4 text-2xl font-semibold text-white">Interests</h3>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-6 py-2 text-sm font-medium text-purple-300 border border-purple-500 rounded-full bg-purple-500/10 backdrop-blur-sm">
                                🌌 Space Exploration
                            </span>
                            <span className="px-6 py-2 text-sm font-medium text-pink-300 border border-pink-500 rounded-full bg-pink-500/10 backdrop-blur-sm">
                                🧠 Psychology
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
