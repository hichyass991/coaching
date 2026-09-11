import React from 'react';
import { Language, SiteTranslation } from '../types';
import { 
  Target, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Video, 
  Gift, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

interface CoachingProgramSectionProps {
  currentLang: Language;
  t: SiteTranslation;
  onOpenBooking: () => void;
}

export const CoachingProgramSection: React.FC<CoachingProgramSectionProps> = ({
  currentLang,
  t,
  onOpenBooking,
}) => {
  const isRtl = currentLang !== 'en';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="program" className="py-20 md:py-28 bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700/50 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Target className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>{t.program.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.program.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.program.subtitle}
          </p>

          {/* Program Format Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200">
              <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>{t.program.duration}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200">
              <Video className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.program.format}</span>
            </div>
          </div>
        </div>

        {/* 4 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.program.modules.map((mod) => (
            <div
              key={mod.id}
              className="p-7 sm:p-9 rounded-2xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-500/50 hover:bg-white dark:hover:bg-slate-850 hover:shadow-lg transition-all space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Step badge & Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/50 px-3 py-1 rounded-full">
                    {mod.step}
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {mod.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 dark:text-white leading-snug">
                  {mod.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {mod.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-2 space-y-2.5">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block">
                    {isRtl ? "المخرجات التطبيقية لهذا المحور:" : "Practical Deliverables for this Module:"}
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {mod.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-semibold text-amber-800 dark:text-amber-400 flex items-center justify-between">
                <span>{isRtl ? "تطبيق ومراجعة مباشرة في حسابك" : "Live audit & execution in your accounts"}</span>
                <span className="font-mono font-bold">1-on-1 Mentorship</span>
              </div>
            </div>
          ))}
        </div>

        {/* Exclusive Bonuses Section */}
        <div id="why-me" className="rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-white dark:to-slate-900 border border-amber-300 dark:border-amber-500/30 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 text-amber-900 dark:text-amber-300">
            <Gift className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            <h3 className="text-xl sm:text-2xl font-black">
              {t.program.bonusesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.program.bonuses.map((bonus, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-800/90 border border-amber-200 dark:border-amber-500/20 flex items-start gap-3 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {bonus}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Action Area */}
          <div className="pt-4 text-center">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2.5 cursor-pointer ring-2 ring-amber-400/40"
            >
              <span>{t.program.cta}</span>
              <ArrowIcon className="w-5 h-5 stroke-[2.5]" />
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-2">
              {isRtl 
                ? "⚡ متبقي مقعدين فقط لهذا الشهر للحفاظ على المتابعة الشخصية المكثفة" 
                : "⚡ Only 2 mentorship seats remaining this month to ensure intensive individual focus"}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
