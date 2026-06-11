export interface PPCCity {
  slug: string;
  name: string;
  state: string;
  county: string;
  metaTitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  serviceAreaDescription: string;
  neighborhoods: string[];
}

export const ppcCities: Record<string, PPCCity> = {
  annapolis: {
    slug: 'annapolis',
    name: 'Annapolis',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Annapolis, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Annapolis, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve all of Annapolis and surrounding Anne Arundel County communities including Eastport, Parole, West Annapolis, Bay Ridge, Hillsmere Shores, and the Historic District.',
    neighborhoods: ['Downtown Annapolis', 'Eastport', 'West Annapolis', 'Parole', 'Bay Ridge', 'Hillsmere Shores', 'Historic District', 'Annapolis Neck'],
  },
  arnold: {
    slug: 'arnold',
    name: 'Arnold',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Arnold, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Arnold, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve all of Arnold and the Broadneck Peninsula including Cape St. Claire, Bay Hills, and surrounding Anne Arundel County.',
    neighborhoods: ['Arnold', 'Cape St. Claire', 'Bay Hills', 'Broadneck Peninsula', 'Bay Dale', 'Severn Crossings'],
  },
  'severna-park': {
    slug: 'severna-park',
    name: 'Severna Park',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Severna Park, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Severna Park, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve all of Severna Park and surrounding areas including Millersville, Benfield, and greater Anne Arundel County.',
    neighborhoods: ['Severna Park', 'Millersville', 'Benfield', 'Shipley Choice', 'Olde Severna Park', 'Round Bay'],
  },
  edgewater: {
    slug: 'edgewater',
    name: 'Edgewater',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Edgewater, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Edgewater, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve all of Edgewater and South County including Mayo, Galesville, Deale, and Churchton.',
    neighborhoods: ['Edgewater', 'South River Colony', 'Lee Airport', 'London Town', 'Edgewater Beach', 'Mayo'],
  },
  'bay-ridge': {
    slug: 'bay-ridge',
    name: 'Bay Ridge',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Bay Ridge, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Bay Ridge, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve Bay Ridge and the surrounding Annapolis peninsula communities.',
    neighborhoods: ['Bay Ridge', 'Annapolis Roads', 'Thomas Point', 'Arundel on the Bay'],
  },
  broadneck: {
    slug: 'broadneck',
    name: 'Broadneck',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Broadneck, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Broadneck, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve the entire Broadneck Peninsula including Arnold, Cape St. Claire, and surrounding communities.',
    neighborhoods: ['Broadneck', 'Arnold', 'Cape St. Claire', 'Bay Hills', 'Green Haven'],
  },
  'cape-st-claire': {
    slug: 'cape-st-claire',
    name: 'Cape St. Claire',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Cape St. Claire, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Cape St. Claire, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve Cape St. Claire and the Broadneck Peninsula with fast, reliable locksmith services.',
    neighborhoods: ['Cape St. Claire', 'Arnold', 'Broadneck', 'Bay Dale'],
  },
  crownsville: {
    slug: 'crownsville',
    name: 'Crownsville',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Crownsville, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Crownsville, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve Crownsville and western Anne Arundel County including Gambrills and Crofton.',
    neighborhoods: ['Crownsville', 'Gambrills', 'Crofton', 'Riva'],
  },
  eastport: {
    slug: 'eastport',
    name: 'Eastport',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Eastport, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Eastport, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve Eastport and central Annapolis — we are located right here on Severn Ave in Eastport.',
    neighborhoods: ['Eastport', 'Downtown Annapolis', 'Spa Creek', 'Back Creek', 'Horn Point'],
  },
  mayo: {
    slug: 'mayo',
    name: 'Mayo',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Mayo, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Mayo, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve Mayo, Edgewater, and South County communities along the South River.',
    neighborhoods: ['Mayo', 'Edgewater', 'Selby-on-the-Bay', 'Beverly Beach'],
  },
  parole: {
    slug: 'parole',
    name: 'Parole',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Parole, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Parole, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve Parole and the Annapolis Mall area with fast mobile locksmith services.',
    neighborhoods: ['Parole', 'Annapolis Towne Centre', 'Bestgate', 'Admiral Heights'],
  },
  riva: {
    slug: 'riva',
    name: 'Riva',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Riva, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Riva, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve Riva and western Annapolis including Crownsville and Davidsonville.',
    neighborhoods: ['Riva', 'Davidsonville', 'Crownsville', 'Riva Road corridor'],
  },
  'hillsmere-shores': {
    slug: 'hillsmere-shores',
    name: 'Hillsmere Shores',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Hillsmere Shores, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Hillsmere Shores, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve Hillsmere Shores and the surrounding waterfront Annapolis communities.',
    neighborhoods: ['Hillsmere Shores', 'Bay Ridge', 'Annapolis Roads', 'Thomas Point'],
  },
  'edgewater-beach': {
    slug: 'edgewater-beach',
    name: 'Edgewater Beach',
    state: 'MD',
    county: 'Anne Arundel County',
    metaTitle: '24/7 Locksmith in Edgewater Beach, MD | Emergency Lockout Service',
    heroHeadline: '24/7 Locksmith in Edgewater Beach, MD',
    heroSubheadline: 'Locked out? Need locks changed? Our licensed technicians arrive fast with upfront pricing. No hidden fees.',
    serviceAreaDescription: 'We serve Edgewater Beach and surrounding South County waterfront communities.',
    neighborhoods: ['Edgewater Beach', 'Edgewater', 'Mayo', 'South River Colony'],
  },
};

export function getPPCCity(slug: string): PPCCity | undefined {
  return ppcCities[slug];
}

export function getAllPPCCitySlugs(): string[] {
  return Object.keys(ppcCities);
}
