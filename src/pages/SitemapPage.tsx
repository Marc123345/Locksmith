import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const mainPages = [
  {
    path: '/',
    title: 'Home',
    description: 'Professional locksmith services in Annapolis, MD',
    lastMod: '2025-03-24',
    priority: '1.0'
  },
  {
    path: '/about',
    title: 'About Us',
    description: 'Learn about our family-owned locksmith business',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/services',
    title: 'Services',
    description: 'Comprehensive locksmith services for residential, commercial, and automotive needs',
    lastMod: '2025-03-24',
    priority: '0.9'
  },
  {
    path: '/testimonials',
    title: 'Testimonials',
    description: 'Read what our customers say about our locksmith services',
    lastMod: '2025-03-24',
    priority: '0.7'
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Get in touch with our professional locksmith team',
    lastMod: '2025-03-24',
    priority: '0.8'
  }
];

const locationPages = [
  {
    path: '/',
    title: 'Annapolis, MD (Home)',
    description: 'Professional locksmith services in Downtown Annapolis, Eastport, and Hillsmere Shores',
    lastMod: '2025-03-24',
    priority: '1.0'
  },
  {
    path: '/locations/arnold',
    title: 'Arnold, MD',
    description: 'Locksmith services in Arnold, Cape St. Claire, and Bay Hills',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/bay-ridge',
    title: 'Bay Ridge, MD',
    description: 'Trusted locksmith services in Bay Ridge and South Annapolis',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/broadneck',
    title: 'Broadneck, MD',
    description: 'Expert locksmith services throughout the Broadneck Peninsula',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/cape-st-claire',
    title: 'Cape St. Claire, MD',
    description: 'Trusted locksmith services in Cape St. Claire Community',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/crownsville',
    title: 'Crownsville, MD',
    description: 'Locksmith services in Crownsville, Herald Harbor, and Arden on the Severn',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/eastport',
    title: 'Eastport, MD',
    description: 'Your local locksmith right here in Eastport',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/edgewater',
    title: 'Edgewater, MD',
    description: 'Locksmith services in Edgewater, Mayo, and Woodland Beach',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/edgewater-beach',
    title: 'Edgewater Beach, MD',
    description: 'Waterfront locksmith services in Edgewater Beach and Mayo',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/hillsmere-shores',
    title: 'Hillsmere Shores, MD',
    description: 'Local locksmith services in Hillsmere Shores and Forest Drive',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/mayo',
    title: 'Mayo, MD',
    description: 'Reliable locksmith services in Mayo and South River Communities',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/parole',
    title: 'Parole, MD',
    description: 'Fast locksmith services in Parole, Annapolis Mall Area, and Riva Road',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/riva',
    title: 'Riva, MD',
    description: 'Professional locksmith services in Riva and South River Areas',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/severna-park',
    title: 'Severna Park, MD',
    description: 'Locksmith services in Severna Park, Benfield, and Chartwell',
    lastMod: '2025-03-24',
    priority: '0.8'
  }
];

const servicePages = [
  {
    path: '/services/lock-change',
    title: 'Lock Change Services',
    description: 'Professional lock replacement and installation in Annapolis',
    lastMod: '2025-03-24',
    priority: '0.9'
  },
  {
    path: '/services/lock-rekey',
    title: 'Lock Rekey Services',
    description: 'Affordable lock rekeying for homes and businesses',
    lastMod: '2025-03-24',
    priority: '0.9'
  },
  {
    path: '/services/car-key-programming',
    title: 'Car Key Programming',
    description: 'Mobile car key programming for all makes and models',
    lastMod: '2025-03-24',
    priority: '0.9'
  },
  {
    path: '/services/emergency-lockout',
    title: 'Emergency Lockout Services',
    description: '24/7 emergency lockout help in Annapolis',
    lastMod: '2025-03-24',
    priority: '0.9'
  },
  {
    path: '/services/lock-repair',
    title: 'Lock Repair',
    description: 'Professional lock repair for all types of locks',
    lastMod: '2025-03-24',
    priority: '0.9'
  },
  {
    path: '/services/lost-car-keys',
    title: 'Lost Car Key Replacement',
    description: 'Fast car key replacement service on-site',
    lastMod: '2025-03-24',
    priority: '0.9'
  }
];

const utilityPages = [
  {
    path: '/privacy',
    title: 'Privacy Policy',
    description: 'Our privacy policy and data protection practices',
    lastMod: '2025-03-24',
    priority: '0.3'
  },
  {
    path: '/terms',
    title: 'Terms of Service',
    description: 'Terms and conditions for using our locksmith services',
    lastMod: '2025-03-24',
    priority: '0.3'
  }
];

export default function SitemapPage() {
  const renderPageList = (pages: typeof mainPages, title: string) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-6">
        {pages.map((page) => (
          <div key={page.path} className="border-b pb-4">
            <Link
              to={page.path}
              className="text-xl font-semibold hover:text-primary transition-colors"
            >
              {page.title}
            </Link>
            <p className="text-muted-foreground mt-2">{page.description}</p>
            <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
              <span>Last modified: {page.lastMod}</span>
              <span>Priority: {page.priority}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Sitemap | A Secure Annapolis Locksmith - All Pages</title>
        <meta name="description" content="Browse all pages on A Secure Annapolis Locksmith website. Find locksmith services, service areas, and helpful resources in Annapolis, MD." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.asecureannapolislocksmith.com/sitemap" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asecureannapolislocksmith.com/sitemap" />
        <meta property="og:title" content="Sitemap | A Secure Annapolis Locksmith" />
        <meta property="og:description" content="Browse all pages on our website. Find locksmith services and service areas in Annapolis, MD." />
        <meta property="og:site_name" content="A Secure Annapolis Locksmith" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://www.asecureannapolislocksmith.com/sitemap" />
        <meta property="twitter:title" content="Sitemap | A Secure Annapolis Locksmith" />
        <meta property="twitter:description" content="Browse all pages on our website. Find locksmith services and service areas in Annapolis, MD." />
      </Helmet>

      <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

          {/* XML Sitemap Link */}
          <div className="mb-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">XML Sitemap for Search Engines</h2>
                <p className="text-sm text-gray-600 mt-1">Submit this sitemap to Google Search Console and Bing Webmaster Tools</p>
              </div>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                View XML
              </a>
            </div>
          </div>

          {renderPageList(mainPages, 'Main Pages')}
          {renderPageList(locationPages, 'Service Areas')}
          {renderPageList(servicePages, 'Specialized Services')}
          {renderPageList(utilityPages, 'Legal & Information')}
        </div>
      </div>
    </div>
    </>
  );
}