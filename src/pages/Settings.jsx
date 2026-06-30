
import React from 'react';

export default function Settings() {
  return (
    <div className="animate-fadeIn max-w-5xl mx-auto">
      
<div className="p-8 max-w-5xl mx-auto space-y-xl pb-32">
{/* Section 1: Profile */}
<section className="glass-card rounded-xl p-8">
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined text-emerald-600">person</span>
<h3 className="font-headline-md text-headline-md">Profile</h3>
</div>
<div className="flex flex-col md:flex-row gap-xl">
<div className="flex flex-col items-center gap-4">
<div className="relative group">
<div className="w-32 h-32 rounded-full bg-slate-50-highest border-2 border-dashed border-slate-200-variant overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-alt="High-resolution, minimalist close-up of a professional user's avatar against a clean, soft-lit studio background. The style is modern corporate, with neutral tones and a hint of emerald green reflecting from a nearby screen. The lighting is high-key and pristine, emphasizing a sharp, clean tech-focused aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-v0d0HJ7rKTioKAgKMl3TpwrNajnQJaf8nEYbkcVYkOuUyL_ZzsohZu5dSE9Sf8iUpTnwroPwCNyURKjpyeTBVIFFGCT0jHYCeysR_Q_ctGokrfv5uuiPFmdlPmSsokwk_vQDcqF048mTaMBtp7_KvQx-wejP0fWaCoO-Gvdnx-RS1hTyqPEh92B-r1YxVtWmZBCyvCQRvJGt53gYmB1G6oHnNzsDFr5SCFK5ggLSkPe3JbBghgYMKluWDvpu9nkVRLW9c0iA44sq"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
<span className="material-symbols-outlined text-white">upload</span>
</div>
</div>
</div>
<button className="text-emerald-600 font-label-md text-label-md hover:underline">Change Photo</button>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-slate-500">Full Name</label>
<input className="w-full bg-slate-50-low border-slate-200-variant rounded-lg p-3 text-body-md" type="text" value="Alex Rivera"/>
</div>
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-slate-500">Email Address</label>
<input className="w-full bg-slate-50-low border-slate-200-variant rounded-lg p-3 text-body-md" type="email" value="alex.rivera@zen.ai"/>
</div>
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-slate-500">Phone Number</label>
<input className="w-full bg-slate-50-low border-slate-200-variant rounded-lg p-3 text-body-md" type="tel" value="+1 (555) 123-4567"/>
</div>
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-slate-500">LinkedIn URL</label>
<input className="w-full bg-slate-50-low border-slate-200-variant rounded-lg p-3 text-body-md" placeholder="linkedin.com/in/username" type="url"/>
</div>
<div className="space-y-2 md:col-span-2">
<label className="font-label-sm text-label-sm text-slate-500">GitHub Username</label>
<input className="w-full bg-slate-50-low border-slate-200-variant rounded-lg p-3 text-body-md" placeholder="arivera-dev" type="text"/>
</div>
</div>
</div>
</section>
{/* Section 2: Connected Accounts */}
<section className="glass-card rounded-xl p-8">
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined text-emerald-600">link</span>
<h3 className="font-headline-md text-headline-md">Connected Accounts</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-primary bg-emerald-600/5 flex flex-col gap-4 relative">
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-red-500">mail</span>
</div>
<span className="bg-emerald-600/20 text-emerald-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Connected</span>
</div>
<div>
<p className="font-label-md text-label-md">Gmail</p>
<p className="text-label-sm text-slate-500">Synced 2m ago</p>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-200-variant bg-slate-50-low flex flex-col gap-4 hover:border-primary/50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-blue-600">alternate_email</span>
</div>
<span className="text-outline text-[10px] font-bold uppercase tracking-wider">Disconnected</span>
</div>
<div>
<p className="font-label-md text-label-md">Outlook</p>
<p className="text-label-sm text-slate-500">Tap to connect</p>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-200-variant bg-slate-50-low/50 flex flex-col gap-4 grayscale opacity-60 relative overflow-hidden">
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-green-500">chat</span>
</div>
</div>
<div>
<p className="font-label-md text-label-md">WhatsApp</p>
<p className="text-label-sm text-slate-500 italic">Coming Soon</p>
</div>
</div>
</div>
</section>
{/* Section 3: Automation Preferences */}
<section className="glass-card rounded-xl p-8">
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined text-emerald-600">smart_toy</span>
<h3 className="font-headline-md text-headline-md">Automation Preferences</h3>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between p-4 bg-slate-50-low rounded-xl">
<div className="flex flex-col">
<p className="font-label-md text-label-md">Auto Apply</p>
<p className="text-label-sm text-slate-500">Automatically apply to jobs that match 95%+ criteria.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-50-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
</label>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50-low rounded-xl">
<div className="flex flex-col">
<p className="font-label-md text-label-md">Auto Generate Cover Letters</p>
<p className="text-label-sm text-slate-500">Use AI to craft bespoke responses for each application.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-50-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
</label>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-slate-500">Application Strategy</label>
<select className="w-full bg-slate-50-low border-slate-200-variant rounded-lg p-3 text-body-md">
<option>Quality Focused (Highly Targeted)</option>
<option>Quantity Focused (Mass Outreach)</option>
<option>Hybrid (Balanced Approach)</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-slate-500">AI Confidence Threshold</label>
<select className="w-full bg-slate-50-low border-slate-200-variant rounded-lg p-3 text-body-md">
<option>Very High (90%+ Match)</option>
<option>High (80%+ Match)</option>
<option>Moderate (70%+ Match)</option>
</select>
</div>
</div>
</div>
</section>
{/* Section 4: AI Settings */}
<section className="glass-card rounded-xl p-8">
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined text-emerald-600">psychology</span>
<h3 className="font-headline-md text-headline-md">AI Settings</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
<label className="font-label-sm text-label-sm text-slate-500">Model Selection</label>
<div className="space-y-2">
<div className="p-4 border border-primary bg-emerald-600/5 rounded-xl flex items-center gap-4 cursor-pointer">
<div className="w-4 h-4 rounded-full border-4 border-primary"></div>
<div>
<p className="font-label-md text-label-md">Zen-4 Turbo (Default)</p>
<p className="text-[10px] text-slate-500 uppercase font-bold">Fast &amp; Creative</p>
</div>
</div>
<div className="p-4 border border-slate-200-variant hover:border-primary/50 rounded-xl flex items-center gap-4 cursor-pointer transition-colors">
<div className="w-4 h-4 rounded-full border-2 border-slate-200-variant"></div>
<div>
<p className="font-label-md text-label-md">Zen-Pro Analyst</p>
<p className="text-[10px] text-slate-500 uppercase font-bold">Data Focused &amp; Precise</p>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<div className="space-y-2">
<div className="flex justify-between">
<label className="font-label-sm text-label-sm text-slate-500">Creativity Level</label>
<span className="text-emerald-600 font-bold text-label-sm">High</span>
</div>
<input className="w-full h-1.5 bg-slate-50-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range"/>
</div>
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-slate-500">Response Length</label>
<div className="flex gap-2">
<button className="flex-1 py-2 px-3 bg-slate-50-highest text-slate-500 rounded-lg font-label-sm text-label-sm hover:bg-emerald-600 hover:text-white transition-all">Short</button>
<button className="flex-1 py-2 px-3 bg-emerald-600 text-white rounded-lg font-label-sm text-label-sm">Balanced</button>
<button className="flex-1 py-2 px-3 bg-slate-50-highest text-slate-500 rounded-lg font-label-sm text-label-sm hover:bg-emerald-600 hover:text-white transition-all">Detailed</button>
</div>
</div>
</div>
</div>
</section>
{/* Section 5: Theme & Storage */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
<section className="glass-card rounded-xl p-8">
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined text-emerald-600">palette</span>
<h3 className="font-headline-md text-headline-md">Theme</h3>
</div>
<div className="flex gap-4">
<button className="flex-1 aspect-square rounded-xl border-2 border-primary bg-white flex flex-col items-center justify-center gap-2">
<span className="material-symbols-outlined text-emerald-600">light_mode</span>
<span className="font-label-sm text-label-sm">Light</span>
</button>
<button className="flex-1 aspect-square rounded-xl border border-slate-200-variant bg-slate-900 text-white flex flex-col items-center justify-center gap-2">
<span className="material-symbols-outlined">dark_mode</span>
<span className="font-label-sm text-label-sm">Dark</span>
</button>
<button className="flex-1 aspect-square rounded-xl border border-slate-200-variant bg-gradient-to-br from-white to-slate-900 flex flex-col items-center justify-center gap-2 overflow-hidden">
<span className="material-symbols-outlined text-slate-900">contrast</span>
<span className="font-label-sm text-label-sm">System</span>
</button>
</div>
</section>
<section className="glass-card rounded-xl p-8">
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined text-emerald-600">storage</span>
<h3 className="font-headline-md text-headline-md">Storage</h3>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<p className="text-body-md font-body-md">Resume Storage</p>
<p className="font-label-sm text-label-sm text-slate-500">42 MB / 100 MB</p>
</div>
<div className="w-full h-3 bg-slate-50-highest rounded-full overflow-hidden">
<div className="h-full bg-emerald-600" style={{"width":"42%"}}></div>
</div>
<p className="text-label-sm text-slate-500">Includes 12 resume variants and 85 generated cover letters.</p>
<button className="text-emerald-600 font-label-sm text-label-sm font-bold flex items-center gap-xs">
                            Manage Storage <span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</section>
</div>
{/* Section 6: Security & Privacy */}
<section className="glass-card rounded-xl p-8">
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined text-emerald-600">security</span>
<h3 className="font-headline-md text-headline-md">Security &amp; Privacy</h3>
</div>
<div className="divide-y divide-outline-variant">
<div className="py-4 flex items-center justify-between">
<div>
<p className="font-label-md text-label-md">Password</p>
<p className="text-label-sm text-slate-500">Last changed 3 months ago</p>
</div>
<button className="px-6 py-2 border border-slate-200-variant rounded-lg font-label-md text-label-md hover:bg-slate-50-low transition-colors">Change Password</button>
</div>
<div className="py-4 flex items-center justify-between">
<div>
<p className="font-label-md text-label-md">Two-Factor Authentication</p>
<p className="text-label-sm text-slate-500">Add an extra layer of security to your account.</p>
</div>
<button className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-label-md text-label-md">Enable 2FA</button>
</div>
<div className="py-4 flex items-center justify-between">
<div>
<p className="font-label-md text-label-md">Data Export</p>
<p className="text-label-sm text-slate-500">Download a copy of your application history and profile data.</p>
</div>
<button className="px-6 py-2 border border-slate-200-variant rounded-lg font-label-md text-label-md hover:bg-slate-50-low transition-colors">Export All</button>
</div>
<div className="py-4 flex items-center justify-between">
<div>
<p className="font-label-md text-label-md text-red-500">Delete Account</p>
<p className="text-label-sm text-slate-500">Permanently remove all data and close your ApplyZen account.</p>
</div>
<button className="text-red-500 font-label-md text-label-md hover:underline">Delete Account</button>
</div>
</div>
</section>
</div>

    </div>
  );
}
