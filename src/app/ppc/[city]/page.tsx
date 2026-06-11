import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPPCCity, getAllPPCCitySlugs } from '@/data/ppc-cities';
import PPCLandingPage from '@/views/ppc/PPCLandingPage';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllPPCCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getPPCCity(slug);

  if (!city) {
    return { title: 'Not Found', robots: 'noindex, nofollow' };
  }

  return {
    title: city.metaTitle,
    description: `Professional locksmith services in ${city.name}, MD. Emergency lockouts, lock changes, car keys, and more. Licensed & insured. Call 410-849-6069.`,
    robots: 'noindex, nofollow',
  };
}

export default async function PPCPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getPPCCity(slug);

  if (!city) {
    notFound();
  }

  return <PPCLandingPage city={city} />;
}
