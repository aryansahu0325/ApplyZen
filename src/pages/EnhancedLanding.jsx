import React from 'react';
import { Link } from 'react-router-dom';

export default function EnhancedLanding() {
  return (
    <>

      {/* BEGIN: Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight">ApplyZen</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a className="text-sm font-medium text-slate-600 hover:text-primary" href="#features">Features</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary" href="#how-it-works">How It Works</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary" href="#roadmap">Roadmap</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary" href="#pricing">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link className="text-sm font-medium text-slate-600 hover:text-primary" to="/login">Sign in</Link>
              <Link className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-custom text-sm font-semibold transition-all" to="/signup">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>
        {/* BEGIN: Hero Section */}
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  AI Powered Career Copilot
                </div>
                <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                  Never Miss an Opportunity. <br />
                  <span className="text-primary">We Apply. You Grow.</span>
                </h1>
                <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  ApplyZen is your AI career copilot that finds opportunities, creates the perfect resume, fills applications automatically, and tracks everything in one place.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                  <Link className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-custom font-bold text-lg flex items-center justify-center gap-2" to="/signup">
                    Get Started Free <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </Link>
                  <a className="w-full sm:w-auto border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-custom font-bold text-lg flex items-center justify-center gap-2" href="#">
                    Watch Demo <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex -space-x-2">
                    <img alt="User" className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBc5ZQgYXHWMZV-OtoGe21jIeqBNhKTr_M8EhfitJdaeImiEy9XurSPLaqk6sAvDImcNoMExE4fM0WgYaxXegb3biyVwRdjnON9upwyQ_t83TmiNxwXvkWNMcBWTk4JyclZ4Wgg8HnJ8RsveG12RwNqi2kMccts3u47Tf1ffzpTSsdBGWS8F2vSmXcbr_JI-EnpuMEBADfzl3OFJcMToqo_zUN0SIg0XaPuhdE4gIjw9eBlAmsMF4NLkX76zsWI_uIKfAbWiYf7BJV" />
                    <img alt="User" className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLVvYUCr6DL6W57xXs0gpBucSujTxxTO3pLR1i2pitAOUTWC-OVNAHXETDFl6kG8rUlojhwsc5XpW4KjpYuHeVazOuSsxKlKVIdh4wVMRU6odXzZqGbysJGyPQNZuk0alLTzZIWywrdDqAkLnAeZzFRHgBlgijGKoWnffDzs9hbH91eF3j_8bunZNhVSIp6C27AxhVKQFHAz94pBIV7OPV4_SVbjAdRejQmkRbTGl4t1qUcB3-NJe2KbQSL9YVm-KMe8FwyrbFAFZc" />
                    <img alt="User" className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM28PWdRw3D_qOTnagVBkacnlF5S7lQjh0YibFKkZOK9m6LzqK4PRCCFsRKwsasfyf7nO2xXrXLv9S1155OZ1RvdE1dxuVfxgZKqNWBDwYIcRBN8sDWJx4cDtN3bWmdxsVqD4foPTpqpK7VvpHbEDbVkZKA2xXaotpAakHWzxIlVShro6BvdTJx7WF5ts2qzHxnOWxQ5fG7s-7Dsz7R5W78sfP5r33f1dP6GAeJCOOW1jvVyL0bW0htqpJlmXZa4WVZnBT_vgURGH5" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white text-[10px] flex items-center justify-center font-bold">+10k</div>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Trusted by 10,000+ career-focused individuals</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative animate-float">
                  <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
                    <img alt="ApplyZen Dashboard Mockup" className="w-full h-auto object-cover object-top max-h-[500px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0-d12wExU80T6JAcBLaqOpWS9gbWdWyqAkNK7az9wYhWfCrYIuX8haE7bfKOLZs4DQ5wlHcOetBIJ3lAFtIZnQwAAYmuS9aRfJM9Qcli4tWO2UdPycKPj5t1JueiR-wIethM14R5YRCN78XNFbketRyMBn08WUQoN32nuVR9Qsy8VdASVLlxmLz69aoBvShZKBako6qkWZnCdx_JzvE9ziFO4tLH6yhYB1jXhaszUdm_59JXOcbRG61zwJxg-heYfwE55a4BorhEg" />
                    <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BEGIN: Live AI Pulse */}
        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Integrates with Gmail and Outlook</h2>
                <p className="text-slate-500 text-sm mt-1">Seamlessly sync your career communications</p>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-6 h-6" />
                  <span className="font-semibold text-slate-700">Gmail</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <img src="/outlook.svg" alt="Outlook" className="w-6 h-6" />
                  <span className="font-semibold text-slate-700">Outlook</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BEGIN: Success Metrics Bento Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Real Results</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-4">Growth Powered by Intelligence</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {/* Time Saved Card */}
              <div className="md:col-span-2 lg:col-span-3 bento-card p-8 rounded-[24px] border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-emerald-50 text-primary rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">80% Time Saved</h3>
                  <p className="text-slate-500 text-sm">Automating the manual grunt work of searching and filling forms.</p>
                </div>
                <div className="mt-8 flex items-end gap-2">
                  <div className="w-full bg-slate-100 h-24 rounded-lg flex items-end gap-1 p-2">
                    <div className="bg-slate-200 w-full h-[40%] rounded-sm"></div>
                    <div className="bg-slate-200 w-full h-[30%] rounded-sm"></div>
                    <div className="bg-slate-200 w-full h-[50%] rounded-sm"></div>
                    <div className="bg-primary w-full h-[90%] rounded-sm"></div>
                    <div className="bg-primary w-full h-[100%] rounded-sm"></div>
                  </div>
                </div>
              </div>
              {/* Success Rate Card */}
              <div className="md:col-span-2 lg:col-span-3 bento-card p-8 rounded-[24px] border border-slate-100 flex flex-col justify-between bg-slate-900 text-white">
                <div>
                  <div className="w-12 h-12 bg-white/10 text-primary rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">3x More Interviews</h3>
                  <p className="text-slate-400 text-sm">Hyper-targeted applications mean higher conversion from "Applied" to "Interview".</p>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center text-xs font-bold mb-2 uppercase tracking-widest text-slate-400">
                    <span className="">Standard Process</span>
                    <span className="">With ApplyZen</span>
                  </div>
                  <div className="relative h-12 w-full bg-white/5 rounded-full overflow-hidden flex items-center px-2">
                    <div className="bg-primary h-8 w-[75%] rounded-full flex items-center px-4 font-bold text-xs">75% RESPONSE RATE</div>
                  </div>
                </div>
              </div>
              {/* Small Stats 1 */}
              <div className="md:col-span-1 lg:col-span-2 bento-card p-6 rounded-[24px] border border-slate-100 text-center">
                <div className="text-4xl font-extrabold text-primary mb-2">10x</div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter">More Applications</p>
              </div>
              {/* Small Stats 2 */}
              <div className="md:col-span-1 lg:col-span-2 bento-card p-6 rounded-[24px] border border-slate-100 text-center">
                <div className="text-4xl font-extrabold text-slate-900 mb-2">24/7</div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter">Autonomous Agents</p>
              </div>
              {/* Small Stats 3 */}
              <div className="md:col-span-2 lg:col-span-2 bento-card p-6 rounded-[24px] border border-slate-100 text-center">
                <div className="text-4xl font-extrabold text-slate-900 mb-2">10k+</div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter">Users Growing Fast</p>
              </div>
            </div>
          </div>
        </section>
        {/* BEGIN: Career Growth Roadmap */}
        <section className="py-24 bg-slate-50" id="roadmap">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16"><span className="text-primary font-bold text-xs uppercase tracking-widest">How It Works</span><h2 className="text-3xl font-extrabold text-slate-900 mt-4">Your Career Journey in 4 Simple Steps</h2></div><div className="relative mb-20"><div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 hidden lg:block"></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"><div className="text-center flex flex-col items-center"><div className="w-16 h-16 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center mb-6 relative"><span className="material-symbols-outlined text-green-600">mail</span></div><h3 className="font-bold text-slate-900 mb-2">1. Connect</h3><p className="text-xs text-slate-500 leading-relaxed px-4">Connect your Gmail or Outlook account in one click.</p></div><div className="text-center flex flex-col items-center"><div className="w-16 h-16 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center mb-6 relative"><span className="material-symbols-outlined text-purple-600">smart_toy</span></div><h3 className="font-bold text-slate-900 mb-2">2. AI Finds Opportunities</h3><p className="text-xs text-slate-500 leading-relaxed px-4">Our AI agents scan &amp; detect relevant opportunities for you.</p></div><div className="text-center flex flex-col items-center"><div className="w-16 h-16 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center mb-6 relative"><span className="material-symbols-outlined text-orange-600">description</span></div><h3 className="font-bold text-slate-900 mb-2">3. We Apply for You</h3><p className="text-xs text-slate-500 leading-relaxed px-4">AI builds your resume, fills forms and applies automatically.</p></div><div className="text-center flex flex-col items-center"><div className="w-16 h-16 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center mb-6 relative"><span className="material-symbols-outlined text-blue-600">query_stats</span></div><h3 className="font-bold text-slate-900 mb-2">4. Track &amp; Grow</h3><p className="text-xs text-slate-500 leading-relaxed px-4">Track all applications and grow your career faster.</p></div></div></div><div className="bg-purple-50/50 rounded-[24px] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 border border-purple-100"><div className="flex items-center gap-8 lg:w-1/2"><div className="w-32 h-32 flex-shrink-0 animate-float"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0-d12wExU80T6JAcBLaqOpWS9gbWdWyqAkNK7az9wYhWfCrYIuX8haE7bfKOLZs4DQ5wlHcOetBIJ3lAFtIZnQwAAYmuS9aRfJM9Qcli4tWO2UdPycKPj5t1JueiR-wIethM14R5YRCN78XNFbketRyMBn08WUQoN32nuVR9Qsy8VdASVLlxmLz69aoBvShZKBako6qkWZnCdx_JzvE9ziFO4tLH6yhYB1jXhaszUdm_59JXOcbRG61zwJxg-heYfwE55a4BorhEg" alt="Rocket" className="w-full h-full object-contain" /></div><div><h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4">Save Time. Apply More.<br />Get Better Opportunities.</h3><p className="text-sm text-slate-600 leading-relaxed">ApplyZen boosts your productivity by 10x so you can focus on what matters: learning, building and growing.</p></div></div><div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:w-1/2"><div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-purple-50"><div className="text-2xl font-extrabold text-indigo-600 mb-1">10x</div><div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">More Applications</div></div><div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-purple-50"><div className="text-2xl font-extrabold text-indigo-600 mb-1">80%</div><div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Time Saved</div></div><div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-purple-50"><div className="text-2xl font-extrabold text-indigo-600 mb-1">3x</div><div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Better Response</div></div><div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-purple-50"><div className="text-2xl font-extrabold text-indigo-600 mb-1">24/7</div><div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">AI Working</div></div></div></div></div>
        </section>
        {/* BEGIN: Join the Community (Marquee) */}
        <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Recent Placements</h2>
            <p className="text-slate-900 font-bold">Join thousands who landed their dream roles</p>
          </div>
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex items-center py-4">
              {/* Placement 1 */}
              <div className="mx-6 flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-full border border-slate-100">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">M</div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Software Engineer</div>
                  <div className="text-[10px] text-slate-500">Meta</div>
                </div>
              </div>
              {/* Placement 2 */}
              <div className="mx-6 flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-full border border-slate-100">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">G</div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Product Manager</div>
                  <div className="text-[10px] text-slate-500">Google</div>
                </div>
              </div>
              {/* Placement 3 */}
              <div className="mx-6 flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-full border border-slate-100">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">S</div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Data Analyst</div>
                  <div className="text-[10px] text-slate-500">Stripe</div>
                </div>
              </div>
              {/* Placement 4 */}
              <div className="mx-6 flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-full border border-slate-100">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs">A</div>
                <div>
                  <div className="text-xs font-bold text-slate-900">UX Designer</div>
                  <div className="text-[10px] text-slate-500">Amazon</div>
                </div>
              </div>
              {/* Placement 5 */}
              <div className="mx-6 flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-full border border-slate-100">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">S</div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Frontend Dev</div>
                  <div className="text-[10px] text-slate-500">Spotify</div>
                </div>
              </div>
              {/* Repeat for marquee effect */}
              <div className="mx-6 flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-full border border-slate-100">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">M</div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Software Engineer</div>
                  <div className="text-[10px] text-slate-500">Meta</div>
                </div>
              </div>
              <div className="mx-6 flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-full border border-slate-100">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">G</div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Product Manager</div>
                  <div className="text-[10px] text-slate-500">Google</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BEGIN: Features Grid */}
        <section className="py-24 bg-white" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Core Capabilities</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4 mb-4">Everything You Need To Stay Ahead</h2>
            <p className="text-slate-500">Powerful AI agents working 24*7 to simplify your job search</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-custom border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Opportunity Detection</h3>
              <p className="text-slate-500 text-sm leading-relaxed">AI scans your emails and finds internships, jobs, hackathons, scholarships &amp; more.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 rounded-custom border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Resume Builder</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Create or optimize ATS-friendly resumes tailored to each opportunity automatically.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 rounded-custom border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Auto Apply</h3>
              <p className="text-slate-500 text-sm leading-relaxed">AI fills application forms automatically and submits — you just relax!</p>
            </div>
            {/* Feature 4 */}
            <div className="p-8 rounded-custom border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Application Tracker</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Track all your applications in one place with smart status updates and history.</p>
            </div>
            {/* Feature 5 */}
            <div className="p-8 rounded-custom border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Career Analysis</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Beautiful insights on your applications, success rate, responses &amp; more.</p>
            </div>
            {/* Feature 6 */}
            <div className="p-8 rounded-custom border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Reminders</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Never miss a deadline again. Get reminders for deadlines and follow-ups via push/email.</p>
            </div></div>
        </section>
        {/* BEGIN: Pricing Section */}
        <section className="py-24 bg-slate-50" id="pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Pricing</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4 mb-4">Simple, Transparent Pricing</h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-stretch">
            {/* Free Tier */}
            <div className="pricing-card bg-white border border-slate-200 rounded-[24px] p-8 flex flex-col hover:shadow-lg">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-slate-900">Free</h3>
                <p className="text-slate-500 text-xs mb-6">Get started for free</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold">₹0</span>
                  <span className="text-slate-500 text-sm ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Up to 10 applications / mo
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  AI Resume Builder (Basic)
                </li>
              </ul>
              <button className="w-full py-3 border border-slate-200 rounded-custom text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">Get Started</button>
            </div>
            {/* Pro Tier */}
            <div className="pricing-card bg-white border-2 border-primary rounded-[24px] p-8 flex flex-col relative shadow-xl">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Most Popular</div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-slate-900">Pro</h3>
                <p className="text-slate-500 text-xs mb-6">For serious job seekers</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold text-primary">₹499</span>
                  <span className="text-slate-500 text-sm ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Unlimited applications
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Auto Apply AI
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Priority AI Agent support
                </li>
              </ul>
              <button className="w-full py-3 bg-primary rounded-custom text-sm font-bold text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">Get Started</button>
            </div>
            {/* Premium Tier */}
            <div className="pricing-card bg-slate-900 border border-slate-800 rounded-[24px] p-8 flex flex-col hover:shadow-lg text-white">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <p className="text-slate-400 text-xs mb-6">For professionals</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold">₹999</span>
                  <span className="text-slate-400 text-sm ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Everything in Pro
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  LinkedIn integration <span className="text-[8px] bg-primary/20 text-primary px-1.5 py-0.5 rounded ml-1">COMING SOON</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white/10 rounded-custom text-sm font-bold text-white hover:bg-white/20 transition-colors">Get Started</button>
            </div>
          </div>
        </section>
        {/* BEGIN: FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Support</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-100 rounded-custom overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900">
                  What is ApplyZen?
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </button>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-custom overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900">
                  Is my data safe?
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </button>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-custom overflow-hidden"><button className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900">Which platforms do you support?<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button><div className="px-6 pb-6 text-sm text-slate-600">We support all major job boards including LinkedIn, Indeed, Glassdoor, and niche career sites.</div></div><div className="bg-slate-50 border border-slate-100 rounded-custom overflow-hidden"><button className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900">Can I review applications before they are submitted?<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button><div className="px-6 pb-6 text-sm text-slate-600">Yes, you can choose between "Auto-Pilot" for full automation or "Review Mode" to approve each application before it goes out.</div></div><div className="bg-slate-50 border border-slate-100 rounded-custom overflow-hidden"><button className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900">Does ApplyZen help with cover letters?<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button><div className="px-6 pb-6 text-sm text-slate-600">Absolutely. Our AI generates tailored cover letters for every single application, matching your voice and the job requirements.</div></div></div>
            <div className="text-center mt-12">
              <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
              <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline" href="#">Contact Support <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
            </div>
          </div>
        </section>
      </main>
      {/* BEGIN: Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">ApplyZen</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">Your AI career copilot that finds opportunities, applies automatically and helps you grow faster than ever.</p>
              <div className="flex gap-4">
                <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Product</h4>
              <ul className="space-y-4 text-sm">
                <li className=""><a className="hover:text-primary transition-colors" href="#">Features</a></li>
                <li className=""><a className="hover:text-primary transition-colors" href="#">Roadmap</a></li>
                <li className=""><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm">
                <li className=""><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                <li className=""><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                <li className=""><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
              <p className="text-xs mb-6 text-slate-400">Get weekly AI career tips in your inbox.</p>
              <div className="flex flex-col gap-3">
                <input className="bg-white/5 border border-white/10 rounded-custom px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your email" type="email" />
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-custom text-sm transition-all">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
            <p className="">© 2024 ApplyZen. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-white" href="#">Privacy</a>
              <a className="hover:text-white" href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Fixed Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform relative group">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
          </span>
        </div>
      </div>







    </>
  );
}
