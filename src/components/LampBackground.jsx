import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const LampBackground = ({ children }) => {
  const { isDarkMode } = useTheme();

  const colors = {
    bg: isDarkMode ? 'transparent' : 'transparent',
    glow: isDarkMode ? '#a78bfa' : '#7c3aed',
    glowSecondary: isDarkMode ? '#818cf8' : '#6366f1',
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        minHeight: '50vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '2rem',
      }}
    >
      {/* Lamp Effect Container */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          isolation: 'isolate',
        }}
      >
        {/* Left Conic Gradient */}
        <motion.div
          initial={{ opacity: 0.3, width: '10rem' }}
          whileInView={{ opacity: isDarkMode ? 0.6 : 0.4, width: '20rem' }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            right: '50%',
            height: '12rem',
            overflow: 'visible',
            background: `conic-gradient(from 70deg at center top, ${colors.glow}, transparent, transparent)`,
          }}
        />

        {/* Right Conic Gradient */}
        <motion.div
          initial={{ opacity: 0.3, width: '10rem' }}
          whileInView={{ opacity: isDarkMode ? 0.6 : 0.4, width: '20rem' }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: '50%',
            height: '12rem',
            background: `conic-gradient(from 290deg at center top, transparent, transparent, ${colors.glow})`,
          }}
        />

        {/* Main glow circle */}
        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            height: '8rem',
            width: '20rem',
            transform: 'translateY(-3rem)',
            borderRadius: '50%',
            background: colors.glow,
            opacity: isDarkMode ? 0.3 : 0.2,
            filter: 'blur(50px)',
          }}
        />

        {/* Light bar */}
        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '20rem' }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            zIndex: 2,
            height: '2px',
            transform: 'translateY(-5rem)',
            background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)`,
            boxShadow: `0 0 15px ${colors.glow}`,
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 1.25rem',
          marginTop: '-5rem',
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LampBackground;
