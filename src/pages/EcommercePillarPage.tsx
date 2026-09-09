import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Boxes, 
  TrendingUp, 
  Zap, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';

export const EcommercePillarPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title="Modern E-Commerce Architecture, Business Models & Unit Economics"
        description="Comprehensive authority guide to scaling modern e-commerce brands: business models, store infrastructure, supply chains, customer acquisition, and unit economics."
        canonicalPath="/ecommerce/"
        breadcrumbs={[{ name: 'E-Commerce', item: '/ecommerce/' }]}
      />

      <Breadcrumbs items={[{ name: 'E-Commerce', item: '/ecommerce/' }]} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Boxes className="w-3.5 h-3.5" />
            <span>Core Knowledge Pillar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Modern E-Commerce Architecture, Business Models & Unit Economics
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            A sustainable e-commerce brand is built on mathematical unit economics, reliable supply chains, and predictable customer acquisition channels—not short-term marketing tricks. Explore our comprehensive operating frameworks.
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Business Models */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Layers className="w-6 h-6 text-amber-500" />
            <span>1. Foundational E-Commerce Business Models</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Every e-commerce operation is governed by its cash conversion cycle, inventory risk, and customer fulfillment model. Understanding the structural differences is the first step toward profitable scaling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Direct-to-Consumer (D2C)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Branded manufacturing and direct customer relationships. High upfront inventory requirements, superior gross margins (65%+), and strong customer lifetime value (LTV).
              </p>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">High Brand Equity</span>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Dropshipping & Sourcing</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Zero initial inventory risk. Validation of demand precedes capital allocation. Requires rigorous supplier vetting and fast logistics partners to protect merchant reputation.
              </p>
              <Link to="/dropshipping/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                Explore Dropshipping Pillar <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Cash on Delivery (COD)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Dominant in emerging and high-growth markets (MENA, GCC, LatAm, Eastern Europe). Massive conversion rates offset by delivery and return-to-origin (RTO) friction.
              </p>
              <Link to="/cash-on-delivery/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                Explore COD Operations <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Mathematical Unit Economics */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-amber-500" />
            <span>2. E-Commerce Unit Economics: The Contribution Margin Framework</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Revenue is a vanity metric; net contribution margin is reality. Too many stores scale top-line ad spend only to discover they are operating at a net loss once returns, payment gateway cuts, and packaging are calculated.
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <tr>
                  <th className="p-4">Financial Metric</th>
                  <th className="p-4">Formula</th>
                  <th className="p-4">Healthy Target</th>
                  <th className="p-4">Strategic Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">Gross Margin</td>
                  <td className="p-4">(Revenue - COGS) / Revenue</td>
                  <td className="p-4">60% – 75%</td>
                  <td className="p-4">Leaves sufficient room for customer acquisition costs.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">Break-Even ROAS</td>
                  <td className="p-4">1 / Gross Margin %</td>
                  <td className="p-4">1.35x – 1.65x</td>
                  <td className="p-4">Defines the floor below which advertising destroys capital.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">Contribution Margin 1</td>
                  <td className="p-4">Revenue - COGS - Shipping - Pick & Pack</td>
                  <td className="p-4">45% – 55%</td>
                  <td className="p-4">Real gross profit before digital media buying expenditure.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">Net Contribution Margin</td>
                  <td className="p-4">CM1 - Direct Ad Spend - Gateway Fees</td>
                  <td className="p-4">15% – 25%</td>
                  <td className="p-4">Free cash available to cover overhead, team, and reinvestment.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-amber-900 dark:text-amber-200">Want to model your exact store financials?</h3>
              <p className="text-xs text-amber-800 dark:text-amber-300">Use our free unit economics calculators to calculate break-even targets.</p>
            </div>
            <Link 
              to="/tools/" 
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg shadow-sm transition-all"
            >
              Access Calculators
            </Link>
          </div>
        </section>

        {/* Section 3: The Scaling Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-amber-500" />
            <span>3. The Four Pillars of Scalable Store Infrastructure</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Store Tech & Conversion Velocity</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Clean mobile-first navigation, single-page checkouts, under-1.5s load times, and structured product page persuasion architectures that reduce cognitive friction.
              </p>
              <Link to="/conversion-optimization/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                Read Conversion Optimization Pillar <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Performance Media Buying Engine</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Building predictable traffic pipelines across Meta Ads and TikTok Spark Ads using rapid creative testing, high-volume UGC angles, and scalable budget optimization.
              </p>
              <Link to="/paid-media/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                Read Paid Media Pillar <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Supply Chain & 3PL Logistics</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Moving from standard manufacturer shipping to bonded warehouses, private agent consolidation, automated warehouse management (WMS), and strict quality control.
              </p>
              <Link to="/dropshipping/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                Read Supply Chain & Sourcing Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Customer Retention & LTV Expansion</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Automated SMS abandoned checkout flows, segmented email win-backs, post-purchase replenishment funnels, and tiered VIP loyalty initiatives.
              </p>
              <Link to="/guides/" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline">
                Browse Retention Guides <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Strategic Consulting CTA */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Advisory & Implementation</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Need Hands-On Strategic Guidance to Scale Your Store?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We work with qualified e-commerce operators to optimize paid media accounts, restructure supply chains, reduce delivery friction, and build enduring brands.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link 
              to="/consulting/" 
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Explore Consulting Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/guides/" 
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-600 text-white font-bold text-sm transition-all"
            >
              Browse Knowledge Base
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
