import React from 'react';
import { ExternalLink, Code, Layers, Smartphone, Layout, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Call-Info',
    description: 'A web application to retrieve and display caller information with an intuitive interface. Built with vanilla JavaScript for fast performance.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: '📱',
    liveLink: 'https://call-info.vercel.app',
    githubLink: 'https://github.com/khushboorawat109-bot/Call-Info',
    icon: Smartphone,
    featured: true
  },
  {
    id: 2,
    title: 'DSA with Python',
    description: 'Comprehensive Data Structures and Algorithms implementations in Python. Perfect for coding interviews and algorithm practice.',
    technologies: ['Python', 'Data Structures', 'Algorithms'],
    image: '🐍',
    liveLink: null,
    githubLink: 'https://github.com/khushboorawat109-bot/DSA-with-py',
    icon: Code,
    featured: true,
    stars: 2
  }
];

export default function Projects({ theme = 'dark' }) {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const isDark = theme === 'dark';

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-slate-400' : 'text-gray-600'
          }`}>
            A showcase of my best work featuring web applications, design projects, and algorithm implementations.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-500'
              }`}
            >
              {/* Project Header with Icon */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 flex items-center justify-between">
                <div className="text-5xl">{project.image}</div>
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <project.icon size={32} />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                {project.stars && (
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-yellow-400 text-lg">⭐</span>
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{project.stars} stars</span>
                  </div>
                )}

                <p className={`mb-4 leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        isDark 
                          ? 'bg-blue-900/40 text-blue-300' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 font-semibold ${
                      isDark
                        ? 'bg-slate-700 text-white hover:bg-slate-600'
                        : 'bg-gray-800 text-white hover:bg-gray-900'
                    }`}
                  >
                    <Code size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className={`text-3xl font-bold mb-8 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              More Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border p-5 group ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">{project.image}</div>
                    <project.icon size={24} className={`group-hover:text-blue-500 transition-colors ${
                      isDark ? 'text-slate-500' : 'text-gray-400'
                    }`} />
                  </div>

                  <h4 className={`text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h4>

                  <p className={`text-sm mb-4 line-clamp-2 ${
                    isDark ? 'text-slate-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs font-semibold rounded ${
                          isDark 
                            ? 'bg-slate-700 text-slate-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className={`px-2 py-1 text-xs ${
                        isDark 
                          ? 'bg-slate-700 text-slate-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-1 px-3 py-2 text-sm rounded transition-colors ${
                        isDark
                          ? 'bg-slate-700 text-white hover:bg-slate-600'
                          : 'bg-gray-800 text-white hover:bg-gray-900'
                      }`}
                    >
                      <Code size={16} />
                      Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            Want to see all my projects?
          </p>
          <a
            href="https://github.com/khushboorawat109-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Code size={20} />
            Visit My GitHub Profile
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}