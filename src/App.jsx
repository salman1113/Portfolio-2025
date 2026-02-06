import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
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

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;