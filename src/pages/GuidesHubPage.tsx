import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  BookOpen, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Layers, 
  Sparkles 
} from 'lucide-react';

export const GuidesHubPage: React.FC = () => {
  const guideCategories = [
    {
      title: "Foundations & Business Models",
      description: "Macro-level business architecture, store tech stack selection, and financial modeling.",
      pillarLink: "/ecommerce/",
      pillarName: "E-Commerce Architecture Pillar",
      guides: [
        { title: "D2C vs. Dropshipping vs. Private Label: Sourcing Strategy Breakdown", path: "/ecommerce/" },
        { title: "The Contribution Margin Handbook: Calculating Real E-Commerce Profit", path: "/ecommerce/" },
      ]
    },
    {
      title: "Product Validation & Sourcing",
      description: "Identifying high-margin consumer products and securing reliable manufacturing partners.",
      pillarLink: "/dropshipping/",
      pillarName: "Dropshipping Operations Pillar",
      guides: [
        { title: "The 5-Point Product Validation Matrix: Data-Driven Selection", path: "/dropshipping/" },
        { title: "Working with Private Sourcing Agents: 1688 and Direct Factory Access", path: "/dropshipping/" },
      ]
    },
    {
      title: "Paid Acquisition & Media Buying",
      description: "Scaling customer acquisition profitably across Meta Ads and TikTok Spark Ads.",
      pillarLink: "/paid-media/",
      pillarName: "Paid Media Strategy Pillar",
      guides: [
        { title: "The 3-Second Hook Architecture: Stopping the Scroll on TikTok", path: "/paid-media/" },
        { title: "Broad Targeting & CBO Scaling on Meta Ads in 2026", path: "/paid-media/" },
      ]
    },
    {
      title: "Cash On Delivery (COD) Logistics",
      description: "Managing call centers, courier SLAs, and keeping delivery rates above 80%.",
      pillarLink: "/cash-on-delivery/",
      pillarName: "COD Operations Pillar",
      guides: [
        { title: "Call Center Scripts & Anti-Fake Order Confirmation Protocols", path: "/cash-on-delivery/" },
        { title: "Handling RTO: Recovering Failed Deliveries and Protecting Cash Flow", path: "/cash-on-delivery/" },
      ]
    },
    {
      title: "Conversion Optimization & Funnels",
      description: "Maximizing revenue per visitor with high-converting mobile product pages and bundles.",
      pillarLink: "/conversion-optimization/",
      pillarName: "Conversion Optimization Pillar",
      guides: [
        { title: "The Above-the-Fold Checklist for Mobile E-Commerce Stores", path: "/conversion-optimization/" },
        { title: "Tiered Bundles & Post-Purchase Upsells: Increasing AOV by 35%", path: "/conversion-optimization/" },
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title="E-Commerce Guides & Standard Operating Procedures (SOPs)"
        description="Comprehensive repository of actionable operational guides for e-commerce and dropshipping operators: media buying, product validation, COD operations, and funnel optimization."
        canonicalPath="/guides/"
        breadcrumbs={[{ name: 'Guides', item: '/guides/' }]}
      />

      <Breadcrumbs items={[{ name: 'Guides', item: '/guides/' }]} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Knowledge Base & Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            E-Commerce Guides & Standard Operating Procedures (SOPs)
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Actionable step-by-step manuals written from active operational experience. No fluff or generic theory—just verified operating procedures for building scalable e-commerce businesses.
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {guideCategories.map((category, idx) => (
          <section key={idx} className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {category.description}
                </p>
              </div>
              <Link 
                to={category.pillarLink} 
                className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline shrink-0"
              >
                <span>{category.pillarName}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.guides.map((guide, gIdx) => (
                <Link
                  key={gIdx}
                  to={guide.path}
                  className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 hover:border-amber-500/40 transition-all flex items-start gap-3 group"
                >
                  <FileText className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {guide.title}
                    </h3>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 block">
                      Read In-Depth Framework →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};
