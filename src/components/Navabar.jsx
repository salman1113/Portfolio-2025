import React from 'react'
import { Link } from 'react-router-dom'
import { FaProjectDiagram } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-gray-900 to-blue-900 py-4 px-8 flex justify-between items-center shadow-lg">
            {/* Minimal Icon Logo */}
            <div className="text-white">
                <FaProjectDiagram className="text-2xl" />
            </div>

            {/* Water Drop Links */}
            <div className="space-x-3 hidden md:flex">
                {['Home', 'Services', 'About me', 'Portfolio', 'Contact me'].map((item, index) => (
                    <Link
                        key={index}
                        to={`/${item.toLowerCase().replace(' ', '')}`}
className="bg-white/8 backdrop-blur-3xl border border-white/50 text-white px-5 py-3 rounded-full hover:bg-white/15 transition-all duration-700 shadow-2xl shadow-cyan-400/40 hover:shadow-cyan-400/60 hover:scale-[1.02] hover:-translate-y-0.5"                    >
                        {item}
                    </Link>
                ))}
            </div>

            <Link
                to="/contact"
                className="bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full hover:from-blue-600/40 hover:to-purple-600/40 transition-all duration-300 shadow-2xl shadow-purple-500/30 hover:scale-110 hover:-translate-y-1 animate-pulse hover:animate-none flex items-center space-x-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">Hire Me</span>
            </Link>
        </nav>
    )
}

export default Navbar