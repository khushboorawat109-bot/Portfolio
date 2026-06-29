import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "IBM SkillsBuild - AICTE Internship",
    company: "Edunet Foundation",
    duration: "June - July 2026",
    location: "Remote",
    responsibilities: [
      "Participated in hands-on workshops and training sessions to enhance skills in web development and programming.",
      "Collaborated with peers to complete projects and assignments, fostering a collaborative learning environment.",
      "Gained practical experience in applying theoretical knowledge to real-world scenarios, improving problem-solving abilities."

    ],
    Skills: ["Python", "IBM Cloud", "AI agents", "machine learning", "Git", "GitHub"]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 light:bg-slate-50/50 relative"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-800 light:border-slate-300 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Point on timeline */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                <Briefcase size={12} className="text-blue-400" />
              </div>

              {/* Card content */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.03)] transition-all duration-300">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 light:text-slate-800">
                      {exp.title}
                    </h3>
                    <p className="text-base text-blue-400 light:text-blue-600 font-semibold mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Meta items */}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 light:text-slate-500 font-mono">
                    <div className="flex items-center space-x-1.5 bg-slate-900 light:bg-slate-100 px-3 py-1 rounded-full border border-slate-800/50 light:border-slate-200">
                      <Calendar size={14} className="text-blue-500" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 bg-slate-900 light:bg-slate-100 px-3 py-1 rounded-full border border-slate-800/50 light:border-slate-200">
                      <MapPin size={14} className="text-purple-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 text-slate-400 light:text-slate-600 mb-6 pl-4 list-disc text-left leading-relaxed font-sans text-sm sm:text-base">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 border-t border-slate-800/40 pt-4">
                  {exp.Skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-blue-500/5 border border-blue-500/20 text-blue-400 text-xs font-semibold font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
