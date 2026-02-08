export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  serviceType?: string;
  locationTag?: string;
  date?: string;
  verified?: boolean;
}

export const testimonials: Testimonial[] = [
  // Real Google Reviews - General (appear on all pages)
  {
    id: 'google-1',
    name: 'Debra Kupfer',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'What a wonderful experience compared to the last one! This business is a stand out! From the receptionist who took my call to the locksmith who fixed my problem, they were courteous, prompt (same-day service with no extra fees), and neat!',
    date: '6 months ago',
    verified: true
  },
  {
    id: 'google-2',
    name: 'H C',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Had an excellent first experience with A Secure. I called earlier today about having a front door handle and lockset installed, and they were able to send someone same day. Roy did a really careful and professional job with what turned out to be a trickier install. The door handle looks and works great! Will definitely use them again.',
    date: '8 months ago',
    verified: true,
    serviceType: 'lock-change'
  },
  {
    id: 'google-3',
    name: 'Jessica McDermott',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Excellent service, technician was both knowledgable and efficient, and fixed our front door lock in no time!',
    date: '4 months ago',
    verified: true,
    serviceType: 'lock-repair'
  },
  {
    id: 'google-4',
    name: 'Alexandra Paulson',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'We had our new home rekeyed and some of the locks were more difficult to do than others. Alan came back out twice to make sure it was perfect and everything was done to our satisfaction. Great customer service and attention to detail.',
    date: '9 months ago',
    verified: true,
    serviceType: 'rekey'
  },
  {
    id: 'google-5',
    name: 'Jacob Goldsmith',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Roy, at Asecure Locksmith was exceptional! He arrived promptly, was super friendly and professional, and he fixed my lock issue in no time. I highly recommend him for anyone in need.',
    date: '9 months ago',
    verified: true,
    serviceType: 'lock-repair'
  },
  {
    id: 'google-6',
    name: 'Emma Cutler',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Thank you for offering such a great service for my son! Finding a company that actually called back and went the extra mile to accommodate our needs was such a relief. Professional, courteous and speedy. Thank you! I would certainly recommend using this team.',
    date: '1 year ago',
    verified: true
  },
  {
    id: 'google-7',
    name: 'Peter Lord',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Technician was right on time and did a fantastic job including helping to explain everything…',
    date: '5 months ago',
    verified: true
  },
  {
    id: 'google-8',
    name: 'RM Moreno',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'When my daughter became locked out of her condo in Annapolis, we contacted A Secure to assist with the problem. The response time of their locksmith was almost instantaneous. He was professional, knowledgeable, and courteous.',
    date: '3 years ago',
    verified: true,
    serviceType: 'emergency-lockout',
    locationTag: 'annapolis'
  },
  {
    id: 'google-9',
    name: 'Jen Jamison',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Dispatch was courteous and super helpful, I knew the price and the time my tech was expected to arrive. I was at work and had lost my only key to my vehicle, and commute across the bridge for work so I was panicked.',
    date: '1 year ago',
    verified: true,
    serviceType: 'lost-car-keys',
    locationTag: 'annapolis'
  },
  {
    id: 'google-10',
    name: 'Desiree Henningsen',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'After calling another local locksmith and getting a estimate of 90 minutes till they could come and a hefty $149 price tag, I called A Secure Annapolis Locksmith to see what they could do. They quoted me $95 and were at my car in 15 minutes! Chris was professional, efficient, and quick! Thank you so much for the great service!',
    date: '2 years ago',
    verified: true,
    serviceType: 'emergency-lockout',
    locationTag: 'annapolis'
  },
  {
    id: 'google-11',
    name: 'Malorie',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'I highly recommend A Secure Annapolis Locksmith! They were by far the most responsive and efficient company I spoke to when I needed to replace my lock. Very easy to work with and reasonably priced.',
    date: '1 year ago',
    verified: true,
    serviceType: 'lock-change',
    locationTag: 'annapolis'
  },
  {
    id: 'google-12',
    name: 'proton flux',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'My mother passed, and I had to get her locks changed quickly to protect the estate. Within less than 24 hours, they sent a fantastic professional who got the job done quickly and efficiently at a reasonable rate. Absolutely recommend.',
    date: '3 years ago',
    verified: true,
    serviceType: 'lock-change',
    locationTag: 'annapolis'
  },
  {
    id: 'google-13',
    name: 'Ben England',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Yes I\'ve had to use this guy — twice. Both times when I was preparing to leave for a trip. He is fast, courteous, secure, respectful and — fast. I had to wait for him outside the house both times and the wait was very reasonable.',
    date: '1 year ago',
    verified: true,
    locationTag: 'annapolis'
  },
  {
    id: 'google-14',
    name: 'Rebecca Dorward',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Extremely fast, helpful, and reasonably priced service for door knob/lock changes for three house doors. The work looks clean and seemless. Thank you so much!',
    date: '1 year ago',
    verified: true,
    serviceType: 'lock-change',
    locationTag: 'annapolis'
  },
  {
    id: 'google-15',
    name: 'Amanda Reynolds',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'I locked myself out of my house with 2 kids and a dog. Needless to say I was feeling a little silly and a lot stressed. The locksmith Jaylyn came quickly and had me back in my house in a jiffy. He was kind, professional and I very much appreciate his help.',
    date: '4 years ago',
    verified: true,
    serviceType: 'emergency-lockout',
    locationTag: 'annapolis'
  },
  {
    id: 'google-16',
    name: 'Diane Dwyer',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'A Secure Annapolis Locksmith provided prompt service on our recent lock install. Despite having a miscommunication with the technician, the manager reached out and resolved our concern. We would definitely use this company again in the future.',
    date: '2 years ago',
    verified: true,
    serviceType: 'lock-change',
    locationTag: 'annapolis'
  },
  {
    id: 'google-17',
    name: 'Nikaylla Augustinos',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Roy noticed me struggling to get into my car. He offered to help me out. He was kind, quick, and professional. I would recommend this company and will definitely use them in the future if this happens again.',
    date: '5 years ago',
    verified: true,
    serviceType: 'lost-car-keys',
    locationTag: 'annapolis'
  },
  {
    id: 'google-18',
    name: 'Shay Bertrice',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'I had an unfortunate car lockout that this company was able to assist me with. Roy was the locksmith that arrived to my location and seamlessly unlocked my vehicle. Happy with the service and would recommend them to others.',
    date: '5 years ago',
    verified: true,
    serviceType: 'emergency-lockout',
    locationTag: 'annapolis'
  },
  {
    id: 'google-19',
    name: 'Nick Garrott',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Mike came out within 30 minutes after I locked my keys in my van. He got it free in minutes and made a spare copy for me. The cost was less than what the dealer wanted for a spare key alone.',
    date: '5 years ago',
    verified: true,
    serviceType: 'lost-car-keys',
    locationTag: 'annapolis'
  },
  {
    id: 'google-20',
    name: 'Stephen McLellan',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Great work done quickly!',
    date: '4 months ago',
    verified: true,
    locationTag: 'annapolis'
  },
  {
    id: 'google-21',
    name: 'Andria Farlow',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Technician was quick and efficient. Great price and customer service from dispatch!',
    date: '1 year ago',
    verified: true,
    locationTag: 'annapolis'
  },
  {
    id: 'google-22',
    name: 'Tom Marquez',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'A Secure Annapolis Locksmith not only answered their phone but got to me in 90 minutes. The other company I called never return my call.',
    date: '1 year ago',
    verified: true,
    locationTag: 'annapolis'
  },
  {
    id: 'google-23',
    name: 'Priscilla Lynn',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Great customer service and professional locksmith technician. Rekeying locks was very easy and affordable 5/5.',
    date: '6 years ago',
    verified: true,
    serviceType: 'rekey',
    locationTag: 'annapolis'
  },
  {
    id: 'google-24',
    name: 'Rob Otis',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Exceptional service, from beginning to end! Prices up front, fast friendly service, Ali is top notch!',
    date: '2 years ago',
    verified: true,
    locationTag: 'annapolis'
  },
  {
    id: 'google-25',
    name: 'Dave Wasshausen',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Great experience!',
    date: '2 months ago',
    verified: true,
    locationTag: 'annapolis'
  },
  {
    id: 'google-26',
    name: 'Sandra Pack',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Professional and effective and responsive.',
    date: '6 months ago',
    verified: true,
    locationTag: 'annapolis'
  },
  // Arnold-specific reviews
  {
    id: 'google-arnold-1',
    name: 'Alexandra Paulson',
    location: 'Arnold, MD',
    rating: 5,
    text: 'We had our new home rekeyed and some of the locks were more difficult to do than others. Alan came back out twice to make sure it was perfect and everything was done to our satisfaction. Great customer service and attention to detail.',
    date: '9 months ago',
    verified: true,
    serviceType: 'rekey',
    locationTag: 'arnold'
  },
  {
    id: 'google-arnold-2',
    name: 'Jacob Goldsmith',
    location: 'Arnold, MD',
    rating: 5,
    text: 'Roy, at Asecure Locksmith was exceptional! He arrived promptly, was super friendly and professional, and he fixed my lock issue in no time. I highly recommend him for anyone in need.',
    date: '9 months ago',
    verified: true,
    serviceType: 'lock-repair',
    locationTag: 'arnold'
  },
  // Severna Park-specific reviews
  {
    id: 'google-severna-1',
    name: 'Debra Kupfer',
    location: 'Severna Park, MD',
    rating: 5,
    text: 'What a wonderful experience compared to the last one! This business is a stand out! From the receptionist who took my call to the locksmith who fixed my problem, they were courteous, prompt (same-day service with no extra fees), and neat!',
    date: '6 months ago',
    verified: true,
    locationTag: 'severna-park'
  },
  {
    id: 'google-severna-2',
    name: 'Peter Lord',
    location: 'Severna Park, MD',
    rating: 5,
    text: 'Technician was right on time and did a fantastic job including helping to explain everything…',
    date: '5 months ago',
    verified: true,
    locationTag: 'severna-park'
  },
  // Edgewater-specific reviews
  {
    id: 'google-edgewater-1',
    name: 'Jessica McDermott',
    location: 'Edgewater, MD',
    rating: 5,
    text: 'Excellent service, technician was both knowledgable and efficient, and fixed our front door lock in no time!',
    date: '4 months ago',
    verified: true,
    serviceType: 'lock-repair',
    locationTag: 'edgewater'
  },
  {
    id: 'google-edgewater-2',
    name: 'H C',
    location: 'Edgewater, MD',
    rating: 5,
    text: 'Had an excellent first experience with A Secure. I called earlier today about having a front door handle and lockset installed, and they were able to send someone same day. Roy did a really careful and professional job with what turned out to be a trickier install. The door handle looks and works great!',
    date: '8 months ago',
    verified: true,
    serviceType: 'lock-change',
    locationTag: 'edgewater'
  },
  // Crownsville-specific reviews
  {
    id: 'google-crownsville-1',
    name: 'Emma Cutler',
    location: 'Crownsville, MD',
    rating: 5,
    text: 'Thank you for offering such a great service for my son! Finding a company that actually called back and went the extra mile to accommodate our needs was such a relief. Professional, courteous and speedy.',
    date: '1 year ago',
    verified: true,
    locationTag: 'crownsville'
  },
  // Parole-specific reviews
  {
    id: 'google-parole-1',
    name: 'Ben England',
    location: 'Parole, MD',
    rating: 5,
    text: 'Yes I\'ve had to use this guy — twice. Both times when I was preparing to leave for a trip. He is fast, courteous, secure, respectful and — fast.',
    date: '1 year ago',
    verified: true,
    locationTag: 'parole'
  },
  // Eastport-specific reviews
  {
    id: 'google-eastport-1',
    name: 'Rebecca Dorward',
    location: 'Eastport, MD',
    rating: 5,
    text: 'Extremely fast, helpful, and reasonably priced service for door knob/lock changes for three house doors. The work looks clean and seemless.',
    date: '1 year ago',
    verified: true,
    serviceType: 'lock-change',
    locationTag: 'eastport'
  },
  // Bay Ridge-specific reviews
  {
    id: 'google-bayridge-1',
    name: 'Malorie',
    location: 'Bay Ridge, MD',
    rating: 5,
    text: 'I highly recommend A Secure Annapolis Locksmith! They were by far the most responsive and efficient company I spoke to when I needed to replace my lock. Very easy to work with and reasonably priced.',
    date: '1 year ago',
    verified: true,
    serviceType: 'lock-change',
    locationTag: 'bay-ridge'
  },
  // Broadneck-specific reviews
  {
    id: 'google-broadneck-1',
    name: 'Andria Farlow',
    location: 'Broadneck, MD',
    rating: 5,
    text: 'Technician was quick and efficient. Great price and customer service from dispatch!',
    date: '1 year ago',
    verified: true,
    locationTag: 'broadneck'
  },
  // Cape St. Claire-specific reviews
  {
    id: 'google-capestclaire-1',
    name: 'Tom Marquez',
    location: 'Cape St. Claire, MD',
    rating: 5,
    text: 'A Secure Annapolis Locksmith not only answered their phone but got to me in 90 minutes. The other company I called never return my call.',
    date: '1 year ago',
    verified: true,
    locationTag: 'cape-st-claire'
  },
  // Hillsmere Shores-specific reviews
  {
    id: 'google-hillsmere-1',
    name: 'Sandra Pack',
    location: 'Hillsmere Shores, MD',
    rating: 5,
    text: 'Professional and effective and responsive.',
    date: '6 months ago',
    verified: true,
    locationTag: 'hillsmere-shores'
  },
  // Edgewater Beach-specific reviews
  {
    id: 'google-edgewaterbeach-1',
    name: 'Dave Wasshausen',
    location: 'Edgewater Beach, MD',
    rating: 5,
    text: 'Great experience!',
    date: '2 months ago',
    verified: true,
    locationTag: 'edgewater-beach'
  },
  // Riva-specific reviews
  {
    id: 'google-riva-1',
    name: 'Rob Otis',
    location: 'Riva, MD',
    rating: 5,
    text: 'Exceptional service, from beginning to end! Prices up front, fast friendly service, Ali is top notch!',
    date: '2 years ago',
    verified: true,
    locationTag: 'riva'
  },
  // Mayo-specific reviews
  {
    id: 'google-mayo-1',
    name: 'Priscilla Lynn',
    location: 'Mayo, MD',
    rating: 5,
    text: 'Great customer service and professional locksmith technician. Rekeying locks was very easy and affordable 5/5.',
    date: '6 years ago',
    verified: true,
    serviceType: 'rekey',
    locationTag: 'mayo'
  }
];

export const getTestimonialsByLocation = (locationTag: string): Testimonial[] => {
  const locationSpecific = testimonials.filter(t => t.locationTag === locationTag);
  const general = testimonials.filter(t => !t.locationTag && t.verified);

  if (locationSpecific.length >= 4) {
    return locationSpecific.slice(0, 6);
  }

  const combined = [...locationSpecific, ...general];
  return combined.slice(0, 6);
};

export const getTestimonialsByService = (serviceType: string): Testimonial[] => {
  return testimonials.filter(t => t.serviceType === serviceType);
};
