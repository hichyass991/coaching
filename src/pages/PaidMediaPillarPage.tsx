import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Flame, 
  Video, 
  BarChart2, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

export const PaidMediaPillarPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title="Paid Media Performance: Meta Ads, TikTok Spark Ads & ROAS Frameworks"
        description="The media buyer's blueprint for scaling e-commerce ad spend: rapid creative testing, high-converting UGC angles, broad algorithmic targeting, and ROAS preservation."
        canonicalPath="/paid-media/"
        breadcrumbs={[{ name: 'Paid Media', item: '/paid-media/' }]}
      />

      <Breadcrumbs items={[{ name: 'Paid Media', item: '/paid-media/' }]} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>Traffic & Acquisition Pillar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Paid Media Performance: Meta Ads, TikTok Spark Ads & ROAS Frameworks
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            In modern media buying, creative is your targeting. Learn how to construct rapid testing engines on TikTok and Meta, escape ad fatigue, and scale daily budgets while maintaining profitable contribution margins.
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: The Creative Testing Machine */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Video className="w-6 h-6 text-amber-500" />
            <span>1. The "Hook-Hold-Pitch" Creative Engineering Model</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Machine learning algorithms on Meta and TikTok optimize delivery based on user engagement signals. If your ad creative fails to stop the scroll in the first 2.5 seconds, all downstream targeting and funnels become irrelevant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400">STAGE 01 (0 – 3s)</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">The Pattern Interrupt (Hook)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Objective: Achieve a 3-second hook rate &gt;30%. Techniques include rapid physical actions, counter-intuitive visual demonstrations, or controversial questions that force cognitive attention.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400">STAGE 02 (3 – 12s)</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Agitation & Mechanism (Hold)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Objective: Achieve an average watch time &gt;6 seconds. Reveal why conventional solutions fail, explain the unique product mechanism, and demonstrate visceral transformation.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400">STAGE 03 (12 – 25s)</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Offer & Direct CTA (Pitch)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Objective: Outbound click-through rate (CTR) &gt;1.8%. Introduce a clear price incentive, bundle promotion, or risk-free guarantee paired with a direct call to action.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Platform Comparison */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Layers className="w-6 h-6 text-amber-500" />
            <span>2. Platform Media Buying Comparison: TikTok vs. Meta Ads</span>
          </h2>
          
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <tr>
                  <th className="p-4">Dimension</th>
                  <th className="p-4">Meta Ads (Facebook & Instagram)</th>
                  <th className="p-4">TikTok Ads & Spark Ads</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">Primary Strength</td>
                  <td className="p-4">Broad demographic reach, superior post-purchase attribution, consistent high-AOV purchasing intent.</td>
                  <td className="p-4">Low CPMs, viral organic compounding via Spark Ads, exceptional performance for impulsive under-$50 impulse products.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">Creative Fatigue Rate</td>
                  <td className="p-4">Moderate (winners can run for 3–8 weeks with minor iteration).</td>
                  <td className="p-4">Rapid (creatives fatigue in 7–14 days; requires continuous UGC testing cycles).</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">Optimal Structure</td>
                  <td className="p-4">Advantage+ Shopping Campaigns (ASC) or Broad CBO with dynamic creative testing (DCT).</td>
                  <td className="p-4">Broad targeting, ABO testing ad groups, graduating to Campaign Budget Optimization (CBO) on winners.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">Best Combined With</td>
                  <td className="p-4"><Link to="/conversion-optimization/" className="text-amber-600 dark:text-amber-400 underline">Long-form advertorials</Link> & high-trust landing pages.</td>
                  <td className="p-4"><Link to="/cash-on-delivery/" className="text-amber-600 dark:text-amber-400 underline">Fast 1-click COD forms</Link> & urgent discount timers.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Ad Budget & ROAS Preservation */}
        <section className="p-8 rounded-3xl bg-amber-500/10 dark:bg-amber-950/20 border border-amber-500/20 space-y-4">
          <div className="flex items-center gap-3 text-amber-700 dark:text-amber-400 font-bold">
            <BarChart2 className="w-5 h-5" />
            <span>Unit Economics Rule: Break-Even ROAS Discipline</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Never Scale Budget Without Knowing Your Critical ROAS Floor
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            If your product costs $12 to manufacture, $5 to pick and ship, and sells for $45, your gross profit before ads is $28 (62.2% margin). Your Break-Even ROAS is exactly 1.61x. Scaling spend when your blended ROAS drops below this threshold causes immediate cash burn.
          </p>
          <div className="pt-2">
            <Link 
              to="/tools/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-all"
            >
              <span>Calculate Your Store's Break-Even ROAS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 4: Internal Links to Supporting Guides */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Explore Supporting Paid Media Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/conversion-optimization/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>Landing Page Optimization (CRO)</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Cheap traffic is useless without conversion efficiency. Learn how to match ad hooks with landing page headlines.
              </p>
            </Link>

            <Link 
              to="/consulting/" 
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 bg-slate-50 dark:bg-slate-800/30 transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center justify-between">
                <span>Direct Media Buying Mentorship</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Receive hands-on ad account audits and creative guidance directly inside your business manager.
              </p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};
