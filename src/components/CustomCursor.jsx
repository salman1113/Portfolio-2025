import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        // Only run on desktop
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const cursor = cursorRef.current;

        // Move cursor with slight lag
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2, // Lag effect
                ease: "power2.out",
            });
        };

        // Scale up on hoverable elements
        const onMouseEnter = () => {
            gsap.to(cursor, { scale: 3, duration: 0.3, ease: "power2.out" });
        };

        const onMouseLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
        };

        window.addEventListener("mousemove", moveCursor);

        // Add event listeners to all clickable elements
        const clickables = document.querySelectorAll("a, button, .clickable");
        clickables.forEach((el) => {
            el.addEventListener("mouseenter", onMouseEnter);
            el.addEventListener("mouseleave", onMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", onMouseEnter);
                el.removeEventListener("mouseleave", onMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        />
    );
};

export default CustomCursor;
