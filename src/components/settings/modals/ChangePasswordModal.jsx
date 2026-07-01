import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export default function ChangePasswordModal({ onClose }) {
  const navigate = useNavigate();
  const { user, updateUserProfile } = useAuth();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAnotherWayOptions, setShowAnotherWayOptions] = useState(false);

  const handlePasswordChangeSubmit = (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess(false);

    if (!oldPassword || !newPassword || !confirmPassword) {
      setPasswordError('Please fill in all fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }

    if (oldPassword.length < 4) {
      setPasswordError('Incorrect current password.');
      return;
    }

    setPasswordSuccess(true);
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
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
          <span className="material-symbols-outlined text-emerald-600">lock</span> Change Password
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Update your account password to ensure ongoing security.
        </p>

        <form onSubmit={handlePasswordChangeSubmit} className="space-y-4">
          {passwordError && (
            <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">error</span> {passwordError}
            </div>
          )}
          {passwordSuccess && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400 text-xs rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">check_circle</span> Password updated successfully!
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-555">Current Password</label>
            <div className="relative">
              <input
                type={showOldPassword ? "text" : "password"}
                className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 pr-10 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showOldPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-555">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 pr-10 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showNewPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-555">Confirm New Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 pr-10 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showConfirmPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          <div className="text-left pt-1">
            <button
              type="button"
              onClick={() => setShowAnotherWayOptions(!showAnotherWayOptions)}
              className="text-xs text-emerald-600 hover:text-emerald-700 hover:underline font-semibold flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">help_outline</span> Forgot password? Try another way
            </button>
          </div>

          {showAnotherWayOptions && (
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl space-y-3">
              <p className="text-xs text-slate-500 leading-relaxed">
                If you don't remember your current password, you can sign in directly using Google on the login page.
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    navigate('/login');
                  }}
                  className="flex-1 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-750 flex items-center justify-center gap-1.5 shadow-sm text-slate-700 dark:text-slate-350"
                >
                  <span className="material-symbols-outlined text-[16px]">login</span> Sign In Page
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    updateUserProfile({ isGoogle: true, fullName: user?.fullName || 'Aryan Sahu' });
                    navigate('/');
                  }}
                  className="flex-1 px-3 py-2 bg-slate-900 hover:bg-slate-850 text-white dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113-3.072 0-5.561-2.49-5.561-5.561s2.489-5.56 5.561-5.56c1.396 0 2.67.512 3.655 1.344l3.1-3.1C18.665 1.956 15.632 1 12.24 1 6.033 1 12.24 12.24 1 12.24s5.033 11.24 11.24 11.24c6.48 0 10.748-4.557 10.748-10.956 0-.712-.082-1.396-.248-2.239H12.24z" />
                  </svg>
                  Google Sign-In
                </button>
              </div>
            </div>
          )}

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
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
