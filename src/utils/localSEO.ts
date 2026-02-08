import { CONTACT } from './contact';

export interface LocalSEOConfig {
  businessName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  serviceAreas: string[];
  socialProfiles: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    yelp?: string;
  };
}

export const LOCAL_SEO_CONFIG: LocalSEOConfig = {
  businessName: 'A Secure Annapolis Locksmith',
  address: {
    street: '222 Severn Ave Ste 1 Building 7-6A',
    city: 'Annapolis',
    state: 'MD',
    zip: '21403',
    country: 'United States'
  },
  phone: CONTACT.PHONE,
  email: CONTACT.EMAIL,
  coordinates: {
    lat: 38.978764,
    lng: -76.492786
  },
  hours: {
    monday: '08:00-20:00',
    tuesday: '08:00-20:00',
    wednesday: '08:00-20:00',
    thursday: '08:00-20:00',
    friday: '08:00-20:00',
    saturday: '08:00-20:00',
    sunday: '00:00-23:59' // Emergency only
  },
  serviceAreas: [
    'Annapolis, MD',
    'Arnold, MD',
    'Severna Park, MD',
    'Edgewater, MD',
    'Crownsville, MD',
    'Parole, MD',
    'Bay Ridge, MD',
    'Hillsmere Shores, MD',
    'Eastport, MD',
    'Riva, MD',
    'Cape St. Claire, MD',
    'Broadneck, MD',
    'Edgewater Beach, MD',
    'Mayo, MD'
  ],
  socialProfiles: {
    facebook: 'https://www.facebook.com/asecureannapolis',
    instagram: 'https://www.instagram.com/asecureannapolis',
    twitter: 'https://www.twitter.com/asecureannapolis',
    linkedin: 'https://www.linkedin.com/company/a-secure-annapolis-locksmith',
    yelp: 'https://www.yelp.com/biz/a-secure-annapolis-locksmith'
  }
};

export function formatNAP(inline: boolean = false): string {
  const { businessName, address, phone } = LOCAL_SEO_CONFIG;

  if (inline) {
    return `${businessName} | ${address.street}, ${address.city}, ${address.state} ${address.zip} | ${phone}`;
  }

  return `${businessName}\n${address.street}\n${address.city}, ${address.state} ${address.zip}\n${phone}`;
}

export function generateGoogleMapsURL(): string {
  const { address } = LOCAL_SEO_CONFIG;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
}

export function generateGoogleMapsEmbedURL(): string {
  const { coordinates } = LOCAL_SEO_CONFIG;
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.8!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU4JzQzLjYiTiA3NsKwMjknMzQuMCJX!5e0!3m2!1sen!2sus!4v1234567890123`;
}

export function generateLocalBusinessJSON() {
  const { businessName, address, phone, email, coordinates, serviceAreas } = LOCAL_SEO_CONFIG;

  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": businessName,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.state,
      "postalCode": address.zip,
      "addressCountry": address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.lat,
      "longitude": coordinates.lng
    },
    "telephone": phone,
    "email": email,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "areaServed": serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "priceRange": "$$"
  };
}

export function generateCitationText(): string {
  const { businessName, address, phone, email } = LOCAL_SEO_CONFIG;

  return `
Business Name: ${businessName}
Address: ${address.street}, ${address.city}, ${address.state} ${address.zip}
Phone: ${phone}
Email: ${email}
Website: https://asecureannapolis.com

Service Areas: ${LOCAL_SEO_CONFIG.serviceAreas.join(', ')}

Description: A Secure Annapolis Locksmith provides professional locksmith services throughout Anne Arundel County, Maryland. We offer 24/7 emergency lockout service, residential locksmith solutions, commercial security systems, and automotive locksmith services. Our licensed and insured technicians serve Annapolis, Arnold, Severna Park, Edgewater, and surrounding areas with fast, reliable service.

Categories: Locksmith, Emergency Locksmith, Residential Locksmith, Commercial Locksmith, Automotive Locksmith, Lock Repair, Key Duplication, Security Systems
  `.trim();
}

export function validateNAPConsistency(
  name: string,
  address: string,
  phone: string
): { isConsistent: boolean; issues: string[] } {
  const issues: string[] = [];
  const { businessName, address: correctAddress, phone: correctPhone } = LOCAL_SEO_CONFIG;

  const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedCorrectName = businessName.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (normalizedName !== normalizedCorrectName) {
    issues.push(`Business name mismatch: "${name}" should be "${businessName}"`);
  }

  const fullAddress = `${correctAddress.street}, ${correctAddress.city}, ${correctAddress.state} ${correctAddress.zip}`;
  const normalizedAddress = address.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedCorrectAddress = fullAddress.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (normalizedAddress !== normalizedCorrectAddress) {
    issues.push(`Address mismatch: "${address}" should be "${fullAddress}"`);
  }

  const normalizedPhone = phone.replace(/[^0-9]/g, '');
  const normalizedCorrectPhone = correctPhone.replace(/[^0-9]/g, '');

  if (normalizedPhone !== normalizedCorrectPhone) {
    issues.push(`Phone mismatch: "${phone}" should be "${correctPhone}"`);
  }

  return {
    isConsistent: issues.length === 0,
    issues
  };
}

export function getLocalKeywords(location?: string, service?: string): string[] {
  const baseKeywords = [
    'locksmith',
    'emergency locksmith',
    '24/7 locksmith',
    'local locksmith',
    'mobile locksmith'
  ];

  const locationKeywords = location
    ? [
        `locksmith ${location}`,
        `locksmith near ${location}`,
        `${location} locksmith`,
        `locksmith in ${location}`
      ]
    : [
        'locksmith Annapolis',
        'locksmith near me',
        'Annapolis locksmith',
        'locksmith in Annapolis MD',
        'Anne Arundel County locksmith'
      ];

  const serviceKeywords = service
    ? [
        `${service} ${location || 'Annapolis'}`,
        `${service} near me`,
        `professional ${service}`
      ]
    : [
        'lock repair',
        'key replacement',
        'lock installation',
        'rekey locks',
        'car lockout',
        'home lockout'
      ];

  return [...baseKeywords, ...locationKeywords, ...serviceKeywords];
}

export const LOCAL_SEO_BEST_PRACTICES = {
  napConsistency: {
    title: 'NAP Consistency',
    description: 'Ensure your business Name, Address, and Phone number are exactly the same across all online platforms',
    checklist: [
      'Google Business Profile',
      'Yelp',
      'Facebook Business Page',
      'Bing Places',
      'Yellow Pages',
      'Local Chamber of Commerce',
      'Industry Directories',
      'Better Business Bureau',
      'Angi (formerly Angie\'s List)',
      'HomeAdvisor'
    ]
  },
  citations: {
    title: 'Local Citations',
    description: 'List your business on relevant local and industry-specific directories',
    importantSites: [
      'Google Business Profile',
      'Bing Places for Business',
      'Apple Maps',
      'Yelp',
      'Facebook',
      'Yellow Pages',
      'Superpages',
      'Local.com',
      'MapQuest',
      'Foursquare'
    ]
  },
  reviews: {
    title: 'Customer Reviews',
    description: 'Encourage satisfied customers to leave reviews on multiple platforms',
    platforms: [
      'Google Business Profile',
      'Yelp',
      'Facebook',
      'Better Business Bureau',
      'Angi',
      'HomeAdvisor',
      'Thumbtack'
    ],
    tips: [
      'Respond to all reviews (positive and negative)',
      'Thank customers for positive reviews',
      'Address negative reviews professionally',
      'Ask for reviews via email after service',
      'Make it easy with direct review links'
    ]
  },
  contentStrategy: {
    title: 'Local Content Strategy',
    description: 'Create location-specific content that resonates with local customers',
    recommendations: [
      'Create pages for each service area',
      'Write about local events and community involvement',
      'Use local landmarks in content',
      'Include local keywords naturally',
      'Add location-specific FAQs',
      'Create case studies from local customers',
      'Publish local locksmith tips and guides'
    ]
  }
};
