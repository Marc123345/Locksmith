'use client';

import React, { useEffect, useRef } from 'react';
import { Phone, MapPin, ArrowRight, Shield, BadgeCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from "framer-motion";
import { CONTACT } from "@/utils/contact";
import MapComponent from "@/components/GoogleMap";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function ContactPage() {
  const jotformContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = jotformContainerRef.current;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/253124306063446';
    script.async = true;

    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  const faqs = [
    {
      question: "How quickly can you respond to an emergency?",
      answer: "For emergency lockouts, we typically arrive within 20-30 minutes in the Annapolis area during business hours. Response times may vary based on your location and current demand.",
    },
    {
      question: "Are your locksmiths licensed and insured?",
      answer: "Yes, all our locksmiths are fully licensed, bonded, and insured. We maintain all required state and local certifications to ensure the highest level of professionalism and security.",
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide free estimates for all non-emergency services. For emergency services, we'll provide a clear price quote over the phone before dispatching a technician.",
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major credit cards, cash, and mobile payment options like Google Pay. We can also provide invoicing for commercial clients.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we stand behind our work with a 90-day warranty on all parts and labor. High-security and smart lock installations may come with extended manufacturer warranties.",
    },
  ];

  const primaryServiceAreas = [
    "Annapolis",
    "Severna Park",
    "Arnold",
    "Edgewater"
  ];

  const additionalServiceAreas = [
    "Millersville",
    "Crownsville",
    "Pasadena",
    "Glen Burnie",
    "Crofton",
    "Davidsonville",
    "Bay Ridge",
    "Broadneck",
    "Cape St. Claire",
    "Eastport",
    "Edgewater Beach",
    "Hillsmere Shores",
    "Mayo",
    "Parole",
    "Riva"
  ];

  const trustIndicators = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Licensed & Insured",
      description: "Fully certified and insured for your peace of mind"
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee on all services"
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Security First",
      description: "Your security and privacy are our top priorities"
    }
  ];

  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://ik.imagekit.io/qcvroy8xpd/image-gen%20(5)_KvdECyJQ5g.jpg?tr=f-auto,q-auto"
            alt="Professional locksmith service"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full">
                <Lock className="h-16 w-16 text-primary" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Have questions or need assistance? Our team is here to help with all your security needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg h-12 px-8"
                asChild
              >
                <a href={`tel:${CONTACT.PHONE}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg h-12 px-8"
                asChild
              >
                <a href="#contact-form">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {indicator.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{indicator.title}</h3>
                    <p className="text-sm text-muted-foreground">{indicator.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Service Areas */}
      <section id="contact-form" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
                For immediate assistance during business hours, please call us.
              </p>
              <div ref={jotformContainerRef} className="jotform-container" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Serving Annapolis & Surrounding Areas</h2>
              <p className="text-muted-foreground mb-8">
                We provide fast, reliable locksmith services throughout Annapolis and nearby communities.
              </p>

              <div className="rounded-lg overflow-hidden shadow-lg mb-8 h-[300px]">
                <MapComponent />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
                {/* Primary Service Areas */}
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">Primary Service Areas:</h3>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {primaryServiceAreas.map((area, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center"
                      >
                        <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span className="font-medium">{area}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Also Serving */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Also Serving:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4">
                    {additionalServiceAreas.map((area, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index + 4) * 0.03 }}
                        className="flex items-center text-sm"
                      >
                        <MapPin className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{area}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Call for Other Areas */}
                <div className="pt-4 border-t border-gray-200 bg-primary/5 -mx-6 -mb-6 px-6 py-4 rounded-b-lg">
                  <p className="text-sm text-gray-600 flex items-start">
                    <Phone className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Don't see your area listed?</strong> We service many additional locations throughout Anne Arundel County and surrounding areas. Call us at{' '}
                      <a href={`tel:${CONTACT.PHONE}`} className="text-primary font-semibold hover:underline">
                        {CONTACT.PHONE_DISPLAY}
                      </a>{' '}
                      to check if we can serve your location.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to our most commonly asked questions. If you don't see what 
              you're looking for, feel free to contact us directly.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-muted/30 rounded-lg p-6 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help during business hours.
              </p>
              <Button size="lg" asChild>
                <a href={`tel:${CONTACT.PHONE}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Need Emergency Assistance?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our mobile locksmith services are available during business hours. Don't hesitate to call if you need help.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg h-12 px-8" 
              asChild
            >
              <a href={`tel:${CONTACT.PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Our Emergency Line
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}