import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Play, 
  Search, 
  ChevronDown, 
  BookOpen, 
  ArrowLeft 
} from 'lucide-react';

const COMMON_ISSUES = [
  {
    title: "Gmail Sync - 'Token Expired' Error",
    category: "Integrations",
    symptom: "Opportunities are not being detected from your inbox, and you see a red warning icon next to your connected Gmail stream.",
    solution: "This occurs when Google revokes authentication tokens (usually after 90 days of inactivity or password change). To resolve, go to Settings -> Integrations, click 'Disconnect' on Gmail, and then click 'Connect' again to re-authorize ApplyZen."
  },
  {
    title: "Resume ATS Score is extremely low (0-20%)",
    category: "Resume Builder",
    symptom: "AI feedback suggests formatting errors, and your matching percentage is very low on all opportunities.",
    solution: "Ensure your resume is uploaded in standard text-searchable PDF format. Avoid multi-column layouts, tables, or putting key skills in image elements, as standard ATS parsers cannot read them. Use our plain-text templates for best results."
  },
  {
    title: "AI Agent is 'Paused' or inactive",
    category: "AI Agent Automation",
    symptom: "No job applications are being filed automatically, and your active agent count is 0.",
    solution: "Check if you have reached your monthly subscription tier limit (5 for Basic plan). If you have limit left, make sure at least one resume is marked as 'Primary' and that you have specified active role preferences in Dashboard -> AI Agents."
  },
  {
    title: "Outlook Auto-sync is delayed",
    category: "Integrations",
    symptom: "Confirmation emails received in Outlook take up to 2 hours to appear in Applications pipeline.",
    solution: "Outlook push notifications can occasionally delay due to Microsoft API rate limits. You can trigger a manual sync at any time by clicking the 'Refresh Outlook' button on the Opportunities dashboard."
  }
];

const DIAGNOSTIC_STEPS = [
  { name: "Checking Gmail sync status...", key: "gmail" },
  { name: "Validating Outlook connection...", key: "outlook" },
  { name: "Verifying Database connection...", key: "db" },
  { name: "Analyzing Resume indexes...", key: "resume" },
  { name: "Running Agent cron-job check...", key: "agent" },
];

export default function Troubleshoot() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [diagnosticsRunning, setDiagnosticsRunning] = useState(false);
  const [diagnosticsDone, setDiagnosticsDone] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Diagnostics statuses
  const [stepStatuses, setStepStatuses] = useState({
    gmail: 'pending',
    outlook: 'pending',
    db: 'pending',
    resume: 'pending',
    agent: 'pending',
  });

  const runDiagnostics = () => {
    setDiagnosticsRunning(true);
    setDiagnosticsDone(false);
    
    // Set all to pending
    const resetStatuses = {};
    DIAGNOSTIC_STEPS.forEach(step => { resetStatuses[step.key] = 'running'; });
    setStepStatuses(resetStatuses);

    // Simulate stepping through diagnostics
    let currentStep = 0;
    const runNext = () => {
      if (currentStep < DIAGNOSTIC_STEPS.length) {
        const step = DIAGNOSTIC_STEPS[currentStep];
        // 90% chance of success, 10% chance of warning
        const outcome = Math.random() > 0.15 ? 'success' : 'warning';
        
        setStepStatuses(prev => ({
          ...prev,
          [step.key]: outcome
        }));
        
        currentStep++;
        setTimeout(runNext, 800 + Math.random() * 400);
      } else {
        setDiagnosticsRunning(false);
        setDiagnosticsDone(true);
      }
    };
    
    setTimeout(runNext, 600);
  };

  const filteredIssues = COMMON_ISSUES.filter(issue => 
    issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.symptom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.solution.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fadeIn pb-8 max-w-[1200px] mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
        <div>
          <nav className="flex items-center gap-1 text-sm font-bold text-slate-500 mb-2">
            <span className="cursor-pointer hover:text-primary" onClick={() => navigate('/help-center')}>Help Center</span>
            <ChevronRight className="w-[16px] h-[16px]" />
            <span className="text-primary">Troubleshooting</span>
          </nav>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">Diagnostic & Troubleshoot Dashboard</h2>
          <p className="text-lg text-slate-600 max-w-xl">Run real-time diagnostics on your system integrations or look up common issues.</p>
        </div>
        <div>
          <button 
            onClick={() => navigate('/help-center')}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 text-slate-700 bg-white hover:border-slate-350 transition-all active:scale-[0.97]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Help Center</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Common Issues Search & List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              Common Issues Reference
            </h3>
            
            {/* Search Input */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search troubleshooting topics..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>

            {/* List */}
            {filteredIssues.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                No matching troubleshooting issues found.
              </div>
            ) : (
              <div className="space-y-4">
                {filteredIssues.map((issue, idx) => (
                  <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:border-slate-200 transition-all">
                    <button 
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-50 text-left font-semibold text-slate-800 text-sm sm:text-base transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-100">
                          {issue.category}
                        </span>
                        {issue.title}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${expandedFaq === idx ? 'rotate-180 text-primary' : ''}`} />
                    </button>
                    {expandedFaq === idx && (
                      <div className="p-4 border-t border-slate-100 bg-white space-y-3 text-sm">
                        <div>
                          <span className="font-bold text-red-600 block text-xs uppercase tracking-wider mb-1">Symptom</span>
                          <p className="text-slate-600 leading-relaxed">{issue.symptom}</p>
                        </div>
                        <div>
                          <span className="font-bold text-emerald-600 block text-xs uppercase tracking-wider mb-1">Solution</span>
                          <p className="text-slate-600 leading-relaxed">{issue.solution}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right 1 Column: Diagnostic Engine */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-600 animate-pulse" />
                Live System Diagnostics
              </h3>
              <p className="text-xs text-slate-500 mb-6">Run live checks on background email-sync, database endpoints, resume ATS scoring indexes, and AI automation tasks.</p>

              {/* Status List */}
              <div className="space-y-4 mb-8">
                {DIAGNOSTIC_STEPS.map((step) => {
                  const status = stepStatuses[step.key];
                  return (
                    <div key={step.key} className="flex items-center justify-between border-b border-slate-50 pb-2.5">
                      <span className="text-xs font-semibold text-slate-700">{step.name}</span>
                      <div>
                        {status === 'pending' && (
                          <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold border border-slate-200">
                            Ready
                          </span>
                        )}
                        {status === 'running' && (
                          <span className="flex items-center gap-1.5 text-[10px] text-primary font-bold">
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            Checking
                          </span>
                        )}
                        {status === 'success' && (
                          <span className="flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold border border-emerald-100">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            Operational
                          </span>
                        )}
                        {status === 'warning' && (
                          <span className="flex items-center gap-1 text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-bold border border-amber-100">
                            <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0" />
                            Warning
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Success Report */}
              {diagnosticsDone && (
                <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl mb-6 flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-emerald-800">Diagnostics Complete</h4>
                    <p className="text-[11px] text-emerald-600 mt-0.5 leading-relaxed">
                      All system connections are healthy. If you are experiencing issues with email sync, please verify your Gmail sync settings in the integrations page.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={runDiagnostics}
              disabled={diagnosticsRunning}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] shadow-md shadow-emerald-500/10 disabled:opacity-60"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{diagnosticsRunning ? 'Running Diagnostics...' : 'Run Diagnostics'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
