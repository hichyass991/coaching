import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Flame, 
  Video, 
  BarChart2, 
  Layers, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';
import { Language } from '../types';

interface PaidMediaPillarPageProps {
  currentLang?: Language;
}

export const PaidMediaPillarPage: React.FC<PaidMediaPillarPageProps> = ({ currentLang = 'ar' }) => {
  const isAr = currentLang !== 'en';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title={isAr ? "الإعلانات الممولة والترافيك: إعلانات تيك توك، فيسبوك ادز ومضاعفة ROAS | AirNest" : "Paid Media Performance: Meta Ads, TikTok Spark Ads & ROAS Frameworks | AirNest"}
        description={isAr ? "دليل شراء الإعلانات والترافيك للمتاجر الإلكترونية: صناعة فيديوهات UGC الإعلانية، اختبار الزوايا، استهداف خوارزمي واسع، والحفاظ على عائد إعلاني مربح." : "The media buyer's blueprint for scaling e-commerce ad spend: rapid creative testing, high-converting UGC angles, broad algorithmic targeting, and ROAS preservation."}
        canonicalPath="/paid-media/"
        breadcrumbs={[{ name: isAr ? 'الإعلانات الممولة' : 'Paid Media', item: '/paid-media/' }]}
      />

      <Breadcrumbs items={[{ name: isAr ? 'الإعلانات الممولة' : 'Paid Media', item: '/paid-media/' }]} currentLang={currentLang} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>{isAr ? "ركيزة الترافيك والاستحواذ على العملاء" : "Traffic & Acquisition Pillar"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            {isAr 
              ? "الإعلانات الممولة: إعلانات ميتا (فيسبوك)، تيك توك سبارك ادز وضبط ROAS" 
              : "Paid Media Performance: Meta Ads, TikTok Spark Ads & ROAS Frameworks"}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {isAr
              ? "في العصر الإعلاني الحديث، الفيديو الإبداعي هو الاستهداف الحقيقي (Creative is the Targeting). تعلم كيف تبني نظام اختبار سريع على تيك توك وفيسبوك لتخطي حرق الإعلانات، ومضاعفة ميزانياتك مع ضمان هوامش ربح صافية حقيقية."
              : "In modern media buying, creative is your targeting. Learn how to construct rapid testing engines on TikTok and Meta, escape ad fatigue, and scale daily budgets while maintaining profitable contribution margins."}
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: The Creative Testing Machine */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Video className="w-6 h-6 text-amber-500" />
            <span>{isAr ? "1. نموذج هندسة الفيديو الإعلاني الثلاثي: (Hook - Hold - Pitch)" : "1. The 'Hook-Hold-Pitch' Creative Engineering Model"}</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "تقوم خوارزميات ميتا وتيك توك الذكية بتوزيع وتوجيه إعلانك بناءً على تفاعل المشاهدين. إذا فشل إعلانك في إيقاف تمرير الشاشة (Stop the Scroll) في أول 2.5 ثانية، فإن كل استهدافك وصفحة متجرك تصبح بلا فائدة."
              : "Machine learning algorithms on Meta and TikTok optimize delivery based on user engagement signals. If your ad creative fails to stop the scroll in the first 2.5 seconds, all downstream targeting and funnels become irrelevant."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                {isAr ? "المرحلة 01 (0 إلى 3 ثوانٍ)" : "STAGE 01 (0 – 3s)"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "كسر النمط والخطاف (Hook)" : "The Pattern Interrupt (Hook)"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "الهدف: تحقيق نسبة مشاهدة أول 3 ثوانٍ (Hook Rate) تتجاوز 30%. التقنيات تشمل حركة بصرية مفاجئة، مقارنة صادمة، أو سؤالاً مثيراً يجبر العقل على التوقف والمتابعة."
                  : "Objective: Achieve a 3-second hook rate >30%. Techniques include rapid physical actions, counter-intuitive visual demonstrations, or controversial questions that force cognitive attention."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                {isAr ? "المرحلة 02 (3 إلى 12 ثانية)" : "STAGE 02 (3 – 12s)"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "توضيح المشكلة والحل (Hold)" : "Agitation & Mechanism (Hold)"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "الهدف: الحفاظ على متوسط وقت مشاهدة يتجاوز 6 ثوانٍ. شرح سبب فشل الحلول التقليدية، وإظهار كيف يعمل منتجك بطريقة فريدة ومبهرة لحل المشكلة جذرياً."
                  : "Objective: Achieve an average watch time >6 seconds. Reveal why conventional solutions fail, explain the unique product mechanism, and demonstrate visceral transformation."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                {isAr ? "المرحلة 03 (12 إلى 25 ثانية)" : "STAGE 03 (12 – 25s)"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "العرض والدعوة للشراء (Pitch & CTA)" : "Offer & Direct CTA (Pitch)"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "الهدف: نسبة نقر للشراء (CTR) تتجاوز 1.8%. تقديم عرض مغري (توصيل مجاني، تخفيض عند شراء قطعتين، الدفع عند الاستلام) مع توجيه مباشر وصريح للضغط والطلب الآن."
                  : "Objective: Outbound click-through rate (CTR) >1.8%. Introduce a clear price incentive, bundle promotion, or risk-free guarantee paired with a direct call to action."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Platform Comparison */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Layers className="w-6 h-6 text-amber-500" />
            <span>{isAr ? "2. مقارنة المنصات الإعلانية: تيك توك ادز مقابل ميتا ادز" : "2. Platform Media Buying Comparison: TikTok vs. Meta Ads"}</span>
          </h2>
          
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
            <table className="w-full text-right ltr:text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <tr>
                  <th className="p-4">{isAr ? "المعيار" : "Dimension"}</th>
                  <th className="p-4">{isAr ? "إعلانات ميتا (فيسبوك وإنستغرام)" : "Meta Ads (Facebook & Instagram)"}</th>
                  <th className="p-4">{isAr ? "إعلانات تيك توك (TikTok Spark Ads)" : "TikTok Ads & Spark Ads"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">
                    {isAr ? "القوة الأساسية" : "Primary Strength"}
                  </td>
                  <td className="p-4">
                    {isAr
                      ? "قاعدة جماهيرية واسعة لجميع الأعمار، دقة خوارزمية عالية جداً، ومشتري مستعد لدفع سلة مشتريات أعلى (High AOV)."
                      : "Broad demographic reach, superior post-purchase attribution, consistent high-AOV purchasing intent."}
                  </td>
                  <td className="p-4">
                    {isAr
                      ? "تكلفة ظهور رخيصة جداً (Low CPMs)، انتشار فيروسي سريع، ومثالية جداً للمنتجات السريعة والمثيرة بأقل من 50 دولار."
                      : "Low CPMs, viral organic compounding via Spark Ads, exceptional performance for impulsive under-$50 impulse products."}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">
                    {isAr ? "سرعة احتراق الإعلان" : "Creative Fatigue Rate"}
                  </td>
                  <td className="p-4">
                    {isAr
                      ? "متوسطة (الإعلان الرابح يمكن أن يستمر من 3 إلى 8 أسابيع مع تعديلات طفيفة)."
                      : "Moderate (winners can run for 3–8 weeks with minor iteration)."}
                  </td>
                  <td className="p-4">
                    {isAr
                      ? "سريعة جداً (يحترق الإعلان في غضون 7 إلى 14 يوماً؛ يتطلب ضخ فيديوهات UGC جديدة باستمرار)."
                      : "Rapid (creatives fatigue in 7–14 days; requires continuous UGC testing cycles)."}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">
                    {isAr ? "الهيكلية المفضلة" : "Optimal Structure"}
                  </td>
                  <td className="p-4">
                    {isAr
                      ? "حملات Advantage+ Shopping (ASC) أو CBO باستهداف عريض (Broad) مع اختبار ديناميكي (DCT)."
                      : "Advantage+ Shopping Campaigns (ASC) or Broad CBO with dynamic creative testing (DCT)."}
                  </td>
                  <td className="p-4">
                    {isAr
                      ? "استهداف عريض، مجموعات اختبار ABO، ثم تجميع الفيديوهات الرابحة في حملة CBO بميزانية عالية."
                      : "Broad targeting, ABO testing ad groups, graduating to Campaign Budget Optimization (CBO) on winners."}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">
                    {isAr ? "الأفضل عند دمجها مع" : "Best Combined With"}
                  </td>
                  <td className="p-4">
                    <Link to="/conversion-optimization/" className="text-amber-600 dark:text-amber-400 underline">
                      {isAr ? "صفحات هبوط غنية بتجارب العملاء وثقة عالية" : "Long-form advertorials & high-trust landing pages"}
                    </Link>
                  </td>
                  <td className="p-4">
                    <Link to="/cash-on-delivery/" className="text-amber-600 dark:text-amber-400 underline">
                      {isAr ? "فورم طلب سريع بنقرة واحدة للدفع عند الاستلام" : "Fast 1-click COD forms & urgent discount timers"}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Ad Budget & ROAS Preservation */}
        <section className="p-8 rounded-3xl bg-amber-500/10 dark:bg-amber-950/20 border border-amber-500/20 space-y-4">
          <div className="flex items-center gap-3 text-amber-700 dark:text-amber-400 font-bold">
            <BarChart2 className="w-5 h-5" />
            <span>{isAr ? "قاعدة اقتصاديات الوحدة: الانضباط التام بنقطة التعادل (Break-Even ROAS)" : "Unit Economics Rule: Break-Even ROAS Discipline"}</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {isAr 
              ? "لا تقم أبداً بزيادة الميزانية الإعلانية قبل معرفة نقطة التعادل بدقة!" 
              : "Never Scale Budget Without Knowing Your Critical ROAS Floor"}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "إذا كان منتجك يكلف 12 دولار، والشحن 5 دولارات، ويباع بـ 45 دولار، فإن ربحك الإجمالي قبل الإعلانات هو 28 دولار (هامش 62.2%). نقطة التعادل الإعلانية هي 1.61x. رفع الميزانية الإعلانية عندما يكون العائد الفعلي أقل من هذا الرقم يعني خسارة فورية ومؤكدة لأموالك."
              : "If your product costs $12 to manufacture, $5 to pick and ship, and sells for $45, your gross profit before ads is $28 (62.2% margin). Your Break-Even ROAS is exactly 1.61x. Scaling spend when your blended ROAS drops below this threshold causes immediate cash burn."}
          </p>
          <div className="pt-2">
            <Link 
              to="/tools/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-all"
            >
              <span>{isAr ? "احسب نقطة التعادل لمتجرك مجاناً" : "Calculate Your Store's Break-Even ROAS"}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 4: Internal Links to Supporting Guides */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {isAr ? "موارد استراتيجية مساعدة" : "Explore Supporting Paid Media Resources"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/conversion-optimization/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>{isAr ? "تحسين صفحات الهبوط ومعدل التحويل (CRO)" : "Landing Page Optimization (CRO)"}</span>
                <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {isAr
                  ? "الترافيك الرخيص لا فائدة منه إذا كانت صفحة الهبوط تفقد الزوار. تعلم مطابقة خطاف الإعلان مع عنوان صفحة المنتج."
                  : "Cheap traffic is useless without conversion efficiency. Learn how to match ad hooks with landing page headlines."}
              </p>
            </Link>

            <Link 
              to="/consulting/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>{isAr ? "مواكبة وتدقيق الحسابات الإعلانية مع AirNest" : "Direct Media Buying Mentorship"}</span>
                <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {isAr
                  ? "احصل على تدقيق مباشر داخل حساباتك الإعلانية وتوجيه عملي خطوة بخطوة لصناعة إعلانات مربحة."
                  : "Receive hands-on ad account audits and creative guidance directly inside your business manager."}
              </p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
