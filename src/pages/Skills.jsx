import React from 'react';
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
  FaEye
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
  SiGooglecloud
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const SkillCard = ({ icon, title, level, index }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      style={{ 
        backgroundColor: isDarkMode ? '#151030' : '#e2e8f0', 
        borderRadius: '1rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: isDarkMode 
          ? '0 10px 30px -15px rgba(0, 0, 0, 0.5)' 
          : '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
        border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        minHeight: '200px',
        justifyContent: 'center'
      }}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.05 + 0.2,
          type: "spring",
          stiffness: 200
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          transition: { duration: 0.2 } 
        }}
        style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 3rem)', 
          color: '#3b82f6',
          filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
        }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
        style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
          fontWeight: '600', 
          textAlign: 'center',
          color: isDarkMode ? '#ffffff' : '#1e293b',
          marginBottom: '0.5rem'
        }}
      >
        {title}
      </motion.h3>
      
      <div style={{ 
        width: '100%', 
        backgroundColor: isDarkMode ? '#0f0f20' : '#cbd5e1', 
        borderRadius: '9999px', 
        height: '8px', 
        overflow: 'hidden',
        marginBottom: '0.5rem'
      }}>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.05 + 0.2,
            ease: "easeOut"  
          }}
          style={{ 
            height: '100%', 
            backgroundColor: '#3b82f6',
            borderRadius: '9999px'
          }} 
        />
      </div>
      
      <motion.span 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 + 0.4 }}
        style={{ 
          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', 
          color: isDarkMode ? '#aaa6c3' : '#64748b',
          fontWeight: '500'
        }}
      >
        {level}% Proficiency
      </motion.span>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, index }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        type: "spring"
      }}
      style={{ marginBottom: '2rem' }}
    >
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100 
        }}
        style={{ 
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', 
          fontWeight: '600', 
          marginBottom: '1.5rem',
          color: '#3b82f6',
          borderBottom: '2px solid #3b82f6',
          paddingBottom: '0.5rem',
          display: 'inline-block'
        }}
      >
        {title}
      </motion.h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem',
        '@media (max-width: 640px)': {
          gridTemplateColumns: '1fr',
          gap: '1rem'
        }
      }}>
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { isDarkMode } = useTheme();
  
  // Animation to move content down when skills are revealed
  const slideDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        type: "spring", 
        bounce: 0.3 
      }
    }
  };

  // New expanded skill sets with more technologies
  const mobileSkills = [
    { icon: <SiFlutter />, title: 'Flutter', level: 88 },
    { icon: <SiDart />, title: 'Dart', level: 85 },
    { icon: <SiFirebase />, title: 'Firebase', level: 80 },
    { icon: <FaAndroid />, title: 'Android', level: 75 },
    { icon: <FaAppStore />, title: 'iOS', level: 70 }
  ];
  
  const frontendSkills = [
    { icon: <FaReact />, title: 'React.js', level: 90 },
    { icon: <SiNextdotjs />, title: 'Next.js', level: 85 },
    { icon: <FaJs />, title: 'JavaScript', level: 92 },
    { icon: <SiTypescript />, title: 'TypeScript', level: 80 },
    { icon: <FaHtml5 />, title: 'HTML5', level: 95 },
    { icon: <FaCss3Alt />, title: 'CSS3', level: 90 },
    { icon: <SiTailwindcss />, title: 'Tailwind CSS', level: 85 },
    { icon: <SiRedux />, title: 'Redux', level: 82 },
    { icon: <SiMaterialdesign />, title: 'Material UI', level: 82 }
  ];
  
  const backendSkills = [
    { icon: <FaNodeJs />, title: 'Node.js', level: 88 },
    { icon: <SiExpress />, title: 'Express.js', level: 85 },
    { icon: <SiPhp />, title: 'PHP', level: 75 },
    { icon: <SiSpringboot />, title: 'Spring Boot', level: 70 },
    { icon: <FaPython />, title: 'Python', level: 70 },
    { icon: <FaJava />, title: 'Java', level: 65 }
  ];
  
  const databaseSkills = [
    { icon: <SiMongodb />, title: 'MongoDB', level: 85 },
    { icon: <SiMysql />, title: 'MySQL', level: 82 },
    { icon: <SiPostgresql />, title: 'PostgreSQL', level: 75 },
    { icon: <SiFirebase />, title: 'Firestore', level: 80 },
    { icon: <FaDatabase />, title: 'Redis', level: 68 }
  ];
  
  const deploymentSkills = [
    { icon: <FaGitAlt />, title: 'Git/GitHub', level: 88 },
    { icon: <SiVercel />, title: 'Vercel', level: 80 },
    { icon: <SiNetlify />, title: 'Netlify', level: 78 },
    { icon: <FaAws />, title: 'AWS', level: 65 },
    { icon: <FaDocker />, title: 'Docker', level: 60 }
  ];

  const aiMlSkills = [
    { icon: <SiTensorflow />, title: 'TensorFlow', level: 85 },
    { icon: <SiPytorch />, title: 'PyTorch', level: 82 },
    { icon: <SiScikitlearn />, title: 'Scikit-learn', level: 90 },
    { icon: <SiKeras />, title: 'Keras', level: 80 },
    { icon: <FaPython />, title: 'Python for ML', level: 88 },
    { icon: <SiNumpy />, title: 'NumPy', level: 85 },
    { icon: <SiPandas />, title: 'Pandas', level: 87 },
    { icon: <SiOpencv />, title: 'OpenCV', level: 75 },
    { icon: <SiJupyter />, title: 'Jupyter', level: 85 },
    { icon: <FaBrain />, title: 'Deep Learning', level: 80 },
    { icon: <FaRobot />, title: 'NLP', level: 78 },
    { icon: <FaChartLine />, title: 'Data Analysis', level: 85 },
    { icon: <FaEye />, title: 'Computer Vision', level: 75 },
    { icon: <SiGooglecloud />, title: 'Google AI APIs', level: 70 }
  ];

  // Animation variants - keep stagger logic but ensure initial render
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        type: "spring", 
        bounce: 0.4 
      }
    }
  };

  return (
    <section 
      id="skills" 
      style={{ 
        padding: '3rem 0', 
        backgroundColor: isDarkMode ? '#050816' : '#f8fafc',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease'
      }}
    >
      <div style={{
        maxWidth: '1280px',
        width: '90%',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
            fontWeight: '700', 
            marginBottom: '1.5rem', 
            textAlign: 'center',
            color: isDarkMode ? '#ffffff' : '#1e293b'
          }}
        >
          My Skills
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', 
            color: isDarkMode ? '#aaa6c3' : '#64748b', 
            maxWidth: '48rem', 
            margin: '0 auto 3rem', 
            textAlign: 'center',
            lineHeight: '1.7'
          }}
        >
          I've developed expertise across multiple technologies in web and mobile development, AI & Machine Learning,
          focusing on creating intelligent, responsive, user-friendly applications with clean code and optimal performance.
        </motion.p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <SkillCategory title="Frontend Development" skills={frontendSkills} index={1} />
          <SkillCategory title="Backend Development" skills={backendSkills} index={2} />
          <SkillCategory title="Mobile App Development" skills={mobileSkills} index={3} />
          <SkillCategory title="Database Management" skills={databaseSkills} index={4} />
          <SkillCategory title="AI & Machine Learning" skills={aiMlSkills} index={0} />
          <SkillCategory title="DevOps & Deployment" skills={deploymentSkills} index={5} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
