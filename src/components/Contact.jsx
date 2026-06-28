import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const copyEmail = () => {
    navigator.clipboard.writeText('toobasajid003@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  });

  return (
    <section id="contact" ref={ref} style={{
      padding: '8rem 10vw',
      borderTop: '1px solid rgba(200,169,110,0.08)',
    }}>

      <motion.p {...fadeUp(0.1)} style={{
        fontSize: '0.72rem', letterSpacing: '0.25em',
        textTransform: 'uppercase', color: '#c8a96e',
        marginBottom: '1rem', fontWeight: 500,
      }}>
        05 &mdash; Contact
      </motion.p>

      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', flexWrap: 'wrap', gap: '4rem',
      }}>

        {/* LEFT */}
        <div style={{ flex: '1', minWidth: '280px' }}>
          <motion.h2 {...fadeUp(0.2)} style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900, color: '#f0ede8',
            lineHeight: 1.1, marginBottom: '1.5rem',
          }}>
            Let's Work<br />
            <span style={{ color: '#c8a96e' }}>Together.</span>
          </motion.h2>

          <motion.p {...fadeUp(0.3)} style={{
            color: '#7a7570', fontSize: '0.95rem',
            lineHeight: 1.9, maxWidth: '420px',
            fontWeight: 300, marginBottom: '3rem',
          }}>
            Available for freelance projects, collaborations, and
            full-time opportunities. Let's build something great together.
          </motion.p>

          {/* Contact links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                label: 'Email',
                content: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: '#f0ede8', fontSize: '0.95rem' }}>
                      toobasajid003@gmail.com
                    </span>
                    <motion.button
                      onClick={copyEmail}
                      whileHover={{ borderColor: '#c8a96e', color: '#c8a96e' }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: 'none',
                        border: '1px solid rgba(200,169,110,0.2)',
                        color: copied ? '#c8a96e' : '#7a7570',
                        padding: '0.3rem 0.8rem',
                        fontSize: '0.68rem',
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        cursor: 'none', transition: 'all 0.3s',
                        fontFamily: "'Inter', sans-serif",
                      }}>
                      {copied ? '✓ Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                ),
              },
              {
                label: 'GitHub',
                content: (
                  <motion.a
                    href="https://github.com/tsajid245"
                    target="_blank" rel="noreferrer"
                    whileHover={{ color: '#c8a96e', x: 4 }}
                    style={{
                      color: '#f0ede8', fontSize: '0.95rem',
                      textDecoration: 'none', display: 'inline-block',
                      transition: 'color 0.3s',
                    }}>
                    github.com/tsajid245 →
                  </motion.a>
                ),
              },
              {
                label: 'Fiverr',
                content: (
                  <motion.a
                    href="https://www.fiverr.com/s/WE559rE"
                    target="_blank" rel="noreferrer"
                    whileHover={{ color: '#c8a96e', x: 4 }}
                    style={{
                      color: '#f0ede8', fontSize: '0.95rem',
                      textDecoration: 'none', display: 'inline-block',
                      transition: 'color 0.3s',
                    }}>
                    fiverr.com/toobasajid →
                  </motion.a>
                ),
              },
              {
                label: 'LinkedIn',
                content: (
                  <span style={{ color: '#7a7570', fontSize: '0.95rem' }}>
                    Coming soon — will be added shortly
                  </span>
                ),
              },
            ].map(({ label, content }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                <p style={{
                  fontSize: '0.68rem', color: '#c8a96e',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  marginBottom: '0.4rem',
                }}>{label}</p>
                {content}
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Services */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            flex: '0 0 auto',
            borderLeft: '1px solid rgba(200,169,110,0.08)',
            paddingLeft: '4rem',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', gap: '0',
          }}>
          {[
            ['Web Development', 'React, Node.js, PHP, Laravel'],
            ['UI/UX Design', 'Figma, Responsive Design'],
            ['Backend APIs', 'Node.js, Firebase, MySQL'],
            ['Consultation', 'Architecture & Code Review'],
          ].map(([service, tech], i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              whileHover={{ x: 6, borderLeftColor: '#c8a96e' }}
              style={{
                borderBottom: '1px solid rgba(200,169,110,0.06)',
                borderLeft: '2px solid transparent',
                paddingLeft: '1rem',
                paddingTop: '1.25rem',
                paddingBottom: '1.25rem',
                transition: 'all 0.3s',
              }}>
              <h4 style={{
                color: '#f0ede8', fontSize: '0.9rem',
                fontWeight: 500, marginBottom: '0.3rem',
              }}>{service}</h4>
              <p style={{
                color: '#7a7570', fontSize: '0.78rem',
                fontWeight: 300,
              }}>{tech}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          marginTop: '6rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(200,169,110,0.08)',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
        <p style={{ color: '#7a7570', fontSize: '0.78rem', letterSpacing: '0.05em' }}>
          © 2025 Tooba Sajid. All rights reserved.
        </p>
        <p style={{ color: '#7a7570', fontSize: '0.78rem', letterSpacing: '0.05em' }}>
          Designed & Built with React
        </p>
      </motion.div>

    </section>
  );
};

export default Contact;