import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  PackageSearch, 
  Truck, 
  ArrowRight, 
  ArrowLeft,
  Target 
} from 'lucide-react';
import { Language } from '../types';

interface DropshippingPillarPageProps {
  currentLang?: Language;
}

export const DropshippingPillarPage: React.FC<DropshippingPillarPageProps> = ({ currentLang = 'ar' }) => {
  const isAr = currentLang !== 'en';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title={isAr ? "عمليات الدروب شيبينغ: فحص المنتجات، اختيار الموردين، والتوصيل السريع | AirNest" : "Dropshipping Operations: Product Validation, Supplier Vetting & Global Fulfillment | AirNest"}
        description={isAr ? "الدليل الإجرائي الميداني لبناء متجر دروب شيبينغ مربح: مصفوفة فحص المنتجات الرابحة، التعاقد مع وكلاء الشحن الخاصين، وتقليص مدة التوصيل." : "The authoritative blueprint for building a resilient dropshipping operation: data-driven product validation, direct agent sourcing, logistics timelines, and brand transition."}
        canonicalPath="/dropshipping/"
        breadcrumbs={[{ name: isAr ? 'الدروب شيبينغ والتوريد' : 'Dropshipping', item: '/dropshipping/' }]}
      />

      <Breadcrumbs items={[{ name: isAr ? 'الدروب شيبينغ والتوريد' : 'Dropshipping', item: '/dropshipping/' }]} currentLang={currentLang} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <PackageSearch className="w-3.5 h-3.5" />
            <span>{isAr ? "ركيزة المعرفة التشغيلية" : "Operational Knowledge Pillar"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            {isAr 
              ? "عمليات الدروب شيبينغ: فحص المنتجات، تقييم الموردين والتوريد العالمي" 
              : "Dropshipping Operations: Product Validation, Supplier Vetting & Global Fulfillment"}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {isAr
              ? "الدروب شيبينغ الحديث ليس خطة ثراء وهمية، بل هو نموذج سلسلة إمداد مرن ومتقدم صُمم لاختبار طلب المستهلكين الحقيقي قبل استثمار وتجميد رأس المال في التصنيع بكميات ضخمة. إليك الطريقة التشغيلية الصحيحة المعتمدة لدى AirNest."
              : "Modern dropshipping is not a 'get rich quick' scheme; it is an agile supply chain model designed to test consumer demand before committing working capital to bulk manufacturing. Here is how professional operators structure it."}
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: The Operator's Validation Framework */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Target className="w-6 h-6 text-amber-500" />
            <span>{isAr ? "1. مصفوفة فحص وتأكيد المنتجات (5 معايير حاسمة)" : "1. The 5-Point Product Validation Matrix"}</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "المبتدئون يختارون المنتجات بالعواطف والمشاعر أو من خلال أدوات التجسس السطحية. أما المشترون المحترفون للترافيك ومسؤولو المتاجر فيفحصون المنتجات وفق قيود رياضية واقتصادية صارمة:"
              : "Amateur dropshippers pick products based on personal emotion or generic spy tool vanity metrics. Professional media buyers evaluate products based on strict physical and economic constraints:"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                {isAr ? "المعيار 01" : "CRITERION 01"}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isAr ? "مضاعف الهامش (>3x تكلفة الشراء)" : "Margin Multiplier (>3x COGS)"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "إذا كانت تكلفة المنتج واصلة للمستودع 10 دولارات، يجب أن يكون سعر البيع للجمهور لا يقل عن 35$ إلى 45$ لتغطية تكلفة الإعلانات وبوابات الدفع وهامش الربح الصافي."
                  : "If the landed product cost is $10, retail pricing must support at least $35–$45 to accommodate ad acquisition costs, payment processor fees, and operational reserves."}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                {isAr ? "المعيار 02" : "CRITERION 02"}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isAr ? "حل مشكلة واضحة وفورية" : "Instant Problem Solving"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "يجب أن يحل المنتج مشكلة مؤلمة، يوفر الوقت والجهد، أو يمنح راحة فورية يمكن للعميل إدراكها بوضوح في أول 3 ثوانٍ من مشاهدة إعلان الفيديو."
                  : "Products must visibly alleviate an urgent pain point, save time, or trigger strong emotional relief within the first 3 seconds of video ad exposure."}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                {isAr ? "المعيار 03" : "CRITERION 03"}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isAr ? "خفة الوزن ومقاومة الكسر" : "Low Fragility & Weight"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "المنتجات التي يقل وزنها عن 500 غرام تخفض تكلفة الشحن الجوي الحجمي وتتحمل سوء المعاملة من شركات الشحن، مما يقلل حالات التلف والإرجاع."
                  : "Items weighing under 500g minimize volumetric air freight charges and resist rough courier handling, reducing damaged transit returns."}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                {isAr ? "المعيار 04" : "CRITERION 04"}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isAr ? "صعوبة إيجاده في المتاجر المحلية" : "Difficult Offline Availability"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "إذا كان العميل يستطيع شراء نفس المنتج بسهولة من أقرب بقالة أو سوبرماركت، فإن نسبة التحويل على الإنترنت تنخفض بنسبة تزيد عن 70%."
                  : "If a consumer can easily buy the identical product at their local convenience store or supermarket, online conversion rates drop sharply."}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                {isAr ? "المعيار 05" : "CRITERION 05"}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isAr ? "زوايا فيديو مرئية مبهرة (UGC)" : "Demonstrable Video Angles"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "يجب أن يسمح المنتج بصناعة ما لا يقل عن 5 سيناريوهات وزوايا فيديو مختلفة (قبل وبعد، مقارنة صادمة، تجربة الاستخدام، اختبار المتانة)."
                  : "The product must allow for at least 5 distinct visual creative hooks (before/after, contrast demonstration, unboxing reaction, extreme durability)."}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-amber-200 dark:border-amber-800/60 bg-amber-500/5 dark:bg-amber-950/20 space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                  {isAr ? "أداة عملية" : "ACTION TOOL"}
                </span>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {isAr ? "حساب هوامش ربح منتجك" : "Validate Your Unit Margins"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? "احسب التكلفة الإجمالية، الهدف الإعلاني المطلوب، وصافي الربح المتوقع قبل حرق أي ميزانية إعلانية."
                    : "Calculate landed costs, required ad targets, and net profit before spending ad budget."}
                </p>
              </div>
              <Link to="/tools/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline pt-2">
                <span>{isAr ? "فتح حاسبة الهوامش" : "Open Margins Tool"}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Supply Chain & Vetting */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Truck className="w-6 h-6 text-amber-500" />
            <span>{isAr ? "2. اختيار الموردين: تجاوز الأسواق العامة والوسطاء" : "2. Supplier Vetting: Moving Beyond Basic Marketplaces"}</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "الاعتماد على بائعين مجهولين في المنصات المفتوحة يسبب بطء الشحن (20 إلى 40 يوماً)، وطلبات استرجاع متكررة، وحظر الحسابات الإعلانية. الدروب شيبينغ الاحترافي يتطلب التدرج في سلاسل الإمداد:"
              : "Relying solely on anonymous marketplace vendors leads to unpredictable shipping times (20–40 days), high chargeback rates, and ad account bans. Sustainable dropshipping requires a tiered supplier progression:"}
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {isAr ? "المرحلة 1: مرحلة التأكيد والاختبار (1 إلى 20 طلب/يوم)" : "Tier 1: Validation Phase (1–20 Orders/Day)"}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {isAr ? "التوريد عبر منصات سريعة وموردين معتمدين" : "Direct AliExpress / CJ Dropshipping Sourcing"}
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300">
                  {isAr ? "مدة الشحن: 8–14 يوم" : "Lead Time: 8–14 Days"}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {isAr
                  ? "مقبولة فقط في مرحلة اختبار الفكرة والتأكد من قبول السوق للمنتج. اختر فقط موردين بتقييم إيجابي أعلى من 95% وخطوط شحن سريعة مباشرة."
                  : "Acceptable only during the initial proof-of-concept phase. Ensure vendors have minimum 95% positive feedback, 3+ years active business age, and support direct line tracking (YunExpress, 4PX)."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    {isAr ? "المرحلة 2: مرحلة التوسيع والتكبير (20 إلى 150 طلب/يوم)" : "Tier 2: Scaling Phase (20–150 Orders/Day)"}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {isAr ? "وكلاء توريد خاصون (Private Sourcing Agents) مع ربط ERP" : "Dedicated Private Sourcing Agents with Dedicated ERP"}
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 font-semibold border border-amber-500/20">
                  {isAr ? "مدة الشحن: 5–9 أيام" : "Lead Time: 5–9 Days"}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {isAr
                  ? "ربط أوتوماتيكي مع متجرك عبر أنظمة ERP. يتفاوض الوكيل الخاص مباشرة مع المصانع الصينية بسعر الجملة، ويفحص الجودة قطعة بقطعة، ويضيف بطاقات شكر مخصصة باسم علامتك."
                  : "Direct integration with your Shopify store via ERP (Dianxiaomi, ERP321). Sourcing agents negotiate directly with 1688 factories in Yiwu/Shenzhen, perform quality control inspections, and provide custom branded thank-you cards."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {isAr ? "المرحلة 3: بناء أصول مستقرة وعلامة تجارية (+150 طلب/يوم)" : "Tier 3: Asset Building (150+ Orders/Day)"}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {isAr ? "التخزين المحلي عبر مستودعات 3PL وتغليف خاص بعلامتك" : "Domestic 3PL Fulfillment & Custom Branded Packaging"}
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                  {isAr ? "مدة الشحن: 1–3 أيام" : "Lead Time: 1–3 Days"}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {isAr
                  ? "شحن كميات تجارية بحراً أو جواً مباشرة إلى مستودعات الشحن في بلدك المستهدف (المغرب، الخليج، أوروبا، أمريكا). التوصيل السريع خلال 24 إلى 48 ساعة يحول المشتري العابر إلى عميل وفيّ دائم."
                  : "Bulk ocean or air freight directly into fulfillment centers located in your primary target country (e.g., US, UK, EU, UAE, or Morocco). Immediate delivery turns one-off buyers into repeat customers."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Cross-Cluster Internal Linking Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {isAr ? "أقسام تشغيلية مرتبطة" : "Related Operational Clusters"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/paid-media/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>{isAr ? "استراتيجيات الإعلانات الممولة" : "Paid Media Strategy"}</span>
                <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {isAr
                  ? "توسيع مبيعات المنتجات التي تم تأكيدها عبر إعلانات تيك توك وميتا بزوايا فيديو عالية التحويل."
                  : "Scale your validated dropshipping products with high-converting TikTok UGC and Meta Ads funnels."}
              </p>
            </Link>

            <Link 
              to="/conversion-optimization/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>{isAr ? "تحسين معدل التحويل (CRO)" : "Conversion Rate (CRO)"}</span>
                <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {isAr
                  ? "تحويل الزوار إلى مشترين فعليين عبر صفحات هبوط سريعة وبدون تعقيدات في مرحلة إتمام الطلب."
                  : "Turn traffic into paying customers with optimized product landing pages, speed fixes, and trust badges."}
              </p>
            </Link>

            <Link 
              to="/cash-on-delivery/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>{isAr ? "الدفع عند الاستلام (COD)" : "Cash On Delivery (COD)"}</span>
                <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {isAr
                  ? "تعلم أسرار تطبيق نموذج الـ COD بنجاح في المغرب والخليج والأسواق سريعة النمو."
                  : "Learn how to deploy dropshipping in high-growth COD markets like the GCC, Morocco, and emerging regions."}
              </p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
