import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Liquid Glass Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl"></div>
        
        {/* Animated Gradient Orbs - Responsive Sizes */}
        <div className="absolute -top-20 -left-20 w-40 h-40 sm:-top-32 sm:-left-32 sm:w-60 sm:h-60 md:-top-40 md:-left-40 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 sm:-bottom-32 sm:-right-32 sm:w-60 sm:h-60 md:-bottom-40 md:-right-40 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Additional Mobile-Only Background Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 sm:hidden bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 sm:hidden bg-white/5 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;