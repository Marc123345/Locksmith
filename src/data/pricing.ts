export interface PricingItem {
  service: string;
  price: string;
  description?: string;
}

export const standardPricing: PricingItem[] = [
  {
    service: 'Home Lockout',
    price: 'Call for quote',
    description: 'Professional service to get you back inside'
  },
  {
    service: 'Car Lockout Service',
    price: 'Call for quote',
    description: 'Mobile service comes to you'
  },
  {
    service: 'Rekeying',
    price: 'Call for quote',
    description: 'Cost-effective security upgrade'
  },
  {
    service: 'Smart Lock Installation',
    price: 'Call for quote',
    description: 'Modern keyless entry systems'
  },
  {
    service: 'Service Call Fee',
    price: 'Call for quote',
    description: 'Applies to all service visits'
  }
];

export const carKeyPricing: PricingItem[] = [
  {
    service: 'Standard Key',
    price: 'Call for quote'
  },
  {
    service: 'Transponder Key',
    price: 'Call for quote'
  },
  {
    service: 'Remote Key Fob',
    price: 'Call for quote'
  },
  {
    service: 'Smart Key Programming',
    price: 'Call for quote'
  },
  {
    service: 'Service Call Fee',
    price: 'Call for quote'
  }
];

export const lockRepairPricing: PricingItem[] = [
  {
    service: 'Lock Inspection & Adjustment',
    price: 'Call for quote'
  },
  {
    service: 'Basic Lock Repair',
    price: 'Call for quote'
  },
  {
    service: 'High-Security/Smart Lock Repair',
    price: 'Call for quote'
  },
  {
    service: 'Service Call Fee',
    price: 'Call for quote'
  }
];

export const emergencyLockoutPricing: PricingItem[] = [
  {
    service: 'Emergency House Lockout (Day)',
    price: 'Call for quote'
  },
  {
    service: 'Emergency House Lockout (Night/Weekend)',
    price: 'Call for quote'
  },
  {
    service: 'Rekey (Optional)',
    price: 'Call for quote'
  },
  {
    service: 'Smart Lock Reprogramming (Optional)',
    price: 'Call for quote'
  }
];
