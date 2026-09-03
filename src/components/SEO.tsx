import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  structuredData?: object;
}

const BASE_URL = 'https://smhlandscape.com';

export function SEO({ title, description, path, image = '/logo/smh-landscape-logo.png', structuredData }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image.startsWith('http') ? image : `${BASE_URL}${image}`);
    setMeta('property', 'og:url', `${BASE_URL}${path}`);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'SMH Landscape');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image.startsWith('http') ? image : `${BASE_URL}${image}`);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${BASE_URL}${path}`);

    let scriptEl: HTMLScriptElement | null = null;
    if (structuredData) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.text = JSON.stringify(structuredData);
      document.head.appendChild(scriptEl);
    }

    return () => {
      if (scriptEl) document.head.removeChild(scriptEl);
    };
  }, [title, description, path, image, structuredData]);

  return null;
}
