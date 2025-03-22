import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import profileImage from '../assets/images/CALI NUUR.jpg';

const About = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <section id="about" className="py-20 bg-tertiary">
      <div className="section-container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
          About Me
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-secondary)', maxWidth: '48rem', margin: '0 auto 3rem', textAlign: 'center' }}>
          Full-Stack Developer | Mobile App Developer
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Profile and Personal info */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              position: 'relative',
              width: '280px', 
              height: '280px', 
              borderRadius: '50%', 
              overflow: 'hidden',
              border: '4px solid var(--color-blue-500)',
              boxShadow: isDarkMode 
                ? '0 8px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(99, 102, 241, 0.4)' 
                : '0 8px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(99, 102, 241, 0.2)'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                zIndex: 1
              }} />
              <img 
                src={profileImage} 
                alt="Cali Nuur Cabdulle" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(1.1) contrast(1.1)',
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Cali Nuur Cabdulle
              </h3>
              <p style={{ 
                color: 'var(--color-secondary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>
                <span>📍 Mogadishu, Somalia</span>
              </p>
              <p style={{ 
                color: 'var(--color-secondary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <span>📱 +252 619899733</span>
                <span>✉️ calinuurcabdulle11@gmail.com</span>
                <span>🌐 Alidiamond.com</span>
              </p>
            </div>
          </div>
          
          {/* Professional Summary */}
          <div style={{ 
            backgroundColor: 'var(--color-tertiary)', 
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0px 35px 120px -15px #211e35'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Professional Summary
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--color-secondary)', lineHeight: '1.7' }}>
              Dynamic Front-End and Back-End Web Developer with proven expertise at Daluul Tech, specializing in React.js,
              Node.js, and PHP. Successfully designed responsive applications and scalable architectures, enhancing user
              experiences and performance. Adept in collaboration and problem-solving, with a strong focus on delivering high-quality 
              solutions in fast-paced environments.
            </p>
          </div>
          
          {/* Work Experience */}
          <div style={{ 
            backgroundColor: 'var(--color-tertiary)', 
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0px 35px 120px -15px #211e35'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              Work Experience
            </h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-blue-500)' }}>
                  Back-End Web Developer
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                  March 2023 - Present
                </p>
              </div>
              <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                Daluul Tech • Mogadishu, Somalia
              </p>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1.5rem', color: 'var(--color-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Developed secure authentication systems using JWT, Firebase Authentication, and OAuth.</li>
                <li style={{ marginBottom: '0.5rem' }}>Built scalable backend architectures using Node.js & Express.js, optimizing app performance by 30%.</li>
                <li style={{ marginBottom: '0.5rem' }}>Designed and optimized SQL & NoSQL databases, ensuring efficient data management.</li>
                <li>Collaborated with open-source developers to improve project security.</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-blue-500)' }}>
                  Mobile App Developer
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                  September 2024 - Present
                </p>
              </div>
              <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                Flutter Developer
              </p>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1.5rem', color: 'var(--color-secondary)' }}>
                <li>Designed and developed cross-platform mobile applications using Flutter and Dart, ensuring smooth performance on both Android and iOS.</li>
              </ul>
            </div>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-blue-500)' }}>
                  Front-End Web Developer
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                  2022 - 2023
                </p>
              </div>
              <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                Freelance & Open-Source Contributions
              </p>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1.5rem', color: 'var(--color-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Designed and developed custom websites for small business clients using React.js, JavaScript, and Tailwind CSS.</li>
                <li style={{ marginBottom: '0.5rem' }}>Built responsive, mobile-friendly UI/UX experiences with high performance.</li>
                <li>Integrated APIs and third-party services to enhance functionality.</li>
              </ul>
            </div>
          </div>
          
          {/* Education */}
          <div style={{ 
            backgroundColor: 'var(--color-tertiary)', 
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0px 35px 120px -15px #211e35'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              Education
            </h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-blue-500)' }}>
                  Bachelor of Computer Science
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                  Expected August 2025
                </p>
              </div>
              <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                Jamhuriya University of Science and Technology
              </p>
              <p style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Computer Science & Software Engineering
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Focused on software development, mobile app development, and database management.</li>
                <li>Gained hands-on experience in Flutter, full-stack web development, and cloud computing.</li>
              </ul>
            </div>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-blue-500)' }}>
                  High School Diploma
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                  August 2021
                </p>
              </div>
              <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                Xamar Jajab Primary & Secondary School
              </p>
              <p style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                General Secondary Education with a focus on Science & Technology • Score: 85
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Completed comprehensive education with a strong emphasis on STEM subjects, including mathematics, physics, and computer science.</li>
                <li>Developed critical thinking and analytical skills through advanced coursework and project-based learning.</li>
              </ul>
            </div>
          </div>
          
          {/* Social Links */}
          <div style={{ 
            backgroundColor: 'var(--color-tertiary)', 
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0px 35px 120px -15px #211e35',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              Connect With Me
            </h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <a 
                href="https://github.com/Alidiamond" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--color-secondary)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.3s',
                  padding: '1rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.color = 'var(--color-secondary)';
                }}
              >
                <span style={{ fontSize: '2rem' }}>
                  <i className="fab fa-github"></i>
                </span>
                <span>GitHub</span>
                <span style={{ fontSize: '0.875rem' }}>@Alidiamond</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/Alidiamond" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--color-secondary)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.3s',
                  padding: '1rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.color = 'var(--color-secondary)';
                }}
              >
                <span style={{ fontSize: '2rem' }}>
                  <i className="fab fa-linkedin"></i>
                </span>
                <span>LinkedIn</span>
                <span style={{ fontSize: '0.875rem' }}>@Alidiamond</span>
              </a>
              
              <a 
                href="https://twitter.com/Alidiamond143" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--color-secondary)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.3s',
                  padding: '1rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.color = 'var(--color-secondary)';
                }}
              >
                <span style={{ fontSize: '2rem' }}>
                  <i className="fab fa-twitter"></i>
                </span>
                <span>Twitter</span>
                <span style={{ fontSize: '0.875rem' }}>@Alidiamond143</span>
              </a>
              
              <a 
                href="https://facebook.com/AliNorAbdulle10" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--color-secondary)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.3s',
                  padding: '1rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.color = 'var(--color-secondary)';
                }}
              >
                <span style={{ fontSize: '2rem' }}>
                  <i className="fab fa-facebook"></i>
                </span>
                <span>Facebook</span>
                <span style={{ fontSize: '0.875rem' }}>@AliNorAbdulle10</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
