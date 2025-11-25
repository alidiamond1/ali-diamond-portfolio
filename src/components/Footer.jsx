import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Footer = ({ style = {} }) => {
  const { isDarkMode } = useTheme();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      padding: '3rem 0',
      backgroundColor: isDarkMode ? 'var(--color-primary-dark)' : 'var(--color-primary-light-dark)',
      color: isDarkMode ? 'var(--color-text-secondary)' : 'var(--color-text-secondary-light)',
      transition: 'background-color 0.3s ease, color 0.3s ease, margin-left 0.3s ease-in-out',
      ...style
    }}>
      <div className="section-container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* About Section */}
          <div>
            <h3 style={{ 
              color: isDarkMode ? 'white' : 'var(--color-text-light)', 
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontWeight: '600'
            }}>
              Ali Nor
            </h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
              Full-Stack Developer with expertise in React.js, Node.js, and PHP. Specializing in building exceptional digital experiences.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/Alidiamond" target="_blank" rel="noopener noreferrer" style={{
                color: 'inherit',
                fontSize: '1.25rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-blue-500)'}
              onMouseOut={(e) => e.currentTarget.style.color = isDarkMode ? 'var(--color-text-secondary)' : 'var(--color-text-secondary-light)'}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ali-diamond-19b8052b9/" target="_blank" rel="noopener noreferrer" style={{
                color: 'inherit',
                fontSize: '1.25rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-blue-500)'}
              onMouseOut={(e) => e.currentTarget.style.color = isDarkMode ? 'var(--color-text-secondary)' : 'var(--color-text-secondary-light)'}>
                <FaLinkedin />
              </a>
              <a href="https://x.com/@Alidiamond143" target="_blank" rel="noopener noreferrer" style={{
                color: 'inherit',
                fontSize: '1.25rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-blue-500)'}
              onMouseOut={(e) => e.currentTarget.style.color = isDarkMode ? 'var(--color-text-secondary)' : 'var(--color-text-secondary-light)'}>
                <FaTwitter />
              </a>
              <a href="https://fb.com/AliNorAbdulle10" target="_blank" rel="noopener noreferrer" style={{
                color: 'inherit',
                fontSize: '1.25rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-blue-500)'}
              onMouseOut={(e) => e.currentTarget.style.color = isDarkMode ? 'var(--color-text-secondary)' : 'var(--color-text-secondary-light)'}>
                <FaFacebook />
              </a>
            </div>
          </div>
          
          {/* Links Section */}
          <div>
            <h3 style={{ 
              color: isDarkMode ? 'white' : 'var(--color-text-light)', 
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontWeight: '600'
            }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { path: '/', name: 'Home' },
                { path: '/about', name: 'About' },
                { path: '/projects', name: 'Projects' },
                { path: '/skills', name: 'Skills' },
                { path: '/contact', name: 'Contact' }
              ].map(link => (
                <li key={link.path} style={{ marginBottom: '0.75rem' }}>
                  <Link 
                    to={link.path}
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-blue-500)'}
                    onMouseOut={(e) => e.currentTarget.style.color = isDarkMode ? 'var(--color-text-secondary)' : 'var(--color-text-secondary-light)'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 style={{ 
              color: isDarkMode ? 'white' : 'var(--color-text-light)', 
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontWeight: '600'
            }}>
              Contact
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ 
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <FaEnvelope />
                <a 
                  href="mailto:calinuurcabdulle11@gmail.com"
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-blue-500)'}
                  onMouseOut={(e) => e.currentTarget.style.color = isDarkMode ? 'var(--color-text-secondary)' : 'var(--color-text-secondary-light)'}
                >
                  calinuurcabdulle11@gmail.com
                </a>
              </li>
              <li style={{ 
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <FaPhone />
                <a 
                  href="tel:+252619899733"
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-blue-500)'}
                  onMouseOut={(e) => e.currentTarget.style.color = isDarkMode ? 'var(--color-text-secondary)' : 'var(--color-text-secondary-light)'}
                >
                  +252 619899733
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                Mogadishu, Somalia
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{ 
          textAlign: 'center',
          borderTop: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
          paddingTop: '1.5rem'
        }}>
          <p>
            &copy; {currentYear} Cali Nuur Cabdulle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
