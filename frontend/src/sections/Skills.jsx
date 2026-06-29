import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: "90%" },
      { name: "JavaScript", level: "85%" },
      { name: "Python (Basic)", level: "95%" }
    ]
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "HTML5", level: "95%" },
      { name: "CSS3", level: "90%" },
      { name: "JavaScript", level: "85%" },
      { name: "React.js", level: "80%" },
      { name: "Tailwind CSS", level: "85%" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: "80%" },
      { name: "GitHub", level: "85%" },
      { name: "VS Code", level: "90%" },
      { name: "Vercel", level: "75%" }
    ]
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "Advanced JavaScript", level: "Learning" },
      { name: "React Deep-Dive", level: "Learning" },
      { name: "Data Structures & Algorithms", level: "Learning" },
      { name: "Applied AI Tools", level: "Learning" }
    ]
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/20 light:bg-white relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-card p-8 rounded-2xl text-left hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] transition-all duration-300 border border-slate-800/40"
            >
              <h3 className="text-xl font-bold text-slate-100 light:text-slate-800 mb-6 font-sans border-l-4 border-blue-500 pl-3">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-slate-300 light:text-slate-700 font-sans">{skill.name}</span>
                      <span className="font-mono text-xs text-blue-400 light:text-blue-600">{skill.level}</span>
                    </div>

                    {/* Progress Bar / Learning indicator */}
                    <div className="w-full h-2 bg-slate-900 light:bg-slate-200 rounded-full overflow-hidden">
                      {skill.level === "Learning" ? (
                        <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-full animate-pulse-slow" />
                      ) : (
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
