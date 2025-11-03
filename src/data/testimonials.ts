export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  serviceType?: string;
  locationTag?: string;
}

export const testimonials: Testimonial[] = [
  // Arnold testimonials
  {
    id: 'arnold-1',
    name: 'Amanda B.',
    location: 'Cape St. Claire',
    rating: 5,
    text: 'When I needed a locksmith in Arnold, MD after locking myself out of my house, they were here in 20 minutes. Fast, professional, and affordable!',
    locationTag: 'arnold',
    serviceType: 'emergency-lockout'
  },
  {
    id: 'arnold-2',
    name: 'Justin M.',
    location: 'Arnold, MD',
    rating: 5,
    text: 'A Secure Annapolis Locksmith rekeyed all the doors in our Bay Hills home. Very knowledgeable and friendly service.',
    locationTag: 'arnold',
    serviceType: 'rekey'
  },
  // Edgewater testimonials
  {
    id: 'edgewater-1',
    name: 'Carla D.',
    location: 'Edgewater, MD',
    rating: 5,
    text: 'Got locked out at South River Colony. They arrived fast and had me back inside in minutes!',
    locationTag: 'edgewater',
    serviceType: 'emergency-lockout'
  },
  {
    id: 'edgewater-2',
    name: 'Tony R.',
    location: 'Mayo, MD',
    rating: 5,
    text: 'We had all the locks rekeyed after moving to Mayo. Excellent work and very professional.',
    locationTag: 'edgewater',
    serviceType: 'rekey'
  },
  // Severna Park testimonials
  {
    id: 'severna-park-1',
    name: 'Mia W.',
    location: 'Severna Park, MD',
    rating: 5,
    text: 'A Secure Annapolis Locksmith came out the same day and installed new locks at our Severna Park home. Highly recommend!',
    locationTag: 'severna-park',
    serviceType: 'lock-change'
  },
  {
    id: 'severna-park-2',
    name: 'Brian H.',
    location: 'Chartwell, MD',
    rating: 5,
    text: 'Professional and courteous — they reprogrammed my car key fob right in the driveway.',
    locationTag: 'severna-park',
    serviceType: 'car-key-programming'
  },
  // Crownsville testimonials
  {
    id: 'crownsville-1',
    name: 'Gina S.',
    location: 'Crownsville, MD',
    rating: 5,
    text: 'Had our locks rekeyed after buying a house in Arden. Great service and very prompt.',
    locationTag: 'crownsville',
    serviceType: 'rekey'
  },
  // Service-specific testimonials
  {
    id: 'lock-change-1',
    name: 'Laura R.',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'We just moved into a new home in Eastport and needed all the locks changed. The technician arrived same-day, gave great advice, and upgraded our doors quickly.',
    serviceType: 'lock-change'
  },
  {
    id: 'lock-change-2',
    name: 'Ben T.',
    location: 'Hillsmere Shores, MD',
    rating: 5,
    text: 'Very professional! Installed two smart locks and showed me how to use them.',
    serviceType: 'lock-change'
  },
  {
    id: 'rekey-1',
    name: 'Jessica M.',
    location: 'Parole, MD',
    rating: 5,
    text: 'After moving into our new condo, they rekeyed six locks fast and affordable.',
    serviceType: 'rekey'
  },
  {
    id: 'rekey-2',
    name: 'Adam K.',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Super efficient and friendly — now all my doors open with one key!',
    serviceType: 'rekey'
  },
  {
    id: 'car-key-1',
    name: 'Kelly S.',
    location: 'Parole, MD',
    rating: 5,
    text: 'My key fob died at the mall. They came out, programmed a new one, and had me driving again in 30 minutes!',
    serviceType: 'car-key-programming'
  },
  {
    id: 'car-key-2',
    name: 'Derek L.',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Way faster and cheaper than the dealership — highly recommend.',
    serviceType: 'car-key-programming'
  },
  {
    id: 'emergency-1',
    name: 'Karen H.',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'I locked myself out at 11 PM in Murray Hill. They showed up in 20 minutes and got me back in with zero damage. Lifesavers!',
    serviceType: 'emergency-lockout'
  },
  {
    id: 'emergency-2',
    name: 'Thomas R.',
    location: 'Eastport',
    rating: 5,
    text: 'A Secure Annapolis Locksmith is the only one I trust for emergencies. Fast, friendly, and professional every time.',
    serviceType: 'emergency-lockout'
  },
  {
    id: 'lock-repair-1',
    name: 'Amy K.',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Our front door lock kept jamming. They had it working like new in 20 minutes!',
    serviceType: 'lock-repair'
  },
  {
    id: 'lock-repair-2',
    name: 'Liam B.',
    location: 'Bay Ridge',
    rating: 5,
    text: 'Fixed our commercial entry lock the same day we called. Great work!',
    serviceType: 'lock-repair'
  },
  {
    id: 'lost-keys-1',
    name: 'Marcus P.',
    location: 'Parole, MD',
    rating: 5,
    text: 'They made a new key for my Honda CR-V in the Target parking lot. Incredible service!',
    serviceType: 'lost-car-keys'
  },
  {
    id: 'lost-keys-2',
    name: 'Tina S.',
    location: 'Hillsmere Shores',
    rating: 5,
    text: 'Way faster and cheaper than the dealership!',
    serviceType: 'lost-car-keys'
  }
];

export const getTestimonialsByLocation = (locationTag: string): Testimonial[] => {
  return testimonials.filter(t => t.locationTag === locationTag);
};

export const getTestimonialsByService = (serviceType: string): Testimonial[] => {
  return testimonials.filter(t => t.serviceType === serviceType);
};
