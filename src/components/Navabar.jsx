import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaProjectDiagram, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About me', path: '/about' },
        { name: 'Portfolio', path: '/projects' },
        { name: 'Contact me', path: '/contact' }
    ];

    return (
        <nav className="bg-gradient-to-r from-gray-900 to-blue-900 py-4 px-6 md:px-8 flex justify-between items-center shadow-lg relative">
            {/* Minimal Icon Logo */}
            <div className="text-white">
                <FaProjectDiagram className="text-2xl" />
            </div>

            {/* Desktop Navigation */}
            <div className="space-x-3 hidden md:flex">
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            `bg-gradient-to-br from-white/15 to-white/5 
                            backdrop-blur text-white px-5 py-3 
                            rounded-full transition-all duration-300 shadow-2xl 
                            shadow-blue-500/20 hover:shadow-blue-500/30 
                            hover:scale-110 hover:-translate-y-1
                            ${isActive
                                ? 'from-white/30 to-white/20 shadow-blue-500/50 scale-110 -translate-y-1 border border-white/40'
                                : 'hover:from-white/25 hover:to-white/15'
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>

            {/* Hire Me Button - Desktop */}
            <Link
                to="/contact"
                className="hidden md:flex bg-gradient-to-br from-blue-500/30 to-purple-500/30 
                backdrop-blur-xl border border-white/30 text-white px-6 py-3 
                rounded-full transition-all duration-300 shadow-2xl 
                shadow-purple-500/30 hover:from-blue-600/40 hover:to-purple-600/40 
                hover:scale-110 hover:-translate-y-1 animate-pulse hover:animate-none 
                items-center space-x-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">Hire Me</span>
            </Link>

            <button
                className="md:hidden text-white text-2xl p-2 rounded-lg bg-white/10 backdrop-blur border border-white/20"
                onClick={toggleMenu}
            >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-gray-900 to-blue-900 backdrop-blur-2xl border-t border-white/20 md:hidden z-50">
                    <div className="flex flex-col p-4 space-y-3">
                        {navItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `bg-gradient-to-br from-white/15 to-white/5 
                                    backdrop-blur text-white px-5 py-4 
                                    rounded-lg transition-all duration-300 shadow-2xl 
                                    shadow-blue-500/20 text-center
                                    ${isActive
                                        ? 'from-white/30 to-white/20 shadow-blue-500/50 border border-white/40'
                                        : 'hover:from-white/25 hover:to-white/15'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        
                        {/* Hire Me Button - Mobile */}
                        <Link
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-gradient-to-br from-blue-500/30 to-purple-500/30 
                            backdrop-blur-xl border border-white/30 text-white px-5 py-4 
                            rounded-lg transition-all duration-300 shadow-2xl 
                            shadow-purple-500/30 hover:from-blue-600/40 hover:to-purple-600/40 
                            animate-pulse text-center flex items-center justify-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="font-semibold">Hire Me</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar