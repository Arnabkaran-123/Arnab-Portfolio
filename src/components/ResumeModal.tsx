import React from 'react';
import { X, Printer, Download, Mail, MapPin, Briefcase, Database, Building2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 my-8 max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print p-4 sm:px-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
              Professional Resume Specification
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="print-resume-action-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400 sm:text-right font-mono">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-4 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Technical Expertise Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">
                    {category.name}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {category.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Work Experience
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {exp.role} — <span className="text-emerald-600 dark:text-emerald-400">{exp.company}</span>
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                    {exp.period} | {exp.location.split(',')[0]}
                  </span>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300">
                  {exp.description}
                </p>

                <div className="space-y-1 pt-1">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Major Systems Portfolio Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Key State & Enterprise Deployments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PROJECTS.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {p.title}
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    {p.organization}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    {p.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
