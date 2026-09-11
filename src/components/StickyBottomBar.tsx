import React from 'react';
import { Language, SiteTranslation } from '../types';
import { MessageCircle, Target, ArrowLeft, ArrowRight } from 'lucide-react';

interface StickyBottomBarProps {
  currentLang: Language;
  t: SiteTranslation;
  onOpenBooking: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  currentLang,
  t,
  onOpenBooking,
}) => {
  const isRtl = currentLang !== 'en';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const handleOpenWhatsApp = () => {
    const waText = currentLang === 'en'
      ? 'Hello Hicham, I saw your coaching offer and would like to ask about available 1-on-1 mentorship seats this month. Thank you!'
      : 'سلام خويا هشام، شفت العرض ديالك وبغيت نستفسر على برنامج المواكبة الفردية فالتجارة الإلكترونية (1-on-1 Coaching). عافاك واش باقي شي مقعد متوفر هاد الشهر؟ شكراً! 💬';
    window.open(`https://wa.me/212655845060?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 shadow-2xl transition-colors"
      style={{ direction: isRtl ? 'rtl' : 'ltr' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Urgency Notification */}
        <div className="hidden md:flex items-center gap-2.5 text-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-slate-800 dark:text-slate-200">
            {t.stickyBar.badge}
          </span>
        </div>

        {/* Buttons Group */}
        <div className="w-full sm:w-auto flex items-center justify-center gap-2.5">
          
          {/* Primary Booking Button */}
          <button
            onClick={onOpenBooking}
            className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm shadow-md shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer ring-2 ring-amber-400/30"
          >
            <span>{t.stickyBar.primaryCta}</span>
            <ArrowIcon className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Direct WhatsApp Button */}
          <button
            onClick={handleOpenWhatsApp}
            className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
            title={isRtl ? "تواصل مباشر عبر الواتساب" : "Direct WhatsApp Contact"}
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">{t.stickyBar.waCta}</span>
            <span className="sm:hidden">{isRtl ? "واتساب 💬" : "WhatsApp 💬"}</span>
          </button>

        </div>

      </div>
    </div>
  );
};
