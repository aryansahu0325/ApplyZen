import React from 'react';

export default function ConnectedAccountsSection() {
  return (
    <section className="glass-card border border-slate-200/80 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-sm">
      <div className="border-b border-slate-200/60 dark:border-slate-800/60 px-6 py-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-emerald-700 text-[20px]">link</span>
        <h3 className="font-black text-black text-sm uppercase tracking-wider">Connected Accounts</h3>
      </div>
      <div className="p-8">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div 
            onClick={() => window.open('https://accounts.google.com/signin', '_blank')}
            className="p-4 rounded-xl border border-primary bg-emerald-600/5 flex flex-col gap-4 relative hover:border-emerald-600/50 transition-colors cursor-pointer group shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-red-500">mail</span>
              </div>
              <span className="bg-emerald-600/20 text-emerald-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Connected</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-black">Gmail</p>
              <p className="text-xs text-slate-500">Synced 2m ago</p>
            </div>
          </div>
          <div 
            onClick={() => window.open('https://outlook.live.com', '_blank')}
            className="p-4 rounded-xl border border-red-200 dark:border-red-800 bg-red-500/5 flex flex-col gap-4 hover:border-red-500/40 transition-colors cursor-pointer group shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-blue-600">alternate_email</span>
              </div>
              <span className="bg-red-500/10 text-red-500 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Disconnected</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-black">Outlook</p>
              <p className="text-xs text-red-500/80">Tap to connect</p>
            </div>
          </div>
          <div 
            onClick={() => window.open('https://web.whatsapp.com', '_blank')}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 flex flex-col gap-4 relative overflow-hidden hover:border-emerald-600/40 transition-colors cursor-pointer group shadow-sm animate-pulse-slow"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-green-500">chat</span>
              </div>
              <span className="bg-amber-500/15 text-amber-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Pending</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-black">WhatsApp</p>
              <p className="text-xs text-amber-600 font-bold italic">Pending</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
