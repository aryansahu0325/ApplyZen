import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LandingFooter from '../components/landing/LandingFooter';
import FeaturesSection from '../components/landing/FeaturesSection';
import PricingSection from '../components/landing/PricingSection';
import FaqSection from '../components/landing/FaqSection';

export default function EnhancedLanding() {
  const navigate = useNavigate();
  const { loginAsGuest } = useAuth();
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
                  <button 
                    onClick={() => {
                      loginAsGuest();
                      navigate('/dashboard');
                    }}
                    className="w-full sm:w-auto border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-custom font-bold text-lg flex items-center justify-center gap-2 cursor-pointer bg-transparent"
                  >
                    Watch Demo <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </button>
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
        <FeaturesSection />
        {/* BEGIN: Pricing Section */}
        <PricingSection />
        {/* BEGIN: FAQ Section */}
        <FaqSection />
      </main>
      <LandingFooter />
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
