import React, { useState } from 'react';

export default function TwoFactorModal({ is2faEnabled, setIs2faEnabled, onClose }) {
  const [twoFactorOtp, setTwoFactorOtp] = useState('');
  const [twoFactorError, setTwoFactorError] = useState('');
  const [twoFactorSuccess, setTwoFactorSuccess] = useState(false);

  const handle2FAVerify = (e) => {
    e.preventDefault();
    setTwoFactorError('');
    setTwoFactorSuccess(false);

    if (!twoFactorOtp) {
      setTwoFactorError('Please enter the 6-digit OTP code.');
      return;
    }

    if (twoFactorOtp.length !== 6 || isNaN(twoFactorOtp)) {
      setTwoFactorError('Invalid OTP code. Must be 6 digits.');
      return;
    }

    const nextState = !is2faEnabled;
    setIs2faEnabled(nextState);
    localStorage.setItem('applyzen_2fa_enabled', nextState.toString());
    setTwoFactorSuccess(true);

    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full overflow-hidden shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-900 dark:text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-600">security_update_good</span>
          {is2faEnabled ? 'Disable 2FA' : 'Enable 2FA'}
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          {is2faEnabled
            ? 'Disable Two-Factor Authentication protection on your ApplyZen profile.'
            : 'Scan the QR code below using your Authenticator app and enter the 6-digit OTP code.'}
        </p>

        <form onSubmit={handle2FAVerify} className="space-y-4">
          {twoFactorError && (
            <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">error</span> {twoFactorError}
            </div>
          )}
          {twoFactorSuccess && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400 text-xs rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              {is2faEnabled ? '2FA enabled successfully!' : '2FA disabled successfully!'}
            </div>
          )}

          {!is2faEnabled && (
            <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800">
              <svg className="w-32 h-32 text-slate-900 dark:text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="10" y="10" width="25" height="25" strokeWidth="4" />
                <rect x="15" y="15" width="15" height="15" fill="currentColor" />
                <rect x="65" y="10" width="25" height="25" strokeWidth="4" />
                <rect x="70" y="15" width="15" height="15" fill="currentColor" />
                <rect x="10" y="65" width="25" height="25" strokeWidth="4" />
                <rect x="15" y="70" width="15" height="15" fill="currentColor" />
                <rect x="45" y="45" width="10" height="10" fill="currentColor" />
                <rect x="45" y="10" width="10" height="20" fill="currentColor" />
                <rect x="10" y="45" width="20" height="10" fill="currentColor" />
                <rect x="65" y="45" width="25" height="10" fill="currentColor" />
                <rect x="45" y="65" width="10" height="25" fill="currentColor" />
                <rect x="65" y="65" width="10" height="10" fill="currentColor" />
                <rect x="80" y="80" width="10" height="10" fill="currentColor" />
              </svg>
              <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold">Key: APZEN775M9</p>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-555">
              {is2faEnabled ? 'Enter current OTP to disable' : 'Enter 6-digit Authenticator Code'}
            </label>
            <input
              type="text"
              maxLength={6}
              placeholder="000000"
              className="w-full text-center tracking-[8px] bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-lg font-bold text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              value={twoFactorOtp}
              onChange={(e) => setTwoFactorOtp(e.target.value.replace(/\D/g, ''))}
            />
          </div>

          <div className="flex gap-3 justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-slate-250 dark:border-slate-750 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-colors ${is2faEnabled ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}
            >
              {is2faEnabled ? 'Disable 2FA' : 'Verify & Enable'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
