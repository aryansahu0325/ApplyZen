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
  const { user } = useAuth();
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
    <div className="space-y-xl">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-outline text-xs">
        <Link to="/dashboard" className="hover:text-primary transition-colors font-semibold">Admin</Link>
        <ChevronRight className="w-3 h-3 text-outline/60" />
        <span className="font-bold text-primary">Company Profile</span>
        <ChevronRight className="w-3 h-3 text-outline/60" />
        <span className="capitalize font-bold text-on-surface">{id || 'Default'}</span>
      </nav>

      {/* Hero Section: Header with Logo & Tagline */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg flex flex-col md:flex-row items-center md:items-start gap-lg relative overflow-hidden shadow-sm">
        <div className="w-24 h-24 bg-white border border-outline-variant/50 rounded-xl flex items-center justify-center p-2 shrink-0 shadow-sm">
          <img 
            className="w-16 h-16 object-contain" 
            alt="ApplyZen Logo" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5DcP8FGPverDyKloDCRM1OIQqyCuALydNNsLJFsbwMA1GTh-s_50WQzOBHxqVfc2IiY_inlNSuDqZcmWyqkuJjgZ5KEmVuVVfgcvfV1Ps5ml4RMIVAvnpPq8DEAsPx7EgGZxsODkWaVLYVhsnHeDv_M6WNPo_8aeDNCngHVQJne-f0AaNi_ty2mdVwXUR_1L9dVU-dF5E4STfFKjGRsQXYmaqMIJZoLlAPYHn7_6-mxKkUnbrmRMPp9D5aIgdK5CxLVnwfYCF5BcZ" 
          />
        </div>
        
        <div className="flex-1 text-center md:text-left pt-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
            <div>
              <h2 className="text-2xl font-bold text-on-surface flex items-center justify-center md:justify-start gap-2">
                {current.title}
                <span className="text-[10px] bg-emerald-50 text-primary border border-emerald-100 rounded-full px-2.5 py-0.5 font-bold uppercase tracking-wider">
                  Active Tier
                </span>
              </h2>
              <p className="text-primary font-bold text-sm mt-xs">{current.tagline}</p>
            </div>
            
            <div className="flex gap-2 justify-center md:justify-end">
              <Link to="/dashboard" className="px-4 h-10 border border-outline-variant text-on-surface bg-white rounded-lg text-xs font-bold hover:bg-slate-50 transition-all flex items-center gap-1.5">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
              <button className="px-4 h-10 bg-primary text-white rounded-lg text-xs font-bold hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm">
                <Edit2 className="w-4 h-4" /> Edit Profile
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
            <div className="flex items-center gap-2 mb-md border-b border-outline-variant/20 pb-xs">
              <Info className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold text-on-surface">Tier Overview</h3>
            </div>
            <p className="text-xs font-semibold text-outline leading-relaxed">
              {current.overview}
            </p>
            
            <div className="mt-lg grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="p-md bg-surface-container-low/40 rounded-xl border border-outline-variant/20">
                <p className="text-outline text-[10px] font-bold uppercase tracking-wider mb-1">Our Mission</p>
                <p className="text-on-surface text-xs font-bold">{current.mission}</p>
              </div>
              <div className="p-md bg-surface-container-low/40 rounded-xl border border-outline-variant/20">
                <p className="text-outline text-[10px] font-bold uppercase tracking-wider mb-1">Vision</p>
                <p className="text-on-surface text-xs font-bold">{current.vision}</p>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="h-48 rounded-xl overflow-hidden border border-outline-variant/30 relative group shadow-sm">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="San Francisco Headquarters Workspace" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH2BZAn4xJ15nV_G8k8_imJ386BtNELH-IHC7EyJ0hqrVTNvqn7S2VaMn7ZeCxVsUCwxIJ8-XOk_6mu24SiIPCuynFg20quCvKRmbd1WQQWR_MlESWKrOcHkfkfFzrDqu_QkqPt52JashDmjmpa8g1_s9RCCPdWY8OJ76cOWskl9GDmHMuaPHG7HiqHIsTYS6VBY_ORVTNWOvSAOc09M6nxarrG9oilg826vRlFagtXrB5FsIHPHZKD347UpxDwh0RpQn27ED4R1y2" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">San Francisco HQ</span>
              </div>
            </div>
            
            <div className="h-48 rounded-xl overflow-hidden border border-outline-variant/30 relative group shadow-sm">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="AI Research Team Collaboration" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOuhC68Fv5gE_nA_cXsNW5yxiCCftuwCRubChZ6RQ3fxX-g6QIXeDMw5FVC-AAFH_qL4ywlzE_qXqRLpGp8M9-VBaCTDmdL-Sdy7_gixf7HVomAIaW9TiKcvZ8O5QinkWaoXgjjLda4Lu64Nuqbm0QNklgcuSoDQ89AOBobVlH7966qs2GqxGs--69narsaqmWtvVptiDkNgzMcl_HHrqgP4bngQK3WW2_QjJzqAHHmoOThBLxRAmqLRHwCC3tkAWjxPK4UzZow3BU" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">Engineering Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Details (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-lg">
          {/* Quick Details Card */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-outline-variant/20 pb-xs">
                <TrendingUp className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold text-on-surface">Key Details</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    <DollarSign className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Cost</p>
                    <p className="text-xs font-bold text-on-surface mt-[2px]">{current.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Industry</p>
                    <p className="text-xs font-bold text-on-surface mt-[2px]">{current.industry}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Location</p>
                    <p className="text-xs font-bold text-on-surface mt-[2px]">{current.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Website</p>
                    <a className="text-primary text-xs font-bold hover:underline mt-[2px]" href={`https://${current.website}`} target="_blank" rel="noreferrer">
                      {current.website}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Founded</p>
                    <p className="text-xs font-bold text-on-surface mt-[2px]">{current.founded}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Support Level</p>
                    <p className="text-xs font-bold text-on-surface mt-[2px]">{current.teamSize}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Badge */}
            <div className="mt-6 p-3 bg-[#006c49]/5 border border-[#006c49]/20 rounded-xl flex items-center gap-3">
              <TrendingUp className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-[11px] font-bold text-primary leading-tight">{current.hiringMsg}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg shadow-sm">
        <div className="flex justify-between items-center mb-6 border-b border-outline-variant/20 pb-xs">
          <h3 className="text-sm font-bold flex items-center gap-2 text-on-surface">
            <Award className="w-4 h-4 text-primary" /> Tier Roadmap & Milestones
          </h3>
          <button className="text-primary text-xs font-bold hover:underline">View Public Roadmap</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {current.milestones.map((m, idx) => (
            <div key={idx} className="flex gap-3">
              <div className={`w-1 rounded-full ${idx === 0 ? 'bg-primary' : 'bg-slate-200'}`}></div>
              <div>
                <p className="text-xs font-bold text-on-surface">{m.title}</p>
                <p className="text-[11px] text-outline mt-xs leading-normal font-medium">{m.desc}</p>
                <p className="text-[9px] text-outline font-bold uppercase tracking-wider mt-2">{m.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
