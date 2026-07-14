import React, { useState } from 'react';

export default function AISettingsSection() {
  const [aiModel, setAiModel] = useState('zen4');
  const [creativity, setCreativity] = useState(80);
  const [responseLength, setResponseLength] = useState('balanced');

  return (
    <section className="glass-card border border-slate-200/80 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-sm">
      <div className="border-b border-slate-200/60 dark:border-slate-800/60 px-6 py-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-emerald-700 text-[20px]">psychology</span>
        <h3 className="font-black text-black text-sm uppercase tracking-wider">AI Settings</h3>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Model Selection</label>
            <div className="space-y-3">
              <div
                onClick={() => setAiModel('zen4')}
                className={`p-4 border rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-200 ${aiModel === 'zen4' ? 'border-emerald-600 bg-emerald-50/15 shadow-sm' : 'border-slate-200 hover:border-emerald-500/50 bg-white'}`}
              >
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${aiModel === 'zen4' ? 'border-emerald-600' : 'border-slate-300'}`}>
                  {aiModel === 'zen4' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>}
                </div>
                <div>
                  <p className="font-bold text-sm text-black">⚡ Zen-4 Turbo (Default)</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Fast &amp; Creative Response</p>
                </div>
              </div>
              <div
                onClick={() => setAiModel('zenpro')}
                className={`p-4 border rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-200 ${aiModel === 'zenpro' ? 'border-emerald-600 bg-emerald-50/15 shadow-sm' : 'border-slate-200 hover:border-emerald-500/50 bg-white'}`}
              >
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${aiModel === 'zenpro' ? 'border-emerald-600' : 'border-slate-300'}`}>
                  {aiModel === 'zenpro' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>}
                </div>
                <div>
                  <p className="font-bold text-sm text-black">📊 Zen-Pro Analyst</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Data Focused &amp; Highly Precise</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Creativity level (Temperature)</label>
                <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  {creativity}% ({creativity < 35 ? 'Precise' : creativity < 75 ? 'Balanced' : 'Creative'})
                </span>
              </div>
              <input
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                type="range"
                min="0"
                max="100"
                value={creativity}
                onChange={(e) => setCreativity(Number(e.target.value))}
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold px-0.5">
                <span>Conservative</span>
                <span>Balanced</span>
                <span>Creative</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Response Length</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setResponseLength('short')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${responseLength === 'short' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  Short
                </button>
                <button
                  type="button"
                  onClick={() => setResponseLength('balanced')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${responseLength === 'balanced' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  Balanced
                </button>
                <button
                  type="button"
                  onClick={() => setResponseLength('detailed')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${responseLength === 'detailed' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  Detailed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
