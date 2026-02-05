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
            role: "React / Full Stack Intern",
            period: "Present",
            description: "Started with HTML/CSS/JS, mastered React.js, and expanded into Backend with Python, Django, and SQL. Building scalable web applications and bridging the gap between frontend and backend.",
        },
    ];

    return (
        <section className="min-h-screen py-20 text-white bg-black" id="experience">
            <div className="container px-4 mx-auto">
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    containerClassName="mb-16 text-4xl font-bold text-center text-white md:text-6xl"
                    textClassName=""
                >
                    Experience
                </ScrollFloat>

                <div ref={containerRef} className="max-w-4xl mx-auto space-y-12 relative border-l-2 border-gray-800 ml-4 md:ml-auto pl-8 md:pl-0">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card relative md:pl-12">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] top-0 w-5 h-5 bg-purple-500 rounded-full border-4 border-black box-content" />

                            <div className="p-8 transition-all duration-300 border bg-white/5 border-white/10 rounded-2xl backdrop-blur-sm hover:border-purple-500/50 hover:bg-white/10 group">
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-300 uppercase rounded-full bg-purple-500/10">
                                    {exp.period}
                                </span>
                                <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{exp.role}</h3>
                                <h4 className="mb-4 text-lg text-gray-400">{exp.company}</h4>
                                <p className="leading-relaxed text-gray-300">
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
