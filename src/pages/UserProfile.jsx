import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function UserProfile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const glassClass = "bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm";

  return (
    <div className="space-y-8 animate-fadeIn pb-8 max-w-[1400px] mx-auto">
      
      {/* Hero / Profile Header */}
      <section className={`${glassClass} rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 p-6">
          <button 
            onClick={() => navigate('/settings')}
            className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm"
          >
            <span className="material-symbols-outlined">edit</span>
            Edit Profile
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <img 
              alt="User Avatar" 
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md" 
              src={user?.profileImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuBWechQuRFtBEvnmahFJj-H9FdAy0lfVc8ZDQ7cNdWcbtzAcZjI_9t9QCyYesyNjexgXL7LxKKgVwyQL-rUF2QeI_nU9u_pMlTQ11TWcYyI-FUf_8eEO2k6yg-PF-lb1dKjTaoVVeqa8I9Ke8W5ZOX5jnnKcDWu-MFk5a4B6-aCJPKb992B94exxp0ar2A8LgSUO6erPeTX6aDFbihKPxkZ9H9OnZ7i2j3NZ0uIdLFB4qa-WP6DlifiWgsmn2q_IMF0LdRrPdIPemLq"}
            />
            <div 
              onClick={() => navigate('/settings')}
              className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{user?.fullName || "Aman Kumar"}</h2>
            <p className="text-lg text-primary font-bold">Senior Product Designer</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <div className="flex items-center gap-1.5 text-slate-500 font-bold text-sm">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                San Francisco, CA
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 font-bold text-sm">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                {user?.email || "aman.kumar@example.com"}
              </div>
              <div className="flex items-center gap-1.5 text-primary font-bold text-sm bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Profile Verified
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Personal & Professional Info */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Personal Info */}
          <div className={`${glassClass} rounded-2xl p-6`}>
            <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">person</span>
                Personal Information
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Full Name</label>
                <p className="text-base text-slate-800 font-bold">{user?.fullName || "Aman Kumar"}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Email Address</label>
                <p className="text-base text-slate-800 font-bold">{user?.email || "aman.kumar@example.com"}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Phone Number</label>
                <p className="text-base text-slate-800 font-bold">{user?.phone || "+1 (555) 0123-4567"}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Location</label>
                <p className="text-base text-slate-800 font-bold">San Francisco, CA, USA</p>
              </div>
              <div className="md:col-span-2 space-y-2 mt-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Bio</label>
                <p className="text-sm text-slate-600 leading-relaxed font-medium bg-white/50 p-4 rounded-xl border border-slate-100">
                  I am a results-driven Senior Product Designer with over 8 years of experience building scalable design systems and user-centric mobile applications. Passionate about AI integration in everyday workflows and bridging the gap between engineering and creative direction. Currently optimizing career transition paths at ApplyZen.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Info */}
          <div className={`${glassClass} rounded-2xl p-6`}>
            <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">work</span>
                Professional Information
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Current Role</label>
                <p className="text-base text-slate-800 font-bold">Senior Product Designer</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Industry</label>
                <p className="text-base text-slate-800 font-bold">Technology / SaaS</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Experience</label>
                <p className="text-base text-slate-800 font-bold">8.5 Years</p>
              </div>
            </div>
          </div>

          {/* Profile Completion Progress */}
          <section className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 flex items-center justify-between gap-8 shadow-sm">
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16 shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-primary/10" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
                  <circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175.9" strokeDashoffset="17.6" strokeWidth="4" strokeLinecap="round"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-black text-primary text-sm">90%</div>
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">Profile Completion</h4>
                <p className="text-sm font-medium text-slate-600 mt-1 max-w-sm">Add your portfolio link to reach 100% and unlock high-tier job matches.</p>
              </div>
            </div>
            <button className="px-6 py-2.5 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all shrink-0">
              Add Portfolio
            </button>
          </section>

        </div>

        {/* Right Column: Connected Accounts & Security */}
        <div className="space-y-8">
          
          {/* Connected Accounts */}
          <div className={`${glassClass} rounded-2xl p-6`}>
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-[24px]">link</span>
              Connected Accounts
            </h3>
            <div className="space-y-3">
              {/* Gmail */}
              <div className="flex items-center justify-between p-3 bg-white/50 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm overflow-hidden p-1.5 shrink-0">
                    <img src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" className="w-full h-full object-contain" alt="Gmail" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Gmail</p>
                    <span className="text-[10px] bg-emerald-100 text-primary px-1.5 py-0.5 rounded-md uppercase font-black border border-emerald-200">Connected</span>
                  </div>
                </div>
                <button className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg border border-red-100">Disconnect</button>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-center justify-between p-3 bg-white/50 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm overflow-hidden shrink-0">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD6dsOl3iyIXgDwbrFZzJSDiCM-ceHvvVgWS5MdyIjrKGe13AvRxeqzctFgp-QxGaAlthJl_FjEeiyF8JcoZOCzPDqnTldul-a2LTlqn_KK5FVtwQtL9i6riqx8F6WIWmOocWhyfrd3dMFMOrznNTVHSMVqcD19PtRS5gZffHyh_xNp7FV5W_AX09pegvAZoihM8LToRyHFq1sdyEkTdSQhacRogpLaj0B8rfwPscdLwZuAKWKmZPLcIUXIMN8_hCFag08JBbjh1tx" className="w-full h-full object-contain" alt="LinkedIn" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">LinkedIn</p>
                    <span className="text-[10px] bg-emerald-100 text-primary px-1.5 py-0.5 rounded-md uppercase font-black border border-emerald-200">Connected</span>
                  </div>
                </div>
                <button className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg border border-red-100">Disconnect</button>
              </div>

              {/* GitHub */}
              <div className="flex items-center justify-between p-3 bg-white/50 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm shrink-0">
                    <img src="https://cdn.simpleicons.org/github/181717" className="w-5 h-5 opacity-80" alt="GitHub" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">GitHub</p>
                    <span className="text-[10px] bg-emerald-100 text-primary px-1.5 py-0.5 rounded-md uppercase font-black border border-emerald-200">Connected</span>
                  </div>
                </div>
                <button className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg border border-red-100">Disconnect</button>
              </div>

              {/* LeetCode */}
              {user?.leetcode && (
                <div className="flex items-center justify-between p-3 bg-white/50 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors animate-in slide-in-from-top-2 duration-250">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm overflow-hidden p-1.5 shrink-0">
                      <span className="material-symbols-outlined text-amber-500 text-[20px]">code</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">LeetCode</p>
                      <span className="text-[10px] bg-emerald-100 text-primary px-1.5 py-0.5 rounded-md uppercase font-black border border-emerald-200">Connected</span>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-slate-500 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors">{user.leetcode}</button>
                </div>
              )}

              {/* Outlook */}
              <div className="flex items-center justify-between p-3 bg-white/50 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors grayscale opacity-60 hover:grayscale-0 hover:opacity-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm shrink-0">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz_tMONCAuzgWsqeRlfVvKLFS1DiXrmFHZLTDM3vYUBPPjHr5cb3OrXd3AxFNKxNOSTo_KUdE_GjA0r29i2JifK_CP3_onCMqTEkBeBI5cZiv1NdwaPh_tB9yT7j5yNIhXGWqP1MTx9TefrSsPHeugtDGEx1s2B-YZbJAyJ3L0qc8sDOe2R9_uuvD1HNbzi3tOOHAWP9cYyNKeglwzkSr-rFXi1gfnpwbypgDnSJ0VNvRU7jXnGzENLejDcNYEgTE84nh6M2eBwu_E" className="w-5 h-5" alt="Outlook" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Outlook</p>
                    <span className="text-[10px] bg-slate-200 text-slate-500 px-1.5 py-0.5 rounded-md uppercase font-black border border-slate-300">Not Connected</span>
                  </div>
                </div>
                <button className="text-xs font-bold text-primary hover:text-white transition-colors bg-white hover:bg-primary px-4 py-1.5 rounded-lg border border-primary">Connect</button>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className={`${glassClass} rounded-2xl p-6`}>
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-[24px]">security</span>
              Security
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-800">Two-Factor Authentication</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">Recommended for high security</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                </label>
              </div>
              
              <div className="pt-5 border-t border-slate-200">
                <button 
                  onClick={() => navigate('/settings')}
                  className="w-full flex items-center justify-between py-2.5 px-4 bg-white/50 border border-slate-200 rounded-xl hover:bg-white hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">key</span>
                    <span className="text-sm font-bold">Change Password</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
                </button>
              </div>
              
              <button 
                onClick={() => navigate('/settings')}
                className="w-full py-3 text-center text-sm font-bold text-red-500 border border-red-200 rounded-xl hover:bg-red-50 hover:border-red-300 transition-colors bg-white/50"
              >
                Delete Account
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
