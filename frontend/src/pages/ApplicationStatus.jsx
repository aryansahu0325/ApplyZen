
import React from 'react';

export default function ApplicationStatus() {
  return (
    <div className="animate-fadeIn max-w-5xl mx-auto">
      
{/* TopNavBar (Shared Component) */}
<header className="flex justify-between items-center h-16 px-6 w-full sticky top-0 z-40 bg-white border-b border-slate-300">
<div className="flex items-center gap-4 flex-1">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-full text-body-md focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Search applications, companies, or roles..." type="text" />
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:bg-slate-50 p-2 rounded-full transition-colors">notifications</span>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:bg-slate-50 p-2 rounded-full transition-colors">help</span>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:bg-slate-50 p-2 rounded-full transition-colors">settings</span>
</div>
<div className="h-8 w-px bg-slate-200-variant"></div>
<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-8 h-8 rounded-full overflow-hidden bg-slate-50">
<img className="w-full h-full object-cover" data-alt="A professional studio headshot of a smiling woman in business casual attire, with soft focus lighting and a neutral minimalist gray background, embodying a high-end corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwFvOUTTvCmioXfls2r4aiPnh-Pmbbf2P5r-JDEfTSwvBWlTexfZAGjAZgdaKWM7_p-AUsAr_LfRc4I3y0uL6N8qmUR0KTlvs2LhiFN3p4eCIrHivY3v8RUInJXqUheoNM7mtX_3Ctkbawk_jBRr_zh_lfgTVaZiDktpv_9mf-riFG0CzwyIZRHJkeqGCvmYxKH6VQufQH47S4z9sMJ5qwFt7k0tQYZ6VD818vQOzADVN0rdzFdtx9OYV2ac7FtWT04TsdkZiFtcOl" />
</div>
<span className="font-label-md text-label-md text-slate-900 group-hover:text-emerald-600 transition-colors">Alex Rivera</span>
</div>
</div>
</header>
{/* Page Content */}
<div className="p-8 max-w-6xl mx-auto">
{/* Header Section */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-slate-900">Application Status</h2>
<p className="font-body-md text-body-md text-slate-500 mt-1">Track and manage your active job applications in real-time.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex bg-slate-50 p-1 rounded-lg border border-slate-300">
<button className="px-4 py-1.5 rounded-md bg-white shadow-sm text-label-md font-bold text-emerald-600">All (12)</button>
<button className="px-4 py-1.5 rounded-md text-label-md text-slate-500 hover:text-slate-900 transition-colors">Active (8)</button>
<button className="px-4 py-1.5 rounded-md text-label-md text-slate-500 hover:text-slate-900 transition-colors">Archived (4)</button>
</div>
<button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg font-label-md text-label-md text-slate-500 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
                        Filters
                    </button>
</div>
</div>
{/* Applications List (Bento-inspired List) */}
<div className="grid gap-4">
{/* Card 1: Interviewing */}
<div className="bg-white border border-slate-300 rounded-xl p-6 hover:border-emerald-600/40 hover:shadow-md transition-all cursor-pointer group" style={{"transform":"translateY(0px)"}}>
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
{/* Company Info */}
<div className="flex items-center gap-4 min-w-[240px]">
<div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-300 overflow-hidden">
<img className="w-10 h-10 object-contain" data-alt="A minimalist tech company logo featuring a sleek abstract geometric shape in royal blue, set against a clean white background with subtle depth and modern SaaS branding." src="https://lh3.googleusercontent.com/aida/AP1WRLvyCj0Iz7dcgXzyHLUbfac-CcM1f-YqZCumbI3G0tTBvNXEE9CMFyrIKys_UftGAiYNfwm4R5gQNEMQ6BfTDza9RD_FuPuuOYK1o5aLXgOSla8u2nCwpTXuvCzF3lXrvUGRAh9oOgEStZLBvUDUmYr0YFugYZ5QQf24rH1EjeJKEyU4oB89dERZplU6QGFnCcHoZbZmYpnQ_WNZWlWaLh9ecv2EA2hrvSm2B2wz7La_8172uguOYBqKsGmY" />
</div>
<div>
<h3 className="font-headline-md text-headline-md text-slate-900 group-hover:text-emerald-600 transition-colors">Senior Product Designer</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-md text-body-md text-slate-500">Linear Systems</span>
<span className="w-1 h-1 bg-slate-200 rounded-full"></span>
<span className="font-body-md text-body-md text-slate-500">San Francisco, CA</span>
</div>
</div>
</div>
{/* Timeline */}
<div className="flex-1 w-full">
<div className="relative">
{/* Line Background */}
<div className="absolute top-4 left-0 w-full h-0.5 bg-slate-200"></div>
{/* Progress Line */}
<div className="absolute top-4 left-0 w-[50%] h-0.5 bg-emerald-50 transition-all"></div>
<div className="relative flex justify-between">
{/* Stage: Submitted */}
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"\"FILL\" 1"}}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-emerald-700">Submitted</p>
<p className="text-[10px] text-slate-500">Oct 12</p>
</div>
{/* Stage: Under Review */}
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"\"FILL\" 1"}}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-emerald-700">Review</p>
<p className="text-[10px] text-slate-500">Oct 14</p>
</div>
{/* Stage: Interviewing */}
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border-2 border-emerald-600 text-emerald-600 flex items-center justify-center z-10 text-[18px] animate-pulse">
<span className="material-symbols-outlined">forum</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-emerald-600 font-bold">Interview</p>
<p className="text-[10px] text-slate-500">Oct 20</p>
</div>
{/* Stage: Offer */}
<div className="flex flex-col items-center opacity-40">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-transparent flex items-center justify-center z-10 text-[18px]">
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
<span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-label-sm font-bold">In Progress</span>
<button className="bg-slate-50 text-emerald-600 p-2 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-all">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
{/* Card 2: Submitted */}
<div className="bg-white border border-slate-300 rounded-xl p-6 hover:border-emerald-600/40 hover:shadow-md transition-all cursor-pointer group" style={{"transform":"translateY(0px)"}}>
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
{/* Company Info */}
<div className="flex items-center gap-4 min-w-[240px]">
<div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-300 overflow-hidden">
<img className="w-10 h-10 object-contain" data-alt="A professional circular logo for a creative agency, showcasing a vibrant gradient of emerald green and soft mint. Minimalist typography and a sleek vector icon representing growth and connection." src="https://lh3.googleusercontent.com/aida/AP1WRLtOeLF8vavfNYQt0_GelZLwZm1I0gRh2sa4gqnS8nT4pqNwQo7kWPlUE5PlaLNmqTWrX_ODJPmFAt25dZ2YYFCdVweQzIJI-OunTIPhYNenlO8B4hB-zB6-qmYiVmK3Y-7oh-dc9UzE050bsMoGJIf7MyQHObjekvVImoBb3K_p__9yiJL1JxHvn7AX9eMPT3RgQcE_qZH1U0hFM4qNVQ0t583r5tKxeu90hwAsiEk00S_tSgCkoX3210Pk" />
</div>
<div>
<h3 className="font-headline-md text-headline-md text-slate-900 group-hover:text-emerald-600 transition-colors">Visual Designer</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-md text-body-md text-slate-500">Stripe Architecture</span>
<span className="w-1 h-1 bg-slate-200 rounded-full"></span>
<span className="font-body-md text-body-md text-slate-500">Remote</span>
</div>
</div>
</div>
{/* Timeline */}
<div className="flex-1 w-full">
<div className="relative">
<div className="absolute top-4 left-0 w-full h-0.5 bg-slate-200"></div>
<div className="absolute top-4 left-0 w-[0%] h-0.5 bg-emerald-50 transition-all"></div>
<div className="relative flex justify-between">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border-2 border-emerald-600 text-emerald-600 flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">send</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-emerald-600 font-bold">Submitted</p>
<p className="text-[10px] text-slate-500">Today</p>
</div>
<div className="flex flex-col items-center opacity-40">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">pageview</span>
</div>
<p className="font-label-sm text-label-sm mt-2">Review</p>
</div>
<div className="flex flex-col items-center opacity-40">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">forum</span>
</div>
<p className="font-label-sm text-label-sm mt-2">Interview</p>
</div>
<div className="flex flex-col items-center opacity-40">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">card_membership</span>
</div>
<p className="font-label-sm text-label-sm mt-2">Offer</p>
</div>
</div>
</div>
</div>
{/* CTA */}
<div className="flex items-center gap-3 ml-auto">
<span className="bg-slate-50 text-slate-500 px-3 py-1 rounded-full text-label-sm font-bold">Pending</span>
<button className="bg-slate-50 text-emerald-600 p-2 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-all">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
{/* Card 3: Rejected */}
<div className="bg-white border border-slate-300 rounded-xl p-6 opacity-80 grayscale hover:grayscale-0 hover:border-error/40 hover:shadow-md transition-all cursor-pointer group" style={{"transform":"translateY(0px)"}}>
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
{/* Company Info */}
<div className="flex items-center gap-4 min-w-[240px]">
<div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-300 overflow-hidden">
<img className="w-10 h-10 object-contain" alt="Prisma Labs Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6DDZDyYHRweB_8KX0Hs_pvaNfKDg9ToYQCngiTOm1qno3ef3e_5eM_Biki2UcVxHR5t4OEUUBKV3VOJACCLeVynD6zCI0uWWJQTGiXvE6cjpeF55wQAoP7JZkdcfLoerL_I4O6bK7FZFp6SDSy8UWKFyrnSSmcHTblk_7FoVBW6LrdTfjt3qh3azB9sAFjRJGIqRS9Hy4VTWApfHkaZchD7ZWB5QIS8ec0AITa3BCinf8ksOZnCmuGVp9pUEFKkNAylG1IIN9I_JC" />
</div>
<div>
<h3 className="font-headline-md text-headline-md text-slate-900 group-hover:text-red-500 transition-colors">UI Engineer</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-md text-body-md text-slate-500">Prisma Labs</span>
<span className="w-1 h-1 bg-slate-200 rounded-full"></span>
<span className="font-body-md text-body-md text-slate-500">New York, NY</span>
</div>
</div>
</div>
{/* Timeline */}
<div className="flex-1 w-full">
<div className="relative">
<div className="absolute top-4 left-0 w-full h-0.5 bg-slate-200"></div>
<div className="absolute top-4 left-0 w-[33%] h-0.5 bg-red-50"></div>
<div className="relative flex justify-between">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-red-50 text-red-700 flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"\"FILL\" 1"}}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-red-700">Submitted</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">cancel</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-red-500 font-bold">Rejected</p>
<p className="text-[10px] text-slate-500">Oct 18</p>
</div>
<div className="flex flex-col items-center opacity-30">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">forum</span>
</div>
<p className="font-label-sm text-label-sm mt-2">Interview</p>
</div>
<div className="flex flex-col items-center opacity-30">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined">card_membership</span>
</div>
<p className="font-label-sm text-label-sm mt-2">Offer</p>
</div>
</div>
</div>
</div>
{/* CTA */}
<div className="flex items-center gap-3 ml-auto">
<span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-label-sm font-bold">Closed</span>
<button className="bg-slate-50 text-slate-500 p-2 rounded-lg group-hover:bg-red-500 group-hover:text-white transition-all">
<span className="material-symbols-outlined">delete_outline</span>
</button>
</div>
</div>
</div>
{/* Card 4: Offer Extended */}
<div className="bg-white border-2 border-emerald-600/20 rounded-xl p-6 hover:border-emerald-600/60 hover:shadow-lg transition-all cursor-pointer group bg-gradient-to-r from-white to-secondary-container/10" style={{"transform":"translateY(0px)"}}>
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
{/* Company Info */}
<div className="flex items-center gap-4 min-w-[240px]">
<div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-emerald-600/20 overflow-hidden shadow-sm">
<img className="w-10 h-10 object-contain" alt="Aether Labs Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnIgAzOpAvZVXdDw-HcgCF4xLy381xLT75xe-hCBIAGwCTYnuWbOwxU1g_g7REr4oxC9wz8hqGve6oO8GArHgm7FsLgR2N7J3K8mgnJocxkXsR7OrMqWaj5PcwcymBLtwaaan8Q8RDQ-1FdCdkHxcpKcqh-8S2scovNXUgrONZLi5SGGwfiPlkBdLpxwi374xg9v3wFglibY70wgQW5PkWEdBQRP0lExwQCEg07xcNc2dMRhq-bPXAhU2FLhO1ed5rkDUXsDJ_OCCg" />
</div>
<div>
<h3 className="font-headline-md text-headline-md text-slate-900 group-hover:text-emerald-600 transition-colors">Design Lead</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-md text-body-md text-slate-500">Aether Labs</span>
<span className="w-1 h-1 bg-slate-200 rounded-full"></span>
<span className="font-body-md text-body-md text-slate-500">London, UK (Remote)</span>
</div>
</div>
</div>
{/* Timeline */}
<div className="flex-1 w-full">
<div className="relative">
<div className="absolute top-4 left-0 w-full h-0.5 bg-slate-200"></div>
<div className="absolute top-4 left-0 w-[100%] h-0.5 bg-emerald-600 transition-all"></div>
<div className="relative flex justify-between">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"\"FILL\" 1"}}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-emerald-600">Submitted</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"\"FILL\" 1"}}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-emerald-600">Review</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center z-10 text-[18px]">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"\"FILL\" 1"}}>check_circle</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-emerald-600">Interview</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center z-10 text-[18px] ring-4 ring-primary/20">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"\"FILL\" 1"}}>celebration</span>
</div>
<p className="font-label-sm text-label-sm mt-2 text-emerald-600 font-bold">Offer Extended</p>
<p className="text-[10px] text-slate-500 font-bold">Today</p>
</div>
</div>
</div>
</div>
{/* CTA */}
<div className="flex items-center gap-3 ml-auto">
<span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-label-sm font-bold animate-bounce">Review Offer</span>
<button className="bg-emerald-600 text-white p-2 rounded-lg transition-all">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
{/* Empty State Suggestion (Hidden by default) */}
<div className="hidden flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-slate-300" id="empty-state">
<div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-slate-400 text-[40px]">work_off</span>
</div>
<h3 className="font-headline-md text-headline-md text-slate-900 mb-2">No applications found</h3>
<p className="font-body-md text-body-md text-slate-500 mb-6">Try adjusting your filters or start a new application.</p>
<button className="bg-emerald-600 text-white px-6 py-2 rounded-xl font-label-md text-label-md">Start New Application</button>
</div>
</div>

    </div>
  );
}
