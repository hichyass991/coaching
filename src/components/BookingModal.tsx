import React, { useState } from 'react';
import { Language, SiteTranslation } from '../types';
import { 
  X, 
  Target, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Calendar,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  t: SiteTranslation;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  t,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    status: t.modal.statusOptions[0] || '',
  });

  if (!isOpen) return null;

  const isRtl = currentLang !== 'en';

  const generateWhatsAppMessage = () => {
    if (currentLang === 'en') {
      return `Hello Hicham, I would like to book my 1-on-1 strategy call for my e-commerce business:

👤 Name: ${formData.name.trim() || 'Founder'}
📱 WhatsApp Phone: ${formData.phone.trim() || 'Not specified'}
📊 Business Stage: ${formData.status}

What are your available time slots for our call? Thank you!`;
    }

    return `سلام خويا هشام، بغيت نحجز المكالمة الاستكشافية لبرنامج المواكبة (1-on-1 Mentorship):

👤 الاسم الكامل: ${formData.name.trim() || 'صاحب متجر'}
📱 رقم الواتساب: ${formData.phone.trim() || 'غير محدد'}
📊 وضعية المشروع: ${formData.status}

عافاك وقتاش نقدرو نديرو المكالمة لتشخيص المتجر؟ شكراً جزيلاً! 🎯`;
  };

  const handleOpenWhatsAppDirect = () => {
    const waText = generateWhatsAppMessage();
    window.open(`https://wa.me/212655845060?text=${encodeURIComponent(waText)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = generateWhatsAppMessage();
    window.open(`https://wa.me/212655845060?text=${encodeURIComponent(waText)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div 
        className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transition-colors"
        style={{ direction: isRtl ? 'rtl' : 'ltr' }}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-400 dark:border-amber-500/40 font-bold">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                {t.modal.title}
              </h3>
              <p className="text-[11px] font-bold text-amber-700 dark:text-amber-400">
                {t.modal.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Notice Banner */}
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-300 font-medium leading-relaxed">
                {t.modal.notice}
              </div>

              {/* Name */}
              <div className="space-y-1">
                <label className="font-bold text-slate-800 dark:text-slate-200 block">
                  {t.modal.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-slate-850 transition-all text-xs"
                />
              </div>

              {/* WhatsApp Phone */}
              <div className="space-y-1">
                <label className="font-bold text-slate-800 dark:text-slate-200 block">
                  {t.modal.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t.modal.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-slate-850 transition-all text-xs"
                  style={{ direction: 'ltr', textAlign: isRtl ? 'right' : 'left' }}
                />
              </div>

              {/* Project Status */}
              <div className="space-y-1">
                <label className="font-bold text-slate-800 dark:text-slate-200 block">
                  {t.modal.statusLabel}
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-slate-850 transition-all text-xs cursor-pointer"
                >
                  {t.modal.statusOptions.map((opt, i) => (
                    <option key={i} value={opt} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Primary Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer ring-2 ring-amber-400/40"
              >
                <span>{t.modal.submitBtn}</span>
              </button>

              {/* Instant WhatsApp Link Alternative */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleOpenWhatsAppDirect}
                  className="text-xs text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline font-bold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 dark:fill-emerald-500 text-emerald-600 dark:text-emerald-500" />
                  <span>{t.modal.waAlternative}</span>
                </button>
              </div>

            </form>
          ) : (
            /* Success confirmation */
            <div className="text-center py-6 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-800">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-black text-slate-900 dark:text-white">
                  {t.modal.successTitle}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                  {t.modal.successDesc}
                </p>
              </div>

              <button
                onClick={handleOpenWhatsAppDirect}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.modal.successWaBtn}</span>
              </button>

              <button
                onClick={onClose}
                className="text-xs text-slate-500 dark:text-slate-400 hover:underline cursor-pointer block mx-auto pt-2"
              >
                {t.modal.closeBtn}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
