import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const MagneticButton = ({ children, className = "", onClick }) => {
    const buttonRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = button.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * 0.3); // Magnetic strength
            yTo(y * 0.3);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        button.addEventListener("mousemove", mouseMove);
        button.addEventListener("mouseleave", mouseLeave);

        return () => {
            button.removeEventListener("mousemove", mouseMove);
            button.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className={`relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all bg-white rounded-full sm:text-xl hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/50 clickable ${className}`}
            onClick={onClick}
        >
            <span ref={textRef} className="relative z-10">
                {children}
            </span>
        </button>
    );
};

export default MagneticButton;
