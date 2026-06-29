import React, { useEffect, useState } from 'react';

export default function Analytics() {
  const glassClass = "bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm";
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations slightly after mount for visual effect
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8 animate-fadeIn pb-8">
      
      {/* Page Header & Interactive Filters Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">Analytics</h2>
          <p className="text-lg text-slate-600">Understand your performance and market fit.</p>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-3 w-full sm:w-auto">
            <select className={`${glassClass} rounded-xl text-sm font-bold text-slate-700 px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer min-w-[160px] appearance-none bg-no-repeat`} style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundPosition: 'right 1rem center', backgroundSize: '0.65em auto' }}>
              <option>This Month</option>
              <option defaultValue>Last 3 Months</option>
              <option>Year to Date</option>
              <option>All Time</option>
            </select>
            <select className={`${glassClass} rounded-xl text-sm font-bold text-slate-700 px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer min-w-[160px] appearance-none bg-no-repeat`} style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundPosition: 'right 1rem center', backgroundSize: '0.65em auto' }}>
              <option>All Role Types</option>
              <option>Full-time</option>
              <option>Contract</option>
              <option>Remote</option>
            </select>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Last updated: <span className="font-bold text-slate-700">Today, 09:42 AM</span>
          </div>
        </div>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Metric 1 */}
        <div className={`${glassClass} p-6 rounded-2xl hover:border-primary/30 hover:shadow-md transition-all group cursor-default relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center justify-between mb-2 relative z-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Avg ATS Score</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
              <span className="material-symbols-outlined text-[18px]">analytics</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1 relative z-10">
            <span className="text-4xl font-extrabold text-slate-900">84</span>
            <span className="text-sm font-bold text-emerald-600">/ 100</span>
          </div>
          <div className="mt-4 flex items-center text-emerald-600 gap-1 relative z-10">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span className="text-xs font-bold">+12% vs last period</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className={`${glassClass} p-6 rounded-2xl hover:border-blue-500/30 hover:shadow-md transition-all group cursor-default relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center justify-between mb-2 relative z-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Interview Rate</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
              <span className="material-symbols-outlined text-[18px]">groups</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1 relative z-10">
            <span className="text-4xl font-extrabold text-slate-900">18.5</span>
            <span className="text-sm font-bold text-blue-600">%</span>
          </div>
          <div className="mt-4 flex items-center text-emerald-600 gap-1 relative z-10">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span className="text-xs font-bold">+2.4% vs last period</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className={`${glassClass} p-6 rounded-2xl hover:border-indigo-500/30 hover:shadow-md transition-all group cursor-default relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center justify-between mb-2 relative z-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Applications Sent</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>send</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1 relative z-10">
            <span className="text-4xl font-extrabold text-slate-900">42</span>
            <span className="text-sm font-bold text-slate-500">this month</span>
          </div>
          <div className="mt-4 flex items-center text-orange-600 gap-1 relative z-10">
            <span className="material-symbols-outlined text-[16px]">trending_down</span>
            <span className="text-xs font-bold">-5% vs last month</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className={`${glassClass} p-6 rounded-2xl hover:border-purple-500/30 hover:shadow-md transition-all group cursor-default relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center justify-between mb-2 relative z-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Time-to-Offer</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1 relative z-10">
            <span className="text-4xl font-extrabold text-slate-900">34</span>
            <span className="text-sm font-bold text-slate-500">Avg Days</span>
          </div>
          <div className="mt-4 flex items-center text-slate-400 gap-1 relative z-10">
            <span className="material-symbols-outlined text-[16px]">horizontal_rule</span>
            <span className="text-xs font-bold">Stable performance</span>
          </div>
        </div>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Application Success Funnel */}
        <div className={`lg:col-span-2 ${glassClass} p-6 rounded-2xl flex flex-col`}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-900">Application Success Funnel</h3>
            <button className="text-slate-400 hover:text-slate-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">more_vert</span>
            </button>
          </div>
          
          <div className="flex flex-col h-[300px] justify-end space-y-4 flex-1">
            <div className="flex items-end gap-2 sm:gap-6 h-full px-2 sm:px-6">
              
              <div className="flex-1 flex flex-col items-center group">
                <div className="w-full bg-slate-200 rounded-t-xl relative border border-slate-300 transition-all duration-1000 ease-out" style={{ height: animate ? '100%' : '0%' }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-extrabold text-slate-700">156</div>
                </div>
                <span className="text-xs sm:text-sm mt-3 font-bold text-slate-500">Applied</span>
              </div>
              
              <div className="flex-1 flex flex-col items-center group">
                <div className="w-full bg-indigo-200 rounded-t-xl relative border border-indigo-300 transition-all duration-1000 ease-out delay-100" style={{ height: animate ? '65%' : '0%' }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-extrabold text-indigo-700">102</div>
                </div>
                <span className="text-xs sm:text-sm mt-3 font-bold text-slate-500">Screened</span>
              </div>
              
              <div className="flex-1 flex flex-col items-center group">
                <div className="w-full bg-emerald-200 rounded-t-xl relative border border-emerald-300 transition-all duration-1000 ease-out delay-200" style={{ height: animate ? '28%' : '0%' }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-extrabold text-emerald-700">29</div>
                </div>
                <span className="text-xs sm:text-sm mt-3 font-bold text-slate-500">Interview</span>
              </div>
              
              <div className="flex-1 flex flex-col items-center group">
                <div className="w-full bg-primary rounded-t-xl relative border border-primary/80 shadow-[0_-4px_15px_rgba(16,185,129,0.3)] transition-all duration-1000 ease-out delay-300" style={{ height: animate ? '8%' : '0%' }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-extrabold text-primary">4</div>
                </div>
                <span className="text-xs sm:text-sm mt-3 font-bold text-slate-500">Offers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Rate by Platform */}
        <div className={`${glassClass} p-6 rounded-2xl flex flex-col justify-between`}>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Platform Performance</h3>
            <div className="space-y-6">
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-slate-700">LinkedIn</span>
                  <span className="text-sm font-black text-slate-900">24%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
                  <div className="bg-[#0077b5] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: animate ? '24%' : '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-slate-700">Glassdoor</span>
                  <span className="text-sm font-black text-slate-900">12%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
                  <div className="bg-[#0caa41] h-full rounded-full transition-all duration-1000 ease-out delay-100" style={{ width: animate ? '12%' : '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-slate-700">Direct Apply</span>
                  <span className="text-sm font-black text-slate-900">42%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
                  <div className="bg-primary h-full rounded-full transition-all duration-1000 ease-out delay-200" style={{ width: animate ? '42%' : '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-slate-700">Referrals</span>
                  <span className="text-sm font-black text-slate-900">68%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
                  <div className="bg-emerald-400 h-full rounded-full transition-all duration-1000 ease-out delay-300 shadow-[0_0_10px_rgba(52,211,153,0.8)]" style={{ width: animate ? '68%' : '0%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-200/60">
            <p className="text-xs text-slate-500 font-medium italic">
              <span className="font-bold text-primary not-italic mr-1">Tip:</span> 
              Referrals continue to be your highest conversion channel.
            </p>
          </div>
        </div>

        {/* Salary Insights */}
        <div className={`lg:col-span-2 ${glassClass} p-6 rounded-2xl`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Salary Range Insights</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Market average vs. Target roles</p>
            </div>
            <div className="flex gap-4 items-center bg-white/50 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
                <span className="text-xs font-bold text-slate-700">Applied Roles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span className="text-xs font-bold text-slate-700">Market Avg</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Range 1 */}
            <div className="flex items-center gap-4">
              <span className="w-32 text-sm font-bold text-slate-700">Software Eng II</span>
              <div className="flex-1 relative h-6 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div className="absolute left-[15%] right-[25%] bg-emerald-100 h-full transition-all duration-1000 ease-out" style={{ width: animate ? '60%' : '0%' }}></div>
                <div className="absolute left-[30%] right-[40%] bg-primary h-full transition-all duration-1000 ease-out delay-100" style={{ width: animate ? '30%' : '0%' }}></div>
                <div className="absolute left-[50%] h-full w-[2px] bg-slate-900 z-10 shadow-sm"></div>
              </div>
              <span className="w-24 text-right text-xs font-black text-slate-900">$120k-$165k</span>
            </div>
            
            {/* Range 2 */}
            <div className="flex items-center gap-4">
              <span className="w-32 text-sm font-bold text-slate-700">Senior Product</span>
              <div className="flex-1 relative h-6 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div className="absolute left-[25%] right-[15%] bg-emerald-100 h-full transition-all duration-1000 ease-out" style={{ width: animate ? '60%' : '0%' }}></div>
                <div className="absolute left-[40%] right-[30%] bg-primary h-full transition-all duration-1000 ease-out delay-100" style={{ width: animate ? '30%' : '0%' }}></div>
                <div className="absolute left-[55%] h-full w-[2px] bg-slate-900 z-10 shadow-sm"></div>
              </div>
              <span className="w-24 text-right text-xs font-black text-slate-900">$145k-$190k</span>
            </div>
            
            {/* Range 3 */}
            <div className="flex items-center gap-4">
              <span className="w-32 text-sm font-bold text-slate-700">Frontend Dev</span>
              <div className="flex-1 relative h-6 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div className="absolute left-[10%] right-[40%] bg-emerald-100 h-full transition-all duration-1000 ease-out" style={{ width: animate ? '50%' : '0%' }}></div>
                <div className="absolute left-[20%] right-[55%] bg-primary h-full transition-all duration-1000 ease-out delay-100" style={{ width: animate ? '25%' : '0%' }}></div>
                <div className="absolute left-[40%] h-full w-[2px] bg-slate-900 z-10 shadow-sm"></div>
              </div>
              <span className="w-24 text-right text-xs font-black text-slate-900">$100k-$135k</span>
            </div>
          </div>
        </div>

        {/* Recent AI Insights Section */}
        <div className="bg-gradient-to-br from-emerald-50/90 to-teal-50/90 backdrop-blur-xl border border-emerald-100 rounded-2xl shadow-sm flex flex-col p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm border border-emerald-100">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">AI Smart Tips</h3>
          </div>
          
          <div className="space-y-4 flex-1">
            <div className="bg-white/80 p-4 rounded-xl border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-orange-500 text-[20px] shrink-0" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
                <p className="text-xs font-medium text-slate-700 leading-relaxed">Your response rate is <span className="font-bold text-primary">15% higher</span> when applying within the first 24 hours of a posting.</p>
              </div>
            </div>
            
            <div className="bg-white/80 p-4 rounded-xl border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-blue-500 text-[20px] shrink-0">history</span>
                <p className="text-xs font-medium text-slate-700 leading-relaxed">Applying on <span className="font-bold text-primary">Tuesdays</span> has yielded the most recruiter callbacks this month.</p>
              </div>
            </div>
            
            <div className="bg-white/80 p-4 rounded-xl border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-indigo-500 text-[20px] shrink-0">psychology</span>
                <p className="text-xs font-medium text-slate-700 leading-relaxed">Roles mentioning <span className="font-bold text-primary">"Scalability"</span> match your current resume with 94% accuracy.</p>
              </div>
            </div>
          </div>
          
          <button className="mt-6 w-full bg-white border border-emerald-200 text-primary py-3 rounded-xl text-sm font-bold hover:bg-emerald-50 transition-colors shadow-sm">
            View All Insights
          </button>
        </div>
        
      </div>
    </div>
  );
}
