import { Helmet } from 'react-helmet-async';
import { allReviews, THUMBTACK_URL, GOOGLE_BUSINESS_URL } from '@/data/reviews';

interface LocalBusinessSchemaProps {
  page?: 'home' | 'location' | 'service';
  locationName?: string;
  serviceName?: string;
}

function reviewToSchemaDate(dateStr: string): string {
  if (/^\w+ \d{4}$/.test(dateStr)) {
    const [month, year] = dateStr.split(' ');
    const monthMap: Record<string, string> = {
      Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
      Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
    };
    return `${year}-${monthMap[month] || '01'}-01`;
  }
  if (dateStr.includes('month')) return '2025-08-01';
  if (dateStr.includes('year')) return '2024-08-01';
  return '2024-01-01';
}

export default function LocalBusinessSchema({ page = 'home', locationName }: LocalBusinessSchemaProps) {
  const schemaReviews = allReviews.map((r) => ({
    "@type": "Review" as const,
    "author": { "@type": "Person" as const, "name": r.name },
    "datePublished": reviewToSchemaDate(r.date),
    "reviewBody": r.testimonial,
    "reviewRating": {
      "@type": "Rating" as const,
      "ratingValue": String(r.rating),
      "bestRating": "5",
    },
  }));

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": "https://www.asecureannapolislocksmith.com/#locksmith",
    "name": "A Secure Annapolis Locksmith",
    "url": "https://www.asecureannapolislocksmith.com/",
    "image": "https://www.asecureannapolislocksmith.com/path-to-your-logo.png",
    "description": "Licensed, insured Annapolis locksmith providing residential, commercial and automotive locksmith services with 20-minute response times across Anne Arundel County.",
    "telephone": "+1-410-849-6069",
    "email": "asecureannapolislocksmithllc@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "222 Severn Ave Ste 1 Building 7-6A",
      "addressLocality": "Annapolis",
      "addressRegion": "MD",
      "postalCode": "21403",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.978764,
      "longitude": -76.492786,
    },
    "areaServed": [
      { "@type": "City", "name": "Annapolis" },
      { "@type": "AdministrativeArea", "name": "Anne Arundel County" },
      { "@type": "Place", "name": "Eastport, MD" },
      { "@type": "Place", "name": "Severna Park, MD" },
      { "@type": "Place", "name": "Arnold, MD" },
      { "@type": "Place", "name": "Edgewater, MD" },
      { "@type": "Place", "name": "Bay Ridge, MD" },
      { "@type": "Place", "name": "Hillsmere Shores, MD" },
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday"],
        "opens": "07:00",
        "closes": "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "07:00",
        "closes": "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "07:00",
        "closes": "15:00",
      },
    ],
    "foundingDate": "2010",
    "founder": {
      "@type": "Person",
      "name": "Royi Mazor",
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Royi Mazor",
      },
    ],
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "Anne Arundel County, Maryland",
    },
    "sameAs": [
      GOOGLE_BUSINESS_URL,
      THUMBTACK_URL,
      "https://www.mapquest.com/us/maryland/a-secure-annapolis-locksmith-778450963",
      "https://www.bbb.org/us/md/annapolis/profile/locksmith/a-secure-annapolis-locksmith-llc-0011-90336421",
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
                "areaServed": "Annapolis, MD",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lock Change & Rekey",
                "areaServed": "Annapolis, MD",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Deadbolt & Smart Lock Installation",
                "areaServed": "Annapolis, MD",
              },
            },
          ],
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
                "areaServed": "Anne Arundel County, MD",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-Security Lock Installation",
                "areaServed": "Anne Arundel County, MD",
              },
            },
          ],
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
                "areaServed": "Annapolis, MD",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Vehicle Unlocking",
                "areaServed": "Annapolis, MD",
              },
            },
          ],
        },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "60",
    },
    "review": schemaReviews,
  };

  if (locationName && page === 'location') {
    baseSchema.areaServed = [
      { "@type": "City", "name": locationName } as any,
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
