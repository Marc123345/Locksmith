import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, UserCheck, Award } from 'lucide-react';

const credentials = [
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "State Licensed",
    description: "Fully licensed by the State of Maryland to perform locksmith services"
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: "Bonded & Insured",
    description: "Comprehensive insurance and bonding for your protection and peace of mind"
  },
  {
    icon: <UserCheck className="h-8 w-8" />,
    title: "Background Checked",
    description: "All technicians undergo thorough background checks before joining our team"
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "15+ Years Experience",
    description: "Serving Annapolis and Anne Arundel County since 2010"
  }
];

export default function LicensingSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100" aria-label="Licensing and credentials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Licensed, Bonded & Insured Maryland Locksmith
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When you hire A Secure Annapolis Locksmith, you're working with fully credentialed professionals who meet all Maryland state requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-4">
                {credential.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{credential.title}</h3>
              <p className="text-sm text-muted-foreground">{credential.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Why Licensing Matters</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maryland law requires all locksmiths to be licensed to protect consumers from scams and ensure quality service. Our license means we've met state requirements for training, insurance, and background checks. Always ask to see a locksmith's license before allowing them to work on your property.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
