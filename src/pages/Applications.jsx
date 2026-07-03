import { ChevronRight, SlidersHorizontal, Plus, MoreHorizontal, Paperclip, MessageSquare, Calendar } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { mockApplications } from '../mocks/mockData';

export default function Applications() {
  const navigate = useNavigate();
  const [apps, setApps] = useState(() => {
    const saved = localStorage.getItem('applyzen_applications');
    return saved ? JSON.parse(saved) : mockApplications;
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