import React from 'react';
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
    path: '/locations/arnold',
    title: 'Arnold, MD',
    description: 'Locksmith services in Arnold, Cape St. Claire, and Bay Hills',
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
    path: '/locations/severna-park',
    title: 'Severna Park, MD',
    description: 'Locksmith services in Severna Park, Benfield, and Chartwell',
    lastMod: '2025-03-24',
    priority: '0.8'
  },
  {
    path: '/locations/crownsville',
    title: 'Crownsville, MD',
    description: 'Locksmith services in Crownsville, Herald Harbor, and Arden on the Severn',
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
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

          {renderPageList(mainPages, 'Main Pages')}
          {renderPageList(locationPages, 'Service Areas')}
          {renderPageList(servicePages, 'Specialized Services')}
          {renderPageList(utilityPages, 'Legal & Information')}
        </div>
      </div>
    </div>
  );
}