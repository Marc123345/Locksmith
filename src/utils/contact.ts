export const formatPhoneNumber = (phone: string): string => {
  // Strip any non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Validate phone number length
  if (cleaned.length !== 10) {
    console.warn('Invalid phone number format');
    return phone;
  }
  
  // Format as (XXX) XXX-XXXX
  return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`;
};

export const formatPhoneLink = (phone: string): string => {
  // Strip any non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Validate phone number length
  if (cleaned.length !== 10) {
    console.warn('Invalid phone link format');
    return `tel:${phone}`;
  }
  
  return `tel:${cleaned}`;
};

export const obfuscateEmail = (email: string): string => {
  if (!email || !email.includes('@') || !email.includes('.')) {
    console.warn('Invalid email format');
    return email;
  }
  return email.replace('@', ' [at] ').replace('.', ' [dot] ');
};

// Constants for contact information
export const CONTACT = {
  PHONE: '4108496069',
  PHONE_DISPLAY: '(410) 849-6069',
  EMAIL: 'asecureannapolislocksmithllc@gmail.com',
  ADDRESS: '222 Severn Ave Ste 1 Building 7-6A, Annapolis, MD 21403',
  MAPS_LINK: 'https://www.google.com/maps/place/A+Secure+Annapolis+Locksmith/@38.9726944,-76.4834868,17z/data=!3m2!4b1!5s0x89b7f64709bff4f3:0x7a618719fb6179c!4m6!3m5!1s0x89b7f7debf1d014d:0x9fa6fee227462373!8m2!3d38.9726944!4d-76.4809119!16s%2Fg%2F11h_qf7k1c?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
  HOURS: [
    { day: 'Sunday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Monday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Tuesday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Thursday', hours: '7:00 AM - 9:00 PM' },
    { day: 'Friday', hours: '7:00 AM - 3:00 PM' },
    { day: 'Saturday', hours: 'Closed' },
  ],
  SERVICE_CALL_FEE: '$39',
  EMERGENCY_AVAILABLE: '24/7'
} as const;