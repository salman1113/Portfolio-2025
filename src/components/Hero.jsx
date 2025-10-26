import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-60 h-60 sm:w-80 sm:h-80 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-60 h-60 sm:w-80 sm:h-80 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-white/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12"
                >
                    {/* Left Content */}
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-center lg:text-left"
                        >
                            {/* Greeting Text */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-base sm:text-lg text-white/60 mb-3 sm:mb-4 font-light tracking-wide"
                            >
                                Hello, I'm
                            </motion.p>

                            {/* Main Name */}
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
                            >
                                <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent font-poppins tracking-tight">
                                    SALMAN
                                </span>
                            </motion.h1>

                            {/* Last Name */}
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                            >
                                <span className="bg-gradient-to-r from-white/80 to-white/60 bg-clip-text text-transparent font-poppins tracking-tight">
                                    FARIS
                                </span>
                            </motion.h2>

                            {/* Type Animation */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 h-14 sm:h-16 text-center lg:text-left"
                            >
                                <TypeAnimation
                                    sequence={[
                                        'Full Stack Developer',
                                        2000,
                                        'React Specialist',
                                        2000,
                                        'AI Enthusiast',
                                        2000,
                                        'Problem Solver',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    className="bg-gradient-to-r from-white/80 to-white/60 bg-clip-text text-transparent font-semibold font-poppins"
                                />
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 leading-relaxed text-center lg:text-left font-inter max-w-xl mx-auto lg:mx-0"
                            >
                                Passionate full-stack developer crafting digital experiences with modern technologies.
                                Specializing in React, Python, and AI-driven solutions that make a difference.
                            </motion.p>

                            {/* CTA Buttons with Liquid Glass */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                            >
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative group"
                                >
                                    {/* Liquid Glass Background */}
                                    <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>

                                    {/* Main Button */}
                                    <div className="relative bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-6 sm:px-8 py-3 sm:py-4 group-hover:border-white/30 transition-all duration-500 overflow-hidden">
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                                        <span className="relative text-white font-semibold font-poppins text-sm sm:text-base flex items-center justify-center space-x-2">
                                            <span>Get In Touch</span>
                                        </span>
                                    </div>
                                </motion.a>

                                <motion.a
                                    href="#projects"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>

                                    <div className="relative bg-transparent backdrop-blur-md border border-white/10 rounded-full px-6 sm:px-8 py-3 sm:py-4 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
                                        <span className="relative text-white/80 font-semibold font-poppins text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                                            View Projects
                                        </span>
                                    </div>
                                </motion.a>
                            </motion.div>

                            {/* Social Links with Colored Icons and Liquid Glass */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1 }}
                                className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mt-6 sm:mt-8"
                            >
                                {[
                                    {
                                        icon: FaGithub,
                                        href: '#',
                                        color: 'text-gray-300 hover:text-white',
                                        bgColor: 'hover:bg-gray-800/80'
                                    },
                                    {
                                        icon: FaLinkedin,
                                        href: '#',
                                        color: 'text-blue-400 hover:text-blue-300',
                                        bgColor: 'hover:bg-blue-600/80'
                                    },
                                    {
                                        icon: FaInstagram,
                                        href: '#',
                                        color: 'text-pink-400 hover:text-pink-300',
                                        bgColor: 'hover:bg-pink-600/80'
                                    },
                                    {
                                        icon: FaEnvelope,
                                        href: '#',
                                        color: 'text-red-400 hover:text-red-300',
                                        bgColor: 'hover:bg-red-600/80'
                                    },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="relative group"
                                    >
                                        {/* Liquid Glass Background */}
                                        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>

                                        {/* Icon Container */}
                                        <div className={`relative bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 group-hover:border-white/20 transition-all duration-300 ${social.bgColor}`}>
                                            <social.icon className={`text-xl sm:text-2xl transition-colors duration-300 ${social.color}`} />
                                        </div>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side - Profile Image */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group"
                        >
                            {/* Liquid Glass Outer Ring */}
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 group-hover:border-white/30 transition-all duration-500"></div>

                            {/* Animated Inner Glow */}
                            <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Main Profile Container */}
                            <div className="relative w-full h-full bg-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all duration-500 overflow-hidden">
                                {/* Profile Image */}
                                <motion.img
                                    src=""
                                    alt="Muhammed Salman Faris"
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full h-full object-cover rounded-full"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80';
                                    }}
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
                            </div>

                            {/* Floating Particles */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 2, repeat: Infinity }
                                }}
                                className="absolute -inset-2 border border-white/5 rounded-full"
                            ></motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                animate={{
                                    rotate: -360,
                                    scale: [1.05, 1, 1.05]
                                }}
                                transition={{
                                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity }
                                }}
                                className="absolute -inset-4 border border-white/3 rounded-full"
                            ></motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;