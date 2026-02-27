'use client';

import { Phone, Shield, Key, Home, Car, Building2, Lock, MapPin, Star, Anchor } from 'lucide-react';
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
  { title: 'Residential', description: 'Complete home lock services for Bay Ridge waterfront properties', icon: Home, color: 'bg-blue-600' },
  { title: 'Automotive', description: 'Car key replacement, fob programming, and lockouts', icon: Car, color: 'bg-blue-600' },
  { title: 'Commercial', description: 'Business security solutions and access control systems', icon: Building2, color: 'bg-slate-700' },
  { title: 'Emergency', description: '24/7 emergency lockout service with rapid response', icon: Phone, color: 'bg-red-500' },
  { title: 'Lock Installation', description: 'New lock installation and upgrades for all door types', icon: Lock, color: 'bg-blue-500' },
  { title: 'High-Security', description: 'Premium high-security lock systems for maximum protection', icon: Shield, color: 'bg-blue-600' },
];

const faqs = [
  { question: 'How fast can you reach Bay Ridge?', answer: 'We dispatch the nearest available technician to Bay Ridge. We are located just 3 miles away in Annapolis.' },
  { question: 'Do you offer high-security locks for waterfront homes?', answer: 'Yes, we specialize in high-security lock systems ideal for waterfront properties in Bay Ridge, including corrosion-resistant options.' },
  { question: 'Are you available for emergencies at night?', answer: 'Absolutely. We provide 24/7 emergency locksmith services to Bay Ridge residents any time of day or night.' },
  { question: 'Can you rekey all locks in my Bay Ridge home?', answer: 'Yes, we can rekey all locks in your home in a single visit, giving you new keys while keeping your existing hardware.' },
];

const relatedLinks = [
  { title: 'Lock Change Service', description: 'High-security lock installation for Bay Ridge homes', href: '/services/lock-change', type: 'service' as const },
  { title: 'Emergency Lockout', description: '24/7 emergency lockout in Bay Ridge', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
  { title: 'Eastport Locksmith', description: 'Your local Eastport locksmith', href: '/locations/eastport', type: 'location' as const },
  { title: 'Hillsmere Shores Locksmith', description: 'Neighborhood locksmith in Hillsmere Shores', href: '/locations/hillsmere-shores', type: 'location' as const },
];

const directions = [
  'Head south on MD-2 from Annapolis',
  'Continue onto Bay Ridge Avenue',
  'Follow signs toward Bay Ridge community',
  'Arrive at your Bay Ridge destination',
];

export default function BayRidgePage() {
  const location = getLocationBySlug('bay-ridge');
  if (!location) return <NotFoundPage />;
  return (
    <>
      <LocationJsonLd location={location} />
      <div className="pt-16 md:pt-20">
        <SpecialOfferBanner />
      </div>
      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-b from-blue-900 to-blue-950 text-white py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="absolute w-full" style={{ top: `${20 + i * 15}%`, height: '2px', background: 'white', opacity: 0.3, transform: `scaleX(${1 + i * 0.2})` }} />
            ))}
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-400/30 rounded-full px-5 py-2 mb-6">
              <Anchor className="w-4 h-4 text-blue-200" />
              <span className="text-blue-200 text-sm font-medium">Waterfront Community</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Trusted Locksmith in Bay Ridge</h1>
            <p className="text-xl text-blue-100/80 mb-4 max-w-2xl mx-auto">Professional locksmith services for Bay Ridge, South Annapolis, and the Quiet Waters Park area. Just 3 miles away — licensed &amp; insured.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg">
                <Phone className="w-5 h-5" /> Call Now
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 border-2 border-blue-300/50 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg">
                <MapPin className="w-5 h-5" /> Get a Free Quote
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-16 bg-white rounded-t-[50%_100%]" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Waterfront Security Specialists</h2>
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Shield, title: 'High-Security Locks', desc: 'Premium lock systems built for waterfront properties' },
                  { icon: MapPin, title: 'Local Service', desc: 'Serving Bay Ridge and the surrounding area' },
                  { icon: Key, title: 'All Lock Types', desc: 'Residential, commercial, and automotive service' },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Our Bay Ridge Services</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Comprehensive locksmith solutions for the Bay Ridge waterfront community</p>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-t-2xl rounded-b-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`${service.color} h-2 rounded-t-2xl`} />
                  <div className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${service.color} rounded-lg mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Contact Us in Bay Ridge</h2>
            <p className="text-center text-slate-600 mb-8">Get a free quote for any locksmith service in the Bay Ridge area</p>
            <ContactForm pageSource="bay-ridge" locationPreference="Bay Ridge, MD" />
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white text-center">
          <div className="container mx-auto px-4">
            <Star className="w-10 h-10 text-blue-300 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Your Bay Ridge Home Today</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">Trusted by waterfront homeowners throughout Bay Ridge. Call now for fast, professional locksmith service.</p>
            <Link href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-10 rounded-lg transition-colors text-lg">
              <Phone className="w-5 h-5" /> {CONTACT.PHONE}
            </Link>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Bay Ridge" />
        <FAQSection faqs={faqs} title="Bay Ridge Locksmith FAQ" />
        <DirectionsSection fromLocation="Annapolis" directions={directions} distance="3 miles" />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
