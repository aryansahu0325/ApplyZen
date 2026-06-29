import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Search, 
  Bell, 
  Settings, 
  ChevronRight, 
  Briefcase, 
  MapPin, 
  Globe, 
  Calendar, 
  Users, 
  TrendingUp, 
  Plus, 
  LayoutDashboard, 
  FileText, 
  LineChart, 
  Users2, 
  HelpCircle, 
  LogOut, 
  Edit2, 
  Info,
  DollarSign,
  ArrowLeft,
  Award,
  ChevronDown
} from 'lucide-react';

export default function ProductDetail() {
  const { user, logout } = useAuth();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Dynamic product tier details dictionary
  const productData = {
    free: {
      title: "ApplyZen Free",
      tagline: "Basic Career Assistant",
      price: "₹0 / mo",
      overview: "ApplyZen Free Tier offers an easy entry point for job seekers wanting to try AI career automation. Optimize your resume for ATS algorithms and automate up to 10 application forms per month at zero cost.",
      mission: "Provide basic AI utility to entry-level job seekers globally.",
      vision: "Ensure everyone has access to professional ATS-resume generation.",
      industry: "AI Utility / Career Prep",
      location: "Cloud Hosted (Global)",
      website: "free.applyzen.ai",
      founded: "2025",
      teamSize: "Community Supported",
      hiringMsg: "Join 5,000+ active Free members this week",
      milestones: [
        { title: "Launched Free Tier", desc: "First release to public with basic resume parser", date: "JAN 2025", active: true },
        { title: "5k Active Users", desc: "Reached milestone of active monthly resume builders", date: "MAR 2025", active: false },
        { title: "Outlook Sync", desc: "Integration with Outlook email inbox added", date: "MAY 2025", active: false }
      ]
    },
    pro: {
      title: "ApplyZen Pro",
      tagline: "Advanced Autonomous Job Hunter",
      price: "₹499 / mo",
      overview: "ApplyZen Pro is designed for serious career professionals and active job hunters. It unlocks unlimited AI application submittals, our proprietary auto-pilot application form filler, and prioritizes your applications in our queue.",
      mission: "Supercharge the modern professional's application throughput.",
      vision: "Eliminate manual application forms entirely from the job search.",
      industry: "AI Automation / HR Tech",
      location: "San Francisco, CA (Remote First)",
      website: "pro.applyzen.ai",
      founded: "2024",
      teamSize: "50+ Dedicated Agents",
      hiringMsg: "Pro members land jobs 3x faster on average",
      milestones: [
        { title: "Series A Funding", desc: "Raised $12M led by Sequoia Capital for expansion", date: "OCT 2024", active: true },
        { title: "Auto-Pilot Release", desc: "Launched autonomous form filling engine", date: "DEC 2024", active: false },
        { title: "100k Users Milestone", desc: "Global reach across 40 countries", date: "FEB 2025", active: false }
      ]
    },
    premium: {
      title: "ApplyZen Premium",
      tagline: "Enterprise Career Architect & Copilot",
      price: "₹999 / mo",
      overview: "ApplyZen Premium is our highest-tier service, offering ultimate career automation. It features native, advanced integrations (including LinkedIn autofill, coming soon), a dedicated personal AI career advisor, and premium support.",
      mission: "Deliver high-touch, hyper-personalized career representation.",
      vision: "Build the definitive end-to-end autonomous executive career platform.",
      industry: "Enterprise SaaS / HR Tech",
      location: "Global Distributed Team",
      website: "premium.applyzen.ai",
      founded: "2024",
      teamSize: "100+ Engineers & Advisors",
      hiringMsg: "Premium includes a dedicated 1-on-1 career coach",
      milestones: [
        { title: "Premium Launch", desc: "Initial release of dedicated AI career advisor agent", date: "NOV 2024", active: true },
        { title: "10k Premium Members", desc: "Active executive and senior-level subscribers", date: "MAR 2025", active: false },
        { title: "LinkedIn Beta", desc: "Private beta testing for full LinkedIn automation", date: "JUN 2025", active: false }
      ]
    }
  };

  // Get active data or fallback to standard ApplyZen company details
  const current = productData[id?.toLowerCase()] || {
    title: "ApplyZen AI",
    tagline: "AI-Powered Career Automation Platform",
    price: "₹499 / mo (Average)",
    overview: "ApplyZen is the world's first AI career copilot designed to automate the job application journey. We empower professionals to land their dream roles through intelligent opportunity detection, ATS-optimized resume building, and autonomous application submission.",
    mission: "Democratize elite-level job seeking through accessible AI agents.",
    vision: "A world where the best talent always finds the best fit, instantly.",
    industry: "Artificial Intelligence / HR Tech",
    location: "San Francisco, CA (Remote First)",
    website: "www.applyzen.ai",
    founded: "2024",
    teamSize: "50+ Employees",
    hiringMsg: "Hiring aggressively across 14 departments",
    milestones: [
      { title: "Series A Funding", desc: "Raised $12M led by Sequoia Capital", date: "OCT 2024", active: true },
      { title: "100k Users Milestone", desc: "Global reach across 40 countries", date: "AUG 2024", active: false },
      { title: "Product Hunt Launch", desc: "#1 Product of the Day & Week", date: "MAY 2024", active: false }
    ]
  };

  return (
    <div className="bg-background text-on-surface flex min-h-screen font-sans">
      {/* SideNavBar (Shared Component) */}
      <aside className="fixed left-0 top-0 h-screen w-[280px] bg-surface-container-lowest border-r border-outline-variant flex flex-col p-4 gap-2 z-50">
        <div className="flex items-center gap-3 px-2 py-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined font-bold text-white" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary leading-none">ApplyZen</h1>
            <p className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold mt-1">Enterprise Plan</p>
          </div>
        </div>
        
        <button className="mt-4 mb-6 w-full bg-primary-container text-on-primary-container py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all text-sm">
          <Plus className="w-4 h-4" />
          Post New Job
        </button>

        <nav className="flex-1 space-y-1">
          <Link to="/" className="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all">
            <LayoutDashboard className="w-5 h-5 text-slate-500" />
            <span className="text-sm font-medium">Home Landing</span>
          </Link>
          
          <Link className="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" to="/applications">
            <Briefcase className="w-5 h-5 text-slate-500" />
            <span className="text-sm font-medium">Applications</span>
          </Link>

          {/* ACTIVE: Company/Product Profile */}
          <Link to={`/product/${id || 'pro'}`} className="flex items-center gap-3 p-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold transition-all">
            <Info className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold">Tier Detail</span>
          </Link>

          <Link className="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" to="/analytics">
            <LineChart className="w-5 h-5 text-slate-500" />
            <span className="text-sm font-medium">Analytics</span>
          </Link>

          <Link className="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" to="/company-profile">
            <Users2 className="w-5 h-5 text-slate-500" />
            <span className="text-sm font-medium">Team</span>
          </Link>
        </nav>

        <div className="pt-4 mt-auto border-t border-outline-variant space-y-1">
          <Link className="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all" to="/help">
            <HelpCircle className="w-5 h-5 text-slate-500" />
            <span className="text-sm font-medium">Help Center</span>
          </Link>
          <button 
            onClick={logout}
            className="w-full text-left flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all"
          >
            <LogOut className="w-5 h-5 text-slate-500" />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[280px] flex-1 flex flex-col min-h-screen bg-slate-50/50">
        {/* TopNavBar (Shared Component) */}
        <header className="w-full h-16 sticky top-0 z-40 bg-surface border-b border-outline-variant flex justify-between items-center px-6 bg-white">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
              <input 
                className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-primary-container outline-none transition-all" 
                placeholder="Search resources..." 
                type="text"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
              <Bell className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
              <Settings className="w-5 h-5" />
            </button>
            <div className="h-8 w-px bg-outline-variant mx-2"></div>
            <div className="flex items-center gap-2 cursor-pointer active:opacity-80 transition-all">
              <div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  alt="User avatar" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAevSlOVkubvy07PqMYcyCwhhElPUcPYpivdsf8hb9qjLLngpRvPDJEUDeg5qaFgsFO0H7bOxYTUXHrQzusqWtURDyADJpxAqyvNmVOMFP9YW0QzYHqWll9DLeNHlcxGNoSnjJ8PK4j0GwcxqI0KODkvn1yvUuktolwEKZRY8zzz20jX-36j_Zvq1XvfB4jAtlL7EBr3esg4AtX1iOSKQb6sFXzX44FZJ1OBNNwQFRwqwHOB1-nFdoumeuSamwiQT9U49UeXQa2pZBS" 
                />
              </div>
              <span className="text-sm font-semibold">{user?.fullName || 'User'}</span>
            </div>
          </div>
        </header>

        {/* Profile Content Container */}
        <div className="p-8 max-w-7xl mx-auto w-full flex flex-col gap-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-on-surface-variant text-xs">
            <Link to="/" className="hover:text-primary transition-colors">Admin</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-bold text-primary">Company Profile</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="capitalize font-bold text-slate-600">{id || 'Default'}</span>
          </nav>

          {/* Hero Section: Header with Logo & Tagline */}
          <section className="bg-white border border-outline-variant rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm">
            <div className="w-24 h-24 bg-white border border-outline-variant rounded-xl flex items-center justify-center p-2 shrink-0 shadow-sm">
              <img 
                className="w-16 h-16 object-contain" 
                alt="ApplyZen Logo" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5DcP8FGPverDyKloDCRM1OIQqyCuALydNNsLJFsbwMA1GTh-s_50WQzOBHxqVfc2IiY_inlNSuDqZcmWyqkuJjgZ5KEmVuVVfgcvfV1Ps5ml4RMIVAvnpPq8DEAsPx7EgGZxsODkWaVLYVhsnHeDv_M6WNPo_8aeDNCngHVQJne-f0AaNi_ty2mdVwXUR_1L9dVU-dF5E4STfFKjGRsQXYmaqMIJZoLlAPYHn7_6-mxKkUnbrmRMPp9D5aIgdK5CxLVnwfYCF5BcZ" 
              />
            </div>
            
            <div className="flex-1 text-center md:text-left pt-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
                    {current.title}
                    <span className="text-xs bg-emerald-50 text-primary border border-emerald-100 rounded-full px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      Active Tier
                    </span>
                  </h2>
                  <p className="text-primary font-medium text-lg mt-1">{current.tagline}</p>
                </div>
                
                <div className="flex gap-2 justify-center md:justify-end">
                  <Link to="/" className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all flex items-center gap-1.5">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                  </Link>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/95 transition-all flex items-center gap-1.5 shadow-md shadow-primary/10">
                    <Edit2 className="w-4 h-4" /> Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Overview (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Company Overview Card */}
              <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">Tier Overview</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {current.overview}
                </p>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Our Mission</p>
                    <p className="text-slate-700 text-xs font-medium">{current.mission}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Vision</p>
                    <p className="text-slate-700 text-xs font-medium">{current.vision}</p>
                  </div>
                </div>
              </div>

              {/* Gallery Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-48 rounded-xl overflow-hidden border border-outline-variant relative group shadow-sm">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="San Francisco Headquarters Workspace" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH2BZAn4xJ15nV_G8k8_imJ386BtNELH-IHC7EyJ0hqrVTNvqn7S2VaMn7ZeCxVsUCwxIJ8-XOk_6mu24SiIPCuynFg20quCvKRmbd1WQQWR_MlESWKrOcHkfkfFzrDqu_QkqPt52JashDmjmpa8g1_s9RCCPdWY8OJ76cOWskl9GDmHMuaPHG7HiqHIsTYS6VBY_ORVTNWOvSAOc09M6nxarrG9oilg826vRlFagtXrB5FsIHPHZKD347UpxDwh0RpQn27ED4R1y2" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">San Francisco HQ</span>
                  </div>
                </div>
                
                <div className="h-48 rounded-xl overflow-hidden border border-outline-variant relative group shadow-sm">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="AI Research Team Collaboration" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOuhC68Fv5gE_nA_cXsNW5yxiCCftuwCRubChZ6RQ3fxX-g6QIXeDMw5FVC-AAFH_qL4ywlzE_qXqRLpGp8M9-VBaCTDmdL-Sdy7_gixf7HVomAIaW9TiKcvZ8O5QinkWaoXgjjLda4Lu64Nuqbm0QNklgcuSoDQ89AOBobVlH7966qs2GqxGs--69narsaqmWtvVptiDkNgzMcl_HHrqgP4bngQK3WW2_QjJzqAHHmoOThBLxRAmqLRHwCC3tkAWjxPK4UzZow3BU" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Engineering Team</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Details (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Quick Details Card */}
              <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold">Key Details</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                        <DollarSign className="w-5 h-5 text-slate-500" />
                      </div>
                      <div className="flex-1 border-b border-slate-100 pb-2">
                        <p className="text-slate-400 text-xs">Cost</p>
                        <p className="text-slate-800 text-sm font-bold">{current.price}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-slate-500" />
                      </div>
                      <div className="flex-1 border-b border-slate-100 pb-2">
                        <p className="text-slate-400 text-xs">Industry</p>
                        <p className="text-slate-800 text-sm font-bold">{current.industry}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-slate-500" />
                      </div>
                      <div className="flex-1 border-b border-slate-100 pb-2">
                        <p className="text-slate-400 text-xs">Location</p>
                        <p className="text-slate-800 text-sm font-bold">{current.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                        <Globe className="w-5 h-5 text-slate-500" />
                      </div>
                      <div className="flex-1 border-b border-slate-100 pb-2">
                        <p className="text-slate-400 text-xs">Website</p>
                        <a className="text-primary text-sm font-bold hover:underline" href={`https://${current.website}`} target="_blank" rel="noreferrer">
                          {current.website}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                        <Calendar className="w-5 h-5 text-slate-500" />
                      </div>
                      <div className="flex-1 border-b border-slate-100 pb-2">
                        <p className="text-slate-400 text-xs">Founded</p>
                        <p className="text-slate-800 text-sm font-bold">{current.founded}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-slate-500" />
                      </div>
                      <div className="flex-1 pb-2">
                        <p className="text-slate-400 text-xs">Support Level</p>
                        <p className="text-slate-800 text-sm font-bold">{current.teamSize}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Badge */}
                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold text-primary leading-tight">{current.hiringMsg}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestones Section */}
          <section className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" /> Tier Roadmap & Milestones
              </h3>
              <button className="text-primary text-xs font-bold hover:underline">View Public Roadmap</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {current.milestones.map((m, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className={`w-1 rounded-full ${idx === 0 ? 'bg-primary' : 'bg-slate-200'}`}></div>
                  <div>
                    <p className="text-slate-800 font-bold text-sm">{m.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{m.desc}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2">{m.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Mobile bottom nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-100 flex justify-around items-center px-4 z-50">
          <Link to="/" className="flex flex-col items-center gap-1 text-slate-500">
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-[10px]">Home</span>
          </Link>
          <button className="flex flex-col items-center gap-1 text-slate-500">
            <Briefcase className="w-5 h-5" />
            <span className="text-[10px]">Jobs</span>
          </button>
          <Link to={`/product/${id || 'pro'}`} className="flex flex-col items-center gap-1 text-primary">
            <Info className="w-5 h-5" />
            <span className="text-[10px] font-bold">Profile</span>
          </Link>
          <button className="flex flex-col items-center gap-1 text-slate-500">
            <LineChart className="w-5 h-5" />
            <span className="text-[10px]">Data</span>
          </button>
        </nav>
      </main>
    </div>
  );
}
