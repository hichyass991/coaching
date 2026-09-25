import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  breadcrumbs?: BreadcrumbItem[];
  schemaType?: 'WebPage' | 'Article' | 'CollectionPage';
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath,
  breadcrumbs,
  schemaType = 'WebPage',
}) => {
  const fullTitle = title.includes('AirNest')
    ? title
    : `${title} | ${SITE_CONFIG.shortName}`;

  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = `${SITE_CONFIG.siteUrl}${cleanPath}`;

  useEffect(() => {
    // 1. Title
    document.title = fullTitle;

    // Helper to set or create meta tags
    const setMeta = (attrName: string, attrVal: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Meta description
    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large');

    // 3. Open Graph
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE_CONFIG.name);

    // 4. Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);

    // 5. Canonical Link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // 6. Dynamic JSON-LD Structured Data
    const scriptId = 'dynamic-page-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': schemaType,
        name: fullTitle,
        description: description,
        url: canonicalUrl,
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.siteUrl,
        },
      },
    ];

    // If breadcrumbs exist, add BreadcrumbList schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaData.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: crumb.item.startsWith('http') ? crumb.item : `${SITE_CONFIG.siteUrl}${crumb.item}`,
        })),
      });
    }

    scriptTag.textContent = JSON.stringify(schemaData, null, 2);

    return () => {
      // Clean up dynamic schema on unmount if needed
    };
  }, [fullTitle, description, canonicalUrl, breadcrumbs, schemaType]);

  return null;
};
