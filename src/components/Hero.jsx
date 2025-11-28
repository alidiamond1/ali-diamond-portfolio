import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaTelegram, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiSparkles, HiCodeBracket, HiBolt } from 'react-icons/hi2';
import { useTheme } from '../contexts/ThemeContext';
import profileImage from '../assets/images/CALI NUUR.jpg';
import { motion } from 'framer-motion';
import DottedBackground from './DottedBackground';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const colors = {
    primary: isDarkMode ? '#a78bfa' : '#7c3aed',
    secondary: isDarkMode ? '#818cf8' : '#6366f1',
    text: isDarkMode ? '#ffffff' : '#1e293b',
    textMuted: isDarkMode ? '#94a3b8' : '#64748b',
    bg: isDarkMode ? '#0f0f23' : '#fafafa',
    cardBg: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
    border: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    gradient: isDarkMode 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
  };

  const roles = ['Full-Stack Developer', 'AI/ML Engineer', 'Mobile App Developer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Alidiamond', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ali-diamond-19b8052b9/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/Alidiamond143/', label: 'Twitter' },
    { icon: FaWhatsapp, href: 'https://wa.me/252619899733', label: 'WhatsApp' },
    { icon: FaTelegram, href: 'https://t.me/Alidiamond10', label: 'Telegram' },
  ];

  const stats = [
    { icon: HiCodeBracket, value: '60+', label: 'Projects' },
    { icon: HiBolt, value: '4+', label: 'Years Exp' },
    { icon: HiSparkles, value: '20+', label: 'Technologies' },
  ];

  return (
    <DottedBackground>
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        background: isDarkMode 
          ? 'radial-gradient(ellipse at 50% 0%, rgba(102, 126, 234, 0.15) 0%, transparent 50%)' 
          : 'radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
      }}>
        {/* Gradient Orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: colors.gradient,
          opacity: 0.1,
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          opacity: 0.08,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '600px' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                background: colors.cardBg,
                border: `1px solid ${colors.border}`,
                marginBottom: '1.5rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ color: colors.textMuted, fontSize: '0.875rem' }}>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '800',
                marginBottom: '0.5rem',
                lineHeight: 1.1,
              }}
            >
              <span style={{ color: colors.text }}>Hi, I'm </span>
              <span style={{
                color: colors.primary,
              }}>
                Ali Nor
              </span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: '600',
                color: colors.primary,
                marginBottom: '1.5rem',
                height: '2.5rem',
                overflow: 'hidden',
              }}
            >
              <motion.span
                key={currentRole}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'block' }}
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: '1.1rem',
                color: colors.textMuted,
                lineHeight: 1.8,
                marginBottom: '2rem',
                maxWidth: '500px',
              }}
            >
              I craft exceptional digital experiences with modern technologies. 
              Specializing in React, Node.js, AI/ML, and mobile development to build 
              intelligent applications that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
            >
              <Link
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  borderRadius: '14px',
                  background: colors.gradient,
                  color: 'white',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: `0 10px 40px ${isDarkMode ? 'rgba(102, 126, 234, 0.4)' : 'rgba(99, 102, 241, 0.3)'}`,
                  transition: 'all 0.3s ease',
                }}
              >
                View My Work
                <FaArrowRight size={14} />
              </Link>
              <a
                href="https://drive.google.com/file/d/1vt2sgUC5W1rTzyQ7uPtsm2oMi_I9z24q/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  borderRadius: '14px',
                  background: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                  fontWeight: '600',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}
              >
                <FaDownload size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: colors.cardBg,
                    border: `1px solid ${colors.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.textMuted,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.gradient;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = colors.cardBg;
                    e.currentTarget.style.color = colors.textMuted;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = colors.border;
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {/* Profile Image Container */}
            <div style={{
              position: 'relative',
              width: 'min(280px, 80vw)',
              height: 'min(280px, 80vw)',
            }}>
              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: '-15px',
                  borderRadius: '50%',
                  border: `2px dashed ${colors.primary}`,
                  opacity: 0.3,
                }}
              />
              
              {/* Glow Effect */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '50%',
                background: colors.gradient,
                opacity: 0.2,
                filter: 'blur(40px)',
              }} />

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `4px solid ${colors.primary}`,
                  boxShadow: `0 25px 80px ${isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(99, 102, 241, 0.25)'}`,
                }}
              >
                <img
                  src={profileImage}
                  alt="Ali Nor"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '-10px',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  background: colors.gradient,
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  boxShadow: `0 10px 30px ${isDarkMode ? 'rgba(102, 126, 234, 0.4)' : 'rgba(99, 102, 241, 0.3)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <HiSparkles size={16} />
                Open to Work
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                display: 'flex',
                gap: '1.5rem',
                padding: '1.5rem 2rem',
                borderRadius: '20px',
                background: colors.cardBg,
                border: `1px solid ${colors.border}`,
                backdropFilter: 'blur(20px)',
              }}
            >
              {stats.map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <stat.icon size={24} style={{ color: colors.primary, marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.text }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: colors.textMuted }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: colors.textMuted, letterSpacing: '0.1em' }}>
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '24px',
              height: '40px',
              borderRadius: '12px',
              border: `2px solid ${colors.border}`,
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '8px',
            }}
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '2px',
                background: colors.primary,
              }}
            />
          </motion.div>
        </motion.div>
      </section>
    </DottedBackground>
  );
};

export default Hero;
