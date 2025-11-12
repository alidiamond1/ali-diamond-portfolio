import React, { useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import ProjectImage from '../components/ProjectImage';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tags, image, github, demo, index }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: isDarkMode 
          ? "0px 35px 120px -10px #211e35" 
          : "0px 10px 40px -5px rgba(0, 0, 0, 0.2)"
      }}
      style={{ 
        backgroundColor: isDarkMode ? 'var(--color-tertiary)' : 'var(--color-tertiary-light)', 
        borderRadius: '1rem',
        padding: '1.5rem',
        boxShadow: isDarkMode ? '0px 35px 120px -15px #211e35' : '0px 10px 30px -10px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <motion.div 
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        style={{ 
          width: '100%', 
          height: '200px', 
          backgroundColor: isDarkMode ? '#151030' : '#e2e8f0', 
          borderRadius: '0.5rem',
          marginBottom: '1.5rem',
          overflow: 'hidden'
        }}
      >
        <ProjectImage title={title} />
      </motion.div>
      
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          marginBottom: '0.75rem',
          color: isDarkMode ? 'white' : 'var(--color-text-light)'
        }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        style={{ 
          fontSize: '0.875rem', 
          color: isDarkMode ? 'var(--color-secondary)' : 'var(--color-secondary-light)', 
          lineHeight: '1.6',
          marginBottom: '1rem',
          flex: '1'
        }}
      >
        {description}
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.5rem',
          marginBottom: '1.5rem' 
        }}
      >
        {tags.map((tag, tagIndex) => (
          <motion.span 
            key={tagIndex} 
            whileHover={{ scale: 1.1, backgroundColor: 'var(--color-blue-500)' }}
            style={{ 
              fontSize: '0.75rem',
              fontWeight: '500',
              color: 'white',
              backgroundColor: 'var(--color-blue-600)',
              borderRadius: '0.25rem',
              padding: '0.25rem 0.5rem'
            }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
        style={{ display: 'flex', gap: '1rem' }}
      >
        {github && (
          <motion.a 
            href={github} 
            target="_blank"
            rel="noreferrer"
            whileHover={{ 
              scale: 1.1, 
              color: isDarkMode ? 'white' : 'var(--color-blue-600)' 
            }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: isDarkMode ? 'var(--color-secondary)' : 'var(--color-secondary-light)',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}
          >
            <FaGithub /> View Code
          </motion.a>
        )}
        
        {demo && (
          <motion.a 
            href={demo} 
            target="_blank"
            rel="noreferrer"
            whileHover={{ 
              scale: 1.1, 
              color: isDarkMode ? 'white' : 'var(--color-blue-600)' 
            }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: isDarkMode ? 'var(--color-secondary)' : 'var(--color-secondary-light)',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { isDarkMode } = useTheme();
  
  const projects = [
    {
      title: "Student Performance Predictor",
      description: "An AI-powered web application that predicts student academic performance using machine learning algorithms. Features include data visualization, multiple ML models (Random Forest, SVM, Neural Networks), performance analytics, and predictive insights for educational decision-making.",
      tags: ["Python", "Scikit-learn", "Flask", "React", "TensorFlow", "Pandas", "NumPy", "Chart.js"],
      github: "https://github.com/alidiamond1/student-performance-predictor",
      demo: "https://student-performance-ai.vercel.app"
    },
    {
      title: "AI Image Recognition System",
      description: "A deep learning application for image classification and object detection using pre-trained models. Implements CNN architectures with TensorFlow and PyTorch, featuring real-time image processing, multi-class classification, and custom model training capabilities.",
      tags: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Flask", "CNN", "Computer Vision", "REST API"],
      github: "https://github.com/alidiamond1/ai-image-recognition",
      demo: "https://ai-image-classifier.herokuapp.com"
    },
    {
      title: "NLP Text Analyzer",
      description: "A comprehensive natural language processing tool that performs sentiment analysis, text summarization, and language translation. Built with transformer models and pre-trained BERT for accurate text analysis and processing.",
      tags: ["Python", "NLTK", "Transformers", "BERT", "SpaCy", "Flask", "React", "NLP"],
      github: "https://github.com/alidiamond1/nlp-text-analyzer",
      demo: "https://nlp-text-analyzer.netlify.app"
    },
    {
      title: "MediaMatch",
      description: "A modern web application for discovering movies based on your mood and preferences. Features include mood-based recommendations, smart search, watchlist management, user ratings & reviews, responsive design, and user authentication.",
      tags: ["React", "Vite", "TailwindCSS", "Zustand", "Framer Motion", "TMDB API"],
      github: "https://github.com/alidiamond1/MediaMatch",
      demo: "https://media-match.vercel.app"
    },
    {
      title: "Donezo",
      description: "A professional landing page for a task management application that helps users plan, prioritize, and accomplish tasks with ease and efficiency. Features a clean UI with task dashboard visualization, project analytics, and responsive design.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
      github: "https://github.com/alidiamond1/Donezo-professional-landing-2",
      demo: "https://v0-professional-landing-page-sigma.vercel.app/"
    },
    {
      title: "DashMaster",
      description: "A modern admin dashboard with fully responsive design, dark/light mode support, complete authentication system, and interactive charts. Built with React and Vite for fast performance, styled with Tailwind CSS, and featuring Supabase for authentication.",
      tags: ["React", "Vite", "Tailwind CSS", "Zustand", "Supabase", "Recharts"],
      github: "https://github.com/alidiamond1/DashMaster",
      demo: "https://dash-master-pearl.vercel.app/login"
    },
    {
      title: "Blood Management System",
      description: "A comprehensive blood donation and inventory management system designed to streamline blood collection, storage, and distribution processes. Features include donor management, blood inventory tracking, cross-matching, and distribution coordination for hospitals and blood banks.",
      tags: ["PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery", "AJAX"],
      github: "https://github.com/alidiamond1/Blood_Management_System",
      demo: null
    },
    {
      title: "Task Management System",
      description: "A PHP-based task management solution featuring user authentication, task tracking with CRUD operations, status filtering, and priority management. Designed with responsive UI for seamless use across all devices.",
      tags: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "Apache"],
      github: "https://github.com/alidiamond1/Task-Management-system",
      demo: "https://task-management-system-demo.vercel.app"
    },
    {
      title: "TaskTracker Pro",
      description: "A comprehensive task management application with features like task assignment, deadline tracking, priority management, and automated reminders. Built with the MERN stack for efficient task organization and team collaboration.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      github: "https://github.com/alidiamond1/task-tracker",
      demo: "https://tasktracker-pro.netlify.app"
    },
    {
      title: "Personal Blog Platform",
      description: "A simple yet functional blog website with user authentication and blog management features. Includes creating, reading, updating, and deleting blog posts, search functionality, and profile management with image upload capability.",
      tags: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
      github: "https://github.com/alidiamond1/Personal-Blogs-Platform",
      demo: "https://personal-blog-platform.vercel.app"
    },
    {
      title: "Somalia Language Tutor",
      description: "An interactive mobile application for learning the Somali language with speech recognition, pronunciation feedback, and personalized learning paths. Designed to preserve cultural heritage while making language learning accessible.",
      tags: ["Flutter", "Dart", "Firebase", "Google Speech API", "BLoC Pattern"],
      github: "https://github.com/alidiamond1/somalia-language-tutor",
      demo: "https://play.google.com/store/apps/details?id=com.alidiamond.somalilanguagetutor"
    }
  ];

  // Container animation variants
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

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        type: "spring", 
        bounce: 0.4 
      }
    }
  };

  return (
    <motion.section 
      id="projects" 
      initial="hidden"
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
          My Projects
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
          Check out some of my most recent and notable projects. Each project demonstrates different skills and technologies including AI, Machine Learning, web development, and mobile applications.
        </motion.p>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '0 1rem'
        }}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
