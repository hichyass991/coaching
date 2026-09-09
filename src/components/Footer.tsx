import React from 'react';
import { Link } from 'react-router-dom';
import { Language, SiteTranslation } from '../types';
import { MessageCircle, Mail, Phone, ShieldCheck, ArrowRight, Globe, ExternalLink, Laptop } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface FooterProps {
  currentLang: Language;
  t: SiteTranslation;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  t,
  onOpenBooking,
}) => {
  const isRtl = currentLang !== 'en';

  const handleOpenWhatsApp = () => {
    const waText = currentLang === 'en'
      ? 'Hello Hicham, I would like to inquire about your e-commerce advisory and consulting services. Thank you!'
      : 'سلام خويا هشام، بغيت نستفسر على خدمات المواكبة فالتجارة الإلكترونية. شكراً!';
    window.open(`https://wa.me/212655845060?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-28 text-slate-700 dark:text-slate-300 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-orange-400 text-slate-950 flex items-center justify-center font-black text-lg shadow-sm">
                HI
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base text-slate-900 dark:text-white leading-tight">
                  {t.nav.brandName}
                </span>
                <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                  Global E-Commerce & Dropshipping Authority
                </span>
              </div>
            </Link>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Empirical operating frameworks for direct-to-consumer e-commerce, algorithmic media buying, and cash on delivery logistics across international markets.
            </p>

            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Practitioner-tested operational methodology</span>
            </div>
          </div>

          {/* Topical Clusters */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              {isRtl ? "محاور المعرفة" : "Topical Pillars"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ecommerce/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  {isRtl ? "التجارة الإلكترونية" : "E-Commerce Architecture"}
                </Link>
              </li>
              <li>
                <Link to="/dropshipping/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  {isRtl ? "عمليات الدروبشيبينغ" : "Dropshipping Operations"}
                </Link>
              </li>
              <li>
                <Link to="/paid-media/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  {isRtl ? "ميديا بايينغ (Paid Media)" : "Paid Media Performance"}
                </Link>
              </li>
              <li>
                <Link to="/cash-on-delivery/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  {isRtl ? "منظومة COD واللوجستيك" : "Cash On Delivery (COD)"}
                </Link>
              </li>
              <li>
                <Link to="/conversion-optimization/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  {isRtl ? "تحسين معدل التحويل (CRO)" : "Conversion Optimization"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Tools */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              {isRtl ? "الأدوات والمصادر" : "Resources & Tools"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tools/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  {isRtl ? "حاسبات اتخاذ القرار" : "Financial Tools & Models"}
                </Link>
              </li>
              <li>
                <Link to="/guides/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  {isRtl ? "أدلة العمل (SOPs)" : "Operating Guides & SOPs"}
                </Link>
              </li>
              <li>
                <Link to="/blog/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  {isRtl ? "البحوث والمقالات" : "Industry Research"}
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold hover:underline"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>{isRtl ? "منصة الكوتشينغ (AirNest)" : "AirNest Coaching Platform"}</span>
                  <ExternalLink className="w-3 h-3 opacity-75" />
                </a>
              </li>
              <li>
                <Link to="/consulting/" className="text-amber-600 dark:text-amber-400 font-bold hover:underline">
                  {isRtl ? "استشارات فردية 1-on-1" : "1-on-1 Advisory Services"}
                </Link>
              </li>
              <li>
                <Link to="/about/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  {isRtl ? "من نحن والمعايير التحريرية" : "About & Editorial Policy"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              {isRtl ? "التواصل المباشر" : "Direct Contact"}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={handleOpenWhatsApp}
                  className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-bold hover:underline cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 dark:fill-emerald-500 text-emerald-600 dark:text-emerald-500" />
                  <span>WhatsApp: 0655845060</span>
                </button>
              </li>
              <li>
                <a
                  href="tel:+212655845060"
                  className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span dir="ltr">+212 655-845060</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@hichamidali.com"
                  className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 font-bold transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>contact@hichamidali.com</span>
                </a>
              </li>
              <li className="text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
                Global direct-to-consumer advisory with specialized regional expertise in North Africa & GCC ecosystems.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Canonical Notice */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.shortName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/about/" className="hover:underline">Editorial Policy</Link>
            <Link to="/consulting/" className="hover:underline">Advisory Terms</Link>
            <Link to="/" className="hover:underline">Home</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
