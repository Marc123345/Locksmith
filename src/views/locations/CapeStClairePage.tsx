'use client';

import Link from 'next/link';
import { Phone, Users, CheckCircle, Clock, Shield, Home, Car, Building2, ArrowRight } from 'lucide-react';
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
  { title: 'Lock Rekey Service', description: 'Professional rekeying for Cape St. Claire homes', href: '/services/lock-rekey', type: 'service' as const },
  { title: 'Lock Change Service', description: 'Complete lock replacement for enhanced security', href: '/services/lock-change', type: 'service' as const },
  { title: 'Arnold Locksmith', description: 'Expert locksmith services in Arnold and Bay Hills', href: '/locations/arnold', type: 'location' as const },
  { title: 'Broadneck Locksmith', description: 'Peninsula-wide locksmith coverage', href: '/locations/broadneck', type: 'location' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
];

const services = [
  { title: 'Residential Locks', description: 'Lock changes, rekeying, deadbolt installation, and smart lock setup for Cape St. Claire homes.', icon: Home, color: 'blue-600', href: '/services/lock-change' },
  { title: 'Auto Key Services', description: 'Car lockouts, key cutting, transponder programming, and ignition repair at your location.', icon: Car, color: 'green-600', href: '/services/car-key-programming' },
  { title: 'Commercial Security', description: 'Master key systems, access control, and high-security solutions for local businesses.', icon: Building2, color: 'slate-600', href: '/services/commercial-locksmith' },
  { title: 'Emergency Lockout', description: 'Locked out? Same-day service to Cape St. Claire for home, car, and office lockouts.', icon: Phone, color: 'red-500', href: '/services/emergency-lockout' },
];

export default function CapeStClairePage() {
  const location = getLocationBySlug('cape-st-claire');

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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-400/30 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Community-Focused Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trusted Locksmith for the<br />Cape St. Claire Community
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
              Professional locksmith services tailored for Cape St. Claire&apos;s beach community. HOA-compatible installations, trusted by your neighbors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                <Phone className="w-5 h-5" />
                {CONTACT.PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-blue-300/50 hover:border-blue-300 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-blue-200 p-8 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">HOA Compatible</h3>
                <p className="text-gray-600">We work within Cape St. Claire community guidelines and HOA requirements for all lock installations and security upgrades.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-blue-200 p-8 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Just 6 miles from our Annapolis shop, we reach Cape St. Claire quickly for emergencies and scheduled appointments alike.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-blue-200 p-8 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beach Community Experts</h3>
                <p className="text-gray-600">We understand Cape St. Claire&apos;s unique needs, from salt-air resistant hardware to seasonal security considerations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Locksmith Services in Cape St. Claire</h2>
            <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12">
              Comprehensive locksmith solutions for the Broadneck Peninsula&apos;s premier beach community.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-xl border border-blue-100 p-6 flex items-start gap-5 hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 ${
                    service.color === 'blue-600' ? 'bg-blue-100 text-blue-600' :
                    service.color === 'green-600' ? 'bg-green-100 text-green-600' :
                    service.color === 'slate-600' ? 'bg-slate-100 text-slate-600' :
                    'bg-red-100 text-red-500'
                  }`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    <Link href={service.href} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              <span className="text-blue-600">Request Service</span> in Cape St. Claire
            </h2>
            <p className="text-gray-600 text-center mb-8">Fill out the form below and we will get back to you promptly.</p>
            <ContactForm pageSource="cape-st-claire" locationPreference="Cape St. Claire, MD" />
          </div>
        </section>

        <section className="bg-blue-900 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Secure Your Cape St. Claire Home Today</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              From beachside cottages to Broadneck Peninsula homes, we provide trusted locksmith services tailored to your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                <Phone className="w-5 h-5" />
                {CONTACT.PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT.EMAIL}`} className="inline-flex items-center justify-center gap-2 border-2 border-blue-300/50 text-blue-200 font-semibold px-8 py-4 rounded-lg transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Cape St. Claire" />
        <FAQSection faqs={location.faqs} title="Cape St. Claire Locksmith FAQ" />
        <DirectionsSection fromLocation="Cape St. Claire" directions={location.directions} distance={location.distance} />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
