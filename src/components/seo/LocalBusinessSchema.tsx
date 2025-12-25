import { Helmet } from 'react-helmet-async';
import { CONTACT } from '@/utils/contact';

interface LocalBusinessSchemaProps {
  page?: 'home' | 'location' | 'service';
  locationName?: string;
  serviceName?: string;
}

export default function LocalBusinessSchema({ page = 'home', locationName, serviceName }: LocalBusinessSchemaProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": "https://asecureannapolis.com/#locksmith",
    "name": "A Secure Annapolis Locksmith",
    "alternateName": "A Secure Locksmith",
    "description": "Professional locksmith services in Annapolis, MD and Anne Arundel County. 24/7 emergency lockout service, residential, commercial, and automotive locksmith solutions.",
    "url": "https://asecureannapolis.com",
    "logo": "https://asecureannapolis.com/logo.png",
    "image": [
      "https://asecureannapolis.com/images/locksmith-service.jpg",
      "https://asecureannapolis.com/images/emergency-lockout.jpg",
      "https://asecureannapolis.com/images/lock-installation.jpg"
    ],
    "telephone": CONTACT.PHONE,
    "email": CONTACT.EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "222 Severn Ave Ste 1 Building 7-6A",
      "addressLocality": "Annapolis",
      "addressRegion": "MD",
      "postalCode": "21403",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.978764,
      "longitude": -76.492786
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "23:59",
        "description": "Emergency Services Only"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Visa", "Mastercard", "American Express", "Discover"],
    "currenciesAccepted": "USD",
    "areaServed": [
      {
        "@type": "City",
        "name": "Annapolis",
        "containedIn": {
          "@type": "State",
          "name": "Maryland"
        }
      },
      {
        "@type": "City",
        "name": "Arnold"
      },
      {
        "@type": "City",
        "name": "Severna Park"
      },
      {
        "@type": "City",
        "name": "Edgewater"
      },
      {
        "@type": "City",
        "name": "Crownsville"
      },
      {
        "@type": "City",
        "name": "Parole"
      },
      {
        "@type": "City",
        "name": "Riva"
      },
      {
        "@type": "City",
        "name": "Mayo"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.978764,
        "longitude": -76.492786
      },
      "geoRadius": "25000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Locksmith Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Lockout Service",
            "description": "24/7 emergency locksmith service for home, car, and business lockouts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Locksmith",
            "description": "Home lock installation, rekeying, repair, and smart lock upgrades"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Locksmith",
            "description": "Business security systems, master key systems, and access control"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automotive Locksmith",
            "description": "Car key replacement, programming, and vehicle lockout service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lock Rekeying",
            "description": "Professional lock rekeying service for enhanced security"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lock Installation",
            "description": "New lock installation including deadbolts and smart locks"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "60",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Mitchell"
        },
        "datePublished": "2024-10-15",
        "reviewBody": "Quick response time and professional service. They rekeyed all my locks after moving into my new home in Annapolis. Highly recommend!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "John Anderson"
        },
        "datePublished": "2024-09-22",
        "reviewBody": "Locked out of my car at the Annapolis Mall. They arrived in 15 minutes and had me back in my car quickly. Great service!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Emily Thompson"
        },
        "datePublished": "2024-08-30",
        "reviewBody": "Professional and efficient. Installed smart locks throughout our Severna Park home. The technician was knowledgeable and thorough.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ],
    "sameAs": [
      "https://www.facebook.com/asecureannapolis",
      "https://www.instagram.com/asecureannapolis",
      "https://www.yelp.com/biz/a-secure-annapolis-locksmith",
      "https://www.linkedin.com/company/a-secure-annapolis-locksmith"
    ],
    "hasMap": "https://www.google.com/maps/place/222+Severn+Ave,+Annapolis,+MD+21403",
    "slogan": "Your Trusted Local Locksmith in Anne Arundel County",
    "foundingDate": "2008",
    "founder": {
      "@type": "Person",
      "name": "A Secure Annapolis Locksmith"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 5
    },
    "knowsAbout": [
      "Locksmith Services",
      "Emergency Lockout",
      "Lock Rekeying",
      "Key Duplication",
      "Smart Locks",
      "High Security Locks",
      "Master Key Systems",
      "Access Control",
      "Automotive Locksmith",
      "Residential Locksmith",
      "Commercial Locksmith"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Associated Locksmiths of America"
      }
    ]
  };

  // Add location-specific information if provided
  if (locationName && page === 'location') {
    baseSchema.areaServed = [
      {
        "@type": "City",
        "name": locationName
      }
    ];
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
    </Helmet>
  );
}
