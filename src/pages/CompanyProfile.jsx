import React from 'react';
import { Link } from 'react-router-dom';

export default function CompanyProfile() {
  return (
    <>
      
{/* SideNavBar (Shared Component) */}
<aside className="fixed left-0 top-0 h-screen w-[280px] bg-surface-container-lowest border-r border-outline-variant flex flex-col p-md gap-sm z-50">
<div className="flex items-center gap-md px-sm py-md">
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>bolt</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary">ApplyZen</h1>
<p className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">Enterprise Plan</p>
</div>
</div>
<button className="mt-md mb-lg w-full bg-primary-container text-on-primary-container py-md rounded-lg font-bold flex items-center justify-center gap-sm hover:opacity-90 transition-all">
<span className="material-symbols-outlined">add</span>
            Post New Job
        </button>
<nav className="flex-1 space-y-1">
<Link className="flex items-center gap-md p-md rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" to="/dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</Link>
<Link className="flex items-center gap-md p-md rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" to="/applications">
<span className="material-symbols-outlined">work</span>
<span className="font-label-md text-label-md">Applications</span>
</Link>
{/* ACTIVE: Company Profile */}
<Link className="flex items-center gap-md p-md bg-secondary-container text-on-secondary-container rounded-lg font-bold transition-all" to="/company-profile">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>business_center</span>
<span className="font-label-md text-label-md">Company Profile</span>
</Link>
<Link className="flex items-center gap-md p-md rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" to="/analytics">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</Link>
<a className="flex items-center gap-md p-md rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-label-md text-label-md">Team</span>
</a>
</nav>
<div className="pt-md mt-auto border-t border-outline-variant">
<Link className="flex items-center gap-md p-md rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" to="/help">
<span className="material-symbols-outlined">help</span>
<span className="font-label-md text-label-md">Help Center</span>
</Link>
<a className="flex items-center gap-md p-md rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="font-label-md text-label-md">Log Out</span>
</a>
</div>
</aside>
{/* Main Content Area */}
<main className="ml-[280px] flex-1 flex flex-col min-h-screen">
{/* TopNavBar (Shared Component) */}
<header className="w-full h-16 sticky top-0 z-40 bg-surface border-b border-outline-variant flex justify-between items-center px-lg">
<div className="flex items-center gap-md">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-body-md w-64 focus:ring-2 focus:ring-primary-container outline-none transition-all" placeholder="Search resources..." type="text"/>
</div>
</div>
<div className="flex items-center gap-md">
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-px bg-outline-variant mx-sm"></div>
<div className="flex items-center gap-sm cursor-pointer active:opacity-80 transition-all">
<div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A professional portrait of a tech company executive, headshot style, clean studio lighting with a neutral gray background. The subject is wearing modern professional attire, conveying confidence and accessibility. The visual style is crisp and high-resolution, fitting a premium SaaS dashboard aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAevSlOVkubvy07PqMYcyCwhhElPUcPYpivdsf8hb9qjLLngpRvPDJEUDeg5qaFgsFO0H7bOxYTUXHrQzusqWtURDyADJpxAqyvNmVOMFP9YW0QzYHqWll9DLeNHlcxGNoSnjJ8PK4j0GwcxqI0KODkvn1yvUuktolwEKZRY8zzz20jX-36j_Zvq1XvfB4jAtlL7EBr3esg4AtX1iOSKQb6sFXzX44FZJ1OBNNwQFRwqwHOB1-nFdoumeuSamwiQT9U49UeXQa2pZBS"/>
</div>
<span className="font-label-md text-label-md font-bold">Alex Rivera</span>
</div>
</div>
</header>
{/* Profile Content Container */}
<div className="p-xl max-w-container-max mx-auto w-full flex flex-col gap-xl">
{/* Breadcrumbs */}
<nav className="flex items-center gap-sm text-on-surface-variant">
<span className="font-label-sm text-label-sm">Admin</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-label-sm text-label-sm font-bold text-primary">Company Profile</span>
</nav>
{/* Hero Section: Header with Logo & Tagline */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg flex flex-col md:flex-row items-center md:items-start gap-lg relative overflow-hidden">

<div className="relative z-10 w-24 h-24 bg-white border border-outline-variant rounded-xl flex items-center justify-center p-sm shrink-0 shadow-sm">
<img className="w-16 h-16 object-contain" data-alt="A minimalist tech logo for ApplyZen, featuring a sleek, stylized letter 'A' integrated with a lightning bolt symbol. The primary color is a vibrant emerald green (#10b981) set against a pure white background. The design is modern, professional, and suggests speed and intelligent automation in a high-end SaaS context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5DcP8FGPverDyKloDCRM1OIQqyCuALydNNsLJFsbwMA1GTh-s_50WQzOBHxqVfc2IiY_inlNSuDqZcmWyqkuJjgZ5KEmVuVVfgcvfV1Ps5ml4RMIVAvnpPq8DEAsPx7EgGZxsODkWaVLYVhsnHeDv_M6WNPo_8aeDNCngHVQJne-f0AaNi_ty2mdVwXUR_1L9dVU-dF5E4STfFKjGRsQXYmaqMIJZoLlAPYHn7_6-mxKkUnbrmRMPp9D5aIgdK5CxLVnwfYCF5BcZ"/>
</div>
<div className="relative z-10 flex-1 text-center md:text-left pt-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">ApplyZen</h2>
<p className="text-primary font-medium text-body-lg">AI-Powered Career Automation</p>
</div>
<div className="flex gap-sm justify-center md:justify-end">
<button className="px-md py-sm border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all">View Public Page</button>
<button className="px-md py-sm bg-primary text-white rounded-lg font-label-md text-label-md hover:opacity-90 transition-all flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px]">edit</span>
                                Edit Profile
                            </button>
</div>
</div>
</div>
</section>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
{/* Left Column: Overview (8 cols) */}
<div className="lg:col-span-8 flex flex-col gap-xl">
{/* Company Overview Card */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary">info</span>
<h3 className="font-headline-md text-headline-md font-bold">Company Overview</h3>
</div>
<p className="text-on-surface-variant font-body-lg leading-relaxed">
                            ApplyZen is the world's first AI career copilot designed to automate the job application journey. We empower professionals to land their dream roles through intelligent opportunity detection, ATS-optimized resume building, and autonomous application submission.
                        </p>
<div className="mt-lg grid grid-cols-1 md:grid-cols-2 gap-md">
<div className="p-md bg-surface-container-low rounded-lg border border-outline-variant/30">
<p className="text-on-surface-variant font-label-sm uppercase tracking-tighter mb-1">Our Mission</p>
<p className="text-on-surface font-body-md">Democratize elite-level job seeking through accessible AI agents.</p>
</div>
<div className="p-md bg-surface-container-low rounded-lg border border-outline-variant/30">
<p className="text-on-surface-variant font-label-sm uppercase tracking-tighter mb-1">Vision</p>
<p className="text-on-surface font-body-md">A world where the best talent always finds the best fit, instantly.</p>
</div>
</div>
</div>
{/* Culture/Gallery Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div className="h-48 rounded-lg overflow-hidden border border-outline-variant relative group">
<img className="w-full h-full object-cover" data-alt="A modern, minimalist co-working space in San Francisco with floor-to-ceiling windows showing a blurred cityscape. The interior features ergonomic furniture, lush indoor plants, and a collaborative atmosphere with a few people engaged in focused work. The lighting is bright and natural, reflecting a high-performance startup environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH2BZAn4xJ15nV_G8k8_imJ386BtNELH-IHC7EyJ0hqrVTNvqn7S2VaMn7ZeCxVsUCwxIJ8-XOk_6mu24SiIPCuynFg20quCvKRmbd1WQQWR_MlESWKrOcHkfkfFzrDqu_QkqPt52JashDmjmpa8g1_s9RCCPdWY8OJ76cOWskl9GDmHMuaPHG7HiqHIsTYS6VBY_ORVTNWOvSAOc09M6nxarrG9oilg826vRlFagtXrB5FsIHPHZKD347UpxDwh0RpQn27ED4R1y2"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-md">
<span className="text-white font-label-md">San Francisco HQ</span>
</div>
</div>
<div className="h-48 rounded-lg overflow-hidden border border-outline-variant relative group">
<img className="w-full h-full object-cover" data-alt="A diverse team of software engineers and AI researchers collaborating around a large digital white board displaying complex neural network diagrams. The setting is a bright, modern office with emerald green accents. The aesthetic is clean, professional, and tech-forward, capturing the spirit of innovation at a top-tier HR tech company." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOuhC68Fv5gE_nA_cXsNW5yxiCCftuwCRubChZ6RQ3fxX-g6QIXeDMw5FVC-AAFH_qL4ywlzE_qXqRLpGp8M9-VBaCTDmdL-Sdy7_gixf7HVomAIaW9TiKcvZ8O5QinkWaoXgjjLda4Lu64Nuqbm0QNklgcuSoDQ89AOBobVlH7966qs2GqxGs--69narsaqmWtvVptiDkNgzMcl_HHrqgP4bngQK3WW2_QjJzqAHHmoOThBLxRAmqLRHwCC3tkAWjxPK4UzZow3BU"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-md">
<span className="text-white font-label-md">The Engineering Team</span>
</div>
</div>
</div>
</div>
{/* Right Column: Details (4 cols) */}
<div className="lg:col-span-4 flex flex-col gap-xl">
{/* Quick Details Card */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg h-full">
<div className="flex items-center gap-sm mb-lg">
<span className="material-symbols-outlined text-primary">analytics</span>
<h3 className="font-headline-md text-headline-md font-bold">Key Details</h3>
</div>
<div className="space-y-lg">
<div className="flex items-start gap-md">
<div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-container">category</span>
</div>
<div className="flex-1 border-b border-outline-variant/30 pb-sm">
<p className="text-on-surface-variant font-label-sm">Industry</p>
<p className="text-on-surface font-body-md font-bold">Artificial Intelligence / HR Tech</p>
</div>
</div>
<div className="flex items-start gap-md">
<div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-container">location_on</span>
</div>
<div className="flex-1 border-b border-outline-variant/30 pb-sm">
<p className="text-on-surface-variant font-label-sm">Location</p>
<p className="text-on-surface font-body-md font-bold">San Francisco, CA (Remote First)</p>
</div>
</div>
<div className="flex items-start gap-md">
<div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-container">language</span>
</div>
<div className="flex-1 border-b border-outline-variant/30 pb-sm">
<p className="text-on-surface-variant font-label-sm">Website</p>
<a className="text-primary font-body-md font-bold hover:underline" href="#">www.applyzen.ai</a>
</div>
</div>
<div className="flex items-start gap-md">
<div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-container">event</span>
</div>
<div className="flex-1 border-b border-outline-variant/30 pb-sm">
<p className="text-on-surface-variant font-label-sm">Founded</p>
<p className="text-on-surface font-body-md font-bold">2024</p>
</div>
</div>
<div className="flex items-start gap-md">
<div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-container">groups</span>
</div>
<div className="flex-1 pb-sm">
<p className="text-on-surface-variant font-label-sm">Team Size</p>
<p className="text-on-surface font-body-md font-bold">50+ Employees</p>
</div>
</div>
</div>
{/* Growth Badge */}
<div className="mt-xl p-md bg-primary-fixed/20 border border-primary-fixed rounded-lg flex items-center gap-md">
<span className="material-symbols-outlined text-primary" style={{ "fontVariationSettings": "'FILL' 1" }}>trending_up</span>
<span className="font-label-md text-on-primary-fixed-variant">Hiring aggressively across 14 departments</span>
</div>
</div>
</div>
</div>
{/* Team / Social Proof Section (Optional extra for professional polish) */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
<div className="flex justify-between items-center mb-lg">
<h3 className="font-headline-md text-headline-md font-bold">Recent Company Milestones</h3>
<button className="text-primary font-label-md hover:underline">View Roadmap</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
<div className="flex gap-md">
<div className="w-1 bg-primary rounded-full"></div>
<div>
<p className="text-on-surface font-bold text-body-md">Series A Funding</p>
<p className="text-on-surface-variant text-label-sm">Raised $12M led by Sequoia Capital</p>
<p className="text-[10px] text-on-surface-variant uppercase mt-1">OCT 2024</p>
</div>
</div>
<div className="flex gap-md">
<div className="w-1 bg-outline-variant rounded-full"></div>
<div>
<p className="text-on-surface font-bold text-body-md">100k Users Milestone</p>
<p className="text-on-surface-variant text-label-sm">Global reach across 40 countries</p>
<p className="text-[10px] text-on-surface-variant uppercase mt-1">AUG 2024</p>
</div>
</div>
<div className="flex gap-md">
<div className="w-1 bg-outline-variant rounded-full"></div>
<div>
<p className="text-on-surface font-bold text-body-md">Product Hunt Launch</p>
<p className="text-on-surface-variant text-label-sm">#1 Product of the Day &amp; Week</p>
<p className="text-[10px] text-on-surface-variant uppercase mt-1">MAY 2024</p>
</div>
</div>
</div>
</section>
</div>
{/* Sticky Mobile Bottom Nav (Suppressed on Desktop) */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container-lowest border-t border-outline-variant flex justify-around items-center px-md z-50">
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px]">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">work</span>
<span className="text-[10px]">Jobs</span>
</button>
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>business_center</span>
<span className="text-[10px] font-bold">Profile</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[10px]">Data</span>
</button>
</nav>
</main>


    </>
  );
}
