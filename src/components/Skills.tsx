import React, { useState, useMemo } from 'react';
import { 
  Database, 
  Building2, 
  Layout, 
  Wrench, 
  Search, 
  Check, 
  Code, 
  Sparkles,
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'database':
        return <Database className="w-4 h-4" />;
      case 'enterprise':
        return <Building2 className="w-4 h-4" />;
      case 'frontend':
        return <Layout className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  // Filter skills based on selected category & search query
  const filteredSkills = useMemo(() => {
    return SKILL_CATEGORIES.flatMap((category) => {
      if (activeCategory !== 'all' && category.id !== activeCategory) {
        return [];
      }
      return category.skills
        .filter((skill) => {
          if (!searchQuery.trim()) return true;
          const query = searchQuery.toLowerCase();
          return (
            skill.name.toLowerCase().includes(query) ||
            (skill.tag && skill.tag.toLowerCase().includes(query)) ||
            (skill.description && skill.description.toLowerCase().includes(query)) ||
            category.name.toLowerCase().includes(query)
          );
        })
        .map((skill) => ({
          ...skill,
          categoryName: category.name,
          categoryId: category.id,
        }));
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Technical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Core Skills & Engineering Stack
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2">
              Hardened through a decade of production codebases, multi-million record databases, and mission-critical government workflows.
            </p>
          </div>

          {/* Real-time Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="skills-search-input"
              type="text"
              placeholder="Search skill (e.g. MySQL, PHP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-100 dark:border-slate-800/80 pb-4">
          <button
            id="skill-filter-all"
            onClick={() => setActiveCategory('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>All Domains ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})</span>
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`skill-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No technical skill matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="group p-5 rounded-xl bg-slate-50/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </h3>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {skill.categoryName}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        skill.level === 'Expert'
                          ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                          : skill.level === 'Advanced'
                          ? 'bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-500/30'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {skill.level}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      {skill.years}+ yrs
                    </span>
                  </div>
                </div>

                {skill.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                    {skill.description}
                  </p>
                )}

                {skill.tag && (
                  <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Focus: {skill.tag}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
