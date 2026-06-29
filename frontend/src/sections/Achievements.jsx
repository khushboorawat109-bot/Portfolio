import React, { useState, useEffect, useRef } from 'react';
import { Award, Zap, Code, Shield } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: "Problems Solved", value: 1000, suffix: "+", desc: "CodeChef Diamond Badge", icon: <Code className="text-blue-500" /> },
  { label: "Coding Streak", value: 50, suffix: "+ Days", desc: "Consistent coding practice", icon: <Zap className="text-yellow-500" /> },
  { label: "Academic CGPA", value: 9.04, suffix: "", desc: "JC Bose YMCA", icon: <Award className="text-purple-500" /> }
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseFloat(value);
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const currentVal = progress * (end - start) + start;
      
      if (end % 1 === 0) {
        setCount(Math.floor(currentVal));
      } else {
        setCount(currentVal.toFixed(2));
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
      {count}
      <span className="text-blue-500">{suffix}</span>
    </span>
  );
};

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/20 light:bg-white relative overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Key <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-slate-800/40 text-center flex flex-col items-center space-y-4 shadow-sm hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="p-4 bg-slate-900 light:bg-slate-100 rounded-2xl w-fit">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <Counter value={stat.value} suffix={stat.suffix} />
                <span className="text-base font-bold text-slate-350 light:text-slate-700 mt-2 font-sans">{stat.label}</span>
                <span className="text-xs text-slate-500 mt-1 font-mono">{stat.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestone Badges Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 rounded-3xl border border-slate-850 flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto"
        >
          <div className="p-4 bg-blue-500/10 rounded-full border border-blue-500/20 text-blue-400">
            <Shield size={36} />
          </div>
          <div className="text-left space-y-2">
            <h3 className="text-lg font-bold text-slate-100 light:text-slate-850 font-sans">
              CodeChef Diamond Problem Solver Badge
            </h3>
            <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed font-sans">
              Achieving the Diamond Badge highlights dedication and advanced logic implementation, solving over 1,000 algorithmic problems across matrices, sorting, strings, and tree data structures. Active participant in short-format competitive coding runs.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
