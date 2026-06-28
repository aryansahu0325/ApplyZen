import React from 'react';
import { Link } from 'react-router-dom';

export default function ApplicationStatus() {
  return (
    <>
      
{/* SideNavBar (Shared Component) */}
<aside className="fixed left-0 top-0 bottom-0 flex flex-col w-64 py-6 px-4 z-50 bg-surface-container-lowest border-r border-outline-variant">
<div className="flex items-center gap-3 px-2 mb-10">
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary" style={{ "fontVariationSettings": "'FILL' 1" }}>cloud_done</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary">ApplyZen</h1>
<p className="font-label-sm text-label-sm text-on-surface-variant">Career Automation</p>
</div>
</div>
<button className="mb-8 w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">add</span>
            New Application
        </button>
<nav className="flex-1 space-y-1">
<div className="group cursor-pointer active:scale-95 flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</div>
<div className="group cursor-pointer active:scale-95 flex items-center gap-3 px-3 py-2 rounded-lg text-primary bg-secondary-container/20 font-bold transition-all">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>work</span>
<span className="font-label-md text-label-md">Applications</span>
</div>
<div className="group cursor-pointer active:scale-95 flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined">description</span>
<span className="font-label-md text-label-md">Resume Builder</span>
</div>
<div className="group cursor-pointer active:scale-95 flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</div>
</nav>
<div className="mt-auto space-y-1 pt-6 border-t border-outline-variant">
<div className="group cursor-pointer active:scale-95 flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined">account_circle</span>
<span className="font-label-md text-label-md">Account</span>
</div>
<div className="group cursor-pointer active:scale-95 flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined">logout</span>
<span className="font-label-md text-label-md">Logout</span>
</div>
</div>
</aside>
{/* Main Content Canvas */}
<main className="ml-64 min-h-screen">
{/* TopNavBar (Shared Component) */}
<header className="flex justify-between items-center h-16 px-6 w-full sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
<div className="flex items-center gap-4 flex-1">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-body-md focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Search applications, companies, or roles..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-surface-container-low p-2 rounded-full transition-colors">notifications</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-surface-container-low p-2 rounded-full transition-colors">help</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-surface-container-low p-2 rounded-full transition-colors">settings</span>
</div>
<div className="h-8 w-px bg-outline-variant"></div>
<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A professional studio headshot of a smiling woman in business casual attire, with soft focus lighting and a neutral minimalist gray background, embodying a high-end corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwFvOUTTvCmioXfls2r4aiPnh-Pmbbf2P5r-JDEfTSwvBWlTexfZAGjAZgdaKWM7_p-AUsAr_LfRc4I3y0uL6N8qmUR0KTlvs2LhiFN3p4eCIrHivY3v8RUInJXqUheoNM7mtX_3Ctkbawk_jBRr_zh_lfgTVaZiDktpv_9mf-riFG0CzwyIZRHJkeqGCvmYxKH6VQufQH47S4z9sMJ5qwFt7k0tQYZ6VD818vQOzADVN0rdzFdtx9OYV2ac7FtWT04TsdkZiFtcOl"/>
</div>
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Alex Rivera</span>
</div>
</div>
</header>
{/* Page Content */}
<div className="p-8 max-w-6xl mx-auto">
{/* Header Section */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Application Status</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Track and manage your active job applications in real-time.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex bg-surface-container-low p-1 rounded-lg border border-outline-variant">
<button className="px-4 py-1.5 rounded-md bg-white shadow-sm text-label-md font-bold text-primary">All (12)</button>
<button className="px-4 py-1.5 rounded-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors">Active (8)</button>
<button className="px-4 py-1.5 rounded-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors">Archived (4)</button>
</div>
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
                        Filters
                    </button>
</div>
</div>
{/* Applications List (Bento-inspired List) */}
<div className="grid gap-4">
{/* Card 1: Interviewing */}
<div className="bg-white border border-outline-variant rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all cursor-pointer group">
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
{/* Company Info */}
<div className="flex items-center gap-4 min-w-[240px]">
<div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center border border-outline-variant overflow-hidden">
<img className="w-10 h-10 object-contain" data-alt="A minimalist tech company logo featuring a sleek abstract geometric shape in royal blue, set against a clean white background with subtle depth and modern SaaS branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-FvpAyVQX6E7kikoNK2BA7y-7r2Z0-xX9rvBc7Ey4BIGgI6BfYN-sbWznTPhzZG48msoxv2eq_-n2FcQQ_xyfMNnbnuSNCcbELDqaNrqBgf_FT8IkoCLGSCtavcGCGsKl5jcaKimG-nPzR4ireJP8UDR1NUFMpwaQ9jgTCDGFi6PM7EEevWh1xdXAlhaV8TU4_javyu4hDNJNoy386GsJvKzDwYWcIysQC98_tKK8ie22yizAQkE8KepoBZjlA7JG-3NXChwsR9kF"/>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Senior Product Designer</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-md text-body-md text-on-surface-variant">Linear Systems</span>
<span className="w-1 h-1 bg-outline rounded-full"></span>
<span className="font-body-md text-body-md text-on-surface-variant">San Francisco, CA</span>
</div>
</div>
</div>
{/* Timeline */}
<div className="flex-1 w-full">
<div className="relative">
{/* Line Background */}
<div className="absolute top-4 left-0 w-full h-0.5 bg-surface-container-highest"></div>
{/* Progress Line */}
<div className="absolute top-4 left-0 w-[50%] h-0.5 bg-primary-container transition-all"></div>
<div className="relative flex justify-between">
{/* Stage: Submitted */}
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-on-primary-fixed-variant">Submitted</p>
<p className="text-[10px] text-on-surface-variant">Oct 12</p>
</div>
{/* Stage: Under Review */}
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-on-primary-fixed-variant">Review</p>
<p className="text-[10px] text-on-surface-variant">Oct 14</p>
</div>
{/* Stage: Interviewing */}
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center z-10 text-[18px] animate-pulse">
<span className="material-symbols-outlined">forum</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-primary font-bold">Interview</p>
<p className="text-[10px] text-on-surface-variant">Oct 20</p>
</div>
{/* Stage: Offer */}
<div className="flex flex-col items-center opacity-40">
<div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-transparent flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">card_membership</span>
</div>
<p className="font-label-sm text-label-sm mt-2">Offer</p>
<p className="text-[10px] text-transparent">--</p>
</div>
</div>
</div>
</div>
{/* CTA */}
<div className="flex items-center gap-3 ml-auto">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-bold">In Progress</span>
<button className="bg-surface-container-low text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
{/* Card 2: Submitted */}
<div className="bg-white border border-outline-variant rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all cursor-pointer group">
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
{/* Company Info */}
<div className="flex items-center gap-4 min-w-[240px]">
<div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center border border-outline-variant overflow-hidden">
<img className="w-10 h-10 object-contain" data-alt="A professional circular logo for a creative agency, showcasing a vibrant gradient of emerald green and soft mint. Minimalist typography and a sleek vector icon representing growth and connection." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl0IisJlDTqCYPraJiBuqocf04rgvWydRTJEt5qZwGfCjjMNnJfM8H3gmqzttdi-SxVwzqmqipvnf8O1o0dPhwjhlJ0cMUlj4BaV3yIy_khi8WsY7-avsNN1LnVzzjexmfwbc1sZ60Z6iO05oX_b3YTUqRJ4PieKsGHf47aHwe5VQaj49PXGnhQ5NCz4WaJGTHyiSr06Hx8v79yirmH2cI_U9bOjJdqMrlHalGQArqkBJtoKKrMclFrfuctW1Yyuy6uhjcL7haF9IS"/>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Visual Designer</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-md text-body-md text-on-surface-variant">Stripe Architecture</span>
<span className="w-1 h-1 bg-outline rounded-full"></span>
<span className="font-body-md text-body-md text-on-surface-variant">Remote</span>
</div>
</div>
</div>
{/* Timeline */}
<div className="flex-1 w-full">
<div className="relative">
<div className="absolute top-4 left-0 w-full h-0.5 bg-surface-container-highest"></div>
<div className="absolute top-4 left-0 w-[0%] h-0.5 bg-primary-container transition-all"></div>
<div className="relative flex justify-between">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">send</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-primary font-bold">Submitted</p>
<p className="text-[10px] text-on-surface-variant">Today</p>
</div>
<div className="flex flex-col items-center opacity-40">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">pageview</span>
</div>
<p className="font-label-sm text-label-sm mt-2">Review</p>
</div>
<div className="flex flex-col items-center opacity-40">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">forum</span>
</div>
<p className="font-label-sm text-label-sm mt-2">Interview</p>
</div>
<div className="flex flex-col items-center opacity-40">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">card_membership</span>
</div>
<p className="font-label-sm text-label-sm mt-2">Offer</p>
</div>
</div>
</div>
</div>
{/* CTA */}
<div className="flex items-center gap-3 ml-auto">
<span className="bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full text-label-sm font-bold">Pending</span>
<button className="bg-surface-container-low text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
{/* Card 3: Rejected */}
<div className="bg-white border border-outline-variant rounded-xl p-6 opacity-80 grayscale hover:grayscale-0 hover:border-error/40 hover:shadow-md transition-all cursor-pointer group">
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
{/* Company Info */}
<div className="flex items-center gap-4 min-w-[240px]">
<div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center border border-outline-variant overflow-hidden">
<img className="w-10 h-10 object-contain" data-alt="A bold, monochromatic tech logo for a logistics company, featuring sharp angular lines and a minimalist letter-based icon. The style is industrial and efficient, with a matte finish." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Iif3-MTi0544__MYDXK-LVsSEj_ve1ahAMNDbV-C2oym0XOpd8__3K8mFY9F5tXTLvKYvVtuaNI-xG2cocAHQA53WrE6dqFjG8Mk-B05uvjDRnL6eCi2WdPcrvWNq_c65l5qgvJtnGGQEKKr6iemYF5uXj83Ec0lLLMwwf17k8yMuBLtFzUJ5xDlddeVmU3jrFg5MrJQWDTawZnRPa2Rh5d7_R_u5XqGBo1GvoTJFkbF30LLAid1AybZZVhXDcikBckACF0i3sDh"/>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-error transition-colors">UI Engineer</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-md text-body-md text-on-surface-variant">Prisma Labs</span>
<span className="w-1 h-1 bg-outline rounded-full"></span>
<span className="font-body-md text-body-md text-on-surface-variant">New York, NY</span>
</div>
</div>
</div>
{/* Timeline */}
<div className="flex-1 w-full">
<div className="relative">
<div className="absolute top-4 left-0 w-full h-0.5 bg-surface-container-highest"></div>
<div className="absolute top-4 left-0 w-[33%] h-0.5 bg-error-container"></div>
<div className="relative flex justify-between">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-on-error-container">Submitted</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-error text-on-error flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">cancel</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-error font-bold">Rejected</p>
<p className="text-[10px] text-on-surface-variant">Oct 18</p>
</div>
<div className="flex flex-col items-center opacity-30">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">forum</span>
</div>
<p className="font-label-sm text-label-sm mt-2">Interview</p>
</div>
<div className="flex flex-col items-center opacity-30">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">card_membership</span>
</div>
<p className="font-label-sm text-label-sm mt-2">Offer</p>
</div>
</div>
</div>
</div>
{/* CTA */}
<div className="flex items-center gap-3 ml-auto">
<span className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-label-sm font-bold">Closed</span>
<button className="bg-surface-container-low text-on-surface-variant p-2 rounded-lg group-hover:bg-error group-hover:text-white transition-all">
<span className="material-symbols-outlined">delete_outline</span>
</button>
</div>
</div>
</div>
{/* Card 4: Offer Extended */}
<div className="bg-white border-2 border-primary/20 rounded-xl p-6 hover:border-primary/60 hover:shadow-lg transition-all cursor-pointer group bg-gradient-to-r from-white to-secondary-container/10">
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
{/* Company Info */}
<div className="flex items-center gap-4 min-w-[240px]">
<div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-primary/20 overflow-hidden shadow-sm">
<img className="w-10 h-10 object-contain" data-alt="A modern, high-tech logo for a global fintech company, featuring interconnected dots and a minimalist font. The color scheme is deep charcoal and emerald green, conveying trust and innovation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArk0ILOqMkIDUazLjsMMO9L654xfp-pH3OrwxlPmwoNKAze7awjsc4qOIv1K0FErEVr74VtA0jkQGgk4amp5A_SNYAIv8rWKT_bFEiiBKRs6OMRQCMIOrT-btGHNAKECzJB6SRQzr1CmLqHDXbUd_6QCid7L502WfpX8H7REpYewZsGK9rKMix6GVqsC4dLZGDWakNnJ5oPqKATae-3kXNMvrKG610WPRFSZJ1KmrjorXmt8WnN22-y_22v8rquJSX7hBahyKhrmtK"/>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Design Lead</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-md text-body-md text-on-surface-variant">Aether Labs</span>
<span className="w-1 h-1 bg-outline rounded-full"></span>
<span className="font-body-md text-body-md text-on-surface-variant">London, UK (Remote)</span>
</div>
</div>
</div>
{/* Timeline */}
<div className="flex-1 w-full">
<div className="relative">
<div className="absolute top-4 left-0 w-full h-0.5 bg-surface-container-highest"></div>
<div className="absolute top-4 left-0 w-[100%] h-0.5 bg-primary transition-all"></div>
<div className="relative flex justify-between">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-primary">Submitted</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-primary">Review</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-primary">Interview</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center z-10 text-[18px] ring-4 ring-primary/20">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>celebration</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-primary font-bold">Offer Extended</p>
<p className="text-[10px] text-on-surface-variant font-bold">Today</p>
</div>
</div>
</div>
</div>
{/* CTA */}
<div className="flex items-center gap-3 ml-auto">
<span className="bg-primary text-on-primary px-3 py-1 rounded-full text-label-sm font-bold animate-bounce">Review Offer</span>
<button className="bg-primary text-white p-2 rounded-lg transition-all">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
{/* Empty State Suggestion (Hidden by default) */}
<div className="hidden flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-outline-variant" id="empty-state">
<div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-outline text-[40px]">work_off</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">No applications found</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Try adjusting your filters or start a new application.</p>
<button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-label-md text-label-md">Start New Application</button>
</div>
</div>
</main>
{/* FAB (Suppressed based on rules for task-focused page, but shown here as it's the primary dashboard action) */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 md:hidden">
<span className="material-symbols-outlined text-[30px]">add</span>
</button>


    </>
  );
}
