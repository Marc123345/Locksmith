'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, Shield, Home, Building2, Key, Car, Lock, Smartphone, MapPin, ArrowRight } from 'lucide-react';
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
  { title: 'Emergency Lockout Service', description: 'Fast emergency lockout help near Annapolis Mall', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Car Key Programming', description: 'Car key services in Parole parking areas', href: '/services/car-key-programming', type: 'service' as const },
  { title: 'Lock Rekey Service', description: 'Apartment and home rekeying in Parole', href: '/services/lock-rekey', type: 'service' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
  { title: 'Riva Locksmith', description: 'Locksmith services along Riva Road corridor', href: '/locations/riva', type: 'location' as const },
];

const services = [
  { name: 'Emergency Lockout', desc: 'Same-day service for home, car, and office lockouts', border: 'border-t-red-500', icon: Phone },
  { name: 'Lock Rekey', desc: 'Affordable rekeying for homes and apartments', border: 'border-t-blue-500', icon: Key },
  { name: 'Car Keys', desc: 'Key cutting, programming, and replacement', border: 'border-t-green-500', icon: Car },
  { name: 'Lock Change', desc: 'Full lock replacement and upgrades', border: 'border-t-amber-500', icon: Lock },
  { name: 'Smart Locks', desc: 'Modern keyless entry installation', border: 'border-t-teal-500', icon: Smartphone },
  { name: 'Commercial Systems', desc: 'Business security and access control', border: 'border-t-gray-500', icon: Building2 },
];

export default function ParolePage() {
  const location = getLocationBySlug('parole');

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
        <section className="bg-gradient-to-b from-gray-900 to-blue-950 text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Same-Day Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fast Locksmith Service Near Annapolis Mall
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Serving the Parole commercial and residential area with licensed, professional locksmith
              services. From mall parking lot lockouts to home security upgrades, we are here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors">
                <Phone className="w-5 h-5" />
                Call {CONTACT.PHONE_DISPLAY}
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors border border-white/20">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Complete Locksmith Solutions in Parole
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Residential Services</h3>
                </div>
                <ul className="space-y-3">
                  {['Home lockout assistance', 'Lock rekeying for new homeowners', 'Deadbolt installation & repair', 'Smart lock setup & programming', 'Garage & sliding door locks', 'Mailbox lock replacement'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <Shield className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Commercial Services</h3>
                </div>
                <ul className="space-y-3">
                  {['Storefront lock installation', 'Master key systems', 'Access control setup', 'High-security lock upgrades', 'Panic bar installation', 'Office lockout service'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <Shield className="w-4 h-4 text-gray-800 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-blue-600 py-4">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <Link href={`tel:${CONTACT.PHONE}`} className="font-semibold hover:underline">{CONTACT.PHONE_DISPLAY}</Link>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <Link href={`mailto:${CONTACT.EMAIL}`} className="hover:underline text-sm">{CONTACT.EMAIL}</Link>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Serving Parole & Annapolis Mall Area</span>
            </div>
          </div>
        </div>

        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional locksmith services available throughout Parole, Riva Road, Jennifer Road, and West Annapolis.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.name} className={`bg-white rounded-xl p-6 border-t-4 ${service.border} shadow-sm hover:shadow-md transition-shadow`}>
                  <service.icon className="w-8 h-8 text-gray-700 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Locked Out Near Annapolis Mall?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Our mobile locksmiths serve the Parole area. Call now for same-day service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors">
                <Phone className="w-5 h-5" />
                {CONTACT.PHONE_DISPLAY}
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-400 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors">
                Request Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Parole" />
        <FAQSection faqs={location.faqs} title="Parole Locksmith FAQ" />
        <DirectionsSection fromLocation="Parole" directions={location.directions} distance={location.distance} />

        <section id="contact" className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Get a Free Quote in Parole</h2>
            <ContactForm pageSource="parole-page" locationPreference="Parole" />
          </div>
        </section>

        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
