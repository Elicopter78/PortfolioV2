import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = performance.now();
    const minLoadingTime = 800;

    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      
      if (loadTime < minLoadingTime) {
        setTimeout(() => {
          setIsLoading(false);
        }, minLoadingTime - loadTime);
      } else {
        setIsLoading(false);
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.3;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
