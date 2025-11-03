export interface ServiceData {
  id: string;
  name: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  serviceAreas: string[];
  heroImage?: string;
  contentImage?: string;
  processSteps?: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    id: 'lock-change',
    name: 'Lock Change Services',
    slug: 'lock-change',
    title: 'Professional Lock Change Services in Annapolis, MD',
    subtitle: 'Trusted Lock Replacement & Installation in Eastport, Hillsmere Shores, and Parole',
    description: 'When it\'s time to replace or upgrade your locks, trust A Secure Annapolis Locksmith — your local expert for lock change services in Annapolis, MD. Whether you\'ve just moved into a new home, experienced a security concern, or want to install high-security or smart locks, we\'ve got you covered. We proudly serve Annapolis, Eastport, Hillsmere Shores, Parole, and surrounding communities.',
    heroImage: 'https://images.pexels.com/photos/277593/pexels-photo-277593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    contentImage: 'https://images.pexels.com/photos/4464483/pexels-photo-4464483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      'Deadbolt and door knob locks',
      'Smart and keyless entry locks',
      'High-security lock systems',
      'Commercial-grade locks',
      'Mailbox, gate, and garage locks'
    ],
    serviceAreas: ['Annapolis', 'Eastport', 'Hillsmere Shores', 'Parole'],
    faqs: [
      {
        question: 'How long does a lock change take?',
        answer: 'Most residential lock changes are completed within 30–60 minutes.'
      },
      {
        question: 'Can you supply new locks?',
        answer: 'Yes, we carry standard, high-security, and smart locks from leading brands.'
      },
      {
        question: 'Do you offer commercial lock changes?',
        answer: 'Absolutely! We service offices, retail spaces, and property management companies.'
      }
    ],
    metaTitle: 'Lock Change Services in Annapolis, MD | A Secure Annapolis Locksmith',
    metaDescription: 'Professional lock replacement & installation in Annapolis. Smart locks, deadbolts & high-security systems. Same-day service. Call (410) 849-6069.'
  },
  {
    id: 'lock-rekey',
    name: 'Lock Rekey Services',
    slug: 'lock-rekey',
    title: 'Lock Rekeying in Annapolis, MD',
    subtitle: 'Affordable Rekeying for Homes, Apartments, and Businesses in Eastport, Parole, and Murray Hill',
    description: 'Rekeying is the simplest way to restore security and peace of mind without replacing all your locks. A Secure Annapolis Locksmith specializes in lock rekey services in Annapolis, MD, helping homeowners, landlords, and businesses stay protected. When you rekey a lock, we adjust the internal pins so that old keys no longer work.',
    heroImage: 'https://images.pexels.com/photos/277574/pexels-photo-277574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    contentImage: 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      'Cost-effective alternative to lock replacement',
      'Fast service — usually 10–15 minutes per lock',
      'Works with all major brands (Schlage, Kwikset, Yale, Baldwin)',
      'Master key systems available',
      'Same-day mobile service'
    ],
    serviceAreas: ['Annapolis', 'Eastport', 'Parole', 'Murray Hill'],
    processSteps: [
      {
        title: 'You\'ve moved into a new home or office',
        description: 'Ensure previous owners or tenants can\'t access your property'
      },
      {
        title: 'You lost your keys or they were stolen',
        description: 'Restore security immediately without replacing hardware'
      },
      {
        title: 'You\'ve had staff or tenant turnover',
        description: 'Maintain control over who has access to your property'
      },
      {
        title: 'You want all doors to open with one master key',
        description: 'Simplify access with a master key system'
      }
    ],
    faqs: [
      {
        question: 'What\'s the difference between rekeying and replacing a lock?',
        answer: 'Rekeying keeps your existing hardware but gives you new keys — faster and cheaper than replacement.'
      },
      {
        question: 'How long does rekeying take?',
        answer: 'Usually 10–15 minutes per lock.'
      },
      {
        question: 'Can you rekey smart locks?',
        answer: 'Yes, when supported by the manufacturer.'
      }
    ],
    metaTitle: 'Lock Rekey Services in Annapolis, MD | Fast & Affordable',
    metaDescription: 'Professional lock rekeying in Annapolis. Cost-effective security upgrade. 10-15 minutes per lock. Master key systems available. Call (410) 849-6069.'
  },
  {
    id: 'car-key-programming',
    name: 'Car Key Programming',
    slug: 'car-key-programming',
    title: 'Car Key Programming in Annapolis, MD',
    subtitle: 'Mobile Auto Locksmith Services for Key Fobs, Smart Keys & Transponders',
    description: 'If your key fob stopped working or you\'ve purchased a replacement that needs syncing, A Secure Annapolis Locksmith offers mobile car key programming in Annapolis, MD. We program and replace car keys for most makes and models — right where you are, no towing required. Our expert locksmiths are trained to handle transponders, remote key fobs, and push-to-start smart keys.',
    heroImage: 'https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    contentImage: 'https://images.pexels.com/photos/6068955/pexels-photo-6068955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      'Domestic vehicles (Ford, Chevy, Dodge)',
      'Imports (Toyota, Honda, Nissan, Hyundai)',
      'Luxury brands (BMW, Lexus, Audi, Mercedes)',
      'Keyless entry and proximity smart keys',
      'On-site service in 30–45 minutes'
    ],
    serviceAreas: ['Annapolis', 'Parole', 'Eastport', 'Hillsmere Shores'],
    faqs: [
      {
        question: 'Can you program a key without the original?',
        answer: 'Yes — we can create and program a new key using your vehicle\'s VIN.'
      },
      {
        question: 'How long does programming take?',
        answer: 'Usually 30–45 minutes per key.'
      },
      {
        question: 'Do you handle all makes and models?',
        answer: 'We cover most domestic, import, and luxury vehicles. Call to confirm availability.'
      }
    ],
    metaTitle: 'Car Key Programming in Annapolis, MD | Mobile Service',
    metaDescription: 'Mobile car key programming in Annapolis. Key fobs, transponders & smart keys. Most makes & models. No towing needed. Call (410) 849-6069.'
  },
  {
    id: 'emergency-lockout',
    name: 'Emergency House Lockout',
    slug: 'emergency-lockout',
    title: 'Emergency House Lockout Services in Annapolis, MD',
    subtitle: 'Fast & Reliable Emergency Locksmith Help in Eastport, Murray Hill, and Downtown Annapolis',
    description: 'At A Secure Annapolis Locksmith, we specialize in emergency house lockout services in Annapolis, MD and surrounding areas. Whether you misplaced your keys, left them inside, or experienced a malfunctioning lock, our licensed technicians respond quickly — day or night. We understand how stressful it is to be locked out of your home.',
    heroImage: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    contentImage: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      'Rapid Response – 24/7 Availability',
      'Non-Destructive Entry',
      'Smart Lock & Keypad Unlocks',
      'On-the-Spot Rekeying or Lock Replacement',
      'Arrives in 30 minutes or less'
    ],
    serviceAreas: [
      'Eastport',
      'Historic Downtown Annapolis',
      'Murray Hill',
      'Admiral Heights',
      'Hillsmere Shores',
      'Bay Ridge',
      'Forest Drive Corridor'
    ],
    processSteps: [
      {
        title: '24/7 Emergency Response',
        description: 'Our team is on standby around the clock to respond to your emergency — including holidays and weekends.'
      },
      {
        title: 'Non-Destructive Entry',
        description: 'We use professional lock-picking tools and bypass techniques to unlock your door without damage.'
      },
      {
        title: 'Smart Lock Troubleshooting',
        description: 'We handle smart locks, keypad systems, and high-security locks with specialized tools.'
      },
      {
        title: 'Optional Security Upgrade',
        description: 'We can rekey or replace your locks on the spot if needed for added security.'
      }
    ],
    faqs: [
      {
        question: 'How long does it take for a locksmith to arrive in an emergency?',
        answer: 'In most cases, we arrive in 20–30 minutes to any Annapolis location.'
      },
      {
        question: 'Will the lock or door be damaged during entry?',
        answer: 'No, our trained technicians use non-destructive methods first. We only drill as a last resort.'
      },
      {
        question: 'Can you rekey my locks after letting me in?',
        answer: 'Absolutely. We can rekey or replace your locks on the spot for added security.'
      },
      {
        question: 'Do you service smart locks during lockouts?',
        answer: 'Yes! We handle smart locks, keypads, and electronic deadbolts during emergency house lockouts.'
      }
    ],
    metaTitle: 'Emergency Lockout Service in Annapolis, MD | 24/7 Help',
    metaDescription: '24/7 emergency house lockout service in Annapolis. Fast response in 20-30 minutes. Non-destructive entry. Licensed & insured. Call (410) 849-6069 now.'
  },
  {
    id: 'lock-repair',
    name: 'Lock Repair Services',
    slug: 'lock-repair',
    title: 'Lock Repair Services in Annapolis, MD',
    subtitle: 'Reliable Lock Repair for Homes & Businesses in Eastport, Bay Ridge, and Downtown Annapolis',
    description: 'Is your door lock sticking, spinning, or completely broken? At A Secure Annapolis Locksmith, we offer fast, affordable lock repair services in Annapolis, MD, for homes, apartments, condos, and businesses. From worn-out deadbolts to malfunctioning smart locks, we repair all types of locks using professional tools and industry-best practices.',
    heroImage: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    contentImage: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      'Deadbolts',
      'Smart Locks & Keypad Locks',
      'Mortise & Rim Locks',
      'Door Knob Locks',
      'High-Security Locks',
      'Mailbox & Cabinet Locks'
    ],
    serviceAreas: ['Annapolis', 'Eastport', 'Bay Ridge', 'Historic Downtown', 'Murray Hill'],
    faqs: [
      {
        question: 'Can you repair smart locks or keypads?',
        answer: 'Yes — we repair and reset most major smart lock brands.'
      },
      {
        question: 'Is it better to repair or replace a broken lock?',
        answer: 'If the lock\'s structure is intact, we can often repair it. If not, we\'ll recommend a replacement.'
      },
      {
        question: 'How fast can you respond to lock repair calls?',
        answer: 'We typically arrive within 20–30 minutes for lock repair service in Annapolis.'
      }
    ],
    metaTitle: 'Lock Repair in Annapolis, MD | Fast & Professional Service',
    metaDescription: 'Professional lock repair in Annapolis. Deadbolts, smart locks & high-security systems. Same-day service. Licensed locksmith. Call (410) 849-6069.'
  },
  {
    id: 'lost-car-keys',
    name: 'Lost Car Key Replacement',
    slug: 'lost-car-keys',
    title: 'Lost Car Key Replacement in Annapolis, MD',
    subtitle: 'Mobile Car Key Services in Annapolis, Parole, and Hillsmere Shores',
    description: 'Losing your car keys is stressful — but replacing them doesn\'t have to be. A Secure Annapolis Locksmith offers fast, affordable lost car key replacement in Annapolis, MD, and surrounding areas. Our fully mobile locksmiths can cut and program keys for most vehicles, right at your location — no towing, no dealerships, no long waits.',
    heroImage: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    contentImage: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    features: [
      'Domestic cars (Ford, Chevy, Chrysler, etc.)',
      'Imports (Toyota, Honda, Nissan, etc.)',
      'Luxury vehicles (BMW, Audi, Lexus)',
      'Push-to-start & keyless entry systems',
      'Older models with manual keys'
    ],
    serviceAreas: ['Annapolis', 'Parole', 'Hillsmere Shores'],
    faqs: [
      {
        question: 'Can you replace my key without the original?',
        answer: 'Yes — we can create a new key from scratch using your vehicle\'s VIN and our programming tools.'
      },
      {
        question: 'Do you program key fobs and remotes?',
        answer: 'Yes, we carry and program a wide range of OEM and aftermarket key fobs.'
      },
      {
        question: 'How long does the process take?',
        answer: 'Most keys are cut and programmed within 30–45 minutes.'
      }
    ],
    metaTitle: 'Lost Car Key Replacement in Annapolis, MD | Mobile Service',
    metaDescription: 'Lost your car keys? Mobile car key replacement in Annapolis. Cut & program on-site in 30-45 minutes. Most makes & models. Call (410) 849-6069.'
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return services.find(svc => svc.slug === slug);
};
