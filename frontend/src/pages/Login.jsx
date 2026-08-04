import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { validateEmail, validatePassword } from '../utils/validation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const pwdCheck = validatePassword(password);
    if (!pwdCheck.valid) {
      setError(pwdCheck.message);
      return;
    }

    setIsSubmitting(true);

    try {
      const success = login(email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Please check your credentials and try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Split Screen Layout */}
      <main className="w-full flex flex-col md:flex-row min-h-screen">
        {/* Left Side: Interactive Dashboard Mockup */}
        <section className="hidden md:flex flex-1 relative bg-slate-900 overflow-hidden border-r border-outline-variant items-center justify-center p-12">
          {/* Background subtle glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-900 to-slate-900 pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-lg space-y-12">
            <div className="text-left space-y-4">
              <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">Your Career,<br/><span className="text-primary">On Autopilot.</span></h2>
              <p className="text-base text-slate-400 max-w-sm">Access your intelligent dashboard and track the applications we've submitted for you today.</p>
            </div>
            
            {/* Animated Dashboard Mockup Cards */}
            <div className="relative mt-12 pl-4">
              {/* Card 3 (Time Saved - Offset behind left) */}
              <div className="absolute top-12 -left-10 w-[220px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl z-10 opacity-80 transform -rotate-3 transition-transform duration-700 hover:-rotate-6 hover:-translate-y-1 hover:-translate-x-1">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-green-400 text-[20px]">schedule</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">42.5 Hours</p>
                    <p className="text-slate-400 text-xs">Saved this month</p>
                  </div>
                </div>
              </div>

              {/* Main Card */}
              <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform transition-transform duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] relative z-20">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">monitoring</span>
                    Application Stats
                  </h3>
                  <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1.5 rounded-full font-bold">+12% this week</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5 transition-colors hover:bg-white/10">
                    <p className="text-slate-400 text-[10px] font-bold mb-2 uppercase tracking-widest">Applied</p>
                    <p className="text-3xl font-black text-white">142</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5 transition-colors hover:bg-white/10">
                    <p className="text-slate-400 text-[10px] font-bold mb-2 uppercase tracking-widest">Viewed</p>
                    <p className="text-3xl font-black text-white">38</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center border border-primary/30 relative overflow-hidden transition-colors hover:bg-white/10">
                    <div className="absolute inset-0 bg-primary/10 blur-xl"></div>
                    <div className="relative">
                      <p className="text-primary-container text-[10px] font-bold mb-2 uppercase tracking-widest">Interviews</p>
                      <p className="text-3xl font-black text-white">4</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 (Offset behind) */}
              <div className="absolute -bottom-10 -right-4 w-5/6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl z-10 opacity-60 transform rotate-3 transition-transform duration-700 hover:rotate-6 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-white font-bold text-sm truncate">New Interview Request</p>
                    <p className="text-slate-400 text-xs truncate">Acme Corp - Senior Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        {/* Right Side: Login Form */}
        <section className="flex-1 flex flex-col p-6 sm:p-12 bg-surface-container-lowest relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <div className="flex-1 flex items-center justify-center z-10 w-full">
            <div className="w-full max-w-[400px] space-y-6">
            {/* Brand / Header */}
            <div className="text-center md:text-left space-y-2">
              <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight">ApplyZen</h1>
              </div>
              <h2 className="text-xl font-bold text-on-surface">Welcome back</h2>
              <p className="text-sm text-on-surface-variant">Enter your details to access your dashboard.</p>
            </div>

            {/* Error Message Alert */}
            {error && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2.5 shadow-sm animate-pulse-subtle">
                <span className="material-symbols-outlined text-[20px] text-red-500 shrink-0">error</span>
                <span className="leading-tight font-medium">{error}</span>
              </div>
            )}

            {/* Social Logins */}
            <div className="grid grid-cols-1 gap-4">
              <button
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-outline-variant bg-surface hover:bg-surface-container transition-colors text-on-surface text-sm font-semibold h-[40px]"
                type="button"
                onClick={() => {
                  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                  window.location.href = `${apiUrl}/api/v1/auth/google`;
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                Continue with Google
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-px bg-outline-variant flex-1"></div>
              <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Or continue with</span>
              <div className="h-px bg-outline-variant flex-1"></div>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-on-surface" htmlFor="email">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">mail</span>
                  <input
                    className={`w-full pl-10 pr-10 py-2.5 h-[40px] bg-surface border rounded-lg text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 transition-shadow ${
                      email && !validateEmail(email) ? 'border-red-500 focus:border-red-500' : 'border-outline-variant focus:border-primary'
                    }`}
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {email && validateEmail(email) && (
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-[20px] pointer-events-none">check_circle</span>
                  )}
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-semibold text-on-surface" htmlFor="password">Password</label>
                  <Link className="text-xs font-semibold text-primary hover:text-primary-container transition-colors" to="#">Forgot password?</Link>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">lock</span>
                  <input
                    className={`w-full pl-10 pr-10 py-2.5 h-[40px] bg-surface border rounded-lg text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 transition-shadow ${
                      password && !validatePassword(password).valid ? 'border-red-500 focus:border-red-500' : 'border-outline-variant focus:border-primary'
                    }`}
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface flex items-center justify-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20 bg-surface"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="text-xs text-on-surface-variant font-medium">Remember me for 30 days</span>
                </label>
              </div>
              <div className="pt-2">
                <button
                  className="w-full flex items-center justify-center gap-2 h-[40px] bg-primary hover:bg-primary/90 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm disabled:opacity-50"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {isSubmitting ? 'Signing In...' : 'Sign In'}
                </button>
              </div>
            </form>
            {/* Footer Link */}
            <p className="text-center text-sm text-on-surface-variant">
              Don't have an account? <Link className="text-primary font-medium hover:underline" to="/signup">Sign up</Link>
            </p>
          </div>
          </div>
          

        </section>
      </main>
    </>
  );
}

