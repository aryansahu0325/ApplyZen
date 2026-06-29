import React from 'react';

export default function WorkflowMonitor() {
  return (
    <div className="space-y-xl">
      {/* Breadcrumbs / Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-md">
        <div>
          <h2 className="text-3xl font-bold text-on-surface">AI Workflow Monitor</h2>
          <p className="text-sm text-outline mt-xs">Tracking real-time career automation tasks for your Google Senior UI Designer application.</p>
        </div>
        <div className="flex gap-md">
          <button className="px-lg h-10 border border-outline-variant text-on-surface bg-white rounded-lg text-xs font-bold hover:bg-surface-container-low transition-colors">
            View Logs
          </button>
          <button className="px-lg h-10 bg-error text-white rounded-lg text-xs font-bold hover:opacity-90 transition-opacity">
            Stop Agent
          </button>
        </div>
      </div>

      {/* Main Workflow Display */}
      <div className="grid grid-cols-12 gap-lg">
        {/* Status Dashboard */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg md:p-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl relative z-10">
            <div className="flex items-center gap-lg">
              <div className="relative">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">memory</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                  AI
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Current Phase</p>
                <h3 className="text-lg font-bold text-on-surface mt-[2px]">AI Career Assistant is working...</h3>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold animate-pulse border border-secondary/10">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                ACTIVE SESSION
              </span>
            </div>
          </div>

          {/* Workflow Steps - Timeline Layout */}
          <div className="relative space-y-0 pl-12">
            {/* Vertical Line */}
            <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-outline-variant/30">
              <div className="h-1/2 w-full bg-primary transition-all duration-1000"></div>
            </div>

            {/* Step 1: Completed */}
            <div className="relative pb-xl group">
              <div className="absolute -left-[37px] top-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
              </div>
              <div className="flex items-start gap-lg bg-surface-container-lowest p-md rounded-lg border border-outline-variant/20 hover:border-primary/30 transition-all shadow-sm">
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-on-surface">Opportunity Agent</h4>
                  <p className="text-[11px] text-outline mt-xs leading-normal">Scanning job boards and company career portals for matching roles.</p>
                </div>
                <span className="text-[11px] text-primary font-bold">Completed</span>
              </div>
            </div>

            {/* Step 2: Completed */}
            <div className="relative pb-xl group">
              <div className="absolute -left-[37px] top-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
              </div>
              <div className="flex items-start gap-lg bg-surface-container-lowest p-md rounded-lg border border-outline-variant/20 hover:border-primary/30 transition-all shadow-sm">
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-on-surface">JD Agent</h4>
                  <p className="text-[11px] text-outline mt-xs leading-normal">Extracting keywords, requirements, and tech stack from job description.</p>
                </div>
                <span className="text-[11px] text-primary font-bold">Completed</span>
              </div>
            </div>

            {/* Step 3: Active */}
            <div className="relative pb-xl group">
              <div className="absolute -left-[37px] top-0 w-6 h-6 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center z-10">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
              </div>
              <div className="flex items-start gap-lg bg-surface-container-low p-md rounded-lg border-2 border-primary shadow-sm">
                <div className="flex-1">
                  <div className="flex items-center gap-sm mb-xs">
                    <h4 className="text-xs font-bold text-primary">Resume Agent</h4>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-on-surface mt-xs leading-normal">Tailoring resume points to match 'Google Cloud Platform' requirements...</p>
                  {/* Mini Progress Bar */}
                  <div className="mt-md h-1 w-full bg-outline-variant/30 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[65%] rounded-full"></div>
                  </div>
                </div>
                <span className="text-[11px] text-primary font-bold">Processing...</span>
              </div>
            </div>

            {/* Step 4: Pending */}
            <div className="relative pb-xl group">
              <div className="absolute -left-[37px] top-0 w-6 h-6 bg-surface-container border-2 border-outline-variant/60 rounded-full flex items-center justify-center z-10"></div>
              <div className="flex items-start gap-lg opacity-50 p-md rounded-lg border border-transparent">
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-outline">Browser Agent</h4>
                  <p className="text-[11px] text-outline mt-xs leading-normal">Interacting with application forms and navigating portal fields.</p>
                </div>
                <span className="text-[11px] text-outline font-bold">Pending</span>
              </div>
            </div>

            {/* Step 5: Pending */}
            <div className="relative pb-xl group">
              <div className="absolute -left-[37px] top-0 w-6 h-6 bg-surface-container border-2 border-outline-variant/60 rounded-full flex items-center justify-center z-10"></div>
              <div className="flex items-start gap-lg opacity-50 p-md rounded-lg border border-transparent">
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-outline">Submission Agent</h4>
                  <p className="text-[11px] text-outline mt-xs leading-normal">Final validation of information and clicking 'Submit Application'.</p>
                </div>
                <span className="text-[11px] text-outline font-bold">Pending</span>
              </div>
            </div>

            {/* Step 6: Final */}
            <div className="relative">
              <div className="absolute -left-[37px] top-0 w-6 h-6 bg-surface-container border-2 border-outline-variant/60 rounded-full flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-[14px] text-outline">flag</span>
              </div>
              <div className="flex items-start gap-lg opacity-30 p-md rounded-lg border border-transparent">
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-outline">Completed</h4>
                  <p className="text-[11px] text-outline mt-xs leading-normal">Application successfully submitted. Confirmation logged.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-xl pt-lg border-t border-outline-variant/20 flex justify-between items-center text-outline text-xs font-medium">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-[18px]">info</span>
              <p>This process usually takes 2-3 minutes</p>
            </div>
            <div>
              <p>Estimated completion: <span className="font-bold text-on-surface">11:42 AM</span></p>
            </div>
          </div>
        </div>

        {/* Secondary Info Cards */}
        <div className="col-span-12 lg:col-span-4 space-y-lg">
          {/* Session Details */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-lg shadow-sm">
            <h4 className="text-sm font-bold text-on-surface mb-md">Session Context</h4>
            <div className="space-y-md text-xs">
              <div className="flex justify-between py-xs border-b border-outline-variant/20">
                <span className="text-outline font-semibold">Job ID</span>
                <span className="text-on-surface font-bold">REF-99231-GGL</span>
              </div>
              <div className="flex justify-between py-xs border-b border-outline-variant/20">
                <span className="text-outline font-semibold">Target Firm</span>
                <span className="text-on-surface font-bold">Google Inc.</span>
              </div>
              <div className="flex justify-between py-xs border-b border-outline-variant/20">
                <span className="text-outline font-semibold">Agent Model</span>
                <span className="text-on-surface font-bold">GPT-4-Turbo-JobExpert</span>
              </div>
              <div className="flex justify-between py-xs">
                <span className="text-outline font-semibold">Data Privacy</span>
                <span className="text-primary font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                  Encrypted
                </span>
              </div>
            </div>
          </div>

          {/* Visual Summary / Preview */}
          <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
            <div className="relative z-10">
              <h4 className="text-sm font-bold mb-md">Live Preview</h4>
              <div className="aspect-video bg-black/40 rounded-lg border border-white/10 flex items-center justify-center mb-md group cursor-zoom-in relative">
                <img className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Agent interface preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdP-1za8c_NAf6z0bqLhRWCDzq-STKJRkZOg1C2JzC96T2U7xraDqd_8mzMn_Sb8ZPK-N0xbzi7uzWOoowk5IPR7Di_38JmHUVGB-zw7pVjgQdL4xe5YZLq-Jxgq0LUFTuutggycMXL1khfXZf1MQ5-2LA422pzR4xHTuCEWAaPCgmh7Wqf-etbwl49HZRqbnyCMYnsR1Q3_Q6N6PyQwN4FvyWbgX6G3LpGYWqfN1pYV-E5DlOjIuy_1dWty4ibcaZ2vfVE50ClsXW"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[48px] text-white">fullscreen</span>
                  <p className="text-xs font-semibold text-white mt-xs">Expand Browser View</p>
                </div>
              </div>
              <p className="text-[11px] text-inverse-on-surface/70 italic leading-normal">Agent is currently modifying 'Professional Summary' section of the PDF.</p>
            </div>
          </div>

          {/* Activity Log Mini */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-lg flex flex-col h-56">
            <div className="flex justify-between items-center mb-md">
              <h4 className="text-sm font-bold text-on-surface">Agent Terminal</h4>
              <span className="text-[9px] bg-surface-variant px-2 py-0.5 rounded font-mono text-outline font-bold">LIVE</span>
            </div>
            <div className="font-mono text-[10px] space-y-1 overflow-y-auto scroll-hide text-outline font-semibold flex-1">
              <p><span className="text-primary">[11:39:02]</span> Fetching JD requirements...</p>
              <p><span className="text-primary">[11:39:15]</span> Comparing with master_resume.docx</p>
              <p><span className="text-primary">[11:39:45]</span> Identified skill gap: 'BigQuery'</p>
              <p><span className="text-primary">[11:40:02]</span> Rewriting project #3 for relevance...</p>
              <p><span className="text-secondary">[11:40:12]</span> SUCCESS: Section optimized</p>
              <p><span className="text-primary">[11:40:15]</span> Finalizing draft formatting...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
