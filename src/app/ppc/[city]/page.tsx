import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { ppcCities, getPpcCityBySlug } from '@/data/ppc-cities';
import PpcLandingPage from '@/views/ppc/PpcLandingPage';

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return ppcCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getPpcCityBySlug(slug);
  const name = city?.name ?? 'Annapolis';

  return {
    title: `24/7 Emergency Locksmith in ${name}, MD | A Secure Annapolis Locksmith`,
    description: `Locked out in ${name}? Fast, licensed & insured local locksmith with upfront pricing. Call now for same-day service.`,
    // PPC-only page: must never compete with the SEO location pages.
    robots: { index: false, follow: false },
  };
}

export default async function Page({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getPpcCityBySlug(slug);

  if (!city) notFound();

  return (
    <>
      <PpcLandingPage city={city} />
      {/* CallRail dynamic number insertion — swaps (410) 849-6069 for the
          PPC tracking number when the visitor arrives from Google Ads. */}
      <Script
        id="callrail-swap"
        strategy="afterInteractive"
        src="https://cdn.callrail.com/companies/307561553/12e405e4012e7d3ccce9/12/swap.js"
      />
    </>
  );
}
