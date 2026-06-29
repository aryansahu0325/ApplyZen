import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Resumes() {
  const { user, logout } = useAuth();
  return (
    <>
      
{/* Sidebar (Shared Component Anchor) */}
<aside className="hidden md:flex flex-col h-screen p-md fixed left-0 top-0 border-r border-outline-variant bg-surface-container-lowest w-[280px] z-40">
<div className="flex items-center gap-3 mb-xl px-2">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{ "fontVariationSettings": "'FILL' 1" }}>auto_awesome</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md font-black text-primary leading-none">ApplyZen</h1>
<p className="text-label-sm font-label-sm text-outline">Career Intelligence</p>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1">
<Link className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-low transition-all duration-150 rounded-lg group" to="/dashboard">
<span className="material-symbols-outlined group-hover:text-primary">dashboard</span>
<span className="text-label-md font-label-md">Dashboard</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-low transition-all duration-150 rounded-lg group" to="/applications">
<span className="material-symbols-outlined group-hover:text-primary">assignment</span>
<span className="text-label-md font-label-md">Applications</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 bg-secondary-container text-on-secondary-container rounded-lg group" to="/settings">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>description</span>
<span className="text-label-md font-label-md font-bold">Resume Builder</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-low transition-all duration-150 rounded-lg group" to="/analytics">
<span className="material-symbols-outlined group-hover:text-primary">analytics</span>
<span className="text-label-md font-label-md">Analytics</span>
</Link>
</nav>
<div className="mt-auto pt-lg border-t border-outline-variant flex flex-col gap-2">
<button className="w-full bg-primary text-on-primary py-2.5 rounded-lg font-label-md flex items-center justify-center gap-2 mb-4 hover:opacity-90 active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-[18px]">bolt</span>
                Upgrade to Pro
            </button>
<Link className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-low transition-all duration-150 rounded-lg" to="/help">
<span className="material-symbols-outlined">help</span>
<span className="text-label-md font-label-md">Help Center</span>
</Link>
<button 
  onClick={logout}
  className="w-full flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-low transition-all duration-150 rounded-lg text-error text-left"
>
<span className="material-symbols-outlined">logout</span>
<span className="text-label-md font-label-md">Log Out</span>
</button>
</div>
</aside>
{/* Main Content Area */}
<main className="md:ml-[280px] min-h-screen">
{/* Top Bar (Shared Component Anchor) */}
<header className="sticky top-0 z-30 bg-surface/80 backdrop-blur-md flex justify-between items-center w-full px-lg h-16 border-b border-outline-variant">
<div className="flex items-center gap-4 flex-1">
<div className="md:hidden w-8 h-8 bg-primary rounded flex items-center justify-center mr-2">
<span className="material-symbols-outlined text-white text-[20px]">auto_awesome</span>
</div>
<div className="relative w-full max-w-md hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Search resumes, cover letters..." type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full border-2 border-surface"></span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-[1px] bg-outline-variant mx-1"></div>
<div className="flex items-center gap-2 cursor-pointer p-1 pr-3 hover:bg-surface-container-high rounded-full transition-colors">
<img className="w-8 h-8 rounded-full bg-outline-variant object-cover" data-alt="A professional studio headshot of a young female tech professional with a friendly smile, wearing a modern gray blazer, against a clean minimalist soft-lit background, high-end corporate photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_EH5E8a4zgPJLKoUiaIKbem1YwkmzALqV78aBamQJQQ6dpq0wHdjaD43_lFOaJfGxNESLkP1qo_6NQRpg3U-2qzbMkbI20TDO8rw1p55Hbrap8-ohU9MB5DN-Y04EvMeRIEkBYJpqzPuVfxyctGrOYmtgAfGSBB-O7pQG1CaI0SNIUqDjBueBST98YXt2SJjxhoVVBx1P0cCzgWo6MBTVsvDUrwH3eiC1kKqySw317oqz8cBKcyBdv3G7stDDLpuQKnkUGAEwL2im"/>
<span className="hidden lg:block text-label-md font-label-md text-on-surface">{user?.fullName || 'User'}</span>
</div>
</div>
</header>
{/* Canvas */}
<div className="p-lg max-w-container-max mx-auto">
{/* Page Header & Action */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-lg mb-xl">
<div>
<h2 className="text-headline-lg font-headline-lg text-on-surface mb-1">Resume Builder</h2>
<p className="text-body-lg text-outline">Manage your professional identity and optimize for ATS algorithms.</p>
</div>
<div className="flex gap-3">
<button className="px-lg h-10 border border-outline-variant hover:bg-surface-container-low transition-colors rounded-lg font-label-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">upload_file</span>
                        Import PDF
                    </button>
<button className="px-lg h-10 bg-primary text-on-primary hover:opacity-90 active:scale-[0.98] transition-all rounded-lg font-label-md flex items-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[20px]">add</span>
                        Create New
                    </button>
</div>
</div>
{/* Bento Layout Content */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
{/* AI Banner (Featured Action) */}
<div className="lg:col-span-12 relative overflow-hidden rounded-xl bg-on-surface h-48 md:h-40 flex items-center">

<div className="relative z-10 p-lg flex flex-col md:flex-row items-center justify-between w-full gap-4">
<div className="text-center md:text-left">
<h3 className="text-headline-md font-headline-md text-primary-fixed leading-tight mb-1 flex items-center justify-center md:justify-start gap-2">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>auto_awesome</span>
                                Power up with ApplyZen AI
                            </h3>
<p className="text-body-md text-surface-variant max-w-md">Our intelligence engine can rewrite your bullet points for 95%+ ATS optimization in seconds.</p>
</div>
<button className="bg-primary-container text-on-primary-container px-xl py-3 rounded-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 whitespace-nowrap">
                            Launch AI Optimizer
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
{/* Stats Sidebar */}
<div className="lg:col-span-4 flex flex-col gap-lg">
<div className="token-card bg-surface-container-lowest p-lg rounded-xl">
<h4 className="text-label-sm font-label-sm text-outline uppercase tracking-wider mb-4">Market Readiness</h4>
<div className="flex items-end gap-2 mb-2">
<span className="text-display font-display text-on-surface leading-none">88</span>
<span className="text-headline-md text-secondary pb-1">/100</span>
</div>
<p className="text-body-md text-outline mb-6">Your profile is performing better than 74% of peers in Product Management.</p>
<div className="space-y-4">
<div className="flex justify-between items-center text-label-md">
<span className="text-on-surface-variant">Keywords</span>
<span className="text-primary font-bold">Strong</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[85%]"></div>
</div>
<div className="flex justify-between items-center text-label-md">
<span className="text-on-surface-variant">Formatting</span>
<span className="text-primary font-bold">Perfect</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[98%]"></div>
</div>
</div>
</div>
<div className="token-card bg-surface-container-lowest p-lg rounded-xl">
<div className="flex justify-between items-center mb-4">
<h4 className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Upcoming Deadlines</h4>
<span className="material-symbols-outlined text-outline text-[20px] cursor-pointer">more_horiz</span>
</div>
<ul className="space-y-4">
<li className="flex gap-4 items-start group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 group-hover:bg-primary-container/30 transition-colors">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">event</span>
</div>
<div>
<p className="text-label-md font-label-md text-on-surface">Stripe - Senior PM</p>
<p className="text-label-sm text-outline">Application due tomorrow</p>
</div>
</li>
<li className="flex gap-4 items-start group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 group-hover:bg-primary-container/30 transition-colors">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">event</span>
</div>
<div>
<p className="text-label-md font-label-md text-on-surface">Linear - Product Design</p>
<p className="text-label-sm text-outline">Closes in 3 days</p>
</div>
</li>
</ul>
</div>
</div>
{/* Resumes Grid */}
<div className="lg:col-span-8">
<div className="flex items-center justify-between mb-lg">
<div className="flex gap-4">
<button className="text-label-md font-bold text-primary border-b-2 border-primary pb-1">All Documents</button>
<button className="text-label-md font-label-md text-outline hover:text-on-surface transition-colors pb-1">Resumes</button>
<button className="text-label-md font-label-md text-outline hover:text-on-surface transition-colors pb-1">Cover Letters</button>
</div>
<div className="flex items-center gap-2 text-outline">
<span className="material-symbols-outlined cursor-pointer hover:text-on-surface">grid_view</span>
<span className="material-symbols-outlined cursor-pointer hover:text-on-surface opacity-50">list</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
{/* Resume Card 1 */}
<div className="token-card bg-surface-container-lowest rounded-xl group overflow-hidden flex flex-col">
<div className="aspect-[3/4] bg-surface-container-low relative p-md group-hover:bg-surface-container transition-colors cursor-zoom-in">
<div className="w-full h-full bg-white shadow-sm border border-outline-variant overflow-hidden rounded-sm p-4 flex flex-col gap-2">
<div className="w-1/2 h-2 bg-surface-variant rounded"></div>
<div className="w-full h-1 bg-surface-container-high rounded"></div>
<div className="w-full h-1 bg-surface-container-high rounded"></div>
<div className="mt-4 flex gap-2">
<div className="w-8 h-8 rounded-full bg-surface-variant"></div>
<div className="flex-1 space-y-1">
<div className="w-1/2 h-2 bg-surface-variant rounded"></div>
<div className="w-3/4 h-1.5 bg-surface-container-high rounded"></div>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="w-full h-1.5 bg-surface-container-high rounded"></div>
<div className="w-full h-1.5 bg-surface-container-high rounded"></div>
<div className="w-3/4 h-1.5 bg-surface-container-high rounded"></div>
</div>
<div className="mt-auto flex justify-between">
<div className="w-12 h-1.5 bg-surface-variant rounded"></div>
<div className="w-12 h-1.5 bg-surface-variant rounded"></div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-on-surface/5">
<button className="bg-white/90 backdrop-blur text-on-surface px-md py-2 rounded-full font-label-md shadow-lg flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">edit</span>
                                        Edit Document
                                    </button>
</div>
<div className="absolute top-3 right-3">
<div className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-bold tracking-tighter uppercase backdrop-blur-sm border border-primary/20">
                                        ATS: 94
                                    </div>
</div>
</div>
<div className="p-md flex items-center justify-between">
<div>
<h5 className="text-label-md font-bold text-on-surface">Product_Manager_Stripe_v2</h5>
<p className="text-label-sm text-outline">Modified 2 hours ago</p>
</div>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/* Resume Card 2 */}
<div className="token-card bg-surface-container-lowest rounded-xl group overflow-hidden flex flex-col">
<div className="aspect-[3/4] bg-surface-container-low relative p-md group-hover:bg-surface-container transition-colors cursor-zoom-in">
<div className="w-full h-full bg-white shadow-sm border border-outline-variant overflow-hidden rounded-sm p-4 flex flex-col gap-2">
<div className="w-2/3 h-2 bg-surface-variant rounded"></div>
<div className="w-full h-1.5 bg-surface-container-high rounded"></div>
<div className="mt-4 space-y-2">
<div className="w-full h-1.5 bg-surface-container-high rounded"></div>
<div className="w-5/6 h-1.5 bg-surface-container-high rounded"></div>
<div className="w-full h-1.5 bg-surface-container-high rounded"></div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-on-surface/5">
<button className="bg-white/90 backdrop-blur text-on-surface px-md py-2 rounded-full font-label-md shadow-lg flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">edit</span>
                                        Edit Document
                                    </button>
</div>
<div className="absolute top-3 right-3">
<div className="bg-tertiary/10 text-tertiary px-2 py-1 rounded text-[10px] font-bold tracking-tighter uppercase backdrop-blur-sm border border-tertiary/20">
                                        ATS: 71
                                    </div>
</div>
</div>
<div className="p-md flex items-center justify-between">
<div>
<h5 className="text-label-md font-bold text-on-surface">Generic_PM_Master</h5>
<p className="text-label-sm text-outline">Modified Sep 12, 2023</p>
</div>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/* Add New Empty State Card */}
<div className="token-card border-dashed border-2 border-outline-variant bg-transparent rounded-xl flex flex-col items-center justify-center p-xl gap-4 hover:bg-surface-container-low/50 hover:border-primary transition-all cursor-pointer group min-h-[300px]">
<div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-outline group-hover:text-on-primary-container text-[32px]">add_circle</span>
</div>
<div className="text-center">
<h5 className="text-headline-md text-on-surface mb-1">New Resume</h5>
<p className="text-body-md text-outline">Start from a template or use AI</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/* Mobile Bottom Nav (Shared Component Anchor) */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container-lowest flex justify-around items-center px-lg border-t border-outline-variant z-50">
<Link className="flex flex-col items-center gap-1 text-on-surface-variant" to="/dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-medium">Home</span>
</Link>
<a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
<span className="material-symbols-outlined">assignment</span>
<span className="text-[10px] font-medium">Jobs</span>
</a>
<div className="relative -top-6">
<button className="w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center">
<span className="material-symbols-outlined">add</span>
</button>
</div>
<Link className="flex flex-col items-center gap-1 text-primary" to="/resumes">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>description</span>
<span className="text-[10px] font-medium font-bold">Resumes</span>
</Link>
<a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-medium">Profile</span>
</a>
</nav>


    </>
  );
}
