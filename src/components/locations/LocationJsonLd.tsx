import Script from 'next/script';
import { CONTACT } from '@/utils/contact';
import type { LocationData } from '@/data/locations';

interface LocationJsonLdProps {
  location: LocationData;
}

const LocationJsonLd = ({ location }: LocationJsonLdProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://asecureannapolislocksmith.com/locations/${location.slug}`,
    name: location.title,
    url: `https://asecureannapolislocksmith.com/locations/${location.slug}`,
    telephone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.ADDRESS.split(',')[0],
      addressLocality: location.name.replace(', MD', ''),
      addressRegion: 'MD',
      postalCode: '21403',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '38.9726944',
      longitude: '-76.4809119',
    },
    areaServed: location.neighborhoods.map(area => ({
      '@type': 'Place',
      name: area,
    })),
    priceRange: '$$',
    openingHoursSpecification: CONTACT.HOURS.map(({ day, hours }) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: hours.split(' - ')[0] === 'Closed' ? undefined : hours.split(' - ')[0],
      closes: hours.split(' - ')[1],
    })).filter(spec => spec.opens),
    sameAs: [
      'https://www.facebook.com/asecureannapolis',
      'https://www.instagram.com/asecureannapolis',
    ],
  };

  return (
    <Script
      id={`location-jsonld-${location.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default LocationJsonLd;
