import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import profileImage from '../assets/images/CALI NUUR.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '8rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isDarkMode ? 'var(--color-primary-dark)' : 'var(--color-primary)',
        transition: 'background-color 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 70px)'
      }}
    >
      {/* Animated background shapes */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        overflow: 'hidden',
        zIndex: 0
      }}>
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: index * 0.2,
              ease: "easeOut"
            }}
            style={{
              position: 'absolute',
              backgroundColor: isDarkMode ? 'rgba(79, 70, 229, 0.08)' : 'rgba(79, 70, 229, 0.15)',
              borderRadius: '50%',
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 1,
        position: 'relative'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            type: "spring",
            stiffness: 100 
          }}
          style={{
            position: 'relative',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 0 25px rgba(0, 0, 0, 0.2)',
            border: '4px solid var(--color-blue-500)',
            marginBottom: '2rem'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            zIndex: 1
          }} />
          <motion.img
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.05 }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            src={profileImage}
            alt="Cali Nuur Cabdulle"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(1.1) contrast(1.1)'
            }}
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            color: isDarkMode ? '#ffffff' : '#1f2937',
            transition: 'color 0.3s ease'
          }}
        >
          Cali Nuur Cabdulle
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            fontWeight: '500',
            color: 'var(--color-blue-500)',
            marginBottom: '2rem'
          }}
        >
          Full-Stack Developer | Mobile App Developer
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            maxWidth: '650px',
            marginBottom: '2.5rem',
            color: isDarkMode ? 'var(--color-secondary)' : '#4b5563',
            lineHeight: '1.7',
            transition: 'color 0.3s ease'
          }}
        >
          I build exceptional digital experiences for the web and mobile, specializing in both frontend and backend development with React, Node.js, Flutter, and PHP. As a versatile developer, I bring expertise in crafting robust web applications and dynamic mobile solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          style={{
            display: 'flex',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/projects" style={{
              padding: '0.75rem 2rem',
              backgroundColor: 'var(--color-blue-600)',
              color: 'white',
              borderRadius: '0.375rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.4)',
              border: 'none',
              display: 'block'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-blue-700)';
              e.currentTarget.style.boxShadow = '0 15px 20px -3px rgba(99, 102, 241, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-blue-600)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(99, 102, 241, 0.4)';
            }}>
              View My Work
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" style={{
              padding: '0.75rem 2rem',
              backgroundColor: 'transparent',
              color: isDarkMode ? 'white' : '#1f2937',
              borderRadius: '0.375rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: `2px solid ${isDarkMode ? 'white' : '#1f2937'}`,
              display: 'block'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(31, 41, 55, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}>
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center'
          }}
        >
          <motion.a 
            whileHover={{ scale: 1.2, y: -5 }} 
            href="https://github.com/Alidiamond" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              fontSize: '1.5rem',
              color: isDarkMode ? 'var(--color-secondary)' : '#4b5563',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-blue-500)'}
            onMouseOut={(e) => e.currentTarget.style.color = isDarkMode ? 'var(--color-secondary)' : '#4b5563'}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2, y: -5 }} 
            href="https://www.linkedin.com/in/ali-diamond-19b8052b9/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              fontSize: '1.5rem',
              color: isDarkMode ? 'var(--color-secondary)' : '#4b5563',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-blue-500)'}
            onMouseOut={(e) => e.currentTarget.style.color = isDarkMode ? 'var(--color-secondary)' : '#4b5563'}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2, y: -5 }} 
            href="https://x.com/Alidiamond143/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              fontSize: '1.5rem',
              color: isDarkMode ? 'var(--color-secondary)' : '#4b5563',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-blue-500)'}
            onMouseOut={(e) => e.currentTarget.style.color = isDarkMode ? 'var(--color-secondary)' : '#4b5563'}
          >
            <FaTwitter />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: isDarkMode ? 'var(--color-secondary)' : '#4b5563',
        animation: 'bounce 2s infinite',
        fontSize: '0.875rem'
      }}>
        <span style={{ marginBottom: '0.5rem' }}>Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.section>
  );
};

export default Hero;
