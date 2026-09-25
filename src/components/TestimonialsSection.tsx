import React, { useState, useRef } from 'react';
import { Language } from '../types';
import { 
  TESTIMONIALS_DATA, 
  TESTIMONIALS_AGGREGATE_STATS, 
  TestimonialItem 
} from '../data/testimonialsData';
import { 
  Star, 
  TrendingUp, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  MapPin, 
  Store, 
  Target, 
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface TestimonialsSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const isRtl = currentLang !== 'en';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [selectedFilter, setSelectedFilter] = useState<'all' | 'cod-morocco' | 'gcc' | 'dropshipping'>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredTestimonials = TESTIMONIALS_DATA.filter(item => {
    if (selectedFilter === 'all') return true;
    return item.marketCategory === selectedFilter;
  });

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const distance = 400;
    const delta = direction === 'left' ? -distance : distance;
    scrollContainerRef.current.scrollBy({ left: delta, behavior: 'smooth' });
  };

  const filterTabs = [
    { key: 'all', labelAr: 'جميع قصص النجاح', labelEn: 'All Success Stories' },
    { key: 'cod-morocco', labelAr: 'الدفع عند الاستلام بالمغرب (COD)', labelEn: 'Morocco COD' },
    { key: 'gcc', labelAr: 'التوسع في الخليج (GCC)', labelEn: 'GCC Expansion' },
    { key: 'dropshipping', labelAr: 'الدروب شيبينغ والعلامات الخاصة', labelEn: 'Global Dropshipping' },
  ] as const;

  return (
    <section 
      id="testimonials" 
      className="py-20 lg:py-28 bg-slate-50/70 dark:bg-[#070b14] border-t border-slate-200 dark:border-slate-800 transition-colors"
      style={{ direction: isRtl ? 'rtl' : 'ltr' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>
              {isRtl ? "نتائج وقصص نجاح المشتركين" : "Verified Client Breakthroughs"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {isRtl
              ? "قصص نجاح واقعية لرواد أعمال خاضوا مواكبة AirNest"
              : "Real Growth Stories & Metric Shifts from AirNest Mentorship"}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isRtl
              ? "تحولات ميدانية موثقة لأصحاب متاجر إلكترونية تخلصوا من حرق الميزانيات، وضبطوا نسب التسليم فوق 80% مع هوامش ربح صافية مستدامة."
              : "Documented case results from e-commerce operators who restructured media buying, solved logistics friction, and pushed delivery rates above 80%."}
          </p>
        </div>

        {/* Aggregate Impact Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="space-y-1 text-center sm:text-start border-b sm:border-b-0 sm:border-e border-slate-100 dark:border-slate-800/80 pb-4 sm:pb-0 sm:pe-6">
            <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
              {TESTIMONIALS_AGGREGATE_STATS.coachedStores}
            </span>
            <p className="text-xs font-bold text-slate-900 dark:text-white">
              {isRtl ? "متجر تمت مواكبته" : "Stores Mentored"}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {isRtl ? "في المغرب، الخليج وأوروبا" : "Morocco, GCC & EU"}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-start border-b sm:border-b-0 sm:border-e border-slate-100 dark:border-slate-800/80 pb-4 sm:pb-0 sm:px-6">
            <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
              {TESTIMONIALS_AGGREGATE_STATS.avgDeliveryRate}
            </span>
            <p className="text-xs font-bold text-slate-900 dark:text-white">
              {isRtl ? "متوسط معدل التسليم" : "Avg. Delivery Rate"}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {isRtl ? "بروتوكول التأكيد والتتبع" : "Strict confirmation SLA"}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-start border-b sm:border-b-0 sm:border-e border-slate-100 dark:border-slate-800/80 pb-4 sm:pb-0 sm:px-6">
            <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
              {TESTIMONIALS_AGGREGATE_STATS.avgProfitIncrease}
            </span>
            <p className="text-xs font-bold text-slate-900 dark:text-white">
              {isRtl ? "زيادة الأرباح الصافية" : "Net Margin Surge"}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {isRtl ? "عبر عروض الباقات والـ Upsells" : "Bundles & AOV expansion"}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-start pt-2 sm:pt-0 sm:ps-6">
            <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs font-bold text-slate-900 dark:text-white">
              {TESTIMONIALS_AGGREGATE_STATS.satisfactionScore}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {isRtl ? "تقييم المشتركين المعتمد" : "Verified client feedback"}
            </p>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs gap-1">
            {filterTabs.map(tab => {
              const isActive = selectedFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setSelectedFilter(tab.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {isRtl ? tab.labelAr : tab.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows for User-controlled scrolling */}
        <div className="flex items-center justify-between gap-3 px-1">
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
            <span>
              {isRtl
                ? `تصفح تجارب وقصص النجاح (${filteredTestimonials.length})`
                : `Browse Success Stories (${filteredTestimonials.length})`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleManualScroll('left')}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer"
              aria-label="Scroll left"
              title={isRtl ? "تمرير لليسار" : "Scroll left"}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleManualScroll('right')}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer"
              aria-label="Scroll right"
              title={isRtl ? "تمرير لليمين" : "Scroll right"}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Single Line Manual Scroll Track (All in 1 Row, User Moves Them) */}
        <div className="relative w-full py-2">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2"
          >
            <div className="flex flex-nowrap items-stretch gap-6">
              {filteredTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-[320px] sm:w-[380px] shrink-0 snap-start rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/95 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-xs hover:border-amber-500/40 hover:shadow-md transition-all duration-300"
                >
                  {/* Card Top: Author Identity & Context */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 font-black text-sm flex items-center justify-center shrink-0">
                          {item.avatar}
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-sm font-black text-slate-900 dark:text-white leading-tight">
                              {item.name}
                            </h3>
                            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" title={isRtl ? "مشترك موثق" : "Verified Client"} />
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {isRtl ? item.roleAr : item.roleEn}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Metadata row */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                      <span className="flex items-center gap-1 font-medium">
                        <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                        <span>{isRtl ? item.locationAr : item.locationEn}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 font-medium">
                        <Store className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{isRtl ? item.storeNicheAr : item.storeNicheEn}</span>
                      </span>
                    </div>

                    {/* Rating Stars & Key Headline */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {isRtl ? item.highlightAr : item.highlightEn}
                      </h4>
                    </div>

                    {/* Primary Testimonial Quote */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                      "{isRtl ? item.quoteAr : item.quoteEn}"
                    </p>
                  </div>

                  {/* Card Bottom */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {isRtl ? "تاريخ التحقق: " : "Verified: "} {item.verifiedDate}
                    </span>

                    <button
                      onClick={onOpenBooking}
                      className="font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1"
                      title={isRtl ? "احجز استشارتك المشابهة" : "Book your strategy session"}
                    >
                      <span>{isRtl ? "احجز استشارتك" : "Book Audit"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Action Card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 border border-slate-800 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-start max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400">
              <Target className="w-4 h-4" />
              <span>{isRtl ? "دورك الآن لتحقيق نفس النتائج" : "Your Turn to Scale"}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              {isRtl
                ? "جاهز لحل مشاكل الروتور ومضاعفة أرباحك الصافية؟"
                : "Ready to Fix Return Rates and Multiply Net Profit?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isRtl
                ? "احجز مكالمتك الاستكشافية المجانية مع فريق AirNest. سنراجع متجرك وحساباتك الإعلانية ونعطيك خطة عمل واضحة بدون وعود فارغة."
                : "Book an introductory audit with AirNest. We will diagnose your store, creative angles, and logistics to design a proven turnaround roadmap."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isRtl ? "احجز مكالمتك الاستكشافية دابا" : "Schedule Free Diagnostic Audit"}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/212655845060"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: 0655845060</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
