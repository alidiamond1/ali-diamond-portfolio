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
  SiNetlify
} from 'react-icons/si';

const SkillCard = ({ icon, title, level }) => {
  return (
    <div style={{ 
      backgroundColor: 'var(--color-tertiary)', 
      borderRadius: '1rem',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      transition: 'transform 0.2s',
      boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.5)'
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ fontSize: '3rem', color: 'var(--color-blue-500)' }}>
        {icon}
      </div>
      
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', textAlign: 'center' }}>
        {title}
      </h3>
      
      <div style={{ width: '100%', backgroundColor: '#0f0f20', borderRadius: '9999px', height: '10px', overflow: 'hidden' }}>
        <div 
          style={{ 
            height: '100%', 
            width: `${level}%`, 
            backgroundColor: 'var(--color-blue-600)',
            borderRadius: '9999px'
          }} 
        />
      </div>
      
      <span style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
        {level}% Proficiency
      </span>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h3 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '600', 
        marginBottom: '1.5rem',
        color: 'var(--color-blue-500)',
        borderBottom: '2px solid var(--color-blue-500)',
        paddingBottom: '0.5rem',
        display: 'inline-block'
      }}>
        {title}
      </h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '1.5rem'
      }}>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const mobileSkills = [
    { icon: <SiFlutter />, title: 'Flutter', level: 88 },
    { icon: <SiDart />, title: 'Dart', level: 85 },
    { icon: <SiFirebase />, title: 'Firebase', level: 80 },
    { icon: <FaAndroid />, title: 'Android', level: 75 },
    { icon: <FaAppStore />, title: 'iOS', level: 70 }
  ];
  
  const frontendSkills = [
    { icon: <FaReact />, title: 'React.js', level: 90 },
    { icon: <FaJs />, title: 'JavaScript (ES6+)', level: 92 },
    { icon: <FaHtml5 />, title: 'HTML5', level: 95 },
    { icon: <FaCss3Alt />, title: 'CSS3', level: 90 },
    { icon: <SiTailwindcss />, title: 'Tailwind CSS', level: 85 },
    { icon: <SiMaterialdesign />, title: 'Material UI', level: 82 }
  ];
  
  const backendSkills = [
    { icon: <FaNodeJs />, title: 'Node.js', level: 88 },
    { icon: <SiExpress />, title: 'Express.js', level: 85 },
    { icon: <SiPhp />, title: 'PHP', level: 75 },
    { icon: <FaPython />, title: 'Python', level: 70 },
    { icon: <FaJava />, title: 'Java', level: 65 }
  ];
  
  const databaseSkills = [
    { icon: <SiMongodb />, title: 'MongoDB', level: 85 },
    { icon: <SiMysql />, title: 'MySQL', level: 82 },
    { icon: <SiPostgresql />, title: 'PostgreSQL', level: 75 },
    { icon: <SiFirebase />, title: 'Firebase Firestore', level: 80 }
  ];
  
  const deploymentSkills = [
    { icon: <FaGitAlt />, title: 'Git/GitHub', level: 88 },
    { icon: <SiVercel />, title: 'Vercel', level: 80 },
    { icon: <SiNetlify />, title: 'Netlify', level: 78 },
    { icon: <FaAws />, title: 'AWS', level: 65 },
    { icon: <FaDocker />, title: 'Docker', level: 60 }
  ];

  return (
    <section id="skills" style={{ padding: '5rem 0', backgroundColor: 'var(--color-tertiary)' }}>
      <div className="section-container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
          My Skills
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-secondary)', maxWidth: '48rem', margin: '0 auto 3rem', textAlign: 'center' }}>
          I've worked with a variety of technologies in web and mobile development
        </p>
        
        <SkillCategory title="Mobile App Development" skills={mobileSkills} />
        <SkillCategory title="Frontend Development" skills={frontendSkills} />
        <SkillCategory title="Backend Development" skills={backendSkills} />
        <SkillCategory title="Database Management" skills={databaseSkills} />
        <SkillCategory title="DevOps & Deployment" skills={deploymentSkills} />
      </div>
    </section>
  );
};

export default Skills;
