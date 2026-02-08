import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Calendar, Wrench, CheckCircle, DollarSign, Shield } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall className="h-6 w-6" />,
    title: "Call or Text",
    description: "Reach out via phone or text. We'll answer your questions and provide an estimate."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Same-Day Service",
    description: "In most cases, we can schedule same-day service for emergency lockouts and urgent needs."
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Upfront Pricing",
    description: "No surprises. You'll know the cost before we start any work. No hidden fees."
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Professional Work",
    description: "Our licensed technicians arrive prepared with proper tools and quality parts."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Job Complete",
    description: "We test everything to ensure it works properly before we leave."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "3-Month Warranty",
    description: "Every lock change comes with our 3-month workmanship guarantee."
  }
];

export default function WhatToExpect() {
  return (
    <section className="py-16 bg-muted/30" aria-label="What to expect when you hire us">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What to Expect When You Call A Secure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent process from start to finish. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
