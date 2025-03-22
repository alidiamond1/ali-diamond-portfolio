import React from 'react';

// Import all project images from the assets/projects folder
import mediamatchImg from '../assets/projects/mediamatch.jpg';
import taskManagementImg from '../assets/projects/Screenshot 2025-03-22 173659.png'; // Using the actual filename
import taskTrackerImg from '../assets/projects/tasktracker.jpg';
import personalBlogImg from '../assets/projects/somaliblog.jpg'; // Using the existing image but mapping to new name
import languageTutorImg from '../assets/projects/languagetutor.jpg';
// Add more imports here when images are available
import donezoImg from '../assets/projects/donezo.jpg';
// import dashMasterImg from '../assets/projects/dashmaster.jpg';

// Map project titles to their images
const projectImages = {
  "MediaMatch": mediamatchImg,
  "Task Management System": taskManagementImg,
  "TaskTracker Pro": taskTrackerImg,
  "Personal Blog Platform": personalBlogImg, // Updated to match new project name
  "Somalia Language Tutor": languageTutorImg,
  // When images are available, uncomment these lines
  "Donezo": donezoImg,
  // "DashMaster": dashMasterImg,
  "Blood Management System": null, // Added mapping for Blood Management System
  // "Donezo": null, // Added mapping for Donezo
  "DashMaster": null // Added mapping for DashMaster
};

// This component will be a placeholder until you add real screenshots
// You can customize the colors and patterns for each project
const ProjectImagePlaceholder = ({ title }) => {
  // Create a unique color for each project based on its name
  const getColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase()
      .padStart(6, '0');
    return `#${c}`;
  };

  const baseColor = getColor(title);
  
  // Generate a gradient for the placeholder
  const getGradient = () => {
    const adjustColor = (color, amount) => {
      return '#' + color.replace(/^#/, '').replace(/../g, color => {
        const colorNum = parseInt(color, 16);
        const adjustment = Math.floor(colorNum * amount);
        return Math.min(255, Math.max(0, adjustment)).toString(16).padStart(2, '0');
      });
    };
    
    const lighter = adjustColor(baseColor, 1.3);
    return `linear-gradient(135deg, ${baseColor} 0%, ${lighter} 100%)`;
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: getGradient(),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Create a pattern with circles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${30 + i * 20}px`,
            height: `${30 + i * 20}px`,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {/* Project title */}
      <div style={{
        fontWeight: 'bold',
        fontSize: '1.25rem',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        textAlign: 'center',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        zIndex: 1
      }}>
        {title}
      </div>
    </div>
  );
};

// This component will return the actual project image if available,
// otherwise it will return a placeholder
const ProjectImage = ({ title }) => {
  // Check if we have an image for this project
  if (projectImages[title]) {
    try {
      // Try to use the actual image
      return (
        <img
          src={projectImages[title]}
          alt={title}
          loading="lazy" // Added lazy loading for better performance
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center'
          }}
        />
      );
    } catch (e) {
      // If image fails to load, use placeholder
      return <ProjectImagePlaceholder title={title} />;
    }
  }
  
  // No image defined, use placeholder
  return <ProjectImagePlaceholder title={title} />;
};

export default ProjectImage;
