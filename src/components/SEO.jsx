import { useEffect } from 'react';

const SITE_URL = 'https://tjclifting.co.uk';

const DEFAULT_SEO = {
  title: 'TJC Lifting Gear | LOLER Testing & Lifting Equipment Wales',
  description: 'Expert LOLER thorough examinations, certification and supply of all types of lifting gear. Based in Ammanford, serving Carmarthenshire, South Wales and West Wales.',
  keywords: 'LOLER testing Wales, lifting gear Ammanford, LOLER examination Carmarthenshire, lifting equipment South Wales, LOLER certified Wales, chains slings shackles Wales, lifting gear supply West Wales, thorough examination lifting equipment',
  url: SITE_URL,
};

export default function SEO({ title, description, keywords, path = '' }) {
  const seo = {
    title: title || DEFAULT_SEO.title,
    description: description || DEFAULT_SEO.description,
    keywords: keywords || DEFAULT_SEO.keywords,
    url: `${SITE_URL}${path}`,
  };

  useEffect(() => {
    // Title
    document.title = seo.title;

    // Helper to set or create meta tag
    const setMeta = (name, content, property = false) => {
      const attr = property ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard meta
    setMeta('description', seo.description);
    setMeta('keywords', seo.keywords);
    setMeta('robots', 'index, follow');
    setMeta('author', 'TJC Lifting Gear Ltd');

    // Open Graph
    setMeta('og:type', 'website', true);
    setMeta('og:title', seo.title, true);
    setMeta('og:description', seo.description, true);
    setMeta('og:url', seo.url, true);
    setMeta('og:site_name', 'TJC Lifting Gear', true);
    setMeta('og:image', `${SITE_URL}/tjc-logo.png`, true);
    setMeta('og:locale', 'en_GB', true);

    // Twitter Card
    setMeta('twitter:card', 'summary');
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);
    setMeta('twitter:image', `${SITE_URL}/tjc-logo.png`);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seo.url);

  }, [seo.title, seo.description, seo.keywords, seo.url]);

  return null;
}

// Local Business structured data — add once in the root layout
export function LocalBusinessSchema() {
  useEffect(() => {
    const existing = document.getElementById('local-business-schema');
    if (existing) return;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'TJC Lifting Gear Ltd',
      description: 'Expert LOLER thorough examinations, certification and supply of all types of lifting gear in Ammanford, Carmarthenshire and across South and West Wales.',
      url: SITE_URL,
      telephone: '01269593399',
      email: 'info@tjcliftinggear.co.uk',
      foundingDate: '2013',
      legalName: 'TJC Lifting Gear Ltd',
      vatID: '08305727',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 2, Llewellyns Court Yard, Maesquarre Road',
        addressLocality: 'Ammanford',
        addressRegion: 'Carmarthenshire',
        postalCode: 'SA18 2HQ',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.7938888,
        longitude: -3.9731935,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Ammanford' },
        { '@type': 'AdministrativeArea', name: 'Carmarthenshire' },
        { '@type': 'AdministrativeArea', name: 'South Wales' },
        { '@type': 'AdministrativeArea', name: 'West Wales' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Lifting Gear Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'LOLER Thorough Examinations',
              description: 'Statutory thorough examinations of lifting equipment under LOLER 1998',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lifting Equipment Certification',
              description: 'Official LOLER certificates issued after examination',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lifting Gear Supply',
              description: 'Supply of chains, slings, shackles, hooks, lever blocks and wire rope assemblies',
            },
          },
        ],
      },
      image: `${SITE_URL}/tjc-logo.png`,
      logo: `${SITE_URL}/tjc-logo.png`,
      sameAs: [
        'https://www.facebook.com/profile.php?id=61572823955890',
        'https://www.linkedin.com/company/tjc-lifting-gear-limited/about/',
      ],
    };

    const script = document.createElement('script');
    script.id = 'local-business-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('local-business-schema');
      if (s) s.remove();
    };
  }, []);

  return null;
}
