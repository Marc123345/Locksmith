import { CONTACT } from '@/utils/contact';

interface LocalBusinessSchemaProps {
  page?: 'home' | 'location' | 'service';
  locationName?: string;
  serviceName?: string;
}

export default function LocalBusinessSchema({ page = 'home', locationName }: LocalBusinessSchemaProps) {
  const baseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": "https://www.asecureannapolislocksmith.com/#locksmith",
    "name": "A Secure Annapolis Locksmith",
    "url": "https://www.asecureannapolislocksmith.com/",
    "image": "https://i.imgur.com/VfpMzbE.png",
    "logo": "https://i.imgur.com/VfpMzbE.png",
    "description": "Licensed, insured Annapolis locksmith providing residential, commercial and automotive locksmith services across Anne Arundel County. Serving Annapolis since 2010.",
    "telephone": "+1-410-849-6069",
    "email": CONTACT.EMAIL,
    "priceRange": "$$",
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
      "latitude": 38.9729,
      "longitude": -76.4810
    },
    "areaServed": [
      { "@type": "City", "name": "Annapolis" },
      { "@type": "AdministrativeArea", "name": "Anne Arundel County" },
      { "@type": "Place", "name": "Eastport, MD" },
      { "@type": "Place", "name": "Severna Park, MD" },
      { "@type": "Place", "name": "Arnold, MD" },
      { "@type": "Place", "name": "Edgewater, MD" },
      { "@type": "Place", "name": "Bay Ridge, MD" },
      { "@type": "Place", "name": "Hillsmere Shores, MD" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "07:00",
        "closes": "14:30"
      }
    ],
    "foundingDate": "2010",
    "founder": {
      "@type": "Person",
      "name": "Royi Mazor"
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Royi Mazor"
      }
    ],
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "Anne Arundel County, Maryland"
    },
    "sameAs": [
      "https://share.google/UOdXHMKaPxcOtZ9vw",
      "https://www.thumbtack.com/md/annapolis/locksmiths/secure-annapolis-locksmith/service/550518270306156552",
      "https://www.mapquest.com/us/maryland/a-secure-annapolis-locksmith-778450963",
      "https://www.bbb.org/us/md/annapolis/profile/locksmith/a-secure-annapolis-locksmith-llc-0011-90336421"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Locksmith Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Residential Locksmith",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency House Lockout",
                "areaServed": "Annapolis, MD"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lock Change & Rekey",
                "areaServed": "Annapolis, MD"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Deadbolt & Smart Lock Installation",
                "areaServed": "Annapolis, MD"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Commercial Locksmith",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Master Key Systems",
                "areaServed": "Anne Arundel County, MD"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-Security Lock Installation",
                "areaServed": "Anne Arundel County, MD"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Automotive Locksmith",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Car Key Replacement & Programming",
                "areaServed": "Annapolis, MD"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Vehicle Unlocking",
                "areaServed": "Annapolis, MD"
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100"
    }
  };

  if (locationName && page === 'location') {
    baseSchema.areaServed = [
      { "@type": "City", "name": locationName }
    ];
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}
