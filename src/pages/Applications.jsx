import { ChevronRight, SlidersHorizontal, Plus, MoreHorizontal, Paperclip, MessageSquare, Calendar } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const defaultApplications = [
  {
    id: 1,
    role: "Product Designer",
    company: "Google",
    stage: "Applied",
    timeAgo: "2d ago",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB232tn4aGFFF5p1zUBIanMxk2SePTydiFwonRceSuOest7uhrPZaYti0fq4vz_E-wPfkE3LKx-dkMSaDkdyetDizkw2CcUhw8nGmBVdPzBOZiUf4jHiiqE2KG3ISvp0Cok8p3dC-v5_2VnCdJr6_LSpZCNLJuN3mEXCr5Vi9U_vyIX7leffvaonQJoQNQgrCLfJjOkhMUlKIZNcvE3GmoZCUqVExloKdnThZvzEjJ4L1APRvLA28MReGDqk0ImQIo6_WdGvGJuxDag",
    tags: ["Full-Time", "Remote"],
    hasJd: true,
    hasAttachment: true
  },
  {
    id: 2,
    role: "UX Engineer",
    company: "Stripe",
    stage: "Applied",
    timeAgo: "4d ago",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuABKLSgO8XcI5o52vi4B8-SKA9UMnljX6JfUdhARHk_w6AEV1enKQLD4I8TV8XLa2kgSAKDq-sE8-hqsHvTuyKY4XGEScHOa6A6bX8l1gSyTvyF5zkQo3oNO42idO1gwt2SfC4AXzQfsc5fk0I80zaLzegRrc9GFYUm72gbIH9cQuCem-we-5zs857UxzVOJki7CyT-BLZm5Md-ql5HwgE5D1XKGZdFGAgCDRnp3_Zig3m9Uj-v7WhUE8sAkrNGKYMroc-yLmFRlrpg",
    tags: ["Contract"],
    autofilled: true,
    hasChat: true
  },
  {
    id: 3,
    role: "Lead Designer",
    company: "Linear",
    stage: "Interviewing",
    round: "Round 3",
    time: "Tomorrow, 10:00 AM",
    logo: "https://lh3.googleusercontent.com/aida/AP1WRLvyCj0Iz7dcgXzyHLUbfac-CcM1f-YqZCumbI3G0tTBvNXEE9CMFyrIKys_UftGAiYNfwm4R5gQNEMQ6BfTDza9RD_FuPuuOYK1o5aLXgOSla8u2nCwpTXuvCzF3lXrvUGRAh9oOgEStZLBvUDUmYr0YFugYZ5QQf24rH1EjeJKEyU4oB89dERZplU6QGFnCcHoZbZmYpnQ_WNZWlWaLh9ecv2EA2hrvSm2B2wz7La_8172uguOYBqKsGmY",
    tags: [],
    interviewerInitials: ["MK", "AZ"],
    checklistProgress: "80%"
  },
  {
    id: 4,
    role: "Design Manager",
    company: "Adobe",
    stage: "Interviewing",
    round: "Round 1",
    comment: "Awaiting feedback from hiring manager...",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm-qmNS3BzUQuE57QIL7kS7gOd6XwI4jhC4r1ln6bg7tzvDdLCDBIIqR8UoBgJaUzuDFT1gvxfMnn2r4ialeWGY0gobfLIQLH-FP5mrPsEMCLuceTYwyUkmgKBouLj24TsKOGfvCcz3m5UDzuk3v_Z04e5JKW8pgUIn_j0hFKG5o71SmXEZpXmNIeCLHGbu2mOaU6-L7vvLQSZO63RZZy-ulfcpQgXWYQXPLbUSbeeStXb1DaJbxp0y-zNoPWuOVf2YOd_c-wJnRNN",
    tags: [],
    timeAgo: "2h ago"
  },
  {
    id: 5,
    role: "Senior Product UI",
    company: "Airbnb",
    stage: "Offer",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpOd_gGljdViN4HUYLqqNJb_Am2ScOsfFHJ_5B1ZUxwQaKzR83nuqjetQRqjJ0rNMVcbhHxvkJ4mgXRlpZz1YEfyxSIpJ9NQ76eNe2mOc7ZSVQF3U-KVJcLKpclYZZFvJdsvwhYHbiJhggJfgX_C_dgtXvoFtXqeYg-TTQmxTAW4PfSidbP58z8MbHCjQ1h6-B5LuzWpHfZr2Xfune30-5agiyvxdE-MIzLD1PBmJy5zMdzKLIjA8y-tSefrwqFcaF9hO3S_AWvSXt",
    daysLeft: 4,
    progress: "2/3"
  },
  {
    id: 6,
    role: "Interaction Pro",
    company: "Figma",
    stage: "Inactive",
    status: "Rejected",
    comment: "\"We've decided to move forward with other candidates...\"",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWyQhGTE_Thr7EQW6Xzc0h0TyGCbf01a7vP4q9IC-de3xKqaTw8w4IH9S_si_EMHRetPOqKL_DV2E8rIUCew1TJRzRORN41k4hscsVvFM837V0YIoQ-sjNUVKkNs_jIUXna4O4FXmhKbum1kBPAIGdF5jrmLfWcDPbB_FqYmjkJMAxlvEdWMNfZ2dBup1NBiGZ0G0zAKIV3h5W6qXjL8tNwTfoUdT1FHqj7h4iNBh55L831NvsA0SRcT1k1QITZU-cJVKpX_n5UK-5"
  },
  {
    id: 7,
    role: "Platform Designer",
    company: "Meta",
    stage: "Inactive",
    status: "Closed",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMpkGDOU7eCSwGt2fRQlBiALDYBxtNFNxJwnh-coPQTRfu9pLxvMSSAo_--CJRqb88_XsCmlo35KrRPksAhFwZq4fnl5OzKW2pn2t3etagwjOwaOVKLD4rbZ7LNXqbTOEyCmWjJ6BUXXCSoR3f_vx5wm8ggjczuNoLkei1ne9h1y1Jamso6sFXjLu_BbCUssSCRjB0LZW97X2nSWTJRO-5rA4KulyRg9CeCSA-hRS4rQF3jDXVc5fyqrc5X5-qQOdfVhz-h29FkMkh"
  }
];

export default function Applications() {
  const navigate = useNavigate();
  const [apps, setApps] = useState(() => {
    const saved = localStorage.getItem('applyzen_applications');
    return saved ? JSON.parse(saved) : defaultApplications;
  });

  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    localStorage.setItem('applyzen_applications', JSON.stringify(apps));
  }, [apps]);

  const moveStage = (id, newStage) => {
    setApps(prev => prev.map(app => app.id === id ? { ...app, stage: newStage } : app));
    setActiveMenu(null);
  };

  
  return (
    <div className="space-y-8 animate-fadeIn pb-8 max-w-[1400px] mx-auto">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <nav className="flex items-center gap-1 text-sm font-bold text-slate-500 mb-2">
            <span>Main</span>
            <ChevronRight className="w-[16px] h-[16px]" />
            <span className="text-primary">Applications</span>
          </nav>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">Application Pipeline</h2>
          <p className="text-lg text-slate-600 max-w-xl">Manage and track your active job searches. Move cards across stages as your interview process evolves.</p>
        </div>
        <div className="flex gap-3">
          <button className={`glass-card px-6 h-12 rounded-xl text-sm font-bold text-slate-700 hover:bg-white/90 transition-colors flex items-center gap-2`}>
            <SlidersHorizontal className="w-[20px] h-[20px]" />
            Filter
          </button>
          <button className="bg-primary text-white hover:bg-primary/90 active:scale-[0.98] transition-all px-6 h-12 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
            <Plus className="w-[20px] h-[20px]" />
            New Application
          </button>
        </div>
      </div>

      {/* Kanban Board Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        
        {/* Column Generator */}
        {['Applied', 'Interviewing', 'Offer', 'Inactive'].map(col => {
          const colApps = apps.filter(a => a.stage === col);
          const colColors = {
            Applied: 'bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]',
            Interviewing: 'bg-orange-500 shadow-[0_0_5px_rgba(249,115,22,0.5)]',
            Offer: 'bg-primary shadow-[0_0_5px_rgba(16,185,129,0.5)]',
            Inactive: 'bg-slate-300'
          };
          const textColors = {
            Applied: 'text-blue-700 bg-blue-100 border-blue-200',
            Interviewing: 'text-orange-700 bg-orange-100 border-orange-200',
            Offer: 'text-primary bg-emerald-100 border-emerald-200',
            Inactive: 'text-slate-600 bg-slate-200 border-slate-300'
          };
          
          return (
            <div key={col} className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${colColors[col]}`}></span>
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-700">{col}</h3>
                  <span className={`px-2 py-0.5 rounded-md text-[11px] font-black border ${textColors[col]}`}>{colApps.length}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 min-h-[500px]">
                {colApps.map(app => (
                  <div 
                    key={app.id}
                    className={`glass-card p-4 rounded-2xl transition-all cursor-pointer group relative ${
                      app.stage === 'Offer' ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-primary' : 
                      app.stage === 'Inactive' ? 'grayscale hover:grayscale-0' : 'hover:border-blue-300 hover:shadow-md'
                    }`}
                    onClick={() => navigate('/status')}
                  >
                    {/* Move Stage Context Dropdown Button */}
                    <div className="absolute top-4 right-4 z-20">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu(activeMenu === app.id ? null : app.id);
                        }}
                        className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                      
                      {activeMenu === app.id && (
                        <div className="absolute right-0 mt-1 w-40 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-30 text-xs">
                          <p className="px-3 py-1 font-bold text-slate-400 uppercase tracking-wider text-[9px]">Move to:</p>
                          {['Applied', 'Interviewing', 'Offer', 'Inactive'].filter(s => s !== app.stage).map(s => (
                            <button
                              key={s}
                              onClick={(e) => {
                                e.stopPropagation();
                                moveStage(app.id, s);
                              }}
                              className="w-full text-left px-3 py-2 hover:bg-slate-50 font-semibold text-slate-700"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-start mb-4 pr-6">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shrink-0 overflow-hidden shadow-sm">
                          <img alt={`${app.company} Logo`} className="w-full h-full object-contain p-1.5" src={app.logo} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 leading-tight">{app.role}</p>
                          <p className="text-xs font-medium text-slate-500">{app.company}</p>
                        </div>
                      </div>
                      {app.round && (
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-black rounded-md uppercase border border-slate-200 shrink-0">
                          {app.round}
                        </span>
                      )}
                    </div>

                    {/* Conditional rendering for Interview time */}
                    {app.stage === 'Interviewing' && app.time && (
                      <div className="p-2.5 bg-white/60 rounded-xl mb-4 flex items-center gap-2 border border-orange-100">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <p className="text-xs font-bold text-orange-700">{app.time}</p>
                      </div>
                    )}

                    {/* Conditional rendering for comments */}
                    {app.comment && (
                      <p className="text-xs font-medium text-slate-500 mb-4 italic leading-tight">{app.comment}</p>
                    )}

                    {/* Conditional rendering for Offer Progress Bar */}
                    {app.stage === 'Offer' && app.daysLeft && (
                      <div className="mb-5 bg-white/60 p-2.5 rounded-xl border border-emerald-100">
                        <div className="flex justify-between text-xs mb-1.5 font-bold">
                          <span className="text-slate-600">Offer Deadline</span>
                          <span className="text-red-500">{app.daysLeft} days left</span>
                        </div>
                        <div className="w-full bg-emerald-200/50 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-primary w-2/3 h-full rounded-full"></div>
                        </div>
                      </div>
                    )}

                    {/* Tag list */}
                    {app.tags && app.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {app.tags.map(t => (
                          <span key={t} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-black rounded-md uppercase border border-blue-100">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-slate-200/60">
                      {app.autofilled ? (
                        <span className="text-[10px] text-primary font-black uppercase tracking-wider">Autofilled</span>
                      ) : (
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700 shadow-sm">JD</div>
                        </div>
                      )}
                      
                      {app.hasAttachment && <Paperclip className="w-4 h-4 text-slate-300 group-hover:text-slate-400" />}
                      {app.hasChat && <MessageSquare className="w-4 h-4 text-slate-300 group-hover:text-slate-400" />}
                      {app.stage === 'Inactive' && app.status && (
                        <span className={`text-[10px] font-black shrink-0 uppercase tracking-wider ${
                          app.status === 'Rejected' ? 'text-red-500' : 'text-slate-500'
                        }`}>
                          {app.status}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}