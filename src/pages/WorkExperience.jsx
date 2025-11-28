import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import { 
  FaBriefcase, 
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRocket,
  FaCode,
  FaMobile,
  FaLaptopCode
} from 'react-icons/fa';
import LampBackground from '../components/LampBackground';
import { Timeline } from '../components/ui/Timeline';

const WorkExperience = () => {
  const { isDarkMode } = useTheme();

  const colors = {
    primary: isDarkMode ? '#a78bfa' : '#7c3aed',
    secondary: isDarkMode ? '#818cf8' : '#6366f1',
    text: isDarkMode ? '#ffffff' : '#1e293b',
    textMuted: isDarkMode ? '#94a3b8' : '#64748b',
    bg: isDarkMode ? '#0f0a1f' : '#f8fafc',
    cardBg: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.9)',
    border: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
    gradient: isDarkMode 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    shadowColor: isDarkMode ? 'rgba(102, 126, 234, 0.15)' : 'rgba(124, 58, 237, 0.1)',
  };

  // Experience Card Component
  const ExperienceCard = ({ icon: Icon, title, company, location, date, description, highlights }) => (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      style={{
        padding: '2rem',
        borderRadius: '20px',
        background: colors.cardBg,
        border: `1px solid ${colors.border}`,
        boxShadow: `0 10px 40px ${colors.shadowColor}`,
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          background: colors.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: `0 8px 20px ${colors.shadowColor}`,
        }}>
          <Icon size={26} color="white" />
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: colors.text,
            marginBottom: '0.5rem',
            lineHeight: 1.3,
          }}>
            {title}
          </h4>
          <p style={{
            fontSize: '1rem',
            color: colors.primary,
            fontWeight: '600',
            marginBottom: '0.5rem',
          }}>
            {company}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {location && (
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                color: colors.textMuted,
              }}>
                <FaMapMarkerAlt size={12} />
                {location}
              </span>
            )}
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              color: colors.textMuted,
            }}>
              <FaCalendarAlt size={12} />
              {date}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p style={{
          fontSize: '0.95rem',
          color: colors.textMuted,
          lineHeight: 1.7,
          marginBottom: '1.25rem',
        }}>
          {description}
        </p>
      )}

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}
            >
              <FaCheckCircle 
                size={16} 
                style={{ 
                  color: colors.primary, 
                  marginTop: '3px',
                  flexShrink: 0,
                }} 
              />
              <span style={{
                fontSize: '0.9rem',
                color: colors.textMuted,
                lineHeight: 1.6,
              }}>
                {highlight}
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );

  // Timeline Data
  const timelineData = [
    {
      title: '2024 - Present',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <ExperienceCard
            icon={FaRocket}
            title="AI/ML Engineer & Full-Stack Developer"
            company="Daluul Tech"
            location="Mogadishu, Somalia"
            date="March 2024 - Present"
            description="Leading AI/ML initiatives and full-stack development projects, building intelligent web applications that leverage cutting-edge machine learning technologies."
            highlights={[
              "Developed and deployed machine learning models using TensorFlow, PyTorch, and Scikit-learn for predictive analytics",
              "Built AI-powered web applications with computer vision and NLP capabilities, improving user engagement by 45%",
              "Integrated pre-trained models (BERT, GPT, CNN architectures) into production systems with REST APIs",
              "Collaborated on data preprocessing, feature engineering, and model optimization for real-world applications"
            ]}
          />
          <ExperienceCard
            icon={FaMobile}
            title="Mobile App Developer"
            company="Flutter Developer"
            location="Remote"
            date="September 2024 - Present"
            description="Specializing in cross-platform mobile application development using Flutter and Dart, creating seamless user experiences across Android and iOS platforms."
            highlights={[
              "Designed and developed cross-platform mobile applications using Flutter and Dart",
              "Ensured smooth performance and native-like experience on both Android and iOS",
              "Implemented state management solutions and optimized app performance",
              "Integrated Firebase services for authentication, database, and push notifications"
            ]}
          />
        </div>
      ),
    },
    {
      title: '2023 - 2024',
      content: (
        <ExperienceCard
          icon={FaCode}
          title="Back-End Web Developer"
          company="Daluul Tech"
          location="Mogadishu, Somalia"
          date="March 2023 - March 2024"
          description="Focused on building robust and scalable backend architectures, implementing secure authentication systems and optimizing database performance."
          highlights={[
            "Developed secure authentication systems using JWT, Firebase Authentication, and OAuth",
            "Built scalable backend architectures using Node.js & Express.js, optimizing app performance by 30%",
            "Designed and optimized SQL & NoSQL databases, ensuring efficient data management",
            "Collaborated with open-source developers to improve project security"
          ]}
        />
      ),
    },
    {
      title: '2022 - 2023',
      content: (
        <ExperienceCard
          icon={FaLaptopCode}
          title="Front-End Web Developer"
          company="Freelance & Open-Source Contributions"
          location="Remote"
          date="2022 - 2023"
          description="Started my professional journey as a freelance front-end developer, building custom websites and contributing to open-source projects."
          highlights={[
            "Designed and developed custom websites for small business clients using React.js, JavaScript, and Tailwind CSS",
            "Built responsive, mobile-friendly UI/UX experiences with high performance",
            "Integrated APIs and third-party services to enhance functionality",
            "Contributed to open-source projects and built a strong foundation in modern web development"
          ]}
        />
      ),
    },
  ];

  // Skills/Technologies used
  const technologies = [
    'React.js', 'Node.js', 'Python', 'TensorFlow', 'PyTorch', 
    'Flutter', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
  ];

  return (
    <section style={{ 
      background: colors.bg,
      minHeight: '100vh',
      paddingBottom: '4rem',
    }}>
      {/* Lamp Header */}
      <LampBackground>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ textAlign: 'center', marginTop: '2rem' }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              background: isDarkMode ? 'rgba(167, 139, 250, 0.15)' : colors.cardBg,
              border: `1px solid ${isDarkMode ? 'rgba(167, 139, 250, 0.3)' : colors.border}`,
              color: isDarkMode ? '#e0e7ff' : colors.primary,
              fontSize: '0.875rem',
              fontWeight: '500',
              marginBottom: '1rem',
            }}
          >
            <FaBriefcase size={16} />
            Professional Journey
          </motion.span>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: isDarkMode ? '#ffffff' : colors.primary,
            textShadow: isDarkMode ? '0 0 40px rgba(167, 139, 250, 0.5)' : 'none',
          }}>
            Work Experience
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: isDarkMode ? '#e2e8f0' : colors.textMuted,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Building impactful solutions, one project at a time
          </p>
        </motion.div>
      </LampBackground>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
      }}>
        {/* Timeline Section */}
        <Timeline data={timelineData} />

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: '4rem',
            padding: '2.5rem',
            borderRadius: '24px',
            background: colors.cardBg,
            border: `1px solid ${colors.border}`,
            backdropFilter: 'blur(10px)',
          }}
        >
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: colors.text,
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            <span style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: colors.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <FaCode size={24} color="white" />
            </span>
            Technologies I Work With
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(124, 58, 237, 0.08)',
                  border: `1px solid ${colors.border}`,
                  color: colors.primary,
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'default',
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: '3rem',
            padding: '2.5rem',
            borderRadius: '24px',
            background: colors.gradient,
            textAlign: 'center',
            boxShadow: `0 20px 60px ${colors.shadowColor}`,
          }}
        >
          <HiSparkles size={40} color="white" style={{ marginBottom: '1rem', opacity: 0.9 }} />
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1rem',
          }}>
            Let's Work Together
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            I'm always open to discussing new opportunities, exciting projects, 
            and ways to bring your ideas to life. Let's create something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
