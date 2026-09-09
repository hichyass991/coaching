import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Banknote, 
  PhoneCall, 
  Truck, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  ShieldCheck 
} from 'lucide-react';

export const CashOnDeliveryPillarPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title="Cash On Delivery (COD) Ecosystems: Operations, Logistics & Delivery Optimization"
        description="Master global cash on delivery (COD) operations: call center confirmation protocols, courier SLA management, return rate (RTO) reduction, and cash flow cycles across GCC, MENA, and international markets."
        canonicalPath="/cash-on-delivery/"
        breadcrumbs={[{ name: 'Cash on Delivery', item: '/cash-on-delivery/' }]}
      />

      <Breadcrumbs items={[{ name: 'Cash on Delivery', item: '/cash-on-delivery/' }]} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Banknote className="w-3.5 h-3.5" />
            <span>Operational Knowledge Pillar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Cash On Delivery (COD) Ecosystems: Operations, Logistics & Delivery Optimization
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            In markets where digital credit card penetration is low or buyer trust is fragile, Cash on Delivery powers over 70% of e-commerce transactions. Discover how high-volume operators manage call centers, eliminate fake orders, and maintain 80%+ delivery rates.
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Global COD Ecosystems */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Globe2 className="w-6 h-6 text-amber-500" />
            <span>1. The Global Landscape of Cash On Delivery</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            COD is not a niche model—it is a multi-billion dollar e-commerce highway spanning multiple continents. Each region presents distinct economic dynamics:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">High Purchasing Power</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">The Gulf Region (GCC)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                UAE, Saudi Arabia, Kuwait, Qatar, Oman. Premium Average Order Value ($60–$140), high disposable income, but aggressive ad competition and stringent customer service expectations.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">High Volume Velocity</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">North Africa (Morocco & Egypt)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Rapidly maturing logistics ecosystems with localized courier networks. High TikTok and Facebook engagement, lower cost per lead, requiring rigorous call confirmation scripts to counter impulsive orders.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Emerging Corridors</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Eastern Europe & LatAm</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Romania, Bulgaria, Greece, Poland, Colombia, Mexico. High consumer demand with domestic courier networks offering 24-48h parcel tracking with integrated cash collection.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Operational Pillars of High Delivery Rates */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <PhoneCall className="w-6 h-6 text-amber-500" />
            <span>2. The 4-Step Protocol for 80%+ Delivery Rates</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            In Cash on Delivery, a "Purchase" event in your ad dashboard is merely a declaration of intent. True profit is realized only when the parcel is delivered and physical cash is collected.
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Step 1: Rapid Automated WhatsApp & Call Confirmation (&lt;15 Minutes)</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Capture Buyer Intent While Excitement Is Fresh</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Every hour of confirmation delay drops final delivery rates by 3–5%. Immediate phone confirmation verifies the correct delivery address, checks recipient availability, and filters out non-genuine orders.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Step 2: Same-Day Pick, Pack & Courier Handover</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Fulfill Within 24–48 Hours Maximum</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Transit delays are the primary driver of buyer refusal at the doorstep. Operating with localized micro-fulfillment hubs guarantees fast dispatch before buyer remorse sets in.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Step 3: Proactive Non-Delivery Recovery (NDR Workflows)</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Courier Follow-Up on Out-for-Delivery Incidents</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                When a courier marks an order as "Customer Unreachable" or "Address Postponed", an automated customer service alert must trigger immediately to reschedule the delivery window.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Step 4: Strict Courier SLA Tracking & Remittance Management</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Prevent Working Capital Freezes</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Couriers hold your revenue until formal weekly cash remittance. Monitor cash collection schedules and audit courier invoices weekly to ensure prompt liquidity for ad spend recycling.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Cross-Pillar Interlinks */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Related Operational Pillars & Advisory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/conversion-optimization/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>Optimized 1-Click COD Checkout Forms</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Discover how to design friction-free single-page checkout forms that capture clean lead details without overwhelming the buyer.
              </p>
            </Link>

            <Link 
              to="/consulting/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>1-on-1 COD Operational Consulting</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Get direct strategic assistance with setting up call centers, courier contracts, and media buying campaigns in Morocco and the GCC.
              </p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
