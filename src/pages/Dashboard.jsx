import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  const firstName = user?.fullName ? user.fullName.split(' ')[0] : 'Aryan';

  const glassClass = "bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm";

  return (
    <div className="space-y-8 animate-fadeIn pb-8">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Good morning, {firstName}! 👋</h2>
          <p className="text-lg text-slate-600">Here's what's happening with your career journey today.</p>
        </div>
        <button className="bg-primary text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
          <span className="material-symbols-outlined">add</span>
          Add Opportunity
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1 */}
        <div className={`${glassClass} p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full blur-2xl -mr-8 -mt-8 opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 relative z-10 border border-indigo-100">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>work</span>
          </div>
          <div className="relative z-10">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Total Opportunities</p>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-1">128</h3>
            <div className="flex items-center text-emerald-600 text-xs font-bold gap-1 mt-2">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +12 this week
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`${glassClass} p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl -mr-8 -mt-8 opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 relative z-10 border border-blue-100">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>send</span>
          </div>
          <div className="relative z-10">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Applications Submitted</p>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-1">56</h3>
            <div className="flex items-center text-emerald-600 text-xs font-bold gap-1 mt-2">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +8 this week
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={`${glassClass} p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full blur-2xl -mr-8 -mt-8 opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 relative z-10 border border-emerald-100">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>event</span>
          </div>
          <div className="relative z-10">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Interviews</p>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-1">12</h3>
            <div className="flex items-center text-emerald-600 text-xs font-bold gap-1 mt-2">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +3 this week
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className={`${glassClass} p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full blur-2xl -mr-8 -mt-8 opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 relative z-10 border border-orange-100">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>military_tech</span>
          </div>
          <div className="relative z-10">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Offers</p>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-1">3</h3>
            <div className="bg-orange-100 text-orange-700 text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full inline-block mt-2">
              🎉 Congrats!
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className={`${glassClass} p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-full blur-2xl -mr-8 -mt-8 opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center text-rose-600 relative z-10 border border-rose-100">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>cancel</span>
          </div>
          <div className="relative z-10">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Rejections</p>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-1">7</h3>
            <p className="text-xs text-slate-500 mt-2 font-medium">This month</p>
          </div>
        </div>
      </div>

      {/* Main Stitch Design Grid */}
      <div className="grid grid-cols-12 gap-6 items-start">
        
        {/* Left Column (Wide) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* Application Overview Chart Card */}
          <div className={`${glassClass} rounded-2xl relative overflow-hidden h-[340px] p-6`}>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-bold text-slate-900">Application Overview</h4>
              <select className="bg-white/50 border border-slate-200 text-xs font-bold rounded-lg py-1.5 px-3 outline-none focus:ring-1 focus:ring-primary text-slate-700">
                <option>This Month</option>
                <option>Last Quarter</option>
              </select>
            </div>
            
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                <span className="text-xs font-bold text-slate-500">Applications</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span className="text-xs font-bold text-slate-500">Interviews</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold text-slate-500">Offers</span>
              </div>
            </div>

            {/* SVG line chart matching Stitch */}
            <div className="w-full h-48 relative mt-4">
              <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                <g stroke="#e5e7eb" strokeWidth="1">
                  <line x1="0" x2="800" y1="0" y2="0" />
                  <line x1="0" x2="800" y1="50" y2="50" />
                  <line x1="0" x2="800" y1="100" y2="100" />
                  <line x1="0" x2="800" y1="150" y2="150" />
                </g>
                <path d="M0,180 L100,160 L200,130 L300,140 L400,110 L500,90 L600,60 L700,40 L800,30" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="3" />
                <circle cx="400" cy="110" fill="#6366f1" r="4" />
                <path d="M0,190 L100,180 L200,170 L300,165 L400,150 L500,140 L600,120 L700,115 L800,110" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeWidth="3" />
                <path d="M0,195 L100,195 L200,190 L300,192 L400,185 L500,188 L600,180 L700,175 L800,170" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="3" />
              </svg>
              <div className="flex justify-between mt-2 text-xs font-bold text-slate-400 px-2">
                <span>May 1</span><span>May 8</span><span>May 15</span><span>May 22</span><span>May 29</span><span>Jun 1</span>
              </div>
            </div>
          </div>

          {/* Top Opportunities */}
          <div className={`${glassClass} rounded-2xl p-6`}>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-bold text-slate-900">Top Opportunities</h4>
              <Link className="text-primary text-sm font-bold hover:underline" to="/opportunities">View All</Link>
            </div>
            
            <div className="space-y-3">
              {/* Job 1 */}
              <div className="flex items-center justify-between p-3 border border-slate-200/60 rounded-xl hover:bg-slate-50/50 bg-white/40 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center p-1 shadow-sm">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6g8AVFT2-mysUZu3PRrxNNWj5zxnf6bh6rr-zF9DzDg23-I-ygsUgcGTMBuupHod7tMYZUnUAEmoUakx-8GDTZuD-evZRx2o9FV2QnqlDpq64WUlK6JV5inNyvEufxmO-RUKvPLiWRpaBfnfS8f4kXuzmRP1mxML33B9KQrz5kK9NnmMuBh5WKmKAvbAlodNpSuZAUpMLDFmSm-bCBIf-lsKSw3A7ms1CUBeISDvbUKGe6PIG5qX2SkR7WfrrmXBkT4cmcdK8kac7")` }}></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Software Engineering Intern</p>
                    <p className="text-xs text-slate-500 font-medium">Google • Remote</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100 hidden sm:block">95% Match</span>
                  <button className="text-primary font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">Apply <span className="material-symbols-outlined text-[16px] ml-1">open_in_new</span></button>
                </div>
              </div>

              {/* Job 2 */}
              <div className="flex items-center justify-between p-3 border border-slate-200/60 rounded-xl hover:bg-slate-50/50 bg-white/40 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center p-1 shadow-sm">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlG1GTFgg1uHxvP6kLY6PtDOgq_vcjjJGJ2r4AzqNvbdGtctj8gJ2QSqZ9nQux2yWSS6HlQVNyl3CJnqDmzw-P5pxFg8mEpWJNCz-oeue4LMeWMvfwx2LkDKxxek1gty_AKpM57fGm2ihWDM8T6L2fN-BjMCXf0DdFjtDRwagD7-WlSlmeGx3jZAEtrx3KTWfx-WrjFEwu9yBISt6cuoKo0pW5DOxmg6R0lBfDgsAlvZBAHwMOsQSAKRMaUX7_mz1ROOPf6By1c6Rs")` }}></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">SDE Intern</p>
                    <p className="text-xs text-slate-500 font-medium">Microsoft • India</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100 hidden sm:block">90% Match</span>
                  <button className="text-primary font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">Apply <span className="material-symbols-outlined text-[16px] ml-1">open_in_new</span></button>
                </div>
              </div>

              {/* Job 3 (Amazon) */}
              <div className="flex items-center justify-between p-3 border border-slate-200/60 rounded-xl hover:bg-slate-50/50 bg-white/40 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center p-1 shadow-sm">
                    <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHVSCpOCQQdIgX9mKeACAyj1So1Ho1TDhKw2Bw2AwkurJGmIJyGxewqp_pew5FfoPvdj30fPGsaNkiPpw7mA-X_NEyq4L8PCLHiR8dhf2KFbhF-QGCdSXjA36dpbrx1GCCkcVf5jGkEe2_pjsk9Q9OimwC5-3REkEicVU0nMM_K-1pJYzf5pznRdbQ-O4MwRU2MdC2duLm-PBCLnGyOfwA4wfpVytdE1Cgx_35pbfjAsFbB-AoV2eMaRZ79q0KnEWfsb0lH1Wuyq0M")` }}></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Frontend Developer Intern</p>
                    <p className="text-xs text-slate-500 font-medium">Amazon • Bengaluru</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100 hidden sm:block">88% Match</span>
                  <button className="text-primary font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">Apply <span className="material-symbols-outlined text-[16px] ml-1">open_in_new</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Narrow) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* AI Career Assistant */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-sm bg-gradient-to-br from-emerald-50/90 to-teal-50/90 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-emerald-600 text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
              <h4 className="text-xl font-bold text-slate-900">AI Assistant</h4>
            </div>
            
            <div className="bg-white/80 p-3 rounded-xl mb-4 border border-white/50 shadow-sm text-sm font-medium text-slate-700 leading-relaxed">
              Hi {firstName}! 👋 I found <span className="font-bold text-emerald-600">5 new jobs</span> for you.
            </div>
            
            <button className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl mb-4 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20 text-sm">
              Review Now
            </button>
            
            <div className="space-y-2">
              <button className="w-full flex justify-between items-center bg-white/80 p-2.5 px-4 rounded-lg border border-white hover:border-emerald-400 group transition-all">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[18px]">psychology</span>
                  <span className="text-xs font-bold text-slate-700">Optimize Resume</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform text-[18px]">chevron_right</span>
              </button>
              <button className="w-full flex justify-between items-center bg-white/80 p-2.5 px-4 rounded-lg border border-white hover:border-emerald-400 group transition-all">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[18px]">edit_note</span>
                  <span className="text-xs font-bold text-slate-700">Cover Letter</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Recent Activities Timeline */}
          <div className={`${glassClass} rounded-2xl p-6`}>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-bold text-slate-900">Recent Activities</h4>
              <Link className="text-primary text-sm font-bold hover:underline" to="/history">View All</Link>
            </div>
            
            <div className="relative space-y-6 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
              
              {/* Activity 1 */}
              <div className="flex gap-4 relative">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center z-10 shrink-0 border border-emerald-200">
                  <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold text-slate-900 leading-tight">Applied to Google</p>
                    <span className="text-[10px] text-slate-500 font-bold">2h ago</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Software Engineering Intern</p>
                </div>
              </div>
              
              {/* Activity 2 */}
              <div className="flex gap-4 relative">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center z-10 shrink-0 border border-blue-200">
                  <span className="material-symbols-outlined text-blue-600 text-[16px]">calendar_today</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold text-slate-900 leading-tight">Interview: Microsoft</p>
                    <span className="text-[10px] text-slate-500 font-bold">5h ago</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">SDE Intern - Round 1</p>
                </div>
              </div>
              
              {/* Activity 3 */}
              <div className="flex gap-4 relative">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center z-10 shrink-0 border border-indigo-200">
                  <span className="material-symbols-outlined text-indigo-600 text-[16px]">description</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold text-slate-900 leading-tight">Resume Optimized</p>
                    <span className="text-[10px] text-slate-500 font-bold">1d ago</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">ATS Score improved: 72 → 92</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-12 gap-6 items-stretch">
        
        {/* Application Status (Donut Chart) */}
        <div className={`col-span-12 lg:col-span-6 ${glassClass} rounded-2xl p-6 flex flex-col`}>
          <div className="mb-6">
            <h4 className="text-xl font-bold text-slate-900">Application Status</h4>
          </div>
          
          <div className="flex flex-row items-center justify-around flex-1 gap-4">
            <div className="relative w-32 h-32 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#6366f1" strokeWidth="14" strokeDasharray="225.57 314.16" strokeDashoffset="0" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#3b82f6" strokeWidth="14" strokeDasharray="48.38 314.16" strokeDashoffset="-225.57" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#10b981" strokeWidth="14" strokeDasharray="11.94 314.16" strokeDashoffset="-273.95" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#ff4c4c" strokeWidth="14" strokeDasharray="28.27 314.16" strokeDashoffset="-285.89" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-slate-900 leading-none">78</span>
                <span className="text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-wide">Total</span>
              </div>
            </div>

            <div className="flex-1 space-y-3 min-w-0">
              <div className="flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0"></span>
                  <span className="text-slate-600 truncate">Submitted</span>
                </div>
                <span className="text-slate-900 font-bold shrink-0 ml-2">56 (71.8%)</span>
              </div>
              
              <div className="flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0"></span>
                  <span className="text-slate-600 truncate">Interview</span>
                </div>
                <span className="text-slate-900 font-bold shrink-0 ml-2">12 (15.4%)</span>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span className="text-slate-600 truncate">Offer</span>
                </div>
                <span className="text-slate-900 font-bold shrink-0 ml-2">3 (3.8%)</span>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0"></span>
                  <span className="text-slate-600 truncate">Rejected</span>
                </div>
                <span className="text-slate-900 font-bold shrink-0 ml-2">7 (9.0%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connected Accounts & Automation Mode */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-between gap-6">
          {/* Connected Accounts */}
          <div className={`${glassClass} rounded-2xl p-6 flex-1 flex flex-col justify-between`}>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-slate-900">Connected Accounts</h4>
                <Link className="text-primary text-sm font-bold hover:underline" to="/settings">Manage</Link>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#db4437] text-[24px]">mail</span>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-tight">Gmail</p>
                      <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Connected
                      </p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-500 hover:bg-white/50 bg-white/40 transition-colors">Disconnect</button>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#0078d4] text-[24px]">contact_mail</span>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-tight">Outlook</p>
                      <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Connected
                      </p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-500 hover:bg-white/50 bg-white/40 transition-colors">Disconnect</button>
                </div>
              </div>
            </div>
          </div>

          {/* Automation Mode */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-row items-center justify-between relative overflow-hidden h-28 shrink-0 group hover:border-primary/50 transition-colors cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl -mr-16 -mt-16 opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="space-y-1 min-w-0 pr-4 relative z-10">
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-white">Automation Mode</h4>
                <span className="bg-primary/20 text-primary text-[10px] font-black uppercase px-2 py-0.5 rounded border border-primary/30 shrink-0">Auto Apply</span>
              </div>
              <p className="text-xs text-slate-400 font-medium mt-2 leading-relaxed">You're all set! ApplyZen is working for you 24/7.</p>
            </div>
            
            <div className="w-12 h-12 shrink-0 relative z-10 flex items-center justify-center bg-white/10 rounded-full">
              <span className="material-symbols-outlined text-white text-[28px]" style={{ fontVariationSettings: '"FILL" 1' }}>smart_toy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
