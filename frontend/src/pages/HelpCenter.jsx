import { Search, UserCircle, Rocket, ArrowRight, Zap, FileEdit, Shield, Hammer, Users, ChevronDown, MessageCircle, Mail, Sparkles, X, Send, Bot, User, Clock } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Automated chat responses based on keywords
const AUTO_RESPONSES = [
  { keywords: ['hi', 'hello', 'hey', 'namaste'], response: "Hello! 👋 Welcome to ApplyZen Support. How can I help you today? You can ask me about:\n\n• Account & Billing\n• AI Agent Setup\n• Resume Builder\n• Technical Issues\n• Job Applications" },
  { keywords: ['account', 'login', 'password', 'sign'], response: "For account-related issues:\n\n1. Go to Settings → Account\n2. Click 'Change Password' or 'Update Email'\n3. If locked out, use 'Forgot Password' on the login page\n\nNeed more help? Type your specific issue and I'll guide you." },
  { keywords: ['billing', 'payment', 'subscription', 'plan', 'price', 'cancel'], response: "For billing & subscription queries:\n\n• View plans: Settings → Billing\n• Cancel: Settings → Billing → Cancel Subscription\n• Refund requests are processed within 5-7 business days\n• Pro plan: ₹999/month or ₹8,999/year\n\nWould you like to know anything specific?" },
  { keywords: ['ai', 'agent', 'automation', 'auto', 'apply'], response: "To set up AI Automation:\n\n1. Go to Dashboard → AI Agents\n2. Click 'Create New Agent'\n3. Set your job preferences (role, location, salary)\n4. Upload your resume for the agent to use\n5. Toggle 'Auto Apply' ON\n\nThe agent will start applying within 24 hours. Need more details?" },
  { keywords: ['resume', 'cv', 'builder', 'template'], response: "Resume Builder tips:\n\n1. Go to Resumes → Create New\n2. Choose from 15+ ATS-optimized templates\n3. Use 'AI Optimize' to improve keyword matching\n4. Download in PDF, DOCX, or share via link\n\nPro tip: Use the 'Score' feature to check ATS compatibility!" },
  { keywords: ['bug', 'error', 'issue', 'problem', 'not working', 'broken', 'crash'], response: "Sorry to hear you're facing an issue! Let's troubleshoot:\n\n1. Try clearing your browser cache (Ctrl+Shift+Del)\n2. Disable browser extensions temporarily\n3. Try using Chrome or Firefox\n4. Check our Status Page for ongoing incidents\n\nIf the issue persists, please use 'Email Support' with the error details and we'll investigate within 24 hours." },
  { keywords: ['job', 'application', 'applied', 'status', 'track'], response: "To track your applications:\n\n1. Go to Applications page from the sidebar\n2. Use filters to sort by status (Applied, Interview, Rejected)\n3. Click any application for full details\n4. Enable notifications for status updates\n\nYour AI agents update statuses automatically!" },
  { keywords: ['thank', 'thanks', 'bye', 'ok', 'great'], response: "You're welcome! 😊 Happy to help. If you need anything else, feel free to ask anytime. Good luck with your job search! 🚀" },
];

function getAutoResponse(message) {
  const lowerMsg = message.toLowerCase();
  for (const item of AUTO_RESPONSES) {
    if (item.keywords.some(kw => lowerMsg.includes(kw))) {
      return item.response;
    }
  }
  return "Thanks for reaching out! I understand you need help. Here are some things I can assist with:\n\n• Account & Login issues\n• Billing & Subscription\n• AI Agent setup\n• Resume Builder\n• Bug reports\n• Job application tracking\n\nPlease describe your issue in more detail, or type a keyword like 'billing', 'resume', or 'agent' for quick help.";
}

// Categories Data
const CATEGORIES_DATA = [
  {
    title: "Getting Started",
    description: "Master the basics and set up your ApplyZen profile for success.",
    icon: Rocket,
    iconColor: "text-emerald-600",
    bgIcon: "bg-emerald-50/80",
    link: "/settings"
  },
  {
    title: "AI Automation",
    description: "How to configure your AI career agents to apply on your behalf.",
    icon: Zap,
    iconColor: "text-blue-600",
    bgIcon: "bg-blue-50/80",
    link: "/workflow"
  },
  {
    title: "Resume Builder",
    description: "Optimization tips for getting past ATS filters using AI insights.",
    icon: FileEdit,
    iconColor: "text-emerald-600",
    bgIcon: "bg-emerald-50/80",
    link: "/resumes"
  },
  {
    title: "Account & Privacy",
    description: "Manage your subscriptions, security settings, and data privacy.",
    icon: Shield,
    iconColor: "text-slate-500",
    bgIcon: "bg-slate-100/80",
    link: "/settings"
  },
  {
    title: "Troubleshooting",
    description: "Quick fixes for common technical issues and integration errors.",
    icon: Hammer,
    iconColor: "text-red-500",
    bgIcon: "bg-red-50/80",
    link: "/troubleshoot"
  },
  {
    title: "Community Forum",
    description: "Connect with 50,000+ job seekers sharing tips and strategies.",
    icon: Users,
    iconColor: "text-amber-500",
    bgIcon: "bg-amber-50/80",
    link: "/forum"
  }
];

// FAQs Data
const FAQS_DATA = [
  {
    question: "How does the AI Agent automation work?",
    answer: "Our AI Agents use natural language processing to understand job descriptions and match them with your experience. Once configured, they can fill out application forms, customize cover letters, and track follow-ups based on your predefined preferences."
  },
  {
    question: "Is my personal data shared with employers?",
    answer: "Your data is only shared with employers when you explicitly authorize a job application. We never sell your data to third-party aggregators. All document storage is encrypted at rest using industry-standard protocols."
  },
  {
    question: "Can I use ApplyZen for free?",
    answer: "Yes! ApplyZen offers a 'Basic' plan that includes resume optimization and 5 automated applications per month. For heavy job searching, our 'Pro' plan offers unlimited agents and advanced analytics."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time via the 'Billing' section in your Settings. Your Pro benefits will remain active until the end of your current billing cycle."
  }
];

// Email Support categories
const SUPPORT_CATEGORIES = [
  { id: 'billing', label: 'Billing & Payments', icon: '💳' },
  { id: 'technical', label: 'Technical Issue / Bug', icon: '🐛' },
  { id: 'account', label: 'Account & Security', icon: '🔐' },
  { id: 'ai-agent', label: 'AI Agent & Automation', icon: '🤖' },
  { id: 'resume', label: 'Resume Builder', icon: '📄' },
  { id: 'feature', label: 'Feature Request', icon: '💡' },
  { id: 'other', label: 'Other', icon: '📌' },
];

const PRIORITY_OPTIONS = [
  { id: 'low', label: 'Low', color: 'text-blue-500', bg: 'bg-blue-50 border-blue-200' },
  { id: 'medium', label: 'Medium', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200' },
  { id: 'high', label: 'High', color: 'text-orange-500', bg: 'bg-orange-50 border-orange-200' },
  { id: 'critical', label: 'Critical', color: 'text-red-500', bg: 'bg-red-50 border-red-200' },
];

export default function HelpCenter() {
  const navigate = useNavigate();

  // Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Live Chat state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'bot', text: "Hi there! 👋 I'm ApplyZen's support assistant. How can I help you today?", time: new Date() }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Email Support state
  const [emailOpen, setEmailOpen] = useState(false);
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    category: '',
    priority: 'medium',
    subject: '',
    description: '',
  });
  const [emailSent, setEmailSent] = useState(false);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  // Send chat message
  const sendMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = { id: Date.now(), sender: 'user', text: chatInput.trim(), time: new Date() };
    setChatMessages(prev => [...prev, userMsg]);
    const input = chatInput.trim();
    setChatInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = { id: Date.now() + 1, sender: 'bot', text: getAutoResponse(input), time: new Date() };
      setChatMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleChatKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Format time
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Submit email support
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const categoryLabel = SUPPORT_CATEGORIES.find(c => c.id === emailForm.category)?.label || 'General';
    const priorityLabel = PRIORITY_OPTIONS.find(p => p.id === emailForm.priority)?.label || 'Medium';

    const subject = `[ApplyZen Support] [${priorityLabel}] ${categoryLabel}: ${emailForm.subject}`;
    const body = `
--- ApplyZen Support Request ---

Name: ${emailForm.name}
Email: ${emailForm.email}
Category: ${categoryLabel}
Priority: ${priorityLabel}

Subject: ${emailForm.subject}

Description:
${emailForm.description}

--- End of Support Request ---
Submitted on: ${new Date().toLocaleString()}
    `.trim();

    // Open mailto with pre-filled data
    const mailtoLink = `mailto:support@applyzen.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
      setEmailOpen(false);
      setEmailForm({ name: '', email: '', category: '', priority: 'medium', subject: '', description: '' });
    }, 3000);
  };

  // Filter Categories & FAQs based on Search Query
  const filteredCategories = CATEGORIES_DATA.filter(cat =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFaqs = FAQS_DATA.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = filteredCategories.length > 0 || filteredFaqs.length > 0;

  return (
    <div className="animate-fadeIn w-full bg-slate-50 min-h-screen">

      {/* Top App Bar - Non-sticky Header */}
      <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 bg-white relative z-40">
        {/* Left Side: Title */}
        <div className="flex items-center gap-4 justify-start">
          <span className="text-xl sm:text-2xl font-extrabold text-emerald-600 tracking-tight">Help Center</span>
        </div>

        {/* Right Side: Back to Dashboard */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/dashboard')} 
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 text-slate-700 hover:border-slate-300 transition-all active:scale-[0.97]"
          >
            <span className="material-symbols-outlined text-[18px] rotate-180">arrow_right_alt</span>
            <span>Back to Dashboard</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-16 px-6 text-center border-b border-slate-200 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-emerald-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">How can we help you?</h2>
          
          {/* Main Help Center Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8 mt-2">
            <div className="relative flex items-center bg-white border border-slate-200/80 rounded-2xl p-1 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:border-slate-350 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/5 transition-all duration-300">
              <Search className="w-5 h-5 ml-4 text-slate-400 shrink-0" />
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-10 py-3 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none bg-transparent" 
                placeholder="Search articles, guides, and FAQs..." 
                type="text" 
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Popular:</span>
            <button onClick={() => setSearchQuery('AI Agents')} className="px-3.5 py-1.5 bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 text-xs font-semibold text-slate-600 rounded-full transition-all shadow-sm">Setting up AI Agents</button>
            <button onClick={() => setSearchQuery('Optimization')} className="px-3.5 py-1.5 bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 text-xs font-semibold text-slate-600 rounded-full transition-all shadow-sm">Resume Optimization</button>
            <button onClick={() => setSearchQuery('Bug')} className="px-3.5 py-1.5 bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 text-xs font-semibold text-slate-600 rounded-full transition-all shadow-sm">Troubleshooting</button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[1280px] mx-auto px-6 py-12">

        {/* No Results Fallback */}
        {!hasResults ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-xl mx-auto my-8 px-6">
            <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No matching topics found</h3>
            <p className="text-sm text-slate-500 mb-6">We couldn't find anything matching your search query. Try checking your spelling or searching for a different keyword.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-all"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <>
            {/* Category Grid */}
            {filteredCategories.length > 0 && (
              <section className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCategories.map((cat, idx) => {
                    const IconComponent = cat.icon;
                    return (
                      <div key={idx} className="group p-6 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between">
                        <div>
                          <div className={`w-12 h-12 ${cat.bgIcon} rounded-xl flex items-center justify-center ${cat.iconColor} mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight">{cat.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">{cat.description}</p>
                        </div>
                        <button
                          onClick={() => navigate(cat.link)}
                          className="flex items-center gap-1 text-sm font-bold text-emerald-600 hover:text-emerald-750 group-hover:gap-2 transition-all mt-auto text-left"
                        >
                          Learn More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* FAQ Section */}
            {filteredFaqs.length > 0 && (
              <section className="max-w-3xl mx-auto py-8 border-t border-slate-200">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-8 tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {filteredFaqs.map((faq, idx) => (
                    <details key={idx} className="faq-accordion group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:border-slate-300 transition-all">
                      <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-slate-50/50 transition-colors">
                        <span className="font-bold text-slate-800 text-sm sm:text-base">{faq.question}</span>
                        <ChevronDown className="w-4 h-4 arrow-icon transition-transform duration-300 text-emerald-600 shrink-0 ml-4" />
                      </summary>
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      {/* Contact Section - Aligned with project colors */}
      <section className="max-w-[1280px] mx-auto px-6 mb-16">
        <div className="bg-primary p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl shadow-emerald-950/10">
          {/* Abstract background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
              <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5"></path>
            </svg>
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">Still need help?</h2>
            <p className="text-sm sm:text-base text-emerald-100/90 max-w-md font-medium">Our support team is available 24/7 to assist with your career journey.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
            <button 
              onClick={() => setChatOpen(true)} 
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-emerald-700 font-bold rounded-xl hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Start Live Chat
            </button>
            <button 
              onClick={() => setEmailOpen(true)} 
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-50/20 hover:bg-emerald-50/30 text-white border border-white/20 font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4" />
              Email Support
            </button>
          </div>
        </div>
      </section>

      {/* Premium modern Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">Resources</h4>
              <ul className="space-y-3.5">
                <li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium" href="#">API Documentation</a></li>
                <li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium" href="#">System Status</a></li>
                <li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium" href="#">Release Notes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">Community</h4>
              <ul className="space-y-3.5">
                <li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium" href="#">Official Blog</a></li>
                <li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium" href="#">User Groups</a></li>
                <li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium" href="#">Referral Program</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">Compliance</h4>
              <ul className="space-y-3.5">
                <li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium" href="#">Privacy Policy</a></li>
                <li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium" href="#">Terms of Service</a></li>
                <li><a className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium" href="#">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 text-emerald-600 mb-4">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span className="text-lg font-extrabold text-slate-900 tracking-tight">ApplyZen</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Optimizing career transition paths using state-of-the-art AI agents.
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-150 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400 font-medium">
              © {new Date().getFullYear()} ApplyZen. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      {/* ========== LIVE CHAT WIDGET ========== */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden" style={{ height: '520px' }}>
          {/* Chat Header */}
          <div className="bg-emerald-600 px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">ApplyZen Support</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  <span className="text-white/70 text-xs">Online now</span>
                </div>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1.5 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50" style={{ minHeight: 0 }}>
            {chatMessages.map(msg => (
              <div key={msg.id} className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${msg.sender === 'user' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-600'}`}>
                  {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>
                <div className={`max-w-[75%] ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${msg.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-md'
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-md shadow-sm'
                    }`}>
                    {msg.text}
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 px-1">{formatTime(msg.time)}</p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-slate-200 text-slate-600">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Replies */}
          {chatMessages.length <= 1 && (
            <div className="px-4 py-2 bg-white border-t border-slate-100 flex flex-wrap gap-1.5 shrink-0">
              {['Account Issue', 'Billing Help', 'Resume Tips', 'Bug Report'].map(q => (
                <button
                  key={q}
                  onClick={() => { setChatInput(q); }}
                  className="px-3 py-1.5 bg-emerald-50 text-emerald-600 text-xs rounded-full hover:bg-emerald-100 transition-colors font-semibold"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Chat Input */}
          <div className="px-4 py-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={handleChatKeyDown}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
            />
            <button
              onClick={sendMessage}
              disabled={!chatInput.trim()}
              className="w-9 h-9 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========== EMAIL SUPPORT MODAL ========== */}
      {emailOpen && (
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={() => { if (!emailSent) setEmailOpen(false); }}></div>

          {/* Modal Container */}
          <div className="bg-white border border-slate-200 rounded-xl max-w-md w-full overflow-hidden shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative text-slate-900 z-10 max-h-[90vh] overflow-y-auto">

            {/* Success State */}
            {emailSent ? (
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="material-symbols-outlined text-emerald-600 text-3xl">mail</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Email Prepared!</h4>
                <p className="text-sm text-slate-500">Your support email has been opened in your email client with all details pre-filled. Send it to complete your request.</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-sm">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>Expected response: within 24 hours</span>
                </div>
              </div>
            ) : (
              <>
                {/* Close Button */}
                <button
                  onClick={() => setEmailOpen(false)}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>

                {/* Modal Header */}
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600">mail</span> Email Support
                </h4>
                <p className="text-sm text-slate-500 mb-6">
                  Fill the form below to submit a support request.
                </p>

                {/* Form */}
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={emailForm.name}
                        onChange={(e) => setEmailForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={emailForm.email}
                        onChange={(e) => setEmailForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="john@example.com"
                        className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500">Category *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {SUPPORT_CATEGORIES.map(cat => (
                        <button
                          type="button"
                          key={cat.id}
                          onClick={() => setEmailForm(prev => ({ ...prev, category: cat.id }))}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs text-left transition-all ${emailForm.category === cat.id
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-500 font-semibold'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-350 hover:bg-slate-50'
                            }`}
                        >
                          <span>{cat.icon}</span>
                          <span className="truncate">{cat.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Priority */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-555">Priority</label>
                    <div className="flex gap-2">
                      {PRIORITY_OPTIONS.map(p => (
                        <button
                          type="button"
                          key={p.id}
                          onClick={() => setEmailForm(prev => ({ ...prev, priority: p.id }))}
                          className={`flex-1 py-2 rounded-xl border text-xs font-semibold text-center transition-all ${emailForm.priority === p.id
                              ? `${p.bg} ${p.color} border-emerald-500 ring-1 ring-emerald-500`
                              : 'border-slate-250 bg-white text-slate-500 hover:bg-slate-50'
                            }`}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500">Subject *</label>
                    <input
                      type="text"
                      required
                      value={emailForm.subject}
                      onChange={(e) => setEmailForm(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="Brief description of your issue"
                      className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500">Describe your issue *</label>
                    <textarea
                      required
                      rows={4}
                      value={emailForm.description}
                      onChange={(e) => setEmailForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Please provide details about your issue..."
                      className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:ring-1 focus:ring-emerald-500 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex gap-3 justify-end pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setEmailOpen(false)}
                      className="px-5 py-2.5 border border-slate-250 rounded-xl text-sm font-semibold hover:bg-slate-50 text-slate-700 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!emailForm.name || !emailForm.email || !emailForm.category || !emailForm.subject || !emailForm.description}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Email
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
