import React, { useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython,
  FaAndroid,
  FaAppStore,
  FaBrain,
  FaRobot,
  FaChartLine,
  FaEye,
  FaCode,
  FaMousePointer,
  FaWind,
  FaWindows,
  FaLaptopCode
} from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiTailwindcss,
  SiPhp,
  SiMaterialdesign,
  SiVercel,
  SiNetlify,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiSpringboot,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiKeras,
  SiGooglecloud,
  SiSupabase,
  SiPrisma,
  SiGithub,
  SiUbuntu
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import SkillsSphere from '../components/ui/SkillsSphere';
import LampBackground from '../components/LampBackground';
import { HiSparkles } from 'react-icons/hi2';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');

  // All skills data with descriptions
  const allSkills = [
    // Frontend Skills
    { id: 'react', icon: <FaReact />, title: 'React.js', level: 90, category: 'Frontend', description: 'Building interactive UIs with React hooks, context, and component-based architecture.' },
    { id: 'nextjs', icon: <SiNextdotjs />, title: 'Next.js', level: 85, category: 'Frontend', description: 'Server-side rendering, static site generation, and full-stack React applications.' },
    { id: 'js', icon: <FaJs />, title: 'JavaScript', level: 92, category: 'Frontend', description: 'ES6+, async/await, DOM manipulation, and modern JavaScript development.' },
    { id: 'ts', icon: <SiTypescript />, title: 'TypeScript', level: 80, category: 'Frontend', description: 'Type-safe development with interfaces, generics, and advanced type systems.' },
    { id: 'html', icon: <FaHtml5 />, title: 'HTML5', level: 95, category: 'Frontend', description: 'Semantic markup, accessibility, and modern HTML5 features.' },
    { id: 'css', icon: <FaCss3Alt />, title: 'CSS3', level: 90, category: 'Frontend', description: 'Flexbox, Grid, animations, and responsive design.' },
    { id: 'tailwind', icon: <SiTailwindcss />, title: 'Tailwind CSS', level: 85, category: 'Frontend', description: 'Utility-first CSS framework for rapid UI development.' },
    { id: 'redux', icon: <SiRedux />, title: 'Redux', level: 82, category: 'Frontend', description: 'State management with Redux Toolkit and middleware.' },
    { id: 'mui', icon: <SiMaterialdesign />, title: 'Material UI', level: 82, category: 'Frontend', description: 'Building beautiful UIs with Material Design components.' },

    // Backend Skills
    { id: 'node', icon: <FaNodeJs />, title: 'Node.js', level: 88, category: 'Backend', description: 'Server-side JavaScript, REST APIs, and backend development.' },
    { id: 'express', icon: <SiExpress />, title: 'Express.js', level: 85, category: 'Backend', description: 'Building robust APIs and web servers with Express.' },
    { id: 'php', icon: <SiPhp />, title: 'PHP', level: 75, category: 'Backend', description: 'Server-side scripting and web application development.' },
    { id: 'spring', icon: <SiSpringboot />, title: 'Spring Boot', level: 70, category: 'Backend', description: 'Enterprise Java applications with Spring framework.' },
    { id: 'python', icon: <FaPython />, title: 'Python', level: 70, category: 'Backend', description: 'Versatile programming for web, data, and automation.' },
    { id: 'java', icon: <FaJava />, title: 'Java', level: 65, category: 'Backend', description: 'Object-oriented programming and enterprise development.' },

    // Mobile Skills
    { id: 'flutter', icon: <SiFlutter />, title: 'Flutter', level: 88, category: 'Mobile', description: 'Cross-platform mobile development with beautiful UIs.' },
    { id: 'dart', icon: <SiDart />, title: 'Dart', level: 85, category: 'Mobile', description: 'Programming language for Flutter development.' },
    { id: 'firebase', icon: <SiFirebase />, title: 'Firebase', level: 80, category: 'Mobile', description: 'Backend-as-a-service for mobile and web apps.' },
    { id: 'android', icon: <FaAndroid />, title: 'Android', level: 75, category: 'Mobile', description: 'Native Android development with Kotlin/Java.' },
    { id: 'ios', icon: <FaAppStore />, title: 'iOS', level: 70, category: 'Mobile', description: 'iOS app development and App Store deployment.' },

    // Database Skills
    { id: 'mongodb', icon: <SiMongodb />, title: 'MongoDB', level: 85, category: 'Database', description: 'NoSQL database design and aggregation pipelines.' },
    { id: 'mysql', icon: <SiMysql />, title: 'MySQL', level: 82, category: 'Database', description: 'Relational database design and SQL optimization.' },
    { id: 'postgres', icon: <SiPostgresql />, title: 'PostgreSQL', level: 75, category: 'Database', description: 'Advanced relational database with JSON support.' },
    { id: 'supabase', icon: <SiSupabase />, title: 'Supabase', level: 80, category: 'Database', description: 'Open source Firebase alternative with PostgreSQL backend.' },
    { id: 'prisma', icon: <SiPrisma />, title: 'Prisma', level: 78, category: 'Database', description: 'Next-generation ORM for Node.js and TypeScript.' },
    { id: 'firestore', icon: <SiFirebase />, title: 'Firestore', level: 80, category: 'Database', description: 'Real-time NoSQL database for mobile and web.' },
    { id: 'redis', icon: <FaDatabase />, title: 'Redis', level: 68, category: 'Database', description: 'In-memory caching and session management.' },

    // AI/ML Skills
    { id: 'tensorflow', icon: <SiTensorflow />, title: 'TensorFlow', level: 85, category: 'AI/ML', description: 'Building and training deep learning models.' },
    { id: 'pytorch', icon: <SiPytorch />, title: 'PyTorch', level: 82, category: 'AI/ML', description: 'Dynamic neural networks and research experimentation.' },
    { id: 'sklearn', icon: <SiScikitlearn />, title: 'Scikit-learn', level: 90, category: 'AI/ML', description: 'Machine learning algorithms and data preprocessing.' },
    { id: 'keras', icon: <SiKeras />, title: 'Keras', level: 80, category: 'AI/ML', description: 'High-level neural network API for rapid prototyping.' },
    { id: 'numpy', icon: <SiNumpy />, title: 'NumPy', level: 85, category: 'AI/ML', description: 'Numerical computing and array operations.' },
    { id: 'pandas', icon: <SiPandas />, title: 'Pandas', level: 87, category: 'AI/ML', description: 'Data manipulation and analysis library.' },
    { id: 'opencv', icon: <SiOpencv />, title: 'OpenCV', level: 75, category: 'AI/ML', description: 'Computer vision and image processing.' },
    { id: 'jupyter', icon: <SiJupyter />, title: 'Jupyter', level: 85, category: 'AI/ML', description: 'Interactive notebooks for data science.' },
    { id: 'dl', icon: <FaBrain />, title: 'Deep Learning', level: 80, category: 'AI/ML', description: 'Neural networks, CNNs, RNNs, and transformers.' },
    { id: 'nlp', icon: <FaRobot />, title: 'NLP', level: 78, category: 'AI/ML', description: 'Natural language processing and text analysis.' },
    { id: 'da', icon: <FaChartLine />, title: 'Data Analysis', level: 85, category: 'AI/ML', description: 'Statistical analysis and data visualization.' },
    { id: 'cv', icon: <FaEye />, title: 'Computer Vision', level: 75, category: 'AI/ML', description: 'Image recognition and object detection.' },
    { id: 'gcloud', icon: <SiGooglecloud />, title: 'Google AI APIs', level: 70, category: 'AI/ML', description: 'Cloud AI services and ML APIs.' },

    // DevOps Skills
    { id: 'vercel', icon: <SiVercel />, title: 'Vercel', level: 80, category: 'DevOps', description: 'Serverless deployment and edge functions.' },
    { id: 'netlify', icon: <SiNetlify />, title: 'Netlify', level: 78, category: 'DevOps', description: 'JAMstack deployment and CI/CD.' },
    { id: 'aws', icon: <FaAws />, title: 'AWS', level: 65, category: 'DevOps', description: 'Cloud infrastructure and services.' },
    { id: 'docker', icon: <FaDocker />, title: 'Docker', level: 60, category: 'DevOps', description: 'Containerization and microservices.' },

    // Version Control
    { id: 'git', icon: <FaGitAlt />, title: 'Git', level: 90, category: 'Version Control', description: 'Distributed version control system for tracking code changes.' },
    { id: 'github', icon: <SiGithub />, title: 'GitHub', level: 88, category: 'Version Control', description: 'Code hosting, collaboration, pull requests, and CI/CD workflows.' },

    // Operating Systems
    { id: 'windows', icon: <FaWindows />, title: 'Windows', level: 92, category: 'OS', description: 'Windows 10/11 development environment and system administration.' },
    { id: 'ubuntu', icon: <SiUbuntu />, title: 'Ubuntu', level: 75, category: 'OS', description: 'Linux-based development, server management, and command line.' }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'AI/ML', 'DevOps', 'Version Control', 'OS'];

  const filteredSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(skill => skill.category === activeCategory);

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      'All': '#6366f1',
      'Frontend': '#3b82f6',
      'Backend': '#10b981',
      'Mobile': '#8b5cf6',
      'Database': '#f59e0b',
      'AI/ML': '#ec4899',
      'DevOps': '#06b6d4',
      'Version Control': '#f97316',
      'OS': '#14b8a6'
    };
    return colors[category] || colors.All;
  };

  return (
    <section
      id="skills"
      style={{
        backgroundColor: isDarkMode ? '#050816' : '#f8fafc',
        minHeight: '100vh',
        paddingBottom: '5rem',
        position: 'relative'
      }}
    >
      {/* Ambient Background Gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '1400px',
        height: '600px',
        background: isDarkMode
          ? 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.1) 0%, transparent 50%)'
          : 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Header with Lamp Effect */}
      <LampBackground>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ textAlign: 'center', marginTop: '2rem', position: 'relative', zIndex: 1 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.625rem 1.25rem',
              borderRadius: '50px',
              background: isDarkMode
                ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                : 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)',
              backdropFilter: 'blur(12px)',
              border: `2px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.25)'}`,
              color: isDarkMode ? '#e9d5ff' : '#6366f1',
              fontSize: '0.9rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              boxShadow: isDarkMode
                ? '0 4px 16px rgba(99, 102, 241, 0.2)'
                : '0 4px 16px rgba(99, 102, 241, 0.15)',
              letterSpacing: '0.025em'
            }}
          >
            <HiSparkles size={18} />
            Technical Expertise
          </motion.span>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '900',
            marginBottom: '1.25rem',
            background: isDarkMode
              ? 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%)'
              : 'linear-gradient(135deg, #1e293b 0%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em'
          }}>
            My Skills
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: isDarkMode ? '#cbd5e1' : '#64748b',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Drag and rotate the sphere to explore my technical skills. Click on any skill to see details and proficiency level.
          </p>
        </motion.div>
      </LampBackground>

      {/* Main Content */}
      <div style={{
        maxWidth: '1400px',
        margin: '-4rem auto 0',
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
            padding: '1.25rem',
            background: isDarkMode
              ? 'rgba(15, 23, 42, 0.4)'
              : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1.25rem',
            border: `1px solid ${isDarkMode ? 'rgba(148, 163, 184, 0.1)' : 'rgba(203, 213, 225, 0.5)'}`,
            boxShadow: isDarkMode
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(100, 116, 139, 0.1)'
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.875rem',
                border: activeCategory === category
                  ? '2px solid transparent'
                  : `2px solid ${isDarkMode ? 'rgba(148, 163, 184, 0.15)' : 'rgba(203, 213, 225, 0.6)'}`,
                background: activeCategory === category
                  ? `linear-gradient(135deg, ${getCategoryColor(category)} 0%, ${getCategoryColor(category)}cc 100%)`
                  : isDarkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(12px)',
                color: activeCategory === category ? 'white' : isDarkMode ? '#cbd5e1' : '#475569',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: activeCategory === category
                  ? `0 8px 24px ${getCategoryColor(category)}40`
                  : isDarkMode
                    ? '0 2px 8px rgba(0,0,0,0.2)'
                    : '0 2px 8px rgba(100, 116, 139, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {category}
              {activeCategory === category && (
                <span style={{
                  background: 'rgba(255,255,255,0.3)',
                  padding: '0.125rem 0.5rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {filteredSkills.length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {/* Decorative rings */}
          <div style={{
            position: 'absolute',
            width: '750px',
            height: '750px',
            borderRadius: '50%',
            border: `2px dashed ${isDarkMode ? 'rgba(139, 92, 246, 0.15)' : 'rgba(99, 102, 241, 0.1)'}`,
            animation: 'spin 60s linear infinite',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            width: '680px',
            height: '680px',
            borderRadius: '50%',
            border: `1px solid ${isDarkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(139, 92, 246, 0.08)'}`,
            animation: 'spin 45s linear infinite reverse',
            pointerEvents: 'none'
          }} />

          <SkillsSphere
            skills={filteredSkills}
            containerSize={700}
            sphereRadius={260}
            autoRotate={true}
            autoRotateSpeed={0.25}
            dragSensitivity={0.6}
            baseIconScale={0.13}
            isDarkMode={isDarkMode}
          />
        </motion.div>

        {/* Instruction hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            color: isDarkMode ? '#64748b' : '#94a3b8',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
        >
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#6366f1',
            animation: 'pulse 2s ease-in-out infinite'
          }} />
          Drag to rotate • Click skills for details • {filteredSkills.length} skills shown
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '4rem auto 0'
          }}
        >
          {[
            { label: 'Total Skills', value: allSkills.length, color: '#6366f1' },
            { label: 'Frontend', value: allSkills.filter(s => s.category === 'Frontend').length, color: '#3b82f6' },
            { label: 'Backend', value: allSkills.filter(s => s.category === 'Backend').length, color: '#10b981' },
            { label: 'AI/ML', value: allSkills.filter(s => s.category === 'AI/ML').length, color: '#ec4899' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              style={{
                background: isDarkMode
                  ? 'rgba(15, 23, 42, 0.5)'
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: `1px solid ${isDarkMode ? 'rgba(148, 163, 184, 0.1)' : 'rgba(203, 213, 225, 0.5)'}`,
                textAlign: 'center',
                boxShadow: isDarkMode
                  ? '0 4px 16px rgba(0, 0, 0, 0.2)'
                  : '0 4px 16px rgba(100, 116, 139, 0.1)'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: stat.color,
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: isDarkMode ? '#94a3b8' : '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
