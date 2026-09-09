export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export const SITE_CONFIG = {
  name: "Hicham Idali | Global E-Commerce & Dropshipping Growth Authority",
  shortName: "Hicham Idali",
  siteUrl: ((import.meta as any).env?.VITE_SITE_URL as string) || "https://www.hichamidali.com",
  defaultTitle: "E-Commerce & Dropshipping Growth Authority | Hicham Idali",
  titleTemplate: "%s | Hicham Idali",
  defaultDescription:
    "Actionable frameworks for scaling global e-commerce, dropshipping, performance paid ads (TikTok & Meta), cash on delivery (COD) operations, and conversion optimization.",
  author: {
    name: "Hicham Idali",
    role: "E-Commerce Consultant & Operations Specialist",
    email: "contact@hichamidali.com",
    telephone: "+212655845060",
    location: "Casablanca, Morocco",
  },
  socials: {
    whatsapp: "https://wa.me/212655845060",
    linkedin: "https://www.linkedin.com/in/hicham-idali",
  },
  primaryNav: [
    { label: "E-Commerce", href: "/ecommerce/", description: "Core business models, unit economics, and store infrastructure" },
    { label: "Dropshipping", href: "/dropshipping/", description: "Supplier vetting, product research, and global fulfillment" },
    { label: "Paid Media", href: "/paid-media/", description: "Meta Ads, TikTok Spark Ads, and ROAS scaling systems" },
    { label: "COD Operations", href: "/cash-on-delivery/", description: "Logistics, call center protocols, and RTO reduction" },
    { label: "Conversion (CRO)", href: "/conversion-optimization/", description: "High-converting landing pages, AOV boosters, and UX audits" },
    { label: "Tools", href: "/tools/", description: "Calculators and operational decision matrices" },
    { label: "Guides", href: "/guides/", description: "Deep-dive tactical manuals and operating procedures" },
  ] as NavItem[],
  secondaryNav: [
    { label: "Blog", href: "/blog/" },
    { label: "About", href: "/about/" },
    { label: "Consulting", href: "/consulting/" },
  ] as NavItem[],
};
