import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRobot, FaMobile, FaLayerGroup } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import ProjectImage from '../components/ProjectImage';
import LampBackground from '../components/LampBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';

const ProjectCard = ({ title, description, tags, image, github, demo, index, category }) => {
  const { isDarkMode } = useTheme();

  const colors = {
    cardBg: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)',
    border: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
    text: isDarkMode ? '#e2e8f0' : '#334155',
    heading: isDarkMode ? '#ffffff' : '#1e293b',
    tagBg: isDarkMode ? 'rgba(167, 139, 250, 0.1)' : 'rgba(124, 58, 237, 0.1)',
    tagText: isDarkMode ? '#a78bfa' : '#7c3aed',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -10 }}
      style={{
        backgroundColor: colors.cardBg,
        backdropFilter: 'blur(10px)',
        borderRadius: '1.5rem',
        border: `1px solid ${colors.border}`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: isDarkMode
          ? '0 10px 30px -10px rgba(0,0,0,0.5)'
          : '0 10px 30px -10px rgba(0,0,0,0.1)',
      }}
    >
      {/* Image Section */}
      <div style={{
        position: 'relative',
        height: '200px',
        overflow: 'hidden',
        borderBottom: `1px solid ${colors.border}`
      }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ProjectImage title={title} />
        </motion.div>

        {/* Category Badge */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: '600',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          marginBottom: '0.75rem',
          color: colors.heading,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: '0.9rem',
          color: colors.text,
          lineHeight: '1.6',
          marginBottom: '1.5rem',
          flex: 1
        }}>
          {description}
        </p>

        {/* Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          {tags.slice(0, 4).map((tag, i) => (
            <span key={i} style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              color: colors.tagText,
              backgroundColor: colors.tagBg,
              borderRadius: '0.5rem',
              padding: '0.25rem 0.75rem',
            }}>
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span style={{
              fontSize: '0.75rem',
              color: colors.text,
              padding: '0.25rem 0.5rem',
            }}>
              +{tags.length - 4} more
            </span>
          )}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                borderRadius: '0.75rem',
                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : '#f1f5f9',
                color: colors.heading,
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                transition: 'background-color 0.2s'
              }}
            >
              <FaGithub /> Code
            </motion.a>
          )}

          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)'
              }}
            >
              <FaExternalLinkAlt /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FilterButton = ({ active, label, icon: Icon, onClick }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1.5rem',
        borderRadius: '1rem',
        border: 'none',
        background: active
          ? 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)'
          : isDarkMode ? 'rgba(255,255,255,0.05)' : 'white',
        color: active ? 'white' : isDarkMode ? '#94a3b8' : '#64748b',
        fontSize: '0.9rem',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: active
          ? '0 4px 12px rgba(124, 58, 237, 0.3)'
          : '0 2px 8px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease'
      }}
    >
      {Icon && <Icon />}
      {label}
    </motion.button>
  );
};

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "Student Performance Predictor",
      description: "An AI-powered web application that predicts student academic performance using machine learning algorithms. Features include data visualization, multiple ML models (Random Forest, SVM, Neural Networks), performance analytics, and predictive insights for educational decision-making.",
      tags: ["Python", "Scikit-learn", "Flask", "React", "TensorFlow", "Pandas", "NumPy", "Chart.js"],
      github: "https://github.com/alidiamond1/student-performance-predictor",
      demo: "https://student-performance-ai.vercel.app",
      category: "AI/ML"
    },
    {
      title: "AI Image Recognition System",
      description: "A deep learning application for image classification and object detection using pre-trained models. Implements CNN architectures with TensorFlow and PyTorch, featuring real-time image processing, multi-class classification, and custom model training capabilities.",
      tags: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Flask", "CNN", "Computer Vision", "REST API"],
      github: "https://github.com/alidiamond1/ai-image-recognition",
      demo: "https://ai-image-classifier.herokuapp.com",
      category: "AI/ML"
    },
    {
      title: "NLP Text Analyzer",
      description: "A comprehensive natural language processing tool that performs sentiment analysis, text summarization, and language translation. Built with transformer models and pre-trained BERT for accurate text analysis and processing.",
      tags: ["Python", "NLTK", "Transformers", "BERT", "SpaCy", "Flask", "React", "NLP"],
      github: "https://github.com/alidiamond1/nlp-text-analyzer",
      demo: "https://nlp-text-analyzer.netlify.app",
      category: "AI/ML"
    },
    {
      title: "MediaMatch",
      description: "A modern web application for discovering movies based on your mood and preferences. Features include mood-based recommendations, smart search, watchlist management, user ratings & reviews, responsive design, and user authentication.",
      tags: ["React", "Vite", "TailwindCSS", "Zustand", "Framer Motion", "TMDB API"],
      github: "https://github.com/alidiamond1/MediaMatch",
      demo: "https://media-match.vercel.app",
      category: "Web App"
    },
    {
      title: "Donezo",
      description: "A professional landing page for a task management application that helps users plan, prioritize, and accomplish tasks with ease and efficiency. Features a clean UI with task dashboard visualization, project analytics, and responsive design.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
      github: "https://github.com/alidiamond1/Donezo-professional-landing-2",
      demo: "https://v0-professional-landing-page-sigma.vercel.app/",
      category: "Web App"
    },
    {
      title: "DashMaster",
      description: "A modern admin dashboard with fully responsive design, dark/light mode support, complete authentication system, and interactive charts. Built with React and Vite for fast performance, styled with Tailwind CSS, and featuring Supabase for authentication.",
      tags: ["React", "Vite", "Tailwind CSS", "Zustand", "Supabase", "Recharts"],
      github: "https://github.com/alidiamond1/DashMaster",
      demo: "https://dash-master-pearl.vercel.app/login",
      category: "Web App"
    },
    {
      title: "Blood Management System",
      description: "A comprehensive blood donation and inventory management system designed to streamline blood collection, storage, and distribution processes. Features include donor management, blood inventory tracking, cross-matching, and distribution coordination for hospitals and blood banks.",
      tags: ["PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery", "AJAX"],
      github: "https://github.com/alidiamond1/Blood_Management_System",
      demo: null,
      category: "Web App"
    },
    {
      title: "Task Management System",
      description: "A PHP-based task management solution featuring user authentication, task tracking with CRUD operations, status filtering, and priority management. Designed with responsive UI for seamless use across all devices.",
      tags: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "Apache"],
      github: "https://github.com/alidiamond1/Task-Management-system",
      demo: "https://task-management-system-demo.vercel.app",
      category: "Web App"
    },
    {
      title: "TaskTracker Pro",
      description: "A comprehensive task management application with features like task assignment, deadline tracking, priority management, and automated reminders. Built with the MERN stack for efficient task organization and team collaboration.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      github: "https://github.com/alidiamond1/task-tracker",
      demo: "https://tasktracker-pro.netlify.app",
      category: "Web App"
    },
    {
      title: "Personal Blog Platform",
      description: "A simple yet functional blog website with user authentication and blog management features. Includes creating, reading, updating, and deleting blog posts, search functionality, and profile management with image upload capability.",
      tags: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
      github: "https://github.com/alidiamond1/Personal-Blogs-Platform",
      demo: "https://personal-blog-platform.vercel.app",
      category: "Web App"
    },
    {
      title: "SmartContent AI",
      description: "A full-stack AI content generation platform that helps users create high-quality content efficiently. Features include AI-powered text generation, user authentication, and a modern dashboard interface.",
      tags: ["React", "Node.js", "OpenAI API", "MongoDB", "TailwindCSS"],
      github: "https://github.com/alidiamond1/SmartContent-AI",
      demo: "https://smart-ai-content.vercel.app/",
      category: "AI/ML"
    },
    {
      title: "Restaurant Reservations",
      description: "An elegant restaurant reservation system allowing customers to book tables online. Features include real-time availability checking, booking management, and a responsive design for seamless user experience.",
      tags: ["React", "Node.js", "Express", "MongoDB", "CSS Modules"],
      github: "https://github.com/alidiamond1/Restuarent_Reservations_Table",
      demo: "https://restuarent-reservations-table.vercel.app/",
      category: "Web App"
    },
    {
      title: "AuthApp Pro",
      description: "A robust full-stack authentication system with a focus on security and UI/UX. Includes features like secure login/signup, password reset, email verification, and protected routes.",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Express", "Redux"],
      github: "https://github.com/alidiamond1/AuthApp-Pro",
      demo: "http://auth-app-pro-nicf-nine.vercel.app/",
      category: "Web App"
    },
    {
      title: "Consulting Landing Page",
      description: "A professional landing page designed for consulting services. Features a clean, corporate aesthetic, service showcases, testimonials, and a contact form to convert visitors into clients.",
      tags: ["React", "TailwindCSS", "Framer Motion", "Vite"],
      github: "https://github.com/alidiamond1/consulting-landing-page",
      demo: "https://consulting-service-landing-215.created.app/",
      category: "Web App"
    },
    {
      title: "Somalia Language Tutor",
      description: "An interactive mobile application for learning the Somali language with speech recognition, pronunciation feedback, and personalized learning paths. Designed to preserve cultural heritage while making language learning accessible.",
      tags: ["Flutter", "Dart", "Firebase", "Google Speech API", "BLoC Pattern"],
      github: "https://github.com/alidiamond1/somalia-language-tutor",
      demo: "https://play.google.com/store/apps/details?id=com.alidiamond.somalilanguagetutor",
      category: "Mobile App"
    },
    {
      title: "AquaTrack",
      description: "A mobile application designed to help users track their daily water intake. Features include hydration goals, reminders, and progress tracking to ensure users stay healthy and hydrated.",
      tags: ["React Native", "Expo", "JavaScript", "Mobile"],
      github: "https://github.com/alidiamond1/AquaTrack",
      demo: null,
      category: "Mobile App"
    },
    {
      title: "Event Management System",
      description: "A comprehensive event management solution built with CodeIgniter 4. Allows users to create, manage, and book events. Features include user roles, booking management, and a responsive dashboard.",
      tags: ["PHP", "CodeIgniter 4", "MySQL", "Bootstrap"],
      github: "https://github.com/alidiamond1/Event-Management-System",
      demo: null,
      category: "Web App"
    },
    {
      title: "Financial Report Analyzer",
      description: "A SaaS platform that uses AI to analyze financial reports and provide actionable insights. Features include file upload, data visualization, and an AI chat assistant for financial queries.",
      tags: ["Next.js", "Supabase", "AI", "TailwindCSS", "TypeScript"],
      github: "https://github.com/alidiamond1/Financial-Reportor-analyzer-withAi",
      demo: null,
      category: "AI/ML"
    },
    {
      title: "Speech To Text Sentiment",
      description: "An NLP project that converts speech to text and performs sentiment analysis on the transcribed text. Useful for analyzing customer feedback, interviews, and voice notes.",
      tags: ["Python", "NLP", "Speech Recognition", "Sentiment Analysis"],
      github: "https://github.com/alidiamond1/Speech-To-Text-Sentiment-Analysis",
      demo: null,
      category: "AI/ML"
    },
    {
      title: "CPU Scheduling Simulator",
      description: "A web-based simulator for various CPU scheduling algorithms (FCFS, SJF, Round Robin, etc.). Visualizes the scheduling process with Gantt charts and calculates waiting/turnaround times.",
      tags: ["HTML", "CSS", "JavaScript", "Algorithms"],
      github: "https://github.com/alidiamond1/cpu-scheduling-algorithm",
      demo: "https://cpu-scheduling-algorithm-three.vercel.app/",
      category: "Web App"
    }
  ];

  const categories = [
    { id: 'All', icon: FaLayerGroup },
    { id: 'AI/ML', icon: FaRobot },
    { id: 'Web App', icon: FaCode },
    { id: 'Mobile App', icon: FaMobile },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section style={{
      backgroundColor: isDarkMode ? '#050816' : '#f8fafc',
      minHeight: '100vh',
      paddingBottom: '4rem'
    }}>
      {/* Header with Lamp Effect */}
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
              background: isDarkMode ? 'rgba(167, 139, 250, 0.15)' : 'rgba(124, 58, 237, 0.1)',
              border: `1px solid ${isDarkMode ? 'rgba(167, 139, 250, 0.3)' : 'rgba(124, 58, 237, 0.2)'}`,
              color: isDarkMode ? '#e0e7ff' : '#7c3aed',
              fontSize: '0.875rem',
              fontWeight: '500',
              marginBottom: '1rem',
            }}
          >
            <HiSparkles size={16} />
            My Portfolio
          </motion.span>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: isDarkMode ? '#ffffff' : '#1e293b',
            textShadow: isDarkMode ? '0 0 40px rgba(167, 139, 250, 0.5)' : 'none',
          }}>
            Featured Projects
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: isDarkMode ? '#e2e8f0' : '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            A collection of my work in AI, Web Development, and Mobile Apps.
          </p>
        </motion.div>
      </LampBackground>

      {/* Filter Bar */}
      <div style={{
        maxWidth: '1280px',
        margin: '-3rem auto 3rem',
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {categories.map(cat => (
            <FilterButton
              key={cat.id}
              active={filter === cat.id}
              label={cat.id}
              icon={cat.icon}
              onClick={() => setFilter(cat.id)}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center', padding: '4rem', color: isDarkMode ? '#94a3b8' : '#64748b' }}
          >
            <p>No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
