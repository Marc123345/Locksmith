'use client';

import { Phone, Mail, Home, Key, Building2, Wrench, Smartphone, CheckCircle, Shield, Clock, MapPin } from 'lucide-react';
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
  { title: 'Emergency Lockout Service', description: '24/7 emergency lockout service near Severna Park', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Lock Change Service', description: 'Complete lock replacement for Severna Park homes', href: '/services/lock-change', type: 'service' as const },
  { title: 'Car Key Programming', description: 'Automotive key services in Severna Park', href: '/services/car-key-programming', type: 'service' as const },
  { title: 'Arnold Locksmith', description: 'Expert locksmith in Arnold and Bay Hills', href: '/locations/arnold', type: 'location' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
];

const services = [
  { name: 'Home Security', description: 'Premium residential lock solutions for Severna Park homes', icon: Home, color: 'text-blue-600', bg: 'bg-blue-100' },
  { name: 'Car Key Services', description: 'Key cutting, fob programming, and emergency car lockouts', icon: Key, color: 'text-sky-600', bg: 'bg-sky-100' },
  { name: 'Business Locks', description: 'Commercial-grade security for local businesses', icon: Building2, color: 'text-slate-700', bg: 'bg-slate-100' },
  { name: 'Emergency Help', description: '24/7 rapid response for lockouts and urgent needs', icon: Phone, color: 'text-red-500', bg: 'bg-red-100' },
  { name: 'Lock Repair', description: 'Expert repair and maintenance for all lock types', icon: Wrench, color: 'text-amber-500', bg: 'bg-amber-100' },
  { name: 'Smart Locks', description: 'Modern smart lock installation and integration', icon: Smartphone, color: 'text-teal-600', bg: 'bg-teal-100' },
];

const trustItems = [
  'Licensed, Bonded & Insured',
  'Background Checked Technicians',
  'Transparent Pricing',
  'Satisfaction Guaranteed',
];

export default function SevernaParkPage() {
  const location = getLocationBySlug('severna-park');

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
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-950 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Premium Locksmith Service in Severna Park
              </h1>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                Serving Severna Park, Benfield, Chartwell, and surrounding neighborhoods with
                top-tier locksmith services. Available 24/7 with 20-30 minute response times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`tel:${CONTACT.PHONE}`}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  <Phone className="h-5 w-5" />
                  {CONTACT.PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${CONTACT.EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-300/50 hover:border-blue-300 text-blue-100 font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Email Us
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 bg-blue-800/60 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full">
                  <Shield className="h-3.5 w-3.5" /> Licensed & Insured
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-800/60 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full">
                  <Clock className="h-3.5 w-3.5" /> 15+ Years
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-800/60 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full">
                  <MapPin className="h-3.5 w-3.5" /> 5-Star Rated
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Trusted by Severna Park Families</h2>
                <p className="text-gray-600 leading-relaxed">
                  For over a decade, we have been the preferred locksmith for Severna Park&apos;s
                  upscale community. From the tree-lined streets of Benfield to the elegant homes
                  of Chartwell, our technicians deliver premium service with the professionalism
                  and attention to detail that Severna Park residents expect. Every job is backed
                  by our satisfaction guarantee and transparent pricing.
                </p>
              </div>
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Services in Severna Park
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.name} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${service.bg} rounded-full mb-4`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Schedule Service in Severna Park
            </h2>
            <ContactForm pageSource="severna-park-location" locationPreference="Severna Park" />
          </div>
        </section>

        <section className="bg-blue-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Call Severna Park&apos;s Trusted Locksmith
            </h2>
            <p className="text-lg text-blue-200 mb-8">
              Premium locksmith service is just one call away. Reach us anytime for fast, reliable help.
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
        <ReviewsSection locationName="Severna Park" />
        <FAQSection faqs={location.faqs} title="Severna Park Locksmith FAQ" />
        <DirectionsSection fromLocation="Severna Park" directions={location.directions} distance={location.distance} />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
