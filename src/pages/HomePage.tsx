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
import FAQSchema from '@/components/seo/FAQSchema';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Building2, Car, Phone, MapPin, ArrowRight, Clock, HelpCircle, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';

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
    href: "/services"
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
    href: "/services"
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
    href: "/services"
  }
];

const THUMBTACK_URL = "https://www.thumbtack.com/md/annapolis/locksmiths/secure-annapolis-locksmith/service/550518270306156552";

const testimonials = [
  {
    name: "Jen Jamison",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Dispatch was courteous and super helpful, I knew the price and the time my tech was expected to arrive. I was at work and had lost my only key to my vehicle, and commute across the bridge for work so I was panicked.",
    date: "1 year ago",
    source: "Google",
    verified: true
  },
  {
    name: "Tanika W.",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Quality and value of work was great. Also, he was in time, responded very quickly, and was very professional dressed in his logo polo shirt.",
    date: "Aug 2025",
    source: "Thumbtack",
    verified: true
  },
  {
    name: "Caitlin B.",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Professional, punctual and fast. I highly recommend. Price was also reasonable.",
    date: "Sep 2025",
    source: "Thumbtack",
    verified: true
  },
  {
    name: "Malorie",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "I highly recommend A Secure Annapolis Locksmith! They were by far the most responsive and efficient company I spoke to when I needed to replace my lock. Very easy to work with and reasonably priced.",
    date: "1 year ago",
    source: "Google",
    verified: true
  },
  {
    name: "Raven J.",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Absolutely amazing! On time, friendly, respectful and did amazing work.",
    date: "Jul 2025",
    source: "Thumbtack",
    verified: true
  },
  {
    name: "Desiree Henningsen",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "After calling another local locksmith and getting an estimate of 90 minutes and a hefty $149 price tag, I called A Secure. They quoted me $95 and were at my car in 15 minutes! Chris was professional, efficient, and quick!",
    date: "2 years ago",
    source: "Google",
    verified: true
  }
];

const faqs = [
  {
    question: "Are you licensed to operate in Maryland?",
    answer: "Yes, we are fully licensed by the State of Maryland, bonded, and insured. All our technicians undergo background checks and maintain proper credentials."
  },
  {
    question: "How quickly can you respond to an emergency lockout?",
    answer: "We provide 20-minute average response times for emergency lockouts in the Annapolis area. We dispatch the nearest available technician to minimize your wait time."
  },
  {
    question: "Do you charge extra for after-hours service?",
    answer: "We provide transparent, upfront pricing before we start any work. While emergency service rates may apply outside regular business hours, you'll know the cost before we begin."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve all of Anne Arundel County including Annapolis, Severna Park, Arnold, Edgewater, Eastport, Parole, Crownsville, Riva, Mayo, Cape St. Claire, Broadneck, Hillsmere Shores, and Bay Ridge."
  },
  {
    question: "Do you offer a warranty on your work?",
    answer: "Yes, we provide a 90-day workmanship guarantee on all services. If the job isn't done right, we'll return and make it right at no additional charge."
  },
  {
    question: "Can you make keys for high-security locks and smart locks?",
    answer: "Yes, our technicians are trained and equipped to work with high-security locks, smart locks, electronic access control systems, and traditional lock systems."
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
        <title>Locksmith Annapolis MD | Licensed & Insured | A Secure</title>
        <meta
          name="description"
          content="Top-rated locksmith in Annapolis, MD -- 4.9 stars on Google & Thumbtack. Licensed, insured, locally owned since 2010. Emergency lockouts, lock changes, car keys. Call (410) 849-6069."
        />
        <meta
          name="keywords"
          content="locksmith Annapolis MD, Annapolis locksmith, emergency locksmith Annapolis, locksmith near me Annapolis, residential locksmith Annapolis MD, commercial locksmith Annapolis, car locksmith Annapolis, lock change Annapolis, rekey locks Annapolis, 24/7 locksmith Annapolis Maryland"
        />
        <link rel="canonical" href="https://www.asecureannapolislocksmith.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asecureannapolislocksmith.com/" />
        <meta property="og:title" content="Locksmith Annapolis MD | Licensed & Insured | A Secure" />
        <meta property="og:description" content="Top-rated locksmith in Annapolis, MD since 2010. Licensed, insured, and locally owned. Fast response for home, business, and car lockouts." />
        <meta property="og:site_name" content="A Secure Annapolis Locksmith" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.asecureannapolislocksmith.com/" />
        <meta property="twitter:title" content="Locksmith Annapolis MD | Licensed & Insured | A Secure" />
        <meta property="twitter:description" content="Top-rated locksmith in Annapolis, MD since 2010. Licensed, insured, and locally owned. Fast response for home, business, and car lockouts." />
      </Helmet>
      <LocalBusinessSchema page="home" />
      <FAQSchema faqs={faqs} />
      <HeroSection />
      <TrustedBySection />

      {/* Introduction / About Snippet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Annapolis's Trusted Local Locksmith Since 2010</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-4">
                When you're locked out in Annapolis, need your locks changed, or want to upgrade your home or business security, you shouldn't have to settle for anything less than fast, honest, and professional service. As a <strong>locally owned locksmith based on Severn Ave in Annapolis</strong>, we've been serving our neighbors for over 15 years with a reputation built on transparency, fair pricing, and fast response times.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Our technicians are fully trained, licensed, and insured -- bringing professionalism to every job from <strong>Downtown Annapolis</strong> to <strong>Eastport</strong>, <strong>Bay Ridge</strong>, and <strong>Hillsmere Shores</strong>. Unlike national dispatch centers, when you call us you're talking to a local team that knows the Annapolis area inside and out.
              </p>
              <p className="text-lg leading-relaxed">
                Every residential and commercial lock change comes with a <strong>3-month warranty</strong>. No hidden fees, no upsells -- just straightforward locksmith services at rates that make sense. That's why Annapolis homeowners and business owners trust us time and again, rating us <strong>4.9 stars</strong> across Google and Thumbtack.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-4xl font-bold mb-4">Locksmith Services in Annapolis, MD</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Residential, commercial, and automotive locksmith solutions for Annapolis and Anne Arundel County.
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
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What Annapolis Residents Are Saying</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rated 4.9 stars across Google and Thumbtack. Read verified reviews from your neighbors.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="https://g.co/kgs/2jLLkKi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google reviews"
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
                <span className="text-sm text-slate-500">(60+ reviews)</span>
              </div>
            </a>
            <a
              href={THUMBTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <img
                src="https://assets.thumbtack.com/images/t-favicon-v2.svg"
                alt="Thumbtack reviews"
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
              <Link to="/testimonials">
                View All Reviews
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
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
              <h2 className="text-4xl font-bold">Serving Annapolis & Surrounding Communities</h2>
              <p className="text-lg text-muted-foreground">
                We provide mobile locksmith services throughout Anne Arundel County. From the City Dock to Severna Park, we're your trusted local experts.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-primary">Central:</h3>
                  <ul className="space-y-2">
                    {["Annapolis", "Eastport", "Parole"].map((area, index) => (
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
                  <h3 className="font-semibold text-lg text-primary">North:</h3>
                  <ul className="space-y-2">
                    {["Severna Park", "Arnold", "Cape St. Claire", "Broadneck"].map((area, index) => (
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
                  <h3 className="font-semibold text-lg text-primary">South:</h3>
                  <ul className="space-y-2">
                    {["Edgewater", "Mayo", "Hillsmere Shores", "Bay Ridge"].map((area, index) => (
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
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-primary">West:</h3>
                  <ul className="space-y-2">
                    {["Crownsville", "Riva"].map((area, index) => (
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

      {/* Business Hours */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Business Hours</h2>
              <p className="text-lg text-muted-foreground">
                We're here when you need us. Emergency service available 24/7.
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
                    24/7 Emergency Lockout Service Available • Call (410) 849-6069
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Annapolis Locksmith FAQ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about locksmith services in Annapolis, MD and Anne Arundel County.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg">
                    <span>{faq.question}</span>
                    <span className="ml-4 flex-shrink-0 text-primary group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-muted-foreground">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
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