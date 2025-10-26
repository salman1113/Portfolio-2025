import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active nav based on scroll position
      const sections = ['home', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveNav(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      icon: FaHome, 
      href: '#home',
      color: 'text-blue-400 hover:text-blue-300',
      activeColor: 'text-blue-300'
    },
    { 
      name: 'Skills', 
      icon: FaUser, 
      href: '#skills',
      color: 'text-green-400 hover:text-green-300',
      activeColor: 'text-green-300'
    },
    { 
      name: 'Projects', 
      icon: FaProjectDiagram, 
      href: '#projects',
      color: 'text-purple-400 hover:text-purple-300',
      activeColor: 'text-purple-300'
    },
    { 
      name: 'Contact', 
      icon: FaEnvelope, 
      href: '#contact',
      color: 'text-red-400 hover:text-red-300',
      activeColor: 'text-red-300'
    },
  ];

  const smoothScrollTo = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (name, href, event) => {
    if (event) {
      event.preventDefault();
    }
    setActiveNav(name);
    setIsOpen(false);
    smoothScrollTo(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-2xl' 
          : 'backdrop-blur-lg'
      }`}
    >
      {/* Pure Transparent Water Drop Container */}
      <div className={`relative overflow-hidden ${
        scrolled ? 'bg-black/20' : 'bg-black/10'
      }`}>
        
        {/* Water Drop Shape */}
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo with Water Drop Effect */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick('Home', '#home', e)}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 sm:space-x-3 group relative cursor-pointer"
            >
              {/* Water Drop Container */}
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-white/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-60"></div>
                
                {/* Water drop main shape */}
                <div className="relative bg-transparent border-2 border-white/30 rounded-full p-2 sm:p-3 backdrop-blur-sm group-hover:border-white/50 group-hover:bg-white/5 transition-all duration-500">
                  <FaCode className="text-lg sm:text-xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                  
                  {/* Water drop reflection */}
                  <div className="absolute top-1 left-1 w-2 h-1 bg-cyan-400/60 rounded-full blur-sm"></div>
                </div>
                
                {/* Dripping effect */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400/40 rounded-full blur-sm"
                ></motion.div>
              </div>
              
              <span className="text-lg sm:text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-300 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                SALMAN
              </span>
            </motion.a>

            {/* Desktop Navigation - Water Drop Tabs */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-black/20 backdrop-blur-xl rounded-2xl p-1 lg:p-2 border border-white/20">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.name, item.href, e)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-medium transition-all duration-500 flex items-center space-x-2 overflow-hidden cursor-pointer ${
                    activeNav === item.name
                      ? 'text-white bg-white/10 backdrop-blur-lg border border-white/20'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {/* Water drop background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl ${
                    activeNav === item.name ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  <item.icon className={`text-base lg:text-lg relative z-10 transition-colors duration-300 ${
                    activeNav === item.name ? item.activeColor : item.color
                  }`} />
                  <span className="relative z-10 text-sm lg:text-base">{item.name}</span>
                  
                  {/* Active water drop indicator */}
                  {activeNav === item.name && (
                    <motion.div
                      layoutId="waterDropActive"
                      className="absolute inset-0 rounded-xl border border-white/30 shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* Water reflection */}
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl"></div>
                    </motion.div>
                  )}
                  
                  {/* Hover water ripple effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 border-2 border-white/20 rounded-xl"
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button - Water Drop */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="md:hidden relative group"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Water drop button */}
              <div className="absolute inset-0 bg-white/10 rounded-lg blur-md group-hover:blur-lg transition-all duration-500"></div>
              <div className="relative bg-transparent border-2 border-white/30 rounded-lg p-2 sm:p-3 backdrop-blur-sm group-hover:border-white/50 group-hover:bg-white/5 transition-all duration-500">
                {isOpen ? 
                  <FaTimes className="text-red-400 group-hover:text-red-300 transition-colors duration-300 text-lg" /> : 
                  <FaBars className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 text-lg" />
                }
                
                {/* Water reflection */}
                <div className="absolute top-1 left-1 w-2 h-1 bg-white/40 rounded-full blur-sm"></div>
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu - Water Drop Container */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 relative"
              >
                {/* Water drop background */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-2xl rounded-2xl border-2 border-white/20 overflow-hidden">
                  {/* Water surface effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5"></div>
                  
                  {/* Water ripples */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-white/10 blur-sm"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 blur-sm"></div>
                </div>
                
                <div className="relative z-10 p-3 sm:p-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(item.name, item.href, e)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 flex items-center space-x-3 sm:space-x-4 rounded-xl mb-2 last:mb-0 transition-all duration-500 group relative overflow-hidden cursor-pointer ${
                        activeNav === item.name
                          ? 'text-white bg-white/15 border border-white/20'
                          : 'text-white/70 hover:text-white border border-transparent'
                      }`}
                    >
                      {/* Water drop background */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl ${
                        activeNav === item.name ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                      
                      <item.icon className={`text-base sm:text-lg relative z-10 transition-colors duration-300 ${
                        activeNav === item.name ? item.activeColor : item.color
                      }`} />
                      <span className="font-medium relative z-10 text-sm sm:text-base">{item.name}</span>
                      
                      {/* Active water drop indicator */}
                      {activeNav === item.name && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-3 sm:right-4 w-2 h-2 bg-white/60 rounded-full blur-sm"
                        ></motion.div>
                      )}
                      
                      {/* Water drip animation on hover */}
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="absolute bottom-1 left-3 sm:left-4 w-1 h-1 bg-white/40 rounded-full blur-sm"
                      ></motion.div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom water drip effect */}
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-white/20 rounded-t-full blur-sm"
        ></motion.div>
      </div>
    </motion.header>
  );
};

export default Header;