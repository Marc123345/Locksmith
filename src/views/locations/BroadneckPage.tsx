'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, Star, Home, Car, Building2, Wrench, Smartphone, ChevronRight, Waves } from 'lucide-react';
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
  { title: 'Residential Security', desc: 'Home lockouts, rekeying, deadbolt upgrades, and full security solutions for Broadneck Peninsula homes.', icon: Home, color: 'text-blue-600' },
  { title: 'Auto Locksmith', desc: 'Car lockouts, key cutting, transponder programming, and ignition repair across the peninsula.', icon: Car, color: 'text-blue-600' },
  { title: 'Commercial Locks', desc: 'Master key systems, access control, and high-security lock solutions for Broadneck businesses.', icon: Building2, color: 'text-slate-600' },
  { title: 'Emergency Service', desc: '24/7 emergency lockout response throughout Broadneck.', icon: Phone, color: 'text-red-500' },
  { title: 'Lock Repair', desc: 'Expert lock repair, maintenance, and restoration for all residential and commercial lock types.', icon: Wrench, color: 'text-amber-500' },
  { title: 'Smart Lock Install', desc: 'Professional installation of August, Schlage, Yale, and Kwikset smart locks for modern homes.', icon: Smartphone, color: 'text-blue-600' },
];

const peninsulaAreas = [
  { name: 'Arnold', distance: '6 miles' },
  { name: 'Cape St. Claire', distance: '7 miles' },
  { name: 'Bay Hills', distance: '7 miles' },
  { name: 'Broadneck Peninsula', distance: '6 miles' },
  { name: 'Green Haven', distance: '8 miles' },
  { name: 'College Parkway Area', distance: '6 miles' },
];

const relatedLinks = [
  { title: 'Emergency Lockout Service', description: '24/7 emergency lockout help on Broadneck Peninsula', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Car Key Programming', description: 'Auto key services in the Broadneck area', href: '/services/car-key-programming', type: 'service' as const },
  { title: 'Arnold Locksmith', description: 'Expert locksmith services in Arnold and Bay Hills', href: '/locations/arnold', type: 'location' as const },
  { title: 'Cape St. Claire Locksmith', description: 'Community locksmith in Cape St. Claire', href: '/locations/cape-st-claire', type: 'location' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
];

export default function BroadneckPage() {
  const location = getLocationBySlug('broadneck');

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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
                <Waves className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200 text-sm font-medium">Peninsula-Wide Coverage</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Locksmith Services Across the Broadneck Peninsula
              </h1>
              <p className="text-lg md:text-xl text-blue-100/80 mb-8 leading-relaxed">
                {location.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving the Entire Broadneck Peninsula</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">From Arnold to Cape St. Claire, our technicians know every road and neighborhood on the peninsula for the fastest possible response.</p>
            </div>
            <div className="max-w-2xl mx-auto bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-900">Peninsula Coverage Areas</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {peninsulaAreas.map((area) => (
                  <div key={area.name} className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-blue-100">
                    <span className="font-medium text-gray-800">{area.name}</span>
                    <span className="text-sm text-blue-600 font-semibold">{area.distance}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-blue-700">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Serving Broadneck</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Licensed & insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  <span>5-star rated</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Locksmith Services on Broadneck Peninsula</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive locksmith solutions for homes, vehicles, and businesses across the peninsula.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-600" />
                  <div className="p-6">
                    <service.icon className={`h-8 w-8 ${service.color} mb-4`} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-900 py-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Locksmith on Broadneck Peninsula?</h2>
            <p className="text-lg text-blue-200 mb-8">Our peninsula-based team is ready to help. Call or email for fast, reliable locksmith service.</p>
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

        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Request a Free Quote</h2>
            <ContactForm pageSource="broadneck-location" locationPreference="Broadneck" />
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Broadneck" />
        <FAQSection faqs={location.faqs} title="Broadneck Locksmith FAQ" />
        <DirectionsSection fromLocation="Broadneck Peninsula" directions={location.directions} distance={location.distance} />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
