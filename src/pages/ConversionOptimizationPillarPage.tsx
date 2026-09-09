import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Zap, 
  Smartphone, 
  ShoppingCart, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Gauge, 
  SplitSquareVertical 
} from 'lucide-react';

export const ConversionOptimizationPillarPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title="E-Commerce Conversion Rate Optimization (CRO) & Funnel Engineering"
        description="Actionable framework for doubling e-commerce store conversion rates: mobile UX architecture, friction-free checkout funnels, AOV bundling, and speed optimization."
        canonicalPath="/conversion-optimization/"
        breadcrumbs={[{ name: 'Conversion Optimization', item: '/conversion-optimization/' }]}
      />

      <Breadcrumbs items={[{ name: 'Conversion Optimization', item: '/conversion-optimization/' }]} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Store Performance Pillar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            E-Commerce Conversion Rate Optimization (CRO) & Funnel Engineering
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Increasing your store's conversion rate from 1.5% to 3.0% effectively cuts your customer acquisition cost in half without spending an extra dollar on advertising. Here is how high-performance direct-to-consumer funnels are engineered.
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Anatomy of a High-Converting Product Page */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <SplitSquareVertical className="w-6 h-6 text-amber-500" />
            <span>1. The Anatomy of a High-Converting Product Page</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Over 85% of paid traffic from TikTok and Meta arrives on mobile devices. Product pages must be designed vertically with thumb-friendly layout hierarchies:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">Above the Fold</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Clear Value & Social Validation</h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Benefit-driven H1 headline that matches the ad creative hook.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>High-resolution visual carousel with real lifestyle demonstration GIFs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Sticky "Add to Cart" or "Buy Now" CTA bar visible during full scroll.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">Below the Fold</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Objection Elimination & Proof</h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Comparison table showing your product vs. cheap alternatives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Explicit guarantees: return timeframe, shipping speed, customer service.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Expandable accordion FAQs answering sizing, usage, and safety concerns.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: AOV Expansion */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-amber-500" />
            <span>2. Average Order Value (AOV) Boosters</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            The brand that can afford to spend the most to acquire a customer wins. By increasing your Average Order Value, you create breathing room for rising ad costs on Meta and TikTok.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Quantity Tier Bundles</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                "Buy 1 for $39, Buy 2 Get 1 Free for $69 (Most Popular), Buy 3 for $89". Default the pre-selected option to the middle tier to lift AOV by 25–40%.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Cart In-Line Bumps</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                One-click add-ons directly inside the slide-out cart: priority express shipping, lifetime replacement insurance, or complimentary accessories ($5–$15 items).
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Post-Purchase 1-Click Upsells</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Offer an additional complementary unit at 40% off on the thank-you screen before order confirmation. Zero friction, zero re-entry of payment details.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Performance & Load Velocity */}
        <section className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <div className="flex items-center gap-3 text-amber-400 font-bold">
            <Gauge className="w-5 h-5" />
            <span>Mobile Speed Optimization</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Every 100ms of Page Latency Costs 7% in Conversions
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Bloated themes with 20+ conflicting Shopify apps kill mobile conversion rates. Compress all visual assets to modern WebP formats, defer non-critical JavaScript, and eliminate external widget scripts that block primary viewport rendering.
          </p>
        </section>

        {/* Section 4: Cross-Pillar Interlinks */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Connect Conversion Strategy with Traffic & Fulfillment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/paid-media/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>Paid Media Strategy</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Learn how to write ad copy that seamlessly aligns with your high-converting product page angles.
              </p>
            </Link>

            <Link 
              to="/cash-on-delivery/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>Cash On Delivery (COD) Checkout UX</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Design clean, mobile-first lead capture forms tailored specifically for Cash on Delivery markets.
              </p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
