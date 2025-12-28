import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | A Secure Annapolis Locksmith</title>
        <meta name="description" content="Read our terms of service for locksmith services in Annapolis, MD. Learn about our service agreements, warranties, and customer policies." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.asecureannapolislocksmith.com/terms" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asecureannapolis.com/terms" />
        <meta property="og:title" content="Terms of Service | A Secure Annapolis Locksmith" />
        <meta property="og:description" content="Read our terms of service for locksmith services in Annapolis, MD." />
        <meta property="og:site_name" content="A Secure Annapolis Locksmith" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://asecureannapolis.com/terms" />
        <meta property="twitter:title" content="Terms of Service | A Secure Annapolis Locksmith" />
        <meta property="twitter:description" content="Read our terms of service for locksmith services in Annapolis, MD." />
      </Helmet>

      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="bg-primary/10 p-4 rounded-full">
                <ScrollText className="h-8 w-8 text-primary" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Service Agreement</h2>
              <p className="mb-4">
                By engaging our services, you agree to these terms and conditions. Our services include locksmith solutions for residential, commercial, and automotive needs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Service Availability</h2>
              <p className="mb-4">
                We provide same-day service during regular business hours. Response times may vary based on service demand and location. Priority service is available for emergency situations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Pricing and Payment</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Service fees are provided upfront before work begins</li>
                <li>Additional charges may apply for complex jobs</li>
                <li>Payment is due upon completion of service</li>
                <li>We accept major credit cards, cash, and mobile payments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Warranty and Guarantees</h2>
              <p className="mb-4">
                Our work is backed by a 90-day warranty on parts and labor. This warranty covers defects in materials and workmanship under normal use.
              </p>
              <p className="mb-4">The warranty does not cover:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Damage from misuse or abuse</li>
                <li>Normal wear and tear</li>
                <li>Unauthorized modifications</li>
                <li>Acts of nature</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Customer Responsibilities</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate service location information</li>
                <li>Ensure proper property access</li>
                <li>Present valid identification and proof of ownership</li>
                <li>Disclose any existing damage or issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Liability</h2>
              <p className="mb-4">
                We maintain comprehensive insurance coverage for your protection. However, we are not liable for indirect or consequential damages arising from our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Cancellation Policy</h2>
              <p className="mb-4">
                Please provide at least 2 hours notice for service cancellation. A fee may apply for late cancellations or no-shows.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="mb-4">
                For questions or concerns about these terms, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p>SecureLock</p>
                <p>123 Security Ave</p>
                <p>Annapolis, MD 21401</p>
                <p>Phone: (410) 849-6069</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}