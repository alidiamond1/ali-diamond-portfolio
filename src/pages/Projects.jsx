import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import ProjectImage from '../components/ProjectImage';

const ProjectCard = ({ title, description, tags, image, github, demo }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: isDarkMode ? 'var(--color-tertiary)' : 'var(--color-tertiary-light)', 
      borderRadius: '1rem',
      padding: '1.5rem',
      boxShadow: isDarkMode ? '0px 35px 120px -15px #211e35' : '0px 10px 30px -10px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s, background-color 0.3s ease, box-shadow 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{ 
        width: '100%', 
        height: '200px', 
        backgroundColor: isDarkMode ? '#151030' : '#e2e8f0', 
        borderRadius: '0.5rem',
        marginBottom: '1.5rem',
        overflow: 'hidden'
      }}>
        <ProjectImage title={title} />
      </div>
      
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: '600', 
        marginBottom: '0.75rem',
        color: isDarkMode ? 'white' : 'var(--color-text-light)'
      }}>
        {title}
      </h3>
      
      <p style={{ 
        fontSize: '0.875rem', 
        color: isDarkMode ? 'var(--color-secondary)' : 'var(--color-secondary-light)', 
        lineHeight: '1.6',
        marginBottom: '1rem',
        flex: '1'
      }}>
        {description}
      </p>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '0.5rem',
        marginBottom: '1.5rem' 
      }}>
        {tags.map((tag, index) => (
          <span key={index} style={{ 
            fontSize: '0.75rem',
            fontWeight: '500',
            color: 'white',
            backgroundColor: 'var(--color-blue-600)',
            borderRadius: '0.25rem',
            padding: '0.25rem 0.5rem'
          }}>
            {tag}
          </span>
        ))}
      </div>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        {github && (
          <a 
            href={github} 
            target="_blank"
            rel="noreferrer"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: isDarkMode ? 'var(--color-secondary)' : 'var(--color-secondary-light)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.color = isDarkMode ? 'white' : 'var(--color-blue-600)'}
            onMouseOut={(e) => e.target.style.color = isDarkMode ? 'var(--color-secondary)' : 'var(--color-secondary-light)'}
          >
            <FaGithub /> View Code
          </a>
        )}
        
        {demo && (
          <a 
            href={demo} 
            target="_blank"
            rel="noreferrer"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: isDarkMode ? 'var(--color-secondary)' : 'var(--color-secondary-light)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.color = isDarkMode ? 'white' : 'var(--color-blue-600)'}
            onMouseOut={(e) => e.target.style.color = isDarkMode ? 'var(--color-secondary)' : 'var(--color-secondary-light)'}
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const { isDarkMode } = useTheme();
  
  const projects = [
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

  return (
    <section id="projects" style={{ 
      padding: '5rem 0', 
      backgroundColor: isDarkMode ? 'var(--color-primary)' : 'var(--color-primary-light)',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="section-container">
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          marginBottom: '1.5rem', 
          textAlign: 'center',
          color: isDarkMode ? 'white' : 'var(--color-text-light)'
        }}>
          My Projects
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: isDarkMode ? 'var(--color-secondary)' : 'var(--color-secondary-light)', 
          maxWidth: '48rem', 
          margin: '0 auto 3rem', 
          textAlign: 'center' 
        }}>
          Here are some of my recent projects that showcase my skills and expertise
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
