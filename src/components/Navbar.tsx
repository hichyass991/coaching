import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language, SiteTranslation, ThemeMode } from '../types';
import { 
  Globe, 
  Menu, 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Sun, 
  Moon, 
  ChevronDown,
  Layers,
  BookOpen,
  Calculator,
  User,
  Briefcase,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: SiteTranslation;
  onOpenBooking: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  t,
  onOpenBooking,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isRtl = currentLang !== 'en';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const languages: { code: Language; label: string; short: string; flag: string }[] = [
    { code: 'ar', label: 'العربية', short: 'العربية', flag: '🇲🇦' },
    { code: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
  ];

  const currentLangObj = languages.find(l => l.code === currentLang) || languages[0];

  // Close dropdowns on outside click or route change
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: isRtl ? "التجارة الإلكترونية" : "E-Commerce", path: "/ecommerce/" },
    { label: isRtl ? "دروبشيبينغ" : "Dropshipping", path: "/dropshipping/" },
    { label: isRtl ? "الإعلانات (Paid Media)" : "Paid Media", path: "/paid-media/" },
    { label: isRtl ? "COD واللوجستيك" : "COD", path: "/cash-on-delivery/" },
    { label: isRtl ? "التحويل (CRO)" : "Conversion", path: "/conversion-optimization/" },
    { label: isRtl ? "الأدوات" : "Tools", path: "/tools/" },
    { label: isRtl ? "الأدلة" : "Guides", path: "/guides/" },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Title */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group shrink-0"
            title={SITE_CONFIG.name}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-orange-400 text-slate-950 flex items-center justify-center font-black text-lg shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              HI
            </div>
            <div className="flex flex-col text-start">
              <span className="font-extrabold text-base text-slate-900 dark:text-white tracking-tight leading-tight">
                {t.nav.brandName}
              </span>
              <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 leading-tight">
                E-Commerce & Dropshipping Authority
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Prioritizing Core Clusters) */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-bold text-slate-700 dark:text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-1.5 px-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-600 dark:text-amber-400 font-black bg-amber-500/10'
                    : 'hover:text-amber-600 dark:hover:text-amber-400'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Secondary Navigation Dropdown (More) */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="py-1.5 px-2 rounded-lg hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{isRtl ? "المزيد" : "More"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div 
                  className={`absolute top-full mt-2 ${isRtl ? 'left-0' : 'right-0'} w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1.5 z-50`}
                >
                  <Link
                    to="/blog/"
                    className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                    <span>{isRtl ? "المقالات والبحوث" : "Blog & Research"}</span>
                  </Link>
                  <Link
                    to="/about/"
                    className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <User className="w-3.5 h-3.5 text-amber-500" />
                    <span>{isRtl ? "من نحن والمعايير" : "About & Standards"}</span>
                  </Link>
                  <Link
                    to="/consulting/"
                    className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-amber-500" />
                    <span>{isRtl ? "برنامج الاستشارات" : "Consulting Advisory"}</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Area: Compact Language Switcher + Dark/Light Mode + Booking CTA */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            
            {/* Language Switcher */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100/90 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                title="Select Language"
                aria-label="Language selector"
              >
                <Globe className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="text-sm">{currentLangObj.flag}</span>
                <span className="font-semibold">{currentLangObj.short}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div 
                  className={`absolute top-full mt-1.5 ${isRtl ? 'left-0' : 'right-0'} w-40 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1.5 z-50`}
                >
                  {languages.map((item) => {
                    const isSelected = currentLang === item.code;
                    return (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          onLanguageChange(item.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-start text-xs font-bold transition-colors flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 font-black'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-sm">{item.flag}</span>
                          <span>{item.label}</span>
                        </span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="h-9 w-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100/90 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center cursor-pointer shadow-2xs group"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              aria-label="Toggle dark and light mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 group-hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Coaching Platform Button */}
            <a
              href={SITE_CONFIG.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-slate-900 dark:text-amber-300 font-bold text-xs transition-all flex items-center gap-1.5 shadow-2xs hover:scale-[1.02] active:scale-[0.98]"
              title={isRtl ? "منصة الكوتشينغ AirNest" : "AirNest Coaching Platform"}
            >
              <Laptop className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>{t.nav.platform}</span>
              <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              className="h-9 px-3.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t.nav.bookCall}</span>
              <ArrowIcon className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Right Controls: Mode Toggle + Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu with Crawlable Links */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-4 pb-8 space-y-5 shadow-xl transition-colors max-h-[85vh] overflow-y-auto">
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Language:</span>
            </span>

            <div className="flex gap-1">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    onLanguageChange(item.code);
                  }}
                  className={`px-2.5 py-1 text-xs rounded-md font-bold transition-all ${
                    currentLang === item.code
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800'
                  }`}
                >
                  <span>{item.flag} {item.short}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Crawlable Topic Cluster Links */}
          <div className="space-y-1 text-sm font-bold text-slate-800 dark:text-slate-200">
            <Link
              to="/"
              className={`block py-2 px-3 rounded-lg ${isActive('/') ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-black' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              {isRtl ? "الرئيسية" : "Home"}
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 px-3 rounded-lg ${isActive(link.path) ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-black' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <Link
                to="/blog/"
                className={`block py-2 px-3 rounded-lg ${isActive('/blog/') ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-black' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                {isRtl ? "المقالات والبحوث" : "Blog & Research"}
              </Link>
              <Link
                to="/about/"
                className={`block py-2 px-3 rounded-lg ${isActive('/about/') ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-black' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                {isRtl ? "من نحن والمعايير" : "About & Editorial Standards"}
              </Link>
              <Link
                to="/consulting/"
                className={`block py-2 px-3 rounded-lg ${isActive('/consulting/') ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-black' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                {isRtl ? "الاستشارات الفردية" : "1-on-1 Consulting"}
              </Link>
            </div>
          </div>

          {/* Mobile Platform CTA */}
          <a
            href={SITE_CONFIG.platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl border border-amber-500/30 bg-amber-500/10 dark:bg-amber-500/15 hover:bg-amber-500/20 text-slate-900 dark:text-amber-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
          >
            <Laptop className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>{isRtl ? "دخول منصة الكوتشينغ (AirNest)" : "AirNest Coaching Platform"}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

          {/* Mobile CTA */}
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm shadow-md flex items-center justify-center gap-2"
          >
            <span>{t.nav.bookCall}</span>
            <ArrowIcon className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      )}
    </header>
  );
};
