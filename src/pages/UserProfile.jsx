import { Edit3, Camera, MapPin, Mail, BadgeCheck, ShieldAlert, User, Briefcase, Link, Code, Lock, Key, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Import security modals
import ChangePasswordModal from '../components/settings/modals/ChangePasswordModal';
import TwoFactorModal from '../components/settings/modals/TwoFactorModal';
import DeleteAccountModal from '../components/settings/modals/DeleteAccountModal';

export default function UserProfile() {
  const navigate = useNavigate();
  const { user, updateUserProfile } = useAuth();

  // Active modals state
  const [activeModal, setActiveModal] = useState(null); // 'password' | '2fa' | 'delete' | 'verify' | 'portfolio'
  
  // 2FA state synced with localStorage
  const [is2faEnabled, setIs2faEnabled] = useState(() => {
    return localStorage.getItem('applyzen_2fa_enabled') === 'true';
  });

  // Verification process state
  const [verifyPhone, setVerifyPhone] = useState('');
  const [verifyOtp, setVerifyOtp] = useState('');
  const [verifyStep, setVerifyStep] = useState(1); // 1: input phone, 2: input OTP
  const [verifyError, setVerifyError] = useState('');
  const [verifySuccess, setVerifySuccess] = useState(false);

  // Portfolio form state
  const [portfolioUrlInput, setPortfolioUrlInput] = useState(user?.portfolioUrl || '');
  const [portfolioError, setPortfolioError] = useState('');

  // Connected accounts state - initialize from user context or defaults
  const [connectedAccounts, setConnectedAccounts] = useState(() => {
    const saved = user?.connectedAccounts;
    return saved || {
      gmail: true,
      linkedin: true,
      github: true,
      outlook: false
    };
  });

  const handleConnect = (account, url) => {
    window.open(url, '_blank');
    const newState = { ...connectedAccounts, [account]: true };
    setConnectedAccounts(newState);
    updateUserProfile({ connectedAccounts: newState });
  };

  const handleDisconnect = (account) => {
    const newState = { ...connectedAccounts, [account]: false };
    setConnectedAccounts(newState);
    updateUserProfile({ connectedAccounts: newState });
  };

  // Dynamic portfolio progress calculation
  const hasPortfolio = !!user?.portfolioUrl;
  const progressPercent = hasPortfolio ? 100 : 90;
  const dashOffset = 175.9 * (1 - progressPercent / 100);

  // Read dynamic values from user context
  const fullName = user?.fullName || "Aman Kumar";
  const email = user?.email || "aman.kumar@example.com";
  const phone = user?.phone || "+1 (555) 0123-4567";
  const location = user?.location || "San Francisco, CA, USA";
  const bio = user?.bio || "I am a results-driven Senior Product Designer with over 8 years of experience building scalable design systems and user-centric mobile applications. Passionate about AI integration in everyday workflows and bridging the gap between engineering and creative direction. Currently optimizing career transition paths at ApplyZen.";
  const currentRole = user?.currentRole || "Senior Product Designer";
  const industry = user?.industry || "Technology / SaaS";
  const experience = user?.experience || "8.5 Years";
  const isVerified = !!user?.profileVerified;

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    setVerifyError('');

    if (verifyStep === 1) {
      if (!verifyPhone || verifyPhone.length < 10) {
        setVerifyError('Please enter a valid phone number.');
        return;
      }
      setVerifyStep(2);
    } else {
      if (verifyOtp !== '123456') {
        setVerifyError('Incorrect OTP. Try "123456" for demo.');
        return;
      }
      setVerifySuccess(true);
      updateUserProfile({ profileVerified: true });
      setTimeout(() => {
        setActiveModal(null);
        setVerifyStep(1);
        setVerifyPhone('');
        setVerifyOtp('');
        setVerifySuccess(false);
      }, 1500);
    }
  };

  const handlePortfolioSubmit = (e) => {
    e.preventDefault();
    setPortfolioError('');

    if (!portfolioUrlInput) {
      setPortfolioError('Please enter a portfolio URL.');
      return;
    }

    try {
      new URL(portfolioUrlInput.startsWith('http') ? portfolioUrlInput : `https://${portfolioUrlInput}`);
    } catch (_) {
      setPortfolioError('Please enter a valid URL.');
      return;
    }

    updateUserProfile({ portfolioUrl: portfolioUrlInput });
    setActiveModal(null);
  };

  const handleRemovePortfolio = () => {
    updateUserProfile({ portfolioUrl: '' });
    setPortfolioUrlInput('');
  };

  // Helper to render a connected account item
  const renderAccount = (key, name, imgSrc, imgAlt, isIcon, connectUrl) => {
    const isConnected = connectedAccounts[key];
    return (
      <div className={`flex items-center justify-between p-3 bg-white/50 border border-slate-200 rounded-xl hover:border-slate-300 transition-all duration-300 ${!isConnected ? 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100' : ''}`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm overflow-hidden p-1.5 shrink-0">
            {isIcon ? (
              imgSrc
            ) : (
              <img src={imgSrc} className="w-full h-full object-contain" alt={imgAlt} />
            )}
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">{name}</p>
            {isConnected ? (
              <span className="text-[10px] bg-emerald-100 text-primary px-1.5 py-0.5 rounded-md uppercase font-black border border-emerald-200">Connected</span>
            ) : (
              <span className="text-[10px] bg-slate-200 text-slate-500 px-1.5 py-0.5 rounded-md uppercase font-black border border-slate-300">Not Connected</span>
            )}
          </div>
        </div>
        {isConnected ? (
          <button 
            onClick={() => handleDisconnect(key)}
            className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg border border-red-100"
          >
            Disconnect
          </button>
        ) : (
          <button 
            onClick={() => handleConnect(key, connectUrl)}
            className="text-xs font-bold text-primary hover:text-white transition-colors bg-white hover:bg-primary px-4 py-1.5 rounded-lg border border-primary"
          >
            Connect
          </button>
        )}
      </div>
    );
  };
  
  return (
    <div className="space-y-8 animate-fadeIn pb-8 max-w-[1400px] mx-auto">
      
      {/* Hero / Profile Header */}
      <section className={`glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 p-6">
          <button 
            onClick={() => navigate('/settings')}
            className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm"
          >
            <Edit3 className="w-5 h-5" />
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
              <Camera className="w-[16px] h-[16px]" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{fullName}</h2>
            <p className="text-lg text-primary font-bold">{currentRole}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <div className="flex items-center gap-1.5 text-slate-500 font-bold text-sm">
                <MapPin className="w-[18px] h-[18px]" />
                {location}
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 font-bold text-sm">
                <Mail className="w-[18px] h-[18px]" />
                {email}
              </div>
              
              {isVerified ? (
                <div className="flex items-center gap-1.5 text-primary font-bold text-sm bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  <BadgeCheck className="w-[18px] h-[18px]" />
                  Profile Verified
                </div>
              ) : (
                <button
                  onClick={() => setActiveModal('verify')}
                  className="flex items-center gap-1.5 text-amber-700 font-bold text-sm bg-amber-50 hover:bg-amber-100 px-2 py-0.5 rounded-md border border-amber-250 transition-colors shadow-sm"
                >
                  <ShieldAlert className="w-[18px] h-[18px]" />
                  Verify Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Personal & Professional Info */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Personal Info */}
          <div className={`glass-card rounded-2xl p-6`}>
            <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <User className="w-[24px] h-[24px] text-primary" />
                Personal Information
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Full Name</label>
                <p className="text-base text-slate-800 font-bold">{fullName}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Email Address</label>
                <p className="text-base text-slate-800 font-bold">{email}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Phone Number</label>
                <p className="text-base text-slate-800 font-bold">{phone}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Location</label>
                <p className="text-base text-slate-800 font-bold">{location}</p>
              </div>
              <div className="md:col-span-2 space-y-2 mt-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Bio</label>
                <p className="text-sm text-slate-600 leading-relaxed font-medium bg-white/50 p-4 rounded-xl border border-slate-100">
                  {bio}
                </p>
              </div>
              {hasPortfolio && (
                <div className="md:col-span-2 space-y-1.5 mt-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Portfolio URL</label>
                  <div className="flex items-center justify-between p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl">
                    <a 
                      href={user.portfolioUrl.startsWith('http') ? user.portfolioUrl : `https://${user.portfolioUrl}`} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm text-primary font-bold hover:underline"
                    >
                      {user.portfolioUrl}
                    </a>
                    <button 
                      onClick={handleRemovePortfolio}
                      className="text-xs text-red-500 font-semibold hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Professional Info */}
          <div className={`glass-card rounded-2xl p-6`}>
            <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Briefcase className="w-[24px] h-[24px] text-primary" />
                Professional Information
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Current Role</label>
                <p className="text-base text-slate-800 font-bold">{currentRole}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Industry</label>
                <p className="text-base text-slate-800 font-bold">{industry}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Experience</label>
                <p className="text-base text-slate-800 font-bold">{experience}</p>
              </div>
            </div>
          </div>

          {/* Profile Completion Progress */}
          <section className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 flex items-center justify-between gap-8 shadow-sm">
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16 shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-primary/10" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
                  <circle 
                    className="text-primary transition-all duration-500" 
                    cx="32" 
                    cy="32" 
                    fill="transparent" 
                    r="28" 
                    stroke="currentColor" 
                    strokeDasharray="175.9" 
                    strokeDashoffset={dashOffset} 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-black text-primary text-sm">{progressPercent}%</div>
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">Profile Completion</h4>
                <p className="text-sm font-medium text-slate-600 mt-1 max-w-sm">
                  {hasPortfolio 
                    ? "Congratulations! Your profile is 100% complete and fully optimized." 
                    : "Add your portfolio link to reach 100% and unlock high-tier job matches."}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setActiveModal('portfolio')}
              className="px-6 py-2.5 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all shrink-0"
            >
              {hasPortfolio ? 'Edit Portfolio' : 'Add Portfolio'}
            </button>
          </section>

        </div>

        {/* Right Column: Connected Accounts & Security */}
        <div className="space-y-8">
          
          {/* Connected Accounts */}
          <div className={`glass-card rounded-2xl p-6`}>
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 mb-6">
              <Link className="w-[24px] h-[24px] text-primary" />
              Connected Accounts
            </h3>
            <div className="space-y-3">
              {/* Gmail */}
              {renderAccount(
                'gmail',
                'Gmail',
                'https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png',
                'Gmail',
                false,
                'https://accounts.google.com/signin'
              )}
              
              {/* LinkedIn */}
              {renderAccount(
                'linkedin',
                'LinkedIn',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAD6dsOl3iyIXgDwbrFZzJSDiCM-ceHvvVgWS5MdyIjrKGe13AvRxeqzctFgp-QxGaAlthJl_FjEeiyF8JcoZOCzPDqnTldul-a2LTlqn_KK5FVtwQtL9i6riqx8F6WIWmOocWhyfrd3dMFMOrznNTVHSMVqcD19PtRS5gZffHyh_xNp7FV5W_AX09pegvAZoihM8LToRyHFq1sdyEkTdSQhacRogpLaj0B8rfwPscdLwZuAKWKmZPLcIUXIMN8_hCFag08JBbjh1tx',
                'LinkedIn',
                false,
                'https://www.linkedin.com/login'
              )}

              {/* GitHub */}
              {renderAccount(
                'github',
                'GitHub',
                'https://cdn.simpleicons.org/github/181717',
                'GitHub',
                false,
                'https://github.com/login'
              )}

              {/* LeetCode */}
              {user?.leetcode && (
                <div className="flex items-center justify-between p-3 bg-white/50 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors animate-in slide-in-from-top-2 duration-250">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm overflow-hidden p-1.5 shrink-0">
                      <Code className="w-[20px] h-[20px] text-amber-500" />
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
              {renderAccount(
                'outlook',
                'Outlook',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBz_tMONCAuzgWsqeRlfVvKLFS1DiXrmFHZLTDM3vYUBPPjHr5cb3OrXd3AxFNKxNOSTo_KUdE_GjA0r29i2JifK_CP3_onCMqTEkBeBI5cZiv1NdwaPh_tB9yT7j5yNIhXGWqP1MTx9TefrSsPHeugtDGEx1s2B-YZbJAyJ3L0qc8sDOe2R9_uuvD1HNbzi3tOOHAWP9cYyNKeglwzkSr-rFXi1gfnpwbypgDnSJ0VNvRU7jXnGzENLejDcNYEgTE84nh6M2eBwu_E',
                'Outlook',
                false,
                'https://outlook.live.com'
              )}
            </div>
          </div>

          {/* Security Section */}
          <div className={`glass-card rounded-2xl p-6`}>
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 mb-6">
              <Lock className="w-[24px] h-[24px] text-primary" />
              Security
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-800">Two-Factor Authentication</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">Recommended for high security</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={is2faEnabled} 
                    onChange={() => setActiveModal('2fa')} 
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                </label>
              </div>
              
              <div className="pt-5 border-t border-slate-200">
                <button 
                  onClick={() => setActiveModal('password')}
                  className="w-full flex items-center justify-between py-2.5 px-4 bg-white/50 border border-slate-200 rounded-xl hover:bg-white hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center gap-3 text-slate-700">
                    <Key className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-bold">Change Password</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                </button>
              </div>
              
              <button 
                onClick={() => setActiveModal('delete')}
                className="w-full py-3 text-center text-sm font-bold text-red-500 border border-red-200 rounded-xl hover:bg-red-50 hover:border-red-300 transition-colors bg-white/50"
              >
                Delete Account
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Render Security & Feature Modals */}
      {activeModal === 'password' && (
        <ChangePasswordModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === '2fa' && (
        <TwoFactorModal 
          is2faEnabled={is2faEnabled} 
          setIs2faEnabled={(val) => {
            setIs2faEnabled(val);
            localStorage.setItem('applyzen_2fa_enabled', val.toString());
          }} 
          onClose={() => setActiveModal(null)} 
        />
      )}
      {activeModal === 'delete' && (
        <DeleteAccountModal onClose={() => setActiveModal(null)} />
      )}

          {/* Profile Verification Modal */}
      {activeModal === 'verify' && createPortal(
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full my-auto shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-900 dark:text-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setActiveModal(null);
                setVerifyStep(1);
                setVerifyError('');
              }}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <BadgeCheck className="text-emerald-600 w-6 h-6" /> Verify Profile
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Complete verification to unlock higher response rates from hiring partners.
            </p>

            <form onSubmit={handleVerifySubmit} className="space-y-4">
              {verifyError && (
                <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">error</span> {verifyError}
                </div>
              )}
              {verifySuccess && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400 text-xs rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Profile verified successfully!
                </div>
              )}

              {verifyStep === 1 ? (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-555">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 012-3456"
                    className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                    value={verifyPhone}
                    onChange={(e) => setVerifyPhone(e.target.value)}
                  />
                </div>
              ) : (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-555">Enter OTP (Demo Code: 123456)</label>
                  <input
                    type="text"
                    placeholder="123456"
                    maxLength={6}
                    className="w-full text-center tracking-[8px] bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-lg font-bold text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                    value={verifyOtp}
                    onChange={(e) => setVerifyOtp(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
              )}

              <div className="flex gap-3 justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setActiveModal(null);
                    setVerifyStep(1);
                    setVerifyError('');
                  }}
                  className="px-5 py-2.5 border border-slate-250 dark:border-slate-750 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors"
                >
                  {verifyStep === 1 ? 'Send Code' : 'Verify'}
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      {/* Add/Edit Portfolio Modal */}
      {activeModal === 'portfolio' && createPortal(
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full my-auto shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-900 dark:text-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setActiveModal(null);
                setPortfolioError('');
              }}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Link className="text-emerald-600 w-6 h-6" /> {hasPortfolio ? 'Edit Portfolio URL' : 'Add Portfolio URL'}
            </h4>
            <p className="text-sm text-slate-555 dark:text-slate-400 mb-6">
              Enter your professional website or personal portfolio link to increase profile completion to 100%.
            </p>

            <form onSubmit={handlePortfolioSubmit} className="space-y-4">
              {portfolioError && (
                <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">error</span> {portfolioError}
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-555">Portfolio URL</label>
                <input
                  type="text"
                  placeholder="https://myportfolio.com"
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  value={portfolioUrlInput}
                  onChange={(e) => setPortfolioUrlInput(e.target.value)}
                />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setActiveModal(null);
                    setPortfolioError('');
                  }}
                  className="px-5 py-2.5 border border-slate-250 dark:border-slate-750 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors"
                >
                  Save URL
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
