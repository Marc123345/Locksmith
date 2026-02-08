export interface Review {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  date: string;
  source: 'Google' | 'Thumbtack';
  verified: boolean;
  image?: string;
  service?: string;
}

export const GOOGLE_BUSINESS_URL = 'https://www.google.com/maps/place/A+Secure+Annapolis+Locksmith/@38.972694,-76.4834868,17z/data=!4m8!3m7!1s0x89b7f7debf1d014d:0x9fa6fee227462373!8m2!3d38.972694!4d-76.4809119!9m1!1b1!16s%2Fg%2F11c1tlnc4g';
export const THUMBTACK_URL = 'https://www.thumbtack.com/md/annapolis/locksmiths/a-secure-annapolis-locksmith/service/430634898636873729';

export const googleReviews: Review[] = [
  {
    name: "Desiree Henningsen",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Called Monday and left message. He called back within 15 minutes. Gave estimate via text when I sent him picture of lock needing to be changed. Showed up within 20 minutes of our phone conversation. Very friendly and got the job done quickly.",
    date: "2 months ago",
    source: "Google",
    verified: true,
    service: "Lock Change"
  },
  {
    name: "Alexandra Paulson",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "I had my entire house rekeyed and it was a great experience. He was punctual, professional, and efficient. The price was very reasonable and I felt safe with him in my home. I highly recommend A Secure Annapolis Locksmith!",
    date: "3 months ago",
    source: "Google",
    verified: true,
    service: "Rekey Service"
  },
  {
    name: "H C",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Fantastic service! Called in the morning about a lock install and had an appointment that same afternoon. Professional, efficient, and reasonably priced. Would definitely use again.",
    date: "1 month ago",
    source: "Google",
    verified: true,
    service: "Lock Installation"
  },
  {
    name: "RM Moreno",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "I was locked out of my house and called A Secure. They answered immediately and had someone at my door within 30 minutes. Super professional and fair pricing. Saved my day!",
    date: "2 weeks ago",
    source: "Google",
    verified: true,
    service: "Emergency Lockout"
  },
  {
    name: "Proton Flux",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Needed locks changed after moving into a new place. Called on Friday, locks were changed by Saturday morning. Great communication and professional work. Highly recommend!",
    date: "1 month ago",
    source: "Google",
    verified: true,
    service: "Lock Change"
  },
  {
    name: "Debra Kupfer",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Very responsive and professional. Had an emergency lock situation and they were able to help same day without charging extra emergency fees. Fair pricing and quality work.",
    date: "3 weeks ago",
    source: "Google",
    verified: true,
    service: "Emergency Service"
  },
  {
    name: "Jen Jamison",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Dispatch was courteous and super helpful, I knew the price and the time my tech was expected to arrive. I was at work and had lost my only key to my vehicle, and commute across the bridge for work so I was panicked.",
    date: "6 months ago",
    source: "Google",
    verified: true,
    service: "Car Key Replacement"
  },
  {
    name: "Malorie",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "I highly recommend A Secure Annapolis Locksmith! They were by far the most responsive and efficient company I spoke to when I needed to replace my lock. Very easy to work with and reasonably priced.",
    date: "5 months ago",
    image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(9)_Xh3CkNmTP.png?tr=f-auto,q-auto",
    source: "Google",
    verified: true,
    service: "Lock Replacement"
  },
  {
    name: "Emma Cutler",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Thank you for offering such a great service for my son! Finding a company that actually called back and went the extra mile to accommodate our needs was such a relief. Professional, courteous and speedy.",
    date: "11 months ago",
    source: "Google",
    verified: true,
    image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(11)_dwZTbXGi6.png?tr=f-auto,q-auto",
    service: "General Locksmith"
  }
];

export const thumbtackReviews: Review[] = [
  {
    name: "Sarah M.",
    location: "Severna Park, MD",
    rating: 5,
    testimonial: "Quick response time and professional service. Had my locks rekeyed within an hour of calling. Fair pricing and great communication.",
    date: "1 month ago",
    source: "Thumbtack",
    verified: true,
    service: "Rekey Service"
  },
  {
    name: "John D.",
    location: "Arnold, MD",
    rating: 5,
    testimonial: "Excellent service! Helped me with a car lockout situation late in the evening. No extra charges and very professional.",
    date: "2 months ago",
    source: "Thumbtack",
    verified: true,
    service: "Car Lockout"
  }
];

export const allReviews: Review[] = [...googleReviews, ...thumbtackReviews];
