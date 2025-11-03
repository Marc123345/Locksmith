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
import { standardPricing } from '@/data/pricing';
import { getTestimonialsByService } from '@/data/testimonials';
import type { ServiceData } from '@/data/services';

interface ServiceTemplateProps {
  service: ServiceData;
  pricing?: any[];
}

export default function ServiceTemplate({ service, pricing = standardPricing }: ServiceTemplateProps) {
  const testimonials = getTestimonialsByService(service.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <link rel="canonical" href={`https://asecureannapolis.com/services/${service.slug}`} />
      </Helmet>

      <SpecialOfferBanner />

      <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{
              backgroundImage: `url(${service.heroImage || 'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2423543_1280.jpg'})`
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
                  {service.name}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {service.description}
                </p>

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

                {/* Featured Image */}
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={service.contentImage || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                    alt={`Professional ${service.name.toLowerCase()}`}
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Additional Images Gallery */}
                {service.additionalImages && service.additionalImages.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.additionalImages.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={image}
                          alt={`${service.name} service ${index + 1}`}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}

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

              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-gray-100 sticky top-24">
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
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-10 w-10 text-purple-600" />
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
              backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/07/08/14/14/key-3524244_1280.jpg)'
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

        <WhyChooseUs />
      </div>
    </>
  );
}
