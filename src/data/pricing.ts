export interface PricingItem {
  service: string;
  price: string;
  description?: string;
}

export const standardPricing: PricingItem[] = [
  {
    service: 'Home Lockout',
    price: 'Call for a Free Quote',
    description: 'Professional entry service in most cases'
  },
  {
    service: 'Car Lockout Service',
    price: 'Call for a Free Quote',
    description: 'Mobile service comes to you'
  },
  {
    service: 'Rekeying',
    price: 'Call for a Free Quote',
    description: 'Cost-effective security upgrade'
  },
  {
    service: 'Smart Lock Installation',
    price: 'Call for a Free Quote',
    description: 'Modern keyless entry systems'
  },
  {
    service: 'Service Call Fee',
    price: 'Call for a Free Quote',
    description: 'Applied to all service visits'
  }
];

export const carKeyPricing: PricingItem[] = [
  {
    service: 'Standard Key',
    price: 'Call for a Free Quote'
  },
  {
    service: 'Transponder Key',
    price: 'Call for a Free Quote'
  },
  {
    service: 'Remote Key Fob',
    price: 'Call for a Free Quote'
  },
  {
    service: 'Smart Key Programming',
    price: 'Call for a Free Quote'
  },
  {
    service: 'Service Call Fee',
    price: 'Call for a Free Quote'
  }
];

export const lockRepairPricing: PricingItem[] = [
  {
    service: 'Lock Inspection & Adjustment',
    price: 'Call for a Free Quote'
  },
  {
    service: 'Basic Lock Repair',
    price: 'Call for a Free Quote'
  },
  {
    service: 'High-Security/Smart Lock Repair',
    price: 'Call for a Free Quote'
  },
  {
    service: 'Service Call Fee',
    price: 'Call for a Free Quote'
  }
];

export const emergencyLockoutPricing: PricingItem[] = [
  {
    service: 'Emergency House Lockout (Day)',
    price: 'Call for a Free Quote'
  },
  {
    service: 'Emergency House Lockout (Night/Weekend)',
    price: 'Call for a Free Quote'
  },
  {
    service: 'Rekey (Optional)',
    price: 'Call for a Free Quote'
  },
  {
    service: 'Smart Lock Reprogramming (Optional)',
    price: 'Call for a Free Quote'
  }
];
