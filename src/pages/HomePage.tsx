import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/HeroSection';
import { TrustedBySection } from '@/components/TrustedBySection';
import { FeatureSection } from '@/components/FeatureSection';
import { StatsSection } from '@/components/StatsSection';
import ServiceSection from '@/components/ServiceSection';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CallToAction from '@/components/CallToAction';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Building2, Car, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Home className="h-6 w-6 text-white" />,
    title: "Residential Services",
    description: "Complete home security solutions including smart locks and master key systems.",
    image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(4)_iYsRLa_HJp.jpg?tr=f-auto,q-auto",
    features: [
      "Lock installation & repair",
      "Smart lock systems",
      "Emergency lockout service",
      "Security assessments"
    ],
    href: "/contact"
  },
  {
    icon: <Building2 className="h-6 w-6 text-white" />,
    title: "Commercial Services",
    description: "Advanced security solutions for businesses of all sizes.",
    image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(8)_Y1KJcwdRO.png?tr=f-auto,q-auto",
    features: [
      "Master key systems",
      "High-security locks",
      "Security consultation",
      "Emergency service"
    ],
    href: "/contact"
  },
  {
    icon: <Car className="h-6 w-6 text-white" />,
    title: "Automotive Services",
    description: "Professional automotive locksmith services for all vehicle types.",
    image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(7)_l8viIEP0Wf.jpg?tr=f-auto,q-auto",
    features: [
      "Car lockout assistance",
      "Key programming",
      "Transponder keys",
      "Ignition repair"
    ],
    href: "/contact"
  }
];

const testimonials = [
  {
    name: "Jen Jamison",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Dispatch was courteous and super helpful, I knew the price and the time my tech was expected to arrive. I was at work and had lost my only key to my vehicle, and commute across the bridge for work so I was panicked.",
    date: "6 months ago",
    source: "Google",
    verified: true
  },
  {
    name: "Malorie",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "I highly recommend A Secure Annapolis Locksmith! They were by far the most responsive and efficient company I spoke to when I needed to replace my lock. Very easy to work with and reasonably priced.",
    date: "5 months ago",
    image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(9)_Xh3CkNmTP.png?tr=f-auto,q-auto",
    source: "Google",
    verified: true
  },
  {
    name: "Emma Cutler",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Thank you for offering such a great service for my son! Finding a company that actually called back and went the extra mile to accommodate our needs was such a relief. Professional, courteous and speedy.",
    date: "11 months ago",
    source: "Google",
    verified: true,
    image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(11)_dwZTbXGi6.png?tr=f-auto,q-auto"
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

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>A Secure Annapolis Locksmith | Professional Locksmith Services in Annapolis, MD</title>
        <meta
          name="description"
          content="Trusted locksmith in Annapolis, MD. 24/7 emergency lockout service, residential, commercial, and automotive locksmith solutions. Fast response, licensed & insured."
        />
        <meta
          name="keywords"
          content="locksmith Annapolis, emergency locksmith, 24/7 locksmith Annapolis MD, residential locksmith, commercial locksmith, car locksmith, lock rekey, lock change, Annapolis Maryland locksmith"
        />
        <link rel="canonical" href="https://asecureannapolis.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asecureannapolis.com/" />
        <meta property="og:title" content="A Secure Annapolis Locksmith | Professional Locksmith Services" />
        <meta property="og:description" content="Trusted locksmith in Annapolis, MD. 24/7 emergency lockout service, residential, commercial, and automotive locksmith solutions." />
        <meta property="og:site_name" content="A Secure Annapolis Locksmith" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://asecureannapolis.com/" />
        <meta property="twitter:title" content="A Secure Annapolis Locksmith | Professional Locksmith Services" />
        <meta property="twitter:description" content="Trusted locksmith in Annapolis, MD. 24/7 emergency lockout service, residential, commercial, and automotive locksmith solutions." />
      </Helmet>
      <LocalBusinessSchema page="home" />
      <HeroSection />
      <TrustedBySection />
      <StatsSection />
      <FeatureSection />

      {/* Services Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional locksmith solutions for residential, commercial, and automotive needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="group"
              asChild
            >
              <Link to="/services">
                View All Services
                <motion.span
                  className="inline-block ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">How We Can Help</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of locksmith services.
            </p>
          </motion.div>
          <ServiceSection />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read verified reviews from our satisfied customers in Annapolis.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="group"
              asChild
            >
              <Link to="/testimonials">
                View All Reviews
                <motion.span
                  className="inline-block ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Serving Annapolis & Surrounding Areas</h2>
              <p className="text-lg text-muted-foreground">
                We provide fast, reliable locksmith services throughout Annapolis and nearby communities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Primary Service Areas:</h3>
                  <ul className="space-y-2">
                    {["Annapolis", "Severna Park", "Arnold", "Edgewater"].map((area, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-base"
                      >
                        <MapPin className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {area}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Also Serving:</h3>
                  <ul className="space-y-2">
                    {["Millersville", "Crownsville", "Pasadena", "Glen Burnie"].map((area, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="flex items-center text-base"
                      >
                        <MapPin className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {area}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button size="lg" className="w-full md:w-auto" asChild>
                <a href="tel:5551234567" className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" /> Call for Service
                </a>
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
                title="A Secure Annapolis Locksmith Service Area Map"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Need a Locksmith Today?"
        subtitle="Our professional technicians are available for same-day service."
        primaryButtonText="Contact Us"
        secondaryButtonText="Request Service"
        variant="centered"
      />
    </>
  );
}