import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Applications() {
  const navigate = useNavigate();
  const glassClass = "bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm";

  return (
    <div className="space-y-8 animate-fadeIn pb-8 max-w-[1400px] mx-auto">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <nav className="flex items-center gap-1 text-sm font-bold text-slate-500 mb-2">
            <span>Main</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-primary">Applications</span>
          </nav>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">Application Pipeline</h2>
          <p className="text-lg text-slate-600 max-w-xl">Manage and track your active job searches. Move cards across stages as your interview process evolves.</p>
        </div>
        <div className="flex gap-3">
          <button className={`${glassClass} px-6 h-12 rounded-xl text-sm font-bold text-slate-700 hover:bg-white/90 transition-colors flex items-center gap-2`}>
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
            Filter
          </button>
          <button className="bg-primary text-white hover:bg-primary/90 active:scale-[0.98] transition-all px-6 h-12 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Application
          </button>
        </div>
      </div>

      {/* Kanban Board Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        
        {/* Column: Applied */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></span>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-700">Applied</h3>
              <span className="bg-blue-100 px-2 py-0.5 rounded-md text-[11px] font-black text-blue-700 border border-blue-200">12</span>
            </div>
            <button className="text-slate-400 hover:text-slate-700 transition-colors"><span className="material-symbols-outlined text-[20px]">more_horiz</span></button>
          </div>
          
          <div className="flex flex-col gap-4 min-h-[500px]">
            {/* Card 1 */}
            <div className={`\${glassClass} p-4 rounded-2xl hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/5 transition-all cursor-pointer group`} onClick={() => navigate('/status')}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shrink-0 overflow-hidden shadow-sm">
                    <img alt="Google Logo" className="w-full h-full object-contain p-1.5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB232tn4aGFFF5p1zUBIanMxk2SePTydiFwonRceSuOest7uhrPZaYti0fq4vz_E-wPfkE3LKx-dkMSaDkdyetDizkw2CcUhw8nGmBVdPzBOZiUf4jHiiqE2KG3ISvp0Cok8p3dC-v5_2VnCdJr6_LSpZCNLJuN3mEXCr5Vi9U_vyIX7leffvaonQJoQNQgrCLfJjOkhMUlKIZNcvE3GmoZCUqVExloKdnThZvzEjJ4L1APRvLA28MReGDqk0ImQIo6_WdGvGJuxDag"/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">Product Designer</p>
                    <p className="text-xs font-medium text-slate-500">Google</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-slate-400 shrink-0">2d ago</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-black rounded-md uppercase border border-blue-100">Full-Time</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-black rounded-md uppercase border border-slate-200">Remote</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-200/60">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-700 shadow-sm">JD</div>
                </div>
                <span className="material-symbols-outlined text-[18px] text-slate-300 group-hover:text-slate-400 transition-colors">attachment</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`\${glassClass} p-4 rounded-2xl hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/5 transition-all cursor-pointer group`} onClick={() => navigate('/status')}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shrink-0 overflow-hidden shadow-sm">
                    <img alt="Stripe Logo" className="w-full h-full object-contain p-1.5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABKLSgO8XcI5o52vi4B8-SKA9UMnljX6JfUdhARHk_w6AEV1enKQLD4I8TV8XLa2kgSAKDq-sE8-hqsHvTuyKY4XGEScHOa6A6bX8l1gSyTvyF5zkQo3oNO42idO1gwt2SfC4AXzQfsc5fk0I80zaLzegRrc9GFYUm72gbIH9cQuCem-we-5zs857UxzVOJki7CyT-BLZm5Md-ql5HwgE5D1XKGZdFGAgCDRnp3_Zig3m9Uj-v7WhUE8sAkrNGKYMroc-yLmFRlrpg"/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">UX Engineer</p>
                    <p className="text-xs font-medium text-slate-500">Stripe</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-slate-400 shrink-0">4d ago</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-black rounded-md uppercase border border-indigo-100">Contract</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-200/60">
                <span className="text-[10px] text-primary font-black uppercase tracking-wider">Autofilled</span>
                <span className="material-symbols-outlined text-[18px] text-slate-300 group-hover:text-slate-400 transition-colors">chat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column: Interviewing */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_5px_rgba(249,115,22,0.5)]"></span>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-700">Interviewing</h3>
              <span className="bg-orange-100 px-2 py-0.5 rounded-md text-[11px] font-black text-orange-700 border border-orange-200">3</span>
            </div>
            <button className="text-slate-400 hover:text-slate-700 transition-colors"><span className="material-symbols-outlined text-[20px]">more_horiz</span></button>
          </div>
          
          <div className="flex flex-col gap-4 min-h-[500px]">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-white/90 to-orange-50/80 backdrop-blur-xl border border-orange-200 shadow-md p-4 rounded-2xl hover:border-orange-400 transition-all cursor-pointer group" onClick={() => navigate('/status')} onClick={() => navigate('/status')}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shrink-0 overflow-hidden shadow-sm">
                    <img alt="Linear Logo" className="w-full h-full object-contain p-2" src="https://lh3.googleusercontent.com/aida/AP1WRLvyCj0Iz7dcgXzyHLUbfac-CcM1f-YqZCumbI3G0tTBvNXEE9CMFyrIKys_UftGAiYNfwm4R5gQNEMQ6BfTDza9RD_FuPuuOYK1o5aLXgOSla8u2nCwpTXuvCzF3lXrvUGRAh9oOgEStZLBvUDUmYr0YFugYZ5QQf24rH1EjeJKEyU4oB89dERZplU6QGFnCcHoZbZmYpnQ_WNZWlWaLh9ecv2EA2hrvSm2B2wz7La_8172uguOYBqKsGmY"/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">Lead Designer</p>
                    <p className="text-xs font-medium text-slate-500">Linear</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-orange-500 text-white text-[9px] font-black rounded-md uppercase shrink-0 shadow-sm shadow-orange-500/20">Round 3</span>
              </div>
              <div className="p-2.5 bg-white/60 rounded-xl mb-4 flex items-center gap-2 border border-orange-100">
                <span className="material-symbols-outlined text-orange-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>event</span>
                <p className="text-xs font-bold text-orange-700">Tomorrow, 10:00 AM</p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-orange-200/50">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700 shadow-sm">MK</div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700 shadow-sm">AZ</div>
                </div>
                <span className="text-[10px] font-bold text-slate-500">Prep Checklist (80%)</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`\${glassClass} p-4 rounded-2xl hover:border-orange-300 hover:shadow-md hover:shadow-orange-500/5 transition-all cursor-pointer group`} onClick={() => navigate('/status')}>
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shrink-0 overflow-hidden shadow-sm">
                    <img alt="Adobe Logo" className="w-full h-full object-contain p-1.5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm-qmNS3BzUQuE57QIL7kS7gOd6XwI4jhC4r1ln6bg7tzvDdLCDBIIqR8UoBgJaUzuDFT1gvxfMnn2r4ialeWGY0gobfLIQLH-FP5mrPsEMCLuceTYwyUkmgKBouLj24TsKOGfvCcz3m5UDzuk3v_Z04e5JKW8pgUIn_j0hFKG5o71SmXEZpXmNIeCLHGbu2mOaU6-L7vvLQSZO63RZZy-ulfcpQgXWYQXPLbUSbeeStXb1DaJbxp0y-zNoPWuOVf2YOd_c-wJnRNN"/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">Design Manager</p>
                    <p className="text-xs font-medium text-slate-500">Adobe</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-black rounded-md uppercase border border-slate-200 shrink-0">Round 1</span>
              </div>
              <p className="text-xs font-medium text-slate-500 mb-4 italic">Awaiting feedback from hiring manager...</p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-200/60">
                <span className="text-[10px] font-bold text-slate-400">Updated 2h ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column: Offer */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_5px_rgba(16,185,129,0.5)] animate-pulse"></span>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-700">Offer</h3>
              <span className="bg-emerald-100 px-2 py-0.5 rounded-md text-[11px] font-black text-primary border border-emerald-200">1</span>
            </div>
            <button className="text-slate-400 hover:text-slate-700 transition-colors"><span className="material-symbols-outlined text-[20px]">more_horiz</span></button>
          </div>
          
          <div className="flex flex-col gap-4 min-h-[500px]">
            {/* Special Offer Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 backdrop-blur-xl border-2 border-primary rounded-2xl shadow-lg shadow-primary/20 p-4 relative overflow-hidden group" onClick={() => navigate('/status')} cursor-pointer onClick={() => navigate('/status')}>
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rotate-45 transform group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-emerald-200 shrink-0 overflow-hidden shadow-sm">
                    <img alt="Airbnb Logo" className="w-full h-full object-contain p-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpOd_gGljdViN4HUYLqqNJb_Am2ScOsfFHJ_5B1ZUxwQaKzR83nuqjetQRqjJ0rNMVcbhHxvkJ4mgXRlpZz1YEfyxSIpJ9NQ76eNe2mOc7ZSVQF3U-KVJcLKpclYZZFvJdsvwhYHbiJhggJfgX_C_dgtXvoFtXqeYg-TTQmxTAW4PfSidbP58z8MbHCjQ1h6-B5LuzWpHfZr2Xfune30-5agiyvxdE-MIzLD1PBmJy5zMdzKLIjA8y-tSefrwqFcaF9hO3S_AWvSXt"/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">Senior Product UI</p>
                    <p className="text-xs font-medium text-slate-600">Airbnb</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-primary text-white text-[9px] font-black rounded-md uppercase shrink-0 shadow-sm shadow-primary/30">Exciting!</span>
              </div>
              
              <div className="mb-5 relative z-10 bg-white/60 p-2.5 rounded-xl border border-emerald-100">
                <div className="flex justify-between text-xs mb-1.5 font-bold">
                  <span className="text-slate-600">Offer Deadline</span>
                  <span className="text-red-500">4 days left</span>
                </div>
                <div className="w-full bg-emerald-200/50 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary w-2/3 h-full rounded-full"></div>
                </div>
              </div>
              
              <div className="flex gap-2 relative z-10">
                <button className="flex-1 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-sm shadow-primary/20 active:scale-[0.98]">Review</button>
                <button className="flex-1 py-2 bg-white border border-emerald-200 text-emerald-700 text-xs font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-sm active:scale-[0.98]">Negotiate</button>
              </div>
            </div>
          </div>
        </div>

        {/* Column: Inactive */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-500">Inactive</h3>
              <span className="bg-slate-200 px-2 py-0.5 rounded-md text-[11px] font-black text-slate-600 border border-slate-300">24</span>
            </div>
            <button className="text-slate-400 hover:text-slate-700 transition-colors"><span className="material-symbols-outlined text-[20px]">more_horiz</span></button>
          </div>
          
          <div className="flex flex-col gap-4 min-h-[500px] opacity-75 hover:opacity-100 transition-opacity">
            {/* Card 1 */}
            <div className={`\${glassClass} p-4 rounded-2xl grayscale hover:grayscale-0 transition-all cursor-pointer`} onClick={() => navigate('/status')}>
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shrink-0 overflow-hidden shadow-sm">
                    <img alt="Figma Logo" className="w-full h-full object-contain p-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWyQhGTE_Thr7EQW6Xzc0h0TyGCbf01a7vP4q9IC-de3xKqaTw8w4IH9S_si_EMHRetPOqKL_DV2E8rIUCew1TJRzRORN41k4hscsVvFM837V0YIoQ-sjNUVKkNs_jIUXna4O4FXmhKbum1kBPAIGdF5jrmLfWcDPbB_FqYmjkJMAxlvEdWMNfZ2dBup1NBiGZ0G0zAKIV3h5W6qXjL8tNwTfoUdT1FHqj7h4iNBh55L831NvsA0SRcT1k1QITZU-cJVKpX_n5UK-5"/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-600 leading-tight">Interaction Pro</p>
                    <p className="text-xs font-medium text-slate-400">Figma</p>
                  </div>
                </div>
                <span className="text-[10px] font-black text-red-500 shrink-0 uppercase tracking-wider">Rejected</span>
              </div>
              <p className="text-xs font-medium text-slate-400 leading-tight italic">"We've decided to move forward with other candidates..."</p>
            </div>
            
            {/* Card 2 */}
            <div className={`\${glassClass} p-4 rounded-2xl grayscale hover:grayscale-0 transition-all cursor-pointer`} onClick={() => navigate('/status')}>
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shrink-0 overflow-hidden shadow-sm">
                    <img alt="Meta Logo" className="w-full h-full object-contain p-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMpkGDOU7eCSwGt2fRQlBiALDYBxtNFNxJwnh-coPQTRfu9pLxvMSSAo_--CJRqb88_XsCmlo35KrRPksAhFwZq4fnl5OzKW2pn2t3etagwjOwaOVKLD4rbZ7LNXqbTOEyCmWjJ6BUXXCSoR3f_vx5wm8ggjczuNoLkei1ne9h1y1Jamso6sFXjLu_BbCUssSCRjB0LZW97X2nSWTJRO-5rA4KulyRg9CeCSA-hRS4rQF3jDXVc5fyqrc5X5-qQOdfVhz-h29FkMkh"/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-600 leading-tight">Platform Designer</p>
                    <p className="text-xs font-medium text-slate-400">Meta</p>
                  </div>
                </div>
                <span className="text-[10px] font-black text-slate-500 shrink-0 uppercase tracking-wider">Closed</span>
              </div>
            </div>

            <button className="w-full py-4 border-2 border-dashed border-slate-300 bg-white/40 rounded-2xl text-slate-500 hover:border-primary/40 hover:text-primary hover:bg-white/60 transition-all flex items-center justify-center gap-2 group mt-2">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">archive</span>
              <span className="text-sm font-bold">View Archive</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity Table Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-extrabold text-slate-900">Recent Activity</h3>
          <button className="text-primary text-sm font-bold hover:underline">View All Activity</button>
        </div>
        
        <div className={`${glassClass} rounded-2xl overflow-hidden`}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-[800px]">
              <thead className="bg-slate-50/50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Stage</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Last Activity</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/60">
                <tr className="hover:bg-white/60 transition-colors group cursor-pointer" onClick={() => navigate('/status')}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
                        <span className="material-symbols-outlined text-indigo-500 text-[18px]">rocket_launch</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">SpaceX</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 whitespace-nowrap">Lead Visualization Designer</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">Technical Assessment</span>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-500 whitespace-nowrap">Today, 2:45 PM</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_5px_rgba(249,115,22,0.5)]"></div>
                      <span className="text-xs font-black text-orange-600">Action Required</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <button className="text-slate-400 group-hover:text-primary transition-colors p-1"><span className="material-symbols-outlined">chevron_right</span></button>
                  </td>
                </tr>
                
                <tr className="hover:bg-white/60 transition-colors group cursor-pointer" onClick={() => navigate('/status')}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-blue-500 text-[18px]">cloud</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">Salesforce</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 whitespace-nowrap">Senior UX Researcher</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">Initial Screen</span>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-500 whitespace-nowrap">Yesterday</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
                      <span className="text-xs font-black text-blue-600">Pending Feedback</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <button className="text-slate-400 group-hover:text-primary transition-colors p-1"><span className="material-symbols-outlined">chevron_right</span></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}
