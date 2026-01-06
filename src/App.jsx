import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Education from './components/Education';
import DynamicBackground from './components/DynamicBackground';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative transition-colors duration-500">
      <DynamicBackground />
      <div className="grid-pattern relative z-10">
        <Navbar />
        <Hero />
        <Resume />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Journey />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
