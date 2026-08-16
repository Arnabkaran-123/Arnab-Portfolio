import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Database, 
  Server, 
  ShieldCheck, 
  FileCode2, 
  Layers, 
  CheckCircle2,
  ExternalLink,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="about"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: High-Impact Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Role & Status Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {PERSONAL_INFO.title.split('|')[0].trim()}
              </span>
              
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">{PERSONAL_INFO.name}</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                Full-Stack & Database Developer specializing in State-Scale Government Systems.
              </p>
            </div>

            {/* Bio Statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              10+ years of engineering experience architecting mission-critical platforms like 
              <strong className="text-slate-900 dark:text-white font-semibold"> WAMIS</strong> (Works & Accounts Management) 
              and <strong className="text-slate-900 dark:text-white font-semibold">CDMS</strong>. Master of high-throughput 
              <strong className="text-emerald-700 dark:text-emerald-400 font-semibold"> MySQL Stored Procedures</strong>, database performance tuning, 
              robust PHP MVC backends, and rock-solid enterprise security.
            </p>

            {/* Tech Badges Row */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "MySQL & Stored Procedures",
                "Database Tuning",
                "Government WAMIS / CDMS",
                "PHP (MVC)",
                "JasperReports",
                "IP Whitelisting & RBAC",
                "Tailwind CSS & JS"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                id="hero-experience-cta"
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              >
                <span>View Work Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-cta"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Get in Touch</span>
              </a>

              <button
                id="hero-resume-cta"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Quick Resume Spec</span>
              </button>
            </div>

          </div>

          {/* Right Column: Key Metrics & Technical Snapshot Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                      Enterprise Engineering Profile
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      C-DAC | State Govt IT Infrastructure
                    </p>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-4 py-5 border-b border-slate-100 dark:border-slate-800">
                {PERSONAL_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/60">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {stat.suffix}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Strengths Checklist */}
              <div className="pt-4 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Architectural Pillars
                </p>
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>State-Scale WAMIS & CDMS Workflow Logic</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>Heavy Concurrency MySQL Stored Routines & Transactions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>JasperReports Ledger / M-Book Bill Automation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>Government Grade IP Whitelisting & RBAC Hardening</span>
                  </div>
                </div>
              </div>

              {/* Direct email quick link */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">Direct Contact:</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
