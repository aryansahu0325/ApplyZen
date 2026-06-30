
import React from 'react';

export default function Notifications() {
  return (
    <div className="animate-fadeIn w-full">
      
{/* Top App Bar */}
<header className="h-16 flex justify-between items-center px-6 bg-white border-b border-slate-300 sticky top-0 z-40">
<div className="flex items-center gap-4">
<h2 className="font-headline-md text-headline-md font-bold text-emerald-600">Notifications</h2>
</div>
<div className="flex items-center gap-6">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-body-md focus:outline-none focus:border-emerald-600-container focus:ring-1 focus:ring-primary-container" placeholder="Search alerts..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
<span className="material-symbols-outlined text-slate-500" data-icon="help">help</span>
</button>
<button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
<span className="material-symbols-outlined text-slate-500" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
{/* Content Canvas */}
<section className="max-w-[1280px] mx-auto p-8">
{/* Action Header */}
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
<button className="px-6 py-2 rounded-full bg-emerald-600 text-white font-label-md text-label-md">All</button>
<button className="px-6 py-2 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-500 font-label-md text-label-md transition-colors">Applications</button>
<button className="px-6 py-2 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-500 font-label-md text-label-md transition-colors">AI Alerts</button>
<button className="px-6 py-2 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-500 font-label-md text-label-md transition-colors">Security</button>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-xs text-emerald-600 font-label-md text-label-md hover:underline">
<span className="material-symbols-outlined text-[18px]" data-icon="done_all">done_all</span>
                        Mark all as read
                    </button>
<button className="flex items-center gap-xs px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]" data-icon="settings">settings</span>
                        Settings
                    </button>
</div>
</div>
{/* Notifications List */}
<div className="space-y-4">
{/* Group: Today */}
<div className="mb-6">
<h3 className="font-label-sm text-label-sm text-slate-500 uppercase tracking-wider mb-4">Today</h3>
<div className="bg-white border border-slate-300 rounded-xl divide-y divide-outline-variant">
{/* Notification Item 1 (Unread) */}
<div className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-50"></div>
<div className="w-10 h-10 rounded-full bg-emerald-50/10 flex items-center justify-center text-emerald-600-container shrink-0">
<span className="material-symbols-outlined" data-icon="description" style={{"fontVariationSettings":"\"FILL\" 1"}}>description</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-label-md text-label-md font-bold text-slate-900">AI Agent applied to Senior Product Designer role at Figma</h4>
<span className="font-label-sm text-label-sm text-slate-500">2m ago</span>
</div>
<p className="font-body-md text-body-md text-slate-500 mb-4">Your AI agent successfully submitted your portfolio and tailored resume. The application status is now "Pending Review".</p>
<div className="flex gap-4">
<button className="font-label-sm text-label-sm text-emerald-600 font-bold hover:underline">View Application</button>
<button className="font-label-sm text-label-sm text-slate-500 hover:text-slate-900 transition-colors">Dismiss</button>
</div>
</div>
<div className="unread-indicator mt-2"></div>
</div>
{/* Notification Item 2 (Unread) */}
<div className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-50"></div>
<div className="w-10 h-10 rounded-full bg-emerald-50/10 flex items-center justify-center text-emerald-600-container shrink-0">
<span className="material-symbols-outlined" data-icon="bolt" style={{"fontVariationSettings":"\"FILL\" 1"}}>bolt</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-label-md text-label-md font-bold text-slate-900">New opportunity detected: Lead Frontend Architect at Loomis Financial</h4>
<span className="font-label-sm text-label-sm text-slate-500">1h ago</span>
</div>
<p className="font-body-md text-body-md text-slate-500">98% match detected. This role aligns with your goal for a $180k+ base salary and remote flexibility.</p>
</div>
<div className="unread-indicator mt-2"></div>
</div>
{/* Notification Item 3 */}
<div className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-label-md text-label-md text-slate-900">Monthly career analytics report is ready</h4>
<span className="font-label-sm text-label-sm text-slate-500">4h ago</span>
</div>
<p className="font-body-md text-body-md text-slate-500">Review your application performance, response rates, and market positioning for the last 30 days.</p>
</div>
</div>
</div>
</div>
{/* Group: Yesterday */}
<div>
<h3 className="font-label-sm text-label-sm text-slate-500 uppercase tracking-wider mb-4">Yesterday</h3>
<div className="bg-white border border-slate-300 rounded-xl divide-y divide-outline-variant">
{/* Notification Item 4 */}
<div className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-red-500 shrink-0">
<span className="material-symbols-outlined" data-icon="security">security</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-label-md text-label-md text-slate-900">Login detected from a new device</h4>
<span className="font-label-sm text-label-sm text-slate-500">Yesterday, 11:42 PM</span>
</div>
<p className="font-body-md text-body-md text-slate-500">A successful login was made from a Chrome browser on a MacOS device in San Francisco, CA. If this wasn't you, secure your account.</p>
<div className="mt-4">
<button className="px-4 py-1.5 bg-red-500 text-white rounded-lg font-label-sm text-label-sm">Secure Account</button>
</div>
</div>
</div>
{/* Notification Item 5 */}
<div className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-label-md text-label-md text-slate-900">Interview invite from Stripe</h4>
<span className="font-label-sm text-label-sm text-slate-500">Yesterday, 2:15 PM</span>
</div>
<p className="font-body-md text-body-md text-slate-500">Stripe wants to schedule a 30-minute introductory call. Choose a time from your synced calendar.</p>
</div>
</div>
</div>
</div>
</div>
{/* Empty State (Hidden by default, shown for demonstration) */}
<div className="hidden mt-2xl flex flex-col items-center text-center py-2xl bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300" id="empty-state">
<div className="w-24 h-24 mb-6 relative">

</div>
<h3 className="font-headline-md text-headline-md text-slate-900 mb-2">All caught up!</h3>
<p className="font-body-lg text-body-lg text-slate-500 max-w-md mx-auto mb-8">Your inbox is clear. We'll notify you when your AI agent finds new matches or your applications move forward.</p>
<button className="px-xl py-3 bg-emerald-600 text-white rounded-lg font-label-md text-label-md transition-transform active:scale-95">
                    Configure Alert Settings
                </button>
</div>
{/* Atmospheric Illustration */}
<div className="mt-2xl grid grid-cols-1 md:grid-cols-2 gap-xl">
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-300 flex flex-col justify-center">
<h3 className="font-headline-md text-headline-md text-emerald-600 mb-4">Maximize Visibility</h3>
<p className="font-body-lg text-body-lg text-slate-500 mb-6">Users with real-time notifications enabled are 3x more likely to secure first-round interviews. Don't miss the high-velocity hiring windows.</p>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-white-dim overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up of a professional woman with glasses smiling, bright studio lighting, soft cream background, modern tech professional aesthetic, detailed facial features." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Tvbuig7tt7DsKskdxOP2rhmaPj75dFcpPwCkl0101cgVDjB5mp5tgSxSQTfmLNYdd9XOTdFgFpWCV3C1OBpFYuId3HiSO525NAudlfyi3LXwzruziE7FuflFBAuLyKzxzUqZDte3ybwH_P20AsYKh-q5s0wBnywFbetiGPI81Kb1vCiISCXxTUkD5rDeV7GmSMQ5thDg-FBqMs01jsr5FhRDDX5Zaj1FyCzez7a5vhH3vvJjwiXEBTuwv0vb1U-hgF1p9LXlG42V"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-white-dim overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a creative male designer with a short beard, neutral background, cinematic soft lighting, minimalist SaaS professional style, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzo_uof6i8fPucWX_nxlM1rI_raWHJq8XvGiCuXU5X5hbnUZY9Dw3LEVmTKf2fHsgy3jC2C-7pIJ5_qAYTPiECBT2bdgOgoxN8tjV89BjteKdhiF_DwztX6YgaWVn_Mnph2sVMl7oMKduf-bWb7ypb1EnUODN9tNwV7KFGFcQisgevgkv_Vk-m_K5YQ0BPaSBNl6jCeFPesf-4rThehPa3DubCkiDCPhyy6t1Ef4joS4X_i6erD3vVgEJqIm4cvpBrrjpmEcoaKEjy"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-white-dim overflow-hidden flex items-center justify-center font-label-sm text-label-sm text-slate-500 bg-slate-200">
                                +12k
                            </div>
</div>
<span className="font-label-md text-label-md text-slate-500">Active ApplyZen Professionals</span>
</div>
</div>
<div className="h-64 rounded-2xl overflow-hidden border border-slate-300 relative group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10"></div>
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A clean, minimalist high-tech command center interface showing abstract data streams and glowing node connections. The aesthetic is monochromatic with deep greens and emerald highlights, representing an intelligent AI network. The lighting is soft and ambient, creating a sense of calm efficiency." style={{"backgroundImage":"url(\"https"}}></div>
<div className="absolute bottom-lg left-lg z-20">
<div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-300 shadow-lg">
<p className="font-label-sm text-label-sm text-emerald-600 font-bold">AI STATUS: ACTIVE</p>
<p className="font-body-md text-body-md text-slate-900">Scanning 42 new job boards...</p>
</div>
</div>
</div>
</div>
</section>

    </div>
  );
}
