'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, CalendarDays, Shield, Home, Car, Building2, Wrench, Key, ChevronRight } from 'lucide-react';
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
  { title: 'Residential Locksmith', desc: 'Home lockouts, rekeying, deadbolt installation, and security upgrades for Riva homes along the South River.', icon: Home, color: 'bg-blue-600' },
  { title: 'Automotive Locksmith', desc: 'Car lockouts, key cutting, transponder programming, and ignition repair for Riva residents.', icon: Car, color: 'bg-sky-600' },
  { title: 'Commercial Locksmith', desc: 'Master key systems, access control, and high-security locks for Riva Road Corridor businesses.', icon: Building2, color: 'bg-slate-600' },
  { title: 'Emergency Lockout', desc: 'Fast emergency lockout service with 15-25 minute response times throughout the Riva area.', icon: Phone, color: 'bg-red-500' },
  { title: 'Lock Repair', desc: 'Expert lock repair, maintenance, and restoration for all lock types in Riva and South River.', icon: Wrench, color: 'bg-amber-500' },
  { title: 'Rekey Service', desc: 'Professional lock rekeying to enhance security for your Riva home or business without replacing hardware.', icon: Key, color: 'bg-blue-500' },
];

const relatedLinks = [
  { title: 'Lock Rekey Service', description: 'Professional rekeying services in Riva', href: '/services/lock-rekey', type: 'service' as const },
  { title: 'Emergency Lockout', description: 'Same-day emergency lockout help in Riva', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
  { title: 'Parole Locksmith', description: 'Fast locksmith service near Annapolis Mall', href: '/locations/parole', type: 'location' as const },
  { title: 'Edgewater Locksmith', description: 'Locksmith services in Edgewater and South River', href: '/locations/edgewater', type: 'location' as const },
];

export default function RivaPage() {
  const location = getLocationBySlug('riva');

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
        <section className="bg-gradient-to-br from-blue-800 to-sky-950 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              15-25 Min Response
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Locksmith Services in Riva, MD
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
              Trusted locksmith serving Riva, South River, Riva Road Corridor, and West Annapolis with fast, reliable residential, automotive, and commercial lock services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                <Phone className="w-5 h-5" />
                {CONTACT.PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-sky-400/50 hover:bg-sky-400/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Quote
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white border border-blue-200 rounded-xl p-6 text-center shadow-sm">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">4 Miles</p>
                <p className="text-gray-500 text-sm">Away</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-xl p-6 text-center shadow-sm">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">15-25 Min</p>
                <p className="text-gray-500 text-sm">Response Time</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-xl p-6 text-center shadow-sm">
                <CalendarDays className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">7 Days</p>
                <p className="text-gray-500 text-sm">a Week</p>
              </div>
              <div className="bg-white border border-blue-200 rounded-xl p-6 text-center shadow-sm">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900">Licensed</p>
                <p className="text-gray-500 text-sm">& Insured</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Locksmith Services in Riva, MD</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive lock and key solutions for the South River corridor, delivered by licensed professionals.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className={`h-1.5 ${service.color}`} />
                  <div className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${service.color} rounded-lg mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-blue-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Request Service in Riva</h2>
            <p className="text-gray-600 text-center mb-8">Fill out the form below and we will get back to you promptly.</p>
            <ContactForm pageSource="riva-location" locationPreference="Riva, MD" />
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-800 to-sky-900 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="w-12 h-12 text-sky-300 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Locksmith in Riva Right Now?</h2>
            <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto">
              From the South River waterfront to the Riva Road Corridor, our team provides fast, dependable locksmith service throughout the Riva area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                <Phone className="w-5 h-5" />
                {CONTACT.PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT.EMAIL}`} className="inline-flex items-center justify-center gap-2 border-2 border-sky-400/50 hover:bg-sky-400/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Riva" />
        <FAQSection faqs={location.faqs} title="Riva Locksmith FAQ" />
        <DirectionsSection fromLocation="Riva" directions={location.directions} distance={location.distance} />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
