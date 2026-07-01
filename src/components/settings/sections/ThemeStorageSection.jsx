import React, { useState } from 'react';
import StorageManagementModal from '../modals/StorageManagementModal';

export default function ThemeStorageSection() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('applyzen_theme') || 'light';
  });

  const [resumesSize, setResumesSize] = useState(25.4);
  const [coverLettersSize, setCoverLettersSize] = useState(12.1);
  const [cacheSize, setCacheSize] = useState(4.5);
  const [storageLimit, setStorageLimit] = useState(100); // 100 MB default
  
  const [isStorageModalOpen, setIsStorageModalOpen] = useState(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('applyzen_theme', newTheme);
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (newTheme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemPrefersDark) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Theme card */}
        <section className="glass-card border border-slate-200/80 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
          <div className="border-b border-slate-200/60 dark:border-slate-800/60 px-6 py-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-700 text-[20px]">palette</span>
            <h3 className="font-black text-black text-sm uppercase tracking-wider">Theme</h3>
          </div>
          <div className="p-8 flex-1 flex flex-col justify-center">
            <div className="flex gap-4">
              <button onClick={() => handleThemeChange('light')} className={`flex-1 aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${theme === 'light' ? 'border-primary bg-emerald-50/10 text-emerald-600' : 'border-slate-200 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200'}`}>
                <span className="material-symbols-outlined text-emerald-600">light_mode</span>
                <span className="text-xs font-semibold">Light</span>
              </button>
              <button onClick={() => handleThemeChange('dark')} className={`flex-1 aspect-square rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${theme === 'dark' ? 'border-primary bg-emerald-50/10 text-emerald-600' : 'border-slate-200-variant bg-slate-900 text-white'}`}>
                <span className="material-symbols-outlined">dark_mode</span>
                <span className="text-xs font-semibold">Dark</span>
              </button>
              <button onClick={() => handleThemeChange('system')} className={`flex-1 aspect-square rounded-xl border flex flex-col items-center justify-center gap-2 overflow-hidden transition-all ${theme === 'system' ? 'border-primary bg-emerald-50/10 text-emerald-600' : 'border-slate-200-variant bg-gradient-to-br from-white to-slate-900 text-slate-500'}`}>
                <span className="material-symbols-outlined">contrast</span>
                <span className="text-xs font-semibold">System</span>
              </button>
            </div>
          </div>
        </section>

        {/* Storage card */}
        <section className="glass-card border border-slate-200/80 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-sm">
          <div className="border-b border-slate-200/60 dark:border-slate-800/60 px-6 py-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-700 text-[20px]">storage</span>
            <h3 className="font-black text-black text-sm uppercase tracking-wider">Storage</h3>
          </div>
          <div className="p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <p className="text-sm font-semibold">Resume Storage</p>
                <p className="text-xs text-slate-550">{(resumesSize + coverLettersSize + cacheSize).toFixed(1)} MB / {storageLimit} MB</p>
              </div>
              <div className="w-full h-3 bg-slate-50-highest rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600" style={{ "width": `${((resumesSize + coverLettersSize + cacheSize) / storageLimit) * 100}%` }}></div>
              </div>
              <p className="text-xs text-slate-555">Includes 12 resume variants and 85 generated cover letters.</p>
              <button 
                onClick={() => setIsStorageModalOpen(true)}
                className="text-emerald-600 font-bold text-xs flex items-center gap-xs hover:underline"
              >
                Manage Storage <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {isStorageModalOpen && (
        <StorageManagementModal
          resumesSize={resumesSize}
          coverLettersSize={coverLettersSize}
          cacheSize={cacheSize}
          storageLimit={storageLimit}
          setResumesSize={setResumesSize}
          setCoverLettersSize={setCoverLettersSize}
          setCacheSize={setCacheSize}
          setStorageLimit={setStorageLimit}
          onClose={() => setIsStorageModalOpen(false)}
        />
      )}
    </>
  );
}
