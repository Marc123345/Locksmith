import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, CheckCircle } from 'lucide-react';
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
import { Breadcrumbs } from '@/components/Breadcrumbs';

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
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs />

            <div className="mt-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                {service.subtitle}
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
                  {service.name}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {service.description}
                </p>

                {service.features && service.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      What We Offer
                    </h3>
                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.serviceAreas && service.serviceAreas.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Service Areas
                    </h3>
                    <p className="text-gray-700">
                      We proudly serve: {service.serviceAreas.join(', ')}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Request Service
                </h3>
                <p className="text-gray-700 mb-6">
                  Need help with {service.name.toLowerCase()}? Fill out the form below:
                </p>
                <ContactForm
                  pageSource={`/services/${service.slug}`}
                  serviceType={service.id}
                />
              </div>
            </div>
          </div>
        </section>

        {service.processSteps && service.processSteps.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                When to Use Our Services
              </h2>
              <div className="space-y-6">
                {service.processSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <PricingSection pricing={pricing} />

        {testimonials.length > 0 && (
          <TestimonialSection
            testimonials={testimonials}
            title="What Our Clients Say"
          />
        )}

        <FAQSection faqs={service.faqs} />

        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Call us now or send us an email for fast, professional service
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`tel:${CONTACT.PHONE}`}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-6 w-6 mr-2" />
                Call Now: {CONTACT.PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="inline-flex items-center px-8 py-4 bg-blue-500 text-white border-2 border-white rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                <Mail className="h-6 w-6 mr-2" />
                Email: {CONTACT.EMAIL}
              </a>
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </div>
    </>
  );
}
