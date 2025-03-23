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
  FaAppStore
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
  SiSpringboot
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
        y: -10,
        boxShadow: isDarkMode 
          ? '0 20px 40px -15px rgba(0, 0, 0, 0.7)' 
          : '0 20px 40px -15px rgba(0, 0, 0, 0.3)'
      }}
      style={{ 
        backgroundColor: isDarkMode ? 'var(--color-tertiary)' : 'var(--color-tertiary-light)', 
        borderRadius: '1rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: isDarkMode 
          ? '0 10px 30px -15px rgba(0, 0, 0, 0.5)' 
          : '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s, box-shadow 0.3s'
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
          fontSize: '3rem', 
          color: 'var(--color-blue-500)',
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
          fontSize: '1.25rem', 
          fontWeight: '600', 
          textAlign: 'center',
          color: isDarkMode ? 'white' : 'var(--color-text-light)' 
        }}
      >
        {title}
      </motion.h3>
      
      <div style={{ 
        width: '100%', 
        backgroundColor: isDarkMode ? '#0f0f20' : '#e2e8f0', 
        borderRadius: '9999px', 
        height: '10px', 
        overflow: 'hidden' 
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
            backgroundColor: 'var(--color-blue-600)',
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
          fontSize: '0.875rem', 
          color: isDarkMode ? 'var(--color-secondary)' : 'var(--color-secondary-light)',
          fontWeight: '500'
        }}
      >
        {level}% Proficiency
      </motion.span>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7,
        delay: index * 0.2,
        type: "spring"
      }}
      style={{ marginBottom: '3rem' }}
    >
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.2,
          type: "spring",
          stiffness: 100 
        }}
        style={{ 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          marginBottom: '1.5rem',
          color: 'var(--color-blue-500)',
          borderBottom: '2px solid var(--color-blue-500)',
          paddingBottom: '0.5rem',
          display: 'inline-block'
        }}
      >
        {title}
      </motion.h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '1.5rem'
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
    <motion.section 
      id="skills" 
      initial="hidden"
      animate="visible" 
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      style={{ 
        padding: '5rem 0', 
        backgroundColor: isDarkMode ? 'var(--color-primary)' : 'var(--color-primary-light)',
        transition: 'background-color 0.3s ease'
      }}
    >
      <div className="section-container">
        <motion.h2 
          variants={titleVariants}
          style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem', 
            textAlign: 'center',
            color: isDarkMode ? 'white' : 'var(--color-text-light)'
          }}
        >
          My Skills
        </motion.h2>
        
        <motion.p 
          variants={titleVariants}
          style={{ 
            fontSize: '1.125rem', 
            color: isDarkMode ? 'var(--color-secondary)' : 'var(--color-secondary-light)', 
            maxWidth: '48rem', 
            margin: '0 auto 3rem', 
            textAlign: 'center',
            lineHeight: '1.7'
          }}
        >
          I've developed expertise across multiple technologies in web and mobile development,
          focusing on creating responsive, user-friendly applications with clean code and optimal performance.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ 
            duration: 0.7,
            delay: 0.2,
            type: "spring"
          }}
        >
          <SkillCategory title="Frontend Development" skills={frontendSkills} index={0} />
          <SkillCategory title="Backend Development" skills={backendSkills} index={1} />
          <SkillCategory title="Mobile App Development" skills={mobileSkills} index={2} />
          <SkillCategory title="Database Management" skills={databaseSkills} index={3} />
          <SkillCategory title="DevOps & Deployment" skills={deploymentSkills} index={4} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
