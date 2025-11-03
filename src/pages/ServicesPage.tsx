import React, { useState } from 'react';
import ServiceSection from "@/components/ServiceSection";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Clock, Shield, BadgeCheck, MapPin, Phone, Lock, PenTool as Tool, Key, Home, Building2, Car, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { CONTACT } from "@/utils/contact";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const serviceCategories = [
    {
      id: "residential",
      title: "Residential Services",
      description: "Comprehensive security solutions for your home, from basic locks to advanced smart systems.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Home className="h-8 w-8 text-white" />,
      features: [
        "Lock installation & repair",
        "Rekeying services",
        "Smart lock installation",
        "Security assessments",
        "Emergency lockout service",
        "Master key systems",
      ],
      price: "Starting at $75",
      response: "Same-day service available",
      href: "/contact"
    },
    {
      id: "commercial",
      title: "Commercial Services",
      description: "Advanced security solutions to protect your business and assets.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Building2 className="h-8 w-8 text-white" />,
      features: [
        "High-security locks",
        "Master key systems",
        "Panic bars & exit devices",
        "Door closers",
        "Security consultation"
      ],
      price: "Custom quotes available",
      response: "Same day service",
      href: "/contact"
    },
    {
      id: "automotive",
      title: "Automotive Services",
      description: "Fast and reliable solutions for all vehicle lock and key issues.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Car className="h-8 w-8 text-white" />,
      features: [
        "Car lockout assistance",
        "Key cutting & programming",
        "FOB programming",
        "Ignition repair",
        "High-security keys",
        "Transponder keys",
      ],
      price: "Estimates provided on-site",
      response: "Fast response times",
      href: "/contact"
    },
    {
      id: "emergency",
      title: "Emergency Services",
      description: "Same-day locksmith services when you need help the most.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <AlertTriangle className="h-8 w-8 text-white" />,
      features: [
        "Same-day availability",
        "Fast response times",
        "All types of lockouts",
        "Lock repairs",
        "Emergency rekeying",
        "Break-in repairs",
      ],
      price: "Estimates provided on-site",
      response: "Priority service",
      href: "/contact"
    },
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Fast Response",
      description: "Same-day service available in Annapolis",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your protection",
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-primary" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all services",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Local Service",
      description: "Serving Annapolis and surrounding communities",
    },
  ];

  const specializedServices = [
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Andersen Lock Systems",
      description: "Andersen locks are high-quality multi-point locking systems commonly found on patio and entry doors, known for their durability and enhanced security. We specialize in the repair, replacement, and installation of Andersen locks, ensuring precise alignment and smooth functionality. Trust us for expert service tailored to these premium lock systems.",
      features: ["Installation", "Repair", "Alignment", "Replacement"]
    },
    {
      icon: <Tool className="h-10 w-10 text-primary" />,
      title: "Sliding Glass Door Service",
      description: "Sliding glass door locks are essential for securing patio and backyard entrances, often requiring specialized hardware and precise installation. We provide expert repair and installation of sliding glass door locks, ensuring smooth operation and strong security. We handle everything from track alignment to lock replacement with precision and care.",
      features: ["Track Alignment", "Lock Installation", "Hardware Repair", "Security Enhancement"]
    },
    {
      icon: <Key className="h-10 w-10 text-primary" />,
      title: "High-Security Solutions",
      description: "Comprehensive high-security lock installation and management systems for maximum protection. We offer advanced security solutions tailored to your specific needs.",
      features: ["Restricted Keys", "Master Systems", "Security Consultation"]
    }
  ];

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Professional locksmith services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional Locksmith Services
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From emergency lockouts to comprehensive security solutions, our expert locksmiths are here to help with all your security needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <a href={`tel:${CONTACT.PHONE}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: {CONTACT.PHONE_DISPLAY}
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg h-12 px-8"
                asChild
              >
                <Link to="/contact">Request Service</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                id={category.id}
                className="scroll-mt-24"
                onMouseEnter={() => setHoveredService(category.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <ServiceCard {...category} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Specialized Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced security solutions for specific needs and requirements
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-center mb-6">{service.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Explore Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of locksmith services designed to meet all your security needs.
            </p>
          </motion.div>
          <ServiceSection />
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We proudly serve Annapolis and the surrounding areas with prompt, professional locksmith services.
              </p>
              <div className="grid grid-cols-2 gap-y-2 mb-8">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Annapolis</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Severna Park</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Edgewater</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Arnold</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Millersville</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Crownsville</span>
                </div>
              </div>
              <Button className="w-full md:w-auto" asChild>
                <a href={`tel:${CONTACT.PHONE}`}>Call for Service</a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.9069273455244!2d-76.48348684836126!3d38.97269447946033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f7debf1d014d%3A0x9fa6fee227462373!2sA%20Secure%20Annapolis%20Locksmith!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Need a Locksmith Today?"
        subtitle="Our professional technicians are available for same-day service for all your locksmith needs."
        primaryButtonText="Contact Us"
        secondaryButtonText="Request Service"
      />
    </>
  );
}