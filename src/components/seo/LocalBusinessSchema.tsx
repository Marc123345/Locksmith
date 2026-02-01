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
          "name": "Jen Jamison"
        },
        "datePublished": "2024-08-01",
        "reviewBody": "Dispatch was courteous and super helpful, I knew the price and the time my tech was expected to arrive. I was at work and had lost my only key to my vehicle, and commute across the bridge for work so I was panicked.",
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
          "name": "Malorie"
        },
        "datePublished": "2024-09-01",
        "reviewBody": "I highly recommend A Secure Annapolis Locksmith! They were by far the most responsive and efficient company I spoke to when I needed to replace my lock. Very easy to work with and reasonably priced.",
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
          "name": "Emma Cutler"
        },
        "datePublished": "2024-03-01",
        "reviewBody": "Thank you for offering such a great service for my son! Finding a company that actually called back and went the extra mile to accommodate our needs was such a relief. Professional, courteous and speedy.",
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
      "https://www.twitter.com/asecureannapolis",
      "https://www.yelp.com/biz/a-secure-annapolis-locksmith",
      "https://www.linkedin.com/company/a-secure-annapolis-locksmith"
    ],
    "hasMap": "https://www.google.com/maps/place/222+Severn+Ave,+Annapolis,+MD+21403",
    "slogan": "Your Trusted Local Locksmith in Anne Arundel County",
    "foundingDate": "2010",
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
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "name": "Maryland Locksmith License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "State of Maryland"
        }
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Satisfaction Guarantee",
        "description": "We stand behind our workmanship. If the lock isn't fixed right, we make it right.",
        "warranty": {
          "@type": "WarrantyPromise",
          "durationOfWarranty": {
            "@type": "QuantitativeValue",
            "value": 90,
            "unitCode": "DAY"
          }
        }
      }
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Response Time",
        "value": "20 minutes average"
      },
      {
        "@type": "PropertyValue",
        "name": "Emergency Service",
        "value": "24/7 Available"
      },
      {
        "@type": "PropertyValue",
        "name": "Service Type",
        "value": "Mobile Locksmith Service"
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
