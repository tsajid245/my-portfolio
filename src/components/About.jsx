import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = window.innerWidth <= 768;

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay },
  });

  const fadeLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -50 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay },
  });

  return (
    <section id="about" ref={ref} style={{
      padding: isMobile ? '5rem 6vw' : '8rem 10vw',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '2.5rem' : '6rem',
      alignItems: 'flex-start',
      borderTop: '1px solid rgba(200,169,110,0.08)',
    }}>

      {/* LEFT */}
      <div style={{ flex: '0 0 auto' }}>
        <motion.p {...fadeLeft(0.1)} style={{
          fontSize: '0.72rem', letterSpacing: '0.25em',
          textTransform: 'uppercase', color: '#c8a96e',
          marginBottom: '1rem', fontWeight: 500,
        }}>
          01 &mdash; About
        </motion.p>

        <motion.h2 {...fadeLeft(0.25)} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: isMobile ? 'clamp(2rem, 10vw, 3rem)' : 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 900, color: '#f0ede8',
          lineHeight: 1.1, maxWidth: '280px',
        }}>
          Who I<br />
          <span style={{ color: '#c8a96e' }}>Am.</span>
        </motion.h2>

        {!isMobile && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              width: '1px', height: '80px',
              background: 'linear-gradient(to bottom, #c8a96e, transparent)',
              marginTop: '2rem', transformOrigin: 'top',
            }}
          />
        )}
      </div>

      {/* RIGHT */}
      <div style={{ flex: 1 }}>
        <motion.p {...fadeUp(0.2)} style={{
          fontSize: isMobile ? '0.95rem' : '1.05rem',
          color: '#a09a94',
          lineHeight: 1.9, marginBottom: '1.5rem',
          fontWeight: 300,
        }}>
          I'm <span style={{ color: '#f0ede8', fontWeight: 500 }}>Tooba Sajid</span>,
          a passionate full-stack developer and UI/UX designer currently
          studying at <span style={{ color: '#c8a96e' }}>COMSATS University Islamabad,
          Abbottabad Campus</span>.
        </motion.p>

        <motion.p {...fadeUp(0.35)} style={{
          fontSize: isMobile ? '0.95rem' : '1.05rem',
          color: '#a09a94',
          lineHeight: 1.9, marginBottom: '2.5rem',
          fontWeight: 300,
        }}>
          My foundation in <span style={{ color: '#f0ede8' }}>C, Java, and Python</span> gives
          me strong problem-solving skills, while my experience with
          <span style={{ color: '#f0ede8' }}> React, Node.js, Laravel, and Firebase</span> lets
          me build complete, production-ready applications from scratch.
        </motion.p>

        {/* Info grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1rem',
          maxWidth: isMobile ? '100%' : '480px',
        }}>
          {[
            ['Degree', 'BS Computer Science'],
            ['University', 'COMSATS, Abbottabad'],
            ['Email', 'toobasajid003@gmail.com'],
            ['Availability', 'Open to Freelance'],
          ].map(([label, value], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              whileHover={{ x: 6 }}
              style={{
                borderLeft: '2px solid rgba(200,169,110,0.3)',
                paddingLeft: '1rem',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#c8a96e'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(200,169,110,0.3)'}
            >
              <div style={{
                fontSize: '0.68rem', color: '#c8a96e',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                marginBottom: '0.3rem',
              }}>{label}</div>
              <div style={{
                fontSize: '0.88rem', color: '#f0ede8', fontWeight: 400,
              }}>{value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;