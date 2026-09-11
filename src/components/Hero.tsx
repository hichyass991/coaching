import React from 'react';
import { Language, SiteTranslation } from '../types';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  MessageCircle,
  Laptop,
  ExternalLink
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface HeroProps {
  currentLang: Language;
  t: SiteTranslation;
  onOpenBooking: () => void;
  onExploreProgram?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  t,
  onOpenBooking,
  onExploreProgram,
}) => {
  const isRtl = currentLang !== 'en';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const handleExploreClick = () => {
    if (onExploreProgram) {
      onExploreProgram();
      return;
    }
    const el = document.getElementById('program');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = () => {
    const defaultMsg = currentLang === 'en'
      ? 'Hello Hicham, I saw your coaching program and would like to ask about available 1-on-1 mentorship seats this month. Thank you!'
      : 'سلام خويا هشام، شفت برنامج المواكبة وبغيت نستفسر على المقاعد المتبقية لهاد الشهر لحجز مكالمة استكشافية. شكراً!';
    window.open(`https://wa.me/212655845060?text=${encodeURIComponent(defaultMsg)}`, '_blank');
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-amber-50/25 dark:from-slate-900/80 dark:via-[#0b0f19] dark:to-amber-950/20 border-b border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* Subtle Warm Amber Glow in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 dark:bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-8 text-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.25] max-w-4xl mx-auto">
            {t.hero.headline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 dark:from-amber-400 dark:via-orange-400 dark:to-amber-300">
              {t.hero.headlineHighlight}
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
            {t.hero.subheadline}
          </p>

          {/* Key Value Points (Checklist) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-start max-w-xl mx-auto">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-slate-700 dark:text-slate-200 font-semibold">
                {isRtl ? "اختيار وتأكيد المنتجات المربحة (Winning Products)" : "Data-driven Winning Product Selection & Testing"}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-slate-700 dark:text-slate-200 font-semibold">
                {isRtl ? "إعلانات فيسبوك وتيك توك بهوامش ربح صافية" : "Meta & TikTok Ads with Sustainable Net Margins"}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-slate-700 dark:text-slate-200 font-semibold">
                {isRtl ? "بروتوكول محاربة الروتور ورفع نسبة التسليم فوق 80%" : "RTO Defense Protocol & 80%+ Delivery Rate"}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-slate-700 dark:text-slate-200 font-semibold">
                {isRtl ? "متابعة يومية عبر الواتساب وجلسات تدقيق أسبوعية" : "Daily WhatsApp Support & Weekly Live Audits"}
              </span>
            </div>
          </div>

          {/* CTA Buttons Group (High-Contrast Orange & Amber) */}
          <div className="pt-4 space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
              
              {/* Primary Button */}
              <button
                onClick={onOpenBooking}
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer ring-2 ring-amber-400/40"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowIcon className="w-5 h-5 stroke-[2.5] group-hover:translate-x-[-3px] transition-transform" />
              </button>

              {/* Platform Button */}
              <a
                href={SITE_CONFIG.platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-amber-500/15 dark:hover:bg-amber-500/25 dark:text-amber-200 font-bold text-xs sm:text-sm border border-slate-800 dark:border-amber-500/30 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                title={isRtl ? "منصة الكوتشينغ AirNest" : "AirNest Coaching Platform"}
              >
                <Laptop className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isRtl ? "دخول منصة الكوتشينغ (AirNest)" : "AirNest Coaching Platform"}</span>
                <ExternalLink className="w-4 h-4 opacity-70 shrink-0" />
              </a>

              {/* Secondary Button */}
              <button
                onClick={handleExploreClick}
                className="px-6 py-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 hover:border-amber-400 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* Direct WhatsApp Fast Link */}
            <div className="flex items-center justify-center">
              <button
                onClick={handleOpenWhatsApp}
                className="text-xs text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 py-1 px-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 dark:fill-emerald-500 text-emerald-600 dark:text-emerald-500" />
                <span>{isRtl ? "تواصل معايا مباشرة عبر الواتساب (0655845060) 💬" : "Direct WhatsApp Inquiries (+212 655-845060) 💬"}</span>
              </button>
            </div>
          </div>

          {/* Reassurance note */}
          <div className="pt-1 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{t.hero.guarantee}</span>
          </div>

          {/* Social Trust Rating */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200">{t.hero.ratingText}</span>
          </div>

        </div>

        {/* 3 Impact Stats Bar */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
          <div className="text-center space-y-1 sm:border-e sm:border-slate-200 dark:sm:border-slate-800 last:border-e-0">
            <p className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400 tracking-tight">
              {t.hero.stat1Value}
            </p>
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              {t.hero.stat1Label}
            </p>
          </div>
          <div className="text-center space-y-1 sm:border-e sm:border-slate-200 dark:sm:border-slate-800 last:border-e-0">
            <p className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
              {t.hero.stat2Value}
            </p>
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              {t.hero.stat2Label}
            </p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {t.hero.stat3Value}
            </p>
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              {t.hero.stat3Label}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
