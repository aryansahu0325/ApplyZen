import React from 'react';

export default function ApplicationStatus() {
  return (
    <div className="space-y-xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-on-surface">Application Status</h2>
          <p className="text-sm text-outline mt-xs">Track and manage your active job applications in real-time.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-surface-container-low p-1 rounded-lg border border-outline-variant/30">
            <button className="px-4 py-1.5 rounded-md bg-white shadow-sm text-xs font-bold text-primary">All (12)</button>
            <button className="px-4 py-1.5 rounded-md text-xs font-bold text-outline hover:text-on-surface transition-colors">Active (8)</button>
            <button className="px-4 py-1.5 rounded-md text-xs font-bold text-outline hover:text-on-surface transition-colors">Archived (4)</button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-xs font-bold text-outline hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filters
          </button>
        </div>
      </div>

      {/* Applications List (Bento-inspired List) */}
      <div className="grid gap-4">
        {/* Card 1: Interviewing */}
        <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all cursor-pointer group shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            {/* Company Info */}
            <div className="flex items-center gap-4 min-w-[240px]">
              <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center border border-outline-variant/60 overflow-hidden">
                <img className="w-10 h-10 object-contain" data-alt="Linear logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-FvpAyVQX6E7kikoNK2BA7y-7r2Z0-xX9rvBc7Ey4BIGgI6BfYN-sbWznTPhzZG48msoxv2eq_-n2FcQQ_xyfMNnbnuSNCcbELDqaNrqBgf_FT8IkoCLGSCtavcGCGsKl5jcaKimG-nPzR4ireJP8UDR1NUFMpwaQ9jgTCDGFi6PM7EEevWh1xdXAlhaV8TU4_javyu4hDNJNoy386GsJvKzDwYWcIysQC98_tKK8ie22yizAQkE8KepoBZjlA7JG-3NXChwsR9kF"/>
              </div>
              <div>
                <h3 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Senior Product Designer</h3>
                <div className="flex items-center gap-2 mt-xs text-xs text-outline font-semibold">
                  <span>Linear Systems</span>
                  <span className="w-1 h-1 bg-outline/60 rounded-full"></span>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            {/* Timeline */}
            <div className="flex-1 w-full">
              <div className="relative">
                {/* Line Background */}
                <div className="absolute top-4 left-0 w-full h-0.5 bg-surface-container-high"></div>
                {/* Progress Line */}
                <div className="absolute top-4 left-0 w-[50%] h-0.5 bg-primary transition-all"></div>
                <div className="relative flex justify-between">
                  {/* Stage: Submitted */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-primary">Submitted</p>
                    <p className="text-[9px] text-outline font-semibold">Oct 12</p>
                  </div>
                  {/* Stage: Under Review */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-primary">Review</p>
                    <p className="text-[9px] text-outline font-semibold">Oct 14</p>
                  </div>
                  {/* Stage: Interviewing */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center z-10 text-[18px] animate-pulse">
                      <span className="material-symbols-outlined text-[18px]">forum</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-primary">Interview</p>
                    <p className="text-[9px] text-outline font-semibold">Oct 20</p>
                  </div>
                  {/* Stage: Offer */}
                  <div className="flex flex-col items-center opacity-40">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-transparent flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]">card_membership</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-outline">Offer</p>
                    <p className="text-[9px] text-transparent">--</p>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA */}
            <div className="flex items-center gap-3 ml-auto">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-black uppercase">In Progress</span>
              <button className="bg-surface-container-low text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Submitted */}
        <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all cursor-pointer group shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            {/* Company Info */}
            <div className="flex items-center gap-4 min-w-[240px]">
              <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center border border-outline-variant/60 overflow-hidden">
                <img className="w-10 h-10 object-contain" data-alt="Stripe logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl0IisJlDTqCYPraJiBuqocf04rgvWydRTJEt5qZwGfCjjMNnJfM8H3gmqzttdi-SxVwzqmqipvnf8O1o0dPhwjhlJ0cMUlj4BaV3yIy_khi8WsY7-avsNN1LnVzzjexmfwbc1sZ60Z6iO05oX_b3YTUqRJ4PieKsGHf47aHwe5VQaj49PXGnhQ5NCz4WaJGTHyiSr06Hx8v79yirmH2cI_U9bOjJdqMrlHalGQArqkBJtoKKrMclFrfuctW1Yyuy6uhjcL7haF9IS"/>
              </div>
              <div>
                <h3 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Visual Designer</h3>
                <div className="flex items-center gap-2 mt-xs text-xs text-outline font-semibold">
                  <span>Stripe Architecture</span>
                  <span className="w-1 h-1 bg-outline/60 rounded-full"></span>
                  <span>Remote</span>
                </div>
              </div>
            </div>
            {/* Timeline */}
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute top-4 left-0 w-full h-0.5 bg-surface-container-high"></div>
                <div className="absolute top-4 left-0 w-[0%] h-0.5 bg-primary transition-all"></div>
                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-primary">Submitted</p>
                    <p className="text-[9px] text-outline font-semibold">Today</p>
                  </div>
                  <div className="flex flex-col items-center opacity-40">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]">pageview</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-outline">Review</p>
                  </div>
                  <div className="flex flex-col items-center opacity-40">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]">forum</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-outline">Interview</p>
                  </div>
                  <div className="flex flex-col items-center opacity-40">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]">card_membership</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-outline">Offer</p>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA */}
            <div className="flex items-center gap-3 ml-auto">
              <span className="bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-black uppercase">Pending</span>
              <button className="bg-surface-container-low text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 3: Rejected */}
        <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 opacity-80 grayscale hover:grayscale-0 hover:border-error/40 hover:shadow-md transition-all cursor-pointer group shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            {/* Company Info */}
            <div className="flex items-center gap-4 min-w-[240px]">
              <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center border border-outline-variant/60 overflow-hidden">
                <img className="w-10 h-10 object-contain" data-alt="Prisma Labs logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Iif3-MTi0544__MYDXK-LVsSEj_ve1ahAMNDbV-C2oym0XOpd8__3K8mFY9F5tXTLvKYvVtuaNI-xG2cocAHQA53WrE6dqFjG8Mk-B05uvjDRnL6eCi2WdPcrvWNq_c65l5qgvJtnGGQEKKr6iemYF5uXj83Ec0lLLMwwf17k8yMuBLtFzUJ5xDlddeVmU3jrFg5MrJQWDTawZnRPa2Rh5d7_R_u5XqGBo1GvoTJFkbF30LLAid1AybZZVhXDcikBckACF0i3sDh"/>
              </div>
              <div>
                <h3 className="text-sm font-bold text-on-surface group-hover:text-error transition-colors">UI Engineer</h3>
                <div className="flex items-center gap-2 mt-xs text-xs text-outline font-semibold">
                  <span>Prisma Labs</span>
                  <span className="w-1 h-1 bg-outline/60 rounded-full"></span>
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
            {/* Timeline */}
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute top-4 left-0 w-full h-0.5 bg-surface-container-high"></div>
                <div className="absolute top-4 left-0 w-[33%] h-0.5 bg-error/20"></div>
                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-error/15 text-error flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-error">Submitted</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-error text-white flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]">cancel</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-error">Rejected</p>
                    <p className="text-[9px] text-outline font-semibold">Oct 18</p>
                  </div>
                  <div className="flex flex-col items-center opacity-30">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]">forum</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-outline">Interview</p>
                  </div>
                  <div className="flex flex-col items-center opacity-30">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]">card_membership</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-outline">Offer</p>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA */}
            <div className="flex items-center gap-3 ml-auto">
              <span className="bg-error/10 text-error px-3 py-1 rounded-full text-[10px] font-black uppercase">Closed</span>
              <button className="bg-surface-container-low text-on-surface-variant p-2 rounded-lg group-hover:bg-error group-hover:text-white transition-all flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">delete_outline</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 4: Offer Extended */}
        <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/60 hover:shadow-lg transition-all cursor-pointer group bg-gradient-to-r from-white to-secondary-container/10 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            {/* Company Info */}
            <div className="flex items-center gap-4 min-w-[240px]">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-primary/20 overflow-hidden shadow-sm">
                <img className="w-10 h-10 object-contain" data-alt="Aether Labs logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArk0ILOqMkIDUazLjsMMO9L654xfp-pH3OrwxlPmwoNKAze7awjsc4qOIv1K0FErEVr74VtA0jkQGgk4amp5A_SNYAIv8rWKT_bFEiiBKRs6OMRQCMIOrT-btGHNAKECzJB6SRQzr1CmLqHDXbUd_6QCid7L502WfpX8H7REpYewZsGK9rKMix6GVqsC4dLZGDWakNnJ5oPqKATae-3kXNMvrKG610WPRFSZJ1KmrjorXmt8WnN22-y_22v8rquJSX7hBahyKhrmtK"/>
              </div>
              <div>
                <h3 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Design Lead</h3>
                <div className="flex items-center gap-2 mt-xs text-xs text-outline font-semibold">
                  <span>Aether Labs</span>
                  <span className="w-1 h-1 bg-outline/60 rounded-full"></span>
                  <span>London, UK (Remote)</span>
                </div>
              </div>
            </div>
            {/* Timeline */}
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute top-4 left-0 w-full h-0.5 bg-surface-container-high"></div>
                <div className="absolute top-4 left-0 w-[100%] h-0.5 bg-primary transition-all"></div>
                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-primary">Submitted</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-primary">Review</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 text-[18px]">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-primary">Interview</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 text-[18px] ring-4 ring-primary/20">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
                    </div>
                    <p className="text-[10px] font-bold mt-2 text-primary">Offer Extended</p>
                    <p className="text-[9px] text-outline font-bold">Today</p>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA */}
            <div className="flex items-center gap-3 ml-auto">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black uppercase animate-bounce">Review Offer</span>
              <button className="bg-primary text-white p-2 rounded-lg transition-all flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
