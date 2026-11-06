import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { content } from './data/content';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Set document title according to specification:
    // "[FULL NAME] — [BRANCH] student & developer"
    document.title = `${content.owner.fullName} — ${content.owner.branch} student & developer`;

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
  };

  // Render 404 page if path is explicitly /404 or any unrecognized non-root path
  if (currentPath === '/404' || (currentPath !== '/' && !currentPath.startsWith('/index.html'))) {
    return <NotFound onGoHome={navigateToHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink relative">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

