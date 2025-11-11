import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaFileDownload } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { isDarkMode } = useTheme();
  
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
    { id: 5, link: '/services', name: 'Services' },
    { id: 6, link: '/projects', name: 'Projects' },
    { id: 7, link: '/skills', name: 'Skills' },
    { id: 8, link: '/contact', name: 'Contact' },
  ];

  const resumeUrl = "https://drive.google.com/file/d/1uU-QMtCDfKmrwsO6UWbCTiNv2_uw2BwB/view?usp=drive_link";

  const ResumeButton = () => (
    <a 
      href={resumeUrl}
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        backgroundColor: 'var(--color-blue-600)',
        color: 'white',
        fontWeight: '600',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        boxShadow: isDarkMode ? '0 4px 6px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-blue-700)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-blue-600)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <FaFileDownload /> Download CV
    </a>
  );

  return (
    <nav className="navbar" style={{ 
      backgroundColor: isDarkMode ? 'var(--color-primary-dark)' : 'var(--color-primary)',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-blue-500)' }}>
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
              <li
                key={id}
                style={{
                  padding: '0 1rem',
                  cursor: 'pointer',
                  color: 'var(--color-secondary)',
                  fontWeight: '500'
                }}
              >
                <Link to={link} style={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} onMouseOver={(e) => e.target.style.color = 'white'}
                   onMouseOut={(e) => e.target.style.color = 'var(--color-secondary)'}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <ResumeButton />
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Icon and Theme Toggle */}
        <div style={{
          display: isMobile ? 'flex' : 'none',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <ThemeToggle />
          <div
            onClick={() => setNav(!nav)}
            style={{
              cursor: 'pointer',
              zIndex: 10,
              color: 'var(--color-secondary)'
            }}
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {nav && (
          <ul style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: isDarkMode 
              ? 'linear-gradient(to bottom, #000000, rgba(5, 8, 22, 0.95))' 
              : 'linear-gradient(to bottom, #f8f9fa, rgba(220, 230, 248, 0.95))',
            color: isDarkMode ? 'var(--color-secondary)' : '#333',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9
          }}>
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                style={{
                  padding: '1.5rem 1rem',
                  cursor: 'pointer',
                  fontSize: '1.875rem'
                }}
              >
                <Link 
                  onClick={() => setNav(!nav)} 
                  to={link}
                  style={{ 
                    color: 'inherit', 
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = isDarkMode ? 'white' : 'var(--color-blue-500)'}
                  onMouseOut={(e) => e.target.style.color = isDarkMode ? 'var(--color-secondary)' : '#333'}
                >
                  {name}
                </Link>
              </li>
            ))}
            <li style={{ padding: '1rem 0' }}>
              <ResumeButton />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
