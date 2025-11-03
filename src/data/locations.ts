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
  heroImage?: string;
  contentImage?: string;
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
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
  },
  {
    id: 'annapolis',
    name: 'Annapolis, MD',
    slug: 'annapolis',
    title: 'A Secure Annapolis Locksmith in Annapolis, MD',
    subtitle: 'Professional Locksmith Services in Downtown Annapolis, Eastport, and Hillsmere Shores',
    description: 'A Secure Annapolis Locksmith is your trusted local locksmith serving Annapolis, MD and surrounding neighborhoods. Whether you need emergency lockout service, lock installation, rekeying, or automotive locksmith solutions, we provide fast, reliable, and affordable service throughout the greater Annapolis area. As a locally owned and operated business based right here in Annapolis, we understand the unique security needs of our community.',
    heroImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    neighborhoods: [
      'Downtown Annapolis',
      'Eastport',
      'Hillsmere Shores',
      'Parole',
      'Murray Hill',
      'Bay Ridge',
      'Admiral Heights'
    ],
    distance: 'Local - Based in Annapolis',
    responseTime: '15–25 minutes',
    directions: [
      'We\'re located in Eastport at 222 Severn Ave Ste 1 Building 7-6A',
      'From Downtown Annapolis, cross Spa Creek Bridge',
      'Turn right onto Severn Ave',
      'We\'re on the right side near the waterfront'
    ],
    faqs: [
      {
        question: 'How fast can you respond in Annapolis?',
        answer: 'Since we\'re based in Annapolis, we typically arrive within 15–25 minutes to most locations in the city.'
      },
      {
        question: 'Do you serve all Annapolis neighborhoods?',
        answer: 'Yes, we serve all of Annapolis including Downtown, Eastport, Parole, Murray Hill, Bay Ridge, and surrounding areas.'
      },
      {
        question: 'Are you available for emergency lockouts?',
        answer: 'Absolutely. We offer 24/7 emergency locksmith services throughout Annapolis, MD.'
      },
      {
        question: 'Do you install smart locks in Annapolis homes?',
        answer: 'Yes, we install and service all major smart lock brands including August, Schlage, Yale, and Kwikset.'
      }
    ],
    metaTitle: 'Locksmith in Annapolis, MD | Local 24/7 Service',
    metaDescription: 'Expert locksmith services in Annapolis, MD. Residential, commercial & automotive. Emergency lockouts, rekeying, smart locks. Local & licensed. Call (410) 849-6069.'
  },
  {
    id: 'parole',
    name: 'Parole, MD',
    slug: 'parole',
    title: 'A Secure Annapolis Locksmith in Parole, MD',
    subtitle: 'Fast Locksmith Services in Parole, Annapolis Mall Area, and Riva Road',
    description: 'Need a locksmith in Parole, MD? A Secure Annapolis Locksmith provides prompt, professional locksmith services throughout the Parole area, including the Annapolis Mall district, Riva Road, and Jennifer Road. Whether you\'re locked out of your car at the mall, need your home rekeyed, or require commercial lock installation, our mobile locksmiths arrive quickly with the tools and expertise to solve your problem.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    neighborhoods: [
      'Parole',
      'Annapolis Mall Area',
      'Riva Road',
      'Jennifer Road',
      'West Annapolis'
    ],
    distance: '2 miles',
    responseTime: '10–20 minutes',
    directions: [
      'From Annapolis Mall, head east on Jennifer Rd',
      'Turn right onto Riva Rd',
      'Continue to Downtown Annapolis',
      'Cross into Eastport via Spa Creek Bridge',
      'Turn right on Severn Ave - we\'re at 222 Severn Ave Ste 1 Building 7-6A'
    ],
    faqs: [
      {
        question: 'Do you offer locksmith services near Annapolis Mall?',
        answer: 'Yes, we provide fast mobile locksmith services throughout the Parole and Annapolis Mall area, including car lockouts in parking lots.'
      },
      {
        question: 'How quickly can you reach Parole?',
        answer: 'We typically arrive in Parole within 10–20 minutes from our Annapolis location.'
      },
      {
        question: 'Can you rekey apartment locks in Parole?',
        answer: 'Yes, we provide rekeying services for apartments, condos, and rental properties throughout Parole.'
      }
    ],
    metaTitle: 'Locksmith in Parole, MD | Fast Response Near Annapolis Mall',
    metaDescription: 'Professional locksmith near Parole & Annapolis Mall. Car lockouts, home rekeying, commercial locks. 10-20 min response. Licensed. Call (410) 849-6069.'
  },
  {
    id: 'bay-ridge',
    name: 'Bay Ridge, MD',
    slug: 'bay-ridge',
    title: 'A Secure Annapolis Locksmith in Bay Ridge, MD',
    subtitle: 'Trusted Locksmith Services in Bay Ridge and South Annapolis',
    description: 'A Secure Annapolis Locksmith proudly serves the Bay Ridge community with comprehensive locksmith services. From emergency lockouts to smart lock installations, our experienced technicians provide reliable solutions for Bay Ridge residents and businesses. We understand the unique character of this waterfront neighborhood and deliver personalized service with the urgency you deserve.',
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    neighborhoods: [
      'Bay Ridge',
      'South Annapolis',
      'Quiet Waters Park Area'
    ],
    distance: '3 miles',
    responseTime: '15–25 minutes',
    directions: [
      'From Bay Ridge, head north on Bay Ridge Ave',
      'Turn left onto Forest Dr',
      'Continue to Spa Creek Bridge',
      'Cross into Eastport',
      'Turn left onto Severn Ave - we\'re at 222 Severn Ave Ste 1 Building 7-6A'
    ],
    faqs: [
      {
        question: 'Do you serve Bay Ridge residents?',
        answer: 'Yes, Bay Ridge is within our primary service area. We typically arrive within 15–25 minutes.'
      },
      {
        question: 'Can you install high-security locks for waterfront homes?',
        answer: 'Absolutely. We specialize in high-security lock systems perfect for waterfront properties in Bay Ridge.'
      },
      {
        question: 'Do you offer emergency locksmith services in Bay Ridge?',
        answer: 'Yes, we provide 24/7 emergency locksmith services throughout Bay Ridge and South Annapolis.'
      }
    ],
    metaTitle: 'Locksmith in Bay Ridge, MD | Trusted Waterfront Community Service',
    metaDescription: 'Reliable locksmith in Bay Ridge, MD. Residential & commercial security, emergency lockouts, smart locks. Fast local service. Call (410) 849-6069.'
  },
  {
    id: 'hillsmere-shores',
    name: 'Hillsmere Shores, MD',
    slug: 'hillsmere-shores',
    title: 'A Secure Annapolis Locksmith in Hillsmere Shores, MD',
    subtitle: 'Local Locksmith Services in Hillsmere Shores and Forest Drive',
    description: 'Hillsmere Shores residents trust A Secure Annapolis Locksmith for all their security needs. Our mobile locksmiths provide fast, friendly service throughout Hillsmere Shores, offering everything from emergency lockouts to complete security system installations. We\'re your neighborhood locksmith, committed to keeping your home and family safe.',
    heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    neighborhoods: [
      'Hillsmere Shores',
      'Forest Drive Corridor',
      'South Annapolis'
    ],
    distance: '4 miles',
    responseTime: '15–25 minutes',
    directions: [
      'From Hillsmere Shores, head north on Hillsmere Dr',
      'Turn right onto Forest Dr',
      'Continue toward Downtown Annapolis',
      'Cross Spa Creek Bridge into Eastport',
      'Turn left onto Severn Ave to 222 Severn Ave Ste 1 Building 7-6A'
    ],
    faqs: [
      {
        question: 'How fast can you get to Hillsmere Shores?',
        answer: 'We typically reach Hillsmere Shores within 15–25 minutes of your call.'
      },
      {
        question: 'Do you install smart locks in Hillsmere Shores homes?',
        answer: 'Yes, we install and program all major smart lock brands for Hillsmere Shores residents.'
      },
      {
        question: 'Can you rekey locks after moving into a new home?',
        answer: 'Absolutely. Rekeying after moving is one of our most common services in Hillsmere Shores.'
      }
    ],
    metaTitle: 'Locksmith in Hillsmere Shores, MD | Your Neighborhood Expert',
    metaDescription: 'Professional locksmith serving Hillsmere Shores. Emergency lockouts, rekeying, smart locks. Fast response, fair prices. Licensed. Call (410) 849-6069.'
  },
  {
    id: 'eastport',
    name: 'Eastport, MD',
    slug: 'eastport',
    title: 'A Secure Annapolis Locksmith in Eastport, MD',
    subtitle: 'Your Local Locksmith Right Here in Eastport',
    description: 'Located right in Eastport, A Secure Annapolis Locksmith is your immediate neighbor for all locksmith needs. We serve the Eastport community with unmatched speed and reliability, whether you need a residential lockout service, commercial lock installation, or automotive key programming. Being based in Eastport means we know the area intimately and can reach you faster than anyone else.',
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    neighborhoods: [
      'Eastport',
      'Historic Eastport',
      'Maritime Republic of Eastport'
    ],
    distance: '0 miles - Based in Eastport',
    responseTime: '10–15 minutes',
    directions: [
      'We\'re located at 222 Severn Ave Ste 1 Building 7-6A in Eastport',
      'Near the waterfront and Eastport business district',
      'Just across from Downtown Annapolis via Spa Creek Bridge'
    ],
    faqs: [
      {
        question: 'Are you really based in Eastport?',
        answer: 'Yes! Our shop is located at 222 Severn Ave in Eastport, making us your truly local locksmith.'
      },
      {
        question: 'How fast can you respond in Eastport?',
        answer: 'Since we\'re based right here, we typically arrive within 10–15 minutes anywhere in Eastport.'
      },
      {
        question: 'Do you serve both residential and commercial clients in Eastport?',
        answer: 'Yes, we serve homes, businesses, boats, and vehicles throughout the Eastport community.'
      }
    ],
    metaTitle: 'Locksmith in Eastport, MD | Based Right in Your Neighborhood',
    metaDescription: 'Local Eastport locksmith at 222 Severn Ave. Fastest response times. Residential, commercial & marine locksmith services. Call (410) 849-6069.'
  },
  {
    id: 'riva',
    name: 'Riva, MD',
    slug: 'riva',
    title: 'A Secure Annapolis Locksmith in Riva, MD',
    subtitle: 'Professional Locksmith Services in Riva and South River Areas',
    description: 'Serving the Riva, MD community with expert locksmith services, A Secure Annapolis Locksmith provides fast mobile service throughout the Riva and South River areas. Whether you need residential rekeying, commercial lock systems, or emergency lockout assistance, our licensed locksmiths deliver professional solutions with small-town service and big-city expertise.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    neighborhoods: [
      'Riva',
      'South River',
      'Riva Road Corridor',
      'West Annapolis'
    ],
    distance: '4 miles',
    responseTime: '15–25 minutes',
    directions: [
      'From Riva, head east on Riva Rd toward Annapolis',
      'Continue straight through Parole',
      'Follow signs to Downtown Annapolis',
      'Cross Spa Creek into Eastport',
      'Right on Severn Ave to 222 Severn Ave Ste 1 Building 7-6A'
    ],
    faqs: [
      {
        question: 'Do you serve the Riva area?',
        answer: 'Yes, Riva is well within our service area. We typically arrive within 15–25 minutes.'
      },
      {
        question: 'Can you install commercial locks for businesses on Riva Rd?',
        answer: 'Absolutely. We provide complete commercial locksmith services including high-security systems for Riva businesses.'
      },
      {
        question: 'Do you offer emergency services in Riva?',
        answer: 'Yes, we offer 24/7 emergency locksmith services throughout Riva and the surrounding area.'
      }
    ],
    metaTitle: 'Locksmith in Riva, MD | Fast & Professional Service',
    metaDescription: 'Expert locksmith serving Riva & South River areas. Residential, commercial, automotive locks. Emergency service available. Licensed. Call (410) 849-6069.'
  },
  {
    id: 'cape-st-claire',
    name: 'Cape St. Claire, MD',
    slug: 'cape-st-claire',
    title: 'A Secure Annapolis Locksmith in Cape St. Claire, MD',
    subtitle: 'Trusted Locksmith Services in Cape St. Claire Community',
    description: 'Cape St. Claire residents choose A Secure Annapolis Locksmith for reliable, professional locksmith services. Our experienced team understands the unique needs of this close-knit community and provides personalized service for every home and business. From emergency lockouts to complete security upgrades, we\'re your trusted Cape St. Claire locksmith partner.',
    heroImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    neighborhoods: [
      'Cape St. Claire',
      'Broadneck Peninsula',
      'Cape St. Claire Beach'
    ],
    distance: '6 miles',
    responseTime: '20–30 minutes',
    directions: [
      'From Cape St. Claire, head west toward MD-2',
      'Turn right onto Ritchie Hwy (MD-2) South',
      'Continue toward Annapolis',
      'Turn left onto Rowe Blvd',
      'Continue to Duke of Gloucester, then right on Severn Ave to 222 Severn Ave Ste 1 Building 7-6A'
    ],
    faqs: [
      {
        question: 'How long does it take to reach Cape St. Claire?',
        answer: 'We typically arrive in Cape St. Claire within 20–30 minutes from our Annapolis location.'
      },
      {
        question: 'Do you work with Cape St. Claire HOA requirements?',
        answer: 'Yes, we\'re familiar with community standards and can work within HOA guidelines for lock installations.'
      },
      {
        question: 'Can you rekey multiple homes in Cape St. Claire?',
        answer: 'Yes, we offer bulk rekeying services for property managers and community associations in Cape St. Claire.'
      }
    ],
    metaTitle: 'Locksmith in Cape St. Claire, MD | Community-Focused Service',
    metaDescription: 'Trusted locksmith in Cape St. Claire, MD. Residential security, emergency lockouts, rekeying. Serving Broadneck Peninsula. Call (410) 849-6069.'
  },
  {
    id: 'broadneck',
    name: 'Broadneck, MD',
    slug: 'broadneck',
    title: 'A Secure Annapolis Locksmith in Broadneck, MD',
    subtitle: 'Expert Locksmith Services Throughout the Broadneck Peninsula',
    description: 'Serving the entire Broadneck Peninsula, A Secure Annapolis Locksmith provides comprehensive locksmith solutions for residents and businesses. Our mobile locksmiths bring professional service directly to your location, whether you need emergency assistance, security upgrades, or routine lock maintenance throughout the Broadneck area.',
    heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    neighborhoods: [
      'Broadneck Peninsula',
      'Cape St. Claire',
      'Arnold',
      'Broadneck Area'
    ],
    distance: '6–8 miles',
    responseTime: '20–30 minutes',
    directions: [
      'From Broadneck area, head south on Ritchie Hwy (MD-2)',
      'Continue toward Annapolis',
      'Turn left onto Rowe Blvd',
      'Continue onto Duke of Gloucester St',
      'Right on Severn Ave to 222 Severn Ave Ste 1 Building 7-6A'
    ],
    faqs: [
      {
        question: 'Do you serve the entire Broadneck Peninsula?',
        answer: 'Yes, we provide locksmith services throughout the Broadneck Peninsula, typically arriving within 20–30 minutes.'
      },
      {
        question: 'Can you service Broadneck High School and area schools?',
        answer: 'Yes, we work with educational institutions and can provide commercial locksmith services for schools.'
      },
      {
        question: 'Do you install smart locks for Broadneck homes?',
        answer: 'Absolutely. We install all major smart lock brands throughout the Broadneck area.'
      }
    ],
    metaTitle: 'Locksmith in Broadneck, MD | Peninsula-Wide Service',
    metaDescription: 'Professional locksmith serving Broadneck Peninsula. Residential, commercial & automotive services. Fast response times. Licensed. Call (410) 849-6069.'
  },
  {
    id: 'edgewater-beach',
    name: 'Edgewater Beach, MD',
    slug: 'edgewater-beach',
    title: 'A Secure Annapolis Locksmith in Edgewater Beach, MD',
    subtitle: 'Waterfront Locksmith Services in Edgewater Beach and Mayo',
    description: 'Edgewater Beach residents rely on A Secure Annapolis Locksmith for specialized locksmith services tailored to waterfront living. We understand the unique security challenges of coastal properties and provide expert solutions including marine-grade locks, smart security systems, and emergency services throughout Edgewater Beach and the surrounding Mayo area.',
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    neighborhoods: [
      'Edgewater Beach',
      'Mayo',
      'South River',
      'Waterfront Communities'
    ],
    distance: '7 miles',
    responseTime: '20–30 minutes',
    directions: [
      'From Edgewater Beach, head north on MD-2',
      'Continue toward Annapolis over South River Bridge',
      'Merge onto Rowe Blvd',
      'Continue to Duke of Gloucester St',
      'Right on Severn Ave to 222 Severn Ave Ste 1 Building 7-6A'
    ],
    faqs: [
      {
        question: 'Do you service waterfront homes in Edgewater Beach?',
        answer: 'Yes, we specialize in security solutions for waterfront properties including corrosion-resistant and marine-grade locks.'
      },
      {
        question: 'How fast can you respond to Edgewater Beach?',
        answer: 'We typically arrive in Edgewater Beach within 20–30 minutes of your call.'
      },
      {
        question: 'Can you install locks on boat houses and docks?',
        answer: 'Yes, we can install and service locks for boat houses, docks, and marine applications.'
      }
    ],
    metaTitle: 'Locksmith in Edgewater Beach, MD | Waterfront Security Experts',
    metaDescription: 'Specialized locksmith for Edgewater Beach waterfront homes. Marine-grade locks, smart security. Emergency service. Licensed. Call (410) 849-6069.'
  },
  {
    id: 'mayo',
    name: 'Mayo, MD',
    slug: 'mayo',
    title: 'A Secure Annapolis Locksmith in Mayo, MD',
    subtitle: 'Reliable Locksmith Services in Mayo and South River Communities',
    description: 'Mayo, MD residents trust A Secure Annapolis Locksmith for dependable locksmith services. Our mobile team serves the Mayo area with fast response times and professional solutions for all your residential, commercial, and automotive locksmith needs. From emergency lockouts to complete security system installations, we\'re your local locksmith partner in Mayo.',
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    contentImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    neighborhoods: [
      'Mayo',
      'South River',
      'Edgewater Area',
      'Southern Anne Arundel'
    ],
    distance: '7 miles',
    responseTime: '20–30 minutes',
    directions: [
      'From Mayo, head northwest toward MD-2',
      'Turn right onto MD-2 North',
      'Continue over South River Bridge toward Annapolis',
      'Take Rowe Blvd exit',
      'Continue to Duke of Gloucester, right on Severn Ave to 222 Severn Ave Ste 1 Building 7-6A'
    ],
    faqs: [
      {
        question: 'Do you provide locksmith services in Mayo, MD?',
        answer: 'Yes, Mayo is within our primary service area with typical response times of 20–30 minutes.'
      },
      {
        question: 'Can you rekey homes in Mayo after moving?',
        answer: 'Absolutely. Rekeying is one of our most popular services for new homeowners in Mayo.'
      },
      {
        question: 'Do you offer emergency locksmith services in Mayo?',
        answer: 'Yes, we provide 24/7 emergency locksmith services throughout Mayo and southern Anne Arundel County.'
      }
    ],
    metaTitle: 'Locksmith in Mayo, MD | Fast & Trusted Local Service',
    metaDescription: 'Professional locksmith in Mayo, MD. Residential, commercial & auto locksmith services. Emergency lockouts. Licensed & insured. Call (410) 849-6069.'
  }
];

export const getLocationBySlug = (slug: string): LocationData | undefined => {
  return locations.find(loc => loc.slug === slug);
};
