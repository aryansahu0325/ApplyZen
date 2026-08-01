import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getCurrentUser } from '../api/client';

/**
 * AuthSuccess Page.
 *
 * Handles the post-OAuth redirect from the backend.
 *
 * After Google OAuth completes, the backend sets HttpOnly cookies
 * (accessToken and refreshToken) and redirects the browser here.
 *
 * Responsibilities:
 *  1. Call GET /api/v1/auth/me (cookies are sent automatically).
 *  2. If successful, save the user to AuthContext and redirect to Dashboard.
 *  3. If it fails, redirect back to Login.
 *
 * This page is intentionally stateless — it shows a spinner and
 * transitions the user without requiring any interaction.
 */
export default function AuthSuccess() {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();
  const hasRun = useRef(false);

  useEffect(() => {
    // Guard: prevent double-invocation in React Strict Mode
    if (hasRun.current) return;
    hasRun.current = true;

    const verifyAndRedirect = async () => {
      try {
        // Fetch authenticated user profile using the HttpOnly cookie sent automatically
        const userData = await getCurrentUser();

        // Save the authenticated user to global auth state and localStorage
        setAuthUser(userData);

        // Redirect to the application dashboard
        navigate('/dashboard', { replace: true });
      } catch (err) {
        // Authentication verification failed — redirect to Login cleanly
        console.error('OAuth verification failed:', err);
        navigate('/login', { replace: true });
      }
    };

    verifyAndRedirect();
  }, [setAuthUser, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-container-lowest">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner — matches existing design system loading pattern */}
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-on-surface-variant">Completing sign-in...</p>
      </div>
    </div>
  );
}
