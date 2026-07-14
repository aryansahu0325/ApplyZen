import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full text-center relative overflow-hidden">
        {/* Background blobs for depth */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>

        <div className="relative z-10">
          <h1 className="text-8xl font-black text-slate-200 mb-4 tracking-tighter">404</h1>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Page not found</h2>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors border border-transparent"
            >
              Go Back
            </button>
            <Link
              to="/"
              className="px-6 py-3 rounded-xl font-bold text-white bg-primary hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Back to HomePage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
