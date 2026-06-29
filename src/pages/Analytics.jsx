import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Analytics() {
  const { logout } = useAuth();
  return (
    <>
      
{/* Navigation Shell (Desktop SideNav) */}
<aside className="hidden md:flex flex-col h-screen p-md fixed left-0 top-0 border-r border-outline-variant bg-surface-container-lowest w-[280px] z-40">
<div className="flex items-center gap-sm mb-xl">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>insights</span>
</div>
<div>
<h1 className="text-headline-md font-black text-primary leading-none">ApplyZen</h1>
<p className="text-label-sm text-on-surface-variant opacity-70">Career Intelligence</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<div className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-low rounded-lg cursor-pointer transition-all duration-150">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-label-md font-label-md">Dashboard</span>
</div>
<div className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-low rounded-lg cursor-pointer transition-all duration-150">
<span className="material-symbols-outlined">assignment</span>
<span className="text-label-md font-label-md">Applications</span>
</div>
<div className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-low rounded-lg cursor-pointer transition-all duration-150">
<span className="material-symbols-outlined">description</span>
<span className="text-label-md font-label-md">Resume Builder</span>
</div>
<div className="flex items-center gap-md px-md py-sm bg-secondary-container text-on-secondary-container rounded-lg cursor-pointer transition-transform active:scale-[0.98]">
<span className="material-symbols-outlined">analytics</span>
<span className="text-label-md font-label-md">Analytics</span>
</div>
</nav>
<div className="mt-auto space-y-md">
<div className="bg-primary-container/10 p-md rounded-xl border border-primary-container/20">
<p className="text-label-sm font-bold text-primary mb-xs">PRO FEATURE</p>
<p className="text-label-sm text-on-surface-variant mb-md">Unlock predictive interview insights.</p>
<button className="w-full bg-primary text-on-primary py-2 rounded-lg text-label-md font-bold hover:brightness-110 transition-all">Upgrade to Pro</button>
</div>
<div className="pt-md border-t border-outline-variant space-y-1">
<div className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-low rounded-lg cursor-pointer transition-all">
<span className="material-symbols-outlined">help</span>
<span className="text-label-md font-label-md">Help Center</span>
</div>
<button
  onClick={logout}
  className="w-full text-left flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-low rounded-lg cursor-pointer transition-all text-error"
>
<span className="material-symbols-outlined">logout</span>
<span className="text-label-md font-label-md">Log Out</span>
</button>
</div>
</div>
</aside>
{/* Main Content Canvas */}
<main className="md:ml-[280px] min-h-screen">
{/* TopAppBar */}
<header className="flex justify-between items-center w-full px-lg h-16 sticky top-0 z-50 bg-surface border-b border-outline-variant">
<div className="flex items-center gap-md">
<span className="md:hidden material-symbols-outlined text-on-surface cursor-pointer">menu</span>
<h2 className="font-headline-md text-headline-md text-primary font-bold">Analytics</h2>
</div>
<div className="flex items-center gap-lg">
<div className="hidden md:flex items-center bg-surface-container-low px-md py-2 rounded-full border border-outline-variant w-64">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md w-full placeholder:text-on-surface-variant/50" placeholder="Search insights..." type="text"/>
</div>
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">notifications</span>
</div>
</div>
</header>
{/* Analytics Dashboard Content */}
<div className="p-lg space-y-lg">
{/* Interactive Filters Section */}
<div className="flex flex-col sm:flex-row gap-md items-start sm:items-center justify-between mb-lg">
<div className="flex gap-md w-full sm:w-auto">
<select className="bg-surface-container-lowest border-outline-variant rounded-lg text-body-md px-md py-2 focus:ring-primary focus:border-primary cursor-pointer min-w-[160px]">
<option>This Month</option>
<option selected="">Last 3 Months</option>
<option>Year to Date</option>
<option>All Time</option>
</select>
<select className="bg-surface-container-lowest border-outline-variant rounded-lg text-body-md px-md py-2 focus:ring-primary focus:border-primary cursor-pointer min-w-[160px]">
<option>All Role Types</option>
<option>Full-time</option>
<option>Contract</option>
<option>Remote</option>
</select>
</div>
<div className="text-label-md text-on-surface-variant">
                Last updated: <span className="font-bold">Today, 09:42 AM</span>
</div>
</div>
{/* Top Metrics Row */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-sm">
<span className="text-label-md font-medium text-on-surface-variant">Average ATS Score</span>
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="text-headline-lg font-bold">84</span>
<span className="text-label-sm text-on-surface-variant">/ 100</span>
</div>
<div className="mt-md flex items-center text-primary gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="text-label-sm font-bold">+12% vs last period</span>
</div>
</div>
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-sm">
<span className="text-label-md font-medium text-on-surface-variant">Interview Rate</span>
<span className="material-symbols-outlined text-primary">groups</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="text-headline-lg font-bold">18.5</span>
<span className="text-label-sm text-on-surface-variant">%</span>
</div>
<div className="mt-md flex items-center text-primary gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="text-label-sm font-bold">+2.4% vs last period</span>
</div>
</div>
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-sm">
<span className="text-label-md font-medium text-on-surface-variant">Applications Sent</span>
<span className="material-symbols-outlined text-primary">send</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="text-headline-lg font-bold">42</span>
<span className="text-label-sm text-on-surface-variant">this month</span>
</div>
<div className="mt-md flex items-center text-tertiary gap-1">
<span className="material-symbols-outlined text-sm">trending_down</span>
<span className="text-label-sm font-bold">-5% vs last month</span>
</div>
</div>
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-sm">
<span className="text-label-md font-medium text-on-surface-variant">Time-to-Offer</span>
<span className="material-symbols-outlined text-primary">schedule</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="text-headline-lg font-bold">34</span>
<span className="text-label-sm text-on-surface-variant">Avg Days</span>
</div>
<div className="mt-md flex items-center text-on-surface-variant/50 gap-1">
<span className="material-symbols-outlined text-sm">horizontal_rule</span>
<span className="text-label-sm font-bold">Stable performance</span>
</div>
</div>
</div>
{/* Main Analytics Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
{/* Application Success Funnel */}
<div className="lg:col-span-2 bg-surface-container-lowest p-lg rounded-2xl border border-outline-variant shadow-sm">
<div className="flex items-center justify-between mb-xl">
<h3 className="text-headline-md text-on-surface font-bold">Application Success Funnel</h3>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_vert</span>
</div>
<div className="flex flex-col h-[300px] justify-end space-y-4">
<div className="flex items-end gap-lg h-full px-lg">
<div className="flex-1 flex flex-col items-center group">
<div className="w-full bg-secondary-container rounded-t-lg success-funnel-bar h-full relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-primary">156</div>
</div>
<span className="text-label-sm mt-4 text-on-surface-variant">Applied</span>
</div>
<div className="flex-1 flex flex-col items-center group">
<div className="w-full bg-primary-container rounded-t-lg success-funnel-bar h-[65%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-primary">102</div>
</div>
<span className="text-label-sm mt-4 text-on-surface-variant">Screened</span>
</div>
<div className="flex-1 flex flex-col items-center group">
<div className="w-full bg-primary/60 rounded-t-lg success-funnel-bar h-[28%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-primary">29</div>
</div>
<span className="text-label-sm mt-4 text-on-surface-variant">Interviewed</span>
</div>
<div className="flex-1 flex flex-col items-center group">
<div className="w-full bg-primary rounded-t-lg success-funnel-bar h-[8%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-primary">4</div>
</div>
<span className="text-label-sm mt-4 text-on-surface-variant">Offers</span>
</div>
</div>
</div>
</div>
{/* Success Rate by Platform */}
<div className="bg-surface-container-lowest p-lg rounded-2xl border border-outline-variant shadow-sm">
<h3 className="text-headline-md text-on-surface font-bold mb-xl">Platform Performance</h3>
<div className="space-y-lg">
<div>
<div className="flex justify-between mb-2">
<span className="text-label-md font-medium">LinkedIn</span>
<span className="text-label-md font-bold">24%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-[#0077b5] h-2 rounded-full" style={{ "width": "24%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-label-md font-medium">Glassdoor</span>
<span className="text-label-md font-bold">12%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-[#0caa41] h-2 rounded-full" style={{ "width": "12%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-label-md font-medium">Direct Apply</span>
<span className="text-label-md font-bold">42%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-primary h-2 rounded-full" style={{ "width": "42%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-label-md font-medium">Referrals</span>
<span className="text-label-md font-bold">68%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-secondary h-2 rounded-full" style={{ "width": "68%" }}></div>
</div>
</div>
</div>
<div className="mt-lg pt-lg border-t border-outline-variant">
<p className="text-label-sm text-on-surface-variant italic">Tip: Referrals continue to be your highest conversion channel.</p>
</div>
</div>
{/* Salary Insights */}
<div className="lg:col-span-2 bg-surface-container-lowest p-lg rounded-2xl border border-outline-variant shadow-sm">
<div className="flex items-center justify-between mb-xl">
<div>
<h3 className="text-headline-md text-on-surface font-bold">Salary Range Insights</h3>
<p className="text-label-sm text-on-surface-variant">Market average vs. Target roles</p>
</div>
<div className="flex gap-md items-center">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-label-sm">Applied Roles</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-outline-variant"></span>
<span className="text-label-sm">Market Avg</span>
</div>
</div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<span className="w-32 text-label-md font-medium">Software Eng II</span>
<div className="flex-1 relative h-6 bg-surface-container rounded-full overflow-hidden">
<div className="absolute left-[15%] right-[25%] bg-primary/20 h-full"></div>
<div className="absolute left-[30%] right-[40%] bg-primary h-full"></div>
<div className="absolute left-[50%] h-full w-[2px] bg-on-background z-10"></div>
</div>
<span className="w-20 text-right text-label-sm">$120k-$165k</span>
</div>
<div className="flex items-center gap-4">
<span className="w-32 text-label-md font-medium">Senior Product</span>
<div className="flex-1 relative h-6 bg-surface-container rounded-full overflow-hidden">
<div className="absolute left-[25%] right-[15%] bg-primary/20 h-full"></div>
<div className="absolute left-[40%] right-[30%] bg-primary h-full"></div>
<div className="absolute left-[55%] h-full w-[2px] bg-on-background z-10"></div>
</div>
<span className="w-20 text-right text-label-sm">$145k-$190k</span>
</div>
<div className="flex items-center gap-4">
<span className="w-32 text-label-md font-medium">Frontend Dev</span>
<div className="flex-1 relative h-6 bg-surface-container rounded-full overflow-hidden">
<div className="absolute left-[10%] right-[40%] bg-primary/20 h-full"></div>
<div className="absolute left-[20%] right-[55%] bg-primary h-full"></div>
<div className="absolute left-[40%] h-full w-[2px] bg-on-background z-10"></div>
</div>
<span className="w-20 text-right text-label-sm">$100k-$135k</span>
</div>
</div>
</div>
{/* Recent AI Insights Section */}
<div className="bg-primary/5 p-lg rounded-2xl border border-primary-container/20 shadow-sm flex flex-col">
<div className="flex items-center gap-md mb-xl">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined">auto_awesome</span>
</div>
<h3 className="text-headline-md text-primary font-bold">AI Smart Tips</h3>
</div>
<div className="space-y-md flex-1">
<div className="bg-surface-container-lowest p-md rounded-xl border border-primary-container/10 shadow-sm">
<div className="flex gap-md">
<span className="material-symbols-outlined text-primary text-[20px]">bolt</span>
<p className="text-body-md text-on-surface">Your response rate is <span className="font-bold text-primary">15% higher</span> when applying within the first 24 hours of a posting.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-md rounded-xl border border-primary-container/10 shadow-sm">
<div className="flex gap-md">
<span className="material-symbols-outlined text-primary text-[20px]">history</span>
<p className="text-body-md text-on-surface">Applying on <span className="font-bold text-primary">Tuesdays</span> has yielded the most recruiter callbacks this month.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-md rounded-xl border border-primary-container/10 shadow-sm">
<div className="flex gap-md">
<span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
<p className="text-body-md text-on-surface">Roles mentioning <span className="font-bold text-primary">"Scalability"</span> match your current resume with 94% accuracy.</p>
</div>
</div>
</div>
<button className="mt-xl w-full border-2 border-primary text-primary py-2 rounded-lg text-label-md font-bold hover:bg-primary hover:text-on-primary transition-all">
                    View All Insights
                </button>
</div>
</div>
</div>
</main>

    </>
  );
}
