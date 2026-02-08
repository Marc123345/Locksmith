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
import LocationBlogSection from '@/components/LocationBlogSection';
import LockoutGuide from '@/components/LockoutGuide';
import MeetTheTeam from '@/components/MeetTheTeam';
import WhatToExpect from '@/components/WhatToExpect';
import LicensingSection from '@/components/LicensingSection';
import PricingGuide from '@/components/PricingGuide';
import ServiceFAQClusters from '@/components/ServiceFAQClusters';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Building2, Car, Phone, MapPin, ArrowRight, Clock, HelpCircle, ExternalLink, Star, Mail, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/utils/contact';
import {
  allReviews,
  googleReviews,
  THUMBTACK_URL,
  GOOGLE_BUSINESS_URL,
  type Review,
} from '@/data/reviews';

const findReview = (name: string) => allReviews.find(r => r.name === name);

const featuredReviews: (Review & { highlight: string })[] = [
  { highlight: 'Car Lockout -- 15 min arrival', ...(findReview('Desiree Henningsen') ?? allReviews[0]) },
  { highlight: 'Whole-Home Rekey -- Annapolis', ...(findReview('Alexandra Paulson') ?? allReviews[1]) },
  { highlight: 'Lock Install -- Same-Day Service', ...(findReview('H C') ?? allReviews[2]) },
  { highlight: 'Emergency Lockout -- Instant Response', ...(findReview('RM Moreno') ?? allReviews[3]) },
  { highlight: 'Lock Change -- Under 24 Hours', ...(findReview('Proton Flux') ?? allReviews[4]) },
  { highlight: 'Same-Day Service -- No Extra Fees', ...(findReview('Debra Kupfer') ?? allReviews[5]) },
];

const services = [
  {
    icon: <Home className="h-6 w-6 text-white" />,
    title: "Residential Locksmith",
    description: "Securing Annapolis homes from Eastport to Hillsmere Shores.",
    image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(4)_iYsRLa_HJp.jpg?tr=f-auto,q-auto",
    features: [
      "Emergency House Lockouts",
      "Deadbolt Installation & Repair",
      "Smart Lock Upgrades (Keyless Entry)",
      "Rekeying Services"
    ],
    href: "/services/lock-change"
  },
  {
    icon: <Building2 className="h-6 w-6 text-white" />,
    title: "Commercial Security",
    description: "Protecting Annapolis businesses and retail fronts.",
    image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(8)_Y1KJcwdRO.png?tr=f-auto,q-auto",
    features: [
      "Master Key Systems",
      "High-Security Lock Installation",
      "Commercial Door Hardware",
      "Access Control Consultation"
    ],
    href: "/services/lock-repair"
  },
  {
    icon: <Car className="h-6 w-6 text-white" />,
    title: "Automotive Locksmith",
    description: "Mobile car key service across Annapolis--no towing needed.",
    image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(7)_l8viIEP0Wf.jpg?tr=f-auto,q-auto",
    features: [
      "Car Key Replacement & Programming",
      "Emergency Vehicle Opening",
      "Ignition Repair & Key Extraction",
      "Transponder Keys"
    ],
    href: "/services/car-key-programming"
  }
];

const serviceAreaLinks: { name: string; href: string }[][] = [
  [
    { name: "Annapolis", href: "/" },
    { name: "Eastport", href: "/locations/eastport" },
    { name: "Parole", href: "/locations/parole" },
  ],
  [
    { name: "Severna Park", href: "/locations/severna-park" },
    { name: "Arnold", href: "/locations/arnold" },
    { name: "Cape St. Claire", href: "/locations/cape-st-claire" },
    { name: "Broadneck", href: "/locations/broadneck" },
  ],
  [
    { name: "Edgewater", href: "/locations/edgewater" },
    { name: "Mayo", href: "/locations/mayo" },
    { name: "Hillsmere Shores", href: "/locations/hillsmere-shores" },
    { name: "Bay Ridge", href: "/locations/bay-ridge" },
  ],
  [
    { name: "Crownsville", href: "/locations/crownsville" },
    { name: "Riva", href: "/locations/riva" },
  ],
];

const areaLabels = ["Central Annapolis:", "North:", "South:", "West:"];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "A Secure Annapolis Locksmith",
  "url": "https://www.asecureannapolislocksmith.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.asecureannapolislocksmith.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Locksmith",
  "provider": {
    "@type": "Locksmith",
    "@id": "https://www.asecureannapolislocksmith.com/#locksmith",
    "name": "A Secure Annapolis Locksmith",
  },
  "areaServed": {
    "@type": "State",
    "name": "Maryland",
    "containsPlace": [
      { "@type": "City", "name": "Annapolis" },
      { "@type": "City", "name": "Severna Park" },
      { "@type": "City", "name": "Arnold" },
      { "@type": "City", "name": "Edgewater" },
      { "@type": "City", "name": "Crownsville" },
      { "@type": "City", "name": "Riva" },
      { "@type": "City", "name": "Mayo" },
      { "@type": "City", "name": "Eastport" },
      { "@type": "City", "name": "Bay Ridge" },
      { "@type": "City", "name": "Hillsmere Shores" },
      { "@type": "City", "name": "Cape St. Claire" },
      { "@type": "City", "name": "Broadneck" },
      { "@type": "City", "name": "Parole" },
    ],
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Locksmith Services in Annapolis MD",
    "itemListElement": [
      { "@type": "OfferCatalog", "name": "Emergency Lockout Service", "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Lockout Annapolis" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Lockout Annapolis" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Lockout Annapolis" } },
      ]},
      { "@type": "OfferCatalog", "name": "Residential Locksmith", "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lock Change Annapolis" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lock Rekey Annapolis" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Lock Installation Annapolis" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deadbolt Installation Annapolis" } },
      ]},
      { "@type": "OfferCatalog", "name": "Automotive Locksmith", "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Key Replacement Annapolis" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Key Programming Annapolis" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transponder Key Annapolis" } },
      ]},
    ],
  },
};

const faqs = [
  {
    question: "Are you licensed to operate in Maryland?",
    answer: "Yes, we are fully licensed by the State of Maryland, bonded, and insured. All our technicians undergo background checks and maintain proper credentials."
  },
  {
    question: "How quickly can you respond to an emergency lockout in Annapolis?",
    answer: "We provide 20-minute average response times for emergency lockouts in the Annapolis area, including Downtown, Eastport, Bay Ridge, and Parole. We dispatch the nearest available technician to minimize your wait time."
  },
  {
    question: "Do you charge extra for after-hours service?",
    answer: "We provide transparent, upfront pricing before we start any work. While emergency service rates may apply outside regular business hours, you'll know the cost before we begin."
  },
  {
    question: "What areas in Anne Arundel County do you serve?",
    answer: "We serve all of Anne Arundel County including Annapolis, Severna Park, Arnold, Edgewater, Eastport, Parole, Crownsville, Riva, Mayo, Cape St. Claire, Broadneck, Hillsmere Shores, and Bay Ridge."
  },
  {
    question: "Do you offer a warranty on lock changes in Annapolis?",
    answer: "Yes, every residential and commercial lock change comes with a 3-month warranty. If something isn't right, we'll make it right at no additional charge."
  },
  {
    question: "Can you work with high-security locks and smart locks?",
    answer: "Yes, our technicians are trained and equipped to work with high-security locks, smart locks, electronic access control systems, and traditional lock systems."
  },
  {
    question: "How much does a locksmith cost in Annapolis, MD?",
    answer: "Our service call fee starts at $39. Final pricing depends on the type of service needed. We always provide upfront pricing before starting any work -- no hidden fees or surprise charges."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
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
        <title>Locksmith Annapolis MD | 4.9 Stars | Licensed & Insured | A Secure</title>
        <meta
          name="description"
          content="A Secure Annapolis Locksmith -- rated 4.9 stars across Google and Thumbtack. Licensed, insured, locally owned since 2010. Emergency lockouts, lock changes, rekeying, car keys. Serving Annapolis, MD and Anne Arundel County. Call (410) 849-6069."
        />
        <meta
          name="keywords"
          content="locksmith Annapolis MD, Annapolis locksmith, emergency locksmith Annapolis, locksmith near me Annapolis, residential locksmith Annapolis MD, commercial locksmith Annapolis, car locksmith Annapolis, lock change Annapolis, rekey locks Annapolis, same-day locksmith Annapolis Maryland, locksmith 21403, locksmith Anne Arundel County"
        />
        <link rel="canonical" href="https://www.asecureannapolislocksmith.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asecureannapolislocksmith.com/" />
        <meta property="og:title" content="Locksmith Annapolis MD | 4.9 Stars | A Secure Annapolis Locksmith" />
        <meta property="og:description" content="Top-rated locksmith in Annapolis, MD since 2010. Licensed, insured, and locally owned. Fast response for home, business, and car lockouts. 4.9 stars on Google and Thumbtack." />
        <meta property="og:site_name" content="A Secure Annapolis Locksmith" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.asecureannapolislocksmith.com/" />
        <meta name="twitter:title" content="Locksmith Annapolis MD | 4.9 Stars | A Secure Annapolis Locksmith" />
        <meta name="twitter:description" content="Top-rated locksmith in Annapolis, MD since 2010. Licensed, insured, and locally owned. Fast response for home, business, and car lockouts." />

        <meta name="geo.region" content="US-MD" />
        <meta name="geo.placename" content="Annapolis" />
        <meta name="geo.position" content="38.978764;-76.492786" />
        <meta name="ICBM" content="38.978764, -76.492786" />
      </Helmet>
      <LocalBusinessSchema page="home" />
      <FAQSchema faqs={faqs} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <HeroSection />
      <TrustedBySection />
      <LockoutGuide />

      <section className="py-16 bg-white" aria-label="About A Secure Annapolis Locksmith">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Licensed Local Locksmith in Annapolis, MD -- Serving Anne Arundel County Since 2010
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-4">
                When you're locked out in <strong>Annapolis, MD</strong>, need your <Link to="/services/lock-change" className="text-primary hover:underline">locks changed</Link>, or want to upgrade your home or business security, you shouldn't have to settle for anything less than fast, honest, and professional service. As a <strong>locally owned locksmith based at 222 Severn Ave in Annapolis</strong>, we've been serving our neighbors for over 15 years with a reputation built on honesty, transparency, and fair pricing.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Our technicians are fully trained, <strong>licensed, and insured</strong> -- bringing professionalism to every job from <strong>Downtown Annapolis</strong> and the <strong>City Dock</strong> to <Link to="/locations/eastport" className="text-primary hover:underline font-semibold">Eastport</Link>, <Link to="/locations/bay-ridge" className="text-primary hover:underline font-semibold">Bay Ridge</Link>, <Link to="/locations/hillsmere-shores" className="text-primary hover:underline font-semibold">Hillsmere Shores</Link>, <Link to="/locations/severna-park" className="text-primary hover:underline font-semibold">Severna Park</Link>, and <Link to="/locations/edgewater" className="text-primary hover:underline font-semibold">Edgewater</Link>. Unlike national dispatch centers, when you call us you're talking to a local team that knows the Annapolis area and <strong>Anne Arundel County</strong> inside and out.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Every residential and commercial <Link to="/services/lock-change" className="text-primary hover:underline">lock change</Link> comes with a <strong>3-month warranty</strong>. No hidden fees, no upsells -- just straightforward <Link to="/services" className="text-primary hover:underline">locksmith services</Link> at rates that make sense. That's why Annapolis homeowners and business owners trust us time and again, rating us <strong>4.9 stars across Google and Thumbtack with over 100 combined reviews</strong>.
              </p>
              <p className="text-base leading-relaxed text-slate-600 italic border-l-4 border-primary pl-4">
                Licensed Maryland locksmith serving Annapolis and Anne Arundel County since 2010 -- fully insured and bonded for residential, commercial, and automotive work. From <Link to="/locations/eastport" className="text-primary hover:underline">Eastport condo lockouts</Link> to <Link to="/locations/hillsmere-shores" className="text-primary hover:underline">Hillsmere Shores</Link> waterfront homes with sticky deadbolts, we handle the lock issues Annapolis residents see most.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <LicensingSection />
      <StatsSection />
      <FeatureSection />

      <section className="py-16 bg-muted/30" aria-label="Locksmith services in Annapolis MD">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Residential, Commercial & Automotive Locksmith in Annapolis</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-service locksmith solutions for homes, businesses, and vehicles across Annapolis and Anne Arundel County.
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
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background" aria-label="Detailed locksmith services">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Emergency Locksmith in Annapolis with 20-Minute Response</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From emergency lockouts to complete security upgrades, we handle it all across Anne Arundel County.
            </p>
          </motion.div>
          <ServiceSection />
        </div>
      </section>

      <WhatToExpect />
      <PricingGuide />

      <section className="py-16 bg-muted/30" aria-label="Customer reviews from Google and Thumbtack">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Verified Reviews from Annapolis Homeowners & Drivers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4.9 rating with 100+ verified reviews across Google and Thumbtack. These are real experiences from your neighbors.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Business reviews for A Secure Annapolis Locksmith"
                className="h-5 w-5"
                width="20"
                height="20"
              />
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-sm text-slate-800">4.9</span>
                <span className="text-sm text-slate-500">({googleReviews.length} reviews)</span>
              </div>
            </a>
            <a
              href={THUMBTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/AxTr5f31u3m9vy4eluHPs76N6gbG0xQ8Eq+XAAj1HnGx3oevn+5KaCroNdUzTlDiM8CMqYLdqQ5noPJ3fkQ3PwO5pdGXPL3atcBHaHcKmlBUQv09+b1jrlIvhw+tvUJ+UGUs6hJEIaP0dkmHz8WmW1180f9ngOIL9OHECdU2CTIJ0ICVQtyjxi5hAdxyOj53sehc35L1JDQnKit+BSAAAAAElFTkSuQmCC.png"
                alt="Thumbtack reviews for A Secure Annapolis Locksmith"
                className="h-5 w-5"
                width="20"
                height="20"
              />
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-sm text-slate-800">4.9</span>
                <span className="text-sm text-slate-500">(54 reviews)</span>
              </div>
            </a>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredReviews.map((review, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <div className="h-full flex flex-col">
                  {review.service && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                        <Wrench className="h-3 w-3" />
                        {review.service}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                        {review.highlight}
                      </span>
                    </div>
                  )}
                  <TestimonialCard {...review} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
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
              <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer">
                See Us on Google
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group"
              asChild
            >
              <a href={THUMBTACK_URL} target="_blank" rel="noopener noreferrer">
                See Us on Thumbtack
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group"
              asChild
            >
              <Link to="/testimonials">
                View All Reviews
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <MeetTheTeam />

      <section className="py-16 bg-background" aria-label="Annapolis locksmith service area">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Locksmith Service Areas: Annapolis & Anne Arundel County</h2>
              <p className="text-lg text-muted-foreground">
                We provide mobile locksmith services throughout <strong>Anne Arundel County</strong>. From the <strong>City Dock</strong> to <strong>Severna Park</strong>, we're your trusted local locksmith experts with 20-minute average response times.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {serviceAreaLinks.map((group, gi) => (
                  <div key={gi} className="space-y-4">
                    <h3 className="font-semibold text-lg text-primary">{areaLabels[gi]}</h3>
                    <ul className="space-y-2">
                      {group.map((area, index) => (
                        <motion.li
                          key={area.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + gi * 0.15 }}
                          className="flex items-center text-base"
                        >
                          <MapPin className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <Link
                            to={area.href}
                            className="hover:text-primary transition-colors hover:underline"
                          >
                            {area.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Button size="lg" className="w-full md:w-auto" asChild>
                <a href={`tel:${CONTACT.PHONE}`} className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" /> Call {CONTACT.PHONE_DISPLAY}
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
                title="A Secure Annapolis Locksmith location on Google Maps - 222 Severn Ave, Annapolis MD 21403"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" aria-label="Business hours">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Annapolis Locksmith Hours</h2>
              <p className="text-lg text-muted-foreground">
                Serving the Annapolis area when you need us. Same-day emergency service available.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold text-lg">Sunday</span>
                  <span className="text-lg">7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold text-lg">Monday - Thursday</span>
                  <span className="text-lg">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold text-lg">Friday</span>
                  <span className="text-lg">7:00 AM - 2:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold text-lg">Saturday</span>
                  <span className="text-lg">Closed</span>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-center text-sm font-semibold text-primary">
                    Same-Day Emergency Lockout Service Available in Annapolis -- Call {CONTACT.PHONE_DISPLAY}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceFAQClusters />

      <LocationBlogSection
        locationName="Annapolis"
        heading="Latest From Our Locksmith Blog"
      />

      <section className="py-16 bg-white" aria-label="Locksmith services by neighborhood in Annapolis">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Residential Locksmith Services in Annapolis & Anne Arundel County
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
              Need a locksmith near <Link to="/locations/severna-park" className="text-primary hover:underline">Severna Park High School</Link>? Locked out near <Link to="/locations/eastport" className="text-primary hover:underline">City Dock</Link>? From <Link to="/locations/arnold" className="text-primary hover:underline">Arnold</Link> to <Link to="/locations/edgewater" className="text-primary hover:underline">Edgewater</Link>, our mobile locksmith service means no towing, no waiting at a shop, and no inflated prices. We come to you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { area: "Annapolis (21401/21403)", services: ["Lock Change", "Emergency Lockout", "Car Key Programming"], href: "/" },
                { area: "Severna Park (21146)", services: ["Residential Rekeying", "Smart Lock Install", "Deadbolt Upgrade"], href: "/locations/severna-park" },
                { area: "Arnold (21012)", services: ["Lock Repair", "Emergency Lockout", "Key Replacement"], href: "/locations/arnold" },
                { area: "Edgewater (21037)", services: ["Lock Change", "Home Security Upgrade", "Car Lockout"], href: "/locations/edgewater" },
                { area: "Eastport", services: ["Emergency Lockout", "Lock Replacement", "Rekey Service"], href: "/locations/eastport" },
                { area: "Crownsville (21032)", services: ["Residential Locksmith", "Commercial Locks", "Lock Repair"], href: "/locations/crownsville" },
              ].map((loc) => (
                <Link
                  key={loc.area}
                  to={loc.href}
                  className="block p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {loc.area}
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {loc.services.map((s) => (
                      <li key={s} className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" className="group" asChild>
                <Link to="/locations">
                  View All Service Areas
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="py-12 bg-muted/30 border-t border-b"
        aria-label="Business contact information"
        itemScope
        itemType="https://schema.org/Locksmith"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <address
                  className="not-italic"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <p className="font-bold text-slate-900">A Secure Annapolis Locksmith</p>
                  <p className="text-sm text-muted-foreground">
                    <span itemProp="streetAddress">222 Severn Ave Ste 1 Building 7-6A</span><br />
                    <span itemProp="addressLocality">Annapolis</span>, <span itemProp="addressRegion">MD</span>{' '}
                    <span itemProp="postalCode">21403</span>
                  </p>
                </address>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Call Us Now</p>
                  <a
                    href={`tel:${CONTACT.PHONE}`}
                    itemProp="telephone"
                    className="text-primary font-semibold hover:underline"
                  >
                    {CONTACT.PHONE_DISPLAY}
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Same-Day Emergency Service Available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email</p>
                  <a
                    href={`mailto:${CONTACT.EMAIL}`}
                    itemProp="email"
                    className="text-sm text-primary hover:underline break-all"
                  >
                    {CONTACT.EMAIL}
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    Serving <span itemProp="areaServed">Annapolis, MD &amp; Anne Arundel County</span>
                  </p>
                </div>
              </div>
            </div>
            <meta itemProp="name" content="A Secure Annapolis Locksmith" />
            <meta itemProp="url" content="https://www.asecureannapolislocksmith.com" />
            <meta itemProp="priceRange" content="$$" />
            <span className="hidden" itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
              <meta itemProp="latitude" content="38.978764" />
              <meta itemProp="longitude" content="-76.492786" />
            </span>
          </div>
        </div>
      </section>

      <CallToAction
        title="Need a Locksmith in Annapolis?"
        subtitle="Licensed technicians ready to help. 20-min average response time across Annapolis and Anne Arundel County."
        primaryButtonText="Contact Us"
        secondaryButtonText="Request Service"
        variant="centered"
      />
    </>
  );
}
