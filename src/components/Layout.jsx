import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Updated sidebar widths to match new design
  const sidebarWidth = sidebarExpanded ? '280px' : '88px';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Sidebar onExpandChange={setSidebarExpanded} />
      <main 
        style={{ 
          flex: 1,
          marginLeft: isMobile ? 0 : sidebarWidth,
          marginTop: isMobile ? '72px' : 0,
          transition: 'margin-left 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {children}
      </main>
      <Footer 
        style={{
          marginLeft: isMobile ? 0 : sidebarWidth,
          transition: 'margin-left 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  );
};

export default Layout;
