import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      padding: '1.25rem 2.5rem',
      background: scrolled || menuOpen ? 'rgba(13,13,13,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(200,169,110,0.1)' : 'none',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      transition: 'all 0.4s ease',
      boxSizing: 'border-box',
    }}>

      {/* Logo */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.3rem', fontWeight: 700,
        color: '#c8a96e', letterSpacing: '0.05em', cursor: 'pointer',
        zIndex: 1001,
      }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        TS
      </div>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', gap: '2.5rem', listStyle: 'none',
        margin: 0, padding: 0,
      }} className="desktop-nav">
        {links.map(link => (
          <li key={link}>
            <button onClick={() => scrollTo(link)} style={{
              background: 'none', border: 'none',
              color: '#7a7570', fontSize: '0.78rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'color 0.3s',
              fontFamily: "'Inter', sans-serif", fontWeight: 500,
            }}
              onMouseEnter={e => e.target.style.color = '#c8a96e'}
              onMouseLeave={e => e.target.style.color = '#7a7570'}
            >{link}</button>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none', border: 'none',
          cursor: 'pointer', zIndex: 1001,
          flexDirection: 'column', gap: '5px',
          padding: '4px',
        }}>
        <span style={{
          display: 'block', width: '24px', height: '1px',
          background: '#c8a96e',
          transition: 'all 0.3s',
          transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
        }} />
        <span style={{
          display: 'block', width: '24px', height: '1px',
          background: '#c8a96e',
          transition: 'all 0.3s',
          opacity: menuOpen ? 0 : 1,
        }} />
        <span style={{
          display: 'block', width: '24px', height: '1px',
          background: '#c8a96e',
          transition: 'all 0.3s',
          transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
        }} />
      </button>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(13,13,13,0.98)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '2rem',
        zIndex: 999,
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.3s ease',
      }}>
        {links.map((link, i) => (
          <button key={link} onClick={() => scrollTo(link)} style={{
            background: 'none', border: 'none',
            color: '#f0ede8',
            fontFamily: "'Playfair Display', serif",
            fontSize: '2rem', fontWeight: 700,
            cursor: 'pointer', letterSpacing: '0.05em',
            transition: 'color 0.3s',
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${i * 0.05}s`,
          }}
            onMouseEnter={e => e.target.style.color = '#c8a96e'}
            onMouseLeave={e => e.target.style.color = '#f0ede8'}
          >
            {link}
          </button>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;