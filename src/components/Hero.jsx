import React, { useEffect, useState } from 'react';
import { motion} from 'framer-motion';

const CounterStat = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      let current = 0;
      const increment = Math.ceil(target / 50);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 30);
      return () => clearInterval(timer);
    }, 1200);
    return () => clearTimeout(delay);
  }, [target]);

  return (
    <div>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.8rem', fontWeight: 700, color: '#c8a96e',
        display: 'flex', alignItems: 'baseline', gap: '2px',
      }}>
        <span>{count}</span>
        <span>{suffix}</span>
      </div>
      <div style={{
        fontSize: '0.68rem', color: '#7a7570',
        letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem',
      }}>{label}</div>
    </div>
  );
};

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const roles = [
    'Full-Stack Developer',
    'React Developer',
    'UI/UX Designer',
    'Backend Engineer',
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      }, isDeleting ? 60 : 100);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    if (isMobile) return;
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [isMobile]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay },
  });

  const cardVariants = {
    initial: { opacity: 0, x: 40 },
    animate: (i) => ({
      opacity: 1, x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 + i * 0.12 },
    }),
  };

  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      alignItems: 'center',
      padding: isMobile ? '100px 6vw 4rem' : '0 10vw',
      paddingTop: isMobile ? '100px' : '80px',
      position: 'relative',
      overflow: 'hidden',
      gap: isMobile ? '3rem' : '4rem',
    }}>

      {/* Parallax background */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse at 20% 50%, rgba(200,169,110,0.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* LEFT SIDE */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        <motion.p {...fadeUp(0.1)} style={{
          fontSize: '0.78rem', letterSpacing: '0.25em',
          textTransform: 'uppercase', color: '#c8a96e',
          marginBottom: '1.5rem', fontWeight: 500,
        }}>
          &mdash; Hello, I'm
        </motion.p>

        <motion.h1 {...fadeUp(0.25)} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: isMobile ? 'clamp(2.5rem, 12vw, 4rem)' : 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: 900, lineHeight: 1.05,
          color: '#f0ede8', marginBottom: '0.3rem',
          letterSpacing: '-0.02em',
        }}>
          Tooba
        </motion.h1>

        <motion.h1 {...fadeUp(0.4)} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: isMobile ? 'clamp(2.5rem, 12vw, 4rem)' : 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: 900, lineHeight: 1.05,
          color: '#c8a96e', marginBottom: '2rem',
          letterSpacing: '-0.02em',
        }}>
          Sajid.
        </motion.h1>

        <motion.div {...fadeUp(0.55)} style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          marginBottom: '2rem', height: '2rem',
        }}>
          <span style={{
            fontSize: isMobile ? '0.9rem' : 'clamp(0.9rem, 2vw, 1.2rem)',
            color: '#7a7570', fontWeight: 300,
          }}>
            {displayText}
          </span>
          <span style={{
            width: '2px', height: '1.2rem',
            background: '#c8a96e',
            animation: 'blink 1s infinite',
            display: 'inline-block',
          }} />
        </motion.div>

        <motion.p {...fadeUp(0.65)} style={{
          fontSize: '0.95rem', color: '#7a7570',
          maxWidth: '420px', lineHeight: 1.8,
          marginBottom: '2.5rem', fontWeight: 300,
        }}>
          I craft modern web experiences — from pixel-perfect
          interfaces to powerful backends. Based in Pakistan,
          available worldwide.
        </motion.p>

        <motion.div {...fadeUp(0.75)} style={{
          display: 'flex', gap: '1rem',
          flexWrap: 'wrap', marginBottom: '3.5rem',
        }}>
          <button onClick={() => scrollTo('projects')} style={{
            background: '#c8a96e', color: '#0d0d0d',
            border: 'none', padding: '0.9rem 2rem',
            fontSize: '0.78rem', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            cursor: 'pointer', transition: 'all 0.3s',
            fontFamily: "'Inter', sans-serif",
            width: isMobile ? '100%' : 'auto',
          }}
            onMouseEnter={e => { e.target.style.background = '#e8c98e'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background = '#c8a96e'; e.target.style.transform = 'translateY(0)'; }}
          >
            View My Work
          </button>
          <button onClick={() => scrollTo('contact')} style={{
            background: 'transparent', color: '#c8a96e',
            border: '1px solid rgba(200,169,110,0.4)',
            padding: '0.9rem 2rem',
            fontSize: '0.78rem', fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            cursor: 'pointer', transition: 'all 0.3s',
            fontFamily: "'Inter', sans-serif",
            width: isMobile ? '100%' : 'auto',
          }}
            onMouseEnter={e => { e.target.style.borderColor = '#c8a96e'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(200,169,110,0.4)'; e.target.style.transform = 'translateY(0)'; }}
          >
            Hire Me
          </button>
        </motion.div>

        <motion.div {...fadeUp(0.85)} style={{
          display: 'flex', gap: '2.5rem',
        }}>
          <CounterStat target={10} suffix="+" label="Technologies" />
          <CounterStat target={2} suffix="" label="Internships" />
          <CounterStat target={5} suffix="+" label="Languages" />
        </motion.div>
      </div>

      {/* RIGHT SIDE — hide on mobile */}
      {!isMobile && (
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(8rem, 15vw, 14rem)',
              fontWeight: 900, lineHeight: 1,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(200,169,110,0.12)',
              userSelect: 'none',
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
              whiteSpace: 'nowrap',
            }}>
            T.S
          </motion.div>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Currently', value: 'Open to Freelance', icon: '●' },
              { label: 'Based in', value: 'Pakistan 🇵🇰', icon: '◆' },
              { label: 'Studying at', value: 'COMSATS, Abbottabad', icon: '▲' },
              { label: 'Fiverr', value: 'Web Dev & UI/UX', icon: '★' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover={{ borderColor: 'rgba(200,169,110,0.35)', background: 'rgba(200,169,110,0.05)', x: 4 }}
                style={{
                  border: '1px solid rgba(200,169,110,0.1)',
                  padding: '1rem 1.25rem',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  background: 'rgba(200,169,110,0.02)',
                }}>
                <span style={{ color: '#c8a96e', fontSize: '0.6rem' }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#7a7570', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#f0ede8', fontWeight: 400 }}>{item.value}</div>
                </div>
              </motion.div>
            ))}

            <motion.div
              custom={4}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              style={{
                border: '1px solid rgba(200,169,110,0.1)',
                padding: '1rem 1.25rem',
                background: 'rgba(200,169,110,0.02)',
              }}>
              <div style={{ fontSize: '0.65rem', color: '#7a7570', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Tech Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['React', 'Node.js', 'Laravel', 'Python', 'Firebase', 'PHP'].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.08, color: '#e8c98e' }}
                    style={{
                      fontSize: '0.72rem', color: '#c8a96e',
                      border: '1px solid rgba(200,169,110,0.2)',
                      padding: '0.25rem 0.65rem',
                      background: 'rgba(200,169,110,0.05)',
                      display: 'inline-block',
                    }}>
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;