import React from 'react';
import { Language, SiteTranslation } from '../types';
import { 
  ShieldAlert, 
  Flame, 
  SearchX, 
  RotateCcw, 
  Compass, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface PainPointsProps {
  currentLang: Language;
  t: SiteTranslation;
  onOpenBooking: () => void;
}

export const PainPointsSection: React.FC<PainPointsProps> = ({
  currentLang,
  t,
  onOpenBooking,
}) => {
  const isRtl = currentLang !== 'en';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const getIcon = (id: string) => {
    switch (id) {
      case 'ads-burn':
        return <Flame className="w-6 h-6 text-red-500" />;
      case 'cod-returns':
        return <RotateCcw className="w-6 h-6 text-purple-600" />;
      case 'bad-offers':
        return <SearchX className="w-6 h-6 text-amber-500" />;
      case 'scaling-fear':
        return <Compass className="w-6 h-6 text-blue-600" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="pain-points" className="py-20 md:py-28 bg-slate-50 dark:bg-[#0e1424] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span>{t.painPoints.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.painPoints.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.painPoints.subtitle}
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.painPoints.items.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 p-7 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-red-300 dark:hover:border-red-900/80 transition-all space-y-5"
            >
              {/* Header with icon and tag */}
              <div className="flex items-center justify-between gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                  {getIcon(item.id)}
                </div>
                <span className="text-xs font-bold text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Problem Title */}
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
                {item.problem}
              </h3>

              {/* Consequence (The Pain) */}
              <div className="p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-xs text-red-900 dark:text-red-200 font-medium leading-relaxed">
                <strong className="block mb-1 text-red-700 dark:text-red-400">
                  {isRtl ? "⚠️ النتيجة الملموسة:" : "⚠️ Measurable Impact:"}
                </strong>
                {item.consequence}
              </div>

              {/* Solution in Mentorship */}
              <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 text-xs text-emerald-950 dark:text-emerald-200 leading-relaxed">
                <strong className="block mb-1 text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  {isRtl ? "الحل العملي في برنامج المواكبة:" : "Actionable Coaching Solution:"}
                </strong>
                {item.solution}
              </div>
            </div>
          ))}
        </div>

        {/* Bridge Box & Call To Action */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-500/40 shadow-md text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {isRtl 
              ? "الحل ليس مجرد دورة نظرية أخرى، بل مواكبة استراتيجية داخل حسابك ومتجرك" 
              : "Not Another Generic Course — Dedicated 1-on-1 Implementation in Your Accounts"}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
            {t.painPoints.bridgeText}
          </p>
          <div>
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2.5 cursor-pointer ring-2 ring-amber-400/30"
            >
              <span>{t.painPoints.bridgeCta}</span>
              <ArrowIcon className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
