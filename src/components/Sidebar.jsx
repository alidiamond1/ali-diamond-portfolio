import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { 
  FaHome, 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaTools, 
  FaEnvelope,
  FaFileDownload,
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const Sidebar = ({ onExpandChange }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const location = useLocation();

  // Premium color palette
  const colors = {
    // Gradient colors
    primaryGradient: isDarkMode 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    accentGradient: isDarkMode
      ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      : 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    glassGradient: isDarkMode
      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%)'
      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.04) 100%)',
    // Background colors
    sidebarBg: isDarkMode
      ? 'linear-gradient(180deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
      : 'linear-gradient(180deg, #fefefe 0%, #f8fafc 50%, #f1f5f9 100%)',
    cardBg: isDarkMode
      ? 'rgba(255, 255, 255, 0.03)'
      : 'rgba(0, 0, 0, 0.02)',
    // Text colors
    textPrimary: isDarkMode ? '#ffffff' : '#1e293b',
    textSecondary: isDarkMode ? '#94a3b8' : '#64748b',
    textMuted: isDarkMode ? '#64748b' : '#94a3b8',
    // Accent colors
    accent: isDarkMode ? '#a78bfa' : '#7c3aed',
    accentLight: isDarkMode ? 'rgba(167, 139, 250, 0.15)' : 'rgba(124, 58, 237, 0.1)',
    // Border colors
    border: isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
    borderHover: isDarkMode ? 'rgba(167, 139, 250, 0.3)' : 'rgba(124, 58, 237, 0.2)',
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Notify parent when sidebar expansion changes
  useEffect(() => {
    if (onExpandChange) {
      onExpandChange(isExpanded);
    }
  }, [isExpanded, onExpandChange]);

  const links = [
    { id: 1, link: '/', name: 'Home', icon: FaHome },
    { id: 2, link: '/about', name: 'About', icon: FaUser },
    { id: 3, link: '/education', name: 'Education', icon: FaGraduationCap },
    { id: 4, link: '/work-experience', name: 'Experience', icon: FaBriefcase },
    { id: 6, link: '/projects', name: 'Projects', icon: FaCode },
    { id: 7, link: '/skills', name: 'Skills', icon: FaTools },
    { id: 8, link: '/contact', name: 'Contact', icon: FaEnvelope },
  ];

  const resumeUrl = "https://drive.google.com/file/d/1vt2sgUC5W1rTzyQ7uPtsm2oMi_I9z24q/view?usp=drive_link";

  const sidebarVariants = {
    expanded: {
      width: '280px',
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    },
    collapsed: {
      width: '88px',
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        when: 'beforeChildren',
        staggerChildren: 0.06
      }
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  const NavLink = ({ item, onClick }) => {
    const isActive = location.pathname === item.link;
    const Icon = item.icon;

    return (
      <Link
        to={item.link}
        onClick={onClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: isExpanded || isMobile ? '0.875rem 1.25rem' : '0.875rem',
          justifyContent: isExpanded || isMobile ? 'flex-start' : 'center',
          borderRadius: '14px',
          textDecoration: 'none',
          position: 'relative',
          background: isActive ? colors.glassGradient : 'transparent',
          border: `1px solid ${isActive ? colors.borderHover : 'transparent'}`,
          color: isActive ? colors.accent : colors.textSecondary,
          transition: 'all 0.2s ease',
          margin: '0.25rem 0',
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = colors.cardBg;
            e.currentTarget.style.color = colors.textPrimary;
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = colors.textSecondary;
          }
        }}
      >
        {/* Active indicator */}
        {isActive && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '4px',
              height: '50%',
              borderRadius: '0 6px 6px 0',
              background: colors.primaryGradient,
            }}
          />
        )}
        
        {/* Icon container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '34px',
            height: '34px',
            borderRadius: '10px',
            background: isActive ? colors.primaryGradient : 'transparent',
            flexShrink: 0,
            transition: 'all 0.2s ease',
          }}
        >
          <Icon 
            size={17} 
            style={{ 
              color: isActive ? '#ffffff' : 'inherit',
            }} 
          />
        </div>
        
        {(isExpanded || isMobile) && (
          <span
            style={{
              fontWeight: isActive ? '600' : '500',
              fontSize: '0.9rem',
              whiteSpace: 'nowrap',
              letterSpacing: '0.01em',
            }}
          >
            {item.name}
          </span>
        )}
      </Link>
    );
  };

  // Mobile Header
  const MobileHeader = () => (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        background: isDarkMode 
          ? 'rgba(15, 15, 35, 0.85)' 
          : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 100,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Link 
        to="/" 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none'
        }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: colors.primaryGradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            boxShadow: `0 4px 20px ${isDarkMode ? 'rgba(102, 126, 234, 0.4)' : 'rgba(99, 102, 241, 0.3)'}`,
          }}
        >
          A
        </motion.div>
        <span style={{ 
          fontSize: '1.25rem', 
          fontWeight: '700', 
          background: colors.primaryGradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Ali Nor
        </span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <ThemeToggle />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: colors.cardBg,
            border: `1px solid ${colors.border}`,
            cursor: 'pointer',
            color: colors.textSecondary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.header>
  );

  // Mobile Menu Overlay
  const MobileMenu = () => (
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: isDarkMode 
                ? 'rgba(0, 0, 0, 0.7)' 
                : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(4px)',
              zIndex: 90,
            }}
          />
          <motion.nav
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              bottom: 0,
              width: '300px',
              background: colors.sidebarBg,
              zIndex: 95,
              padding: '1.5rem 1rem',
              overflowY: 'auto',
              borderRight: `1px solid ${colors.border}`,
              boxShadow: isDarkMode 
                ? '8px 0 40px rgba(0,0,0,0.5)' 
                : '8px 0 40px rgba(0,0,0,0.15)',
            }}
          >
            {/* Decorative gradient orb */}
            <div style={{
              position: 'absolute',
              top: '20%',
              right: '-50%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: colors.primaryGradient,
              opacity: 0.1,
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
              {links.map((item) => (
                <NavLink 
                  key={item.id} 
                  item={item} 
                  onClick={() => setMobileMenuOpen(false)} 
                />
              ))}
            </div>
            
            {/* Download CV Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1rem 1.5rem',
                marginTop: '2rem',
                borderRadius: '14px',
                background: colors.primaryGradient,
                color: 'white',
                fontWeight: '600',
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: `0 6px 20px ${isDarkMode ? 'rgba(102, 126, 234, 0.35)' : 'rgba(99, 102, 241, 0.3)'}`,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FaFileDownload size={18} />
              Download CV
              <HiSparkles size={16} />
            </a>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${colors.border}`,
            }}>
              {[
                { icon: FaGithub, href: 'https://github.com/Alidiamond' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ali-diamond-19b8052b9/' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: colors.cardBg,
                    border: `1px solid ${colors.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.textSecondary,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );

  // Desktop Sidebar
  const DesktopSidebar = () => (
    <motion.aside
      variants={sidebarVariants}
      initial={false}
      animate={isExpanded ? 'expanded' : 'collapsed'}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        background: colors.sidebarBg,
        borderRight: `1px solid ${colors.border}`,
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isDarkMode 
          ? '8px 0 40px rgba(0,0,0,0.3)' 
          : '8px 0 40px rgba(0,0,0,0.08)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-30%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: colors.primaryGradient,
        opacity: 0.08,
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-40%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: colors.accentGradient,
        opacity: 0.06,
        filter: 'blur(70px)',
        pointerEvents: 'none',
      }} />

      {/* Logo Section */}
      <div style={{
        padding: isExpanded ? '1.75rem 1.5rem' : '1.75rem 1rem',
        borderBottom: `1px solid ${colors.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: isExpanded ? 'flex-start' : 'center',
        position: 'relative',
      }}>
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem'
          }}
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            style={{
              width: isExpanded ? '48px' : '52px',
              height: isExpanded ? '48px' : '52px',
              borderRadius: '14px',
              background: colors.primaryGradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: isExpanded ? '1.3rem' : '1.4rem',
              boxShadow: `0 8px 30px ${isDarkMode ? 'rgba(102, 126, 234, 0.4)' : 'rgba(99, 102, 241, 0.35)'}`,
              flexShrink: 0,
            }}
          >
            A
          </motion.div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{ 
                  fontSize: '1.35rem', 
                  fontWeight: '700', 
                  background: colors.primaryGradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.2,
                }}>
                  Ali Nor
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: colors.textMuted,
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  marginTop: '2px',
                }}>
                  Full-Stack Developer
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* Navigation Section Label */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              padding: '1.25rem 1.5rem 0.5rem',
              fontSize: '0.7rem',
              fontWeight: '600',
              color: colors.textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Navigation
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Links */}
      <nav style={{
        flex: 1,
        padding: isExpanded ? '0.5rem 1rem' : '1rem 0.75rem',
        overflowY: 'auto',
        position: 'relative',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {links.map((item) => (
            <NavLink key={item.id} item={item} />
          ))}
        </div>
      </nav>

      {/* Bottom Section */}
      <div style={{
        padding: isExpanded ? '1.25rem 1rem' : '1.25rem 0.75rem',
        borderTop: `1px solid ${colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        position: 'relative',
      }}>
        {/* Download CV Button */}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '0.875rem',
            borderRadius: '12px',
            background: colors.primaryGradient,
            color: 'white',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '0.9rem',
            boxShadow: `0 6px 20px ${isDarkMode ? 'rgba(102, 126, 234, 0.35)' : 'rgba(99, 102, 241, 0.3)'}`,
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <FaFileDownload size={18} />
          {isExpanded && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Download CV
              <HiSparkles size={14} />
            </span>
          )}
        </a>

        {/* Social Links - Only when expanded */}
        {isExpanded && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            {[
              { icon: FaGithub, href: 'https://github.com/Alidiamond', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ali-diamond-19b8052b9/', label: 'LinkedIn' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.textSecondary,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <social.icon size={17} />
              </a>
            ))}
          </div>
        )}

        {/* Theme Toggle & Collapse Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isExpanded ? 'space-between' : 'center',
          gap: '0.5rem',
          flexDirection: isExpanded ? 'row' : 'column',
        }}>
          <ThemeToggle />
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              border: `1px solid ${colors.border}`,
              background: colors.cardBg,
              color: colors.textSecondary,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
          >
            <FaChevronLeft 
              size={14} 
              style={{ 
                transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: 'transform 0.2s ease'
              }} 
            />
          </button>
        </div>
      </div>
    </motion.aside>
  );

  return (
    <>
      {isMobile ? (
        <>
          <MobileHeader />
          <MobileMenu />
        </>
      ) : (
        <DesktopSidebar />
      )}
    </>
  );
};

export default Sidebar;
