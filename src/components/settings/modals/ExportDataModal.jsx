import React, { useState } from 'react';

export default function ExportDataModal({ onClose }) {
  const [exportOptions, setExportOptions] = useState({
    profile: true,
    applications: true,
    resumes: true,
    settings: false
  });
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportSuccess, setExportSuccess] = useState(false);

  const handleStartExport = () => {
    setIsExporting(true);
    setExportProgress(0);
    setExportSuccess(false);

    const interval = setInterval(() => {
      setExportProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExporting(false);
          setExportSuccess(true);
          const element = document.createElement("a");
          const file = new Blob(["ApplyZen Mock Data Export"], { type: 'text/plain' });
          element.href = URL.createObjectURL(file);
          element.download = "applyzen-data-export.zip";
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full overflow-hidden shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-900 dark:text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
          disabled={isExporting}
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-600">download_for_offline</span> Export Data
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Export all your information, applications, and documents in a zip file.
        </p>

        <div className="space-y-4">
          {exportSuccess && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400 text-xs rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">check_circle</span> Export completed! Downloading now...
            </div>
          )}

          {!isExporting && !exportSuccess && (
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                <span className="text-sm font-semibold">User Profile & Bio</span>
                <input
                  type="checkbox"
                  className="rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  checked={exportOptions.profile}
                  onChange={(e) => setExportOptions({ ...exportOptions, profile: e.target.checked })}
                />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                <span className="text-sm font-semibold">Applications & Analytics</span>
                <input
                  type="checkbox"
                  className="rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  checked={exportOptions.applications}
                  onChange={(e) => setExportOptions({ ...exportOptions, applications: e.target.checked })}
                />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                <span className="text-sm font-semibold">Resume Documents</span>
                <input
                  type="checkbox"
                  className="rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  checked={exportOptions.resumes}
                  onChange={(e) => setExportOptions({ ...exportOptions, resumes: e.target.checked })}
                />
              </div>
            </div>
          )}

          {isExporting && (
            <div className="space-y-3 p-4 bg-slate-50 dark:bg-slate-800/35 border border-slate-100 dark:border-slate-800 rounded-xl">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-500">Compiling dataset...</span>
                <span className="text-emerald-600">{exportProgress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 transition-all duration-200" style={{ width: `${exportProgress}%` }}></div>
              </div>
            </div>
          )}

          <div className="flex gap-3 justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-slate-250 dark:border-slate-750 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              disabled={isExporting}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleStartExport}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors"
              disabled={isExporting || (!exportOptions.profile && !exportOptions.applications && !exportOptions.resumes)}
            >
              {isExporting ? 'Exporting...' : 'Start Export'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
