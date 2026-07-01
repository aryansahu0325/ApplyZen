import React, { useState } from 'react';
import ChangePasswordModal from '../modals/ChangePasswordModal';
import TwoFactorModal from '../modals/TwoFactorModal';
import ExportDataModal from '../modals/ExportDataModal';
import DeleteAccountModal from '../modals/DeleteAccountModal';

export default function SecurityPrivacySection() {
  const [activeModal, setActiveModal] = useState(null);
  const [is2faEnabled, setIs2faEnabled] = useState(() => {
    return localStorage.getItem('applyzen_2fa_enabled') === 'true';
  });

  return (
    <section className="glass-card border border-slate-200/80 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-sm">
      <div className="border-b border-slate-200/60 dark:border-slate-800/60 px-6 py-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-emerald-700 text-[20px]">security</span>
        <h3 className="font-black text-black text-sm uppercase tracking-wider">Security &amp; Privacy</h3>
      </div>
      <div className="p-8">
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <div className="py-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm">Password</p>
              <p className="text-xs text-slate-550">Last changed 3 months ago</p>
            </div>
            <button
              onClick={() => setActiveModal('password')}
              className="px-6 py-2 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-sm text-black hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Change Password
            </button>
          </div>
          <div className="py-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm">Two-Factor Authentication</p>
              <p className="text-xs text-slate-555">
                {is2faEnabled ? (
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span> Enabled
                  </span>
                ) : (
                  "Add an extra layer of security to your account."
                )}
              </p>
            </div>
            <button
              onClick={() => setActiveModal('2fa')}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${is2faEnabled ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
            >
              {is2faEnabled ? 'Disable 2FA' : 'Enable 2FA'}
            </button>
          </div>
          <div className="py-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm">Data Export</p>
              <p className="text-xs text-slate-555">Download a copy of your application history and profile data.</p>
            </div>
            <button
              onClick={() => setActiveModal('export')}
              className="px-6 py-2 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-sm text-black hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Export All
            </button>
          </div>
          <div className="py-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm text-red-500 font-bold">Delete Account</p>
              <p className="text-xs text-slate-555">Permanently remove all data and close your ApplyZen account.</p>
            </div>
            <button onClick={() => setActiveModal('delete')} className="text-red-500 font-semibold text-sm hover:underline">Delete Account</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal === 'password' && <ChangePasswordModal onClose={() => setActiveModal(null)} />}
      {activeModal === '2fa' && (
        <TwoFactorModal 
          is2faEnabled={is2faEnabled} 
          setIs2faEnabled={setIs2faEnabled} 
          onClose={() => setActiveModal(null)} 
        />
      )}
      {activeModal === 'export' && <ExportDataModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'delete' && <DeleteAccountModal onClose={() => setActiveModal(null)} />}
    </section>
  );
}
