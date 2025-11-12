import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const WorkExperience = () => {
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
      id="experience" 
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
          Work Experience
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: '1.125rem', color: 'var(--color-secondary)', maxWidth: '48rem', margin: '0 auto 3rem', textAlign: 'center' }}
        >
          My Professional Journey
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
                AI/ML Engineer & Full-Stack Developer
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                March 2024 - Present
              </p>
            </div>
            <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
              Daluul Tech • Mogadishu, Somalia
            </p>
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ marginTop: '0.75rem', paddingLeft: '1.5rem', color: 'var(--color-secondary)' }}
            >
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                style={{ marginBottom: '0.5rem' }}
              >
                Developed and deployed machine learning models using TensorFlow, PyTorch, and Scikit-learn for predictive analytics.
              </motion.li>
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                style={{ marginBottom: '0.5rem' }}
              >
                Built AI-powered web applications with computer vision and NLP capabilities, improving user engagement by 45%.
              </motion.li>
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.3 }}
                style={{ marginBottom: '0.5rem' }}
              >
                Integrated pre-trained models (BERT, GPT, CNN architectures) into production systems with REST APIs.
              </motion.li>
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.3 }}
              >
                Collaborated on data preprocessing, feature engineering, and model optimization for real-world applications.
              </motion.li>
            </motion.ul>
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
                Back-End Web Developer
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                March 2023 - March 2024
              </p>
            </div>
            <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
              Daluul Tech • Mogadishu, Somalia
            </p>
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              style={{ marginTop: '0.75rem', paddingLeft: '1.5rem', color: 'var(--color-secondary)' }}
            >
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.3 }}
                style={{ marginBottom: '0.5rem' }}
              >
                Developed secure authentication systems using JWT, Firebase Authentication, and OAuth.
              </motion.li>
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.3 }}
                style={{ marginBottom: '0.5rem' }}
              >
                Built scalable backend architectures using Node.js & Express.js, optimizing app performance by 30%.
              </motion.li>
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.3 }}
                style={{ marginBottom: '0.5rem' }}
              >
                Designed and optimized SQL & NoSQL databases, ensuring efficient data management.
              </motion.li>
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.3 }}
              >
                Collaborated with open-source developers to improve project security.
              </motion.li>
            </motion.ul>
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
                Mobile App Developer
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                September 2024 - Present
              </p>
            </div>
            <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
              Flutter Developer
            </p>
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              style={{ marginTop: '0.75rem', paddingLeft: '1.5rem', color: 'var(--color-secondary)' }}
            >
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.3 }}
              >
                Designed and developed cross-platform mobile applications using Flutter and Dart, ensuring smooth performance on both Android and iOS.
              </motion.li>
            </motion.ul>
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
                Front-End Web Developer
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                2022 - 2023
              </p>
            </div>
            <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
              Freelance & Open-Source Contributions
            </p>
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              style={{ marginTop: '0.75rem', paddingLeft: '1.5rem', color: 'var(--color-secondary)' }}
            >
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.3 }}
                style={{ marginBottom: '0.5rem' }}
              >
                Designed and developed custom websites for small business clients using React.js, JavaScript, and Tailwind CSS.
              </motion.li>
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.3 }}
                style={{ marginBottom: '0.5rem' }}
              >
                Built responsive, mobile-friendly UI/UX experiences with high performance.
              </motion.li>
              <motion.li 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.3 }}
              >
                Integrated APIs and third-party services to enhance functionality.
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
