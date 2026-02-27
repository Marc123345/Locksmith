'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, Shield, Star, Home, Car, Building2, Wrench, ChevronRight, Award, AlertTriangle, CheckCircle } from 'lucide-react';
import { getLocationBySlug } from '@/data/locations';
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
import type { PricingItem } from '@/data/pricing';

const annapolisPricing: PricingItem[] = [
  { service: 'Home Lockout', price: 'Call for a Free Quote', description: 'Professional, damage\u2011free entry in most cases' },
  { service: 'Car Lockout Service', price: 'Call for a Free Quote', description: 'Mobile service wherever your vehicle is parked' },
  { service: 'Rekeying', price: 'Call for a Free Quote', description: 'Cost\u2011effective when you don\u2019t need new hardware' },
  { service: 'Smart Lock Installation', price: 'Call for a Free Quote', description: 'Includes removal of old locks and setup of your new system' },
  { service: 'Service Call Fee', price: 'Call for a Free Quote', description: 'Applied to all completed service visits' },
];

const vanAreas = [
  'Downtown Annapolis and the Historic District',
  'Eastport and the Maritime Republic of Eastport',
  'Hillsmere Shores and Bay Ridge waterfront neighborhoods',
  'Parole, Murray Hill, and Admiral Heights',
];

const residentialServices = [
  'Emergency home lockouts',
  'Lock rekeying when you move in or change who has keys',
  'Deadbolt installation and security upgrades',
  'Smart lock and keypad installation (August, Schlage, Yale, Kwikset, and more)',
  'Lock repair and alignment for doors that stick or won\u2019t latch',
];

const automotiveServices = [
  'Fast car lockout service',
  'Key cutting and duplication',
  'Transponder and key\u2011fob programming',
  'Ignition repair and broken key extraction',
];

const commercialServices = [
  'Master key systems for offices and multi\u2011unit buildings',
  'High\u2011security and restricted\u2011key lock systems',
  'Access\u2011control and keyless entry consultation',
  'Panic bars, door closers, and exit hardware installation',
  'Office lockout and interior door service',
];

const emergencySteps = [
  'Move to a safe, visible spot near your door, lobby, or vehicle.',
  'Avoid forcing the lock or prying the door\u2014this often causes damage that is more expensive than a professional opening.',
  'Call (410) 849\u20116069 and tell us what happened (home, car, or business).',
  'We\u2019ll explain your options, give you a quote, and dispatch a technician.',
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
                <span className="text-blue-200 text-sm font-medium">Flagship Location &mdash; Based in Annapolis</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Annapolis&apos;s Trusted Local Locksmith
              </h1>
              <p className="text-lg md:text-xl text-blue-100/80 mb-4 leading-relaxed">
                {location.description}
              </p>
              <p className="text-lg text-blue-100/70 mb-8">
                Call {CONTACT.PHONE_DISPLAY} or <Link href="/contact" className="underline text-blue-200 hover:text-white transition-colors">request a free quote</Link> to get clear pricing and an accurate arrival time before you book.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                  <Phone className="h-5 w-5" />
                  {CONTACT.PHONE_DISPLAY}
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-blue-300/50 hover:border-blue-300 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
                  Request Free Quote
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
                  A Secure Annapolis Locksmith has been serving Annapolis for more than 15 years, working with historic homes, waterfront properties, condos, and commercial buildings throughout the city. Because our shop is just across Spa Creek in Eastport, our technicians are already driving through Downtown, Parole, Bay Ridge, and Hillsmere Shores every day.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">You&apos;ll often see our vans in:</h3>
                <div className="space-y-3">
                  {vanAreas.map((area) => (
                    <div key={area} className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-4 py-3 shadow-sm">
                      <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">{area}</span>
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
                <p className="text-2xl font-bold text-white">Local</p>
                <p className="text-slate-400 text-sm">Mobile Service</p>
              </div>
              <div>
                <Shield className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">15+ Years</p>
                <p className="text-slate-400 text-sm">Local Experience</p>
              </div>
              <div>
                <Star className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-slate-400 text-sm">Happy Customers</p>
              </div>
              <div>
                <MapPin className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">Local</p>
                <p className="text-slate-400 text-sm">Licensed, Bonded &amp; Insured</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Annapolis Locksmith Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                All work is performed by Maryland&#8209;licensed technicians with full insurance and photo&nbsp;ID, using professional&#8209;grade hardware and tools.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <ServiceCard
                icon={Home}
                color="bg-blue-600"
                title="Residential Locksmith"
                subtitle="Annapolis Homes & Condos"
                description="From older rowhouses downtown to newer homes in Parole, we secure your doors and entry points."
                items={residentialServices}
              />
              <ServiceCard
                icon={Car}
                color="bg-green-600"
                title="Automotive Locksmith"
                subtitle="Streets, Lots, and Marinas"
                description="Whether your keys are locked in the car near City Dock or lost at the mall in Parole, we come to you&#8212;no towing required."
                items={automotiveServices}
              />
              <ServiceCard
                icon={Building2}
                color="bg-slate-700"
                title="Commercial Locksmith"
                subtitle="Annapolis Businesses"
                description="Local shops, offices, and marinas rely on us to keep doors working and properties secure."
                items={commercialServices}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">24/7 Emergency Lockout Service</h2>
                <p className="text-gray-600 mt-2">
                  Lockouts and broken locks can happen anytime. Our on&#8209;call technician responds to emergency requests in Annapolis days, nights, weekends, and holidays, always with a clear quote before you confirm.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-900 py-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-4">
                <AlertTriangle className="h-7 w-7 text-yellow-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Need a Locksmith in Annapolis Right Now?</h2>
              <p className="text-lg text-blue-200">
                When your security or access is at risk, you need fast, local help&mdash;not just another search result.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {emergencySteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10">
                  <span className="flex-shrink-0 w-8 h-8 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold text-sm">{idx + 1}</span>
                  <p className="text-blue-100 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                <p className="text-blue-100 leading-relaxed">
                  Most Annapolis lockouts are opened non&#8209;destructively in just a few minutes, and if your lock is worn or unsafe, we can repair or replace it on the spot.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                <Phone className="h-5 w-5" />
                {CONTACT.PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT.EMAIL}`} className="inline-flex items-center justify-center gap-2 border-2 border-blue-300/50 hover:border-blue-300 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                <Mail className="h-5 w-5" />
                {CONTACT.EMAIL}
              </a>
            </div>
          </div>
        </section>

        <PricingSection pricing={annapolisPricing} />
        <ReviewsSection locationName="Annapolis" maxReviews={4} />

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

function ServiceCard({
  icon: Icon,
  color,
  title,
  subtitle,
  description,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className={`inline-flex items-center justify-center w-12 h-12 ${color} rounded-lg mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-sm font-medium text-blue-600 mb-3">{subtitle}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
            <Wrench className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
