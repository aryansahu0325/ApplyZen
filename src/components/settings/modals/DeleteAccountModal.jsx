import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export default function DeleteAccountModal({ onClose }) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [deleteError, setDeleteError] = useState('');

  const handleDeleteAccountSubmit = (e) => {
    e.preventDefault();
    setDeleteError('');

    if (deleteConfirmText !== 'DELETE') {
      setDeleteError('Please type "DELETE" to confirm.');
      return;
    }

    logout();
    onClose();
    navigate('/');
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

        <h4 className="text-lg font-bold text-red-500 mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined">delete_forever</span> Delete Account Permanently?
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          This action cannot be undone. All resume layouts, job logs, and automation settings will be deleted forever.
        </p>

        <form onSubmit={handleDeleteAccountSubmit} className="space-y-4">
          {deleteError && (
            <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">error</span> {deleteError}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-555">Type <span className="font-bold text-red-500">DELETE</span> to confirm</label>
            <input
              type="text"
              placeholder="DELETE"
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-red-500 focus:outline-none"
              value={deleteConfirmText}
              onChange={(e) => setDeleteConfirmText(e.target.value)}
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
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors"
            >
              Confirm Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
