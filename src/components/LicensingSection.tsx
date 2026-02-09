import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, UserCheck, Award, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const credentials = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "State Licensed",
    detail: "MD Registry #143",
    description: "Fully licensed by the State of Maryland to perform all locksmith services."
  },
  {
    icon: <FileCheck className="h-10 w-10 text-primary" />,
    title: "Bonded & Insured",
    detail: "Full Coverage",
    description: "Comprehensive insurance and bonding protects you and your property."
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: "Background Checked",
    detail: "Verified Staff",
    description: "Every technician undergoes thorough background checks before joining our team."
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "15+ Years Experience",
    detail: "Since 2010",
    description: "Serving Annapolis and all of Anne Arundel County for over a decade."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function LicensingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" aria-label="Licensing and credentials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/5 text-primary mb-5">
            <BadgeCheck className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Licensed, Bonded & Insured Maryland Locksmith
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When you hire A Secure Annapolis Locksmith, you're working with fully credentialed professionals who meet all Maryland state requirements.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {credentials.map((credential, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 p-3 bg-primary/5 rounded-full w-fit mx-auto group-hover:bg-primary/10 transition-colors">
                    {credential.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{credential.title}</h3>
                  <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
                    {credential.detail}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{credential.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-primary/10 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Why Licensing Matters</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maryland law requires all locksmiths to be licensed to protect consumers from scams and ensure quality service. Our license means we've met state requirements for training, insurance, and background checks. Always ask to see a locksmith's license before allowing them to work on your property -- it's your right and your protection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
