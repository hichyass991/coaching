import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Newspaper, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Tag 
} from 'lucide-react';
import { Language } from '../types';

interface BlogHubPageProps {
  currentLang?: Language;
}

export const BlogHubPage: React.FC<BlogHubPageProps> = ({ currentLang = 'ar' }) => {
  const isAr = currentLang !== 'en';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const articles = isAr ? [
    {
      title: "التحول في خوارزميات شراء الإعلانات: لماذا يتفوق تنوع الفيديوهات الإبداعية على المزايدة اليدوية؟",
      category: "الإعلانات الممولة",
      readTime: "7 دقائق قراءة",
      summary: "كيف جعلت خوارزميات التعلم الآلي الحديثة على تيك توك وميتا الاستهداف المجهري قديماً وغير فعال لصالح تنوع الخطافات الإعلانية والاستهداف العريض.",
      link: "/paid-media/"
    },
    {
      title: "اقتصاديات وحدة الدفع عند الاستلام (COD): لماذا يقل صافي الربح أحياناً عند الانتقال من 50 إلى 300 طلب/يوم؟",
      category: "الدفع عند الاستلام",
      readTime: "9 دقائق قراءة",
      summary: "تحليل رياضي لاختناقات المستودعات، قفزات نسبة الروتور، وفخ تجميد رأس المال التشغيلي أثناء التوسع الإقليمي السريع بدون ضبط اللوجستيك.",
      link: "/cash-on-delivery/"
    },
    {
      title: "من موقع 1688 إلى مستودعات 3PL المحلية: خارطة الطريق الكاملة لسلاسل إمداد الدروب شيبينغ الناجح",
      category: "الدروب شيبينغ",
      readTime: "11 دقيقة قراءة",
      summary: "الانتقال اللوجستي المنظم من الشحن الجوي الفردي عبر الحدود إلى شحن الحاويات المجمعة بحراً والتخزين المحلي لتقليص مدة التوصيل.",
      link: "/dropshipping/"
    },
    {
      title: "فورم الدفع السريع بدون احتكاك: دروس مستفادة من تدقيق أكثر من 100 متجر إلكتروني",
      category: "تحسين التحويل",
      readTime: "6 دقائق قراءة",
      summary: "تحليل أنماط التخطيط البصري، تموضع أزرار الشراء، ومحفزات بناء الثقة التي ترفع معدل إتمام الطلبات على الهاتف بشكل قياسي.",
      link: "/conversion-optimization/"
    }
  ] : [
    {
      title: "The Shift in Algorithmic Ad Buying: Why Creative Breadth Beats Manual Bidding in 2026",
      category: "Paid Media",
      readTime: "7 min read",
      summary: "How modern machine learning on TikTok and Meta has rendered micro-interest targeting obsolete in favor of broad hook diversity.",
      link: "/paid-media/"
    },
    {
      title: "COD Unit Economics: Why Scaling from 50 to 300 Orders/Day Often Reduces Net Profit",
      category: "Cash On Delivery",
      readTime: "9 min read",
      summary: "A mathematical breakdown of warehouse bottlenecking, return-to-origin spikes, and working capital traps during rapid regional expansion.",
      link: "/cash-on-delivery/"
    },
    {
      title: "From 1688 to Domestic 3PL: The Complete Supply Chain Roadmap for Scaled Dropshippers",
      category: "Dropshipping",
      readTime: "11 min read",
      summary: "Transitioning your logistics from cross-border individual parcel airfreight to consolidated sea freight and local fulfillment centers.",
      link: "/dropshipping/"
    },
    {
      title: "The Zero-Friction Mobile Checkout: Lessons from 100+ E-Commerce Funnel Audits",
      category: "Conversion Optimization",
      readTime: "6 min read",
      summary: "Analyzing the layout patterns, button placements, and reassurance triggers that consistently drive conversion rate gains.",
      link: "/conversion-optimization/"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title={isAr ? "تحليلات التجارة الإلكترونية، تحديثات الخوارزميات والبحوث | AirNest" : "E-Commerce & Dropshipping Insights, Market Analysis & Research | AirNest"}
        description={isAr ? "تحليلات سوقية مبنية على البيانات، تحديثات خوارزميات المنصات الإعلانية، وتشريح ميداني لأصحاب المتاجر الإلكترونية والدروب شيبينغ." : "Data-backed industry analysis, platform algorithm updates, and operational teardowns for modern e-commerce and dropshipping operators."}
        canonicalPath="/blog/"
        breadcrumbs={[{ name: isAr ? 'المدونة والتحليلات' : 'Blog', item: '/blog/' }]}
      />

      <Breadcrumbs items={[{ name: isAr ? 'المدونة والتحليلات' : 'Blog', item: '/blog/' }]} currentLang={currentLang} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Newspaper className="w-3.5 h-3.5" />
            <span>{isAr ? "أبحاث وتحليلات السوق الميدانية" : "Research & Industry Analysis"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            {isAr 
              ? "تحليلات التجارة الإلكترونية والدروب شيبينغ وبحوث السوق" 
              : "E-Commerce & Dropshipping Insights, Market Analysis & Research"}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {isAr
              ? "تحليلات تشغيلية متعمقة، ومتابعة فورية لتغيرات الخوارزميات، ودراسات حالة واقعية من الخطوط الأمامية للتجارة الإلكترونية وشراء الإعلانات."
              : "In-depth operational analyses, algorithm shifts, and empirical case breakdowns from the front lines of global e-commerce and media buying."}
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <article 
              key={idx}
              className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1 font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link 
                  to={article.link} 
                  className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{isAr ? "قراءة التحليل الكامل" : "Read Full Pillar Analysis"}</span>
                  <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </main>
    </div>
  );
};
