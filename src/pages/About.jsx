import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
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
          Full-Stack Developer | AI/ML Engineer | Mobile App Developer
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
            <p style={{ fontSize: '1rem', color: 'var(--color-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Dynamic AI/ML Engineer and Full-Stack Developer with proven expertise at Daluul Tech, specializing in intelligent 
              web and mobile application development. I leverage cutting-edge technologies including TensorFlow, PyTorch, 
              Scikit-learn alongside React.js, Node.js, PHP, and Flutter to build AI-powered, responsive applications. 
              My expertise spans Machine Learning, Deep Learning, Computer Vision, NLP, and deploying production-ready AI models 
              to create intelligent, data-driven solutions that solve real-world problems.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '500', color: 'var(--color-blue-500)', marginBottom: '0.5rem' }}>
                  🚀 Core Skills
                </h4>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-secondary)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem' }}>
                  <li>AI/ML: TensorFlow, PyTorch, Scikit-learn, OpenCV</li>
                  <li>Data Science: Pandas, NumPy, Jupyter, Matplotlib</li>
                  <li>Front-end: React.js, Next.js, Tailwind CSS</li>
                  <li>Back-end: Node.js, Express, Spring Boot, PHP</li>
                  <li>Mobile: Flutter, React Native</li>
                  <li>Database: MongoDB, MySQL, PostgreSQL</li>
                  <li>Specialties: Computer Vision, NLP, Predictive Analytics</li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '500', color: 'var(--color-blue-500)', marginBottom: '0.5rem' }}>
                  💼 Notable Projects
                </h4>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-secondary)' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '500' }}>Student Performance Predictor</span> - AI-powered academic performance prediction using ML algorithms
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '500' }}>AI Image Recognition System</span> - Deep learning application for image classification and object detection
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '500' }}>NLP Text Analyzer</span> - Comprehensive NLP tool with sentiment analysis and text summarization
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '500' }}>TaskTracker</span> - Personal Task Management System with collaboration features
                  </li>
                  <li>
                    <span style={{ fontWeight: '500' }}>AI Language Tutor</span> - Interactive language learning with personalized ML-driven paths
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '500', color: 'var(--color-blue-500)', marginBottom: '0.5rem' }}>
                  🌱 Current Focus
                </h4>
                <p style={{ color: 'var(--color-secondary)', lineHeight: '1.7' }}>
                  Currently specializing in advanced AI/ML techniques including transformer models, reinforcement learning, 
                  and MLOps for production deployment. Actively working on deploying AI models at scale, integrating pre-trained 
                  models (BERT, GPT, YOLO) into production systems, and exploring cutting-edge developments in generative AI 
                  and computer vision applications.
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick links to Education and Work Experience */}
          <div style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
            marginTop: '1rem'
          }}>
            <Link to="/education" style={{
              display: 'block',
              padding: '1.25rem 2rem',
              backgroundColor: 'var(--color-blue-600)',
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              textAlign: 'center',
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
            }}>
              View Education History
            </Link>
            
            <Link to="/work-experience" style={{
              display: 'block',
              padding: '1.25rem 2rem',
              backgroundColor: 'var(--color-blue-600)',
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              textAlign: 'center',
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
            }}>
              View Work Experience
            </Link>
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
                href="https://linkedin.com/in/Alidiamond19b8052b9" 
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
