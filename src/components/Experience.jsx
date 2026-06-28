import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    year: 'Feb 2025',
    role: 'Web Development Intern',
    company: 'National Radio & Telecommunication Corporation (NRTC), Haripur, KPK',
    type: 'Internship',
    desc: "Interned at one of Pakistan's leading government defense tech organizations. Learned professional web development, built a fully functional university portal demo, and gained hands-on experience with real-world frontend and backend development.",
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Web Development'],
  },
  {
    year: '2025 — Present',
    role: 'Web Development Intern',
    company: 'Arch Technologies',
    type: 'Internship',
    desc: 'Building real-world web applications including portfolio websites and full-stack projects. Working with React, JavaScript, and modern frontend technologies to deliver production-ready solutions.',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Node.js'],
  },
];

const education = [
  {
    year: '2023 — Present',
    role: 'BS Computer Science',
    company: 'COMSATS University Islamabad, Abbottabad Campus',
    type: 'Education',
    desc: 'Studying core computer science fundamentals including data structures, algorithms, web development, databases, and software engineering. Strong foundation in C, Java, and Python.',
    skills: ['C', 'Java', 'Python', 'Data Structures', 'OOP'],
  },
];

const Experience = () => {
  const [tab, setTab] = useState('experience');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = window.innerWidth <= 768;

  const data = tab === 'experience' ? experiences : education;

  return (
    <section id="experience" ref={ref} style={{
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
        04 &mdash; Experience
      </motion.p>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'flex-start' : 'space-between',
        alignItems: isMobile ? 'flex-start' : 'flex-end',
        marginBottom: '3rem',
        gap: '1.5rem',
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? 'clamp(2rem, 10vw, 3rem)' : 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900, color: '#f0ede8', lineHeight: 1.1,
          }}>
          My <span style={{ color: '#c8a96e' }}>Journey.</span>
        </motion.h2>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 0, x: isMobile ? 0 : 30 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex' }}>
          {['experience', 'education'].map((t) => (
            <motion.button
              key={t}
              onClick={() => setTab(t)}
              whileHover={{ background: 'rgba(200,169,110,0.08)' }}
              style={{
                background: tab === t ? 'rgba(200,169,110,0.1)' : 'transparent',
                border: '1px solid rgba(200,169,110,0.2)',
                borderLeft: t === 'education' ? 'none' : '1px solid rgba(200,169,110,0.2)',
                color: tab === t ? '#c8a96e' : '#7a7570',
                padding: isMobile ? '0.5rem 1rem' : '0.6rem 1.5rem',
                fontSize: isMobile ? '0.68rem' : '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase', cursor: 'pointer',
                fontFamily: "'Inter', sans-serif", fontWeight: 500,
                transition: 'all 0.3s',
              }}>
              {t}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Timeline */}
      <div style={{
        position: 'relative',
        paddingLeft: isMobile ? '1.5rem' : '2rem',
      }}>

        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, #c8a96e, rgba(200,169,110,0.05))',
            transformOrigin: 'top',
          }}
        />

        {data.map((item, i) => (
          <motion.div
            key={tab + i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            style={{
              position: 'relative',
              marginBottom: '2.5rem',
              paddingBottom: '2.5rem',
              borderBottom: '1px solid rgba(200,169,110,0.06)',
            }}>

            {/* Diamond dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
              style={{
                position: 'absolute',
                left: isMobile ? '-1.85rem' : '-2.35rem',
                top: '0.3rem',
                width: '10px', height: '10px',
                border: '1px solid #c8a96e',
                background: '#0d0d0d',
                transform: 'rotate(45deg)',
              }}
            />

            <div style={{
              display: 'flex', gap: '0.75rem',
              alignItems: 'center', marginBottom: '0.75rem',
              flexWrap: 'wrap',
            }}>
              <span style={{
                fontSize: '0.72rem', color: '#c8a96e',
                letterSpacing: '0.1em', fontWeight: 500,
              }}>{item.year}</span>

              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.15 }}
                style={{
                  fontSize: '0.65rem', color: '#c8a96e',
                  border: '1px solid rgba(200,169,110,0.3)',
                  padding: '0.15rem 0.6rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>
                {item.type}
              </motion.span>
            </div>

            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? '1.1rem' : '1.4rem',
              color: '#f0ede8',
              fontWeight: 700, marginBottom: '0.3rem',
            }}>{item.role}</h3>

            <p style={{
              color: '#c8a96e',
              fontSize: isMobile ? '0.78rem' : '0.85rem',
              marginBottom: '0.75rem', fontWeight: 400,
            }}>{item.company}</p>

            <p style={{
              color: '#7a7570',
              fontSize: isMobile ? '0.82rem' : '0.88rem',
              lineHeight: 1.8,
              fontWeight: 300, marginBottom: '1rem',
            }}>{item.desc}</p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {item.skills.map((s, j) => (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.15 + j * 0.06 }}
                  whileHover={{ color: '#c8a96e', borderColor: 'rgba(200,169,110,0.4)' }}
                  style={{
                    fontSize: '0.7rem', color: '#7a7570',
                    background: 'rgba(200,169,110,0.05)',
                    border: '1px solid rgba(200,169,110,0.1)',
                    padding: '0.25rem 0.75rem',
                    letterSpacing: '0.05em',
                  }}>
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;