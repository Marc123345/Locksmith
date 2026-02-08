import { Helmet } from 'react-helmet-async';
import { CONTACT } from '@/utils/contact';
import { allReviews, THUMBTACK_URL } from '@/data/reviews';

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
    "alternateName": "A Secure Locksmith",
    "description": "Professional locksmith services in Annapolis, MD and Anne Arundel County. Rated 4.9 stars on Google and Thumbtack. 24/7 emergency lockout service, residential, commercial, and automotive locksmith solutions. Licensed, insured, and locally owned since 2010.",
    "url": "https://www.asecureannapolislocksmith.com",
    "logo": "https://www.asecureannapolislocksmith.com/logo.png",
    "image": [
      "https://www.asecureannapolislocksmith.com/images/locksmith-service.jpg",
      "https://www.asecureannapolislocksmith.com/images/emergency-lockout.jpg",
      "https://www.asecureannapolislocksmith.com/images/lock-installation.jpg",
    ],
    "telephone": CONTACT.PHONE_DISPLAY,
    "email": CONTACT.EMAIL,
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "07:00",
        "closes": "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "07:00",
        "closes": "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "07:00",
        "closes": "14:30",
      },
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Apple Pay", "Square Cash App", "Zelle"],
    "currenciesAccepted": "USD",
    "areaServed": [
      { "@type": "City", "name": "Annapolis", "containedIn": { "@type": "State", "name": "Maryland" } },
      { "@type": "City", "name": "Arnold" },
      { "@type": "City", "name": "Severna Park" },
      { "@type": "City", "name": "Edgewater" },
      { "@type": "City", "name": "Crownsville" },
      { "@type": "City", "name": "Parole" },
      { "@type": "City", "name": "Riva" },
      { "@type": "City", "name": "Mayo" },
      { "@type": "City", "name": "Eastport" },
      { "@type": "City", "name": "Bay Ridge" },
      { "@type": "City", "name": "Hillsmere Shores" },
      { "@type": "City", "name": "Cape St. Claire" },
      { "@type": "City", "name": "Broadneck" },
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.978764,
        "longitude": -76.492786,
      },
      "geoRadius": "25000",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Locksmith Services in Annapolis MD",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Lockout Service in Annapolis",
            "description": "24/7 emergency locksmith service for home, car, and business lockouts in Annapolis, MD and Anne Arundel County",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Locksmith Annapolis",
            "description": "Home lock installation, rekeying, repair, and smart lock upgrades for Annapolis homeowners",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Locksmith Annapolis",
            "description": "Business security systems, master key systems, and access control for Annapolis businesses",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automotive Locksmith Annapolis",
            "description": "Car key replacement, programming, and vehicle lockout service in Annapolis MD",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lock Rekeying Annapolis",
            "description": "Professional lock rekeying service for Annapolis homes and businesses",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lock Change Annapolis",
            "description": "Lock change and new lock installation including deadbolts and smart locks with 3-month warranty",
          },
        },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": String(allReviews.length),
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": schemaReviews,
    "sameAs": [
      THUMBTACK_URL,
      "https://www.facebook.com/asecureannapolis",
      "https://www.yelp.com/biz/a-secure-annapolis-locksmith",
    ],
    "hasMap": "https://www.google.com/maps/place/A+Secure+Annapolis+Locksmith/@38.9726944,-76.4834868,17z",
    "slogan": "Your Trusted Local Locksmith in Annapolis, MD and Anne Arundel County",
    "foundingDate": "2010",
    "founder": {
      "@type": "Person",
      "name": "Yuli Mazor",
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 3,
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
      "Commercial Locksmith",
      "Lock Change",
      "Deadbolt Installation",
      "Car Key Programming",
      "Door Lock Repair",
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Associated Locksmiths of America",
      },
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "name": "Maryland Locksmith License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "State of Maryland",
        },
      },
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "3-Month Warranty on Lock Changes",
        "description": "Every residential and commercial lock change comes with a 3-month warranty. If something isn't right, we make it right at no cost.",
        "warranty": {
          "@type": "WarrantyPromise",
          "durationOfWarranty": {
            "@type": "QuantitativeValue",
            "value": 90,
            "unitCode": "DAY",
          },
        },
      },
    ],
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Response Time", "value": "20 minutes average" },
      { "@type": "PropertyValue", "name": "Emergency Service", "value": "24/7 Available" },
      { "@type": "PropertyValue", "name": "Service Type", "value": "Mobile Locksmith Service" },
      { "@type": "PropertyValue", "name": "Background Check", "value": "All technicians background checked" },
      { "@type": "PropertyValue", "name": "Top Pro Status", "value": "Thumbtack Top Pro 2025" },
    ],
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
