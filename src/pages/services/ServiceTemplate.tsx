import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, CheckCircle, Clock, Shield, Wrench } from 'lucide-react';
import { CONTACT } from '@/utils/contact';
import ContactForm from '@/components/ContactForm';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import TestimonialSection from '@/components/TestimonialSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import SpecialOfferBanner from '@/components/SpecialOfferBanner';
import ServiceVisuals from '@/components/ServiceVisuals';
import RelatedContent from '@/components/RelatedContent';
import { standardPricing } from '@/data/pricing';
import { getTestimonialsByService } from '@/data/testimonials';
import type { ServiceData } from '@/data/services';

interface ServiceTemplateProps {
  service: ServiceData;
  pricing?: any[];
}

export default function ServiceTemplate({ service, pricing = standardPricing }: ServiceTemplateProps) {
  const testimonials = getTestimonialsByService(service.id);

  // Related services and locations for internal linking
  const relatedLinks = [
    {
      title: 'Emergency Lockout Service',
      description: '24/7 emergency locksmith service available throughout Anne Arundel County',
      href: '/services/emergency-lockout',
      type: 'service' as const
    },
    {
      title: 'Lock Rekey Service',
      description: 'Professional lock rekeying for enhanced security',
      href: '/services/lock-rekey',
      type: 'service' as const
    },
    {
      title: 'Lock Change Service',
      description: 'Complete lock replacement and installation services',
      href: '/services/lock-change',
      type: 'service' as const
    },
    {
      title: 'Annapolis Locksmith',
      description: 'Local locksmith services in downtown Annapolis and Eastport',
      href: '/',
      type: 'location' as const
    },
    {
      title: 'Severna Park Locksmith',
      description: 'Fast locksmith services in Severna Park and Benfield',
      href: '/locations/severna-park',
      type: 'location' as const
    },
    {
      title: 'Arnold Locksmith',
      description: 'Expert locksmith services in Arnold and Cape St. Claire',
      href: '/locations/arnold',
      type: 'location' as const
    }
  ].filter(link => !link.href.includes(service.slug));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{service.metaTitle}</title>
        <meta name="title" content={service.metaTitle} />
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={`${service.name}, ${service.name} Annapolis, locksmith ${service.slug}, emergency ${service.slug}, 24/7 ${service.slug}, professional locksmith, Anne Arundel County locksmith`} />

        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="US-MD" />
        <meta name="geo.placename" content="Annapolis, MD" />
        <meta name="geo.position" content="38.978764;-76.492786" />
        <meta name="ICBM" content="38.978764, -76.492786" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.asecureannapolislocksmith.com/services/${service.slug}`} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:image" content={service.heroImage || 'https://www.asecureannapolislocksmith.com/og-image.jpg'} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="A Secure Annapolis Locksmith" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://www.asecureannapolislocksmith.com/services/${service.slug}`} />
        <meta property="twitter:title" content={service.metaTitle} />
        <meta property="twitter:description" content={service.metaDescription} />
        <meta property="twitter:image" content={service.heroImage || 'https://www.asecureannapolislocksmith.com/og-image.jpg'} />

        {/* Canonical */}
        <link rel="canonical" href={`https://www.asecureannapolislocksmith.com/services/${service.slug}`} />

        {/* Robots directives */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Schema.org Markup for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.name,
            "name": service.name,
            "description": service.metaDescription,
            "image": service.heroImage,
            "provider": {
              "@type": "Locksmith",
              "name": "A Secure Annapolis Locksmith",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "222 Severn Ave Ste 1 Building 7-6A",
                "addressLocality": "Annapolis",
                "addressRegion": "MD",
                "postalCode": "21403",
                "addressCountry": "US"
              },
              "telephone": CONTACT.PHONE,
              "email": CONTACT.EMAIL,
              "url": "https://www.asecureannapolislocksmith.com",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "60"
              }
            },
            "areaServed": service.serviceAreas.map(area => ({
              "@type": "City",
              "name": area
            })),
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": `https://www.asecureannapolislocksmith.com/services/${service.slug}`,
              "servicePhone": CONTACT.PHONE,
              "availableLanguage": {
                "@type": "Language",
                "name": "English"
              }
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD"
              }
            }
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
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
                "name": "Services",
                "item": "https://www.asecureannapolislocksmith.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": service.name,
                "item": `https://www.asecureannapolislocksmith.com/services/${service.slug}`
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="pt-16 md:pt-20">
        <SpecialOfferBanner />
      </div>

      <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{
              backgroundImage: `url(${service.heroImage || 'https://ik.imagekit.io/qcvroy8xpd/image-gen%20(10)_2aUBb2W0k.png?tr=f-auto,q-auto'})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                {service.subtitle}
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
                  Professional {service.name} in Annapolis, MD
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed mb-8">
                  <p className="mb-4">{service.description}</p>
                  <p className="mb-4">
                    At A Secure Annapolis Locksmith, we provide expert {service.name.toLowerCase()} with
                    fast response times and competitive pricing. Our licensed and insured technicians are
                    available to serve {service.serviceAreas.length > 0 ? service.serviceAreas.join(', ') : 'Anne Arundel County'} with
                    professional service you can trust.
                  </p>
                </div>

                {service.features && service.features.length > 0 && (
                  <div className="mb-8 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      What We Offer
                    </h3>
                    <div className="space-y-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700 text-lg">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Service Visuals - Replaces Images */}
                <div className="mt-8">
                  <ServiceVisuals serviceName={service.name} />
                </div>

                {service.serviceAreas && service.serviceAreas.length > 0 && (
                  <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Service Areas
                    </h3>
                    <p className="text-gray-700">
                      We proudly serve: {service.serviceAreas.join(', ')}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Request Service
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Need help with {service.name.toLowerCase()}? Fill out the form below and we'll respond immediately:
                </p>
                <ContactForm
                  pageSource={`/services/${service.slug}`}
                  serviceType={service.id}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps / When to Use Section */}
        {service.processSteps && service.processSteps.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  When to Use Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Here are common situations where our expert {service.name.toLowerCase()} can help you
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.processSteps.map((step, index) => (
                  <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-200">
                    <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose A Secure Annapolis Locksmith?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Fast Response
                </h3>
                <p className="text-gray-700">
                  We arrive quickly, typically within 20-30 minutes for emergency services throughout Annapolis and surrounding areas.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Licensed & Insured
                </h3>
                <p className="text-gray-700">
                  Fully licensed, bonded, and insured for your peace of mind. We adhere to the highest industry standards.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="bg-slate-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-10 w-10 text-slate-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Expert Service
                </h3>
                <p className="text-gray-700">
                  15+ years of experience serving Anne Arundel County with professional locksmith solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PricingSection pricing={pricing} />

        {testimonials.length > 0 && (
          <TestimonialSection
            testimonials={testimonials}
            title="What Our Clients Say"
          />
        )}

        <FAQSection faqs={service.faqs} />

        {/* CTA Section with Background */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://ik.imagekit.io/qcvroy8xpd/image-gen%20(11)_dwZTbXGi6.png?tr=f-auto,q-auto)'
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Call us now or send us an email for fast, professional {service.name.toLowerCase()}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a
                href={`tel:${CONTACT.PHONE}`}
                className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-lg text-xl font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl"
              >
                <Phone className="h-6 w-6 mr-3" />
                Call Now: {CONTACT.PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="inline-flex items-center px-10 py-5 bg-blue-500 text-white border-2 border-white rounded-lg text-xl font-bold hover:bg-blue-400 transition-all hover:scale-105 shadow-2xl"
              >
                <Mail className="h-6 w-6 mr-3" />
                Email Us
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">✓</div>
                <p className="text-white font-medium">24/7 Emergency Service</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">✓</div>
                <p className="text-white font-medium">Licensed & Insured</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">✓</div>
                <p className="text-white font-medium">15+ Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        <RelatedContent links={relatedLinks} />

        <WhyChooseUs />
      </div>
    </>
  );
}
