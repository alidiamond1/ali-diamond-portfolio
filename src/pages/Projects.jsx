import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRobot, FaMobile, FaLayerGroup, FaShoppingCart } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import ProjectImage from '../components/ProjectImage';
import LampBackground from '../components/LampBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';

const ProjectCard = ({ title, description, tags, image, github, demo, index, category }) => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    cardBg: isDarkMode ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255,255,255,0.9)',
    border: isDarkMode ? 'rgba(139, 92, 246, 0.2)' : 'rgba(124, 58, 237, 0.1)',
    text: isDarkMode ? '#cbd5e1' : '#475569',
    heading: isDarkMode ? '#ffffff' : '#0f172a',
    tagBg: isDarkMode ? 'rgba(139, 92, 246, 0.15)' : 'rgba(124, 58, 237, 0.08)',
    tagText: isDarkMode ? '#c4b5fd' : '#7c3aed',
    tagBorder: isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(124, 58, 237, 0.2)',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        backgroundColor: colors.cardBg,
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderRadius: '1.75rem',
        border: `1.5px solid ${colors.border}`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: isDarkMode
          ? `0 20px 40px -15px rgba(0,0,0,0.6), 0 0 0 1px rgba(139, 92, 246, ${isHovered ? 0.3 : 0.1})`
          : `0 20px 40px -15px rgba(124, 58, 237, ${isHovered ? 0.25 : 0.1}), 0 4px 6px -1px rgba(0,0,0,0.05)`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
      }}
    >
      {/* Gradient Accent Bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #7c3aed 0%, #a78bfa 50%, #7c3aed 100%)',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }} />

      {/* Image Section */}
      <div style={{
        position: 'relative',
        height: '200px',
        overflow: 'hidden',
        backgroundColor: isDarkMode ? 'rgba(0,0,0,0.2)' : 'rgba(248,250,252,0.5)'
      }}>
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <ProjectImage title={title} />

          {/* Gradient Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.1) 0%, rgba(109, 40, 217, 0.3) 100%)',
              pointerEvents: 'none'
            }}
          />
        </motion.div>

        {/* Category Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            background: isDarkMode
              ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.9) 0%, rgba(109, 40, 217, 0.9) 100%)'
              : 'linear-gradient(135deg, rgba(124, 58, 237, 0.95) 0%, rgba(109, 40, 217, 0.95) 100%)',
            backdropFilter: 'blur(12px)',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.025em',
            textTransform: 'uppercase',
            border: '1.5px solid rgba(255,255,255,0.3)',
            boxShadow: '0 4px 12px rgba(124, 58, 237, 0.4)'
          }}>
          {category}
        </motion.div>
      </div>

      {/* Content Section */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <motion.h3
          animate={{ color: isHovered ? '#7c3aed' : colors.heading }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: '1.15rem',
            fontWeight: '700',
            marginBottom: '0.75rem',
            lineHeight: '1.3',
            letterSpacing: '-0.01em'
          }}>
          {title}
        </motion.h3>

        <p style={{
          fontSize: '0.875rem',
          color: colors.text,
          lineHeight: '1.6',
          marginBottom: '1.25rem',
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxHeight: '4.5rem'
        }}>
          {description}
        </p>

        {/* Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.25rem'
        }}>
          {tags.slice(0, 4).map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                color: colors.tagText,
                backgroundColor: colors.tagBg,
                borderRadius: '0.625rem',
                padding: '0.4rem 0.875rem',
                border: `1px solid ${colors.tagBorder}`,
                transition: 'all 0.2s ease',
                cursor: 'default'
              }}>
              {tag}
            </motion.span>
          ))}
          {tags.length > 4 && (
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              padding: '0.4rem 0.75rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              +{tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.875rem', marginTop: 'auto' }}>
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.625rem',
                padding: '0.875rem 1rem',
                borderRadius: '0.875rem',
                background: isDarkMode
                  ? 'linear-gradient(135deg, rgba(51, 65, 85, 0.8) 0%, rgba(71, 85, 105, 0.8) 100%)'
                  : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                color: colors.heading,
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '700',
                border: `1.5px solid ${isDarkMode ? 'rgba(148, 163, 184, 0.2)' : 'rgba(203, 213, 225, 0.8)'}`,
                transition: 'all 0.2s ease',
                boxShadow: isDarkMode
                  ? '0 2px 8px rgba(0,0,0,0.2)'
                  : '0 2px 8px rgba(100, 116, 139, 0.15)'
              }}
            >
              <FaGithub size={16} /> Code
            </motion.a>
          )}

          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.625rem',
                padding: '0.875rem 1rem',
                borderRadius: '0.875rem',
                background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '700',
                border: '1.5px solid rgba(255,255,255,0.2)',
                boxShadow: '0 6px 20px rgba(124, 58, 237, 0.35)',
                transition: 'all 0.2s ease'
              }}
            >
              <FaExternalLinkAlt size={14} /> Demo
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
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem',
        padding: '0.875rem 1.75rem',
        borderRadius: '1rem',
        border: active
          ? '2px solid transparent'
          : `2px solid ${isDarkMode ? 'rgba(148, 163, 184, 0.15)' : 'rgba(203, 213, 225, 0.6)'}`,
        background: active
          ? 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)'
          : isDarkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(12px)',
        color: active ? 'white' : isDarkMode ? '#cbd5e1' : '#475569',
        fontSize: '0.95rem',
        fontWeight: '700',
        cursor: 'pointer',
        boxShadow: active
          ? '0 8px 24px rgba(124, 58, 237, 0.4)'
          : isDarkMode
            ? '0 2px 8px rgba(0,0,0,0.2)'
            : '0 2px 8px rgba(100, 116, 139, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {active && (
        <motion.div
          layoutId="activeFilter"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
            borderRadius: '1rem',
          }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {Icon && <Icon size={18} />}
      <span style={{ position: 'relative', zIndex: 1 }}>{label}</span>
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
      title: "Super Market POS",
      description: "A comprehensive Point of Sale system designed for supermarkets and retail stores. Features include product management, inventory tracking, barcode scanning, sales transactions, receipt generation, and detailed sales reports. Built with a modern, user-friendly interface for efficient checkout operations.",
      tags: ["React", "Vite", "JavaScript", "LocalStorage", "CSS", "Barcode"],
      github: "https://github.com/alidiamond1/POS-Billing-System",
      demo: "https://super-market-pos.vercel.app/",
      category: "POS"
    },
    {
      title: "Coffee POS System",
      description: "A specialized Point of Sale system tailored for coffee shops and cafes. Features include menu management, order processing, customizable drink options, bill calculation, and customer order history. Designed with a clean, intuitive interface optimized for fast-paced cafe environments.",
      tags: ["React", "TypeScript", "TailwindCSS", "Vite", "LocalStorage"],
      github: "https://github.com/alidiamond1/Coffee-POS-System",
      demo: "https://coffee-pos-liart.vercel.app/",
      category: "POS"
    },
    {
      title: "MediaMatch",
      description: "A modern web application for discovering movies based on your mood and preferences. Features include mood-based recommendations, smart search, watchlist management, user ratings & reviews, responsive design, and user authentication.",
      tags: ["React", "Vite", "TailwindCSS", "Zustand", "Framer Motion", "TMDB API"],
      github: "https://github.com/alidiamond1/MediaMatch",
      demo: "https://media-match-six.vercel.app/",
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
      demo: "https://dash-master-pearl.vercel.app/",
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
      title: "Event Management",
      description: "A comprehensive Event management application with features like task assignment, deadline tracking, priority management, and automated reminders. Built with the MERN stack for efficient task organization and team collaboration.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      github: "https://github.com/alidiamond1/EventPro",
      demo: "https://event-pro-gules.vercel.app/",
      category: "Web App"
    },
    {
      title: "Expense Tracker",
      description: "A powerful expense tracking application to help manage your finances. Features include transaction logging, category-based expense tracking, visual reports and charts, budget monitoring, and financial insights. Built with a clean, intuitive interface for easy daily expense management.",
      tags: ["React", "Vite", "JavaScript", "Chart.js", "LocalStorage", "CSS"],
      github: "https://github.com/alidiamond1/Expense-Tracker",
      demo: "https://expense-tracker-theta-smoky.vercel.app/",
      category: "Web App"
    },
    {
      title: "Personal Budget App",
      description: "A comprehensive personal budgeting application designed to help you take control of your finances. Features include income and expense tracking, budget planning, financial goal setting, spending analysis, and detailed financial reports. Perfect for managing personal finances and achieving financial goals.",
      tags: ["React", "JavaScript", "CSS", "LocalStorage", "Budgeting"],
      github: "https://github.com/alidiamond1/Personal_Budget_App",
      demo: null,
      category: "Mobile App"
    },
    {
      title: "Happy New Year 2025",
      description: "An interactive New Year countdown application featuring animated celebrations, countdown timer to 2026, festive animations, and social media integration. Built with a vibrant, celebratory design to welcome the new year with style and joy.",
      tags: ["HTML", "CSS", "JavaScript", "Animations", "Countdown Timer"],
      github: "https://github.com/alidiamond1/Happy-New-Year",
      demo: "https://sanad-cusub-wanaagsan.netlify.app/",
      category: "Web App"
    },
    {
      title: "Taspiix",
      description: "A mobile application built with modern technologies for enhanced user experience. Features include intuitive navigation, responsive design, and seamless functionality tailored for mobile users.",
      tags: ["Mobile", "Flutter", "Dart", "App Development"],
      github: "https://github.com/alidiamond1/Taspiix-App",
      demo: null,
      category: "Mobile App"
    },
    {
      title: "Home Tax Somalia",
      description: "A property tax management system designed for Somalia. Features include property registration, tax calculation, payment tracking, and reporting. Built to streamline tax collection and property management for local authorities.",
      tags: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Tax Management"],
      github: "https://github.com/alidiamond1/home-tax-somalia",
      demo: null,
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
    { id: 'POS', icon: FaShoppingCart },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section style={{
      backgroundColor: isDarkMode ? '#050816' : '#f8fafc',
      minHeight: '100vh',
      paddingBottom: '5rem',
      position: 'relative'
    }}>
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
          ? 'radial-gradient(ellipse at top, rgba(124, 58, 237, 0.15) 0%, transparent 50%)'
          : 'radial-gradient(ellipse at top, rgba(124, 58, 237, 0.08) 0%, transparent 50%)',
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
                ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.2) 100%)'
                : 'linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(167, 139, 250, 0.12) 100%)',
              backdropFilter: 'blur(12px)',
              border: `2px solid ${isDarkMode ? 'rgba(167, 139, 250, 0.3)' : 'rgba(124, 58, 237, 0.25)'}`,
              color: isDarkMode ? '#e9d5ff' : '#7c3aed',
              fontSize: '0.9rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              boxShadow: isDarkMode
                ? '0 4px 16px rgba(124, 58, 237, 0.2)'
                : '0 4px 16px rgba(124, 58, 237, 0.15)',
              letterSpacing: '0.025em'
            }}
          >
            <HiSparkles size={18} />
            Portfolio Showcase
          </motion.span>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '900',
            marginBottom: '1.25rem',
            background: isDarkMode
              ? 'linear-gradient(135deg, #ffffff 0%, #e9d5ff 100%)'
              : 'linear-gradient(135deg, #1e293b 0%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em'
          }}>
            Featured Projects
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: isDarkMode ? '#cbd5e1' : '#64748b',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Explore my portfolio of innovative solutions across AI, Web Development, Mobile Apps, and Point of Sale systems.
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
        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '4rem',
            padding: '1.5rem',
            background: isDarkMode
              ? 'rgba(15, 23, 42, 0.4)'
              : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1.5rem',
            border: `1px solid ${isDarkMode ? 'rgba(148, 163, 184, 0.1)' : 'rgba(203, 213, 225, 0.5)'}`,
            boxShadow: isDarkMode
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(100, 116, 139, 0.1)'
          }}
        >
          {categories.map(cat => (
            <FilterButton
              key={cat.id}
              active={filter === cat.id}
              label={cat.id}
              icon={cat.icon}
              onClick={() => setFilter(cat.id)}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
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
            style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              fontSize: '1.1rem'
            }}
          >
            <p>No projects found in this category.</p>
          </motion.div>
        )}

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5rem'
          }}
        >
          <motion.a
            href="https://github.com/alidiamond1?tab=repositories"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.875rem',
              padding: '1.25rem 2.5rem',
              borderRadius: '1.25rem',
              background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontWeight: '700',
              letterSpacing: '0.01em',
              boxShadow: '0 12px 36px rgba(124, 58, 237, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
                opacity: 0.5
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'linear'
              }}
            />
            <FaGithub size={22} style={{ position: 'relative', zIndex: 1 }} />
            <span style={{ position: 'relative', zIndex: 1 }}>View All Projects on GitHub</span>
            <FaExternalLinkAlt size={18} style={{ position: 'relative', zIndex: 1 }} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
