'use client';

import Link from 'next/link';
import { MapPin, Phone, Clock, Home, Car, Building2, Shield, Star, Navigation } from 'lucide-react';
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
  { title: 'Residential Locksmith', description: 'Lock changes, rekeying, deadbolt installation, and home security upgrades for Eastport homes.', icon: Home, color: 'blue-600' },
  { title: 'Automotive Locksmith', description: 'Car lockouts, key duplication, transponder programming, and ignition repair.', icon: Car, color: 'green-600' },
  { title: 'Commercial Locksmith', description: 'Master key systems, access control, high-security locks, and business security solutions.', icon: Building2, color: 'slate-600' },
  { title: 'Same-Day Emergency', description: 'Locked out? We are right around the corner. Fastest response in the area guaranteed.', icon: Phone, color: 'red-600' },
];

const relatedLinks = [
  { title: 'Emergency Lockout Service', description: 'Same-day emergency lockout help in Eastport', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Lock Rekey Service', description: 'Professional lock rekeying in Eastport and Annapolis', href: '/services/lock-rekey', type: 'service' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith services in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
  { title: 'Bay Ridge Locksmith', description: 'Trusted locksmith services in Bay Ridge and South Annapolis', href: '/locations/bay-ridge', type: 'location' as const },
  { title: 'Hillsmere Shores Locksmith', description: 'Neighborhood locksmith serving Hillsmere Shores', href: '/locations/hillsmere-shores', type: 'location' as const },
];

export default function EastportPage() {
  const location = getLocationBySlug('eastport');

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
        <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-400/30 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Based in Eastport
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Locksmith,<br />Right Next Door
              </h1>
              <p className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-2xl">
                A Secure Annapolis Locksmith is proudly headquartered right here in Eastport. When you call us, you are calling your neighbors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                  <Phone className="w-5 h-5" />
                  {CONTACT.PHONE_DISPLAY}
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-blue-300/50 hover:bg-blue-400/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  We&apos;re Your Neighbors
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Our shop is physically located at <strong>222 Severn Ave</strong> in the heart of Eastport. We are not a distant call center dispatching from miles away — we are right here, part of the community we serve every day.
                </p>
                <p className="text-gray-600 mb-6">
                  Proud members of the Maritime Republic of Eastport, we understand the unique character of this waterfront neighborhood. From Historic Eastport&apos;s charming streets to the bustling maritime businesses, we know every corner of this community.
                </p>
                <div className="flex flex-wrap gap-2">
                  {location.neighborhoods.map((n) => (
                    <span key={n} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{n}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-blue-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Our Location</p>
                    <p className="text-lg font-bold text-gray-900">Eastport, Annapolis</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">{CONTACT.ADDRESS}</p>
                      <a href={CONTACT.MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium underline">
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                    <a href={`tel:${CONTACT.PHONE}`} className="font-semibold text-gray-800 hover:text-blue-600">{CONTACT.PHONE_DISPLAY}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-blue-600 shrink-0" />
                    <p className="text-gray-700">5-Star Rated Local Locksmith</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 md:p-10 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Fastest Response in the Area</p>
                <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">10-15 Minutes</p>
                <p className="text-gray-600 text-lg">
                  Because we are based in Eastport, we arrive faster than any other locksmith. No long waits — just your neighbor showing up to help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Locksmith Services in Eastport</h2>
            <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12">
              Full-service locksmith solutions from your Eastport neighbors. Residential, automotive, commercial, and emergency.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-xl border border-blue-100 p-6 flex items-start gap-5 hover:shadow-md transition-shadow">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 ${
                    service.color === 'blue-600' ? 'bg-blue-100 text-blue-600' :
                    service.color === 'green-600' ? 'bg-green-100 text-green-600' :
                    service.color === 'slate-600' ? 'bg-slate-100 text-slate-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-900 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Call Your Eastport Neighbors</h2>
            <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto">
              Skip the big call centers. Get a real local locksmith who knows your streets, your community, and your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                <Phone className="w-5 h-5" />
                {CONTACT.PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT.EMAIL}`} className="inline-flex items-center justify-center gap-2 border-2 border-blue-300/50 hover:bg-blue-400/10 text-blue-200 font-semibold px-8 py-4 rounded-lg transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Eastport" />
        <FAQSection faqs={location.faqs} title="Eastport Locksmith FAQs" />

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Request Service in Eastport</h2>
            <ContactForm pageSource="eastport" locationPreference="Eastport, MD" />
          </div>
        </section>

        <DirectionsSection fromLocation="Eastport" directions={location.directions} distance={location.distance} />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
