import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  const mainLinks = [
    { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { label: 'Opportunities', path: '/opportunities', icon: 'work' },
    { label: 'Applications', path: '/applications', icon: 'folder' },
    { label: 'Resumes', path: '/resumes', icon: 'description' },
  ];

  const moreLinks = [
    { label: 'Career Profile', path: '/career-profile', icon: 'person' },
    { label: 'Analytics', path: '/analytics', icon: 'analytics' },
    { label: 'Workflow Monitor', path: '/workflow', icon: 'monitoring' },
  ];
  
  const bottomLinks = [
    { label: 'Help Center', path: '/help-center', icon: 'help_outline' },
    { label: 'Settings', path: '/settings', icon: 'settings' },
  ];

  const navLinkClass = (path, isMobile = false) => {
    const active = isActive(path);
    const base = 'flex items-center rounded-lg text-sm font-medium transition-colors cursor-pointer';
    const activeClass = active ? 'bg-primary/10 text-primary font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-primary';
    
    if (isMobile) {
      return `${base} ${activeClass} gap-3 px-3 py-2.5`;
    }
    
    return `${base} ${activeClass} ${isSidebarCollapsed ? 'justify-center px-0 py-3 mx-2' : 'gap-3 px-3 py-2.5'}`;
  };

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-background font-sans overflow-hidden">
      
      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex flex-col bg-white border-r border-slate-200 h-full transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}>
        {/* Logo Area */}
        <div className={`h-16 flex items-center border-b border-slate-100 shrink-0 ${isSidebarCollapsed ? 'justify-center px-0' : 'px-6 justify-between'}`}>
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm shrink-0">
              <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
            </div>
            {!isSidebarCollapsed && <span className="text-xl font-bold tracking-tight text-slate-900 truncate">ApplyZen</span>}
          </Link>
          {!isSidebarCollapsed && (
            <button 
              onClick={() => setIsSidebarCollapsed(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">keyboard_double_arrow_left</span>
            </button>
          )}
        </div>

        {/* Scrollable Navigation Area */}
        <div className={`flex-1 overflow-y-auto py-6 flex flex-col gap-6 ${isSidebarCollapsed ? 'px-0 items-center' : 'px-4'}`}>
          
          {isSidebarCollapsed && (
             <button 
               onClick={() => setIsSidebarCollapsed(false)}
               className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors mx-auto mb-2"
             >
               <span className="material-symbols-outlined text-[20px]">keyboard_double_arrow_right</span>
             </button>
          )}

          {/* Main Navigation */}
          <div className="w-full">
            {!isSidebarCollapsed && <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Main</p>}
            <nav className="flex flex-col gap-1 w-full">
              {mainLinks.map((link) => (
                <Link key={link.path} to={link.path} className={navLinkClass(link.path)} title={isSidebarCollapsed ? link.label : ""}>
                  <span className={`material-symbols-outlined text-[18px] ${isActive(link.path) ? '' : 'opacity-70'}`}>{link.icon}</span>
                  {!isSidebarCollapsed && <span>{link.label}</span>}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Tools Navigation */}
          <div className="w-full">
            {!isSidebarCollapsed && <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">More Tools</p>}
            <nav className="flex flex-col gap-1 w-full">
              {moreLinks.map((link) => (
                <Link key={link.path} to={link.path} className={navLinkClass(link.path)} title={isSidebarCollapsed ? link.label : ""}>
                  <span className={`material-symbols-outlined text-[18px] ${isActive(link.path) ? '' : 'opacity-70'}`}>{link.icon}</span>
                  {!isSidebarCollapsed && <span>{link.label}</span>}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section (Help, Settings, Profile) */}
        <div className={`py-4 border-t border-slate-100 flex flex-col shrink-0 ${isSidebarCollapsed ? 'px-2 items-center gap-2' : 'px-4 gap-1'}`}>
          <nav className="flex flex-col gap-1 w-full mb-2">
            {bottomLinks.map((link) => (
              <Link key={link.path} to={link.path} className={navLinkClass(link.path)} title={isSidebarCollapsed ? link.label : ""}>
                <span className={`material-symbols-outlined text-[18px] ${isActive(link.path) ? '' : 'opacity-70'}`}>{link.icon}</span>
                {!isSidebarCollapsed && <span>{link.label}</span>}
              </Link>
            ))}
            <button 
              onClick={logout} 
              title={isSidebarCollapsed ? "Log Out" : ""}
              className={`flex items-center text-sm font-medium text-red-600 hover:bg-red-50 text-left transition-colors cursor-pointer rounded-lg ${isSidebarCollapsed ? 'justify-center px-0 py-3 mx-2' : 'gap-3 px-3 py-2.5'}`}
            >
              <span className="material-symbols-outlined text-[18px] opacity-70">logout</span>
              {!isSidebarCollapsed && <span>Log Out</span>}
            </button>
          </nav>

          {/* User Profile Summary */}
          <Link 
            to="/career-profile" 
            className={`flex items-center hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-200 mt-2 ${isSidebarCollapsed ? 'p-1 justify-center' : 'p-2 gap-3'}`}
            title={isSidebarCollapsed ? "Career Profile" : ""}
          >
            <div
              className="w-10 h-10 rounded-full bg-cover bg-center border border-slate-200 shadow-sm shrink-0"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdOpaLAVQ2ZkwDPXAK0-pzWy_KVhOXoJcoCJS82j965NeP7qwGd5YEjYh_QXOb-NKWjbHFQ9oOYL4fc9FIJTlTAgysmSm-3ZVSKrfe5jLjQ87ELTEDbwWj_3gMzAduhhGJepS0TOlxZiK6iGOkoAXyUDSwcrPW7tB4N0mraGkEh0VXTUKkbNmYZyRQH0x_NwDEuDMxc6vI7bjNgSwUL0Dd4ZWaOSi1YUVIWMXaiBao1GADF_V0MR7z8UYd9M9nHuvT_p1iCUTKzIkx")'
              }}
            ></div>
            {!isSidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 leading-tight truncate">{user?.fullName || 'Aryan Kumar'}</p>
                <p className="text-xs text-slate-500 truncate">{user?.email || 'user@example.com'}</p>
              </div>
            )}
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        {/* Top Header (Visible on Desktop & Mobile) */}
        <header className="h-16 shrink-0 flex items-center justify-between px-4 sm:px-6 bg-white/80 backdrop-blur-md border-b border-slate-200 z-10">
          
          {/* Mobile Logo & Menu Toggle (Left side on mobile) */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-white text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
              </div>
            </Link>
          </div>

          {/* Spacer */}
          <div className="flex-1 hidden md:block"></div>

          {/* Right side Actions */}
          <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-slate-100/80 border border-slate-200/60 rounded-full px-3 py-1.5 w-72 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none placeholder:text-slate-400" placeholder="Search..." type="text" />
                <span className="text-[10px] text-slate-400 font-mono px-1.5 border border-slate-200 rounded bg-white shadow-sm ml-2">⌘K</span>
              </div>
            </div>

            <Link to="/notifications" className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors block">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white"></span>
            </Link>
            <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>
            {/* Profile Icon */}
            <Link to="/career-profile" className="w-8 h-8 rounded-full bg-cover bg-center border border-slate-200 shadow-sm shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdOpaLAVQ2ZkwDPXAK0-pzWy_KVhOXoJcoCJS82j965NeP7qwGd5YEjYh_QXOb-NKWjbHFQ9oOYL4fc9FIJTlTAgysmSm-3ZVSKrfe5jLjQ87ELTEDbwWj_3gMzAduhhGJepS0TOlxZiK6iGOkoAXyUDSwcrPW7tB4N0mraGkEh0VXTUKkbNmYZyRQH0x_NwDEuDMxc6vI7bjNgSwUL0Dd4ZWaOSi1YUVIWMXaiBao1GADF_V0MR7z8UYd9M9nHuvT_p1iCUTKzIkx")' }}></Link>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={() => setMobileMenuOpen(false)}></div>
            
            {/* Sidebar */}
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-2xl h-full animate-in slide-in-from-left">
              {/* Header */}
              <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
                <Link to="/dashboard" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-slate-900">ApplyZen</span>
                </Link>
                <button className="p-2 -mr-2 text-slate-500 hover:bg-slate-100 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Scrollable Nav */}
              <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-6">
                <div>
                  <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 w-full mb-6">
                    <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">search</span>
                    <input className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none placeholder:text-slate-400" placeholder="Search anything..." type="text" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Main</p>
                  <nav className="flex flex-col gap-1">
                    {mainLinks.map((link) => (
                      <Link key={link.path} to={link.path} className={navLinkClass(link.path, true)}>
                        <span className={`material-symbols-outlined text-[18px] ${isActive(link.path) ? '' : 'opacity-70'}`}>{link.icon}</span>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">More Tools</p>
                  <nav className="flex flex-col gap-1">
                    {moreLinks.map((link) => (
                      <Link key={link.path} to={link.path} className={navLinkClass(link.path, true)}>
                        <span className={`material-symbols-outlined text-[18px] ${isActive(link.path) ? '' : 'opacity-70'}`}>{link.icon}</span>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="px-4 py-4 border-t border-slate-100 flex flex-col gap-1 shrink-0 bg-slate-50">
                <nav className="flex flex-col gap-1 mb-2">
                  {bottomLinks.map((link) => (
                    <Link key={link.path} to={link.path} className={navLinkClass(link.path, true)}>
                      <span className={`material-symbols-outlined text-[18px] ${isActive(link.path) ? '' : 'opacity-70'}`}>{link.icon}</span>
                      {link.label}
                    </Link>
                  ))}
                  <button onClick={logout} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 text-left transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[18px] opacity-70">logout</span>
                    Log Out
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Scrollable Main Content Workspace */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto w-full animate-fadeIn pb-12">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
