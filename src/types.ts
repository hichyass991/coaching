export type Language = 'ar' | 'en';
export type ThemeMode = 'light' | 'dark';

export interface PainPointItem {
  id: string;
  problem: string;
  consequence: string;
  solution: string;
  tag: string;
}

export interface ProgramModule {
  id: string;
  step: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
}

export interface SiteTranslation {
  nav: {
    brandName: string;
    brandRole: string;
    home: string;
    painPoints: string;
    program: string;
    whyMe: string;
    bookCall: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    guarantee: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    ratingText: string;
  };
  painPoints: {
    badge: string;
    title: string;
    subtitle: string;
    items: PainPointItem[];
    bridgeText: string;
    bridgeCta: string;
  };
  program: {
    badge: string;
    title: string;
    subtitle: string;
    duration: string;
    format: string;
    modules: ProgramModule[];
    bonusesTitle: string;
    bonuses: string[];
    cta: string;
  };
  stickyBar: {
    badge: string;
    primaryCta: string;
    waCta: string;
  };
  modal: {
    title: string;
    subtitle: string;
    notice: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    statusLabel: string;
    statusOptions: string[];
    submitBtn: string;
    waAlternative: string;
    successTitle: string;
    successDesc: string;
    successWaBtn: string;
    closeBtn: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    contactDirect: string;
    rights: string;
  };
}
