import type { LocationData } from '@/data/locations';

interface Props {
  location: LocationData;
}

export default function LocationJsonLd({ location }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://asecureannapolislocksmith.com/locations/${location.slug}`,
    name: 'A Secure Annapolis Locksmith',
    description: location.description,
    url: `https://asecureannapolislocksmith.com/locations/${location.slug}`,
    telephone: '+14108496069',
    email: 'info@asecureannapolislocksmith.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '222 Severn Ave Ste 1 Building 7-6A',
      addressLocality: 'Annapolis',
      addressRegion: 'MD',
      postalCode: '21403',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.9784,
      longitude: -76.4922,
    },
    areaServed: {
      '@type': 'Place',
      name: location.name,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    image: location.heroImage ?? 'https://asecureannapolislocksmith.com/images/og-image.jpg',
    sameAs: [
      'https://www.facebook.com/asecureannapolislocksmith',
      'https://www.google.com/maps?cid=asecureannapolislocksmith',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
