import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { CONTACT } from '@/utils/contact';
import ContactForm from '@/components/ContactForm';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import TestimonialSection from '@/components/TestimonialSection';
import DirectionsSection from '@/components/DirectionsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import SpecialOfferBanner from '@/components/SpecialOfferBanner';
import { standardPricing } from '@/data/pricing';
import { getTestimonialsByLocation } from '@/data/testimonials';
import type { LocationData } from '@/data/locations';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface LocationTemplateProps {
  location: LocationData;
}

export default function LocationTemplate({ location }: LocationTemplateProps) {
  const testimonials = getTestimonialsByLocation(location.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <meta property="og:title" content={location.metaTitle} />
        <meta property="og:description" content={location.metaDescription} />
        <link rel="canonical" href={`https://asecureannapolis.com/locations/${location.slug}`} />
      </Helmet>

      <SpecialOfferBanner />

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs />

            <div className="mt-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {location.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                {location.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <a
                  href={`tel:${CONTACT.PHONE}`}
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {CONTACT.PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${CONTACT.EMAIL}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Your Trusted Locksmith in {location.name}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {location.description}
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Hours of Operation</h3>
                      <p className="text-gray-700">Mon–Sat: 8:00 AM – 8:00 PM</p>
                      <p className="text-gray-700">Sun: Emergency Services Only</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Service Areas</h3>
                      <p className="text-gray-700">
                        {location.neighborhoods.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-700 mb-6">
                  Need fast locksmith help in {location.name}? Fill out the form below:
                </p>
                <ContactForm
                  pageSource={`/locations/${location.slug}`}
                  locationPreference={location.name}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Full-Service Locksmith Solutions in {location.name}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Residential Locksmith Services
                </h3>
                <p className="text-gray-700">
                  Home security is our top priority. Our residential locksmith services in {location.name} include lock rekeying, deadbolt installation, smart lock upgrades, and emergency home lockouts.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Automotive Locksmith Services
                </h3>
                <p className="text-gray-700">
                  Need a car locksmith in {location.name}? Whether you're locked out, lost your keys, or your fob isn't working — we offer car door unlocks, ignition repair, transponder key programming, and more.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Commercial Locksmith Services
                </h3>
                <p className="text-gray-700">
                  Business owners trust us for expert commercial locksmith services in {location.name} — including master key systems, keyless entry, panic bars, and high-security locks.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Emergency Locksmith in {location.name}
                </h3>
                <p className="text-gray-700">
                  Locked out late at night? We're available 24/7 for emergency locksmith services in {location.name}. We arrive fast, fix the issue quickly, and get you back inside safely.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Lock Repair & Installation
                </h3>
                <p className="text-gray-700">
                  We install, repair, and replace all major lock brands — from traditional deadbolts to the latest in smart lock technology.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fast Response Time
                </h3>
                <p className="text-gray-700">
                  Our mobile locksmiths typically arrive in {location.responseTime} for emergency and scheduled services throughout {location.name}.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Call Now for Immediate Locksmith Help in {location.name}
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Don't wait when security is at stake. Whether you're locked out or upgrading your locks, call A Secure Annapolis Locksmith today.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`tel:${CONTACT.PHONE}`}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Phone className="h-6 w-6 mr-2" />
                {CONTACT.PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                <Mail className="h-6 w-6 mr-2" />
                {CONTACT.EMAIL}
              </a>
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="flex items-start">
                <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                <p className="text-gray-700">Fast, local response in {location.name}</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                <p className="text-gray-700">Fully licensed, bonded & insured</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                <p className="text-gray-700">Trusted by hundreds of {location.name} residents</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                <p className="text-gray-700">15+ years serving Anne Arundel County</p>
              </div>
            </div>
          </div>
        </section>

        {testimonials.length > 0 && (
          <TestimonialSection
            testimonials={testimonials}
            title={`${location.name} Residents Trust Us`}
          />
        )}

        <FAQSection faqs={location.faqs} />

        <DirectionsSection
          fromLocation={location.name}
          directions={location.directions}
          distance={location.distance}
        />

        <WhyChooseUs />
      </div>
    </>
  );
}
