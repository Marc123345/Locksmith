'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, Key, DollarSign, Home, Car, Building2, ChevronRight, MapPin } from 'lucide-react';
import { getLocationBySlug } from '@/data/locations';
import { standardPricing } from '@/data/pricing';
import { CONTACT } from '@/utils/contact';
import NotFoundPage from '@/views/NotFoundPage';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import ReviewsSection from '@/components/ReviewsSection';
import PricingSection from '@/components/PricingSection';
import DirectionsSection from '@/components/DirectionsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import RelatedContent from '@/components/RelatedContent';
import SpecialOfferBanner from '@/components/SpecialOfferBanner';
import LocationJsonLd from '@/components/locations/LocationJsonLd';

const services = [
  { title: 'Residential Locksmith', desc: 'Home lockouts, rekeying, deadbolt installation, and security upgrades for Mayo homes.', icon: Home, color: 'text-blue-600', border: 'border-t-blue-500' },
  { title: 'Automotive Locksmith', desc: 'Car lockouts, key cutting, transponder programming, and ignition repair for all makes.', icon: Car, color: 'text-blue-600', border: 'border-t-blue-500' },
  { title: 'Commercial Locksmith', desc: 'Master key systems, access control, and high-security locks for Mayo businesses.', icon: Building2, color: 'text-blue-600', border: 'border-t-blue-500' },
  { title: 'Emergency Service', desc: 'Same-day emergency lockout assistance with 20-30 minute response times in Mayo.', icon: Phone, color: 'text-blue-600', border: 'border-t-blue-500' },
];

const trustPoints = [
  { label: 'Quick Response', detail: '20-30 min arrival', icon: Clock },
  { label: 'All Lock Types', detail: 'Residential, auto & commercial', icon: Key },
  { label: 'Fair Pricing', detail: 'Transparent, no hidden fees', icon: DollarSign },
];

const relatedLinks = [
  { title: 'Emergency Lockout', description: 'Same-day emergency lockout help in Mayo', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Lock Rekey Service', description: 'Professional rekeying for Mayo homes', href: '/services/lock-rekey', type: 'service' as const },
  { title: 'Edgewater Locksmith', description: 'Locksmith services in Edgewater', href: '/locations/edgewater', type: 'location' as const },
  { title: 'Edgewater Beach Locksmith', description: 'Waterfront locksmith in Edgewater Beach', href: '/locations/edgewater-beach', type: 'location' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
];

export default function MayoPage() {
  const location = getLocationBySlug('mayo');

  if (!location) {
    return <NotFoundPage />;
  }

  return (
    <>
      <LocationJsonLd location={location} />
      <div className="pt-16 md:pt-20">
        <SpecialOfferBanner />
      </div>
      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-950 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200 text-sm font-medium">Southern Anne Arundel County</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Dependable Locksmith Service in Mayo, MD
              </h1>
              <p className="text-lg md:text-xl text-blue-100/80 mb-8 leading-relaxed">
                {location.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                  <Phone className="h-5 w-5" />
                  {CONTACT.PHONE_DISPLAY}
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-blue-300/50 hover:border-blue-300 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
                  Get Free Quote
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Why Mayo Trusts Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {trustPoints.map((item) => (
                <div key={item.label} className="bg-white border border-blue-200 rounded-xl p-6 text-center shadow-sm">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                    <item.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{item.label}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Locksmith Services in Mayo</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.title} className={`bg-white border border-slate-200 border-t-4 ${service.border} rounded-xl p-8 hover:shadow-lg transition-shadow`}>
                  <service.icon className={`h-8 w-8 ${service.color} mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Request Service in Mayo</h2>
            <ContactForm pageSource="mayo-location" locationPreference="Mayo" />
          </div>
        </section>

        <section className="bg-blue-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Locksmith in Mayo? We&apos;re On Our Way.
            </h2>
            <p className="text-lg text-blue-200 mb-8">
              Our team serves Mayo and all of southern Anne Arundel County. Call now for fast, dependable help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                <Phone className="h-5 w-5" />
                {CONTACT.PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT.EMAIL}`} className="inline-flex items-center justify-center gap-2 border-2 border-blue-300/50 hover:border-blue-300 text-blue-200 font-semibold px-8 py-4 rounded-lg transition-colors">
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Mayo" />
        <FAQSection faqs={location.faqs} title="Mayo Locksmith FAQ" />
        <DirectionsSection fromLocation="Mayo" directions={location.directions} distance={location.distance} />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
