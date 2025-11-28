import React, { useEffect, useRef, useState } from 'react';
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

export const Timeline = ({ data }) => {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const colors = {
    bg: isDarkMode ? '#0f0a1f' : '#f8fafc',
    cardBg: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)',
    text: isDarkMode ? '#ffffff' : '#1e293b',
    textMuted: isDarkMode ? '#94a3b8' : '#64748b',
    border: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
    primary: isDarkMode ? '#a78bfa' : '#7c3aed',
    secondary: isDarkMode ? '#818cf8' : '#6366f1',
    gradient: isDarkMode 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    lineGradient: isDarkMode
      ? 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.3), transparent)'
      : 'linear-gradient(to bottom, transparent, rgba(124, 58, 237, 0.2), transparent)',
    dotBg: isDarkMode ? '#1a1025' : '#ffffff',
    dotBorder: isDarkMode ? 'rgba(139, 92, 246, 0.5)' : 'rgba(124, 58, 237, 0.3)',
  };

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        fontFamily: 'inherit',
        padding: '0 1rem',
      }}
    >
      <div
        ref={ref}
        style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          paddingBottom: '5rem',
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              paddingTop: index === 0 ? '2rem' : '4rem',
              gap: '2rem',
            }}
          >
            {/* Left Side - Sticky Title for Desktop */}
            <div
              style={{
                position: 'sticky',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                top: '120px',
                alignSelf: 'flex-start',
                zIndex: 40,
                width: '100%',
                maxWidth: '280px',
              }}
              className="timeline-left"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  position: 'absolute',
                  left: '0',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: colors.dotBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isDarkMode 
                    ? '0 0 20px rgba(139, 92, 246, 0.3)' 
                    : '0 4px 20px rgba(124, 58, 237, 0.15)',
                  border: `3px solid ${colors.primary}`,
                }}
              >
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: colors.gradient,
                  }}
                />
              </motion.div>

              {/* Year/Title - Desktop */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  display: 'none',
                  paddingLeft: '70px',
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontWeight: '700',
                  background: colors.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                className="timeline-title-desktop"
              >
                {item.title}
              </motion.h3>
            </div>

            {/* Right Side - Content */}
            <div
              style={{
                position: 'relative',
                paddingLeft: '70px',
                width: '100%',
              }}
              className="timeline-content"
            >
              {/* Year/Title - Mobile */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'block',
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  background: colors.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                className="timeline-title-mobile"
              >
                {item.title}
              </motion.h3>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {item.content}
              </motion.div>
            </div>
          </div>
        ))}

        {/* Timeline Vertical Line - Background */}
        <div
          style={{
            position: 'absolute',
            left: '21px',
            top: 0,
            height: `${height}px`,
            width: '2px',
            background: colors.lineGradient,
            overflow: 'hidden',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
        >
          {/* Animated Progress Line */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '2px',
              height: heightTransform,
              opacity: opacityTransform,
              background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary}, transparent)`,
              borderRadius: '9999px',
              boxShadow: `0 0 10px ${colors.primary}`,
            }}
          />
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 768px) {
          .timeline-left {
            width: 280px !important;
            min-width: 280px !important;
          }
          .timeline-title-desktop {
            display: block !important;
          }
          .timeline-title-mobile {
            display: none !important;
          }
          .timeline-content {
            padding-left: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Timeline;
