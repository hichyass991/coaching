import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Banknote, 
  PhoneCall, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Globe2 
} from 'lucide-react';
import { Language } from '../types';

interface CashOnDeliveryPillarPageProps {
  currentLang?: Language;
}

export const CashOnDeliveryPillarPage: React.FC<CashOnDeliveryPillarPageProps> = ({ currentLang = 'ar' }) => {
  const isAr = currentLang !== 'en';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title={isAr ? "منظومة الدفع عند الاستلام (COD): إدارة العمليات، الشحن، ورفع نسبة التوصيل فوق 80% | AirNest" : "Cash On Delivery (COD) Ecosystems: Operations, Logistics & Delivery Optimization | AirNest"}
        description={isAr ? "الدليل المتكامل لإتقان تجارة الدفع عند الاستلام: بروتوكولات التأكيد الهاتفي، إدارة شركات الشحن، محاربة الروتور (RTO)، ودورات السيولة في المغرب والخليج." : "Master global cash on delivery (COD) operations: call center confirmation protocols, courier SLA management, return rate (RTO) reduction, and cash flow cycles across GCC, MENA, and international markets."}
        canonicalPath="/cash-on-delivery/"
        breadcrumbs={[{ name: isAr ? 'الدفع عند الاستلام (COD)' : 'Cash on Delivery', item: '/cash-on-delivery/' }]}
      />

      <Breadcrumbs items={[{ name: isAr ? 'الدفع عند الاستلام (COD)' : 'Cash on Delivery', item: '/cash-on-delivery/' }]} currentLang={currentLang} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Banknote className="w-3.5 h-3.5" />
            <span>{isAr ? "ركيزة المعرفة التشغيلية" : "Operational Knowledge Pillar"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            {isAr 
              ? "منظومة الدفع عند الاستلام (COD): العمليات، اللوجستيك، وتحقيق نسبة توصيل تفوق 80%" 
              : "Cash On Delivery (COD) Ecosystems: Operations, Logistics & Delivery Optimization"}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {isAr
              ? "في الأسواق التي يفضل فيها المستهلكون الدفع نقداً عند استلام الطرد، يمثل الـ COD أكثر من 75% من إجمالي معاملات التجارة الإلكترونية. اكتشف كيف يدير كبار المحترفين مراكز التأكيد الهاتفي، يقضون على الطلبات الوهمية، ويحافظون على نسب توصيل عالية وأرباح مستمرة."
              : "In markets where digital credit card penetration is low or buyer trust is fragile, Cash on Delivery powers over 70% of e-commerce transactions. Discover how high-volume operators manage call centers, eliminate fake orders, and maintain 80%+ delivery rates."}
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Global COD Ecosystems */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Globe2 className="w-6 h-6 text-amber-500" />
            <span>{isAr ? "1. خارطة أسواق الدفع عند الاستلام وفرصها الاقتصادية" : "1. The Global Landscape of Cash On Delivery"}</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "الدفع عند الاستلام ليس نموذجاً محدوداً، بل هو شريان تجاري بمليارات الدولارات يمتد عبر قارات متعددة، ولكل منطقة خصائصها الاقتصادية الفريدة:"
              : "COD is not a niche model—it is a multi-billion dollar e-commerce highway spanning multiple continents. Each region presents distinct economic dynamics:"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {isAr ? "قدرة شرائية مرتفعة" : "High Purchasing Power"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "دول مجلس التعاون الخليجي (GCC)" : "The Gulf Region (GCC)"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "السعودية، الإمارات، الكويت، قطر، عمان. سلة مشتريات مرتفعة جداً (60$ إلى 140$)، مع منافسة إعلانية شديدة وتوقعات جودة عالية في خدمة العملاء والتوصيل السريع."
                  : "UAE, Saudi Arabia, Kuwait, Qatar, Oman. Premium Average Order Value ($60–$140), high disposable income, but aggressive ad competition and stringent customer service expectations."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {isAr ? "سرعة حركة وحجم مبيعات ضخم" : "High Volume Velocity"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "شمال أفريقيا (المغرب ومصر)" : "North Africa (Morocco & Egypt)"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "بيئة لوجستية ناضجة وسريعة مع شبكات توزيع محلية تغطي كافة المدن. تفاعل قياسي على تيك توك وفيسبوك، تكلفة طلبات منخفضة، وتتطلب تأكيداً هاتفياً سريعاً لمنع الطلبات غير الجادة."
                  : "Rapidly maturing logistics ecosystems with localized courier networks. High TikTok and Facebook engagement, lower cost per lead, requiring rigorous call confirmation scripts to counter impulsive orders."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                {isAr ? "أسواق واعدة في التوسع" : "Emerging Corridors"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "شرق أوروبا وأمريكا اللاتينية" : "Eastern Europe & LatAm"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "رومانيا، بلغاريا، اليونان، كولومبيا والمكسيك. طلب متزايد وشبكات شحن سريعة (24 إلى 48 ساعة) مع تتبع دقيق وجمع نقدي موثوق."
                  : "Romania, Bulgaria, Greece, Poland, Colombia, Mexico. High consumer demand with domestic courier networks offering 24-48h parcel tracking with integrated cash collection."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Operational Pillars of High Delivery Rates */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <PhoneCall className="w-6 h-6 text-amber-500" />
            <span>{isAr ? "2. البروتوكول الرباعي لرفع نسبة التوصيل فوق 80%" : "2. The 4-Step Protocol for 80%+ Delivery Rates"}</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "في تجارة الدفع عند الاستلام، تسجيل الطلب في المتجر ليس بيعاً نهائياً وإنما هو مجرد نية شراء. لا يتحقق الربح الفعلي إلا بعد وصول الطرد إلى باب العميل واستلام الكاش كاملاً."
              : "In Cash on Delivery, a 'Purchase' event in your ad dashboard is merely a declaration of intent. True profit is realized only when the parcel is delivered and physical cash is collected."}
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isAr ? "الخطوة 1: التأكيد الهاتفي السريع ورسائل الواتساب الفورية (أقل من 15 دقيقة)" : "Step 1: Rapid Automated WhatsApp & Call Confirmation (<15 Minutes)"}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "تأكيد الطلب وهو لا يزال في قمة حماسه واهتمامه" : "Capture Buyer Intent While Excitement Is Fresh"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "كل ساعة تأخير في الاتصال بالعميل تنقص من نسبة التوصيل النهائية بمقدار 3% إلى 5%. الاتصال الفوري يؤكد العنوان بدقة، يحدد موعد التواجد، ويلغي الطلبات غير الحقيقية فوراً."
                  : "Every hour of confirmation delay drops final delivery rates by 3–5%. Immediate phone confirmation verifies the correct delivery address, checks recipient availability, and filters out non-genuine orders."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isAr ? "الخطوة 2: التجهيز والتسليم لشركة الشحن في نفس اليوم (خلال 24 ساعة)" : "Step 2: Same-Day Pick, Pack & Courier Handover"}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "توصيل الطرد في مدة أقصاها 24 إلى 48 ساعة" : "Fulfill Within 24–48 Hours Maximum"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "تأخير الشحن هو السبب الأول لرفض العميل استلام الطرد عند وصول الموزع. الاعتماد على مخازن محلية قريبة يضمن وصول الطلب قبل أن يغير العميل رأيه أو ينسى أنه طلب."
                  : "Transit delays are the primary driver of buyer refusal at the doorstep. Operating with localized micro-fulfillment hubs guarantees fast dispatch before buyer remorse sets in."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isAr ? "الخطوة 3: معالجة الطرود غير المسلمة استباقياً (NDR Management)" : "Step 3: Proactive Non-Delivery Recovery (NDR Workflows)"}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "متابعة فورية مع الموزع عند أي تعثر في التسليم" : "Active Courier Follow-Up on Out-for-Delivery Incidents"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "عندما يسجل موزع الشحن أن العميل 'لم يرد' أو 'طلب التأجيل'، يجب أن يتصل فريق الدعم فوراً بالعميل لتحديد موعد تسليم جديد وتوجيه الموزع إليه لإنقاذ الشحنة من الروتور."
                  : "When a courier marks an order as 'Customer Unreachable' or 'Address Postponed', an automated customer service alert must trigger immediately to reschedule the delivery window."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isAr ? "الخطوة 4: التدقيق الأسبوعي لتحويلات الكاش مع شركات الشحن" : "Step 4: Strict Courier SLA Tracking & Remittance Management"}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "حماية سيولتك النقدية وتدوير ميزانيات الإعلانات" : "Prevent Working Capital Freezes"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "تحتفظ شركات الشحن بأموالك حتى موعد التحويل الأسبوعي. مراقبة جدول استلام الأموال والتدقيق في فواتير الشحن يحميك من تجميد رأس المال ويسمح لك بإعادة ضخ الأرباح في إعلاناتك."
                  : "Couriers hold your revenue until formal weekly cash remittance. Monitor cash collection schedules and audit courier invoices weekly to ensure prompt liquidity for ad spend recycling."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Cross-Pillar Interlinks */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {isAr ? "أقسام مرتبطة واستشارات متقدمة" : "Related Operational Pillars & Advisory"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/conversion-optimization/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>{isAr ? "تصميم فورم طلب سريع بضغطة واحدة" : "Optimized 1-Click COD Checkout Forms"}</span>
                <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {isAr
                  ? "اكتشف كيف تصمم صفحة هبوط خالية من التعقيدات تجمع معلومات العميل بدقة وسلاسة فائقة."
                  : "Discover how to design friction-free single-page checkout forms that capture clean lead details without overwhelming the buyer."}
              </p>
            </Link>

            <Link 
              to="/consulting/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>{isAr ? "استشارات فردية وتطبيقية لعمليات COD مع AirNest" : "1-on-1 COD Operational Consulting"}</span>
                <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {isAr
                  ? "احصل على مساعدة عملية في إنشاء مركز التأكيد، التفاوض مع شركات التوصيل، وإطلاق الحملات الإعلانية في المغرب والخليج."
                  : "Get direct strategic assistance with setting up call centers, courier contracts, and media buying campaigns in Morocco and the GCC."}
              </p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
