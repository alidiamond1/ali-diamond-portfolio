import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaFileDownload } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const links = [
    { id: 1, link: '/', name: 'Home' },
    { id: 2, link: '/about', name: 'About' },
    { id: 3, link: '/education', name: 'Education' },
    { id: 4, link: '/work-experience', name: 'Work Experience' },
    { id: 5, link: '/projects', name: 'Projects' },
    { id: 6, link: '/skills', name: 'Skills' },
    { id: 7, link: '/contact', name: 'Contact' },
  ];

  const resumeUrl = "https://drive.google.com/file/d/1vt2sgUC5W1rTzyQ7uPtsm2oMi_I9z24q/view?usp=drive_link";

  const ResumeButton = ({ mobile = false }) => (
    <motion.a 
      href={resumeUrl}
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: mobile ? '0.75rem 1.5rem' : '0.5rem 1rem',
        fontSize: mobile ? '1.2rem' : '0.9rem',
        borderRadius: '0.5rem',
        backgroundColor: 'var(--color-blue-600)',
        color: 'white',
        fontWeight: '600',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        boxShadow: isDarkMode ? '0 4px 15px rgba(0, 0, 0, 0.2)' : '0 4px 15px rgba(0, 0, 0, 0.1)'
      }}
    >
      <FaFileDownload /> Download CV
    </motion.a>
  );

  const navLinkVariants = {
    hover: {
      color: isDarkMode ? '#FFFFFF' : '#1d4ed8',
    }
  };
  
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: '-100%',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      initial={false}
      animate={{ 
        backgroundColor: isScrolled || nav 
          ? (isDarkMode ? 'rgba(5, 8, 22, 0.85)' : 'rgba(248, 250, 252, 0.85)')
          : 'transparent',
        boxShadow: isScrolled 
          ? (isDarkMode ? '0 4px 30px rgba(0,0,0,0.1)' : '0 4px 30px rgba(0,0,0,0.05)') 
          : 'none'
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        width: '100%',
        height: '70px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 50,
        backdropFilter: isScrolled || nav ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled || nav ? 'blur(10px)' : 'none'
      }}
    >
      <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-blue-500)', zIndex: 60 }}>
          Ali Nor
        </Link>

        {/* Desktop Navigation */}
        <div style={{ 
          display: isMobile ? 'none' : 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <ul style={{ 
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            {links.map(({ id, link, name }) => (
              <motion.li
                key={id}
                style={{
                  padding: '0 1rem',
                  cursor: 'pointer',
                  fontWeight: '500',
                  position: 'relative'
                }}
              >
                <Link to={link}>
                  <motion.span
                    variants={navLinkVariants}
                    whileHover="hover"
                    style={{
                      color: location.pathname === link ? (isDarkMode ? '#FFFFFF' : 'var(--color-blue-600)') : 'var(--color-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {name}
                  </motion.span>
                </Link>
                {location.pathname === link && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '0.5rem',
                      right: '0.5rem',
                      height: '2px',
                      background: 'var(--color-blue-500)',
                    }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
          <ResumeButton />
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Icon and Theme Toggle */}
        <div style={{
          display: isMobile ? 'flex' : 'none',
          alignItems: 'center',
          gap: '1rem',
          zIndex: 60
        }}>
          <ThemeToggle />
          <motion.div
            onClick={() => setNav(!nav)}
            whileTap={{ scale: 0.9 }}
            style={{
              cursor: 'pointer',
              color: 'var(--color-secondary)'
            }}
          >
            {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
          </motion.div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {nav && (
            <motion.ul 
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                listStyle: 'none',
                zIndex: 55,
                padding: 0,
                margin: 0,
                background: isDarkMode ? 'var(--color-primary-dark)' : 'var(--color-primary-light)'
              }}
            >
              {links.map(({ id, link, name }) => (
                <motion.li
                  key={id}
                  variants={mobileLinkVariants}
                  style={{
                    padding: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  <Link 
                    onClick={() => setNav(false)} 
                    to={link}
                    style={{ 
                      fontSize: '1.5rem',
                      fontWeight: '500',
                      color: location.pathname === link ? 'var(--color-blue-500)' : 'var(--color-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={mobileLinkVariants} style={{ marginTop: '2rem' }}>
                <ResumeButton mobile={true} />
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
