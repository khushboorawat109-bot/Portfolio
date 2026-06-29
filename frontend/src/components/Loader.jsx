import React, { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onFinish, 600); // Allow fade animation to complete
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-[#050811] flex flex-col items-center justify-center z-50 transition-all duration-700 ease-out ${
        fadeOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center space-y-6 max-w-xs w-full px-4">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
          KR
        </h1>
        
        {/* Loading details */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-400 font-mono">
            <span>INITIALIZING...</span>
            <span>{progress}%</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
