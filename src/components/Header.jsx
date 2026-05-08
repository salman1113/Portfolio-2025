import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";
import ElectricBorder from "./ElectricBorder";
import NavBar from "./NavBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        linksRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.4 }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", target: "#home" },
    { name: "About", target: "#about" },
    { name: "Experience", target: "#experience" },
    { name: "Education", target: "#education" },
    { name: "Skills", target: "#skills" },
    { name: "Projects", target: "#projects" },
    { name: "Contact", target: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 w-full z-50 px-4 md:px-0 flex justify-center pointer-events-none">

        {/* Desktop Logo - Absolute Left */}
        <a
          href="#home"
          className="hidden md:block pointer-events-auto absolute top-2 left-8 text-2xl font-black tracking-tighter text-white hover:text-purple-400 transition-colors"
        >
          SF.
        </a>

        {/* Desktop Dock Navbar */}
        <div className="hidden md:block pointer-events-auto">
          <ElectricBorder color="#a855f7" borderRadius={9999}>
            {/* Increased width/padding for "length" and preserved glass effect */}
            <div className="bg-black/80 backdrop-blur-xl rounded-full px-16 py-3 shadow-2xl border border-white/5 min-w-[500px] flex justify-center">
              <NavBar />
            </div>
          </ElectricBorder>
        </div>

        {/* Mobile Bar - Full Width with ElectricBorder */}
        <div className="md:hidden w-full pointer-events-auto">
          <ElectricBorder color="#a855f7" borderRadius={9999}>
            <div className="flex justify-between items-center bg-black/80 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl border border-white/5">
              <a href="#home" className="text-xl font-black tracking-tighter text-white">SF.</a>
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </ElectricBorder>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center -translate-y-full"
      >
        <div ref={linksRef} className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.target}
              className="text-5xl font-black text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
