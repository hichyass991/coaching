import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Newspaper, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Tag, 
  Layers 
} from 'lucide-react';

export const BlogHubPage: React.FC = () => {
  const articles = [
    {
      title: "The Shift in Algorithmic Ad Buying: Why Creative Breadth Beats Manual Bidding in 2026",
      category: "Paid Media",
      readTime: "7 min read",
      summary: "How modern machine learning on TikTok and Meta has rendered micro-interest targeting obsolete in favor of broad hook diversity.",
      link: "/paid-media/"
    },
    {
      title: "COD Unit Economics: Why Scaling from 50 to 300 Orders/Day Often Reduces Net Profit",
      category: "Cash On Delivery",
      readTime: "9 min read",
      summary: "A mathematical breakdown of warehouse bottlenecking, return-to-origin spikes, and working capital traps during rapid regional expansion.",
      link: "/cash-on-delivery/"
    },
    {
      title: "From 1688 to Domestic 3PL: The Complete Supply Chain Roadmap for Scaled Dropshippers",
      category: "Dropshipping",
      readTime: "11 min read",
      summary: "Transitioning your logistics from cross-border individual parcel airfreight to consolidated sea freight and local fulfillment centers.",
      link: "/dropshipping/"
    },
    {
      title: "The Zero-Friction Mobile Checkout: Lessons from 100+ E-Commerce Funnel Audits",
      category: "Conversion Optimization",
      readTime: "6 min read",
      summary: "Analyzing the layout patterns, button placements, and reassurance triggers that consistently drive conversion rate gains.",
      link: "/conversion-optimization/"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <SeoHead
        title="E-Commerce & Dropshipping Insights, Market Analysis & Research"
        description="Data-backed industry analysis, platform algorithm updates, and operational teardowns for modern e-commerce and dropshipping operators."
        canonicalPath="/blog/"
        breadcrumbs={[{ name: 'Blog', item: '/blog/' }]}
      />

      <Breadcrumbs items={[{ name: 'Blog', item: '/blog/' }]} />

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-4">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Research & Industry Analysis</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            E-Commerce & Dropshipping Insights, Market Analysis & Research
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            In-depth operational analyses, algorithm shifts, and empirical case breakdowns from the front lines of global e-commerce and media buying.
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <article 
              key={idx}
              className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1 font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link 
                  to={article.link} 
                  className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Read Full Pillar Analysis</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </main>
    </div>
  );
};
