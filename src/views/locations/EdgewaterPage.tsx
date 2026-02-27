'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, Home, Car, Building2, Wrench, Smartphone, ChevronRight } from 'lucide-react';
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
  { title: 'Home Locks', desc: 'Lockouts, rekeying, deadbolts, and security upgrades for Edgewater homes.', icon: Home, color: 'text-blue-600' },
  { title: 'Car Keys', desc: 'Car lockouts, key cutting, transponder programming, and ignition repair.', icon: Car, color: 'text-green-600' },
  { title: 'Business Security', desc: 'Master key systems, access control, and high-security locks for businesses.', icon: Building2, color: 'text-slate-600' },
  { title: 'Emergency 24/7', desc: 'Round-the-clock emergency lockout service.', icon: Phone, color: 'text-red-500' },
  { title: 'Lock Repair', desc: 'Expert repair, maintenance, and restoration for all lock types and brands.', icon: Wrench, color: 'text-amber-500' },
  { title: 'Smart Locks', desc: 'Installation and setup of August, Schlage, Yale, and Kwikset smart locks.', icon: Smartphone, color: 'text-teal-500' },
];

const relatedLinks = [
  { title: 'Emergency Lockout', description: '24/7 emergency lockout service in Edgewater', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Lost Car Keys', description: 'Car key replacement in Edgewater', href: '/services/lost-car-keys', type: 'service' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
  { title: 'Mayo Locksmith', description: 'Locksmith services in Mayo', href: '/locations/mayo', type: 'location' as const },
  { title: 'Edgewater Beach Locksmith', description: 'Waterfront locksmith in Edgewater Beach', href: '/locations/edgewater-beach', type: 'location' as const },
];

export default function EdgewaterPage() {
  const location = getLocationBySlug('edgewater');

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
        <section className="bg-gradient-to-br from-slate-800 to-blue-900 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Reliable Locksmith Service in Edgewater, MD
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {location.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-white text-slate-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                    <Phone className="h-5 w-5" />
                    {CONTACT.PHONE_DISPLAY}
                  </a>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-slate-400/40 hover:border-white/70 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
                    Get Free Quote
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Availability</p>
                    <p className="text-2xl font-bold text-white">7 Days a Week</p>
                  </div>
                </div>
                <div className="border-t border-white/10" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Distance</p>
                    <p className="text-2xl font-bold text-white">{location.distance}</p>
                  </div>
                </div>
                <div className="border-t border-white/10" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                    <Home className="h-6 w-6 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Coverage Area</p>
                    <p className="text-2xl font-bold text-white">Southern Anne Arundel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Just Across the South River Bridge
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  Located just south of the South River Bridge, Edgewater is one of the closest communities to our Annapolis headquarters. We cross the bridge daily to serve Edgewater residents and businesses with fast, dependable locksmith services.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  From Edgewater proper to Mayo, Woodland Beach, and South River Colony, our licensed technicians provide complete residential, automotive, and commercial locksmith solutions throughout southern Anne Arundel County.
                </p>
                <p className="text-lg text-gray-600">
                  Whether you need an emergency lockout, lock rekeying, or a full security upgrade, we bring the same quality service our Annapolis neighbors trust right to your doorstep in Edgewater.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Neighborhoods We Serve</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {location.neighborhoods.map((neighborhood) => (
                    <div key={neighborhood} className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-4 py-3 shadow-sm">
                      <MapPin className="h-4 w-4 text-slate-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Locksmith Services in Edgewater</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional locksmith solutions for homes, vehicles, and businesses throughout the Edgewater area.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-l-slate-400">
                  <service.icon className={`h-8 w-8 ${service.color} mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Request a Free Quote</h2>
            <ContactForm pageSource="edgewater-location" locationPreference="Edgewater" />
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-800 to-blue-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Locksmith in Edgewater Right Now?</h2>
            <p className="text-lg text-slate-300 mb-8">We are just across the South River Bridge and ready to help. Call or email for immediate assistance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-white text-slate-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                <Phone className="h-5 w-5" />
                {CONTACT.PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT.EMAIL}`} className="inline-flex items-center justify-center gap-2 border-2 border-slate-400/50 hover:border-white text-slate-300 font-semibold px-8 py-4 rounded-lg transition-colors">
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Edgewater" />
        <FAQSection faqs={location.faqs} title="Edgewater Locksmith FAQ" />
        <DirectionsSection fromLocation="Edgewater" directions={location.directions} distance={location.distance} />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
