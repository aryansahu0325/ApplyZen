import React from 'react';
import { Link } from 'react-router-dom';

export default function Applications() {
  return (
    <>
      
{/* Shell Layout Wrapper */}
<div className="flex min-h-screen">
{/* SideNavBar Component (Fixed Left) */}
<aside className="hidden md:flex flex-col h-screen p-md fixed left-0 top-0 border-r border-outline-variant bg-surface-container-lowest w-[280px] z-50">
<div className="flex items-center gap-sm mb-xl">
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary" style={{ "fontVariationSettings": "'FILL' 1" }}>terminal</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md font-black text-primary leading-none">ApplyZen</h1>
<p className="text-label-sm font-label-sm text-on-surface-variant opacity-70">Career Intelligence</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<Link className="flex items-center gap-md px-md py-3 text-on-surface-variant hover:bg-surface-container-low transition-all duration-150 rounded-lg group" to="/dashboard">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
<span className="text-label-md font-label-md">Dashboard</span>
</Link>
{/* Active Item: Applications */}
<Link className="flex items-center gap-md px-md py-3 bg-secondary-container text-on-secondary-container rounded-lg group" to="/applications">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>assignment</span>
<span className="text-label-md font-label-md">Applications</span>
</Link>
<a className="flex items-center gap-md px-md py-3 text-on-surface-variant hover:bg-surface-container-low transition-all duration-150 rounded-lg group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">description</span>
<span className="text-label-md font-label-md">Resume Builder</span>
</a>
<Link className="flex items-center gap-md px-md py-3 text-on-surface-variant hover:bg-surface-container-low transition-all duration-150 rounded-lg group" to="/analytics">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">analytics</span>
<span className="text-label-md font-label-md">Analytics</span>
</Link>
</nav>
<div className="mt-auto space-y-4">
<div className="p-md bg-primary-container/10 border border-primary-container/20 rounded-xl">
<p className="text-label-md font-label-md text-primary font-bold mb-sm">Upgrade to Pro</p>
<p className="text-label-sm font-label-sm text-on-surface-variant mb-md leading-tight">Get 10x more automated applications.</p>
<button className="w-full py-2 bg-primary text-on-primary text-label-sm font-bold rounded-lg hover:opacity-90 transition-opacity">Upgrade</button>
</div>
<div className="space-y-1 pt-4 border-t border-outline-variant">
<Link className="flex items-center gap-md px-md py-2 text-on-surface-variant hover:bg-surface-container-low transition-all rounded-lg" to="/help">
<span className="material-symbols-outlined text-[20px]">help</span>
<span className="text-label-md font-label-md">Help Center</span>
</Link>
<a className="flex items-center gap-md px-md py-2 text-on-surface-variant hover:bg-surface-container-low transition-all rounded-lg" href="#">
<span className="material-symbols-outlined text-[20px]">logout</span>
<span className="text-label-md font-label-md">Log Out</span>
</a>
</div>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 md:ml-[280px] min-w-0">
{/* TopNavBar */}
<header className="flex justify-between items-center w-full px-lg h-16 sticky top-0 z-40 bg-surface border-b border-outline-variant">
<div className="flex items-center flex-1 max-w-md">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Search applications..." type="text"/>
</div>
</div>
<div className="flex items-center gap-md ml-lg">
<div className="flex gap-sm">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-70">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-70">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A professional high-resolution headshot of a young female tech professional with a friendly smile, set against a soft blurred office background with warm lighting. The image style is clean, modern, and aligned with a premium SaaS product aesthetic, emphasizing accessibility and professional competence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJICwCLUq8OpbEF9Qjxo-RovNYmFzi-0C4HR3eHFcHQ9XXEDo-sPdS62pIpRuWrzFyA2Vds8f2U9ikFyy7lDJ0Ywa5PJq8cEW6HSBFX8M2pPFZm3pPz0vcEMI9ooQ3tYmOFKE1BOu61sa3vtdV7_Zbg9AZek83PqBUxihOP3zvbC5U-oL4ZBbfTgTbg4YdwCM-7Ol9xBkKSWdEMLINpsJWCvxBIIIYUCxNN8JiB-96_Ch45ab8EbBIbXMIVyihEURsYqe__mw-TqUb"/>
</div>
</div>
</header>
{/* Page Content */}
<div className="p-lg max-w-[1400px] mx-auto">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
<div>
<nav className="flex items-center gap-xs text-label-sm font-label-sm text-on-surface-variant mb-sm">
<span>Main</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-bold">Applications</span>
</nav>
<h2 className="text-headline-lg font-headline-lg text-on-surface">Application Pipeline</h2>
<p className="text-body-md font-body-md text-on-surface-variant max-w-lg">Manage and track your active job searches. Move cards across stages as your interview process evolves.</p>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-xs px-md py-2 border border-outline-variant rounded-lg text-label-md font-label-md bg-white hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                            Filter
                        </button>
<button className="flex items-center gap-xs px-md py-2 bg-primary text-on-primary rounded-lg text-label-md font-label-md hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]">add</span>
                            New Application
                        </button>
</div>
</div>
{/* Kanban Board Section */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg items-start">
{/* Column: Applied */}
<div className="flex flex-col gap-md">
<div className="flex items-center justify-between px-xs">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<h3 className="text-label-md font-bold uppercase tracking-wider text-on-surface-variant">Applied</h3>
<span className="bg-surface-variant px-2 py-0.5 rounded text-[11px] font-bold text-on-surface-variant">12</span>
</div>
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]">more_horiz</span></button>
</div>
{/* Cards Container */}
<div className="kanban-column flex flex-col gap-md">
{/* Card 1 */}
<div className="p-md bg-white border border-outline-variant rounded-xl hover:border-outline transition-colors cursor-grab active:cursor-grabbing">
<div className="flex justify-between items-start mb-md">
<div className="flex gap-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary">google</span>
</div>
<div>
<p className="text-label-md font-bold text-on-surface leading-tight">Product Designer</p>
<p className="text-label-sm text-on-surface-variant">Google</p>
</div>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant">2d ago</span>
</div>
<div className="flex flex-wrap gap-xs mb-md">
<span className="px-2 py-0.5 bg-secondary-container/30 text-on-secondary-container text-[11px] font-bold rounded uppercase">Full-Time</span>
<span className="px-2 py-0.5 bg-surface-container-high text-on-surface-variant text-[11px] font-bold rounded uppercase">Remote</span>
</div>
<div className="flex items-center justify-between pt-sm border-t border-outline-variant/30">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">JD</div>
</div>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant opacity-40">attachment</span>
</div>
</div>
{/* Card 2 */}
<div className="p-md bg-white border border-outline-variant rounded-xl hover:border-outline transition-colors cursor-grab active:cursor-grabbing">
<div className="flex justify-between items-start mb-md">
<div className="flex gap-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant overflow-hidden">
<img className="w-8 h-8 object-contain" data-alt="A minimalist tech company logo with clean geometric lines, featuring a deep navy and emerald color palette. The logo is centered on a light gray background, representing a modern fintech or professional services firm. The aesthetic is high-end, corporate, and stable, fitting for a premium software as a service platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5mAf3lrBeVDvz9tpLvfty7JkyiN9NNqCnhff1-ExRScJ5552lMe5hORWjVp2jdh4idKXm9MCPBWuMRA71gRl-YCcKNVaQJtE_QvPpyTdD1b7QSiLVrHIYzE3PaSmzD1qQ_i5kmeeAmrNrXt7j7BxI7PkStAOhqIBTjj454Ab1FYI3QGhGIA4cxaWBo3pXSwXUTSe1xdbz6M9DkSTo_k9ZEGeYJuJnOod3lcC0OtvtVGUYcvLqQs4IOsT9ZWoZdmBtdXgD8JjIDGhT"/>
</div>
<div>
<p className="text-label-md font-bold text-on-surface leading-tight">UX Engineer</p>
<p className="text-label-sm text-on-surface-variant">Stripe</p>
</div>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant">4d ago</span>
</div>
<div className="flex flex-wrap gap-xs mb-md">
<span className="px-2 py-0.5 bg-secondary-container/30 text-on-secondary-container text-[11px] font-bold rounded uppercase">Contract</span>
</div>
<div className="flex items-center justify-between pt-sm border-t border-outline-variant/30">
<span className="text-[11px] text-primary font-bold">Autofilled</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant opacity-40">chat</span>
</div>
</div>
</div>
</div>
{/* Column: Interviewing */}
<div className="flex flex-col gap-md">
<div className="flex items-center justify-between px-xs">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<h3 className="text-label-md font-bold uppercase tracking-wider text-on-surface-variant">Interviewing</h3>
<span className="bg-primary-container/20 px-2 py-0.5 rounded text-[11px] font-bold text-primary">3</span>
</div>
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]">more_horiz</span></button>
</div>
<div className="kanban-column flex flex-col gap-md">
{/* Card 1 */}
<div className="p-md bg-white border border-primary/30 rounded-xl hover:border-primary transition-all shadow-sm">
<div className="flex justify-between items-start mb-md">
<div className="flex gap-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary">layers</span>
</div>
<div>
<p className="text-label-md font-bold text-on-surface leading-tight">Lead Designer</p>
<p className="text-label-sm text-on-surface-variant">Linear</p>
</div>
</div>
<span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-black rounded-full uppercase">Round 3</span>
</div>
<div className="p-sm bg-surface-container-low rounded-lg mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>event</span>
<p className="text-label-sm font-bold text-primary">Tomorrow, 10:00 AM</p>
</div>
<div className="flex items-center justify-between pt-sm border-t border-outline-variant/30">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold">MK</div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-[10px] font-bold">AZ</div>
</div>
<span className="text-[11px] text-on-surface-variant">Prep Checklist (80%)</span>
</div>
</div>
{/* Card 2 */}
<div className="p-md bg-white border border-outline-variant rounded-xl hover:border-outline transition-colors">
<div className="flex justify-between items-start mb-md">
<div className="flex gap-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary">adb</span>
</div>
<div>
<p className="text-label-md font-bold text-on-surface leading-tight">Design Manager</p>
<p className="text-label-sm text-on-surface-variant">Adobe</p>
</div>
</div>
<span className="px-2 py-0.5 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-full uppercase">Round 1</span>
</div>
<p className="text-label-sm text-on-surface-variant mb-md italic">Awaiting feedback from hiring manager...</p>
<div className="flex items-center justify-between pt-sm border-t border-outline-variant/30">
<span className="text-[11px] text-on-surface-variant">Updated 2h ago</span>
</div>
</div>
</div>
</div>
{/* Column: Offer */}
<div className="flex flex-col gap-md">
<div className="flex items-center justify-between px-xs">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<h3 className="text-label-md font-bold uppercase tracking-wider text-on-surface-variant">Offer</h3>
<span className="bg-primary-container/20 px-2 py-0.5 rounded text-[11px] font-bold text-primary">1</span>
</div>
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]">more_horiz</span></button>
</div>
<div className="kanban-column flex flex-col gap-md">
{/* Offer Card */}
<div className="p-md bg-primary-container/5 border-2 border-primary-container rounded-xl shadow-md relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-12 h-12 bg-primary-container/10 rotate-45"></div>
<div className="flex justify-between items-start mb-md">
<div className="flex gap-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center border border-primary-container">
<span className="material-symbols-outlined text-white" style={{ "fontVariationSettings": "'FILL' 1" }}>workspace_premium</span>
</div>
<div>
<p className="text-label-md font-bold text-on-surface leading-tight">Senior Product UI</p>
<p className="text-label-sm text-on-surface-variant">Airbnb</p>
</div>
</div>
<span className="px-2 py-0.5 bg-primary text-on-primary text-[10px] font-black rounded-full uppercase">Exciting!</span>
</div>
<div className="mb-md">
<div className="flex justify-between text-label-sm mb-1">
<span className="text-on-surface-variant">Offer Deadline</span>
<span className="text-error font-bold italic">4 days left</span>
</div>
<div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
<div className="bg-primary-container w-2/3 h-full"></div>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-1.5 bg-primary text-on-primary text-[11px] font-bold rounded-lg hover:opacity-90">Review</button>
<button className="flex-1 py-1.5 border border-outline-variant text-on-surface-variant text-[11px] font-bold rounded-lg hover:bg-white transition-colors">Negotiate</button>
</div>
</div>
</div>
</div>
{/* Column: Rejected/Inactive */}
<div className="flex flex-col gap-md">
<div className="flex items-center justify-between px-xs">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-error"></span>
<h3 className="text-label-md font-bold uppercase tracking-wider text-on-surface-variant">Inactive</h3>
<span className="bg-error-container px-2 py-0.5 rounded text-[11px] font-bold text-on-error-container">24</span>
</div>
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]">more_horiz</span></button>
</div>
<div className="kanban-column flex flex-col gap-md opacity-60 hover:opacity-100 transition-opacity">
{/* Rejected Card 1 */}
<div className="p-md bg-surface-container-low border border-outline-variant rounded-xl grayscale hover:grayscale-0 transition-all">
<div className="flex justify-between items-start mb-md">
<div className="flex gap-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant">bia</span>
</div>
<div>
<p className="text-label-md font-bold text-on-surface-variant leading-tight">Interaction Pro</p>
<p className="text-label-sm text-on-surface-variant">Figma</p>
</div>
</div>
<span className="text-label-sm font-label-sm text-error font-bold">Rejected</span>
</div>
<p className="text-[11px] text-on-surface-variant leading-tight">"We've decided to move forward with other candidates who more closely align..."</p>
</div>
{/* Rejected Card 2 */}
<div className="p-md bg-surface-container-low border border-outline-variant rounded-xl grayscale hover:grayscale-0 transition-all">
<div className="flex justify-between items-start mb-md">
<div className="flex gap-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant">hub</span>
</div>
<div>
<p className="text-label-md font-bold text-on-surface-variant leading-tight">Platform Designer</p>
<p className="text-label-sm text-on-surface-variant">Meta</p>
</div>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant font-bold">Closed</span>
</div>
</div>
<button className="w-full py-4 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center gap-sm group">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">archive</span>
<span className="text-label-md font-bold">View Archive</span>
</button>
</div>
</div>
</div>
{/* Dense Table View Section (Alternative View) */}
<div className="mt-2xl">
<div className="flex items-center justify-between mb-lg">
<h3 className="text-headline-md font-headline-md text-on-surface">Recent Activity</h3>
<button className="text-primary text-label-md font-bold hover:underline">View All Activity</button>
</div>
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<table className="w-full border-collapse text-left">
<thead className="bg-surface-container-lowest border-b border-outline-variant">
<tr>
<th className="px-lg py-4 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Company</th>
<th className="px-lg py-4 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Role</th>
<th className="px-lg py-4 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Stage</th>
<th className="px-lg py-4 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Last Activity</th>
<th className="px-lg py-4 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="px-lg py-4 text-label-sm font-bold text-on-surface-variant uppercase tracking-wider"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-4">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">rocket_launch</span>
</div>
<span className="text-label-md font-bold text-on-surface">SpaceX</span>
</div>
</td>
<td className="px-lg py-4 text-body-md text-on-surface-variant">Lead Visualization Designer</td>
<td className="px-lg py-4">
<span className="text-label-sm text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded">Technical Assessment</span>
</td>
<td className="px-lg py-4 text-body-md text-on-surface-variant">Today, 2:45 PM</td>
<td className="px-lg py-4">
<div className="flex items-center gap-xs">
<div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
<span className="text-label-sm font-bold text-amber-700">Action Required</span>
</div>
</td>
<td className="px-lg py-4 text-right">
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">chevron_right</span></button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-lg py-4">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">cloud</span>
</div>
<span className="text-label-md font-bold text-on-surface">Salesforce</span>
</div>
</td>
<td className="px-lg py-4 text-body-md text-on-surface-variant">Senior UX Researcher</td>
<td className="px-lg py-4">
<span className="text-label-sm text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded">Initial Screen</span>
</td>
<td className="px-lg py-4 text-body-md text-on-surface-variant">Yesterday</td>
<td className="px-lg py-4">
<div className="flex items-center gap-xs">
<div className="w-2 h-2 rounded-full bg-primary-container"></div>
<span className="text-label-sm font-bold text-primary">Pending Feedback</span>
</div>
</td>
<td className="px-lg py-4 text-right">
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">chevron_right</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
{/* Floating Action Button (Only for specific pages, suppressed as per UX mandate on Detail views but kept here as this is a high-level Board view) */}
<button className="fixed bottom-lg right-lg w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-50 md:hidden">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>add</span>
</button>
{/* Mobile Bottom Navigation */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container-lowest border-t border-outline-variant flex items-center justify-around z-50 px-md">
<button className="flex flex-col items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-bold">Home</span>
</button>
</nav>
    </>
  );
}
