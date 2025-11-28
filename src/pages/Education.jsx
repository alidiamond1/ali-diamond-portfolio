import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import { 
  FaGraduationCap, 
  FaBrain, 
  FaUniversity, 
  FaSchool,
  FaBookOpen,
  FaCertificate,
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { Timeline } from '../components/ui/Timeline';
import LampBackground from '../components/LampBackground';

const Education = () => {
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

  // Education Card Component
  const EducationCard = ({ icon: Icon, title, institution, location, date, description, highlights, score }) => (
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
            {institution}
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
            {score && (
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                background: colors.gradient,
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '600',
              }}>
                Score: {score}
              </span>
            )}
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
      title: '2024 - 2025',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <EducationCard
            icon={FaCertificate}
            title="MERN Stack Bootcamp 2025: Build 2 Real Projects - Clean Code"
            institution="Udemy - Vapa Academy"
            location="Online"
            date="Nov. 24, 2025"
            description="Comprehensive 10.5-hour bootcamp focused on building production-ready applications using MongoDB, Express.js, React, and Node.js with clean code practices and real-world project experience."
            highlights={[
              "Built 2 complete real-world projects from scratch to deployment",
              "Mastered clean code architecture and best practices",
              "Full-stack development with MERN stack technologies",
              "RESTful API design and implementation",
              "Authentication, authorization, and security best practices"
            ]}
          />
          <EducationCard
            icon={FaCertificate}
            title="Learn CI/CD YAML Pipelines with Azure DevOps"
            institution="Udemy - Alireza Chegini"
            location="Online"
            date="Oct. 8, 2025"
            description="5-hour intensive course on continuous integration and continuous deployment using Azure DevOps YAML pipelines for automated software delivery."
            highlights={[
              "YAML pipeline syntax and best practices",
              "Automated build and release pipelines",
              "Azure DevOps services and integration",
              "CI/CD workflow automation and optimization"
            ]}
          />
          <EducationCard
            icon={FaCertificate}
            title="Master Data Analysis with Python - From Beginner to Pro"
            institution="Udemy - Learnify IT"
            location="Online"
            date="Aug. 22, 2025"
            description="6-hour comprehensive course covering data analysis fundamentals to advanced techniques using Python, including data manipulation, visualization, and statistical analysis."
            highlights={[
              "Python libraries: Pandas, NumPy, Matplotlib, Seaborn",
              "Data cleaning, transformation, and preprocessing",
              "Statistical analysis and data visualization",
              "Real-world data analysis projects and case studies"
            ]}
          />
          <EducationCard
            icon={FaCertificate}
            title="Professional Certificate in DevOps"
            institution="Udemy - MTF Institute of Management, Technology and Finance"
            location="Online"
            date="Aug. 22, 2025"
            description="Professional certification course covering essential DevOps principles, methodologies, and tools for modern software development and operations."
            highlights={[
              "DevOps culture and principles",
              "Containerization and orchestration concepts",
              "Infrastructure as Code (IaC) fundamentals",
              "Monitoring, logging, and observability practices"
            ]}
          />
        </div>
      ),
    },
    {
      title: '2021 - 2025',
      content: (
        <EducationCard
          icon={FaUniversity}
          title="Bachelor of Computer Science"
          institution="Jamhuriya University of Science and Technology"
          location="Mogadishu, Somalia"
          date="Expected August 2025"
          description="Comprehensive degree program in Computer Science & Software Engineering with focus on modern development practices and emerging technologies."
          highlights={[
            "Core focus on software development, mobile app development, AI/ML, and database management",
            "Hands-on experience with Flutter, React, Node.js, and full-stack web development",
            "Practical projects in machine learning and cloud computing with AWS",
            "Active participation in coding competitions and tech community events",
            "Final year project: AI-powered health diagnosis system using deep learning"
          ]}
        />
      ),
    },
    {
      title: '2017 - 2021',
      content: (
        <EducationCard
          icon={FaSchool}
          title="High School Diploma"
          institution="Xamar Jajab Primary & Secondary School"
          location="Mogadishu, Somalia"
          date="August 2021"
          score="85%"
          description="General Secondary Education with a strong emphasis on Science & Technology, building a solid foundation for higher education in computer science."
          highlights={[
            "Strong focus on STEM subjects: Mathematics, Physics, and Computer Science",
            "Developed critical thinking and analytical problem-solving skills",
            "Advanced coursework and project-based learning initiatives",
            "Leadership role in school's technology club"
          ]}
        />
      ),
    },
    {
      title: '2013 - 2017',
      content: (
        <EducationCard
          icon={FaBookOpen}
          title="Primary Education"
          institution="Xamar Jajab School"
          location="Mogadishu, Somalia"
          date="August 2017"
          score="70%"
          description="Completed primary education with a strong foundation in core subjects including mathematics, science, language, and social studies. Developed essential learning skills, discipline, and teamwork that laid the groundwork for academic success."
          highlights={[
            "Strong foundation in Mathematics and Sciences",
            "Developed effective study habits and time management skills",
            "Active participation in extracurricular activities"
          ]}
        />
      ),
    },
  ];

  // Certifications Data
  const certifications = [
    { name: 'MERN Stack Bootcamp 2025', year: '2025' },
    { name: 'CI/CD YAML Pipelines with Azure DevOps', year: '2025' },
    { name: 'Master Data Analysis with Python', year: '2025' },
    { name: 'Professional Certificate in DevOps', year: '2025' },
    { name: 'Flutter & Dart Complete Guide', year: '2024' },
    { name: 'Full Stack Web Development', year: '2024' },
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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
            <FaGraduationCap size={16} />
            Academic Journey
          </motion.span>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: isDarkMode ? '#ffffff' : colors.primary,
            textShadow: isDarkMode ? '0 0 40px rgba(167, 139, 250, 0.5)' : 'none',
          }}>
            Education
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: isDarkMode ? '#e2e8f0' : colors.textMuted,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Building knowledge, one milestone at a time
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

        {/* Certifications Section */}
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
              <FaCertificate size={24} color="white" />
            </span>
            Certifications & Courses
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                style={{
                  padding: '1.25rem',
                  borderRadius: '14px',
                  background: isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(124, 58, 237, 0.03)',
                  border: `1px solid ${colors.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: colors.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <FaCheckCircle size={18} color="white" />
                </div>
                <div>
                  <p style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: colors.text,
                    marginBottom: '0.25rem',
                  }}>
                    {cert.name}
                  </p>
                  <p style={{
                    fontSize: '0.8rem',
                    color: colors.textMuted,
                  }}>
                    {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
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
            Lifelong Learning Philosophy
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            "Education is not preparation for life; education is life itself." I believe in continuous 
            learning and staying updated with the latest technologies. Every day is an opportunity 
            to learn something new and grow as a developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
