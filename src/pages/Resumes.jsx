import React from 'react';

export default function Resumes() {
  const glassClass = "bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm";

  return (
    <div className="space-y-8 animate-fadeIn pb-8">
      {/* Page Header & Action */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">Resume Builder</h2>
          <p className="text-lg text-slate-600">Manage your professional identity and optimize for ATS algorithms.</p>
        </div>
        <div className="flex gap-3">
          <button className={`${glassClass} px-6 h-12 rounded-xl text-sm font-bold text-slate-700 hover:bg-white/90 transition-colors flex items-center gap-2`}>
            <span className="material-symbols-outlined text-[20px]">upload_file</span>
            Import PDF
          </button>
          <button className="bg-primary text-white hover:bg-primary/90 active:scale-[0.98] transition-all px-6 h-12 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create New
          </button>
        </div>
      </div>

      {/* Bento Layout Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* AI Banner (Featured Action) */}
        <div className="lg:col-span-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 h-48 md:h-40 flex items-center shadow-xl shadow-slate-900/10 group">
          {/* Decorative blur elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          
          <div className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-300 leading-tight mb-2 flex items-center justify-center md:justify-start gap-2">
                <span className="material-symbols-outlined text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                Power up with ApplyZen AI
              </h3>
              <p className="text-sm text-slate-300 max-w-md">Our intelligence engine can rewrite your bullet points for 95%+ ATS optimization in seconds.</p>
            </div>
            <button className="bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] hover:bg-emerald-400 transition-all flex items-center gap-2 text-sm shadow-lg shadow-emerald-500/20 whitespace-nowrap border border-emerald-400/50">
              Launch AI Optimizer
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className={`${glassClass} p-6 rounded-2xl relative overflow-hidden group`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 relative z-10">Market Readiness</h4>
            <div className="flex items-end gap-2 mb-2 relative z-10">
              <span className="text-5xl font-extrabold text-slate-900 leading-none">88</span>
              <span className="text-lg font-bold text-emerald-600 pb-1">/100</span>
            </div>
            <p className="text-sm text-slate-600 mb-6 font-medium relative z-10">Your profile is performing better than 74% of peers in Product Management.</p>
            
            <div className="space-y-5 relative z-10">
              <div>
                <div className="flex justify-between items-center text-sm mb-1.5 font-bold">
                  <span className="text-slate-700">Keywords</span>
                  <span className="text-emerald-600">Strong</span>
                </div>
                <div className="w-full bg-slate-200/50 h-2 rounded-full overflow-hidden border border-slate-200/50">
                  <div className="bg-emerald-500 h-full w-[85%] rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center text-sm mb-1.5 font-bold">
                  <span className="text-slate-700">Formatting</span>
                  <span className="text-emerald-600">Perfect</span>
                </div>
                <div className="w-full bg-slate-200/50 h-2 rounded-full overflow-hidden border border-slate-200/50">
                  <div className="bg-emerald-500 h-full w-[98%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${glassClass} p-6 rounded-2xl`}>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Upcoming Deadlines</h4>
              <span className="material-symbols-outlined text-slate-400 text-[20px] cursor-pointer hover:text-slate-700">more_horiz</span>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-4 items-center group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-white/60">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-50 border border-slate-200 group-hover:border-indigo-100 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-indigo-600 text-[20px]">event</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight mb-0.5">Stripe - Senior PM</p>
                  <p className="text-xs text-orange-600 font-bold">Application due tomorrow</p>
                </div>
              </li>
              <li className="flex gap-4 items-center group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-white/60">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-50 border border-slate-200 group-hover:border-blue-100 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-blue-600 text-[20px]">event</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight mb-0.5">Linear - Product Design</p>
                  <p className="text-xs text-slate-500 font-medium">Closes in 3 days</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Resumes Grid */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6 border-b border-slate-200/60 pb-2">
            <div className="flex gap-6">
              <button className="text-sm font-bold text-primary border-b-2 border-primary pb-2 -mb-[9px]">All Documents</button>
              <button className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors pb-2">Resumes</button>
              <button className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors pb-2">Cover Letters</button>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="material-symbols-outlined cursor-pointer text-slate-800 text-[20px]">grid_view</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-slate-800 transition-colors text-[20px]">list</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Resume Card 1 */}
            <div className={`${glassClass} rounded-2xl group flex flex-col p-2 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer`}>
              <div className="aspect-[3/4] bg-slate-100/50 rounded-xl relative p-4 group-hover:bg-slate-100 transition-colors overflow-hidden border border-slate-200/50">
                <div className="w-full h-full bg-white shadow-sm border border-slate-200 overflow-hidden rounded-lg p-4 flex flex-col gap-2">
                  <div className="w-1/2 h-2.5 bg-slate-200 rounded"></div>
                  <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                  <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                  <div className="mt-4 flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
                    <div className="flex-1 space-y-1.5 pt-1">
                      <div className="w-1/2 h-2 bg-slate-200 rounded"></div>
                      <div className="w-3/4 h-1.5 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                    <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                    <div className="w-3/4 h-1.5 bg-slate-100 rounded"></div>
                  </div>
                  <div className="mt-auto flex justify-between">
                    <div className="w-12 h-1.5 bg-slate-200 rounded"></div>
                    <div className="w-12 h-1.5 bg-slate-200 rounded"></div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/5 backdrop-blur-[2px]">
                  <button className="bg-white text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                    Edit Document
                  </button>
                </div>
                
                {/* Score Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md text-[10px] font-black tracking-wider uppercase border border-emerald-200 shadow-sm">
                    ATS: 94
                  </div>
                </div>
              </div>
              
              <div className="px-3 py-4 flex items-center justify-between bg-transparent">
                <div>
                  <h5 className="text-sm font-bold text-slate-900">Product_Manager_Stripe_v2</h5>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Modified 2 hours ago</p>
                </div>
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">more_vert</span>
                </button>
              </div>
            </div>

            {/* Resume Card 2 */}
            <div className={`${glassClass} rounded-2xl group flex flex-col p-2 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer`}>
              <div className="aspect-[3/4] bg-slate-100/50 rounded-xl relative p-4 group-hover:bg-slate-100 transition-colors overflow-hidden border border-slate-200/50">
                <div className="w-full h-full bg-white shadow-sm border border-slate-200 overflow-hidden rounded-lg p-4 flex flex-col gap-2">
                  <div className="w-2/3 h-2.5 bg-slate-200 rounded"></div>
                  <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                  <div className="mt-4 space-y-2">
                    <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                    <div className="w-5/6 h-1.5 bg-slate-100 rounded"></div>
                    <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/5 backdrop-blur-[2px]">
                  <button className="bg-white text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                    Edit Document
                  </button>
                </div>
                
                {/* Score Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md text-[10px] font-black tracking-wider uppercase border border-orange-200 shadow-sm">
                    ATS: 71
                  </div>
                </div>
              </div>
              
              <div className="px-3 py-4 flex items-center justify-between bg-transparent">
                <div>
                  <h5 className="text-sm font-bold text-slate-900">Generic_PM_Master</h5>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Modified Sep 12, 2023</p>
                </div>
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">more_vert</span>
                </button>
              </div>
            </div>

            {/* Add New Empty State Card */}
            <div className="border-dashed border-2 border-slate-300 bg-white/40 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-8 gap-4 hover:bg-white/60 hover:border-primary/50 transition-all cursor-pointer group min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-[32px] transition-colors">add_circle</span>
              </div>
              <div className="text-center">
                <h5 className="text-sm font-bold text-slate-900 mb-1">New Resume</h5>
                <p className="text-xs text-slate-500 font-medium">Start from a template or use AI</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
