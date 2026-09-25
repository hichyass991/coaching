import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Briefcase, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';
import { Language } from '../types';

interface ConsultingPageProps {
  onOpenBooking: () => void;
  currentLang?: Language;
}

export const ConsultingPage: React.FC<ConsultingPageProps> = ({ onOpenBooking, currentLang = 'ar' }) => {
  const isAr = currentLang !== 'en';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const handleOpenWhatsApp = () => {
    const text = isAr 
      ? 'مرحباً AirNest، أود الاستفسار عن برنامج الاستشارات والمواكبة التطبيقية للمتاجر الإلكترونية.'
      : 'Hello AirNest, I am interested in your e-commerce advisory and consulting program. Let us discuss details.';
    window.open(`https://wa.me/212655845060?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title={isAr ? "الاستشارات الاستراتيجية والمواكبة الفردية للمتاجر الإلكترونية | AirNest" : "Strategic E-Commerce Consulting & 1-on-1 Operational Advisory | AirNest"}
        description={isAr ? "استشارات فردية وتطبيقية مباشرة لأصحاب المتاجر: تدقيق الحسابات الإعلانية، حل مشاكل سلاسل الإمداد، ورفع نسبة توصيل الـ COD فوق 80%." : "Private strategic advisory and operational mentorship for scaling e-commerce brands: paid media audits, supply chain streamlining, and high-delivery COD operations."}
        canonicalPath="/consulting/"
        breadcrumbs={[{ name: isAr ? 'الاستشارات والمواكبة' : 'Consulting', item: '/consulting/' }]}
      />

      <Breadcrumbs items={[{ name: isAr ? 'الاستشارات والمواكبة' : 'Consulting', item: '/consulting/' }]} currentLang={currentLang} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{isAr ? "خدمات الاستشارات والمرافقة الميدانية" : "Advisory & Mentorship Services"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            {isAr 
              ? "الاستشارات الاستراتيجية والمواكبة الفردية للتجارة الإلكترونية" 
              : "Strategic E-Commerce Consulting & 1-on-1 Operational Advisory"}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {isAr
              ? "مواكبة عملية ومباشرة لأصحاب المتاجر والمشاريع المستعدين للتوسع ومضاعفة الأرباح. نقوم بالدخول معك ومراجعة حساباتك الإعلانية، وإعادة ضبط اقتصاديات الوحدة وهوامش الربح، وتحسين اللوجستيك وتدريب فريق عملك."
              : "Direct, practitioner-led advisory for store owners and operators ready to scale. We audit your ad accounts, rebuild broken unit economics, optimize fulfillment, and train your internal team."}
          </p>
          <div className="pt-6 flex flex-wrap gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{isAr ? "طلب استشارة استراتيجية" : "Apply for Strategy Call"}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
            <button
              onClick={handleOpenWhatsApp}
              className="px-6 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isAr ? "تواصل مباشر عبر واتساب" : "Direct WhatsApp Inquiry"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Scope of Advisory */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {isAr ? "ما الذي نقوم بحله وتطويره داخل البرنامج الاستشاري؟" : "What We Address Inside the Advisory Engagement"}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "على عكس الدورات التدريبية المسجلة مسبقاً، استشارتنا هي تدخل تقني وتطبيقي مباشر داخل أنظمتك وحساباتك الحية:"
              : "Unlike generic video courses, our consulting is a hands-on technical intervention inside your live systems:"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "تدقيق الإعلانات الممولة واختبار الفيديوهات (Creative Testing)" : "Paid Media & Creative Testing Audit"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "فحص شامل لحساباتك الإعلانية على ميتا وتيك توك. إيقاف الإعلانات المستنزفة للميزانية، وإرساء استراتيجيات الاستهداف العريض وصناعة فيديوهات UGC عالية الإقناع."
                  : "Full diagnostic of your Meta and TikTok ad accounts. Identifying wasted spend, establishing broad targeting frameworks, and designing scalable UGC creative briefs."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "اللوجستيك، التخزين وعمليات الـ COD" : "Fulfillment, Logistics & COD Operations"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "إعداد سكريبت احترافي لمركز التأكيد الهاتفي، وإطلاق مسارات آلية لمعالجة الطرود المتعثرة (NDR)، وخفض نسبة الروتور إلى أقل من 18%."
                  : "Setting up high-performance call center confirmation scripts, establishing automated Non-Delivery Recovery (NDR) workflows, and reducing return rates (RTO) below 18%."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "تجربة متجر مريحة ومضاعفة التحويل (CRO)" : "Store UX & Conversion Rate Optimization"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "إلغاء خطوات الشراء المعقدة على الهاتف، تنظيم التسلسل البصري لصفحة المنتج، وتفعيل عروض الشراء المتعدد وتسريع المتجر."
                  : "Eliminating mobile checkout friction, streamlining product page visual hierarchies, implementing tiered bundle offers, and optimizing speed performance."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "اقتصاديات الوحدة وإدارة السيولة النقدية" : "Unit Economics & Cash Flow Modeling"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "إعادة هيكلة هوامش المساهمة الصافية، والتفاوض مع الموردين والمصانع، وتحديد نقطة التعادل الإعلاني بدقة لحماية سيولة العمل."
                  : "Rebuilding contribution margin models, negotiating supplier pricing, and implementing strict break-even ROAS rules to protect business liquidity."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Prerequisites */}
        <section className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
            <h2 className="text-xl">{isAr ? "شروط قبول طلب الاستشارة" : "Advisory Prerequisites"}</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "لضمان تحقيق أثر تجاري وتشغيلي حقيقي، نقتصر على عدد محدد من المتاجر النشطة التي تتوفر على:"
              : "To ensure genuine operational impact, consulting slots are limited to active businesses with:"}
          </p>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isAr ? "متجر إلكتروني قائم يمتلك مبيعات حقيقية أو طلباً مؤكداً في السوق." : "An active e-commerce store with validated product-market fit or existing order volume."}</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isAr ? "ميزانية إعلانات مخصصة (1,500$ شهرياً على الأقل) لاختبار الحملات وتكبيرها." : "Dedicated advertising capital (minimum $1,500/month) for empirical testing."}</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isAr ? "إمكانية إعطاء صلاحية فحص الحسابات الإعلانية وبيانات المتجر للتدقيق الفني." : "Direct access to ad accounts and store analytics for technical inspection."}</span>
            </li>
          </ul>
        </section>

        {/* Section 3: Booking Trigger */}
        <section className="text-center py-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {isAr ? "هل أنت جاهز لتوسيع وتكبير متجرك الإلكتروني؟" : "Ready to Scale Your E-Commerce Operations?"}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            {isAr
              ? "احجز جلسة استراتيجية تشخيصية أولية مع فريق AirNest. سنراجع أبرز التحديات التي تعيق نموك ونحدد خطة العمل المناسبة لمتجرك."
              : "Book an introductory diagnostic call. We review your current bottlenecks and determine whether an advisory engagement is the right strategic fit."}
          </p>
          <div className="flex justify-center">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{isAr ? "حجز موعد الاستشارة التشخيصية" : "Schedule Strategic Audit"}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </section>

      </main>
    </div>
  );
};
