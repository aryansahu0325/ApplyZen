import React from 'react';

export default function AutomationPreferencesSection() {
  return (
    <section className="glass-card border border-slate-200/80 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-sm">
      <div className="border-b border-slate-200/60 dark:border-slate-800/60 px-6 py-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-emerald-700 text-[20px]">smart_toy</span>
        <h3 className="font-black text-black text-sm uppercase tracking-wider">Automation Preferences</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3.5 bg-slate-50-low rounded-xl">
            <div className="flex flex-col">
              <p className="font-semibold text-sm">Auto Apply</p>
              <p className="text-xs text-slate-550">Automatically apply to jobs that match 95%+ criteria.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-slate-50-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-3.5 bg-slate-50-low rounded-xl">
            <div className="flex flex-col">
              <p className="font-semibold text-sm">Auto Generate Cover Letters</p>
              <p className="text-xs text-slate-555">Use AI to craft bespoke responses for each application.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-slate-50-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Application Strategy</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-black font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500">
                <option className="text-black bg-white">Quality Focused (Highly Targeted)</option>
                <option className="text-black bg-white">Quantity Focused (Mass Outreach)</option>
                <option className="text-black bg-white">Hybrid (Balanced Approach)</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-350">AI Confidence Threshold</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-black font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500">
                <option className="text-black bg-white">Very High (90%+ Match)</option>
                <option className="text-black bg-white">High (80%+ Match)</option>
                <option className="text-black bg-white">Moderate (70%+ Match)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
