import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const success = login(email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Please check your credentials and try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Split Screen Layout */}
      <main className="w-full flex flex-col md:flex-row min-h-screen">
        {/* Left Side: Image / Brand Anchor */}
        <section className="hidden md:flex flex-1 relative bg-surface-container-high overflow-hidden border-r border-outline-variant">
          {/* Overlay to create a softer, integrated look */}
          <div className="absolute inset-0 bg-primary opacity-10 mix-blend-multiply z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-container-high opacity-50 z-10 pointer-events-none"></div>
          <img alt="ApplyZen Dashboard Preview" className="w-full h-full object-cover z-0" src="https://lh3.googleusercontent.com/aida/AP1WRLtwIw_3oK5v9x2DvWhHx0QURhjlukDS8G7fZXDfPsMJHxHPxGXwxiXU_lqFRRPKOAm7yS8lfsrphgmDVF2BK6G6S6a00Q_8mVxLq_vYNMrgtXHrbHg_jfL3TrLy6OJDXA7N0OStiVo2kqYqeIJ68jIC4qkrZA316JUyBGuQ3u92EGKVoj8Lw6O9bfBHjQRypMPMtjIn1wxH3_OA7Qo9EO3Aom2H6DLpYnDuRVxFggVoL39JKKeK0JRC3HQ" />
          <div className="absolute bottom-12 left-12 right-12 z-20 p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-outline-variant shadow-lg">
            <h2 className="text-2xl font-bold text-on-surface mb-2">Cognitive Calm for Careers</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">Streamline your application process with our high-performance toolkit designed for modern professionals.</p>
          </div>
        </section>
        {/* Right Side: Login Form */}
        <section className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-surface-container-lowest">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-outline-variant bg-surface hover:bg-surface-container-low hover:border-outline transition-colors text-on-surface text-sm font-semibold h-[40px]" type="button">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-outline-variant bg-surface hover:bg-surface-container-low hover:border-outline transition-colors text-on-surface text-sm font-semibold h-[40px]" type="button">
                <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                LinkedIn
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
                    className="w-full pl-10 pr-4 py-2.5 h-[40px] bg-surface border border-outline-variant rounded-lg text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-shadow"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                    className="w-full pl-10 pr-4 py-2.5 h-[40px] bg-surface border border-outline-variant rounded-lg text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-shadow"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="pt-2">
                <button
                  className="w-full flex items-center justify-center h-[40px] bg-primary hover:bg-primary/90 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm disabled:opacity-50"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Signing In...' : 'Sign In'}
                </button>
              </div>
            </form>
            {/* Footer Link */}
            <p className="text-center text-sm text-on-surface-variant">
              Don't have an account? <Link className="text-primary font-medium hover:underline" to="/signup">Sign up</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

