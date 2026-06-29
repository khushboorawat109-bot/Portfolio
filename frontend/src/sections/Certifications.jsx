import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "Apr 2026",
    category: "Artificial Intelligence",
    desc: "Successfully completed artificial intelligence tasks covering machine learning fundamentals, neural networks, and deep learning applications.",
    link: "https://media.licdn.com/dms/image/v2/D562DAQEc3WAO-uL0OA/profile-treasury-document-cover-images_480/B56Z1qcqUlHoBI-/0/1775607394769?e=1783314000&v=beta&t=eaDBdXCP-kheWSfSgR9kDqfc8b4B9s6xEFpCJ4UQz3k"
  },
  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    date: "Jan 2026",
    category: "Programming",
    desc: "Achieved excellence in structures, pointer operations, array manipulations, and algorithm writing in python programming.",
    link: "https://www.credly.com/badges/0d42b26d-4ec4-4a96-93e5-b164439cf141/public_url"
  },
  {
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    date: "June 2026",
    category: "Data Analytics",
    desc: "Completed a comprehensive data analytics simulation, demonstrating proficiency in data cleaning, visualization, and deriving actionable insights.",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_vrcrzmhi3fnkdHW8P_1781264033653_completion_certificate.pdf"
  },
  {
    title: "AI Tools Workshop",
    issuer: "Be10x",
    date: "June 2026",
    category: "AI & Technology",
    desc: "AI Tools Workshop by Be10x provided hands-on experience with cutting-edge AI tools, enhancing skills in automation, data analysis, and machine learning applications.",
    link: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971477574"
  }
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 light:bg-slate-50/50 relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Certifications & <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/40 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative group"
            >
              
              <div className="space-y-4 text-left">
                {/* Category tag */}
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[10px] font-semibold tracking-wider uppercase font-mono">
                    {cert.category}
                  </span>
                  
                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-mono">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-start space-x-3 pt-2">
                  <div className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800/50 light:border-slate-200 text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-200 light:text-slate-800 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-450 light:text-slate-500 font-semibold mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed font-sans pt-2">
                  {cert.desc}
                </p>
              </div>

              {/* View Link */}
              <div className="border-t border-slate-850 mt-6 pt-4 flex">
                <a
                  href={cert.link}
                  className="flex items-center space-x-1.5 text-xs font-mono text-slate-350 light:text-slate-650 hover:text-blue-500 transition-colors duration-200"
                >
                  <ExternalLink size={14} />
                  <span>View Certificate</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
