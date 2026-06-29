import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle, Globe, MessageSquare, Link2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('success');
        setStatusMessage(data.message || 'Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMessage('Network error. Please check if the backend is running.');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 light:bg-slate-50/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* LinkedIn CTA - Creative Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
          <a
            href="https://www.linkedin.com/in/khushboo-rawat-13may2007"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block p-6 sm:p-8 rounded-2xl border border-blue-500/50 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-2 flex-1">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/30 text-blue-300 text-xs font-bold rounded-full">
                  <Link2 size={14} /> FEATURED
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  Connect with me on LinkedIn
                </h3>
                <p className="text-slate-300 text-sm">Khushboo Rawat - B.Tech CSE | Software Developer & Frontend Engineer</p>
              </div>
              <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-blue-500/30 rounded-xl group-hover:bg-blue-500/50 transition-all">
                <ArrowRight size={24} className="text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info cards left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-100 light:text-slate-800">
                Let's discuss a project!
              </h3>
              <p className="text-sm sm:text-base text-slate-400 light:text-slate-650 leading-relaxed font-sans">
                I am interested in internship opportunities and software developer roles. If you have a question, an opportunity, or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6 my-6">
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-slate-550 uppercase">Email Me</span>
                  <a href="mailto:khushboorawat109@gmail.com" className="text-slate-200 light:text-slate-800 hover:text-blue-500 font-semibold font-mono text-sm sm:text-base">
                    khushboorawat109@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-slate-550 uppercase">Location</span>
                  <span className="text-slate-200 light:text-slate-800 font-semibold text-sm sm:text-base">
                    Palwal, Haryana
                  </span>
                </div>
              </div>

            </div>

            {/* Social profiles */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-350 light:text-slate-700 font-mono uppercase tracking-wider">
                Follow me on
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/khushboo-rawat-13may2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 light:bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl border border-slate-850 light:border-slate-200 text-slate-400 light:text-slate-750 transition-colors duration-250"
                  aria-label="LinkedIn Profile"
                >
                  <Globe size={20} />
                </a>

                <a
                  href="https://github.com/khushboorawat109-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 light:bg-slate-100 hover:bg-slate-800 hover:text-white rounded-xl border border-slate-850 light:border-slate-200 text-slate-400 light:text-slate-750 transition-colors duration-250"
                  aria-label="GitHub Profile"
                >
                  <Globe size={20} />
                </a>

                <a
                  href="https://www.codechef.com/users/mistii_12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 light:bg-slate-100 hover:bg-blue-800 hover:text-white rounded-xl border border-slate-850 light:border-slate-200 text-slate-400 light:text-slate-750 transition-colors duration-250 font-bold text-sm font-mono flex items-center justify-center"
                  aria-label="CodeChef Profile"
                  title="CodeChef Profile"
                >
                  CC
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/40 text-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Status banner */}
                {status && status !== 'loading' && (
                  <div
                    className={`p-4 rounded-xl flex items-start space-x-3 text-sm font-sans ${
                      status === 'success'
                        ? 'bg-green-500/10 border border-green-500/25 text-green-400'
                        : 'bg-red-500/10 border border-red-500/25 text-red-400'
                    }`}
                  >
                    {status === 'success' ? (
                      <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    )}
                    <span>{statusMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-450 light:text-slate-650 font-sans uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-slate-900/60 light:bg-white border rounded-xl px-4 py-3 text-sm text-slate-200 light:text-slate-800 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-sans ${
                        errors.name ? 'border-red-500/50' : 'border-slate-800 light:border-slate-250'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-xs text-red-400 font-sans">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-450 light:text-slate-650 font-sans uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-slate-900/60 light:bg-white border rounded-xl px-4 py-3 text-sm text-slate-200 light:text-slate-800 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-sans ${
                        errors.email ? 'border-red-500/50' : 'border-slate-800 light:border-slate-250'
                      }`}
                      placeholder="johndoe@example.com"
                    />
                    {errors.email && <span className="text-xs text-red-400 font-sans">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-450 light:text-slate-650 font-sans uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-slate-900/60 light:bg-white border rounded-xl px-4 py-3 text-sm text-slate-200 light:text-slate-800 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-sans ${
                      errors.subject ? 'border-red-500/50' : 'border-slate-800 light:border-slate-250'
                    }`}
                    placeholder="Internship Opportunity / Inquiry"
                  />
                  {errors.subject && <span className="text-xs text-red-400 font-sans">{errors.subject}</span>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-450 light:text-slate-650 font-sans uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-slate-900/60 light:bg-white border rounded-xl px-4 py-3 text-sm text-slate-200 light:text-slate-800 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-sans resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-slate-800 light:border-slate-250'
                    }`}
                    placeholder="Hi Khushboo, I'd like to talk about..."
                  />
                  {errors.message && <span className="text-xs text-red-400 font-sans">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800/40 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
