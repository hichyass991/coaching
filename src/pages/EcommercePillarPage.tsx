import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Boxes, 
  TrendingUp, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  BarChart3, 
  Sparkles
} from 'lucide-react';
import { Language } from '../types';

interface EcommercePillarPageProps {
  currentLang?: Language;
}

export const EcommercePillarPage: React.FC<EcommercePillarPageProps> = ({ currentLang = 'ar' }) => {
  const isAr = currentLang !== 'en';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title={isAr ? "بنية التجارة الإلكترونية الحديثة، نماذج الأعمال واقتصاديات الوحدة | AirNest" : "Modern E-Commerce Architecture, Business Models & Unit Economics | AirNest"}
        description={isAr ? "الدليل الشامل لبناء وتوسيع المتاجر الإلكترونية المربحة: نماذج الأعمال، البنية التحتية، سلاسل الإمداد، واقتصاديات الوحدة الحقيقية." : "Comprehensive authority guide to scaling modern e-commerce brands: business models, store infrastructure, supply chains, customer acquisition, and unit economics."}
        canonicalPath="/ecommerce/"
        breadcrumbs={[{ name: isAr ? 'التجارة الإلكترونية' : 'E-Commerce', item: '/ecommerce/' }]}
      />

      <Breadcrumbs items={[{ name: isAr ? 'التجارة الإلكترونية' : 'E-Commerce', item: '/ecommerce/' }]} currentLang={currentLang} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Boxes className="w-3.5 h-3.5" />
            <span>{isAr ? "الركيزة الأساسية للمعرفة" : "Core Knowledge Pillar"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            {isAr 
              ? "هندسة التجارة الإلكترونية الحديثة، نماذج الأعمال واقتصاديات الوحدة" 
              : "Modern E-Commerce Architecture, Business Models & Unit Economics"}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {isAr
              ? "المتجر الإلكتروني المستدام والمربح يُبنى على حسابات دقيقة لاقتصاديات الوحدة (Unit Economics)، سلاسل إمداد موثوقة، وقنوات استحواذ عملاء متوقعة ومربحة — وليس على الخدع التسويقية المؤقتة. اكتشف أطر العمل التشغيلية الاحترافية مع AirNest."
              : "A sustainable e-commerce brand is built on mathematical unit economics, reliable supply chains, and predictable customer acquisition channels—not short-term marketing tricks. Explore our comprehensive operating frameworks."}
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Business Models */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Layers className="w-6 h-6 text-amber-500" />
            <span>{isAr ? "1. نماذج الأعمال الأساسية في التجارة الإلكترونية" : "1. Foundational E-Commerce Business Models"}</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "تتحكم في كل عملية تجارة إلكترونية دورة تحويل السيولة (Cash Conversion Cycle)، ومخاطر المخزون، ونموذج توصيل الطلبات للعميل. فهم الفروق الهيكلية بين هذه النماذج هو الخطوة الأولى نحو التوسع المربح."
              : "Every e-commerce operation is governed by its cash conversion cycle, inventory risk, and customer fulfillment model. Understanding the structural differences is the first step toward profitable scaling."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {isAr ? "المباشر للمستهلك (D2C)" : "Direct-to-Consumer (D2C)"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {isAr
                  ? "تصنيع علامة تجارية خاصة وبناء علاقة مباشرة مع العميل. يتطلب استثماراً أولياً في المخزون، لكنه يمنح هوامش ربح إجمالية ممتازة (فوق 65%) وقيمة عمر عميل (LTV) مرتفعة."
                  : "Branded manufacturing and direct customer relationships. High upfront inventory requirements, superior gross margins (65%+), and strong customer lifetime value (LTV)."}
              </p>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {isAr ? "أصول علامة تجارية مستدامة" : "High Brand Equity"}
              </span>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {isAr ? "الدروب شيبينغ والتوريد السريع" : "Dropshipping & Sourcing"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {isAr
                  ? "انعدام مخاطر المخزون في البداية. يتم اختبار وتأكيد الطلب في السوق قبل شراء كميات كبيرة. يتطلب التحقق الصارم من الموردين والشحن السريع لحماية تقييمات متجرك."
                  : "Zero initial inventory risk. Validation of demand precedes capital allocation. Requires rigorous supplier vetting and fast logistics partners to protect merchant reputation."}
              </p>
              <Link to="/dropshipping/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                <span>{isAr ? "استكشف ركيزة الدروب شيبينغ" : "Explore Dropshipping Pillar"}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {isAr ? "الدفع عند الاستلام (COD)" : "Cash on Delivery (COD)"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {isAr
                  ? "النموذج السائد في الأسواق الواعدة وسريعة النمو (المغرب العربي، الخليج، أمريكا اللاتينية). نسب تحويل شراء مرتفعة جداً، تتطلب إدارة صارمة للتوصيل ومحاربة الروتور (RTO)."
                  : "Dominant in emerging and high-growth markets (MENA, GCC, LatAm, Eastern Europe). Massive conversion rates offset by delivery and return-to-origin (RTO) friction."}
              </p>
              <Link to="/cash-on-delivery/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                <span>{isAr ? "استكشف عمليات الـ COD" : "Explore COD Operations"}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Mathematical Unit Economics */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-amber-500" />
            <span>{isAr ? "2. اقتصاديات الوحدة: إطار عمل هامش المساهمة الحقيقي" : "2. E-Commerce Unit Economics: The Contribution Margin Framework"}</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "حجم المبيعات الإجمالي (Revenue) رقم خادع؛ وصافي هامش المساهمة الحقيقي (Net Contribution Margin) هو الحقيقة. الكثير من المتاجر ترفع ميزانياتها الإعلانية لتكتشف في النهاية أنها تعمل بخسارة بعد خصم الروتور، الشحن، والتعبئة."
              : "Revenue is a vanity metric; net contribution margin is reality. Too many stores scale top-line ad spend only to discover they are operating at a net loss once returns, payment gateway cuts, and packaging are calculated."}
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
            <table className="w-full text-right ltr:text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <tr>
                  <th className="p-4">{isAr ? "المؤشر المالي" : "Financial Metric"}</th>
                  <th className="p-4">{isAr ? "المعادلة الرياضية" : "Formula"}</th>
                  <th className="p-4">{isAr ? "الهدف الصحي" : "Healthy Target"}</th>
                  <th className="p-4">{isAr ? "الهدف الاستراتيجي" : "Strategic Purpose"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">
                    {isAr ? "هامش الربح الإجمالي (Gross Margin)" : "Gross Margin"}
                  </td>
                  <td className="p-4" dir="ltr">(Revenue - COGS) / Revenue</td>
                  <td className="p-4">60% – 75%</td>
                  <td className="p-4">
                    {isAr ? "يضمن وجود مساحة كافية لتغطية تكلفة الإعلانات والشحن." : "Leaves sufficient room for customer acquisition costs."}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">
                    {isAr ? "نقطة التعادل الإعلانية (Break-Even ROAS)" : "Break-Even ROAS"}
                  </td>
                  <td className="p-4" dir="ltr">1 / Gross Margin %</td>
                  <td className="p-4">1.35x – 1.65x</td>
                  <td className="p-4">
                    {isAr ? "يحدد الحد الأدنى للعائد الذي إن انخفضت تحته الحملة أحرقت أموالك." : "Defines the floor below which advertising destroys capital."}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">
                    {isAr ? "هامش المساهمة 1 (Contribution Margin 1)" : "Contribution Margin 1"}
                  </td>
                  <td className="p-4" dir="ltr">Revenue - COGS - Shipping - Pick/Pack</td>
                  <td className="p-4">45% – 55%</td>
                  <td className="p-4">
                    {isAr ? "الربح الحقيقي المتبقي قبل صرف أي دولار على الإعلانات الرقمية." : "Real gross profit before digital media buying expenditure."}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">
                    {isAr ? "صافي هامش المساهمة النهائي (Net Margin)" : "Net Contribution Margin"}
                  </td>
                  <td className="p-4" dir="ltr">CM1 - Ad Spend - Gateway / RTO Loss</td>
                  <td className="p-4">15% – 25%</td>
                  <td className="p-4">
                    {isAr ? "السيولة الحرة الصافية لتغطية الفريق والمصاريف وإعادة الاستثمار." : "Free cash available to cover overhead, team, and reinvestment."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-amber-900 dark:text-amber-200">
                {isAr ? "هل تريد حساب الأرقام الدقيقة لمتجرك؟" : "Want to model your exact store financials?"}
              </h3>
              <p className="text-xs text-amber-800 dark:text-amber-300">
                {isAr ? "استخدم حاسبات اقتصاديات الوحدة المجانية لحساب نقطة التعادل ونسب التوصيل." : "Use our free unit economics calculators to calculate break-even targets."}
              </p>
            </div>
            <Link 
              to="/tools/" 
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg shadow-sm transition-all"
            >
              {isAr ? "دخول قسم الحاسبات الذكية" : "Access Calculators"}
            </Link>
          </div>
        </section>

        {/* Section 3: The Scaling Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-amber-500" />
            <span>{isAr ? "3. الأركان الأربعة لبنية المتاجر القابلة للتوسع" : "3. The Four Pillars of Scalable Store Infrastructure"}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {isAr ? "بنية المتجر وسرعة التحويل (CRO)" : "Store Tech & Conversion Velocity"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "تصميم متجاوب سريع مخصص للهواتف، صفحات هبوط خفيفة تُحمل في أقل من 1.5 ثانية، ونموذج شراء بنقرة واحدة يلغي كل تعقيدات التسجيل."
                  : "Clean mobile-first navigation, single-page checkouts, under-1.5s load times, and structured product page persuasion architectures that reduce cognitive friction."}
              </p>
              <Link to="/conversion-optimization/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                <span>{isAr ? "قراءة ركيزة تحسين نسبة التحويل" : "Read Conversion Optimization Pillar"}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {isAr ? "محرك شراء الترافيك والإعلانات الممولة" : "Performance Media Buying Engine"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "بناء خط ترافيك مستمر ومربح عبر تيك توك وفيسبوك/إنستغرام من خلال اختبار زوايا الفيديو (UGC Testing)، والاستهداف الخوارزمي المتقدم."
                  : "Building predictable traffic pipelines across Meta Ads and TikTok Spark Ads using rapid creative testing, high-volume UGC angles, and scalable budget optimization."}
              </p>
              <Link to="/paid-media/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                <span>{isAr ? "قراءة ركيزة الإعلانات الممولة" : "Read Paid Media Pillar"}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {isAr ? "سلاسل التوريد واللوجستيك والتخزين" : "Supply Chain & 3PL Logistics"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "الانتقال من الشحن الفردي البطيء إلى مستودعات الشحن السريع، وتجميع الشحنات مع وكلاء خاصين ومراقبة جودة المنتج قبل إرساله."
                  : "Moving from standard manufacturer shipping to bonded warehouses, private agent consolidation, automated warehouse management (WMS), and strict quality control."}
              </p>
              <Link to="/dropshipping/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                <span>{isAr ? "قراءة دليل التوريد وسلاسل الإمداد" : "Read Supply Chain & Sourcing Guide"}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {isAr ? "إعادة استهداف العملاء ورفع قيمة السلة (LTV)" : "Customer Retention & LTV Expansion"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "رسائل واتساب وSMS أوتوماتيكية لاسترجاع السلات المتروكة، عروض الترقية (Upsell / Bundles)، وبناء ولاء العميل لتكرار الشراء بدون تكلفة إعلانات إضافية."
                  : "Automated SMS abandoned checkout flows, segmented email win-backs, post-purchase replenishment funnels, and tiered VIP loyalty initiatives."}
              </p>
              <Link to="/guides/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                <span>{isAr ? "تصفح أدلة زيادة المبيعات" : "Browse Retention Guides"}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Strategic Consulting CTA */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {isAr ? "المواكبة والاستشارات التطبيقية مع AirNest" : "Advisory & Implementation with AirNest"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {isAr 
                ? "هل تحتاج لمرافقة شخصية لتكبير وتوسيع متجرك الإلكتروني؟" 
                : "Need Hands-On Strategic Guidance to Scale Your Store?"}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {isAr
                ? "نعمل مباشرة مع أصحاب المتاجر والمشاريع لمراجعة وتدقيق الحسابات الإعلانية، خفض نسبة الروتور، رفع نسبة التوصيل فوق 80%، وبناء علامة تجارية رابحة ومستدامة."
                : "We work with qualified e-commerce operators to optimize paid media accounts, restructure supply chains, reduce delivery friction, and build enduring brands."}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link 
              to="/consulting/" 
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>{isAr ? "استكشف برامج الاستشارات" : "Explore Consulting Programs"}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
            <Link 
              to="/guides/" 
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-600 text-white font-bold text-sm transition-all"
            >
              {isAr ? "تصفح قاعدة المعرفة" : "Browse Knowledge Base"}
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
