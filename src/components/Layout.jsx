import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  const mainLinks = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Opportunities', path: '/opportunities' },
    { label: 'Applications', path: '/applications' },
    { label: 'Resumes', path: '/resumes' },
  ];

  const moreLinks = [
    { label: 'Cover Letter', path: '/cover-letter', icon: 'mail' },
    { label: 'Career Profile', path: '/career-profile', icon: 'person' },
    { label: 'Analytics', path: '/analytics', icon: 'analytics' },
    { label: 'Automation', path: '/automation', icon: 'auto_fix' },
    { label: 'Workflow Monitor', path: '/workflow', icon: 'monitoring' },
    { label: 'Connected Accounts', path: '/connected-accounts', icon: 'link' },
    { label: 'History', path: '/history', icon: 'history' },
    { label: 'Settings', path: '/settings', icon: 'settings' },
  ];

  const navLinkClass = (path) => {
    const active = isActive(path);
    return `text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
      active
        ? 'bg-primary/10 text-primary font-bold'
        : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
    }`;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Left: Logo & Main Nav */}
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link to="/dashboard" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">ApplyZen</span>
              </Link>
              
              {/* Desktop Main Links */}
              <nav className="hidden md:flex items-center gap-2">
                {mainLinks.map((link) => (
                  <Link key={link.path} to={link.path} className={navLinkClass(link.path)}>
                    {link.label}
                  </Link>
                ))}

                {/* More Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button 
                    onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                    className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                      moreDropdownOpen || moreLinks.some(l => isActive(l.path)) 
                        ? 'bg-primary/10 text-primary font-bold' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                    }`}
                  >
                    More
                    <span className="material-symbols-outlined text-[18px]">
                      {moreDropdownOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  
                  {moreDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-slate-200 rounded-xl shadow-lg py-2 animate-in fade-in slide-in-from-top-2 z-50">
                      {moreLinks.map((link) => (
                        <Link 
                          key={link.path} 
                          to={link.path} 
                          className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                            isActive(link.path) 
                              ? 'bg-primary/5 text-primary font-bold' 
                              : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[18px] opacity-70">{link.icon}</span>
                          {link.label}
                        </Link>
                      ))}
                      <div className="h-px bg-slate-100 my-2 mx-4"></div>
                      <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                        <span className="material-symbols-outlined text-[18px] opacity-70">help_outline</span>
                        Help Center
                      </button>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Right: Actions & Profile */}
            <div className="flex items-center gap-2 sm:gap-4">
              
              {/* Search Bar (Desktop) */}
              <div className="hidden lg:flex items-center bg-slate-100/80 border border-slate-200/60 rounded-full px-3 py-1.5 w-64 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none placeholder:text-slate-400" placeholder="Search..." type="text" />
                <span className="text-[10px] text-slate-400 font-mono px-1.5 border border-slate-200 rounded bg-white shadow-sm ml-2">⌘K</span>
              </div>

              {/* Icon Actions */}
              <button className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white"></span>
              </button>
              
              <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>

              {/* User Profile */}
              <Link to="/career-profile" className="flex items-center gap-2 hover:bg-slate-50 p-1 pr-3 rounded-full transition-colors cursor-pointer border border-transparent hover:border-slate-200">
                <div
                  className="w-8 h-8 rounded-full bg-cover bg-center border border-slate-200 shadow-sm"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdOpaLAVQ2ZkwDPXAK0-pzWy_KVhOXoJcoCJS82j965NeP7qwGd5YEjYh_QXOb-NKWjbHFQ9oOYL4fc9FIJTlTAgysmSm-3ZVSKrfe5jLjQ87ELTEDbwWj_3gMzAduhhGJepS0TOlxZiK6iGOkoAXyUDSwcrPW7tB4N0mraGkEh0VXTUKkbNmYZyRQH0x_NwDEuDMxc6vI7bjNgSwUL0Dd4ZWaOSi1YUVIWMXaiBao1GADF_V0MR7z8UYd9M9nHuvT_p1iCUTKzIkx")`,
                  }}
                ></div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-bold text-slate-900 leading-none">{user?.fullName || 'Aryan Kumar'}</p>
                </div>
                <span className="material-symbols-outlined text-[16px] text-slate-400 hidden sm:block">arrow_drop_down</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg ml-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg absolute top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="mb-4 mt-2 px-2">
              <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 w-full">
                <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none placeholder:text-slate-400" placeholder="Search anything..." type="text" />
              </div>
            </div>
            
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2 mt-4">Main</p>
            {mainLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${isActive(link.path) ? 'bg-primary/10 text-primary font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {link.label}
              </Link>
            ))}
            
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2 mt-6">More Tools</p>
            {moreLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${isActive(link.path) ? 'bg-primary/10 text-primary font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <span className="material-symbols-outlined text-[18px] opacity-70">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Workspace */}
      <main className="flex-1 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fadeIn">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
