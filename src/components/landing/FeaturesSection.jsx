import React from 'react';
import { Search, FileText, Zap, CheckCircle2, LineChart, Bell } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-primary font-bold text-xs uppercase tracking-widest">Core Capabilities</span>
        <h2 className="text-3xl font-extrabold text-slate-900 mt-4 mb-4">Everything You Need To Stay Ahead</h2>
        <p className="text-slate-500">Powerful AI agents working 24*7 to simplify your job search</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Opportunity Detection</h3>
          <p className="text-slate-500 text-sm leading-relaxed">AI scans your emails and finds internships, jobs, hackathons, scholarships & more.</p>
        </div>

        {/* Feature 2 */}
        <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">AI Resume Builder</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Create or optimize ATS-friendly resumes tailored to each opportunity automatically.</p>
        </div>

        {/* Feature 3 */}
        <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Auto Apply</h3>
          <p className="text-slate-500 text-sm leading-relaxed">AI fills application forms automatically and submits — you just relax!</p>
        </div>

        {/* Feature 4 */}
        <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Application Tracker</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Track all your applications in one place with smart status updates and history.</p>
        </div>

        {/* Feature 5 */}
        <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
            <LineChart className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Career Analysis</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Beautiful insights on your applications, success rate, responses & more.</p>
        </div>

        {/* Feature 6 */}
        <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-shadow group">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
            <Bell className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Reminders</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Never miss a deadline again. Get reminders for deadlines and follow-ups via push/email.</p>
        </div>
      </div>
    </section>
  );
}
