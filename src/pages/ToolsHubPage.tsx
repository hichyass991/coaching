import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Calculator, 
  Percent, 
  TrendingDown, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Clock 
} from 'lucide-react';

export const ToolsHubPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title="E-Commerce Financial Calculators & Operational Decision Tools"
        description="Free mathematical calculators and operational frameworks for e-commerce operators: Break-Even ROAS, Net Contribution Margin, and Cash on Delivery Return Rate estimators."
        canonicalPath="/tools/"
        breadcrumbs={[{ name: 'Tools', item: '/tools/' }]}
      />

      <Breadcrumbs items={[{ name: 'Tools', item: '/tools/' }]} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Operational Utilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            E-Commerce Financial Calculators & Operational Decision Tools
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Mathematical rigor is what separates thriving online retailers from unprofitable stores. Explore the core financial models, unit economics formulas, and decision calculators utilized by high-scale operators.
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Tool Directory */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              E-Commerce Financial Tool Suite
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Deterministic calculations to protect operating capital across global e-commerce and dropshipping campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tool 1 */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  <Percent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Break-Even ROAS Calculator</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Calculate your required minimum ad return floor based on Retail Price, COGS, Shipping, and Payment Gateway fees.
                </p>
                <div className="pt-2">
                  <code className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300 block">
                    Formula: Price / (Price - Total Variable Costs)
                  </code>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Interactive Engine in Phase 5</span>
                </span>
                <Link to="/paid-media/" className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline">
                  ROAS Guide →
                </Link>
              </div>
            </div>

            {/* Tool 2 */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Net Contribution Margin Simulator</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Simulate real net operating margin after packaging, returns, customer support, and blended customer acquisition cost (eCAC).
                </p>
                <div className="pt-2">
                  <code className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300 block">
                    Formula: Revenue - All Variable COGS - Ad Spend
                  </code>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Interactive Engine in Phase 5</span>
                </span>
                <Link to="/ecommerce/" className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline">
                  Economics →
                </Link>
              </div>
            </div>

            {/* Tool 3 */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">COD Real Delivery Rate & RTO Estimator</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Model the real cost of return parcels (double shipping fee + packaging loss) to find your minimum required delivery threshold.
                </p>
                <div className="pt-2">
                  <code className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300 block">
                    Formula: Delivered Orders / (Delivered + Returned)
                  </code>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Interactive Engine in Phase 5</span>
                </span>
                <Link to="/cash-on-delivery/" className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline">
                  COD Guide →
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Mathematical Theory */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Why Mathematical Rigor Matters in Direct-to-Consumer
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Most failing e-commerce stores do not suffer from a lack of traffic—they suffer from unit economic blindness. By knowing your exact financial thresholds before launching a campaign, you establish clear rules for killing unprofitable ads, re-negotiating supplier pricing, and setting profitable retail bundles.
          </p>
        </section>

      </main>
    </div>
  );
};
