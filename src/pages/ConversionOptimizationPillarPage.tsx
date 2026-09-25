import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Zap, 
  ShoppingCart, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Gauge, 
  SplitSquareVertical 
} from 'lucide-react';
import { Language } from '../types';

interface ConversionOptimizationPillarPageProps {
  currentLang?: Language;
}

export const ConversionOptimizationPillarPage: React.FC<ConversionOptimizationPillarPageProps> = ({ currentLang = 'ar' }) => {
  const isAr = currentLang !== 'en';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title={isAr ? "تحسين معدل التحويل (CRO) وهندسة صفحات البيع للمتاجر | AirNest" : "E-Commerce Conversion Rate Optimization (CRO) & Funnel Engineering | AirNest"}
        description={isAr ? "إطار عمل عملي لمضاعفة نسبة تحويل المتجر: بنية صفحات الهاتف، تقليل خطوات الشراء، عروض زيادة قيمة السلة (AOV)، وتسريع تحميل الموقع." : "Actionable framework for doubling e-commerce store conversion rates: mobile UX architecture, friction-free checkout funnels, AOV bundling, and speed optimization."}
        canonicalPath="/conversion-optimization/"
        breadcrumbs={[{ name: isAr ? 'تحسين نسبة التحويل (CRO)' : 'Conversion Optimization', item: '/conversion-optimization/' }]}
      />

      <Breadcrumbs items={[{ name: isAr ? 'تحسين نسبة التحويل (CRO)' : 'Conversion Optimization', item: '/conversion-optimization/' }]} currentLang={currentLang} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{isAr ? "ركيزة أداء المتجر والمبيعات" : "Store Performance Pillar"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            {isAr 
              ? "تحسين نسبة التحويل (CRO) وهندسة مسارات الشراء للمتاجر" 
              : "E-Commerce Conversion Rate Optimization (CRO) & Funnel Engineering"}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {isAr
              ? "رفع نسبة تحويل متجرك من 1.5% إلى 3.0% يعني حرفياً مضاعفة مبيعاتك وخفض تكلفة اكتساب العميل إلى النصف دون إنفاق دولار واحد إضافي على الإعلانات. إليك كيف يتم تصميم مسارات الشراء الفعالة والمحكمة."
              : "Increasing your store's conversion rate from 1.5% to 3.0% effectively cuts your customer acquisition cost in half without spending an extra dollar on advertising. Here is how high-performance direct-to-consumer funnels are engineered."}
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Anatomy of a High-Converting Product Page */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <SplitSquareVertical className="w-6 h-6 text-amber-500" />
            <span>{isAr ? "1. تشريح صفحة المنتج عالية الإقناع والتحويل" : "1. The Anatomy of a High-Converting Product Page"}</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "أكثر من 85% من زوار تيك توك وميتا يتصفحون عبر الهواتف الذكية. يجب أن تصمم صفحة المنتج عمودياً بما يناسب حركة الإبهام مع وضوح بصري تام:"
              : "Over 85% of paid traffic from TikTok and Meta arrives on mobile devices. Product pages must be designed vertically with thumb-friendly layout hierarchies:"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">
                {isAr ? "أعلى الصفحة (Above the Fold)" : "Above the Fold"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "قيمة فورية وإثبات اجتماعي حاسم" : "Clear Value & Social Validation"}
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isAr ? "عنوان رئيسي يعكس مباشرة النتيجة والحل الذي شاهده العميل في إعلان الفيديو." : "Benefit-driven H1 headline that matches the ad creative hook."}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isAr ? "معرض صور عالي الجودة مع صور متحركة توضح طريقة الاستخدام الواقعية." : "High-resolution visual carousel with real lifestyle demonstration GIFs."}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isAr ? "زر شراء أو إضافة للسلة مثبت بأسفل الشاشة (Sticky Button) يرافقه خلال النزول." : "Sticky 'Add to Cart' or 'Buy Now' CTA bar visible during full scroll."}</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">
                {isAr ? "أسفل الصفحة (Below the Fold)" : "Below the Fold"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "إزالة الشكوك والاعتراضات وإثبات الجودة" : "Objection Elimination & Proof"}
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isAr ? "جدول مقارنة شفاف يوضح تفوق منتجك على المنتجات المقلدة الرخيصة." : "Comparison table showing your product vs. cheap alternatives."}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isAr ? "ضمانات واضحة: مدة الاسترجاع، سرعة الشحن، وخدمة ما بعد البيع عبر الواتساب." : "Explicit guarantees: return timeframe, shipping speed, customer service."}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{isAr ? "قسم الأسئلة الشائعة القابلة للفتح للإجابة عن المقاسات وطرق الدفع والتشغيل." : "Expandable accordion FAQs answering sizing, usage, and safety concerns."}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: AOV Expansion */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-amber-500" />
            <span>{isAr ? "2. استراتيجيات رفع متوسط قيمة السلة (AOV)" : "2. Average Order Value (AOV) Boosters"}</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "المتجر الذي يستطيع دفع تكلفة أعلى لاكتساب العميل هو الذي يتصدر السوق دائماً. كلما رفعت متوسط قيمة الطلب، كلما منحت نفسك أماناً ضد ارتفاع أسعار الإعلانات:"
              : "The brand that can afford to spend the most to acquire a customer wins. By increasing your Average Order Value, you create breathing room for rising ad costs on Meta and TikTok."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isAr ? "باقات الكميات المتدرجة (Bundles)" : "Quantity Tier Bundles"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "'اشتري 1 بـ 39$، اشتري 2 واحصل على الثالث مجاناً بـ 69$ (الأكثر طلباً)'. تحديد الخيار الأوسط كخيار افتراضي يرفع متوسط الطلب بنسبة 30% فما فوق."
                  : "'Buy 1 for $39, Buy 2 Get 1 Free for $69 (Most Popular), Buy 3 for $89'. Default the pre-selected option to the middle tier to lift AOV by 25–40%."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isAr ? "عروض إضافية داخل السلة (Order Bumps)" : "Cart In-Line Bumps"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "خيارات سريعة بنقرة واحدة داخل السلة أو الفورم: شحن سريع VIP، ضمان استبدال مجاني، أو إكسسوار مكمل بسعر رمزي (5$ إلى 15$)."
                  : "One-click add-ons directly inside the slide-out cart: priority express shipping, lifetime replacement insurance, or complimentary accessories ($5–$15 items)."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isAr ? "عروض ما بعد الطلب (Post-Purchase Upsells)" : "Post-Purchase 1-Click Upsells"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "عرض قطعة إضافية مكملة بخصم 40% مباشرة في صفحة الشكر بعد إتمام الطلب الأول بدون الحاجة لإعادة كتابة تفاصيل الشحن."
                  : "Offer an additional complementary unit at 40% off on the thank-you screen before order confirmation. Zero friction, zero re-entry of payment details."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Performance & Load Velocity */}
        <section className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <div className="flex items-center gap-3 text-amber-400 font-bold">
            <Gauge className="w-5 h-5" />
            <span>{isAr ? "سرعة التحميل وتجربة الهواتف الذكية" : "Mobile Speed Optimization"}</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {isAr 
              ? "كل 100 ميلي ثانية تأخير في تحميل المتجر تكلفك 7% خسارة في المبيعات" 
              : "Every 100ms of Page Latency Costs 7% in Conversions"}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {isAr
              ? "القوالب الثقيلة التي تحوي عشرات التطبيقات غير المفيدة تدمر تجربة المستخدم على الهاتف. قم بضغط جميع الصور إلى صيغة WebP الخفيفة، وحذف الأكواد البرمجية الزائدة، واحرص على تحميل الصفحة الأولى في أقل من 1.5 ثانية."
              : "Bloated themes with 20+ conflicting Shopify apps kill mobile conversion rates. Compress all visual assets to modern WebP formats, defer non-critical JavaScript, and eliminate external widget scripts that block primary viewport rendering."}
          </p>
        </section>

        {/* Section 4: Cross-Pillar Interlinks */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {isAr ? "ربط تحسين التحويل مع الترافيك والشحن" : "Connect Conversion Strategy with Traffic & Fulfillment"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  ? "تعلم كتابة نصوص إعلانية تتوافق بسلاسة مع زوايا صفحة المنتج عالية التحويل."
                  : "Learn how to write ad copy that seamlessly aligns with your high-converting product page angles."}
              </p>
            </Link>

            <Link 
              to="/cash-on-delivery/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>{isAr ? "فورم الدفع عند الاستلام (COD) السريع" : "Cash On Delivery (COD) Checkout UX"}</span>
                <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {isAr
                  ? "تصميم نماذج طلب نظيفة وبسيطة مخصصة لأسواق الدفع عند الاستلام لزيادة المبيعات."
                  : "Design clean, mobile-first lead capture forms tailored specifically for Cash on Delivery markets."}
              </p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
