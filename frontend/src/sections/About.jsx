import React from 'react';
import { BookOpen, Code, Brain, Database, Award, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

const interests = [
  { icon: <Code className="text-blue-500" size={24} />, title: "Front-End Development", desc: "Crafting beautiful, modern, and interactive user interfaces." },
  { icon: <Laptop className="text-purple-500" size={24} />, title: "Web Development", desc: "Building scalable and responsive applications with React and CSS." },
  { icon: <Database className="text-indigo-500" size={24} />, title: "DSA", desc: "Passionate about solving algorithmic challenges on coding portals." },
  { icon: <Brain className="text-green-500" size={24} />, title: "Applied AI", desc: "Exploring neural networks, models, and artificial intelligence tools." },
];

const About = ({ theme }) => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 light:bg-slate-50/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold text-slate-200 light:text-slate-800">
              Aspiring Software Developer based in Haryana, India
            </h3>
            
            <p className="text-slate-400 light:text-slate-600 leading-relaxed font-sans">
              I am a dedicated Computer Science Engineering student currently pursuing my Bachelor of Technology (B.Tech) at <strong>JC Bose University of Science and Technology, YMCA</strong>. My academic journey has been driven by curiosity and a commitment to technical excellence, maintaining a strong CGPA of <strong>9.04</strong>.
            </p>

            <p className="text-slate-400 light:text-slate-600 leading-relaxed font-sans">
              I specialize in frontend technologies and problem solving. I enjoy turning complex problem statements into clean, readable code and interactive designs. Beyond writing applications, I focus on mastering Data Structures and Algorithms and exploring AI applications in engineering.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800/50 light:border-slate-200 shadow-sm flex items-center space-x-3">
                <BookOpen className="text-blue-500 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 light:text-slate-800">Education</h4>
                  <p className="text-xs text-slate-500">B.Tech CSE Student</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800/50 light:border-slate-200 shadow-sm flex items-center space-x-3">
                <Award className="text-purple-500 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 light:text-slate-800">Academics</h4>
                  <p className="text-xs text-slate-500">9.04 Current CGPA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interests.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl text-left hover:scale-[1.03] transition-all duration-300 group shadow-sm flex flex-col justify-between h-48"
              >
                <div className="p-3 bg-slate-950/50 light:bg-slate-100 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-200 light:text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 light:text-slate-600 leading-normal font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
