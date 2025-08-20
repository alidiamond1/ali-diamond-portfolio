import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const Education = () => {
  const { isDarkMode } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.5 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 50 }
    }
  };
  
  return (
    <motion.section 
      id="education" 
      className="py-20 bg-tertiary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}
        >
          Education
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: '1.125rem', color: 'var(--color-secondary)', maxWidth: '48rem', margin: '0 auto 3rem', textAlign: 'center' }}
        >
          My Academic Journey
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            backgroundColor: 'var(--color-tertiary)', 
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0px 35px 120px -15px #211e35',
            position: 'relative'
          }}
        >
          {/* Timeline vertical line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ 
              position: 'absolute',
              left: '10px',
              top: '0',
              bottom: '0',
              width: '2px',
              backgroundColor: 'var(--color-blue-500)',
              zIndex: 1
            }} 
          />
          
          <motion.div 
            variants={itemVariants}
            style={{ 
              marginBottom: '2rem', 
              position: 'relative',
              paddingLeft: '40px'
            }}
            whileHover={{ 
              x: 10, 
              transition: { duration: 0.3 } 
            }}
          >
            {/* Timeline dot */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ 
                position: 'absolute',
                left: '6px',
                top: '10px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-blue-500)',
                zIndex: 2
              }} 
            />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-blue-500)' }}>
                AI & Machine Learning Specialization
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                2023 - 2024
              </p>
            </div>
            <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
              Multiple Online Platforms (Coursera, edX, Udemy)
            </p>
            <p style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
              Machine Learning, Deep Learning, Computer Vision & NLP
            </p>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-secondary)' }}>
              <li style={{ marginBottom: '0.5rem' }}>Completed Stanford's Machine Learning Course by Andrew Ng</li>
              <li style={{ marginBottom: '0.5rem' }}>Deep Learning Specialization with TensorFlow and PyTorch</li>
              <li style={{ marginBottom: '0.5rem' }}>Computer Vision and OpenCV for image processing</li>
              <li>Natural Language Processing with BERT and Transformers</li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            style={{ 
              marginBottom: '2rem', 
              position: 'relative',
              paddingLeft: '40px'
            }}
            whileHover={{ 
              x: 10, 
              transition: { duration: 0.3 } 
            }}
          >
            {/* Timeline dot */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ 
                position: 'absolute',
                left: '6px',
                top: '10px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-blue-500)',
                zIndex: 2
              }} 
            />
            
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
              <li style={{ marginBottom: '0.5rem' }}>Focused on software development, mobile app development, AI/ML, and database management.</li>
              <li>Gained hands-on experience in Flutter, full-stack web development, machine learning, and cloud computing.</li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            style={{ 
              marginBottom: '2rem', 
              position: 'relative',
              paddingLeft: '40px'
            }}
            whileHover={{ 
              x: 10, 
              transition: { duration: 0.3 } 
            }}
          >
            {/* Timeline dot */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              style={{ 
                position: 'absolute',
                left: '6px',
                top: '10px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-blue-500)',
                zIndex: 2
              }} 
            />
            
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
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            style={{ 
              position: 'relative',
              paddingLeft: '40px'
            }}
            whileHover={{ 
              x: 10, 
              transition: { duration: 0.3 } 
            }}
          >
            {/* Timeline dot */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              style={{ 
                position: 'absolute',
                left: '6px',
                top: '10px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-blue-500)',
                zIndex: 2
              }} 
            />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-blue-500)' }}>
                Primary Education
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                August 2017
              </p>
            </div>
            <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
              Xamar Jajab School
            </p>
            <p style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
              General Studies • Grade: 70%
            </p>
            <p style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
              Completed primary education at Xamar Jajab School in 2017, gaining a strong foundation in core subjects such as
              mathematics, science, language, and social studies. Developed essential learning skills, discipline, and teamwork,
              which laid the groundwork for further academic and personal growth.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
