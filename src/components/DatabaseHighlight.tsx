import React, { useState } from 'react';
import { 
  Database, 
  Zap, 
  Terminal, 
  CheckCircle, 
  Play, 
  Clock, 
  ArrowDownRight, 
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-react';
import { DATABASE_DEMOS } from '../data/portfolioData';

export const DatabaseHighlight: React.FC = () => {
  const [selectedDemoId, setSelectedDemoId] = useState<string>(DATABASE_DEMOS[0].id);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executionResult, setExecutionResult] = useState<{
    status: string;
    duration: string;
    rowsAffected: string;
    plan: string;
  } | null>(null);

  const activeDemo = DATABASE_DEMOS.find((d) => d.id === selectedDemoId) || DATABASE_DEMOS[0];

  const handleSimulateExecution = () => {
    setIsExecuting(true);
    setExecutionResult(null);

    setTimeout(() => {
      setIsExecuting(false);
      setExecutionResult({
        status: 'SUCCESS (200 OK)',
        duration: activeDemo.id === 'demo-1' ? '0.18 ms' : '18.4 ms',
        rowsAffected: activeDemo.id === 'demo-1' ? '30 summary rows from 2,400,000 scanned' : '1 bill row locked & 2 ledger entries inserted',
        plan: activeDemo.id === 'demo-1'
          ? '-> Index range scan on tbl_expenditures using idx_dept_year_status (cost=42.1 rows=30)'
          : '-> Stored Procedure sp_ComputeDeductionsAndDisburse executed inside single atomic lock buffer'
      });
    }, 600);
  };

  return (
    <section id="database-arch" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
            <Database className="w-3.5 h-3.5" />
            <span>Database Architecture & Performance Tuning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Throughput Relational Engineering
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-2">
            Eliminating bottlenecks in government ledgers through MySQL Stored Procedures, composite indexing, transaction isolation, and query plan profiling.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {DATABASE_DEMOS.map((demo) => {
            const isSelected = demo.id === selectedDemoId;
            return (
              <button
                key={demo.id}
                id={`db-demo-tab-${demo.id}`}
                onClick={() => {
                  setSelectedDemoId(demo.id);
                  setExecutionResult(null);
                }}
                className={`text-left p-5 rounded-2xl transition-all border ${
                  isSelected
                    ? 'bg-slate-800/90 border-emerald-500/70 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/40'
                    : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    Optimization Case Study
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 font-mono font-bold border border-emerald-500/30">
                    {demo.latencyDrop}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mt-2">
                  {demo.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {demo.scenario}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Query Inspection Workbench */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Workbench Header */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>mysql&gt; EXPLAIN ANALYZE PROFILER</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="run-simulated-query-btn"
                onClick={handleSimulateExecution}
                disabled={isExecuting}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all disabled:opacity-50"
              >
                {isExecuting ? (
                  <>
                    <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Running Profile...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Query Profile</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Workbench Body: Before vs After Code Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Left: Traditional / Unoptimized Query */}
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  Baseline / Legacy Approach
                </span>
                <span className="text-[11px] font-mono text-slate-400">Bottleneck Pattern</span>
              </div>

              <pre className="p-4 rounded-xl bg-slate-900 text-slate-300 font-mono text-xs leading-relaxed overflow-x-auto border border-slate-800">
                <code>{activeDemo.beforeQuery}</code>
              </pre>

              <div className="text-xs text-slate-400">
                <strong className="text-slate-300">Issue:</strong> Full table scan across millions of records without composite index utilization or high client-server roundtrips.
              </div>
            </div>

            {/* Right: Engineered Stored Routine / Indexed Optimization */}
            <div className="p-6 space-y-3 bg-emerald-950/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Arnab's Refactored Architecture
                </span>
                <span className="text-[11px] font-mono text-emerald-300 font-semibold">
                  {activeDemo.latencyDrop}
                </span>
              </div>

              <pre className="p-4 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs leading-relaxed overflow-x-auto border border-emerald-500/30">
                <code>{activeDemo.afterQuery}</code>
              </pre>

              <div className="text-xs text-slate-300">
                <strong className="text-emerald-400">Solution Applied:</strong> {activeDemo.technique}
              </div>
            </div>

          </div>

          {/* Execution Simulation Output Panel */}
          {executionResult && (
            <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Execution Telemetry Output
                </span>
                <span className="text-slate-400">Duration: <strong className="text-white">{executionResult.duration}</strong></span>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
                <div><span className="text-slate-500">Status:</span> {executionResult.status}</div>
                <div><span className="text-slate-500">Execution Plan:</span> {executionResult.plan}</div>
                <div><span className="text-slate-500">Rows:</span> {executionResult.rowsAffected}</div>
              </div>
            </div>
          )}

          {/* Strategy Footer Note */}
          <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero data anomaly tolerance: Enforced with MySQL foreign keys, trigger validations & explicit ACID transactions.</span>
            </div>
            <span className="text-emerald-400 font-mono font-medium">Impact: {activeDemo.impact}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
