import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../../context/AuthContext';

export default function ProfileSection() {
  const { user, updateUserProfile } = useAuth();
  
  const fileInputRef = useRef(null);
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [profileForm, setProfileForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    leetcode: ''
  });

  useEffect(() => {
    if (user) {
      setProfileForm({
        fullName: user.fullName || 'Alex Rivera',
        email: user.email || 'alex.rivera@zen.ai',
        phone: user.phone || '+1 (555) 123-4567',
        linkedin: user.linkedin || '',
        github: user.github || '',
        leetcode: user.leetcode || ''
      });
    }
  }, [user]);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(profileForm);
    setProfileSuccess(true);
    setIsEditing(false);
    setTimeout(() => {
      setProfileSuccess(false);
    }, 2000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateUserProfile({ profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="glass-card border border-slate-200/80 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-sm">
      <div className="border-b border-slate-200/60 dark:border-slate-800/60 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-emerald-700 text-[20px]">person</span>
          <h3 className="font-black text-black text-sm uppercase tracking-wider">Profile</h3>
        </div>
        {!isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5 transition-all duration-200 hover:shadow-md"
          >
            <span className="material-symbols-outlined text-[14px]">edit</span>
            Edit Profile
          </button>
        )}
      </div>
      <div className="p-8">
        <form onSubmit={handleProfileSubmit} className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center gap-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
              disabled={!isEditing}
            />
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-slate-100 border-4 border-black dark:border-white overflow-hidden flex items-center justify-center relative shadow-sm">
                <img
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  alt="User Avatar"
                  src={user?.profileImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuBWechQuRFtBEvnmahFJj-H9FdAy0lfVc8ZDQ7cNdWcbtzAcZjI_9t9QCyYesyNjexgXL7LxKKgVwyQL-rUF2QeI_nU9u_pMlTQ11TWcYyI-FUf_8eEO2k6yg-PF-lb1dKjTaoVVeqa8I9Ke8W5ZOX5jnnKcDWu-MFk5a4B6-aCJPKb992B94exxp0ar2A8LgSUO6erPeTX6aDFbihKPxkZ9H9OnZ7i2j3NZ0uIdLFB4qa-WP6DlifiWgsmn2q_IMF0LdRrPdIPemLq"}
                />
                {isEditing && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-white">upload</span>
                  </div>
                )}
              </div>
            </div>
            {isEditing && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-emerald-600 font-semibold text-sm hover:underline"
              >
                Change Photo
              </button>
            )}
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500">Full Name</label>
              <input
                disabled={!isEditing}
                className={`w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm text-black focus:outline-none focus:ring-1 focus:ring-emerald-500 ${!isEditing ? 'opacity-70 cursor-not-allowed bg-slate-50' : 'bg-white'}`}
                type="text"
                value={profileForm.fullName}
                onChange={(e) => setProfileForm({ ...profileForm, fullName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500">Email Address</label>
              <input
                disabled={!isEditing}
                className={`w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm text-black focus:outline-none focus:ring-1 focus:ring-emerald-500 ${!isEditing ? 'opacity-70 cursor-not-allowed bg-slate-50' : 'bg-white'}`}
                type="email"
                value={profileForm.email}
                onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500">Phone Number</label>
              <input
                disabled={!isEditing}
                className={`w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm text-black focus:outline-none focus:ring-1 focus:ring-emerald-500 ${!isEditing ? 'opacity-70 cursor-not-allowed bg-slate-50' : 'bg-white'}`}
                type="text"
                value={profileForm.phone || ''}
                onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500">LinkedIn URL</label>
              <input
                disabled={!isEditing}
                className={`w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm text-black focus:outline-none focus:ring-1 focus:ring-emerald-500 ${!isEditing ? 'opacity-70 cursor-not-allowed bg-slate-50' : 'bg-white'}`}
                placeholder="linkedin.com/in/username"
                type="url"
                value={profileForm.linkedin}
                onChange={(e) => setProfileForm({ ...profileForm, linkedin: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500">GitHub Username</label>
              <input
                disabled={!isEditing}
                className={`w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm text-black focus:outline-none focus:ring-1 focus:ring-emerald-500 ${!isEditing ? 'opacity-70 cursor-not-allowed bg-slate-50' : 'bg-white'}`}
                placeholder="github.com/username"
                type="text"
                value={profileForm.github}
                onChange={(e) => setProfileForm({ ...profileForm, github: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500">LeetCode Username</label>
              <input
                disabled={!isEditing}
                className={`w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 text-sm text-black focus:outline-none focus:ring-1 focus:ring-emerald-500 ${!isEditing ? 'opacity-70 cursor-not-allowed bg-slate-50' : 'bg-white'}`}
                placeholder="leetcode.com/username"
                type="text"
                value={profileForm.leetcode}
                onChange={(e) => setProfileForm({ ...profileForm, leetcode: e.target.value })}
              />
            </div>
            {isEditing ? (
              <div className="md:col-span-2 flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setProfileForm({
                      fullName: '',
                      email: '',
                      phone: '',
                      linkedin: '',
                      github: '',
                      leetcode: ''
                    });
                  }}
                  className="px-4 py-2 border border-red-200 dark:border-red-900 rounded-lg text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                >
                  Reset / Clear Fields
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    if (user) {
                      setProfileForm({
                        fullName: user.fullName || 'Alex Rivera',
                        email: user.email || 'alex.rivera@zen.ai',
                        phone: user.phone || '+1 (555) 123-4567',
                        linkedin: user.linkedin || '',
                        github: user.github || '',
                        leetcode: user.leetcode || ''
                      });
                    }
                  }}
                  className="px-4 py-2 border border-slate-250 dark:border-slate-750 rounded-lg text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-sm transition-colors"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="md:col-span-2 flex items-center justify-end gap-3 pt-2">
                {profileSuccess && (
                  <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1 animate-fadeIn">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    Profile updated successfully!
                  </span>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
