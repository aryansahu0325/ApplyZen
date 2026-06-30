
import React from 'react';

export default function Opportunities() {
  return (
    <div className="animate-fadeIn">
      
{/* Header */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
<div>
<h2 className="text-2xl font-bold text-slate-900">Opportunities</h2>
<p className="text-slate-500 text-sm mt-1">Discover and manage career opportunities detected by AI from your synced streams.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all">
<span className="material-symbols-outlined text-[18px]">sync</span> Gmail
            </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all">
<span className="material-symbols-outlined text-[18px]">sync</span> Outlook
            </button>
<button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-600-hover transition-all shadow-sm shadow-emerald-500/20">
<span className="material-symbols-outlined text-[18px]">refresh</span> Refresh
            </button>
</div>
</div>
{/* Summary Stats */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<div className="flex justify-between items-center mb-4">
<span className="material-symbols-outlined text-emerald-600 bg-emerald-50 p-2 rounded-lg">work</span>
<span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12 new</span>
</div>
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Total Opportunities</p>
<h3 className="text-3xl font-bold mt-1 text-slate-900">142</h3>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<div className="flex justify-between items-center mb-4">
<span className="material-symbols-outlined text-red-500 bg-red-50 p-2 rounded-lg">alarm</span>
<span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full">Urgent</span>
</div>
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Approaching Deadlines</p>
<h3 className="text-3xl font-bold mt-1 text-slate-900">08</h3>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<div className="flex justify-between items-center mb-4">
<span className="material-symbols-outlined text-gray-600 bg-gray-100 p-2 rounded-lg">send</span>
<span className="text-xs font-bold text-gray-600 bg-gray-50 px-2 py-1 rounded-full">In Progress</span>
</div>
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Applied</p>
<h3 className="text-3xl font-bold mt-1 text-slate-900">24</h3>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<div className="flex justify-between items-center mb-4">
<span className="material-symbols-outlined text-emerald-600 bg-emerald-50 p-2 rounded-lg">auto_awesome</span>
<span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">90%+ Match</span>
</div>
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">High AI Match</p>
<h3 className="text-3xl font-bold mt-1 text-slate-900">15</h3>
</div>
</div>
{/* Filter Bar */}
<div className="bg-white border border-slate-200 p-3 rounded-lg shadow-sm mb-6 flex flex-wrap gap-4 items-center">
<div className="flex-1 min-w-[200px] relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]">search</span>
<input className="w-full bg-slate-50 border-none rounded-lg pl-10 pr-4 py-2 text-sm" placeholder="Search company or role..." type="text" />
</div>
<div className="flex gap-2">
<select className="bg-white border border-slate-200 rounded-lg text-sm px-4 py-2 focus:ring-primary/20">
<option>Type: All</option>
<option>Job</option>
<option>Internship</option>
</select>
<select className="bg-white border border-slate-200 rounded-lg text-sm px-4 py-2 focus:ring-primary/20">
<option>AI Match: 70%+</option>
<option>80%+</option>
<option>90%+</option>
</select>
<select className="bg-white border border-slate-200 rounded-lg text-sm px-4 py-2 focus:ring-primary/20">
<option>Status: All</option>
<option>New</option>
<option>Analyzed</option>
</select>
</div>
<div className="h-8 w-[1px] bg-slate-200 mx-2 hidden lg:block"></div>
<button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 border border-slate-200 rounded-lg transition-all text-sm font-medium">
<span className="material-symbols-outlined text-[18px]">sort</span> Sort
        </button>
</div>
<div className="flex gap-6 items-start">
{/* Opportunity Grid */}
<div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-6">
{/* Opportunity Card 1 */}
<div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group cursor-pointer relative overflow-hidden" style={{"transform":"translateY(0px)"}}>
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex gap-6">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden">
<img className="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLvzLbIyFu8PtSrj8nIDNi-ln9pFHpJgM0Rr3Iz_DwvXnu_RfthZA0B1HP-hVfPj3zs_l9FyOUz1vBvI4uN7AbiKkBGzOo823WvYXa3Hbw-mu2fWfUbeDtm6mGerLDjdcdqXx3TYe6a-bL2LWO2f4ahWYMcYBdQoM6qHdXA6wW3Pn_s4FLpxCxheKgwssEORy4D1T2JkWL8Lp7Y2mn2oDNKl7fJSXm4dbprHlzmZZIiEuf9iYZ2V31ujMIKv" alt="Aether Labs Logo" />
</div>
<div>
<h4 className="font-bold text-lg text-slate-900">Senior Product Designer</h4>
<p className="text-slate-500 text-sm">Veridian AI • Remote</p>
</div>
</div>
<div className="relative w-12 h-12">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<circle className="text-outline" cx="18" cy="18" fill="none" r="16" stroke="currentColor" strokeWidth="3"></circle>
<circle className="text-emerald-600" cx="18" cy="18" fill="none" r="16" stroke="currentColor" strokeDasharray="94, 100" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-[10px] font-bold text-emerald-600">94%</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-slate-50 text-slate-500 text-[11px] font-semibold rounded-md">Figma</span>
<span className="px-2 py-1 bg-slate-50 text-slate-500 text-[11px] font-semibold rounded-md">SaaS</span>
<span className="px-2 py-1 bg-slate-50 text-slate-500 text-[11px] font-semibold rounded-md">AI Ethics</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6 text-[13px]">
<div className="flex items-center gap-2 text-slate-500">
<span className="material-symbols-outlined text-[18px]">currency_exchange</span>
<span className="">$140k - $180k</span>
</div>
<div className="flex items-center gap-2 text-red-500 font-medium">
<span className="material-symbols-outlined text-[18px]">event</span>
<span className="">Oct 12</span>
</div>
<div className="flex items-center gap-2 text-slate-500">
<span className="material-symbols-outlined text-[18px]">source</span>
<span className="">LinkedIn</span>
</div>
<div className="flex items-center gap-2 text-emerald-600 font-bold">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="">Ready</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-slate-50 text-slate-900 text-sm font-semibold hover:bg-slate-200 transition-all">View JD</button>
<button className="flex-1 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-600-hover transition-all">Apply Now</button>
</div>
</div>
{/* Opportunity Card 2 */}
<div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group cursor-pointer relative overflow-hidden" style={{"transform":"translateY(0px)"}}>
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex gap-6">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden">
<img className="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLtSUwH07h4GpXC75Ixdj0mwSI4JYx9yXrSbwHYkQ_4jL-8G7Z112Bam5ZbfcyuUanEUvB7seigJowueXR39qZXM7ac5LHWfGSCwFYSAXJSIWfCNdsmQhora8pfQyGYTlDf3nPhDYszI6eRrdLtW4NFKfkcEESkeLvznBLWSmM-u0YGaIN91wbGxAVsoYvQASrhyGQci6_mNb40R1eRMhS9qFnRbTUvNbLNBsnjYfDfWER6y1T-o--QYmr6I" alt="Prisma Labs Logo" />
</div>
<div>
<h4 className="font-bold text-lg text-slate-900">Lead Frontend Architect</h4>
<p className="text-slate-500 text-sm">Loomis Financial • NYC / Hybrid</p>
</div>
</div>
<div className="relative w-12 h-12">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<circle className="text-outline" cx="18" cy="18" fill="none" r="16" stroke="currentColor" strokeWidth="3"></circle>
<circle className="text-emerald-600" cx="18" cy="18" fill="none" r="16" stroke="currentColor" strokeDasharray="87, 100" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-[10px] font-bold text-emerald-600">87%</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-slate-50 text-slate-500 text-[11px] font-semibold rounded-md">React</span>
<span className="px-2 py-1 bg-slate-50 text-slate-500 text-[11px] font-semibold rounded-md">TypeScript</span>
<span className="px-2 py-1 bg-slate-50 text-slate-500 text-[11px] font-semibold rounded-md">Next.js</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6 text-[13px]">
<div className="flex items-center gap-2 text-slate-500">
<span className="material-symbols-outlined text-[18px]">currency_exchange</span>
<span className="">$190k - $240k</span>
</div>
<div className="flex items-center gap-2 text-slate-500 font-medium">
<span className="material-symbols-outlined text-[18px]">event</span>
<span className="">Oct 28</span>
</div>
<div className="flex items-center gap-2 text-slate-500">
<span className="material-symbols-outlined text-[18px]">source</span>
<span className="">Gmail Sync</span>
</div>
<div className="flex items-center gap-2 text-gray-600 font-bold">
<span className="material-symbols-outlined text-[18px]">analytics</span>
<span className="">Analyzed</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-slate-50 text-slate-900 text-sm font-semibold hover:bg-slate-200 transition-all">View JD</button>
<button className="flex-1 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-600-hover transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">bolt</span> Resume
                    </button>
</div>
</div>
</div>
{/* Right Analysis Panel */}
<aside className="hidden lg:block w-80 bg-white border border-slate-200 rounded-lg shadow-sm p-6 sticky top-[88px]">
<div className="flex justify-between items-center mb-6">
<h3 className="font-bold text-slate-900">Match Analysis</h3>
<span className="bg-emerald-600/10 text-emerald-600 text-[10px] font-black px-2 py-0.5 rounded-md">AI CORE V4.2</span>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between items-center mb-2">
<p className="text-xs font-bold text-slate-500 uppercase tracking-wide">ATS Compatibility</p>
<span className="text-emerald-600 font-bold">98%</span>
</div>
<div className="w-full bg-slate-50 h-2 rounded-full overflow-hidden">
<div className="bg-emerald-600 h-full w-[98%] rounded-full"></div>
</div>
</div>
<div className="space-y-4">
<p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Key Indicators</p>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
<div>
<p className="text-sm font-bold text-slate-900">Strong Skill Overlap</p>
<p className="text-xs text-slate-500 mt-0.5">Proficiency in Design Systems matches 100% of core JD.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-amber-500 text-[20px]">warning</span>
<div>
<p className="text-sm font-bold text-slate-900">Domain Gap</p>
<p className="text-xs text-slate-500 mt-0.5">Fintech experience is not prominent in resume.</p>
</div>
</div>
</div>
<div className="space-y-2">
<p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Critical Keywords</p>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-md border border-emerald-100">STAKEHOLDER MGMT</span>
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-md border border-emerald-100">SAAS DESIGN</span>
<span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold rounded-md border border-red-100">LEDGER SYSTEMS</span>
</div>
</div>
<div className="pt-6 border-t border-slate-200">
<p className="text-xs text-center text-slate-500 mb-4">Estimated completion: <strong>4 mins</strong></p>
<button className="w-full py-2.5 bg-slate-900 text-white rounded-lg text-sm font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">auto_fix_high</span> Optimize All
                    </button>
</div>
</div>
</aside>
</div>
{/* Timeline Section */}
<section className="mt-12 bg-white border border-slate-200 rounded-lg p-8 shadow-sm mb-8">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-bold text-slate-900">Opportunity Lifecycle</h3>
<span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full border border-primary/20">Tracking 142 Items</span>
</div>
<div className="relative px-4 py-4">
{/* Timeline Track */}
<div className="absolute top-1/2 left-0 w-full h-1 bg-slate-50 -translate-y-1/2 rounded-full"></div>
<div className="absolute top-1/2 left-0 w-2/3 h-1 bg-emerald-600 -translate-y-1/2 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.3)]"></div>
<div className="flex justify-between relative z-10">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md ring-4 ring-white">
<span className="material-symbols-outlined text-[20px]">search_check</span>
</div>
<div className="text-center">
<p className="font-bold text-xs">Detected</p>
<p className="text-[10px] text-slate-500">Via Sync</p>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md ring-4 ring-white">
<span className="material-symbols-outlined text-[20px]">psychology</span>
</div>
<div className="text-center">
<p className="font-bold text-xs">Analyzed</p>
<p className="text-[10px] text-slate-500">Match Ready</p>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg ring-4 ring-white">
<span className="material-symbols-outlined text-[20px]">task_alt</span>
</div>
<div className="text-center">
<p className="font-bold text-xs text-emerald-600">Ready</p>
<p className="text-[10px] text-slate-500">Verified</p>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center shadow-sm ring-4 ring-white">
<span className="material-symbols-outlined text-[20px]">hourglass_empty</span>
</div>
<div className="text-center">
<p className="font-bold text-xs text-slate-500">Waiting</p>
<p className="text-[10px] text-slate-500">Response</p>
</div>
</div>
</div>
</div>
</section>

    </div>
  );
}
