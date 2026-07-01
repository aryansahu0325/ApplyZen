
import React from 'react';

export default function HelpCenter() {
  return (
    <div className="animate-fadeIn w-full">
      
{/* Top App Bar */}
<header className="h-16 flex justify-between items-center px-6 border-b border-slate-300 bg-white sticky top-0 z-40">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md text-emerald-600 font-bold">Help Center</span>
</div>
<div className="flex items-center gap-6">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400-variant" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-full text-label-md focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-primary/10" placeholder="Search documentation..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
{/* Hero Section */}
<section className="hero-gradient py-2xl px-2xl text-center border-b border-slate-300 overflow-hidden relative">
<div className="absolute inset-0 opacity-10">
{/* Decorative background elements */}
<div className="absolute top-10 left-10 w-64 h-64 bg-emerald-50 rounded-full blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
</div>
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="font-display text-display text-slate-900 mb-6">How can we help you?</h2>
<div className="relative max-w-2xl mx-auto mb-6">
<span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-emerald-600 text-3xl" data-icon="search">search</span>
<input className="w-full pl-16 pr-8 py-5 text-body-lg bg-white shadow-xl shadow-primary/5 rounded-2xl border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all" placeholder="Search for guides, FAQs, or troubleshooting..." type="text"/>
</div>
<div className="flex flex-wrap justify-center gap-4">
<span className="font-label-md text-label-md text-slate-500">Popular:</span>
<a className="font-label-md text-label-md text-emerald-600 hover:underline" href="#">Setting up AI Agents</a>
<a className="font-label-md text-label-md text-emerald-600 hover:underline" href="#">Resume Optimization</a>
<a className="font-label-md text-label-md text-emerald-600 hover:underline" href="#">LinkedIn Integration</a>
</div>
</div>
</section>
{/* Category Grid */}
<section className="max-w-container-max mx-auto px-2xl py-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Getting Started */}
<div className="group p-6 bg-white border border-slate-300 rounded-xl hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-emerald-50/10 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-2xl" data-icon="rocket_launch">rocket_launch</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Getting Started</h3>
<p className="font-body-md text-body-md text-slate-500 mb-6">Master the basics and set up your ApplyZen profile for success.</p>
<a className="flex items-center gap-2 font-label-md text-label-md text-emerald-600 font-bold" href="#">
                        Learn More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
{/* AI Automation */}
<div className="group p-6 bg-white border border-slate-300 rounded-xl hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-blue-50/10 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-2xl" data-icon="bolt">bolt</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">AI Automation</h3>
<p className="font-body-md text-body-md text-slate-500 mb-6">How to configure your AI career agents to apply on your behalf.</p>
<a className="flex items-center gap-2 font-label-md text-label-md text-emerald-600 font-bold" href="#">
                        Learn More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
{/* Resume Builder */}
<div className="group p-6 bg-white border border-slate-300 rounded-xl hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-emerald-50/10 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-2xl" data-icon="edit_note">edit_note</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Resume Builder</h3>
<p className="font-body-md text-body-md text-slate-500 mb-6">Optimization tips for getting past ATS filters using AI insights.</p>
<a className="flex items-center gap-2 font-label-md text-label-md text-emerald-600 font-bold" href="#">
                        Learn More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
{/* Account & Privacy */}
<div className="group p-6 bg-white border border-slate-300 rounded-xl hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-slate-200-variant/10 rounded-lg flex items-center justify-center text-slate-400 mb-4 group-hover:bg-slate-200 group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-2xl" data-icon="shield">shield</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Account &amp; Privacy</h3>
<p className="font-body-md text-body-md text-slate-500 mb-6">Manage your subscriptions, security settings, and data privacy.</p>
<a className="flex items-center gap-2 font-label-md text-label-md text-emerald-600 font-bold" href="#">
                        Learn More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
{/* Troubleshooting */}
<div className="group p-6 bg-white border border-slate-300 rounded-xl hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-red-50/10 rounded-lg flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-2xl" data-icon="build">build</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Troubleshooting</h3>
<p className="font-body-md text-body-md text-slate-500 mb-6">Quick fixes for common technical issues and integration errors.</p>
<a className="flex items-center gap-2 font-label-md text-label-md text-emerald-600 font-bold" href="#">
                        Learn More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
{/* Community Help */}
<div className="group p-6 bg-slate-50 border border-dashed border-slate-300 rounded-xl hover:border-emerald-600 hover:bg-white transition-all duration-300 flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-3xl text-slate-400 mb-4" data-icon="groups">groups</span>
<h3 className="font-headline-md text-headline-md mb-2">Community Forum</h3>
<p className="font-body-md text-body-md text-slate-500">Connect with 50,000+ job seekers sharing tips and strategies.</p>
</div>
</div>
</section>
{/* FAQ Section */}
<section className="max-w-3xl mx-auto px-6 py-2xl border-t border-slate-300">
<h2 className="font-headline-lg text-headline-lg text-center mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="faq-accordion group bg-white border border-slate-300 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
<span className="font-headline-md text-headline-md">How does the AI Agent automation work?</span>
<span className="material-symbols-outlined arrow-icon transition-transform duration-300 text-emerald-600" data-icon="expand_more">expand_more</span>
</summary>
<div className="px-6 pb-6 text-body-md text-slate-500 leading-relaxed">
                        Our AI Agents use natural language processing to understand job descriptions and match them with your experience. Once configured, they can fill out application forms, customize cover letters, and track follow-ups based on your predefined preferences.
                    </div>
</details>
<details className="faq-accordion group bg-white border border-slate-300 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
<span className="font-headline-md text-headline-md">Is my personal data shared with employers?</span>
<span className="material-symbols-outlined arrow-icon transition-transform duration-300 text-emerald-600" data-icon="expand_more">expand_more</span>
</summary>
<div className="px-6 pb-6 text-body-md text-slate-500 leading-relaxed">
                        Your data is only shared with employers when you explicitly authorize a job application. We never sell your data to third-party aggregators. All document storage is encrypted at rest using industry-standard protocols.
                    </div>
</details>
<details className="faq-accordion group bg-white border border-slate-300 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
<span className="font-headline-md text-headline-md">Can I use ApplyZen for free?</span>
<span className="material-symbols-outlined arrow-icon transition-transform duration-300 text-emerald-600" data-icon="expand_more">expand_more</span>
</summary>
<div className="px-6 pb-6 text-body-md text-slate-500 leading-relaxed">
                        Yes! ApplyZen offers a 'Basic' plan that includes resume optimization and 5 automated applications per month. For heavy job searching, our 'Pro' plan offers unlimited agents and advanced analytics.
                    </div>
</details>
<details className="faq-accordion group bg-white border border-slate-300 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
<span className="font-headline-md text-headline-md">How do I cancel my subscription?</span>
<span className="material-symbols-outlined arrow-icon transition-transform duration-300 text-emerald-600" data-icon="expand_more">expand_more</span>
</summary>
<div className="px-6 pb-6 text-body-md text-slate-500 leading-relaxed">
                        You can cancel your subscription at any time via the 'Billing' section in your Settings. Your Pro benefits will remain active until the end of your current billing cycle.
                    </div>
</details>
</div>
</section>
{/* Contact Section */}
<section className="max-w-container-max mx-auto px-2xl py-2xl">
<div className="bg-emerald-600 p-2xl rounded-2xl flex flex-col md:flex-row items-center justify-between gap-xl relative overflow-hidden">
{/* Abstract background pattern */}
<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg height="100%" preserveaspectratio="none" viewbox="0 0 100 100" width="100%">
<path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5"></path>
</svg>
</div>
<div className="relative z-10 text-center md:text-left">
<h2 className="font-headline-lg text-headline-lg text-white mb-2">Still need help?</h2>
<p className="font-body-lg text-body-lg text-white/80">Our support team is available 24/7 to assist with your career journey.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 relative z-10">
<button className="px-xl py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-4">
<span className="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
                        Start Live Chat
                    </button>
<button className="px-xl py-4 bg-emerald-50 text-emerald-700 font-bold rounded-lg hover:bg-emerald-50/90 transition-colors flex items-center gap-4">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
                        Email Support
                    </button>
</div>
</div>
</section>
{/* Footer Documentation */}
<footer className="max-w-container-max mx-auto px-2xl py-2xl border-t border-slate-300 grid grid-cols-2 md:grid-cols-4 gap-xl">
<div>
<h4 className="font-label-md text-label-md uppercase tracking-widest text-slate-400 mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-slate-500 hover:text-emerald-600" href="#">API Documentation</a></li>
<li><a className="font-body-md text-body-md text-slate-500 hover:text-emerald-600" href="#">System Status</a></li>
<li><a className="font-body-md text-body-md text-slate-500 hover:text-emerald-600" href="#">Release Notes</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md uppercase tracking-widest text-slate-400 mb-6">Community</h4>
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-slate-500 hover:text-emerald-600" href="#">Official Blog</a></li>
<li><a className="font-body-md text-body-md text-slate-500 hover:text-emerald-600" href="#">User Groups</a></li>
<li><a className="font-body-md text-body-md text-slate-500 hover:text-emerald-600" href="#">Referral Program</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md uppercase tracking-widest text-slate-400 mb-6">Compliance</h4>
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-slate-500 hover:text-emerald-600" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-body-md text-slate-500 hover:text-emerald-600" href="#">Terms of Service</a></li>
<li><a className="font-body-md text-body-md text-slate-500 hover:text-emerald-600" href="#">Cookie Policy</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 text-emerald-600 mb-4">
<span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
<span className="font-headline-md text-headline-md font-bold">ApplyZen</span>
</div>
<p className="font-body-sm text-sm text-slate-500 opacity-60">© 2024 ApplyZen Technologies Inc. All rights reserved. Empowerment through automation.</p>
</div>
</footer>

    </div>
  );
}
