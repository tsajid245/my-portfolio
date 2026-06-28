import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'Personal Portfolio',
    category: 'Frontend',
    desc: 'A modern, responsive portfolio website built with React. Features smooth animations, typed text effect, and a clean dark aesthetic designed for Fiverr and freelance clients.',
    tech: ['React', 'CSS3', 'JavaScript', 'Framer Motion'],
    link: '#',
  },
  {
    id: '02',
    title: 'University Portal',
    category: 'Full-Stack',
    desc: 'A fully functional university portal demo built from scratch at NRTC Haripur. Features student dashboard, course management, and dynamic data handling.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    link: '#',
  },
  {
    id: '03',
    title: 'Task Manager App',
    category: 'Frontend',
    desc: 'A clean and minimal to-do application with full CRUD functionality — add, edit, delete, and mark tasks complete. Data persists via localStorage so tasks survive page refreshes.',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    link: '#',
  },
  {
    id: '04',
    title: 'More Coming Soon',
    category: 'Coming Soon',
    desc: 'Currently working on exciting new projects using React, Node.js, and Firebase. Stay tuned!',
    tech: ['React', 'Node.js', 'Firebase'],
    link: '#',
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = window.innerWidth <= 768;

  return (
    <section id="projects" ref={ref} style={{
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
        03 &mdash; Projects
      </motion.p>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'flex-start' : 'space-between',
        alignItems: isMobile ? 'flex-start' : 'flex-end',
        marginBottom: '3rem',
        gap: '1rem',
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
          My <span style={{ color: '#c8a96e' }}>Work.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 10 : 0 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            color: '#7a7570', fontSize: '0.85rem',
            maxWidth: '300px', lineHeight: 1.7, fontWeight: 300,
          }}>
          A selection of projects I've designed and built.
        </motion.p>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          height: '1px',
          background: 'rgba(200,169,110,0.15)',
          transformOrigin: 'left',
        }}
      />

      {/* Project rows */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
            onMouseEnter={() => !isMobile && setHovered(i)}
            onMouseLeave={() => !isMobile && setHovered(null)}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '40px 1fr' : '80px 1fr auto',
              alignItems: 'flex-start',
              gap: isMobile ? '1rem' : '2rem',
              padding: isMobile ? '1.75rem 0' : '2.5rem 1rem',
              borderBottom: '1px solid rgba(200,169,110,0.08)',
              cursor: 'default',
              transition: 'background 0.3s, padding-left 0.3s',
              background: hovered === i ? 'rgba(200,169,110,0.03)' : 'transparent',
              paddingLeft: hovered === i ? '1.5rem' : isMobile ? '0' : '1rem',
            }}>

            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? '0.75rem' : '0.9rem',
              color: '#c8a96e',
              fontWeight: 700, opacity: 0.6,
              paddingTop: '0.3rem',
            }}>{p.id}</span>

            <div>
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                gap: isMobile ? '0.4rem' : '1rem',
                marginBottom: '0.5rem',
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: isMobile ? '1.1rem' : 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  color: hovered === i ? '#c8a96e' : '#f0ede8',
                  fontWeight: 700, transition: 'color 0.3s',
                }}>{p.title}</h3>

                <span style={{
                  fontSize: '0.65rem', color: '#c8a96e',
                  border: '1px solid rgba(200,169,110,0.3)',
                  padding: '0.2rem 0.65rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                }}>
                  {p.category}
                </span>
              </div>

              <p style={{
                color: '#7a7570',
                fontSize: isMobile ? '0.82rem' : '0.85rem',
                lineHeight: 1.7,
                fontWeight: 300, marginBottom: '1rem',
              }}>{p.desc}</p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {p.tech.map((t, j) => (
                  <span key={j} style={{
                    fontSize: '0.7rem', color: '#7a7570',
                    background: 'rgba(200,169,110,0.05)',
                    border: '1px solid rgba(200,169,110,0.1)',
                    padding: '0.2rem 0.6rem',
                    letterSpacing: '0.05em',
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Arrow — desktop only */}
            {!isMobile && (
              <motion.div
                animate={{
                  opacity: hovered === i ? 1 : 0,
                  x: hovered === i ? 0 : -12,
                }}
                transition={{ duration: 0.25 }}
                style={{ fontSize: '1.5rem', color: '#c8a96e', alignSelf: 'center' }}>
                →
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;