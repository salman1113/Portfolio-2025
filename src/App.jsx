import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Footer from './components/Footer';

// Lazy Load Sections for Performance (Code Splitting)
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Education = React.lazy(() => import('./components/Education'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const SplashCursor = React.lazy(() => import('./components/SplashCursor'));

import { Suspense } from 'react';

function App() {
  // ... (useEffect remains same)

  return (
    <div className="bg-[var(--color-dark-bg)] min-h-screen w-full text-white overflow-x-hidden">

      <Suspense fallback={null}>
        <SplashCursor />
      </Suspense>
      <Header />

      <Suspense fallback={
        <div className="flex items-center justify-center h-screen bg-[#0a0a0a] text-white">
          <div className="w-12 h-12 border-4 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;