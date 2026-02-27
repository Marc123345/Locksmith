'use client';

import { Home, Car, Building2, Phone, MapPin, Clock, Navigation, Leaf, Shield, TreePine } from 'lucide-react';
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

const neighborhoods = ['Crownsville', 'Herald Harbor', 'Arden on the Severn'];

const services = [
  { icon: Home, title: 'Residential Locksmith', description: 'Lock installations, rekeying, and repairs for Crownsville homes and estates.' },
  { icon: Car, title: 'Automotive Locksmith', description: 'Car lockouts, key replacement, and transponder programming on site.' },
  { icon: Building2, title: 'Commercial Locksmith', description: 'Business security solutions, access control, and master key systems.' },
  { icon: Phone, title: 'Emergency Service', description: 'Same-day emergency lockout assistance in Crownsville.' },
];

const faqs = [
  { question: 'How quickly can you reach Crownsville?', answer: 'We serve all of Crownsville including Herald Harbor and Arden on the Severn with same-day service.' },
  { question: 'Do you service rural properties in Crownsville?', answer: 'Yes, we service all properties in the Crownsville area including rural homes, farms, and estates throughout the community.' },
  { question: 'What are your hours for Crownsville service calls?', answer: 'We are available 7 days a week for scheduled and emergency locksmith services in Crownsville and surrounding areas.' },
  { question: 'Can you rekey locks at my Crownsville home?', answer: 'Absolutely. We offer professional lock rekeying for all residential properties in Crownsville at competitive rates.' },
];

const relatedLinks = [
  { title: 'Lock Rekey Service', description: 'Professional rekeying for Crownsville homes', href: '/services/lock-rekey', type: 'service' as const },
  { title: 'Emergency Lockout', description: 'Same-day emergency lockout help in Crownsville', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
  { title: 'Severna Park Locksmith', description: 'Locksmith services in Severna Park area', href: '/locations/severna-park', type: 'location' as const },
  { title: 'Riva Locksmith', description: 'Locksmith services along the Riva Road corridor', href: '/locations/riva', type: 'location' as const },
];

const directions = [
  'Head west on US-50 toward Crownsville',
  'Take Exit 22 for MD-178 / Generals Highway',
  'Continue on Generals Highway into Crownsville',
  'Follow signs to your destination in the Crownsville area',
];

export default function CrownsvillePage() {
  const location = getLocationBySlug('crownsville');
  if (!location) return <NotFoundPage />;

  return (
    <>
      <LocationJsonLd location={location} />
      <div className="pt-16 md:pt-20">
        <SpecialOfferBanner />
      </div>
      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-950 py-24 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.15),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl px-4">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-800/60 px-4 py-2 text-sm text-blue-200">
              <TreePine className="h-4 w-4" />
              Nature &amp; Historic Community
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Your Local Locksmith in Crownsville
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100/80">
              Proudly serving Herald Harbor, Arden on the Severn, and the entire Crownsville
              community with trusted locksmith services and rural charm.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`tel:${CONTACT.PHONE}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-semibold text-blue-900 shadow-lg transition hover:bg-blue-50"
              >
                <Phone className="h-5 w-5" />
                Call {CONTACT.PHONE}
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-300/50 px-8 py-3.5 font-semibold text-blue-100 transition hover:bg-blue-800"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="mx-auto max-w-5xl px-4">
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="border-b border-blue-100 p-8 md:border-b-0 md:border-r">
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">Areas We Cover</h2>
                  <ul className="space-y-4">
                    {neighborhoods.map((n) => (
                      <li key={n} className="flex items-center gap-3 text-gray-700">
                        <MapPin className="h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-lg">{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6 p-8">
                  <div className="flex items-start gap-4">
                    <Clock className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Availability</p>
                      <p className="text-gray-600">Same-day service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Navigation className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Distance</p>
                      <p className="text-gray-600">10 miles from our shop</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Availability</p>
                      <p className="text-gray-600">7 days a week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
              Locksmith Services in Crownsville
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
              Comprehensive locksmith solutions for the Crownsville community and surrounding areas.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-lg border border-gray-100 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <s.icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-900 py-16 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <Leaf className="mx-auto mb-4 h-10 w-10 text-blue-300" />
            <h2 className="mb-4 text-3xl font-bold">Trusted by Crownsville Residents</h2>
            <p className="mb-8 text-lg text-blue-100/80">
              From historic properties to modern homes, we provide reliable locksmith services
              tailored to the unique character of the Crownsville community.
            </p>
            <Link
              href={`tel:${CONTACT.PHONE}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-semibold text-blue-900 shadow-lg transition hover:bg-blue-50"
            >
              <Phone className="h-5 w-5" />
              Call Now: {CONTACT.PHONE}
            </Link>
          </div>
        </section>

        <section id="contact" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Request Service in Crownsville
            </h2>
            <ContactForm pageSource="crownsville" locationPreference="Crownsville" />
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Crownsville" />
        <FAQSection faqs={faqs} title="Crownsville Locksmith FAQ" />
        <DirectionsSection
          fromLocation="Crownsville"
          directions={directions}
          distance="10 miles"
        />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
