export interface LocationData {
  id: string;
  name: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  neighborhoods: string[];
  distance: string;
  responseTime: string;
  directions: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  metaTitle: string;
  metaDescription: string;
}

export const locations: LocationData[] = [
  {
    id: 'arnold',
    name: 'Arnold, MD',
    slug: 'arnold',
    title: 'A Secure Annapolis Locksmith in Arnold, MD',
    subtitle: 'Expert Locksmith Services in Arnold, Cape St. Claire, and Bay Hills',
    description: 'A Secure Annapolis Locksmith is the trusted name for professional locksmith services in Arnold, MD. Whether you\'re locked out, need new locks installed, or want to upgrade your home or business security, we\'re the go-to Arnold locksmith for fast, affordable, and licensed service. We proudly serve Arnold, Cape St. Claire, Bay Hills, and the Broadneck Peninsula with expert residential, automotive, and commercial locksmith solutions.',
    neighborhoods: [
      'Arnold',
      'Cape St. Claire',
      'Bay Hills',
      'Broadneck Peninsula',
      'Bay Dale'
    ],
    distance: '5.5 miles',
    responseTime: 'under 30 minutes',
    directions: [
      'Head south on MD-2 (Ritchie Hwy) toward Annapolis',
      'Turn left onto Rowe Blvd',
      'Continue onto Duke of Gloucester St',
      'Turn right onto Severn Ave',
      'We\'re located at 222 Severn Ave Ste 1 Building 7-6A, near Eastport'
    ],
    faqs: [
      {
        question: 'How fast can a locksmith arrive in Arnold, MD?',
        answer: 'Our mobile locksmiths are based in Annapolis and typically reach Arnold in under 30 minutes.'
      },
      {
        question: 'Do you offer 24-hour locksmith services in Arnold?',
        answer: 'Yes. We provide emergency locksmith services in Arnold, MD 24/7 — including nights, weekends, and holidays.'
      },
      {
        question: 'Can I book a locksmith in Arnold online?',
        answer: 'Yes! Use our online contact form to schedule service or request a free quote.'
      },
      {
        question: 'What kinds of locks do you install?',
        answer: 'We install traditional deadbolts, smart locks, high-security systems, keypad locks, and more.'
      }
    ],
    metaTitle: 'Locksmith in Arnold, MD | A Secure Annapolis Locksmith',
    metaDescription: 'Fast, affordable locksmith services in Arnold, MD. Serving Cape St. Claire, Bay Hills & Broadneck Peninsula. 24/7 emergency service. Call (410) 849-6069.'
  },
  {
    id: 'edgewater',
    name: 'Edgewater, MD',
    slug: 'edgewater',
    title: 'A Secure Annapolis Locksmith in Edgewater, MD',
    subtitle: 'Professional Locksmith Services in Edgewater, Mayo, and Woodland Beach',
    description: 'Looking for a licensed and reliable locksmith in Edgewater, MD? A Secure Annapolis Locksmith provides fast, professional locksmith services for homes, businesses, and vehicles throughout Edgewater, Mayo, and Woodland Beach. As a locally owned and operated business, we understand the urgency of lockouts and the importance of security.',
    neighborhoods: [
      'Edgewater',
      'Mayo',
      'Woodland Beach',
      'South River Colony',
      'Southern Anne Arundel County'
    ],
    distance: '6 miles',
    responseTime: '20–30 minutes',
    directions: [
      'Take MD-2 N over the South River Bridge',
      'Merge onto Rowe Blvd, then Duke of Gloucester St',
      'Right on Severn Ave to 222 Severn Ave Ste 1 Building 7-6A'
    ],
    faqs: [
      {
        question: 'Are you a mobile locksmith in Edgewater?',
        answer: 'Yes, we are 100% mobile and cover all of Edgewater and southern Anne Arundel County.'
      },
      {
        question: 'Do you handle keyless entry systems?',
        answer: 'Absolutely. We install and service all smart lock brands and access control systems.'
      },
      {
        question: 'How soon can you get here?',
        answer: 'We typically respond within 20–30 minutes of your call in the Edgewater area.'
      }
    ],
    metaTitle: 'Locksmith in Edgewater, MD | Fast & Reliable Service',
    metaDescription: 'Professional locksmith services in Edgewater, Mayo & Woodland Beach. Same-day service, 24/7 emergency lockouts. Licensed & insured. Call (410) 849-6069.'
  },
  {
    id: 'severna-park',
    name: 'Severna Park, MD',
    slug: 'severna-park',
    title: 'A Secure Annapolis Locksmith in Severna Park, MD',
    subtitle: 'Fast & Affordable Locksmith Services in Severna Park, Benfield, and Chartwell',
    description: 'When you need a trusted locksmith in Severna Park, MD, A Secure Annapolis Locksmith is the local name you can count on. We provide fast, professional locksmith services for homes, cars, and businesses across Severna Park, Benfield, Chartwell, and surrounding neighborhoods. Whether it\'s a lockout, rekey, or security upgrade, we\'re just minutes away with mobile service available 7 days a week.',
    neighborhoods: [
      'Severna Park',
      'Benfield',
      'Chartwell',
      'Surrounding Neighborhoods'
    ],
    distance: '9 miles',
    responseTime: '20–30 minutes',
    directions: [
      'Take MD-2 S to Annapolis',
      'Continue to Rowe Blvd > Duke of Gloucester',
      'Right onto Severn Ave'
    ],
    faqs: [
      {
        question: 'How quickly can you respond?',
        answer: 'Usually within 20–30 minutes in Severna Park.'
      },
      {
        question: 'Do you work on high-security locks?',
        answer: 'Yes — we install and service all major brands, including smart and biometric systems.'
      }
    ],
    metaTitle: 'Locksmith in Severna Park, MD | Trusted Local Service',
    metaDescription: 'Reliable locksmith services in Severna Park, Benfield & Chartwell. Residential, automotive & commercial locksmith. Available 7 days. Call (410) 849-6069.'
  },
  {
    id: 'crownsville',
    name: 'Crownsville, MD',
    slug: 'crownsville',
    title: 'A Secure Annapolis Locksmith in Crownsville, MD',
    subtitle: 'Local Locksmith Services in Crownsville, Herald Harbor, and Arden on the Severn',
    description: 'At A Secure Annapolis Locksmith, we provide dependable locksmith services in Crownsville, MD for residential, automotive, and commercial needs. From Herald Harbor to Arden on the Severn, our mobile locksmiths offer quick and affordable solutions 7 days a week.',
    neighborhoods: [
      'Crownsville',
      'Herald Harbor',
      'Arden on the Severn'
    ],
    distance: '10 miles',
    responseTime: '7 days a week',
    directions: [
      'Head southeast on Crownsville Rd',
      'Merge onto US-50 E',
      'Exit onto Rowe Blvd',
      'Continue to Severn Ave in Annapolis'
    ],
    faqs: [
      {
        question: 'Are you available on weekends?',
        answer: 'Yes — we serve Crownsville 7 days a week.'
      },
      {
        question: 'Do you install digital door locks?',
        answer: 'Absolutely — from Schlage to August and Yale, we handle them all.'
      }
    ],
    metaTitle: 'Locksmith in Crownsville, MD | Local Expert Service',
    metaDescription: 'Dependable locksmith in Crownsville, Herald Harbor & Arden on the Severn. Residential, auto & commercial locks. 7 days a week. Call (410) 849-6069.'
  }
];

export const getLocationBySlug = (slug: string): LocationData | undefined => {
  return locations.find(loc => loc.slug === slug);
};
