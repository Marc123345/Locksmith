export interface Review {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  date: string;
  source: "Google" | "Thumbtack";
  verified: boolean;
  service?: string;
}

export const THUMBTACK_URL =
  "https://www.thumbtack.com/md/annapolis/locksmiths/secure-annapolis-locksmith/service/550518270306156552";

export const GOOGLE_BUSINESS_URL = "https://share.google/UOdXHMKaPxcOtZ9vw";

export const googleReviews: Review[] = [
  {
    name: "Debra Kupfer",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "What a wonderful experience compared to the last one! This business is a stand out! From the receptionist who took my call to the locksmith who fixed my problem, they were courteous, prompt (same-day service with no extra fees), and neat!",
    date: "6 months ago",
    source: "Google",
    verified: true,
  },
  {
    name: "H C",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Had an excellent first experience with A Secure. I called earlier today about having a front door handle and lockset installed, and they were able to send someone same day. Roy did a really careful and professional job with what turned out to be a trickier install. The door handle looks and works great! Will definitely use them again.",
    date: "8 months ago",
    source: "Google",
    verified: true,
    service: "Lock Installation",
  },
  {
    name: "Jessica McDermott",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Excellent service, technician was both knowledgeable and efficient, and fixed our front door lock in no time!",
    date: "4 months ago",
    source: "Google",
    verified: true,
    service: "Lock Repair",
  },
  {
    name: "Jen Jamison",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Dispatch was courteous and super helpful, I knew the price and the time my tech was expected to arrive. I was at work and had lost my only key to my vehicle, and commute across the bridge for work so I was panicked.",
    date: "1 year ago",
    source: "Google",
    verified: true,
    service: "Car Key Replacement",
  },
  {
    name: "Alexandra Paulson",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "We had our new home rekeyed and some of the locks were more difficult to do than others. Alan came back out twice to make sure it was perfect and everything was done to our satisfaction. Great customer service and attention to detail.",
    date: "9 months ago",
    source: "Google",
    verified: true,
    service: "Lock Rekeying",
  },
  {
    name: "Jacob Goldsmith",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Roy, at Asecure Locksmith was exceptional! He arrived promptly, was super friendly and professional, and he fixed my lock issue in no time. I highly recommend him for anyone in need.",
    date: "9 months ago",
    source: "Google",
    verified: true,
    service: "Lock Repair",
  },
  {
    name: "Emma Cutler",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Thank you for offering such a great service for my son! Finding a company that actually called back and went the extra mile to accommodate our needs was such a relief. Professional, courteous and speedy. Thank you! I would certainly recommend using this team.",
    date: "1 year ago",
    source: "Google",
    verified: true,
  },
  {
    name: "Peter Lord",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Technician was right on time and did a fantastic job including helping to explain everything.",
    date: "5 months ago",
    source: "Google",
    verified: true,
  },
  {
    name: "RM Moreno",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "When my daughter became locked out of her condo in Annapolis, we contacted A Secure to assist with the problem. The response time of their locksmith was almost instantaneous. He was professional, knowledgeable, and courteous.",
    date: "3 years ago",
    source: "Google",
    verified: true,
    service: "Emergency Lockout",
  },
  {
    name: "Desiree Henningsen",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "After calling another local locksmith and getting an estimate of 90 minutes and a hefty $149 price tag, I called A Secure Annapolis Locksmith. They quoted me $95 and were at my car in 15 minutes! Chris was professional, efficient, and quick! Thank you so much for the great service!",
    date: "2 years ago",
    source: "Google",
    verified: true,
    service: "Car Lockout",
  },
  {
    name: "Malorie",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "I highly recommend A Secure Annapolis Locksmith! They were by far the most responsive and efficient company I spoke to when I needed to replace my lock. Very easy to work with and reasonably priced.",
    date: "1 year ago",
    source: "Google",
    verified: true,
    service: "Lock Replacement",
  },
  {
    name: "Proton Flux",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "My mother passed, and I had to get her locks changed quickly to protect the estate. Within less than 24 hours, they sent a fantastic professional who got the job done quickly and efficiently at a reasonable rate. Absolutely recommend.",
    date: "3 years ago",
    source: "Google",
    verified: true,
    service: "Lock Change",
  },
  {
    name: "Ben England",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Yes I've had to use this guy -- twice. Both times when I was preparing to leave for a trip. He is fast, courteous, secure, respectful and -- fast. I had to wait for him outside the house both times and the wait was very reasonable.",
    date: "1 year ago",
    source: "Google",
    verified: true,
  },
  {
    name: "Rebecca Dorward",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Extremely fast, helpful, and reasonably priced service for door knob/lock changes for three house doors. The work looks clean and seamless. Thank you so much!",
    date: "1 year ago",
    source: "Google",
    verified: true,
    service: "Lock Change",
  },
  {
    name: "Nikaylla Augustinos",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Roy noticed me struggling to get into my car. He offered to help me out. He was kind, quick, and professional. I would recommend this company and will definitely use them in the future if this happens again.",
    date: "5 years ago",
    source: "Google",
    verified: true,
    service: "Car Lockout",
  },
  {
    name: "Amanda Reynolds",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "I locked myself out of my house with 2 kids and a dog. Needless to say I was feeling a little silly and a lot stressed. The locksmith Jaylyn came quickly and had me back in my house in a jiffy. He was kind, professional and I very much appreciated the help.",
    date: "4 years ago",
    source: "Google",
    verified: true,
    service: "House Lockout",
  },
  {
    name: "Diane Dwyer",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "A Secure Annapolis Locksmith provided prompt service on our recent lock install. Despite having a miscommunication with the technician, the manager reached out and resolved our concern. We would definitely use this company again in the future.",
    date: "2 years ago",
    source: "Google",
    verified: true,
    service: "Lock Installation",
  },
  {
    name: "Yarrow Yarrow",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Great service! I appreciated a quote that was very close to the actual invoice. They even replaced an old door knob that matched my other knobs.",
    date: "2 years ago",
    source: "Google",
    verified: true,
    service: "Lock Replacement",
  },
  {
    name: "Alex Sanchez",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Fast service and good customer service, was contacted by a technician right away, with updates on arrival, gave me options for installation of locks, and pricing was competitive. Would definitely use them for future locksmith service.",
    date: "6 years ago",
    source: "Google",
    verified: true,
    service: "Lock Installation",
  },
  {
    name: "Shay Bertrice",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "I had an unfortunate car lockout that this company was able to assist me with. Roy was the locksmith that arrived to my location and seamlessly unlocked my vehicle. Happy with the service and would recommend them to others.",
    date: "5 years ago",
    source: "Google",
    verified: true,
    service: "Car Lockout",
  },
  {
    name: "Ana Carolina",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "I locked my keys in my car, called another locksmith, they kept telling me they were coming and after 7 hours and 4 phone calls, I realized they were not going to show up. Called A Secure and they came right away.",
    date: "5 years ago",
    source: "Google",
    verified: true,
    service: "Car Lockout",
  },
  {
    name: "Yvonne White",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "I had lost a key and I didn't have an extra one. I called this number and the person that answered was very polite. It took about 20 mins for them to come over, he did his work in 10 mins or so.",
    date: "3 years ago",
    source: "Google",
    verified: true,
    service: "Key Replacement",
  },
];

export const thumbtackReviews: Review[] = [
  {
    name: "Tanika W.",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Quality and value of work was great. Also, he was in time, responded very quickly, and was very professional dressed in his logo polo shirt.",
    date: "Aug 2025",
    source: "Thumbtack",
    verified: true,
    service: "Lock Installation and Repair",
  },
  {
    name: "Caitlin B.",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Professional, punctual and fast. I highly recommend. Price was also reasonable.",
    date: "Sep 2025",
    source: "Thumbtack",
    verified: true,
    service: "Lock Installation and Repair",
  },
  {
    name: "Raven J.",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Absolutely amazing! On time, friendly, respectful and did amazing work.",
    date: "Jul 2025",
    source: "Thumbtack",
    verified: true,
    service: "Lock Installation and Repair",
  },
  {
    name: "Thumbtack U.",
    location: "Annapolis, MD",
    rating: 5,
    testimonial:
      "Roy was professional and quickly rekeyed 2 locks within minutes. From start to finish, he took no more than 30 minutes.",
    date: "Jun 2025",
    source: "Thumbtack",
    verified: true,
    service: "Lock Rekeying",
  },
];

export const allReviews: Review[] = [...thumbtackReviews, ...googleReviews];
