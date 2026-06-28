import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorDot.current) {
        cursorDot.current.style.left = e.clientX + 'px';
        cursorDot.current.style.top = e.clientY + 'px';
      }
      if (cursorRing.current) {
        cursorRing.current.style.left = e.clientX + 'px';
        cursorRing.current.style.top = e.clientY + 'px';
      }
    };

    const handleHover = () => cursorRing.current?.classList.add('hovered');
    const handleLeave = () => cursorRing.current?.classList.remove('hovered');

    const handleScroll = () => {
      // Back to top button
      setShowTop(window.scrollY > 500);

      // Progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">

      {/* Custom cursor */}
      <div className="cursor-dot" ref={cursorDot} />
      <div className="cursor-ring" ref={cursorRing} />

      {/* Scroll progress bar */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: `${scrollProgress}%`,
        height: '2px',
        background: 'linear-gradient(to right, #c8a96e, #e8c98e)',
        zIndex: 9999,
        transition: 'width 0.1s ease',
        boxShadow: '0 0 8px rgba(200,169,110,0.6)',
      }} />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed', bottom: '2rem', right: '2rem',
            background: 'transparent',
            border: '1px solid rgba(200,169,110,0.4)',
            color: '#c8a96e', width: '44px', height: '44px',
            fontSize: '1.1rem', cursor: 'none',
            zIndex: 1000, transition: 'all 0.3s',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(200,169,110,0.1)';
            e.currentTarget.style.borderColor = '#c8a96e';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(200,169,110,0.4)';
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;