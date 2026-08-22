import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getServiceBySlug } from '../../pages/services/serviceData';

const SITE_URL = 'https://www.elixortech.com';
const DEFAULT_IMAGE = `${SITE_URL}/maximum-velocity.png`;

const truncateDescription = (text, maxLength = 155) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).replace(/\s+\S*$/, '')}.`;
};

const pageMeta = {
  '/': {
    title: 'MVP Development Company & SaaS Engineering | Elixor',
    description: 'Launch your MVP or SaaS product in weeks with Elixor Technologies. Strategy, UI/UX design, full-stack engineering, testing, and deployment for startups.',
  },
  '/story': {
    title: 'About Elixor Technologies | Product Engineering Partner',
    description: 'Learn how Elixor Technologies helps startups turn ideas into scalable digital products through focused strategy, design, engineering, and transparent delivery.',
  },
  '/features': {
    title: 'Software Development Services | Elixor Technologies',
    description: 'Explore MVP, SaaS, web, mobile, CRM, ERP, cloud, e-commerce, portal, AI, and automation engineering services from Elixor Technologies.',
  },
  '/projects': {
    title: 'Software Development Case Studies | Elixor Technologies',
    description: 'See web platforms, SaaS products, CRM systems, ERP portals, and business websites designed and engineered by Elixor Technologies.',
  },
  '/faq': {
    title: 'MVP & SaaS Development FAQ | Elixor Technologies',
    description: 'Answers about Elixor Technologies services, delivery timelines, pricing, technology stack, mobile development, integrations, security, and post-launch support.',
  },
  '/team': {
    title: 'Product Strategy, Design & Engineering Team | Elixor',
    description: 'Meet the focused product disciplines behind Elixor Technologies: product strategy, UI/UX design, full-stack engineering, quality assurance, and launch support.',
  },
  '/partners': {
    title: 'Technology Partners & Platforms | Elixor Technologies',
    description: 'Explore the proven cloud, payment, data, development, and infrastructure platforms Elixor Technologies uses to build reliable digital products.',
  },
  '/integrations': {
    title: 'Software Integrations & API Development | Elixor',
    description: 'Connect payments, analytics, CRM, cloud, AI, and business systems with secure custom API integrations engineered by Elixor Technologies.',
  },
  '/contact': {
    title: 'Contact Elixor Technologies | Start Your Software Project',
    description: 'Contact Elixor Technologies about your MVP, SaaS platform, website, mobile app, CRM, ERP, AI automation, or custom software project.',
  },
};

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname !== '/' ? pathname.replace(/\/$/, '') : '/';
    const serviceSlug = normalizedPath.startsWith('/features/') ? normalizedPath.split('/').pop() : null;
    const service = serviceSlug ? getServiceBySlug(serviceSlug) : null;
    const isNotFound = !pageMeta[normalizedPath] && !service;
    const meta = service
      ? {
          title: `${service.title} | Elixor Technologies`,
          description: truncateDescription(service.description),
          image: `${SITE_URL}${service.heroImage}`,
        }
      : pageMeta[normalizedPath] || {
          title: 'Page Not Found | Elixor Technologies',
          description: 'The requested page could not be found. Explore Elixor Technologies software development services and case studies.',
        };

    const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`;
    const imageUrl = meta.image || DEFAULT_IMAGE;

    document.title = meta.title;
    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: isNotFound ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const existingStructuredData = document.getElementById('route-structured-data');
    existingStructuredData?.remove();
    if (!isNotFound) {
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': service ? 'Service' : 'WebPage',
        name: meta.title,
        description: meta.description,
        url: canonicalUrl,
        image: imageUrl,
        ...(service
          ? {
              serviceType: service.title,
              provider: { '@id': `${SITE_URL}/#organization` },
              areaServed: 'Worldwide',
            }
          : { isPartOf: { '@id': `${SITE_URL}/#website` } }),
      };
      const script = document.createElement('script');
      script.id = 'route-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
};

export default Seo;
