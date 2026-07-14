import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function PricingSection() {
  return (
    <section className="py-24 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-primary font-bold text-xs uppercase tracking-widest">Pricing</span>
        <h2 className="text-3xl font-extrabold text-slate-900 mt-4 mb-4">Simple, Transparent Pricing</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-stretch">
        {/* Free Tier */}
        <div className="pricing-card bg-white border border-slate-200 rounded-[24px] p-8 flex flex-col hover:shadow-lg transition-all">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2 text-slate-900">Free Tier</h3>
            <p className="text-slate-500 text-xs mb-6">Get started for free</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-extrabold">₹0</span>
              <span className="text-slate-500 text-sm ml-1">/month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-center gap-3 text-sm text-slate-600">
              <Check className="w-4 h-4 text-primary" /> Up to 10 applications / mo
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-600">
              <Check className="w-4 h-4 text-primary" /> AI Resume Builder (Basic)
            </li>
          </ul>
          <Link to="/product/free" className="w-full py-3 text-center border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
            Get Started
          </Link>
        </div>

        {/* Pro Tier */}
        <div className="pricing-card bg-white border-2 border-primary rounded-[24px] p-8 flex flex-col relative shadow-xl transition-all">
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
            Most Popular
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2 text-slate-900">Pro Plan</h3>
            <p className="text-slate-500 text-xs mb-6">For serious job seekers</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-extrabold text-primary">₹499</span>
              <span className="text-slate-500 text-sm ml-1">/month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-center gap-3 text-sm text-slate-600">
              <Check className="w-4 h-4 text-primary" /> Unlimited applications
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-600">
              <Check className="w-4 h-4 text-primary" /> Auto Apply AI Agent
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-600">
              <Check className="w-4 h-4 text-primary" /> Priority AI Agent support
            </li>
          </ul>
          <Link to="/product/pro" className="w-full py-3 text-center bg-primary rounded-lg text-sm font-bold text-white hover:bg-primary/95 transition-colors shadow-lg shadow-primary/20">
            Get Started
          </Link>
        </div>

        {/* Premium Tier */}
        <div className="pricing-card bg-slate-900 border border-slate-800 rounded-[24px] p-8 flex flex-col hover:shadow-lg transition-all text-white">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
            <p className="text-slate-400 text-xs mb-6">For professionals</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-extrabold">₹999</span>
              <span className="text-slate-400 text-sm ml-1">/month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <Check className="w-4 h-4 text-primary" /> Everything in Pro
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <Check className="w-4 h-4 text-primary" /> LinkedIn integration <span className="text-[8px] bg-primary/20 text-primary px-1.5 py-0.5 rounded ml-1 font-bold">COMING SOON</span>
            </li>
          </ul>
          <Link to="/product/premium" className="w-full py-3 text-center bg-white/10 rounded-lg text-sm font-bold text-white hover:bg-white/20 transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
