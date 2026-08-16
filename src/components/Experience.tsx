import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCES[0].id);

  const activeExp = EXPERIENCES.find((exp) => exp.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience & System Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2">
            Over a decade of dedicated engineering across research institutions, enterprise consultancy firms, and web development agencies.
          </p>
        </div>

        {/* Interactive Experience Layout: Company Selector + Deep-Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Timeline Navigation Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1 mb-2">
              Select Position
            </p>
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  id={`experience-tab-${exp.id}`}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-emerald-500/60 dark:border-emerald-500/60 shadow-md ring-1 ring-emerald-500/20'
                      : 'bg-white/60 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white text-base">
                        {exp.companyShort}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                          Current
                        </span>
                      )}
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-emerald-600 dark:text-emerald-400 translate-x-1' : 'text-slate-400'}`} />
                  </div>

                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    {exp.role}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </button>
              );
            })}

            {/* Career Summary Stat Badge */}
            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-500/20 text-xs text-slate-700 dark:text-slate-300 space-y-2 mt-4">
              <div className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300">
                <TrendingUp className="w-4 h-4" />
                <span>Continuous Evolution</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Progressed from core PHP dynamic applications to state-wide multi-million dollar e-Governance architecture at C-DAC.
              </p>
            </div>
          </div>

          {/* Right Column: Active Experience Detail Card */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {activeExp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {activeExp.type}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>{activeExp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 space-y-1">
                  <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{activeExp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeExp.location}</span>
                  </div>
                </div>
              </div>

              {/* Position Overview */}
              <div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {activeExp.description}
                </p>
              </div>

              {/* Key Metrics / Highlights if available */}
              {activeExp.metrics && activeExp.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {activeExp.metrics.map((metric, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80">
                      <div className="text-xs text-slate-500 dark:text-slate-400">{metric.label}</div>
                      <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">{metric.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bulleted Core Responsibilities & Impact */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Key Deliverables & Architectural Achievements
                </h4>
                <div className="space-y-2.5">
                  {activeExp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Employed */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Technologies & Tools Applied</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeExp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
