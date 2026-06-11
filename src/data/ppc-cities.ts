export interface PpcCity {
  slug: string;
  name: string;
  /** Used in copy like "serving {area}" */
  area: string;
  /** Matches testimonial locationTag where available */
  testimonialTag?: string;
}

export const ppcCities: PpcCity[] = [
  { slug: 'annapolis', name: 'Annapolis', area: 'Annapolis and surrounding Anne Arundel County', testimonialTag: 'annapolis' },
  { slug: 'arnold', name: 'Arnold', area: 'Arnold, Bay Hills, and the Broadneck Peninsula', testimonialTag: 'arnold' },
  { slug: 'bay-ridge', name: 'Bay Ridge', area: 'Bay Ridge and the Annapolis Neck Peninsula', testimonialTag: 'bay-ridge' },
  { slug: 'broadneck', name: 'Broadneck', area: 'the Broadneck Peninsula and surrounding communities', testimonialTag: 'broadneck' },
  { slug: 'cape-st-claire', name: 'Cape St. Claire', area: 'Cape St. Claire and the Broadneck Peninsula', testimonialTag: 'cape-st-claire' },
  { slug: 'crownsville', name: 'Crownsville', area: 'Crownsville and western Anne Arundel County', testimonialTag: 'crownsville' },
  { slug: 'eastport', name: 'Eastport', area: 'Eastport and downtown Annapolis', testimonialTag: 'eastport' },
  { slug: 'edgewater', name: 'Edgewater', area: 'Edgewater and the South River communities', testimonialTag: 'edgewater' },
  { slug: 'edgewater-beach', name: 'Edgewater Beach', area: 'Edgewater Beach and the South River shoreline', testimonialTag: 'edgewater-beach' },
  { slug: 'hillsmere-shores', name: 'Hillsmere Shores', area: 'Hillsmere Shores and the Annapolis Neck Peninsula', testimonialTag: 'hillsmere-shores' },
  { slug: 'mayo', name: 'Mayo', area: 'Mayo and the Mayo Peninsula', testimonialTag: 'mayo' },
  { slug: 'parole', name: 'Parole', area: 'Parole and the greater Annapolis area', testimonialTag: 'parole' },
  { slug: 'riva', name: 'Riva', area: 'Riva and the South River communities', testimonialTag: 'riva' },
  { slug: 'severna-park', name: 'Severna Park', area: 'Severna Park and northern Anne Arundel County', testimonialTag: 'severna-park' },
];

export const getPpcCityBySlug = (slug: string): PpcCity | undefined =>
  ppcCities.find((c) => c.slug === slug);
