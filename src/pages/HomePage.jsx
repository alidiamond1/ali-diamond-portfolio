import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default HomePage;
