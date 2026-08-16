import React from 'react';
import { ArrowUp, Heart, Code2, Database, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <div className="text-white font-bold text-sm">{PERSONAL_INFO.name}</div>
              <p className="text-xs text-slate-400">
                Project Engineer @ C-DAC | Full-Stack & Database Developer
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#database-arch" className="hover:text-white transition-colors">Database Architecture</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. • Cuttack & Bhubaneswar, Odisha.
          </div>
          
          <div className="flex items-center gap-2">
            <span>Crafted with Clean Code & Tailwind CSS</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">Optimized for Vercel Static Deployment</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
