import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  User, 
  FileCheck, 
  Mail, 
  Phone, 
  CheckCircle2 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { Language } from '../types';

interface AboutPageProps {
  currentLang?: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ currentLang = 'ar' }) => {
  const isAr = currentLang !== 'en';

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title={isAr ? "من نحن ومعايير العمل | AirNest" : "About AirNest & Editorial Standards"}
        description={isAr ? "تعرف على منظومة AirNest: خبرة ميدانية في التجارة الإلكترونية، الدروب شيبينغ، الإعلانات الممولة، لوجستيك الدفع عند الاستلام، ومعايير الجودة الصارمة." : "Learn about AirNest: operational background in e-commerce, dropshipping, performance paid ads, Cash on Delivery logistics, and our strict editorial principles."}
        canonicalPath="/about/"
        breadcrumbs={[{ name: isAr ? 'من نحن' : 'About', item: '/about/' }]}
      />

      <Breadcrumbs items={[{ name: isAr ? 'من نحن' : 'About', item: '/about/' }]} currentLang={currentLang} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <User className="w-3.5 h-3.5" />
            <span>{isAr ? "الخبرة والمنهجية التشغيلية" : "Author & Operational Background"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            {isAr 
              ? "حول AirNest ومعاييرنا التحريرية والتطبيقية" 
              : "About AirNest & Editorial Standards"}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {isAr
              ? "منظومة واستشارات مبنية على الممارسة الميدانية الحقيقية، ملتزمة بتقديم نماذج وأطر عمل تشغيلية مدعومة بالأرقام الدقيقة للتجارة الإلكترونية، والإعلانات الممولة، وشبكات التوصيل والدفع عند الاستلام."
              : "A practitioner-first publication committed to providing verifiable, math-backed operating frameworks for direct-to-consumer e-commerce, performance media buying, and cash on delivery logistics."}
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Background & Experience */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {isAr ? "الخلفية التشغيلية والخبرة الميدانية" : "Operational Background & Experience"}
          </h2>
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              {isAr
                ? "AirNest هي بيئة تشغيلية واستشارية نشطة في التجارة الإلكترونية، تمتلك خبرة مباشرة في الدروب شيبينغ العالمي، وإدارة الحملات الإعلانية الضخمة على ميتا وتيك توك، وشبكات الشحن والدفع عند الاستلام (COD) في المغرب، شمال أفريقيا ودول الخليج العربي."
                : "AirNest is an active e-commerce consulting and operations ecosystem with direct experience across global dropshipping, high-volume performance advertising on Meta and TikTok, and large-scale Cash On Delivery (COD) fulfillment networks in North Africa and the GCC."}
            </p>
            <p>
              {isAr
                ? "بعد إدارة ميزانيات إعلانية معتبرة، وتأسيس مراكز اتصال وتأكيد هاتفي، والتفاوض المباشر مع شركات التوصيل المحلية والمصانع الخارجية، يركز عمل AirNest الاستشاري على الحقائق التشغيلية الصارمة: حماية اقتصاديات الوحدة، خفض نسب الروتور، القضاء على هدر الميزانيات، وبناء أصول تجارية حقيقية ومستدامة."
                : "Having managed media buying budgets, built call center confirmation teams, and negotiated directly with domestic couriers and overseas factories, AirNest's advisory work focuses on the unglamorous operational realities of e-commerce: protecting unit economics, lowering return rates, eliminating customer acquisition waste, and building durable merchant assets."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isAr ? "الإعلانات الممولة والترافيك" : "Performance Media Buying"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "استهداف خوارزمي متقدم، وسرعة إنتاج الفيديوهات الإعلانية، وحماية العائد الإعلاني (ROAS) على تيك توك وميتا."
                  : "Algorithmic broad targeting, creative velocity, and ROAS preservation across TikTok Ads and Meta Ads Manager."}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isAr ? "لوجستيك الـ COD ومراكز التأكيد" : "COD Logistics & Call Centers"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "بروتوكولات التأكيد السريع، معالجة الطرود المتعثرة (NDR)، وتدقيق حسابات الشحن، وتحقيق نسبة توصيل فوق 80%."
                  : "End-to-end confirmation protocols, NDR customer recovery, courier reconciliation, and 80%+ delivery benchmarks."}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isAr ? "هندسة المتجر ومضاعفة المبيعات" : "Funnel & Store Architecture"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isAr
                  ? "تحسين نسبة التحويل (CRO)، وتسهيل الشراء بالهاتف، ورفع متوسط قيمة السلة عبر باقات وعروض متدرجة."
                  : "Conversion rate optimization, mobile checkout engineering, and AOV expansion through tiered bundle funnels."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Editorial Standards & E-E-A-T */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold">
            <FileCheck className="w-6 h-6 text-amber-500" />
            <h2 className="text-2xl">{isAr ? "النزاهة والمعايير التحريرية والتطبيقية" : "Editorial Integrity & Content Standards"}</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "في مجال يعج بالأرقام المفبركة والوعود الخيالية، نلتزم في AirNest بمبادئ تشغيلية شفافة وصارمة:"
              : "In an industry overwhelmed by counterfeit screenshots and theoretical gurus, our publication operates under strict editorial principles:"}
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {isAr ? "معرفة مبنية على التجربة الحقيقية والممارسة اليومية" : "Empirical & Practitioner-Verified Knowledge"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                  {isAr
                    ? "كل دليل، حاسبة، أو إطار عمل تشغيلي مبني على اختبارات حية وأنظمة تشغيل فعلية في السوق، وليس على تكهنات نظرية."
                    : "Every guide, calculator, and framework is grounded in live testing and real operational workflows. We do not publish speculative tactics."}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {isAr ? "صفر ادعاءات وهمية وصفر تقييمات مزيفة" : "Zero Fabricated Claims or Fake Testimonials"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                  {isAr
                    ? "نرفض تماماً استخدام تقييمات مصطنعة أو مبالغات خادعة للأرباح. دراسات الحالة لدينا توثق اقتصاديات الوحدة الحقيقية بكل شفافية بما فيها تكاليف الإعلانات والروتور."
                    : "We refuse to use synthetic review widgets, fabricated star ratings, or exaggerated income claims. Case studies document realistic unit economics, including overhead, ad spend, and return losses."}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {isAr ? "استقلالية تامة ومنهجية واضحة" : "Independence & Transparent Methodology"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                  {isAr
                    ? "تقييماتنا لمنصات التجارة وشركات الشحن محايدة تماماً، ونوضح دائماً مميزات وعيوب كل خيار تقني وتشغيلي بكل وضوح."
                    : "Our evaluations of e-commerce platforms, tools, and courier services are unbiased. Whenever tools or services are discussed, their trade-offs and limitations are stated explicitly."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Contact & Inquiries */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {isAr ? "التواصل المباشر والاستفسارات" : "Direct Inquiries & Contact"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white block">
                  {isAr ? "البريد الإلكتروني" : "Email Inquiries"}
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.author.email}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 hover:underline transition-colors"
                >
                  {SITE_CONFIG.author.email}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-500" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white block">
                  {isAr ? "الهاتف والواتساب المباشر" : "Direct Phone & WhatsApp"}
                </span>
                <span dir="ltr">{SITE_CONFIG.author.telephone}</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
