export interface PricingItem {
  service: string;
  price: string;
  description?: string;
}

export const standardPricing: PricingItem[] = [
  {
    service: 'Home Lockout',
    price: 'Starting at $95',
    description: 'Fast response to get you back inside'
  },
  {
    service: 'Car Lockout Service',
    price: 'Starting at $95',
    description: 'Mobile service comes to you'
  },
  {
    service: 'Rekeying',
    price: 'Starting at $39 per lock',
    description: 'Cost-effective security upgrade'
  },
  {
    service: 'Smart Lock Installation',
    price: 'Starting at $120',
    description: 'Modern keyless entry systems'
  },
  {
    service: 'Service Call Fee',
    price: '$39',
    description: 'Applied to all service visits'
  }
];

export const carKeyPricing: PricingItem[] = [
  {
    service: 'Standard Key',
    price: 'Starting at $120'
  },
  {
    service: 'Transponder Key',
    price: '$150–$180'
  },
  {
    service: 'Remote Key Fob',
    price: '$180–$250'
  },
  {
    service: 'Smart Key Programming',
    price: 'Starting at $200'
  },
  {
    service: 'Service Call Fee',
    price: '$39'
  }
];

export const lockRepairPricing: PricingItem[] = [
  {
    service: 'Lock Inspection & Adjustment',
    price: '$39'
  },
  {
    service: 'Basic Lock Repair',
    price: 'Starting at $75'
  },
  {
    service: 'High-Security/Smart Lock Repair',
    price: 'Starting at $120'
  },
  {
    service: 'Service Call Fee',
    price: '$39'
  }
];

export const emergencyLockoutPricing: PricingItem[] = [
  {
    service: 'Emergency House Lockout (Day)',
    price: 'Starting at $95'
  },
  {
    service: 'Emergency House Lockout (Night/Weekend)',
    price: 'Starting at $95 + $39 Service Call'
  },
  {
    service: 'Rekey (Optional)',
    price: 'Starting at $39 per lock'
  },
  {
    service: 'Smart Lock Reprogramming (Optional)',
    price: 'Starting at $120'
  }
];
