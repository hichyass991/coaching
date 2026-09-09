import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-[70vh] flex items-center justify-center px-4 py-16">
      <SeoHead
        title="Page Not Found (404)"
        description="The requested page could not be found. Return to the homepage or explore our core e-commerce topic hubs."
        canonicalPath="/404"
      />

      <div className="max-w-md text-center space-y-6">
        <span className="text-6xl font-black text-amber-500">404</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          The link you followed may be broken or the page may have been moved as part of our updated website architecture.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/guides/"
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs transition-all inline-flex items-center gap-2"
          >
            <span>Browse Guides</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
