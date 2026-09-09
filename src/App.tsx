import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Language, ThemeMode } from './types';
import { TRANSLATIONS } from './data/translations';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { BookingModal } from './components/BookingModal';

// Route Pages
import { HomePage } from './pages/HomePage';
import { EcommercePillarPage } from './pages/EcommercePillarPage';
import { DropshippingPillarPage } from './pages/DropshippingPillarPage';
import { PaidMediaPillarPage } from './pages/PaidMediaPillarPage';
import { CashOnDeliveryPillarPage } from './pages/CashOnDeliveryPillarPage';
import { ConversionOptimizationPillarPage } from './pages/ConversionOptimizationPillarPage';
import { ToolsHubPage } from './pages/ToolsHubPage';
import { GuidesHubPage } from './pages/GuidesHubPage';
import { BlogHubPage } from './pages/BlogHubPage';
import { ConsultingPage } from './pages/ConsultingPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('site_lang');
      if (saved === 'ar' || saved === 'en') return saved as Language;
    }
    return 'ar';
  });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('site_theme') as ThemeMode;
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
  });

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.ar;
  const isRtl = currentLang !== 'en';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'ar';
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.body.style.backgroundColor = '#0b0f19';
      document.body.style.color = '#f8fafc';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#0f172a';
    }
    localStorage.setItem('site_theme', theme);
  }, [isRtl, currentLang, theme]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_lang', lang);
    }
  };

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div 
        className="min-h-screen flex flex-col bg-white dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 selection:bg-amber-500/20 selection:text-amber-900 transition-colors"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Global Navigation */}
        <Navbar
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
          t={t}
          onOpenBooking={handleOpenBooking}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />

        {/* Dynamic Route View */}
        <main className="flex-1 pb-16 sm:pb-12">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage currentLang={currentLang} t={t} onOpenBooking={handleOpenBooking} />} 
            />
            <Route path="/ecommerce" element={<EcommercePillarPage />} />
            <Route path="/ecommerce/" element={<EcommercePillarPage />} />

            <Route path="/dropshipping" element={<DropshippingPillarPage />} />
            <Route path="/dropshipping/" element={<DropshippingPillarPage />} />

            <Route path="/paid-media" element={<PaidMediaPillarPage />} />
            <Route path="/paid-media/" element={<PaidMediaPillarPage />} />

            <Route path="/cash-on-delivery" element={<CashOnDeliveryPillarPage />} />
            <Route path="/cash-on-delivery/" element={<CashOnDeliveryPillarPage />} />

            <Route path="/conversion-optimization" element={<ConversionOptimizationPillarPage />} />
            <Route path="/conversion-optimization/" element={<ConversionOptimizationPillarPage />} />

            <Route path="/tools" element={<ToolsHubPage />} />
            <Route path="/tools/" element={<ToolsHubPage />} />

            <Route path="/guides" element={<GuidesHubPage />} />
            <Route path="/guides/" element={<GuidesHubPage />} />

            <Route path="/blog" element={<BlogHubPage />} />
            <Route path="/blog/" element={<BlogHubPage />} />

            <Route 
              path="/consulting" 
              element={<ConsultingPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/consulting/" 
              element={<ConsultingPage onOpenBooking={handleOpenBooking} />} 
            />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/" element={<AboutPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer
          currentLang={currentLang}
          t={t}
          onOpenBooking={handleOpenBooking}
        />

        {/* Sticky Bottom Bar for quick strategy calls */}
        <StickyBottomBar
          currentLang={currentLang}
          t={t}
          onOpenBooking={handleOpenBooking}
        />

        {/* Strategy Consultation Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          currentLang={currentLang}
          t={t}
        />
      </div>
    </BrowserRouter>
  );
}
