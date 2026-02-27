'use client';

import { useEffect } from 'react';
import { Phone, Mail, Clock, MapPin, Home, Building2, Car, Wrench } from 'lucide-react';
import { CONTACT } from '@/utils/contact';
import ContactForm from '@/components/ContactForm';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import TestimonialSection from '@/components/TestimonialSection';
import DirectionsSection from '@/components/DirectionsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import SpecialOfferBanner from '@/components/SpecialOfferBanner';
import IconShowcase from '@/components/IconShowcase';
import ServiceVisuals from '@/components/ServiceVisuals';
import RelatedContent from '@/components/RelatedContent';
import { standardPricing } from '@/data/pricing';
import { getTestimonialsByLocation } from '@/data/testimonials';
import type { LocationData } from '@/data/locations';

interface LocationTemplateProps {
  location: LocationData;
}

export default function LocationTemplate({ location }: LocationTemplateProps) {
  const testimonials = getTestimonialsByLocation(location.id);

  // Related services and locations for internal linking
  const relatedLinks = [
    {
      title: 'Emergency Lockout Service',
      description: `Fast emergency lockout help available 24/7 in ${location.name}`,
      href: '/services/emergency-lockout',
      type: 'service' as const
    },
    {
      title: 'Lock Rekey Service',
      description: `Professional lock rekeying for enhanced security in ${location.name}`,
      href: '/services/lock-rekey',
      type: 'service' as const
    },
    {
      title: 'Car Key Programming',
      description: `Automotive key cutting and programming services in ${location.name}`,
      href: '/services/car-key-programming',
      type: 'service' as const
    },
    {
      title: 'Annapolis Locksmith',
      description: 'Professional locksmith services in downtown Annapolis and Eastport',
      href: '/locations/annapolis',
      type: 'location' as const
    },
    {
      title: 'Severna Park Locksmith',
      description: 'Fast, affordable locksmith services in Severna Park and Benfield',
      href: '/locations/severna-park',
      type: 'location' as const
    },
    {
      title: 'Arnold Locksmith',
      description: 'Expert locksmith services in Arnold, Cape St. Claire, and Bay Hills',
      href: '/locations/arnold',
      type: 'location' as const
    }
  ].filter(link => !link.href.includes(location.slug));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Locksmith",
          "name": `A Secure Annapolis Locksmith - ${location.name}`,
          "description": location.metaDescription,
          "image": location.heroImage,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "222 Severn Ave Ste 1 Building 7-6A",
            "addressLocality": "Annapolis",
            "addressRegion": "MD",
            "postalCode": "21403",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 38.978764,
            "longitude": -76.492786
          },
          "url": `https://www.asecureannapolislocksmith.com/locations/${location.slug}`,
          "telephone": CONTACT.PHONE,
          "email": CONTACT.EMAIL,
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "20:00"
            }
          ],
          "areaServed": {
            "@type": "City",
            "name": location.name
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 38.978764,
              "longitude": -76.492786
            },
            "geoRadius": "25000"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "60"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Locksmith Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Emergency Lockout Service",
                  "description": `24/7 emergency locksmith service in ${location.name}`
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Locksmith",
                  "description": `Home lock installation, rekeying, and repair in ${location.name}`
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Automotive Locksmith",
                  "description": `Car key replacement, programming, and lockout service in ${location.name}`
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Locksmith",
                  "description": `Business security systems and lock installation in ${location.name}`
                }
              }
            ]
          }
        }) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.asecureannapolislocksmith.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Locations",
              "item": "https://www.asecureannapolislocksmith.com/locations"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": location.name,
              "item": `https://www.asecureannapolislocksmith.com/locations/${location.slug}`
            }
          ]
        }) }}
      />

      <div className="pt-16 md:pt-20">
        <SpecialOfferBanner />
      </div>

      <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{
              backgroundImage: `url(${location.heroImage || 'https://cdn.pixabay.com/photo/2020/02/03/00/12/lock-4815329_1280.jpg'})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {location.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                {location.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a
                  href={`tel:${CONTACT.PHONE}`}
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {CONTACT.PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${CONTACT.EMAIL}`}
                  className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all hover:scale-105 shadow-xl border-2 border-blue-300"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Your Trusted Local Locksmith in {location.name}
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-8">
                  <p className="mb-4">{location.description}</p>
                  <p className="mb-4">
                    As a locally owned and operated locksmith company serving {location.name} and Anne Arundel County,
                    we pride ourselves on delivering fast, reliable service with competitive pricing. Our licensed and
                    insured technicians are available to assist you 7 days a week.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <Clock className="h-8 w-8 text-blue-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Hours of Operation</h3>
                    <p className="text-gray-700 font-medium">Mon–Sat: 8:00 AM – 8:00 PM</p>
                    <p className="text-gray-700 font-medium">Sun: Emergency Services Only</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <MapPin className="h-8 w-8 text-blue-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Service Areas</h3>
                    <p className="text-gray-700">
                      {location.neighborhoods.slice(0, 3).join(', ')}
                      {location.neighborhoods.length > 3 && ' & more'}
                    </p>
                  </div>
                </div>

                {/* Service Visuals - Replaces Image */}
                <div className="mt-8">
                  <ServiceVisuals serviceName={`Locksmith Services in ${location.name}`} />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Need fast locksmith help in {location.name}? Fill out the form below and we'll respond immediately:
                </p>
                <ContactForm
                  pageSource={`/locations/${location.slug}`}
                  locationPreference={location.name}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Icon Showcase Section - Replaces Image Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Professional Locksmith Services in {location.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security solutions for your home, business, and vehicle
              </p>
            </div>

            <IconShowcase />
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Full-Service Locksmith Solutions in {location.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From emergency lockouts to complete security upgrades, we handle all your locksmith needs with professional expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-blue-100">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Residential Locksmith Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Home security is our top priority. Our residential locksmith services in {location.name} include <a href="/services/lock-rekey" className="text-blue-600 hover:underline">lock rekeying</a>, deadbolt installation, <a href="/services/lock-change" className="text-blue-600 hover:underline">lock changes</a>, smart lock upgrades, and <a href="/services/emergency-lockout" className="text-blue-600 hover:underline">emergency home lockouts</a>.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-green-100">
                <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Automotive Locksmith Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Need a car locksmith in {location.name}? Whether you're locked out, <a href="/services/lost-car-keys" className="text-blue-600 hover:underline">lost your keys</a>, or your fob isn't working — we offer car door unlocks, ignition repair, <a href="/services/car-key-programming" className="text-blue-600 hover:underline">transponder key programming</a>, and more.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-purple-100">
                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Commercial Locksmith Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Business owners in {location.name} trust us for expert commercial locksmith services — including master key systems, keyless entry, panic bars, and high-security locks. We secure offices, retail stores, and warehouses throughout the area.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-red-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-red-100">
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  24/7 Emergency Service
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Locked out late at night? We're available 24/7 for emergency locksmith services in {location.name}. We arrive fast, fix the issue quickly, and get you back inside safely.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-orange-100">
                <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Lock Repair & Installation Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We install, <a href="/services/lock-repair" className="text-blue-600 hover:underline">repair</a>, and replace all major lock brands serving {location.name} — from traditional deadbolts to the latest in smart lock technology. Professional service guaranteed with a satisfaction guarantee.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-teal-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-teal-100">
                <div className="bg-teal-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Prompt Dispatch
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our mobile locksmiths dispatch promptly for emergency and scheduled services throughout {location.name} and surrounding areas. We come to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PricingSection pricing={standardPricing} />

        {/* CTA Section with Image */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/12/06/14/33/lock-1886634_1280.jpg)'
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Call Now for Immediate Locksmith Help in {location.name}
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Don't wait when security is at stake. Whether you're locked out or upgrading your locks, call A Secure Annapolis Locksmith today.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a
                href={`tel:${CONTACT.PHONE}`}
                className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-lg text-xl font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl"
              >
                <Phone className="h-6 w-6 mr-3" />
                {CONTACT.PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="inline-flex items-center px-10 py-5 bg-blue-500 text-white rounded-lg text-xl font-bold hover:bg-blue-400 transition-all hover:scale-105 shadow-2xl border-2 border-white"
              >
                <Mail className="h-6 w-6 mr-3" />
                Email Us
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">✓</div>
                <p className="text-white font-medium">Fast, local response in {location.name}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">✓</div>
                <p className="text-white font-medium">Fully licensed, bonded & insured</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">✓</div>
                <p className="text-white font-medium">Trusted by hundreds of residents</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">✓</div>
                <p className="text-white font-medium">15+ years serving Anne Arundel County</p>
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

        <RelatedContent links={relatedLinks} />

        <WhyChooseUs />
      </div>
    </>
  );
}
