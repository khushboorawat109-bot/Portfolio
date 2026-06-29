import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import { ArrowUp, Globe, Mail } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#1e293b';
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.style.backgroundColor = '#050811';
      document.body.style.color = '#f1f5f9';
    }
  }, [theme]);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Loading Screen */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Main Application */}
      <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-[#050811] text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
        
        {/* Sticky Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Page Sections */}
        <main>
          <Hero theme={theme} />
          <About theme={theme} />
          <Skills theme={theme} />
          <Experience theme={theme} />
          <Projects theme={theme} />
          <Certifications theme={theme} />
          <Achievements theme={theme} />
          <Education theme={theme} />
          <Resume theme={theme} />
          <Contact theme={theme} />
        </main>

        {/* Footer */}
        <footer className={`py-10 px-6 border-t text-center ${theme === 'dark' ? 'border-slate-800/60 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Social Links */}
            <div className="flex justify-center space-x-5">
              <a href="https://linkedin.com/in/khushboo-rawat" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-500 transition-colors duration-200">
                <Globe size={18} />
              </a>
              <a href="https://github.com/KhushbooRawat" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-slate-700 hover:border-slate-400 hover:text-slate-200 transition-colors duration-200">
                <Globe size={18} />
              </a>
              <a href="mailto:khushboo.rawat@example.com"
                className="p-2.5 rounded-full border border-slate-700 hover:border-purple-500 hover:text-purple-500 transition-colors duration-200">
                <Mail size={18} />
              </a>
              <a href="https://codechef.com" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-slate-700 hover:border-orange-500 hover:text-orange-400 transition-colors duration-200 text-xs font-bold font-mono flex items-center justify-center w-9 h-9">
                CC
              </a>
            </div>

            <p className="text-sm font-sans">
              Made with ❤️ by{' '}
              <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Khushboo Rawat
              </span>
            </p>
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Khushboo Rawat. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30 z-50 transition-all duration-300 ${
            showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </>
  );
}

export default App;
