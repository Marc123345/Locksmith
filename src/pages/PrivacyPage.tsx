import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | A Secure Annapolis Locksmith</title>
        <meta name="description" content="Read our privacy policy to understand how A Secure Annapolis Locksmith protects and handles your personal information and data." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://asecureannapolis.com/privacy" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asecureannapolis.com/privacy" />
        <meta property="og:title" content="Privacy Policy | A Secure Annapolis Locksmith" />
        <meta property="og:description" content="Read our privacy policy to understand how we protect your personal information." />
        <meta property="og:site_name" content="A Secure Annapolis Locksmith" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://asecureannapolis.com/privacy" />
        <meta property="twitter:title" content="Privacy Policy | A Secure Annapolis Locksmith" />
        <meta property="twitter:description" content="Read our privacy policy to understand how we protect your personal information." />
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
                <Lock className="h-8 w-8 text-primary" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information</li>
                <li>Service location details</li>
                <li>Payment information</li>
                <li>Service history and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our services</li>
                <li>Process your payments</li>
                <li>Send you service updates and notifications</li>
                <li>Respond to your requests and inquiries</li>
                <li>Maintain security and verify identity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p>SecureLock</p>
                <p>123 Security Ave</p>
                <p>Annapolis, MD 21401</p>
                <p>Phone: (410) 849-6069</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last revised" date and the updated version will be effective as soon as it is accessible.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}