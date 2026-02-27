'use client';

import { Phone, Mail, Clock, MapPin, Shield, Home, Car, Building2, Wrench } from 'lucide-react';
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

const relatedLinks = [
  { title: 'Emergency Lockout Service', description: 'Fast emergency lockout help in Arnold and Broadneck', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Lock Rekey Service', description: 'Professional rekeying in Arnold homes', href: '/services/lock-rekey', type: 'service' as const },
  { title: 'Cape St. Claire Locksmith', description: 'Locksmith services in the Cape St. Claire community', href: '/locations/cape-st-claire', type: 'location' as const },
  { title: 'Broadneck Locksmith', description: 'Peninsula-wide locksmith coverage', href: '/locations/broadneck', type: 'location' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
];

export default function ArnoldPage() {
  const location = getLocationBySlug('arnold');

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Expert Locksmith Services on the Broadneck Peninsula
                </h1>
                <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
                  Proudly serving Arnold, Cape St. Claire, Bay Hills, and the entire Broadneck Peninsula
                  with fast, reliable locksmith services. Our local technicians know this community inside
                  and out and are ready to help with same-day service.
                </p>
                <a
                  href={`tel:${CONTACT.PHONE}`}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  <Phone className="h-5 w-5" />
                  {CONTACT.PHONE_DISPLAY}
                </a>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <ContactForm pageSource="arnold-location" locationPreference="Arnold" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Your Peninsula Locksmith Partner
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Broadneck Peninsula Coverage</h3>
                <p className="text-gray-600">
                  Complete locksmith coverage across the entire Broadneck Peninsula including Arnold,
                  Cape St. Claire, Bay Dale, and Bay Hills neighborhoods.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Local Response</h3>
                <p className="text-gray-600">
                  Same-day service throughout the Arnold area. Our technicians are nearby and
                  ready to assist you day or night.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community Trusted</h3>
                <p className="text-gray-600">
                  Trusted by Arnold families and businesses for years. Licensed, insured, and committed
                  to honest service with no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Locksmith Services in Arnold
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential & Automotive</h3>
                <p className="text-gray-600 mb-4">
                  From home lockouts and rekeying to car key replacement and transponder programming,
                  we handle all residential and automotive locksmith needs for Arnold homeowners and drivers.
                </p>
                <p className="text-gray-600">
                  Whether you are locked out of your Cape St. Claire home or need a spare car key cut in
                  Bay Hills, our skilled technicians arrive fast with the right tools.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 flex items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-blue-800">Residential</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-blue-800">Automotive</span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-slate-50 border border-slate-200 rounded-2xl p-8 flex items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-blue-800">Commercial</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-blue-800">Emergency</span>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial & Emergency</h3>
                <p className="text-gray-600 mb-4">
                  Arnold businesses rely on us for master key systems, access control installation, and
                  high-security lock solutions. We keep your commercial property secure and accessible.
                </p>
                <p className="text-gray-600">
                  Locked out on Broadneck Peninsula? Our same-day emergency locksmith service ensures
                  you are never stranded. Professional service, every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Locksmith in Arnold Right Now?
            </h2>
            <p className="text-lg text-blue-200 mb-8">
              Our peninsula team is ready to help. Call or email us for immediate, reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <Phone className="h-5 w-5" />
                {CONTACT.PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-300/50 hover:border-blue-300 text-blue-200 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Arnold" />
        <FAQSection faqs={location.faqs} title="Arnold Locksmith FAQ" />
        <DirectionsSection fromLocation="Arnold" directions={location.directions} distance={location.distance} />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
