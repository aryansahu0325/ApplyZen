import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const firstName = user?.fullName ? user.fullName.split(' ')[0] : 'User';
  return (
    <>
      
{/* Sidebar Shell */}
<aside className="fixed left-0 top-0 h-full w-[280px] bg-surface-container-lowest border-r border-outline-variant flex flex-col z-50">
<div className="px-lg py-xl flex items-center gap-md">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "\"FILL\" 1" }}>bolt</span>
</div>
<div>
<h1 className="font-display text-headline-md font-bold text-primary">ApplyZen</h1>
<p className="font-body-md text-label-sm text-outline">AI Career Automation</p>
</div>
</div>
<nav className="px-md space-y-xs overflow-y-auto custom-scrollbar mb-lg">
{/* Dashboard Active */}
<Link className="flex items-center gap-md px-lg text-primary font-bold border-primary bg-surface-container transition-colors py-sm" to="/dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md">Dashboard</span>
</Link>
<Link className="flex items-center gap-md px-lg text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg py-sm" to="/applications">
<span className="material-symbols-outlined">description</span>
<span className="font-body-md">Applications</span>
</Link>
<Link className="flex items-center gap-md px-lg text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg py-sm" to="/resumes">
<span className="material-symbols-outlined">assignment</span>
<span className="font-body-md">Resumes</span>
</Link><Link className="flex items-center gap-md px-lg text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg py-sm" to="/analytics">
<span className="material-symbols-outlined">analytics</span>
<span className="font-body-md">Analytics</span>
</Link>

<div className="pt-lg pb-sm px-lg">
<span className="text-label-sm uppercase tracking-wider text-outline">Tools</span>
</div>
<Link className="flex items-center gap-md px-lg text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg py-sm" to="/automation">
<span className="material-symbols-outlined">auto_fix</span>
<span className="font-body-md">Automation</span>
</Link>
<Link className="flex items-center gap-md px-lg text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg py-sm" to="/workflow">
<span className="material-symbols-outlined">monitoring</span>
<span className="font-body-md">Workflow Monitor</span>
</Link><Link className="flex items-center gap-md px-lg text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg py-sm" to="/connected-accounts">
<span className="material-symbols-outlined">link</span>
<span className="font-body-md">Connected Accounts</span>
</Link><div className="pt-lg pb-sm px-lg">
<span className="text-label-sm uppercase tracking-wider text-outline">History</span>
</div>
<Link className="flex items-center gap-md px-lg text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg py-sm" to="/history">
<span className="material-symbols-outlined">history</span>
<span className="font-body-md">History</span>
</Link>
</nav>
<div className="p-lg">
<div className="bg-primary p-lg rounded-xl text-white relative overflow-hidden mb-lg">
<div className="relative z-10">
<p className="font-label-md mb-xs opacity-90">Upgrade to Premium</p>
<p className="text-label-sm mb-md opacity-80 leading-snug">Unlock unlimited AI credits and advanced analytics.</p>
<button className="w-full bg-white text-primary font-bold py-sm px-md rounded-lg text-label-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-xs">
                        Upgrade Now <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white opacity-10 rounded-full blur-xl"></div>
</div>
<div className="space-y-xs">
<Link className="flex items-center gap-md px-lg py-md text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg" to="/settings" style={{ "transform": "scale(0.98)" }}>
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md">Settings</span>
</Link>
<Link className="flex items-center gap-md px-lg py-md text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg" to="/help">
<span className="material-symbols-outlined">help</span>
<span className="font-body-md">Help</span>
</Link>
<button 
  onClick={logout}
  className="w-full flex items-center gap-md px-lg py-md text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg text-left"
>
  <span className="material-symbols-outlined">logout</span>
  <span className="font-body-md">Log Out</span>
</button>
</div>
</div>
</aside>
{/* Top Navigation Bar */}
<header className="fixed top-0 right-0 w-[calc(100%-280px)] bg-surface border-b border-outline-variant z-40 flex justify-between items-center px-lg px-xl h-12">
<div className="flex items-center bg-surface-container-low border border-outline-variant rounded-full px-md py-xs w-96">
<span className="material-symbols-outlined text-outline">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md w-full ml-sm outline-none" placeholder="Search anything..." type="text" />
<span className="text-label-sm text-outline font-mono px-xs border border-outline-variant rounded">⌘K</span>
</div>
<div className="flex items-center gap-lg">
<div className="flex items-center gap-md">
<button className="relative p-sm hover:bg-surface-container-high rounded-full transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-sm hover:bg-surface-container-high rounded-full transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">chat_bubble</span>
</button>
</div>
<div className="h-8 w-[1px] bg-outline-variant"></div>
<div className="flex items-center gap-md cursor-pointer hover:bg-surface-container-high p-xs pr-md rounded-full transition-colors">
<div className="w-10 h-10 rounded-full bg-cover bg-center" data-alt="Professional corporate headshot of a young male professional named Aman, smiling confidently in front of a neutral office background, clean modern lighting." style={{ "backgroundImage": "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBdOpaLAVQ2ZkwDPXAK0-pzWy_KVhOXoJcoCJS82j965NeP7qwGd5YEjYh_QXOb-NKWjbHFQ9oOYL4fc9FIJTlTAgysmSm-3ZVSKrfe5jLjQ87ELTEDbwWj_3gMzAduhhGJepS0TOlxZiK6iGOkoAXyUDSwcrPW7tB4N0mraGkEh0VXTUKkbNmYZyRQH0x_NwDEuDMxc6vI7bjNgSwUL0Dd4ZWaOSi1YUVIWMXaiBao1GADF_V0MR7z8UYd9M9nHuvT_p1iCUTKzIkx\")" }}></div>
<div className="hidden lg:block">
<p className="text-label-md font-bold text-on-surface leading-tight">{user?.fullName || 'User'}</p>
<p className="text-label-sm text-outline leading-tight">Premium Plan</p>
</div>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="ml-[280px] min-h-screen pt-sm"><div className="max-w-[1280px] mx-auto p-lg">
{/* Welcome Header */}
<div className="flex justify-between items-end mb-sm">
<div>
<h2 className="font-display text-headline-lg text-on-surface mb-xs"><div><br /></div>Good morning, {firstName}! 👋</h2>
<p className="font-body-lg text-outline">Here's what's happening with your career journey today.</p>
</div>
<button className="bg-primary text-white font-bold py-sm px-xl rounded-xl flex items-center gap-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
<span className="material-symbols-outlined">add</span>
                    Add Opportunity
                </button>
</div>
{/* Metrics Row */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-md mb-sm">
{/* Card 1 */}
<div className="glass p-md rounded-2xl border border-white/40 shadow-sm flex flex-col gap-sm">
<div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
<span className="material-symbols-outlined text-[20px]">work</span>
</div>
<div>
<p className="text-label-sm text-outline">Total Opportunities</p>
<h3 className="text-headline-md font-bold">128</h3>
<div className="flex items-center text-emerald-600 text-label-sm font-bold gap-xs mt-xs">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +14
                        </div>
</div>
</div>
{/* Card 2 */}
<div className="glass p-md rounded-2xl border border-white/40 shadow-sm flex flex-col gap-sm">
<div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined text-[20px]">send</span>
</div>
<div>
<p className="text-label-sm text-outline">Applications Submitted</p>
<h3 className="text-headline-md font-bold">56</h3>
<div className="flex items-center text-emerald-600 text-label-sm font-bold gap-xs mt-xs">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +8
                        </div>
</div>
</div>
{/* Card 3 */}
<div className="glass p-md rounded-2xl border border-white/40 shadow-sm flex flex-col gap-sm">
<div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
<span className="material-symbols-outlined text-[20px]">event</span>
</div>
<div>
<p className="text-label-sm text-outline">Interviews</p>
<h3 className="text-headline-md font-bold">12</h3>
<div className="flex items-center text-emerald-600 text-label-sm font-bold gap-xs mt-xs">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +3
                        </div>
</div>
</div>
{/* Card 4 */}
<div className="glass p-md rounded-2xl border border-white/40 shadow-sm flex flex-col gap-sm">
<div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
<span className="material-symbols-outlined text-[20px]">military_tech</span>
</div>
<div>
<p className="text-label-sm text-outline">Offers</p>
<h3 className="text-headline-md font-bold">3</h3>
<div className="bg-orange-100 text-orange-700 text-[10px] uppercase tracking-widest font-bold px-sm py-[2px] rounded-full inline-block mt-xs">
                            Congrats!
                        </div>
</div>
</div>
{/* Card 5 */}
<div className="glass p-md rounded-2xl border border-white/40 shadow-sm flex flex-col gap-sm">
<div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center text-rose-600">
<span className="material-symbols-outlined text-[20px]">cancel</span>
</div>
<div>
<p className="text-label-sm text-outline">Rejections</p>
<h3 className="text-headline-md font-bold">7</h3>
<p className="text-label-sm text-outline mt-xs">This month</p>
</div>
</div>
</div>
{/* Two Column Main Grid */}
<div className="grid grid-cols-12 items-start gap-md mb-sm">
{/* Left Column (Wide) */}
<div className="col-span-12 lg:col-span-8 space-y-lg">
{/* Application Overview Chart Card */}
<div className="glass rounded-2xl border border-white shadow-sm relative overflow-hidden h-[340px] mb-lg p-md">
<div className="flex justify-between items-center mb-md">
<h4 className="font-headline-md">Application Overview</h4>
<select className="bg-surface-container-low border-outline-variant text-label-sm rounded-lg py-xs px-sm outline-none focus:ring-1 focus:ring-primary">
<option>This Month</option>
<option>Last Quarter</option>
</select>
</div>
<div className="flex gap-md mb-sm">
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-label-sm text-outline">Applications</span>
</div>
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-label-sm text-outline">Interviews</span>
</div>
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-label-sm text-outline">Offers</span>
</div>
</div>
{/* Mock Chart Placeholder (SVG) */}
<div className="w-full h-48 relative mt-sm">
<svg className="w-full h-full" viewBox="0 0 800 200">
<line stroke="#e5e7eb" strokeWidth="1" x1="0" x2="800" y1="0" y2="0"></line>
<line stroke="#e5e7eb" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
<line stroke="#e5e7eb" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
<line stroke="#e5e7eb" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
<path d="M0,180 L100,160 L200,130 L300,140 L400,110 L500,90 L600,60 L700,40 L800,30" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="400" cy="110" fill="#6366f1" r="4"></circle>
<path d="M0,190 L100,180 L200,170 L300,165 L400,150 L500,140 L600,120 L700,115 L800,110" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeWidth="3"></path>
<path d="M0,195 L100,195 L200,190 L300,192 L400,185 L500,188 L600,180 L700,175 L800,170" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="flex justify-between mt-xs text-label-sm text-outline px-sm">
<span className="">May 1</span><span className="">May 8</span><span className="">May 15</span><span className="">May 22</span><span className="">May 29</span><span className="">Jun 1</span>
</div>
</div>
</div>
{/* Top Opportunities */}
<div className="glass rounded-2xl border border-white shadow-sm p-md">
<div className="flex justify-between items-center mb-md">
<h4 className="font-headline-md">Top Opportunities</h4>
<a className="text-primary text-label-md font-bold hover:underline" href="#">View All</a>
</div>
<div className="space-y-sm">
{/* Job 1 */}
<div className="flex items-center justify-between p-sm border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-colors group">
<div className="flex items-center gap-md">
<div className="w-10 h-10 bg-white border border-outline-variant/50 rounded-lg flex items-center justify-center p-xs">
<div className="w-full h-full bg-cover bg-center" style={{ "backgroundImage": "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuB6g8AVFT2-mysUZu3PRrxNNWj5zxnf6bh6rr-zF9DzDg23-I-ygsUgcGTMBuupHod7tMYZUnUAEmoUakx-8GDTZuD-evZRx2o9FV2QnqlDpq64WUlK6JV5inNyvEufxmO-RUKvPLiWRpaBfnfS8f4kXuzmRP1mxML33B9KQrz5kK9NnmMuBh5WKmKAvbAlodNpSuZAUpMLDFmSm-bCBIf-lsKSw3A7ms1CUBeISDvbUKGe6PIG5qX2SkR7WfrrmXBkT4cmcdK8kac7\")" }}></div>
</div>
<div>
<p className="font-body-md font-bold">Software Engineering Intern</p>
<p className="text-label-sm text-outline">Google • Remote</p>
</div>
</div>
<div className="flex items-center gap-lg">
<span className="bg-emerald-50 text-emerald-700 text-label-sm font-bold px-md py-xs rounded-full">95% Match</span>
<button className="text-primary font-bold text-label-md group-hover:translate-x-1 transition-transform inline-flex items-center">Apply <span className="material-symbols-outlined text-[16px] ml-xs">open_in_new</span></button>
</div>
</div>
{/* Job 2 */}
<div className="flex items-center justify-between p-sm border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-colors group">
<div className="flex items-center gap-md">
<div className="w-10 h-10 bg-white border border-outline-variant/50 rounded-lg flex items-center justify-center p-xs">
<div className="w-full h-full bg-cover bg-center" style={{ "backgroundImage": "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBlG1GTFgg1uHxvP6kLY6PtDOgq_vcjjJGJ2r4AzqNvbdGtctj8gJ2QSqZ9nQux2yWSS6HlQVNyl3CJnqDmzw-P5pxFg8mEpWJNCz-oeue4LMeWMvfwx2LkDKxxek1gty_AKpM57fGm2ihWDM8T6L2fN-BjMCXf0DdFjtDRwagD7-WlSlmeGx3jZAEtrx3KTWfx-WrjFEwu9yBISt6cuoKo0pW5DOxmg6R0lBfDgsAlvZBAHwMOsQSAKRMaUX7_mz1ROOPf6By1c6Rs\")" }}></div>
</div>
<div>
<p className="font-body-md font-bold">SDE Intern</p>
<p className="text-label-sm text-outline">Microsoft • India</p>
</div>
</div>
<div className="flex items-center gap-lg">
<span className="bg-emerald-50 text-emerald-700 text-label-sm font-bold px-md py-xs rounded-full">90% Match</span>
<button className="text-primary font-bold text-label-md group-hover:translate-x-1 transition-transform inline-flex items-center">Apply <span className="material-symbols-outlined text-[16px] ml-xs">open_in_new</span></button>
</div>
</div>
</div>
</div>
</div>
{/* Right Column (Narrow) */}
<div className="col-span-12 lg:col-span-4 gap-lg">
{/* Recent Activities Timeline */}
<div className="glass rounded-2xl border border-white shadow-sm p-md">
<div className="flex justify-between items-center mb-md">
<h4 className="font-headline-md">Recent Activities</h4>
<a className="text-primary text-label-md font-bold hover:underline" href="#">View All</a>
</div>
<div className="relative space-y-md before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
{/* Activity 1 */}
<div className="flex gap-sm relative">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center z-10">
<span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="text-label-md font-bold">Applied to Google</p>
<span className="text-[10px] text-outline">2h ago</span>
</div>
</div>
</div>
{/* Activity 2 */}
<div className="flex gap-sm relative">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center z-10">
<span className="material-symbols-outlined text-blue-600 text-[16px]">calendar_today</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="text-label-md font-bold">Interview: Microsoft</p>
<span className="text-[10px] text-outline">5h ago</span>
</div>
</div>
</div>
{/* Activity 3 */}
<div className="flex gap-sm relative">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center z-10">
<span className="material-symbols-outlined text-indigo-600 text-[16px]">description</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="text-label-md font-bold">Resume Optimized</p>
<span className="text-[10px] text-outline">1d ago</span>
</div>
</div>
</div>
</div>
</div>
{/* AI Career Assistant */}
<div className="glass rounded-2xl border border-white shadow-sm bg-gradient-to-br from-indigo-50/50 to-emerald-50/50 p-md">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-indigo-600 text-[20px]" style={{ "fontVariationSettings": "\"FILL\" 1" }}>auto_awesome</span>
<h4 className="font-headline-md">AI Assistant</h4>
</div>
<div className="bg-white/80 p-sm rounded-xl mb-md border border-outline-variant/30 text-label-md leading-relaxed">
                            Hi {firstName}! 👋 I found <span className="font-bold text-indigo-600">5 new jobs</span> for you.
                        </div>
<button className="w-full bg-indigo-600 text-white font-bold py-sm rounded-xl mb-md hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
                            Review Now
                        </button>
<div className="space-y-xs">
<button className="w-full flex justify-between items-center bg-white p-xs px-sm rounded-lg border border-outline-variant/30 hover:border-indigo-400 group transition-all">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-indigo-500 text-[18px]">psychology</span>
<span className="text-label-sm font-medium">Optimize Resume</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform text-[18px]">chevron_right</span>
</button>
<button className="w-full flex justify-between items-center bg-white p-xs px-sm rounded-lg border border-outline-variant/30 hover:border-indigo-400 group transition-all">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-indigo-500 text-[18px]">edit_note</span>
<span className="text-label-sm font-medium">Cover Letter</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
{/* Bottom Row */}

{/* Dashboard Preview Link */}

</div></main>








    </>
  );
}
