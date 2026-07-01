import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Settings() {
  const navigate = useNavigate();
  const { user, updateUserProfile, logout } = useAuth();

  // Active theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('applyzen_theme') || 'light';
  });

  const fileInputRef = React.useRef(null);
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Profile editing state (always editable, no disabled lock)
  const [profileForm, setProfileForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    leetcode: ''
  });

  // Load user data into form on mount/change
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

  // Modal active state: 'password', '2fa', 'export', 'delete', 'avatar', null
  const [activeModal, setActiveModal] = useState(null);

  // 1. Password fields state
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAnotherWayOptions, setShowAnotherWayOptions] = useState(false);

  // 2. 2FA states
  const [twoFactorOtp, setTwoFactorOtp] = useState('');
  const [twoFactorError, setTwoFactorError] = useState('');
  const [twoFactorSuccess, setTwoFactorSuccess] = useState(false);
  const [is2faEnabled, setIs2faEnabled] = useState(() => {
    return localStorage.getItem('applyzen_2fa_enabled') === 'true';
  });

  // 3. Export states
  const [exportOptions, setExportOptions] = useState({
    profile: true,
    applications: true,
    resumes: true,
    settings: false
  });
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportSuccess, setExportSuccess] = useState(false);

  // 4. Delete states
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [deleteError, setDeleteError] = useState('');

  // Storage states
  const [resumesSize, setResumesSize] = useState(25.4);
  const [coverLettersSize, setCoverLettersSize] = useState(12.1);
  const [cacheSize, setCacheSize] = useState(4.5);
  const [storageLimit, setStorageLimit] = useState(100); // 100 MB default
  const [upgradeStep, setUpgradeStep] = useState('storage'); // 'storage', 'plans', 'checkout', 'success'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvc: '', name: '' });
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // AI Settings states
  const [aiModel, setAiModel] = useState('zen4');
  const [creativity, setCreativity] = useState(80);
  const [responseLength, setResponseLength] = useState('balanced');

  // Mock list of professional avatars
  const avatarList = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBWechQuRFtBEvnmahFJj-H9FdAy0lfVc8ZDQ7cNdWcbtzAcZjI_9t9QCyYesyNjexgXL7LxKKgVwyQL-rUF2QeI_nU9u_pMlTQ11TWcYyI-FUf_8eEO2k6yg-PF-lb1dKjTaoVVeqa8I9Ke8W5ZOX5jnnKcDWu-MFk5a4B6-aCJPKb992B94exxp0ar2A8LgSUO6erPeTX6aDFbihKPxkZ9H9OnZ7i2j3NZ0uIdLFB4qa-WP6DlifiWgsmn2q_IMF0LdRrPdIPemLq",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Lh19y9b56f2s7m_g7R6h-e9f0n_t8YqZ0vW2d-nJ2d6oD7rL8t8qCe6eYwS8V0U2T2O5dF1wT2M=s200",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2S7Y9v9e2P6h4p_s1F6rT8n_m0qZ2l_W3d-y6v-nJ3oD6uR4t5t7qCe5eJwV2S0U4T2O1=s200",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA5L8U9t8h5P5r3t-e9h8Y2k-n0e_r4l_S2d-t5d-nJ4d3oE6t5t9qCe3eRwS2V0U5T2O0=s200"
  ];

  // Reset modal-specific states on close
  useEffect(() => {
    if (!activeModal) {
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setPasswordError('');
      setPasswordSuccess(false);
      setShowOldPassword(false);
      setShowNewPassword(false);
      setShowConfirmPassword(false);
      setShowAnotherWayOptions(false);

      setTwoFactorOtp('');
      setTwoFactorError('');
      setTwoFactorSuccess(false);

      setIsExporting(false);
      setExportProgress(0);
      setExportSuccess(false);

      setDeleteConfirmText('');
      setDeleteError('');

      setUpgradeStep('storage');
      setSelectedPlan(null);
      setCardDetails({ number: '', expiry: '', cvc: '', name: '' });
      setIsProcessingPayment(false);
    }
  }, [activeModal]);

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
      setActiveModal(null);
      setPasswordSuccess(false);
    }, 1500);
  };

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
      setActiveModal(null);
      setTwoFactorSuccess(false);
    }, 1500);
  };

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

  const handleDeleteAccountSubmit = (e) => {
    e.preventDefault();
    setDeleteError('');

    if (deleteConfirmText !== 'DELETE') {
      setDeleteError('Please type "DELETE" to confirm.');
      return;
    }

    logout();
    setActiveModal(null);
    navigate('/');
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      const newLimit = selectedPlan === 'Pro' ? 2000 : 10000;
      setStorageLimit(newLimit);
      setUpgradeStep('success');
    }, 1500);
  };

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
    <div className="animate-fadeIn max-w-5xl mx-auto">
      <div className="p-8 max-w-5xl mx-auto space-y-8 pb-32">
        {/* Section 1: Profile */}
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

        {/* Section 2: Connected Accounts */}
        <section className="glass-card border border-slate-200/80 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-sm">
          <div className="border-b border-slate-200/60 dark:border-slate-800/60 px-6 py-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-700 text-[20px]">link</span>
            <h3 className="font-black text-black text-sm uppercase tracking-wider">Connected Accounts</h3>
          </div>
          <div className="p-8">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div 
                onClick={() => window.open('https://accounts.google.com/signin', '_blank')}
                className="p-4 rounded-xl border border-primary bg-emerald-600/5 flex flex-col gap-4 relative hover:border-emerald-600/50 transition-colors cursor-pointer group shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-red-500">mail</span>
                  </div>
                  <span className="bg-emerald-600/20 text-emerald-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Connected</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-black">Gmail</p>
                  <p className="text-xs text-slate-500">Synced 2m ago</p>
                </div>
              </div>
              <div 
                onClick={() => window.open('https://outlook.live.com', '_blank')}
                className="p-4 rounded-xl border border-red-200 dark:border-red-800 bg-red-500/5 flex flex-col gap-4 hover:border-red-500/40 transition-colors cursor-pointer group shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-blue-600">alternate_email</span>
                  </div>
                  <span className="bg-red-500/10 text-red-500 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Disconnected</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-black">Outlook</p>
                  <p className="text-xs text-red-500/80">Tap to connect</p>
                </div>
              </div>
              <div 
                onClick={() => window.open('https://web.whatsapp.com', '_blank')}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 flex flex-col gap-4 relative overflow-hidden hover:border-emerald-600/40 transition-colors cursor-pointer group shadow-sm animate-pulse-slow"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-green-500">chat</span>
                  </div>
                  <span className="bg-amber-500/15 text-amber-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Pending</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-black">WhatsApp</p>
                  <p className="text-xs text-amber-600 font-bold italic">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Automation Preferences */}
        <section className="glass-card border border-slate-200/80 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-sm">
          <div className="border-b border-slate-200/60 dark:border-slate-800/60 px-6 py-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-700 text-[20px]">smart_toy</span>
            <h3 className="font-black text-black text-sm uppercase tracking-wider">Automation Preferences</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3.5 bg-slate-50-low rounded-xl">
                <div className="flex flex-col">
                  <p className="font-semibold text-sm">Auto Apply</p>
                  <p className="text-xs text-slate-550">Automatically apply to jobs that match 95%+ criteria.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-slate-50-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-3.5 bg-slate-50-low rounded-xl">
                <div className="flex flex-col">
                  <p className="font-semibold text-sm">Auto Generate Cover Letters</p>
                  <p className="text-xs text-slate-555">Use AI to craft bespoke responses for each application.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-slate-50-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Application Strategy</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-black font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500">
                    <option className="text-black bg-white">Quality Focused (Highly Targeted)</option>
                    <option className="text-black bg-white">Quantity Focused (Mass Outreach)</option>
                    <option className="text-black bg-white">Hybrid (Balanced Approach)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-350">AI Confidence Threshold</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-black font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500">
                    <option className="text-black bg-white">Very High (90%+ Match)</option>
                    <option className="text-black bg-white">High (80%+ Match)</option>
                    <option className="text-black bg-white">Moderate (70%+ Match)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: AI Settings */}
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

        {/* Section 5: Theme & Storage */}
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
                  onClick={() => setActiveModal('storage')}
                  className="text-emerald-600 font-bold text-xs flex items-center gap-xs hover:underline"
                >
                  Manage Storage <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Section 6: Security & Privacy */}
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
        </section>
      </div>

      {/* ======================================================== */}
      {/* ======================= MODALS ========================= */}
      {/* ======================================================== */}

      {/* Modals */}

      {/* 2. Change Password Modal */}
      {activeModal === 'password' && (
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full overflow-hidden shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-900 dark:text-slate-100">
            <button
              onClick={() => setActiveModal(null)}
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
                        setActiveModal(null);
                        navigate('/login');
                      }}
                      className="flex-1 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-750 flex items-center justify-center gap-1.5 shadow-sm text-slate-700 dark:text-slate-350"
                    >
                      <span className="material-symbols-outlined text-[16px]">login</span> Sign In Page
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveModal(null);
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
                  onClick={() => setActiveModal(null)}
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
      )}

      {/* 3. 2FA (Two-Factor Authentication) Modal */}
      {activeModal === '2fa' && (
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full overflow-hidden shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-900 dark:text-slate-100">
            <button
              onClick={() => setActiveModal(null)}
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
                  onClick={() => setActiveModal(null)}
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
      )}

      {/* 4. Export All Data Modal */}
      {activeModal === 'export' && (
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full overflow-hidden shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-900 dark:text-slate-100">
            <button
              onClick={() => setActiveModal(null)}
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
                  onClick={() => setActiveModal(null)}
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
      )}

      {/* 5. Delete Account Confirmation Modal */}
      {activeModal === 'delete' && (
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full overflow-hidden shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-900 dark:text-slate-100">
            <button
              onClick={() => setActiveModal(null)}
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
                  onClick={() => setActiveModal(null)}
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
      )}

      {/* 6. Storage Management Modal */}
      {activeModal === 'storage' && (
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl ${upgradeStep === 'plans' ? 'max-w-4xl' : 'max-w-lg'} w-full overflow-hidden shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-900 dark:text-slate-100`}>
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* STEP 1: Storage Management */}
            {upgradeStep === 'storage' && (
              <>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600">storage</span> Manage Storage Space
                </h4>

                {/* Total Storage Progress Bar */}
                <div className="space-y-2 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800 mb-6">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-500">Total Space Used</span>
                    <span className="font-bold text-black dark:text-white">
                      {(resumesSize + coverLettersSize + cacheSize).toFixed(1)} MB / {storageLimit} MB
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-600 transition-all duration-300" 
                      style={{ width: `${((resumesSize + coverLettersSize + cacheSize) / storageLimit) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Category Breakdown */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-blue-500">description</span>
                      <div>
                        <p className="text-sm font-semibold text-black dark:text-white">Resumes & CVs</p>
                        <p className="text-xs text-slate-500">{resumesSize.toFixed(1)} MB used (12 files)</p>
                      </div>
                    </div>
                    <button 
                      disabled={resumesSize === 0}
                      onClick={() => setResumesSize(0)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${resumesSize === 0 ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'bg-red-50 hover:bg-red-100 text-red-600 border-red-200'}`}
                    >
                      Clear Files
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-violet-500">article</span>
                      <div>
                        <p className="text-sm font-semibold text-black dark:text-white">Cover Letters</p>
                        <p className="text-xs text-slate-500">{coverLettersSize.toFixed(1)} MB used (85 files)</p>
                      </div>
                    </div>
                    <button 
                      disabled={coverLettersSize === 0}
                      onClick={() => setCoverLettersSize(0)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${coverLettersSize === 0 ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'bg-red-50 hover:bg-red-100 text-red-600 border-red-200'}`}
                    >
                      Clear Letters
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-amber-500">cached</span>
                      <div>
                        <p className="text-sm font-semibold text-black dark:text-white">Temporary Cache</p>
                        <p className="text-xs text-slate-500">{cacheSize.toFixed(1)} MB used</p>
                      </div>
                    </div>
                    <button 
                      disabled={cacheSize === 0}
                      onClick={() => setCacheSize(0)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${cacheSize === 0 ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'bg-red-50 hover:bg-red-100 text-red-600 border-red-200'}`}
                    >
                      Clear Cache
                    </button>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex gap-3 justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => {
                      setResumesSize(25.4);
                      setCoverLettersSize(12.1);
                      setCacheSize(4.5);
                    }}
                    className="px-4 py-2 border border-slate-250 dark:border-slate-750 rounded-xl text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    Reset Storage Demo
                  </button>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModal(null)}
                      className="px-5 py-2.5 border border-slate-250 dark:border-slate-750 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => setUpgradeStep('plans')}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors"
                    >
                      Upgrade Space
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* STEP 2: Choose Plan (Pricing UI matching landing page) */}
            {upgradeStep === 'plans' && (
              <div className="space-y-6">
                <div className="text-center max-w-xl mx-auto">
                  <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Pricing Plans</span>
                  <h3 className="text-2xl font-black mt-2 mb-2 text-black dark:text-white">Simple, Transparent Pricing</h3>
                  <p className="text-xs text-slate-500">Expand your storage limits and unlock premium templates with a plan that fits your search.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-4">
                  {/* Free Plan */}
                  <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between bg-slate-50/20">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">Free</h4>
                      <p className="text-[10px] text-slate-500 mb-4">Get started for free</p>
                      <div className="flex items-baseline mb-6">
                        <span className="text-2xl font-black text-slate-900 dark:text-white">₹0</span>
                        <span className="text-slate-500 text-xs ml-1">/month</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                          100 MB Storage
                        </li>
                        <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                          Up to 10 applications / mo
                        </li>
                      </ul>
                    </div>
                    <button 
                      disabled={storageLimit === 100}
                      onClick={() => {
                        setStorageLimit(100);
                        setUpgradeStep('storage');
                      }}
                      className="w-full py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-500 disabled:bg-slate-100 dark:disabled:bg-slate-800 dark:disabled:text-slate-500"
                    >
                      {storageLimit === 100 ? 'Current Plan' : 'Select Plan'}
                    </button>
                  </div>

                  {/* Pro Plan */}
                  <div className="border-2 border-emerald-600 rounded-2xl p-6 flex flex-col justify-between bg-white dark:bg-slate-800/40 relative shadow-md">
                    <span className="absolute top-0 right-6 -translate-y-1/2 bg-emerald-600 text-white px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">Most Popular</span>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">Pro</h4>
                      <p className="text-[10px] text-slate-500 mb-4">For serious job seekers</p>
                      <div className="flex items-baseline mb-6">
                        <span className="text-2xl font-black text-emerald-600">₹499</span>
                        <span className="text-slate-500 text-xs ml-1">/month</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                          <strong>2,000 MB (2 GB)</strong> Storage
                        </li>
                        <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                          Unlimited applications
                        </li>
                        <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                          Auto Apply AI Copilot
                        </li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedPlan('Pro');
                        setUpgradeStep('checkout');
                      }}
                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
                    >
                      {storageLimit === 2000 ? 'Re-subscribe' : 'Select Pro Plan'}
                    </button>
                  </div>

                  {/* Premium Plan */}
                  <div className="border border-slate-800 rounded-2xl p-6 flex flex-col justify-between bg-slate-900 dark:bg-slate-950 text-white">
                    <div>
                      <h4 className="text-lg font-bold mb-1">Premium</h4>
                      <p className="text-[10px] text-slate-400 mb-4">For active professionals</p>
                      <div className="flex items-baseline mb-6">
                        <span className="text-2xl font-black">₹999</span>
                        <span className="text-slate-400 text-xs ml-1">/month</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                          <strong>10,000 MB (10 GB)</strong> Storage
                        </li>
                        <li className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                          Everything in Pro
                        </li>
                        <li className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                          LinkedIn Sync Support
                        </li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedPlan('Premium');
                        setUpgradeStep('checkout');
                      }}
                      className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-xl text-xs font-bold transition-colors"
                    >
                      {storageLimit === 10000 ? 'Re-subscribe' : 'Select Premium Plan'}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setUpgradeStep('storage')}
                    className="px-4 py-2 border border-slate-250 dark:border-slate-750 rounded-xl text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2 border border-slate-250 dark:border-slate-750 rounded-xl text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Checkout Payment Gateways */}
            {upgradeStep === 'checkout' && (
              <form onSubmit={handlePaymentSubmit} className="space-y-5">
                <h4 className="text-lg font-bold mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600">credit_card</span> Secure Checkout
                </h4>
                <p className="text-xs text-slate-500">Complete payment to upgrade storage space instantly.</p>

                {/* Plan Summary Card */}
                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined">upgrade</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-black dark:text-white">{selectedPlan} Upgrade Plan</p>
                      <p className="text-[10px] text-slate-500">Includes {selectedPlan === 'Pro' ? '2 GB' : '10 GB'} Storage Limit</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-extrabold text-emerald-600">{selectedPlan === 'Pro' ? '₹499' : '₹999'}</p>
                    <p className="text-[9px] text-slate-400">billed monthly</p>
                  </div>
                </div>

                {/* Credit Card Inputs */}
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Cardholder Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Anshuman Singh"
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                      className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl p-3 text-sm text-black dark:text-white font-bold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Card Number</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required 
                        maxLength={19}
                        placeholder="4111 2222 3333 4444"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim() })}
                        className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl p-3 pl-10 text-sm text-black dark:text-white font-bold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">credit_card</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Expiry Date</label>
                      <input 
                        type="text" 
                        required 
                        maxLength={5}
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                        className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl p-3 text-sm text-black dark:text-white font-bold focus:outline-none focus:ring-1 focus:ring-emerald-500 text-center"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-350">CVC / CVV</label>
                      <input 
                        type="password" 
                        required 
                        maxLength={3}
                        placeholder="•••"
                        value={cardDetails.cvc}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                        className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl p-3 text-sm text-black dark:text-white font-bold focus:outline-none focus:ring-1 focus:ring-emerald-500 text-center"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setUpgradeStep('plans')}
                    className="px-4 py-2.5 border border-slate-250 dark:border-slate-750 rounded-xl text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                    disabled={isProcessingPayment}
                  >
                    Back to Plans
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors flex items-center gap-2"
                    disabled={isProcessingPayment}
                  >
                    {isProcessingPayment ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      `Pay ${selectedPlan === 'Pro' ? '₹499' : '₹999'} & Upgrade`
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 4: Success Receipt */}
            {upgradeStep === 'success' && (
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/30 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-bounce">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-black text-black dark:text-white">Payment Successful!</h4>
                  <p className="text-xs text-slate-500">Your account storage has been upgraded to the {selectedPlan} plan.</p>
                </div>

                {/* Invoice Breakdown */}
                <div className="p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/10 text-left max-w-sm mx-auto space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Upgrade Plan:</span>
                    <span className="font-bold text-black dark:text-white">{selectedPlan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">New Storage Limit:</span>
                    <span className="font-bold text-emerald-600">{selectedPlan === 'Pro' ? '2,000 MB' : '10,000 MB'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Amount Charged:</span>
                    <span className="font-bold text-black dark:text-white">{selectedPlan === 'Pro' ? '₹499' : '₹999'} / month</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-550">Receipt Code:</span>
                    <span className="font-mono text-[10px] text-slate-400">AZ-9087541-MOCK</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveModal(null);
                      setUpgradeStep('storage');
                    }}
                    className="w-full max-w-xs px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md transition-colors"
                  >
                    Back to Settings
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}


    </div>
  );
}
