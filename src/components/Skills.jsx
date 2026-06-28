import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'JavaScript'] },
  { category: 'Backend', items: ['Node.js', 'PHP', 'Laravel', 'Python'] },
  { category: 'Languages', items: ['C', 'Java', 'Python', 'JavaScript'] },
  { category: 'Database & Cloud', items: ['Firebase', 'Firestore', 'MySQL'] },
  { category: 'Design', items: ['UI/UX Design', 'Figma', 'Responsive Design'] },
];

const Skills = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = window.innerWidth <= 768;

  return (
    <section id="skills" ref={ref} style={{
      padding: isMobile ? '5rem 6vw' : '8rem 10vw',
      borderTop: '1px solid rgba(200,169,110,0.08)',
    }}>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontSize: '0.72rem', letterSpacing: '0.25em',
          textTransform: 'uppercase', color: '#c8a96e',
          marginBottom: '1rem', fontWeight: 500,
        }}>
        02 &mdash; Skills
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: isMobile ? 'clamp(2rem, 10vw, 3rem)' : 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 900, color: '#f0ede8',
          lineHeight: 1.1, marginBottom: '3rem',
        }}>
        What I <span style={{ color: '#c8a96e' }}>Know.</span>
      </motion.h2>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1.5rem' : '4rem',
        alignItems: 'flex-start',
      }}>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : -40, y: isMobile ? 20 : 0 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            flex: isMobile ? 'none' : '0 0 220px',
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column',
            gap: '0.4rem',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
          }}>
          {skills.map((s, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ x: isMobile ? 0 : 6 }}
              style={{
                background: active === i ? 'rgba(200,169,110,0.05)' : 'transparent',
                border: isMobile
                  ? `1px solid ${active === i ? '#c8a96e' : 'rgba(200,169,110,0.2)'}`
                  : 'none',
                textAlign: 'left',
                padding: isMobile ? '0.5rem 1rem' : '1rem 1.25rem',
                cursor: 'pointer', transition: 'all 0.3s',
                borderLeft: isMobile ? undefined : (active === i ? '2px solid #c8a96e' : '2px solid transparent'),
                color: active === i ? '#c8a96e' : '#7a7570',
                fontSize: isMobile ? '0.7rem' : '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase', fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                borderRadius: isMobile ? '2px' : '0',
              }}>
              {s.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills content */}
        <div style={{ flex: 1 }}>
          <motion.h3
            key={active + '-title'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              color: '#f0ede8',
              marginBottom: '1.5rem', fontWeight: 700,
            }}>
            {skills[active].category}
          </motion.h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {skills[active].items.map((item, i) => (
              <motion.div
                key={active + '-' + i}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{
                  borderColor: '#c8a96e',
                  color: '#c8a96e',
                  background: 'rgba(200,169,110,0.08)',
                  y: -4,
                }}
                style={{
                  border: '1px solid rgba(200,169,110,0.2)',
                  padding: isMobile ? '0.65rem 1.25rem' : '0.85rem 1.75rem',
                  color: '#f0ede8',
                  fontSize: isMobile ? '0.82rem' : '0.9rem',
                  fontWeight: 300, letterSpacing: '0.05em',
                  cursor: 'default',
                  background: 'rgba(200,169,110,0.03)',
                }}>
                {item}
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              gap: isMobile ? '1.5rem' : '2.5rem',
              flexWrap: 'wrap',
            }}>
            {[['10+', 'Tools & Frameworks'], ['5+', 'Languages'], ['2', 'Internships']].map(([num, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 700, color: '#c8a96e',
                }}>{num}</div>
                <div style={{
                  fontSize: '0.68rem', color: '#7a7570',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem',
                }}>{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;