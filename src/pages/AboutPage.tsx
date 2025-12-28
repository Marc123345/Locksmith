import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Shield, Award, Clock, Users, Wrench, BadgeCheck, ArrowRight, Star, Lock, CheckCircle2, Heart } from 'lucide-react';
import { Link } from "react-router-dom";
import AboutSections from "@/components/AboutSections";
import CallToAction from "@/components/CallToAction";
import { motion } from "framer-motion";

const certifications = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Licensed & Bonded",
    description: "We maintain all required state and local licenses and are fully bonded for your protection.",
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: "Industry Standards",
    description: "We adhere to the highest industry standards and best practices.",
  },
];

const stats = [
  { 
    number: "15+", 
    label: "Years of Experience", 
    icon: <Clock className="h-6 w-6 text-primary" />,
    description: "Serving since 2010"
  },
  { 
    number: "1000+", 
    label: "Satisfied Customers", 
    icon: <Users className="h-6 w-6 text-primary" />,
    description: "5-star rated service"
  },
  { 
    number: "24/7", 
    label: "Emergency Service", 
    icon: <Wrench className="h-6 w-6 text-primary" />,
    description: "Always available"
  },
  { 
    number: "100%", 
    label: "Satisfaction Rate", 
    icon: <Star className="h-6 w-6 text-primary" />,
    description: "Guaranteed results"
  },
];

const values = [
  "Family Values",
  "Customer-First Approach",
  "Integrity & Trust",
  "Personal Service",
  "Quality Assurance",
  "Community Focus"
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

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | A Secure Annapolis Locksmith - Family Owned & Operated</title>
        <meta
          name="description"
          content="Meet the family behind A Secure Annapolis Locksmith. Husband and wife team Royi and Yuli provide professional, licensed locksmith services in Annapolis, MD. 15+ years experience."
        />
        <meta
          name="keywords"
          content="about A Secure Annapolis Locksmith, family owned locksmith, Royi Yuli locksmith, licensed locksmith Annapolis, experienced locksmith Maryland"
        />
        <link rel="canonical" href="https://www.asecureannapolislocksmith.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asecureannapolis.com/about" />
        <meta property="og:title" content="About Us | A Secure Annapolis Locksmith" />
        <meta property="og:description" content="Meet the family behind A Secure Annapolis Locksmith. Husband and wife team providing professional locksmith services in Annapolis, MD." />
        <meta property="og:site_name" content="A Secure Annapolis Locksmith" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://asecureannapolis.com/about" />
        <meta property="twitter:title" content="About Us | A Secure Annapolis Locksmith" />
        <meta property="twitter:description" content="Meet the family behind A Secure Annapolis Locksmith. Husband and wife team providing professional locksmith services in Annapolis, MD." />
      </Helmet>

      {/* Family Business Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Family-Owned & Operated</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As a husband and wife team, Royi and Yuli bring their shared passion for security and customer service to every job. Their partnership ensures that every customer receives personalized attention and expert care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div className="bg-primary/5 rounded-xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-primary/10 p-8 rounded-full inline-block mb-6">
                    <Lock className="h-20 w-20 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Royi & Yuli</h3>
                  <p className="text-xl text-muted-foreground mb-2">Owners & Master Locksmiths</p>
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Shield className="h-5 w-5" />
                    <span className="font-medium">Licensed & Insured</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">15+ Years Experience</h4>
                      <p className="text-muted-foreground">Serving Annapolis with expert locksmith services since 2010</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">1000+ Happy Customers</h4>
                      <p className="text-muted-foreground">Trusted by homeowners and businesses across the region</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-8">
              <p className="text-lg leading-relaxed">
                Together, Royi and Yuli have built A Secure Annapolis Locksmith on the foundation of family values and professional excellence. Their complementary skills and shared commitment to customer satisfaction make them the perfect team to handle all your security needs. As a family-owned business, they understand the importance of trust, reliability, and personal service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Family Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide how we treat every customer as part of our extended family.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-3 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-muted/30 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    {stat.icon}
                  </div>
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-primary mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="font-medium mb-2">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AboutSections certifications={certifications} />

      <CallToAction
        title="Experience Our Family's Dedication to Service"
        subtitle="Contact us today for professional and personal locksmith solutions."
        primaryButtonText="Contact Us"
        secondaryButtonText="View Services"
      />
    </>
  );
};

export default AboutPage;