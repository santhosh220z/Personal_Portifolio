import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './components/Hero';

import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip font-body text-chlorophyll-on-surface">
      <div className="pointer-events-none fixed inset-0 z-[2] bg-grid-white/[0.25] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"></div>
      <div className="pointer-events-none fixed inset-0 z-[2] bg-[radial-gradient(circle_at_8%_22%,rgba(175,209,136,0.14),transparent_26%),radial-gradient(circle_at_90%_12%,rgba(217,196,155,0.12),transparent_30%),radial-gradient(circle_at_52%_92%,rgba(122,155,87,0.12),transparent_28%)]"></div>

      <div className="relative z-10 w-full overflow-hidden">
        <Navbar />

        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
