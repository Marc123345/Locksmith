'use client';

import { Home, Car, Building2, Phone, Anchor, Shield, Smartphone } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import ReviewsSection from '@/components/ReviewsSection';
import PricingSection from '@/components/PricingSection';
import DirectionsSection from '@/components/DirectionsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import RelatedContent from '@/components/RelatedContent';
import SpecialOfferBanner from '@/components/SpecialOfferBanner';
import LocationJsonLd from '@/components/locations/LocationJsonLd';
import { getLocationBySlug } from '@/data/locations';
import { standardPricing } from '@/data/pricing';
import { CONTACT } from '@/utils/contact';
import NotFoundPage from '@/views/NotFoundPage';

const services = [
  { icon: Home, label: 'Residential', desc: 'Waterfront home lock services, rekeying, and coastal-grade deadbolts', color: 'text-blue-600', border: 'border-b-blue-500' },
  { icon: Car, label: 'Automotive', desc: 'Car lockouts, key programming, and transponder key replacement', color: 'text-blue-600', border: 'border-b-blue-500' },
  { icon: Building2, label: 'Commercial', desc: 'Business security, access control, and master key systems', color: 'text-blue-600', border: 'border-b-blue-500' },
  { icon: Phone, label: 'Emergency', desc: '24/7 emergency lockout response', color: 'text-blue-600', border: 'border-b-blue-500' },
  { icon: Anchor, label: 'Marine/Dock Locks', desc: 'Corrosion-resistant locks for docks, boathouses, and piers', color: 'text-blue-600', border: 'border-b-blue-500' },
  { icon: Smartphone, label: 'Smart Security', desc: 'Smart locks and keyless entry for modern waterfront homes', color: 'text-blue-600', border: 'border-b-blue-500' },
];

const faqs = [
  { question: 'Do you offer marine-grade locks for waterfront properties?', answer: 'Yes, we specialize in corrosion-resistant, marine-grade lock hardware designed to withstand the harsh salt air and moisture conditions common in Edgewater Beach waterfront homes.' },
  { question: 'How fast can you reach Edgewater Beach?', answer: 'We are approximately 7 miles from Edgewater Beach and dispatch the nearest available technician to your location.' },
  { question: 'Do you service dock and boathouse locks?', answer: 'Absolutely. We install and repair locks for docks, boathouses, piers, and other marine structures using specialized hardware built for coastal environments.' },
  { question: 'Are your services available on weekends?', answer: 'Yes, we offer 24/7 locksmith services including weekends and holidays for all Edgewater Beach residents and businesses.' },
];

const relatedLinks = [
  { title: 'Lock Change Service', description: 'Marine-grade lock replacement for coastal homes', href: '/services/lock-change', type: 'service' as const },
  { title: 'Emergency Lockout', description: 'Emergency lockout service in Edgewater Beach', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Edgewater Locksmith', description: 'Locksmith services in Edgewater', href: '/locations/edgewater', type: 'location' as const },
  { title: 'Mayo Locksmith', description: 'Locksmith in Mayo and southern Anne Arundel', href: '/locations/mayo', type: 'location' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
];

export default function EdgewaterBeachPage() {
  const location = getLocationBySlug('edgewater-beach');
  if (!location) return <NotFoundPage />;
  return (
    <>
      <LocationJsonLd location={location} />
      <div className="pt-16 md:pt-20">
        <SpecialOfferBanner />
      </div>
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-blue-800/60 backdrop-blur-sm px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-6">
              <Anchor className="w-4 h-4" /> Coastal Security Experts
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Waterfront Locksmith Specialists in Edgewater Beach</h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-2xl mx-auto">
              Trusted locksmith services for Edgewater Beach, Mayo, South River, and surrounding waterfront communities. Marine-grade security solutions built for coastal living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`tel:${CONTACT.PHONE}`} className="bg-white hover:bg-blue-50 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                Call Now: {CONTACT.PHONE}
              </Link>
              <Link href="#contact" className="bg-slate-100 hover:bg-slate-200 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                Get a Free Quote
              </Link>
            </div>
            <p className="mt-4 text-blue-200 text-sm">7 miles away &middot; Licensed &amp; insured</p>
          </div>
        </section>

        <section className="bg-stone-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Waterfront Property Specialists</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <Shield className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Marine-Grade Locks</h3>
                <p className="text-gray-700">We install corrosion-resistant hardware engineered for waterfront properties. Our marine-grade locks withstand salt air, humidity, and coastal weather conditions to keep your home secure year-round.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <Home className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waterfront Home Security</h3>
                <p className="text-gray-700">We understand the unique security needs of coastal properties. From seasonal residences to year-round waterfront homes, we design security solutions tailored to life on the water.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Services in Edgewater Beach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div key={svc.label} className={`bg-white rounded-xl p-6 shadow-sm border-b-4 ${svc.border}`}>
                  <svc.icon className={`w-8 h-8 ${svc.color} mb-3`} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.label}</h3>
                  <p className="text-gray-600 text-sm">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-stone-50 py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Us in Edgewater Beach</h2>
            <ContactForm pageSource="edgewater-beach" locationPreference="Edgewater Beach, MD" />
          </div>
        </section>

        <section className="bg-blue-900 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Waterfront Property</h2>
            <p className="text-blue-100/80 mb-8">From marine-grade locks to smart security systems, we have everything you need to secure your coastal home or business in Edgewater Beach.</p>
            <Link href={`tel:${CONTACT.PHONE}`} className="inline-block bg-white hover:bg-blue-50 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors">
              Call {CONTACT.PHONE}
            </Link>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Edgewater Beach" />
        <FAQSection faqs={faqs} title="Edgewater Beach Locksmith FAQ" />
        <DirectionsSection fromLocation="Edgewater Beach, MD" directions={location.directions} distance="7 miles" />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
