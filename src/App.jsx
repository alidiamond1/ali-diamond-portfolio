import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Education from './pages/Education';
import WorkExperience from './pages/WorkExperience';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/work-experience" element={<WorkExperience />} />
          </Routes>
        </Layout>
        <AIChatbot />
      </Router>
    </ThemeProvider>
  );
}

export default App;
