import React from 'react';
import { Link } from 'react-router-dom';

export default function WorkflowMonitor() {
  return (
    <>
      
{/* Side Navigation Shell */}
<aside className="fixed left-0 top-0 h-full w-[280px] bg-surface-container-lowest border-r border-outline-variant flex flex-col z-50">
<div className="px-lg py-xl">
<div className="flex items-center gap-md">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>auto_awesome</span>
</div>
<div>
<h1 className="font-display text-headline-md font-bold text-primary">ApplyZen</h1>
<p className="font-label-sm text-on-surface-variant">AI Career Automation</p>
</div>
</div>
</div>
<nav className="flex-1 px-md space-y-xs overflow-y-auto scroll-hide">
<Link className="flex items-center gap-md px-lg py-md text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg" to="/dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md">Dashboard</span>
</Link>
<Link className="flex items-center gap-md px-lg py-md text-primary font-bold border-r-4 border-primary bg-surface-container rounded-r-none transition-all duration-200" to="/applications">
<span className="material-symbols-outlined">description</span>
<span className="font-body-md">Applications</span>
</Link>
<Link className="flex items-center gap-md px-lg py-md text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg" to="/resumes">
<span className="material-symbols-outlined">assignment</span>
<span className="font-body-md">Resumes</span>
</Link>
<Link className="flex items-center gap-md px-lg py-md text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg" to="/analytics">
<span className="material-symbols-outlined">analytics</span>
<span className="font-body-md">Analytics</span>
</Link>
</nav>
<div className="p-lg border-t border-outline-variant mt-auto">
<button className="w-full bg-primary hover:bg-on-primary-fixed-variant text-white font-label-md py-md px-lg rounded-lg transition-all flex items-center justify-center gap-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Application
            </button>
<div className="mt-lg space-y-xs">
<Link className="flex items-center gap-md px-lg py-sm text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg" to="/settings">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm">Settings</span>
</Link>
<Link className="flex items-center gap-md px-lg py-sm text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg" to="/help">
<span className="material-symbols-outlined">help</span>
<span className="font-label-sm">Help</span>
</Link>
</div>
</div>
</aside>
{/* Top Navigation Shell */}
<header className="fixed top-0 right-0 w-[calc(100%-280px)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-lg z-40">
<div className="flex items-center flex-1 max-w-md">
<div className="relative w-full group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-body-md focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all" placeholder="Search applications..." type="text"/>
</div>
</div>
<div className="flex items-center gap-md">
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors relative">
<span className="material-symbols-outlined text-on-surface-variant">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">chat_bubble</span>
</button>
<div className="h-8 w-[1px] bg-outline-variant mx-sm"></div>
<div className="flex items-center gap-sm">
<div className="text-right hidden sm:block">
<p className="font-label-md text-on-surface">Alex Thompson</p>
<p className="font-label-sm text-on-surface-variant">Pro Plan</p>
</div>
<div className="w-10 h-10 rounded-full border border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up portrait of a professional young man in a minimalist office setting, soft natural lighting, high-end corporate photography style, clean background with muted emerald accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHVSCpOCQQdIgX9mKeACAyj1So1Ho1TDhKw2Bw2AwkurJGmIJyGxewqp_pew5FfoPvdj30fPGsaNkiPpw7mA-X_NEyq4L8PCLHiR8dhf2KFbhF-QGCdSXjA36dpbrx1GCCkcVf5jGkEe2_pjsk9Q9OimwC5-3REkEicVU0nMM_K-1pJYzf5pznRdbQ-O4MwRU2MdC2duLm-PBCLnGyOfwA4wfpVytdE1Cgx_35pbfjAsFbB-AoV2eMaRZ79q0KnEWfsb0lH1Wuyq0M"/>
</div>
</div>
</div>
</header>
{/* Main Content Area */}
<main className="ml-[280px] mt-16 p-lg h-[calc(100vh-64px)] overflow-y-auto scroll-hide">
<div className="max-w-container-max mx-auto h-full flex flex-col">
{/* Breadcrumbs / Header */}
<div className="mb-xl flex justify-between items-end">
<div>
<h2 className="font-headline-lg text-on-surface">AI Workflow Monitor</h2>
<p className="font-body-md text-on-surface-variant">Tracking real-time career automation tasks for your Google Senior UI Designer application.</p>
</div>
<div className="flex gap-md">
<button className="px-lg py-md border border-outline-variant rounded-lg font-label-md hover:bg-surface-container transition-colors">
                        View Logs
                    </button>
<button className="px-lg py-md bg-on-error-container text-on-error border border-error/20 rounded-lg font-label-md hover:opacity-90 transition-opacity">
                        Stop Agent
                    </button>
</div>
</div>
{/* Main Workflow Display */}
<div className="flex-1 grid grid-cols-12 gap-lg mb-xl">
{/* Status Dashboard */}
<div className="col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-xl shadow-sm relative overflow-hidden">
{/* Subtle background decoration */}
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
<div className="flex items-center justify-between mb-2xl">
<div className="flex items-center gap-lg">
<div className="relative">
<div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center text-on-primary-container workflow-pulse">
<span className="material-symbols-outlined text-[32px]">memory</span>
</div>
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-[12px] font-bold">
                                    AI
                                </div>
</div>
<div>
<p className="font-label-sm uppercase tracking-widest text-primary font-bold">Current Phase</p>
<h3 className="font-headline-md text-on-surface">AI Career Assistant is working...</h3>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center px-lg py-sm rounded-full bg-secondary-container text-on-secondary-container font-label-sm font-bold animate-pulse">
<span className="w-2 h-2 bg-secondary rounded-full mr-sm"></span>
                                ACTIVE SESSION
                            </span>
</div>
</div>
{/* Workflow Steps - Timeline Layout */}
<div className="relative space-y-0 pl-12">
{/* Vertical Line */}
<div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-outline-variant">
<div className="h-1/2 w-full bg-primary transition-all duration-1000"></div>
</div>
{/* Step 1: Completed */}
<div className="relative pb-xl group">
<div className="absolute -left-[37px] top-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center z-10">
<span className="material-symbols-outlined text-[16px]" style={{ "fontVariationSettings": "'wght' 700" }}>check</span>
</div>
<div className="flex items-start gap-lg bg-surface p-md rounded-lg border border-outline-variant/30 hover:border-primary/30 transition-all">
<div className="flex-1">
<h4 className="font-label-md text-on-surface font-bold">Opportunity Agent</h4>
<p className="font-body-md text-on-surface-variant">Scanning job boards and company career portals for matching roles.</p>
</div>
<span className="font-label-sm text-primary">Completed</span>
</div>
</div>
{/* Step 2: Completed */}
<div className="relative pb-xl group">
<div className="absolute -left-[37px] top-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center z-10">
<span className="material-symbols-outlined text-[16px]" style={{ "fontVariationSettings": "'wght' 700" }}>check</span>
</div>
<div className="flex items-start gap-lg bg-surface p-md rounded-lg border border-outline-variant/30 hover:border-primary/30 transition-all">
<div className="flex-1">
<h4 className="font-label-md text-on-surface font-bold">JD Agent</h4>
<p className="font-body-md text-on-surface-variant">Extracting keywords, requirements, and tech stack from job description.</p>
</div>
<span className="font-label-sm text-primary">Completed</span>
</div>
</div>
{/* Step 3: Active */}
<div className="relative pb-xl group">
<div className="absolute -left-[37px] top-0 w-6 h-6 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center z-10 workflow-pulse">
<span className="w-2 h-2 bg-primary rounded-full"></span>
</div>
<div className="flex items-start gap-lg bg-surface-container p-md rounded-lg border-2 border-primary shadow-sm">
<div className="flex-1">
<div className="flex items-center gap-sm mb-xs">
<h4 className="font-label-md text-primary font-bold">Resume Agent</h4>
<div className="flex gap-1">
<div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
<div className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
<div className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
</div>
</div>
<p className="font-body-md text-on-surface">Tailoring resume points to match 'Google Cloud Platform' requirements...</p>
{/* Mini Progress Bar */}
<div className="mt-md h-1 w-full bg-outline-variant rounded-full overflow-hidden">
<div className="h-full bg-primary w-[65%] rounded-full"></div>
</div>
</div>
<span className="font-label-sm text-primary font-bold">Processing...</span>
</div>
</div>
{/* Step 4: Pending */}
<div className="relative pb-xl group">
<div className="absolute -left-[37px] top-0 w-6 h-6 bg-surface-container-high border-2 border-outline-variant rounded-full flex items-center justify-center z-10"></div>
<div className="flex items-start gap-lg opacity-50 p-md rounded-lg border border-transparent">
<div className="flex-1">
<h4 className="font-label-md text-on-surface-variant">Browser Agent</h4>
<p className="font-body-md text-on-surface-variant">Interacting with application forms and navigating portal fields.</p>
</div>
<span className="font-label-sm text-on-surface-variant">Pending</span>
</div>
</div>
{/* Step 5: Pending */}
<div className="relative pb-xl group">
<div className="absolute -left-[37px] top-0 w-6 h-6 bg-surface-container-high border-2 border-outline-variant rounded-full flex items-center justify-center z-10"></div>
<div className="flex items-start gap-lg opacity-50 p-md rounded-lg border border-transparent">
<div className="flex-1">
<h4 className="font-label-md text-on-surface-variant">Submission Agent</h4>
<p className="font-body-md text-on-surface-variant">Final validation of information and clicking 'Submit Application'.</p>
</div>
<span className="font-label-sm text-on-surface-variant">Pending</span>
</div>
</div>
{/* Step 6: Final */}
<div className="relative">
<div className="absolute -left-[37px] top-0 w-6 h-6 bg-surface-container-high border-2 border-outline-variant rounded-full flex items-center justify-center z-10">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">flag</span>
</div>
<div className="flex items-start gap-lg opacity-30 p-md rounded-lg border border-transparent">
<div className="flex-1">
<h4 className="font-label-md text-on-surface-variant">Completed</h4>
<p className="font-body-md text-on-surface-variant">Application successfully submitted. Confirmation logged.</p>
</div>
</div>
</div>
</div>
{/* Footer Info */}
<div className="mt-xl pt-lg border-t border-outline-variant flex justify-between items-center text-on-surface-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px]">info</span>
<p className="font-label-sm">This process usually takes 2-3 minutes</p>
</div>
<div className="flex items-center gap-md">
<p className="font-label-sm">Estimated completion: <span className="font-bold text-on-surface">11:42 AM</span></p>
</div>
</div>
</div>
{/* Secondary Info Cards */}
<div className="col-span-4 space-y-lg">
{/* Session Details */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
<h4 className="font-label-md font-bold text-on-surface mb-md">Session Context</h4>
<div className="space-y-md">
<div className="flex justify-between py-xs border-b border-outline-variant/30">
<span className="text-on-surface-variant text-label-sm">Job ID</span>
<span className="text-on-surface font-label-sm">REF-99231-GGL</span>
</div>
<div className="flex justify-between py-xs border-b border-outline-variant/30">
<span className="text-on-surface-variant text-label-sm">Target Firm</span>
<span className="text-on-surface font-label-sm">Google Inc.</span>
</div>
<div className="flex justify-between py-xs border-b border-outline-variant/30">
<span className="text-on-surface-variant text-label-sm">Agent Model</span>
<span className="text-on-surface font-label-sm">GPT-4-Turbo-JobExpert</span>
</div>
<div className="flex justify-between py-xs">
<span className="text-on-surface-variant text-label-sm">Data Privacy</span>
<span className="text-primary font-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" style={{ "fontVariationSettings": "'FILL' 1" }}>shield</span>
                                    Encrypted
                                </span>
</div>
</div>
</div>
{/* Visual Summary / Preview */}
<div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-lg overflow-hidden relative">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
<div className="relative z-10">
<h4 className="font-label-md font-bold mb-md">Live Preview</h4>
<div className="aspect-video bg-black/40 rounded-lg border border-white/10 flex items-center justify-center mb-md group cursor-zoom-in">
<img className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" data-alt="A cinematic, high-contrast digital rendering of a sleek computer terminal interface displaying streaming lines of emerald green code and job application metadata. The background is a dark, sophisticated carbon-fiber texture with subtle light-blue glow highlights. 8k resolution, professional tech aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdP-1za8c_NAf6z0bqLhRWCDzq-STKJRkZOg1C2JzC96T2U7xraDqd_8mzMn_Sb8ZPK-N0xbzi7uzWOoowk5IPR7Di_38JmHUVGB-zw7pVjgQdL4xe5YZLq-Jxgq0LUFTuutggycMXL1khfXZf1MQ5-2LA422pzR4xHTuCEWAaPCgmh7Wqf-etbwl49HZRqbnyCMYnsR1Q3_Q6N6PyQwN4FvyWbgX6G3LpGYWqfN1pYV-E5DlOjIuy_1dWty4ibcaZ2vfVE50ClsXW"/>
<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[48px]">fullscreen</span>
<p className="font-label-sm mt-sm">Expand Browser View</p>
</div>
</div>
<p className="font-label-sm text-inverse-on-surface/70 italic">Agent is currently modifying 'Professional Summary' section of the PDF.</p>
</div>
</div>
{/* Activity Log Mini */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex-1">
<div className="flex justify-between items-center mb-md">
<h4 className="font-label-md font-bold text-on-surface">Agent Terminal</h4>
<span className="text-[10px] bg-surface-variant px-2 py-1 rounded font-mono">LIVE</span>
</div>
<div className="font-mono text-[11px] space-y-1 h-32 overflow-y-auto scroll-hide text-on-surface-variant">
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
</main>
{/* Contextual FAB - Only for specific dashboard views, hidden here to prioritize focus as per instructions */}


    </>
  );
}
