import React from 'react';
import { Calendar, GraduationCap, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Bachelor of Technology (Computer Science Engineering)",
    institution: "JC Bose University of Science and Technology, YMCA",
    duration: "2024 - 2028",
    grade: "Current CGPA: 9.04",
    coursework: ["Data Structures & Algorithms", "Object Oriented Programming", "Database Management Systems", "Web Development", "Operating Systems", "C/Python Programming"],
    desc: "YMCA is a renowned state university in Faridabad, Haryana, known for producing top-tier engineering talent and fostering a strong coding culture."
  }
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 light:bg-slate-50/50 relative"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Education Timeline card */}
        <div className="relative pl-6 ml-2 sm:ml-4 border-l border-slate-800 light:border-slate-300">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group text-left"
            >
              {/* Point on timeline */}
              <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                <GraduationCap size={12} className="text-purple-400" />
              </div>

              {/* Card content */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.03)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-purple-400 light:text-purple-600 font-semibold mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  
                  {/* Meta items */}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
                    <div className="flex items-center space-x-1.5 bg-slate-900 light:bg-slate-100 px-3 py-1 rounded-full border border-slate-800/50 light:border-slate-200">
                      <Calendar size={14} className="text-purple-500" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-400 leading-relaxed font-sans mb-6 text-sm sm:text-base">
                  {edu.desc}
                </p>

                {/* Grade display card */}
                <div className="mb-6 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 flex items-center space-x-3 w-fit">
                  <Award className="text-purple-400" size={20} />
                  <span className="font-mono text-sm font-semibold text-purple-300 light:text-purple-700">
                    {edu.grade}
                  </span>
                </div>

                {/* Coursework list */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 font-mono uppercase flex items-center space-x-2">
                    <BookOpen size={14} className="text-blue-500" />
                    <span>Relevant Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded bg-slate-900 light:bg-slate-100 border border-slate-850 light:border-slate-200 text-slate-400 light:text-slate-600 text-xs font-mono"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
