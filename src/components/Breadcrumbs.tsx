import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from './SeoHead';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-xs text-slate-500 dark:text-slate-400"
    >
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        <li className="inline-flex items-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.item} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
              {isLast ? (
                <span 
                  aria-current="page" 
                  className="font-bold text-slate-900 dark:text-white"
                >
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.item} 
                  className="hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
