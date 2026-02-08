'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const routeNames: Record<string, string> = {
  '': 'Home',
  'about': 'About',
  'services': 'Services',
  'testimonials': 'Testimonials',
  'contact': 'Contact',
  'privacy': 'Privacy Policy',
  'terms': 'Terms of Service',
  'sitemap': 'Sitemap'
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter(x => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link 
            href="/" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
              {isLast ? (
                <span className="text-primary font-medium" aria-current="page">
                  {routeNames[name]}
                </span>
              ) : (
                <Link 
                  href={routeTo}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {routeNames[name]}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}