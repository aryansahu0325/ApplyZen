import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { validateRequired, validateEmail, validatePassword } from '../utils/validation';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const getPasswordStrength = (pwd) => {
    if (!pwd) return { label: '', color: 'bg-transparent w-0' };
    if (pwd.length < 8) return { label: 'Weak', color: 'bg-red-500 w-1/3' };
    const hasLetter = /[a-zA-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecial = /[^a-zA-Z0-9]/.test(pwd);
    
    if (hasLetter && hasNumber && hasSpecial && pwd.length >= 8) {
      return { label: 'Strong', color: 'bg-green-500 w-full' };
    } else if (hasLetter && hasNumber && pwd.length >= 8) {
      return { label: 'Medium', color: 'bg-yellow-500 w-2/3' };
    }
    return { label: 'Weak', color: 'bg-red-500 w-1/3' };
  };
  
  const strength = getPasswordStrength(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateRequired(fullName)) {
      setError('Full name is required.');
      return;
    }

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
      const res = signup(fullName, email, password);
      if (res.success) {
        navigate('/dashboard');
      } else {
        setError(res.message);
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
        {/* Left Side: Image / Brand Anchor */}
        {/* Left Side: Workflow UI */}
        <section className="hidden md:flex flex-1 relative bg-slate-900 overflow-hidden border-r border-outline-variant items-center justify-center p-12">
          {/* Background subtle glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-md">
            <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-md tracking-tight">Your Application Workflow</h2>
            <div className="space-y-0">
              
              {/* Step 1 */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary text-primary flex items-center justify-center font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">1</div>
                  <div className="w-0.5 h-12 bg-white/10 my-2 group-hover:bg-primary/50 transition-colors"></div>
                </div>
                <div className="pb-6 pt-1">
                  <h3 className="text-lg font-bold text-white mb-1">Build Your Profile</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Upload your base resume. Our AI extracts your skills, experience, and job preferences.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary text-primary flex items-center justify-center font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">2</div>
                  <div className="w-0.5 h-12 bg-white/10 my-2 group-hover:bg-primary/50 transition-colors"></div>
                </div>
                <div className="pb-6 pt-1">
                  <h3 className="text-lg font-bold text-white mb-1">AI Tailoring</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">For every job match, ApplyZen instantly generates a highly-targeted, custom resume.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary text-primary flex items-center justify-center font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">3</div>
                  <div className="w-0.5 h-12 bg-white/10 my-2 group-hover:bg-primary/50 transition-colors"></div>
                </div>
                <div className="pb-6 pt-1">
                  <h3 className="text-lg font-bold text-white mb-1">Auto-Apply</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Our bots navigate complex ATS systems and submit applications on your behalf securely.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(var(--color-primary),0.5)]">
                    <span className="material-symbols-outlined text-[20px]">task_alt</span>
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-white mb-1">Land Interviews</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Sit back and monitor your success rate from a unified, intelligent dashboard.</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Right Side: SignUp Form */}
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
                <span className="text-xl font-bold tracking-tight">ApplyZen</span>
              </div>
              <h2 className="text-xl font-bold text-on-surface">Create your account</h2>
              <p className="text-sm text-on-surface-variant">Start managing your applications with clarity.</p>
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

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-on-surface" htmlFor="fullName">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">person</span>
                  <input
                    className={`w-full pl-10 pr-10 py-2.5 h-[40px] bg-surface border rounded-lg text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 transition-shadow ${
                      fullName && !validateRequired(fullName) ? 'border-red-500 focus:border-red-500' : 'border-outline-variant focus:border-primary'
                    }`}
                    id="fullName"
                    name="fullName"
                    placeholder="Jane Doe"
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {fullName && validateRequired(fullName) && (
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-[20px] pointer-events-none">check_circle</span>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-on-surface" htmlFor="email">Work Email</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">mail</span>
                  <input
                    className={`w-full pl-10 pr-10 py-2.5 h-[40px] bg-surface border rounded-lg text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 transition-shadow ${
                      email && !validateEmail(email) ? 'border-red-500 focus:border-red-500' : 'border-outline-variant focus:border-primary'
                    }`}
                    id="email"
                    name="email"
                    placeholder="jane@company.com"
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
                <label className="block text-sm font-semibold text-on-surface" htmlFor="password">Password</label>
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
                
                {/* Password Strength Meter */}
                {password && (
                  <div className="mt-2 space-y-1">
                    <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden flex">
                      <div className={`h-full transition-all duration-300 ${strength.color}`}></div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                      <span className="text-on-surface-variant">Strength</span>
                      <span className={
                        strength.label === 'Weak' ? 'text-red-500' :
                        strength.label === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                      }>{strength.label}</span>
                    </div>
                  </div>
                )}
                {!password && (
                  <p className="text-xs text-on-surface-variant mt-1">Must be at least 8 characters long.</p>
                )}
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
                  {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>
            </form>

            {/* Footer Link */}
            <p className="text-center text-sm text-on-surface-variant">
              Already have an account? <Link className="text-primary font-medium hover:underline" to="/login">Sign in</Link>
            </p>
          </div>
          </div>
          

        </section>
      </main>
    </>
  );
}

