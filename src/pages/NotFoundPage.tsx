import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Home, ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface NotFoundPageProps {
  currentLang?: Language;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ currentLang = 'ar' }) => {
  const isAr = currentLang !== 'en';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-[70vh] flex items-center justify-center px-4 py-16">
      <SeoHead
        title={isAr ? "الصفحة غير موجودة (404) | AirNest" : "Page Not Found (404) | AirNest"}
        description={isAr ? "الصفحة المطلوبة غير متوفرة. يمكنك العودة إلى الصفحة الرئيسية أو تصفح أدلة التجارة الإلكترونية." : "The requested page could not be found. Return to the homepage or explore our core e-commerce topic hubs."}
        canonicalPath="/404"
      />

      <div className="max-w-md text-center space-y-6">
        <span className="text-6xl font-black text-amber-500">404</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          {isAr ? "الصفحة غير موجودة" : "Page Not Found"}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {isAr
            ? "الرابط الذي اتبعته قد يكون معطلاً أو تم نقل الصفحة ضمن الهيكلية المحدثة للموقع."
            : "The link you followed may be broken or the page may have been moved as part of our updated website architecture."}
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>{isAr ? "العودة للرئيسية" : "Return to Homepage"}</span>
          </Link>
          <Link
            to="/guides/"
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs transition-all inline-flex items-center gap-2"
          >
            <span>{isAr ? "تصفح الأدلة" : "Browse Guides"}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
