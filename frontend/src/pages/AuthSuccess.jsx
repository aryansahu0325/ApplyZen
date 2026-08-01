import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * AuthSuccess Page.
 *
 * Handles the post-OAuth redirect from the backend.
 *
 * After Google OAuth completes, the backend redirects here with
 * the access token, refresh token, and user data as URL query params.
 * (HttpOnly cookies cannot be used cross-origin between Railway and Vercel.)
 *
 * Responsibilities:
 *  1. Parse ?token=, ?refreshToken=, and ?user= from the URL.
 *  2. Store them in localStorage and AuthContext.
 *  3. Redirect to Dashboard.
 *  4. On any failure, redirect back to Login.
 */
export default function AuthSuccess() {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();
  const hasRun = useRef(false);

  useEffect(() => {
    // Guard: prevent double-invocation in React Strict Mode
    if (hasRun.current) return;
    hasRun.current = true;

    const handleOAuthSuccess = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const refreshToken = params.get('refreshToken');
        const userStr = params.get('user');

        if (!token || !userStr) {
          console.error('OAuth success: missing token or user data in URL params');
          navigate('/login', { replace: true });
          return;
        }

        // Store tokens in localStorage for subsequent API calls
        localStorage.setItem('applyzen_token', token);
        if (refreshToken) {
          localStorage.setItem('applyzen_refresh_token', refreshToken);
        }

        // Parse and store user in AuthContext + localStorage
        const userData = JSON.parse(userStr);
        setAuthUser(userData);

        // Redirect to dashboard
        navigate('/dashboard', { replace: true });
      } catch (err) {
        console.error('OAuth verification failed:', err);
        navigate('/login', { replace: true });
      }
    };

    handleOAuthSuccess();
  }, [setAuthUser, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-container-lowest">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-on-surface-variant">Completing sign-in...</p>
      </div>
    </div>
  );
}
