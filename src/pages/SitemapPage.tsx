import React from 'react';
import { Link } from 'react-router-dom';

const pages = [
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
  },
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
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
          <div className="space-y-8">
            {pages.map((page) => (
              <div key={page.path} className="border-b pb-6">
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
      </div>
    </div>
  );
}