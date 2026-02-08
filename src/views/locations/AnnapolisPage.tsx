'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, Shield, Star, Home, Car, Building2, Wrench, Smartphone, ChevronRight, Award } from 'lucide-react';
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
  { title: 'Residential Locksmith', desc: 'Home lockouts, rekeying, deadbolt installation, and security upgrades for Annapolis homes.', icon: Home, color: 'bg-blue-600' },
  { title: 'Automotive Locksmith', desc: 'Car lockouts, key cutting, transponder programming, and ignition repair services.', icon: Car, color: 'bg-green-600' },
  { title: 'Commercial Locksmith', desc: 'Master key systems, access control, high-security locks for Annapolis businesses.', icon: Building2, color: 'bg-slate-700' },
  { title: 'Emergency Lockout', desc: '24/7 emergency lockout service with 15-25 minute response times in Annapolis.', icon: Phone, color: 'bg-red-600' },
  { title: 'Lock Repair', desc: 'Expert lock repair, maintenance, and restoration for all lock types and brands.', icon: Wrench, color: 'bg-amber-600' },
  { title: 'Smart Locks', desc: 'Installation and programming of August, Schlage, Yale, and Kwikset smart locks.', icon: Smartphone, color: 'bg-teal-600' },
];

const relatedLinks = [
  { title: 'Emergency Lockout Service', description: 'Fast emergency lockout help available 24/7 in Annapolis, MD', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Lock Rekey Service', description: 'Professional lock rekeying for enhanced security in Annapolis, MD', href: '/services/lock-rekey', type: 'service' as const },
  { title: 'Car Key Programming', description: 'Automotive key cutting and programming services in Annapolis, MD', href: '/services/car-key-programming', type: 'service' as const },
  { title: 'Severna Park Locksmith', description: 'Fast, affordable locksmith services in Severna Park and Benfield', href: '/locations/severna-park', type: 'location' as const },
  { title: 'Arnold Locksmith', description: 'Expert locksmith services in Arnold, Cape St. Claire, and Bay Hills', href: '/locations/arnold', type: 'location' as const },
];

export default function AnnapolisPage() {
  const location = getLocationBySlug('annapolis');

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
          <div className="absolute inset-0 bg-[url('/images/annapolis-hero.jpg')] bg-cover bg-center opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
                <Award className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200 text-sm font-medium">Flagship Location — Based in Annapolis</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Annapolis&apos;s Trusted Local Locksmith
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

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Neighbors in Annapolis</h2>
                <p className="text-lg text-gray-600 mb-4">
                  A Secure Annapolis Locksmith is proudly headquartered right here in Annapolis, Maryland. As your local locksmith, we are deeply rooted in this historic community and committed to providing fast, honest, and affordable locksmith services to our neighbors.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  With over 15 years of experience serving the Annapolis area, we have built lasting relationships with homeowners, business owners, and property managers throughout the city. Our technicians know every neighborhood and can reach you faster than any competitor.
                </p>
                <p className="text-lg text-gray-600">
                  From the cobblestone streets of Downtown to the waterfront homes of Eastport, we deliver premium locksmith services with the personal touch that only a true local can offer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Neighborhoods We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {location.neighborhoods.map((neighborhood) => (
                    <div key={neighborhood} className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 shadow-sm">
                      <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <Clock className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">15-25 min</p>
                <p className="text-slate-400 text-sm">Response Time</p>
              </div>
              <div>
                <Shield className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">15+ Years</p>
                <p className="text-slate-400 text-sm">Experience</p>
              </div>
              <div>
                <Star className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-slate-400 text-sm">Happy Customers</p>
              </div>
              <div>
                <MapPin className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">Local</p>
                <p className="text-slate-400 text-sm">Based in Annapolis</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Locksmith Services in Annapolis</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive locksmith solutions for every need, delivered by licensed professionals who live and work in your community.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${service.color} rounded-lg mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-900 py-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Locksmith in Annapolis Right Now?</h2>
            <p className="text-lg text-blue-200 mb-8">Our local team is standing by to help. Call or email us for fast, reliable service.</p>
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
        <ReviewsSection locationName="Annapolis" />

        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Request a Free Quote</h2>
            <ContactForm pageSource="annapolis-location" locationPreference="Annapolis" />
          </div>
        </section>

        <FAQSection faqs={location.faqs} title="Annapolis Locksmith FAQ" />
        <DirectionsSection fromLocation="Downtown Annapolis" directions={location.directions} distance={location.distance} />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
