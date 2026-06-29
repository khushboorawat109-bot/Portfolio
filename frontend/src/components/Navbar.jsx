import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'certifications', name: 'Certifications' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'education', name: 'Education' },
  { id: 'contact', name: 'Contact' }
];

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlighting
      const scrollPosition = window.scrollY + 100;
      for (let i = 0; i < navLinks.length; i++) {
        const link = navLinks[i];
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-navbar py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div 
            onClick={() => handleLinkClick('hero')}
            className="flex-shrink-0 cursor-pointer text-xl font-bold font-sans bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            Khushboo Rawat
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium tracking-wide transition-all duration-200 hover:text-blue-500 relative py-1 ${
                  activeSection === link.id
                    ? 'text-blue-500 font-semibold'
                    : theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                )}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-200 ${
                theme === 'dark'
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-200 ${
                theme === 'dark'
                  ? 'bg-slate-800 text-yellow-400'
                  : 'bg-slate-100 text-slate-800'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                theme === 'dark'
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Open menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-[#050811] z-30 transition-all duration-300 flex flex-col items-center justify-center space-y-6 ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-8 pointer-events-none'
        } ${theme === 'light' ? 'bg-white' : 'bg-[#050811]'}`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleLinkClick(link.id)}
            className={`text-lg font-medium transition-all duration-200 hover:text-blue-500 ${
              activeSection === link.id
                ? 'text-blue-500 font-bold scale-110'
                : theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
