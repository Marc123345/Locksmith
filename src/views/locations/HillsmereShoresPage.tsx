'use client';

import { Clock, Home, Key, Building2, Phone, MapPin, Timer, Map, Shield } from 'lucide-react';
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

const relatedLinks = [
  { title: 'Lock Rekey Service', description: 'Professional rekeying for Hillsmere Shores homes', href: '/services/lock-rekey', type: 'service' as const },
  { title: 'Emergency Lockout', description: 'Same-day emergency lockout in Hillsmere Shores', href: '/services/emergency-lockout', type: 'service' as const },
  { title: 'Annapolis Locksmith', description: 'Professional locksmith in downtown Annapolis', href: '/locations/annapolis', type: 'location' as const },
  { title: 'Bay Ridge Locksmith', description: 'Trusted locksmith in Bay Ridge', href: '/locations/bay-ridge', type: 'location' as const },
  { title: 'Eastport Locksmith', description: 'Your local Eastport locksmith', href: '/locations/eastport', type: 'location' as const },
];

const faqs = [
  { question: 'How quickly can you reach Hillsmere Shores?', answer: 'Hillsmere Shores is just 4 miles from our location. Our technicians are familiar with the neighborhood and surrounding areas.' },
  { question: 'Do you service the entire Hillsmere Shores community?', answer: 'Yes, we cover all of Hillsmere Shores, the Forest Drive Corridor, and South Annapolis areas with full locksmith services.' },
  { question: 'Are you available for emergencies at night?', answer: 'Absolutely. We provide same-day emergency locksmith services to Hillsmere Shores residents, including weekends and holidays.' },
  { question: 'Can you rekey all locks in my Hillsmere Shores home?', answer: 'Yes, we offer complete home rekeying services so all your doors work with a single key, which is especially popular with new homeowners in the area.' },
];

const services = [
  { icon: Home, label: 'Home Security', desc: 'Lock installation, rekeying, and smart lock upgrades for your Hillsmere Shores home.', color: 'bg-blue-600' },
  { icon: Key, label: 'Car Key Help', desc: 'Key cutting, fob programming, and emergency car lockout assistance.', color: 'bg-green-600' },
  { icon: Building2, label: 'Business Locks', desc: 'Commercial lock solutions, access control, and master key systems.', color: 'bg-slate-600' },
  { icon: Phone, label: 'Same-Day Emergency', desc: 'Same-day emergency locksmith response for any situation.', color: 'bg-red-500' },
];

export default function HillsmereShoresPage() {
  const location = getLocationBySlug('hillsmere-shores');
  if (!location) return <NotFoundPage />;

  return (
    <>
      <LocationJsonLd location={location} />
      <div className="pt-16 md:pt-20">
        <SpecialOfferBanner />
      </div>
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-800 to-gray-900 text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4" />
              Same-Day Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Neighborhood Locksmith in Hillsmere Shores
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Trusted by your neighbors for fast, reliable locksmith services throughout the Hillsmere Shores community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 font-semibold px-8 py-3.5 rounded-lg hover:bg-slate-100 transition-colors">
                <Phone className="w-5 h-5" />
                Call Now
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 border-2 border-slate-400 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
              <div className="md:w-1/2 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">We Know Your Neighborhood</h2>
                <p className="text-slate-600 leading-relaxed">
                  Hillsmere Shores is more than just a service area to us — it's a community we're proud to protect. From the waterfront homes along the South River to the quiet streets off Forest Drive, we understand the unique security needs of this close-knit neighborhood. Our technicians arrive quickly because they know every turn.
                </p>
              </div>
              <div className="md:w-1/2 bg-slate-50 p-8 md:p-10 flex flex-col justify-center gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <Timer className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Response Time</p>
                    <p className="text-lg font-semibold text-slate-800">Same-Day</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <Map className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Distance</p>
                    <p className="text-lg font-semibold text-slate-800">4 Miles</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Areas Covered</p>
                    <p className="text-lg font-semibold text-slate-800">Hillsmere Shores, Forest Drive, South Annapolis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Our Services in Hillsmere Shores</h2>
              <p className="text-slate-500 max-w-xl mx-auto">Complete locksmith solutions tailored to your neighborhood.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((svc) => (
                <div key={svc.label} className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-16 h-16 ${svc.color} rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-slate-500/20`}>
                    <svc.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{svc.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10">
              <Shield className="w-10 h-10 text-slate-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Request Service in Hillsmere Shores</h2>
              <p className="text-slate-500">Fill out the form and we'll get back to you promptly.</p>
            </div>
            <ContactForm pageSource="hillsmere-shores" locationPreference="Hillsmere Shores, MD" />
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-800 to-gray-900 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Call Your Hillsmere Shores Locksmith</h2>
            <p className="text-slate-300 mb-8 text-lg">Available for same-day residential, automotive, and commercial lock needs.</p>
            <Link href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center gap-2 bg-white text-slate-800 font-semibold px-10 py-4 rounded-lg text-lg hover:bg-slate-100 transition-colors">
              <Phone className="w-5 h-5" />
              {CONTACT.PHONE}
            </Link>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />
        <ReviewsSection locationName="Hillsmere Shores" />
        <FAQSection faqs={faqs} title="Hillsmere Shores Locksmith FAQ" />
        <DirectionsSection fromLocation="Hillsmere Shores, MD" directions={location.directions} distance="4 miles" />
        <RelatedContent links={relatedLinks} />
        <WhyChooseUs />
      </div>
    </>
  );
}
