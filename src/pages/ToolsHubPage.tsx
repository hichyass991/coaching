import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Calculator, 
  Percent, 
  TrendingDown, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2 
} from 'lucide-react';
import { Language } from '../types';

interface ToolsHubPageProps {
  currentLang?: Language;
}

export const ToolsHubPage: React.FC<ToolsHubPageProps> = ({ currentLang = 'ar' }) => {
  const isAr = currentLang !== 'en';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title={isAr ? "الحاسبات المالية وأدوات اتخاذ القرار للمتاجر الإلكترونية | AirNest" : "E-Commerce Financial Calculators & Operational Decision Tools | AirNest"}
        description={isAr ? "حاسبات مالية ونماذج رياضية مجانية لأصحاب المتاجر: حساب نقطة التعادل الإعلاني (Break-Even ROAS)، صافي هامش المساهمة، ونسب توصيل الـ COD." : "Free mathematical calculators and operational frameworks for e-commerce operators: Break-Even ROAS, Net Contribution Margin, and Cash on Delivery Return Rate estimators."}
        canonicalPath="/tools/"
        breadcrumbs={[{ name: isAr ? 'أدوات وحاسبات' : 'Tools', item: '/tools/' }]}
      />

      <Breadcrumbs items={[{ name: isAr ? 'أدوات وحاسبات' : 'Tools', item: '/tools/' }]} currentLang={currentLang} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{isAr ? "أدوات ونماذج تشغيلية ذكية" : "Interactive Operational Utilities"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            {isAr 
              ? "الحاسبات المالية ونماذج اتخاذ القرارات للتجارة الإلكترونية" 
              : "E-Commerce Financial Calculators & Operational Decision Tools"}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {isAr
              ? "الدقة الحسابية هي الفارق الحقيقي بين المتاجر المزدهرة التي تحقق أرباحاً صافية والمتاجر التي تحرق أموالها. استكشف النماذج الاقتصادية ومعادلات اقتصاديات الوحدة المعتمدة لدى كبار المشغلين."
              : "Mathematical rigor is what separates thriving online retailers from unprofitable stores. Explore the core financial models, unit economics formulas, and decision calculators utilized by high-scale operators."}
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Tool Directory */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {isAr ? "باقة الأدوات والحاسبات المالية للتجارة الإلكترونية" : "E-Commerce Financial Tool Suite"}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {isAr
                ? "حسابات دقيقة لحماية رأس المال التشغيلي في حملات التجارة الإلكترونية، الدروب شيبينغ، والدفع عند الاستلام."
                : "Deterministic calculations to protect operating capital across global e-commerce and dropshipping campaigns."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tool 1 */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  <Percent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? "حاسبة نقطة التعادل الإعلاني (Break-Even ROAS)" : "Break-Even ROAS Calculator"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? "احسب الحد الأدنى للعائد الإعلاني المقبول بناءً على سعر البيع، تكلفة المنتج، الشحن، ورسوم بوابة الدفع."
                    : "Calculate your required minimum ad return floor based on Retail Price, COGS, Shipping, and Payment Gateway fees."}
                </p>
                <div className="pt-2">
                  <code className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300 block text-left" dir="ltr">
                    Formula: Price / (Price - Total Variable Costs)
                  </code>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAr ? "محدث ومتاح" : "Active Model"}</span>
                </span>
                <Link to="/paid-media/" className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1">
                  <span>{isAr ? "دليل الإعلانات" : "ROAS Guide"}</span>
                  <ArrowIcon className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Tool 2 */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? "محاكي صافي هامش المساهمة (Net Margin)" : "Net Contribution Margin Simulator"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? "محاكاة الهامش الصافي الحقيقي بعد خصم التغليف، المرتجعات، خدمة العملاء، وتكلفة الإعلانات الفعلية لكل عميل."
                    : "Simulate real net operating margin after packaging, returns, customer support, and blended customer acquisition cost (eCAC)."}
                </p>
                <div className="pt-2">
                  <code className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300 block text-left" dir="ltr">
                    Formula: Revenue - All Variable COGS - Ad Spend
                  </code>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAr ? "محدث ومتاح" : "Active Model"}</span>
                </span>
                <Link to="/ecommerce/" className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1">
                  <span>{isAr ? "اقتصاديات الوحدة" : "Economics"}</span>
                  <ArrowIcon className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Tool 3 */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? "مقدر نسبة التوصيل وتكلفة الروتور للـ COD" : "COD Real Delivery Rate & RTO Estimator"}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? "نمذجة التكلفة الحقيقية للشحنات المرتجعة (شحن الذهاب والإياب وتلف التغليف) لتحديد حد التوصيل الأدنى المربح."
                    : "Model the real cost of return parcels (double shipping fee + packaging loss) to find your minimum required delivery threshold."}
                </p>
                <div className="pt-2">
                  <code className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300 block text-left" dir="ltr">
                    Formula: Delivered Orders / (Delivered + Returned)
                  </code>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAr ? "محدث ومتاح" : "Active Model"}</span>
                </span>
                <Link to="/cash-on-delivery/" className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1">
                  <span>{isAr ? "دليل الـ COD" : "COD Guide"}</span>
                  <ArrowIcon className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Mathematical Theory */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {isAr ? "لماذا تعتبر الحسابات الرياضية الصارمة سر استمرار المتاجر؟" : "Why Mathematical Rigor Matters in Direct-to-Consumer"}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "معظم المتاجر التي تفشل لا تعاني من نقص الزوار، بل تعاني من العمى المالي لاقتصاديات الوحدة. معرفة أرقامك وهوامشك بدقة قبل إطلاق أي حملة إعلانية يمنحك قواعد واضحة لإيقاف الإعلانات الخاسرة، والتفاوض مع الموردين، وتحديد أسعار وعروض مربحة ومستدامة."
              : "Most failing e-commerce stores do not suffer from a lack of traffic—they suffer from unit economic blindness. By knowing your exact financial thresholds before launching a campaign, you establish clear rules for killing unprofitable ads, re-negotiating supplier pricing, and setting profitable retail bundles."}
          </p>
        </section>

      </main>
    </div>
  );
};
