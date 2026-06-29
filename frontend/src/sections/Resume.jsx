import React from 'react';
import { Download, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/20 light:bg-white relative"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Content Box */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800/40 text-center space-y-8 max-w-2xl mx-auto hover:shadow-[0_0_40px_rgba(168,85,247,0.05)] transition-all duration-300">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-100 light:text-slate-800">
              Curriculum Vitae
            </h3>
            <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed font-sans max-w-md mx-auto">
              Review my qualifications, skills progression, education, and internship achievements. Download the file or inspect it directly.
            </p>
          </div>

          {/* Interactive Resume Card Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group w-full h-80 rounded-2xl overflow-hidden border border-slate-800 light:border-slate-200 bg-slate-900 shadow-md"
          >
            {/* The Resume Image Preview */}
            <img
              src="/resume.jpg"
              alt="Khushboo Rawat Resume Preview"
              className="w-full h-full object-cover object-top opacity-60 group-hover:scale-105 transition-transform duration-500 filter blur-[0.5px] group-hover:blur-0"
            />
            
            {/* Overlay Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-left">
              <span className="text-[10px] font-semibold text-purple-400 font-mono tracking-wider bg-purple-500/10 border border-purple-500/25 px-2 py-0.5 rounded w-fit mb-2">
                CV PREVIEW
              </span>
              <h4 className="text-lg font-bold text-white font-sans">
                Khushboo_Rawat_Resume.jpg
              </h4>
              <p className="text-xs text-slate-400 font-mono mt-1">
                B.Tech Computer Science | YMCA | 9.04 CGPA
              </p>
            </div>

            {/* Direct Inspection Action */}
            <a
              href="/resume.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 p-2 bg-slate-950/80 hover:bg-slate-950 rounded-full border border-slate-800 text-slate-300 hover:text-white transition-colors duration-200"
              title="Open full image in new tab"
            >
              <Eye size={18} />
            </a>
          </motion.div>

          {/* Download Action button */}
          <div className="pt-2">
            <a
              href="/resume.jpg"
              download="Khushboo_Rawat_Resume.jpg"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              <Download size={18} />
              <span>Download Resume (JPG)</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
