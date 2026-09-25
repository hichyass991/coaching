import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Language, SiteTranslation } from '../types';
import { 
  Boxes, 
  PackageSearch, 
  Flame, 
  Banknote, 
  Zap, 
  Calculator, 
  BookOpen, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { PainPointsSection } from '../components/PainPointsSection';
import { CoachingProgramSection } from '../components/CoachingProgramSection';
import { TestimonialsSection } from '../components/TestimonialsSection';

interface HomePageProps {
  currentLang: Language;
  t: SiteTranslation;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  t,
  onOpenBooking,
}) => {
  const isRtl = currentLang !== 'en';

  const clusters = [
    {
      title: isRtl ? "التجارة الإلكترونية العامة (E-Commerce Architecture)" : "E-Commerce Architecture & Unit Economics",
      desc: isRtl ? "أسس بناء المتاجر، نماذج الأعمال، وسلاسل الإمداد مع ضبط دقيق لهوامش الربح الصافية." : "Store infrastructure, business models, supply chains, and mathematical contribution margins.",
      path: "/ecommerce/",
      icon: Boxes,
      badge: isRtl ? "البنية الأساسية" : "Core Architecture"
    },
    {
      title: isRtl ? "الدروبشيبينغ والبحث عن المنتجات (Dropshipping Operations)" : "Dropshipping Operations & Validation",
      desc: isRtl ? "معايير فحص المنتجات الرابحة، التعامل مع وكلاء الشحن (Agents)، والانتقال إلى براند مستدام." : "Data-driven product validation, direct agent sourcing from 1688, and scaling to private label.",
      path: "/dropshipping/",
      icon: PackageSearch,
      badge: isRtl ? "البحث والتوريد" : "Validation & Sourcing"
    },
    {
      title: isRtl ? "الإعلانات الممولة وميديا بايينغ (Paid Media Performance)" : "Paid Media: Meta Ads & TikTok Spark Ads",
      desc: isRtl ? "استراتيجيات إعلانات TikTok و Meta، صناعة الـ UGC، والتحكم في تكلفة الاقتناء (CPA)." : "Broad targeting, algorithmic creative testing, UGC hook frameworks, and ROAS preservation.",
      path: "/paid-media/",
      icon: Flame,
      badge: isRtl ? "الإعلانات والميديا" : "Traffic & Media Buying"
    },
    {
      title: isRtl ? "الدفع عند الاستلام واللوجستيك (Cash On Delivery)" : "Cash On Delivery (COD) Ecosystems",
      desc: isRtl ? "إدارة الكول سنتر، تقليل الروتور، ورفع نسبة التوصيل فوق 80% في المغرب والخليج والعالم." : "Call center confirmation protocols, courier SLA control, and RTO reduction across GCC and MENA.",
      path: "/cash-on-delivery/",
      icon: Banknote,
      badge: isRtl ? "العمليات واللوجستيك" : "Operations & Logistics"
    },
    {
      title: isRtl ? "تحسين معدل التحويل (Conversion CRO)" : "Conversion Rate Optimization (CRO) & Funnels",
      desc: isRtl ? "تصميم صفحات هبوط عالية التحويل، تقليل احتكاك الشراء على الموبايل، ومضاعفة الـ AOV." : "High-converting mobile product pages, single-page checkouts, and AOV expansion funnels.",
      path: "/conversion-optimization/",
      icon: Zap,
      badge: isRtl ? "الأداء والتحويل" : "Store Performance"
    },
    {
      title: isRtl ? "حاسبات وأدوات اتخاذ القرار (Financial Tools)" : "Financial Decision Tools & Calculators",
      desc: isRtl ? "حاسبة Break-Even ROAS، محاكي صافي الهامش، ونماذج تقدير خسائر الإرجاع." : "Calculators for Break-Even ROAS, Net Contribution Margins, and COD delivery thresholds.",
      path: "/tools/",
      icon: Calculator,
      badge: isRtl ? "أدوات وحاسبات" : "Interactive Utilities"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title="E-Commerce & Dropshipping Growth Authority | Frameworks, Paid Media & Operations"
        description="Global authority on scaling modern e-commerce and dropshipping: actionable frameworks for performance advertising, Cash on Delivery logistics, conversion rate optimization, and unit economics."
        canonicalPath="/"
      />

      {/* Main Hero Component */}
      <Hero t={t} onOpenBooking={onOpenBooking} currentLang={currentLang} />

      {/* Core Topical Clusters Architecture Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRtl ? "المحاور المعرفية الكبرى" : "Topical Authority Clusters"}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isRtl ? "المحاور المعرفية والعملية الكبرى للتجارة الإلكترونية" : "Core E-Commerce & Dropshipping Knowledge Pillars"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {isRtl
              ? "دليل منهجي تطبيقي يغطي المنظومة الشاملة من دراسة المنتجات والإعلانات إلى اللوجستيك والأرباح الصافية."
              : "Structured, practitioner-tested operating frameworks covering the entire lifecycle from product validation to international fulfillment."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clusters.map((cluster, idx) => {
            const IconComponent = cluster.icon;
            return (
              <Link
                key={idx}
                to={cluster.path}
                className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:border-amber-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all flex flex-col justify-between space-y-4 group shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {cluster.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors leading-snug">
                    {cluster.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cluster.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  <span>{isRtl ? "استكشف المحور بالكامل" : "Explore Pillar Framework"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Operational Pain Points & Solutions Section */}
      <PainPointsSection t={t} currentLang={currentLang} />

      {/* Coaching & Advisory Curriculum Section */}
      <CoachingProgramSection t={t} onOpenBooking={onOpenBooking} currentLang={currentLang} />

      {/* Verified Client Success Stories & Testimonials */}
      <TestimonialsSection currentLang={currentLang} onOpenBooking={onOpenBooking} />

      {/* Bottom Advisory Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white border border-slate-800 text-center space-y-6 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            {isRtl ? "استشارات وبرامج مواكبة تطبيقية" : "Strategic Advisory & Consulting"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold max-w-2xl mx-auto">
            {isRtl
              ? "هل تحتاج مواكبة مباشرة في حساباتك الإعلانية ومتجرك؟"
              : "Ready to Scale Your Store with Dedicated 1-on-1 Operational Guidance?"}
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {isRtl
              ? "مرافقة فردية داخل متجرك وحملاتك الإعلانية لضبط واختيار المنتجات الرابحة ورفع نسبة التوصيل فوق 80%."
              : "Hands-on diagnostic audits, media buying restructuring, and call center optimization tailored to your specific business model."}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/consulting/"
              className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 text-white font-bold text-sm transition-all"
            >
              {isRtl ? "تفاصيل برنامج الاستشارة" : "View Advisory Scope"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
