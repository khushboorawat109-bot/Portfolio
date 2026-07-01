import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Particles from '../components/Particles';

const roles = [
  "B.Tech CSE Student",
  "Front-End Developer",
  "Problem Solver",
  "AI Enthusiast"
];

const Hero = ({ theme }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (!isDeleting) {
        setRoleText(currentRole.substring(0, roleText.length + 1));
        if (roleText === currentRole) {
          setIsDeleting(true);
          setTypingSpeed(1500); // Wait at full word
        } else {
          setTypingSpeed(100);
        }
      } else {
        setRoleText(currentRole.substring(0, roleText.length - 1));
        if (roleText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(200); // Delay before next word
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex, typingSpeed]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050811] via-[#091024] to-[#050811] light:from-white light:via-slate-50 light:to-white"
    >
      {/* Dynamic Background Particles */}
      <Particles theme={theme} />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Text */}
        <div className="lg:col-span-7 text-left space-y-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono shadow-[0_0_12px_rgba(59,130,246,0.1)]"
          >
            <span>Welcome to my Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Hi, I'm <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-sans">
              Khushboo Rawat
            </span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 text-lg sm:text-xl md:text-2xl font-medium text-slate-300 light:text-slate-700 font-sans"
          >
            <span className="text-slate-400 light:text-slate-500">I’m a </span>
            <span className="text-blue-500 dark:text-blue-400 font-semibold typing-cursor">
              {roleText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 light:text-slate-600 max-w-xl leading-relaxed font-sans"
          >
            Passionate Computer Science student with a strong academic record (9.04 CGPA), dedicated to building impactful web applications and continuously learning emerging technologies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={() => handleScroll('projects')}
              className="group flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button
              onClick={() => handleScroll('contact')}
              className="flex items-center space-x-2 px-6 py-3 border border-slate-700 hover:border-blue-500 text-slate-300 light:text-slate-700 light:border-slate-300 hover:text-white dark:hover:bg-blue-500/10 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              <Send size={16} />
              <span>Contact Me</span>
            </button>

            <a
              href="/resume.jpg"
              download="Khushboo_Rawat_Resume.jpg"
              className="flex items-center space-x-2 px-6 py-3 border border-slate-700 hover:border-purple-500 text-slate-300 light:text-slate-700 light:border-slate-300 hover:text-white dark:hover:bg-purple-500/10 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 shadow-[0_0_50px_rgba(99,102,241,0.25)] hover:rotate-3 transition-transform duration-500">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900 flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Khushboo Rawat"
                className="w-full h-full object-cover scale-105"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
