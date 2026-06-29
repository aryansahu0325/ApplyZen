import React from 'react';

export default function CompanyProfile() {
  return (
    <div className="space-y-xl">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-sm text-outline">
        <span className="text-xs font-semibold">Admin</span>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-xs font-bold text-primary">Company Profile</span>
      </nav>

      {/* Hero Section: Header with Logo & Tagline */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg flex flex-col md:flex-row items-center md:items-start gap-lg relative overflow-hidden shadow-sm">
        <div className="relative z-10 w-24 h-24 bg-white border border-outline-variant/50 rounded-xl flex items-center justify-center p-sm shrink-0 shadow-sm">
          <img className="w-16 h-16 object-contain" data-alt="ApplyZen logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5DcP8FGPverDyKloDCRM1OIQqyCuALydNNsLJFsbwMA1GTh-s_50WQzOBHxqVfc2IiY_inlNSuDqZcmWyqkuJjgZ5KEmVuVVfgcvfV1Ps5ml4RMIVAvnpPq8DEAsPx7EgGZxsODkWaVLYVhsnHeDv_M6WNPo_8aeDNCngHVQJne-f0AaNi_ty2mdVwXUR_1L9dVU-dF5E4STfFKjGRsQXYmaqMIJZoLlAPYHn7_6-mxKkUnbrmRMPp9D5aIgdK5CxLVnwfYCF5BcZ"/>
        </div>
        <div className="relative z-10 flex-1 text-center md:text-left pt-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
            <div>
              <h2 className="text-2xl font-bold text-on-surface">ApplyZen</h2>
              <p className="text-primary font-bold text-sm mt-xs">AI-Powered Career Automation</p>
            </div>
            <div className="flex gap-sm justify-center md:justify-end">
              <button className="px-md h-10 border border-outline-variant text-on-surface bg-white rounded-lg text-xs font-bold hover:bg-surface-container-low transition-colors">
                View Public Page
              </button>
              <button className="px-md h-10 bg-primary text-white rounded-lg text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-xs">
                <span className="material-symbols-outlined text-[16px]">edit</span>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* Left Column: Overview (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-lg">
          {/* Company Overview Card */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg shadow-sm">
            <div className="flex items-center gap-sm mb-md border-b border-outline-variant/20 pb-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">info</span>
              <h3 className="text-sm font-bold text-on-surface">Company Overview</h3>
            </div>
            <p className="text-xs font-semibold text-outline leading-relaxed">
              ApplyZen is the world's first AI career copilot designed to automate the job application journey. We empower professionals to land their dream roles through intelligent opportunity detection, ATS-optimized resume building, and autonomous application submission.
            </p>
            <div className="mt-lg grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="p-md bg-surface-container-low/40 rounded-xl border border-outline-variant/20">
                <p className="text-outline font-bold text-[10px] uppercase tracking-wider mb-1">Our Mission</p>
                <p className="text-on-surface text-xs font-bold">Democratize elite-level job seeking through accessible AI agents.</p>
              </div>
              <div className="p-md bg-surface-container-low/40 rounded-xl border border-outline-variant/20">
                <p className="text-outline font-bold text-[10px] uppercase tracking-wider mb-1">Vision</p>
                <p className="text-on-surface text-xs font-bold">A world where the best talent always finds the best fit, instantly.</p>
              </div>
            </div>
          </div>

          {/* Culture/Gallery Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="h-48 rounded-xl overflow-hidden border border-outline-variant/30 relative group shadow-sm">
              <img className="w-full h-full object-cover" data-alt="Office HQ" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH2BZAn4xJ15nV_G8k8_imJ386BtNELH-IHC7EyJ0hqrVTNvqn7S2VaMn7ZeCxVsUCwxIJ8-XOk_6mu24SiIPCuynFg20quCvKRmbd1WQQWR_MlESWKrOcHkfkfFzrDqu_QkqPt52JashDmjmpa8g1_s9RCCPdWY8OJ76cOWskl9GDmHMuaPHG7HiqHIsTYS6VBY_ORVTNWOvSAOc09M6nxarrG9oilg826vRlFagtXrB5FsIHPHZKD347UpxDwh0RpQn27ED4R1y2"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-md">
                <span className="text-white text-xs font-bold">San Francisco HQ</span>
              </div>
            </div>
            <div className="h-48 rounded-xl overflow-hidden border border-outline-variant/30 relative group shadow-sm">
              <img className="w-full h-full object-cover" data-alt="Engineering Team" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOuhC68Fv5gE_nA_cXsNW5yxiCCftuwCRubChZ6RQ3fxX-g6QIXeDMw5FVC-AAFH_qL4ywlzE_qXqRLpGp8M9-VBaCTDmdL-Sdy7_gixf7HVomAIaW9TiKcvZ8O5QinkWaoXgjjLda4Lu64Nuqbm0QNklgcuSoDQ89AOBobVlH7966qs2GqxGs--69narsaqmWtvVptiDkNgzMcl_HHrqgP4bngQK3WW2_QjJzqAHHmoOThBLxRAmqLRHwCC3tkAWjxPK4UzZow3BU"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-md">
                <span className="text-white text-xs font-bold">The Engineering Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Details (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-lg">
          {/* Quick Details Card */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-sm mb-lg border-b border-outline-variant/20 pb-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">analytics</span>
                <h3 className="text-sm font-bold text-on-surface">Key Details</h3>
              </div>
              <div className="space-y-lg">
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 bg-secondary-container/30 text-on-secondary-container rounded-lg flex items-center justify-center shrink-0 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-[18px]">category</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Industry</p>
                    <p className="text-xs font-bold text-on-surface mt-[2px]">Artificial Intelligence / HR Tech</p>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 bg-secondary-container/30 text-on-secondary-container rounded-lg flex items-center justify-center shrink-0 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Location</p>
                    <p className="text-xs font-bold text-on-surface mt-[2px]">San Francisco, CA (Remote First)</p>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 bg-secondary-container/30 text-on-secondary-container rounded-lg flex items-center justify-center shrink-0 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-[18px]">language</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Website</p>
                    <a className="text-primary font-bold text-xs mt-[2px] hover:underline" href="https://www.applyzen.ai" target="_blank" rel="noreferrer">www.applyzen.ai</a>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 bg-secondary-container/30 text-on-secondary-container rounded-lg flex items-center justify-center shrink-0 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-[18px]">event</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Founded</p>
                    <p className="text-xs font-bold text-on-surface mt-[2px]">2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 bg-secondary-container/30 text-on-secondary-container rounded-lg flex items-center justify-center shrink-0 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-[18px]">groups</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Team Size</p>
                    <p className="text-xs font-bold text-on-surface mt-[2px]">50+ Employees</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Growth Badge */}
            <div className="mt-xl p-3 bg-primary/5 border border-primary/20 rounded-xl flex items-center gap-md">
              <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
              <span className="text-[11px] font-bold text-primary">Hiring aggressively across 14 departments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg shadow-sm">
        <div className="flex justify-between items-center mb-lg border-b border-outline-variant/20 pb-xs">
          <h3 className="text-sm font-bold text-on-surface">Recent Company Milestones</h3>
          <button className="text-primary text-xs font-bold hover:underline">View Roadmap</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="flex gap-md">
            <div className="w-1 bg-primary rounded-full"></div>
            <div>
              <p className="text-xs font-bold text-on-surface">Series A Funding</p>
              <p className="text-[11px] text-outline mt-[2px] font-medium leading-normal">Raised $12M led by Sequoia Capital</p>
              <p className="text-[9px] text-outline font-bold uppercase mt-1">OCT 2024</p>
            </div>
          </div>
          <div className="flex gap-md">
            <div className="w-1 bg-outline-variant/40 rounded-full"></div>
            <div>
              <p className="text-xs font-bold text-on-surface">100k Users Milestone</p>
              <p className="text-[11px] text-outline mt-[2px] font-medium leading-normal">Global reach across 40 countries</p>
              <p className="text-[9px] text-outline font-bold uppercase mt-1">AUG 2024</p>
            </div>
          </div>
          <div className="flex gap-md">
            <div className="w-1 bg-outline-variant/40 rounded-full"></div>
            <div>
              <p className="text-xs font-bold text-on-surface">Product Hunt Launch</p>
              <p className="text-[11px] text-outline mt-[2px] font-medium leading-normal">#1 Product of the Day & Week</p>
              <p className="text-[9px] text-outline font-bold uppercase mt-1">MAY 2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
