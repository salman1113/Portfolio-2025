import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiCompass, FiMail, FiTerminal, FiFolder } from 'react-icons/fi';

const NavBar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeSection, setActiveSection] = useState('#home');

    const navItems = [
        { name: 'Home', icon: FiHome, url: '#home' },
        { name: 'About', icon: FiUser, url: '#about' },
        { name: 'Experience', icon: FiCompass, url: '#experience' },
        { name: 'Skills', icon: FiTerminal, url: '#skills' },
        { name: 'Projects', icon: FiFolder, url: '#projects' },
        { name: 'Contact', icon: FiMail, url: '#contact' },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const section = document.querySelector(item.url);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex items-center gap-6 px-2">
            {navItems.map((item, index) => {
                const isActive = activeSection === item.url;

                return (
                    <a
                        key={item.name}
                        href={item.url}
                        className="relative group p-3 flex items-center justify-center"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setActiveSection(item.url)}
                    >
                        {/* ACTIVE CAPSULE (Sliding Background) */}
                        {isActive && (
                            <motion.div
                                layoutId="active-capsule"
                                className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] z-0 backdrop-blur-md"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}

                        {/* HOVER TOOLTIP */}
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 px-3 py-1 bg-white text-black text-xs font-bold rounded-lg whitespace-nowrap z-50 pointer-events-none font-sans"
                                >
                                    {item.name}
                                    {/* Arrow pointing up */}
                                    <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* ICON */}
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className={`relative z-10 text-xl transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-purple-300'}`}
                        >
                            <item.icon />
                        </motion.div>
                    </a>
                );
            })}
        </div>
    );
};

export default NavBar;
