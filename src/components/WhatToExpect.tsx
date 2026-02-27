import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Calendar, Wrench, CheckCircle, DollarSign, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const steps = [
  {
    icon: <PhoneCall className="h-7 w-7" />,
    title: "Call or Text",
    description: "Reach out via phone or text. We'll answer your questions and provide an estimate.",
    number: "01"
  },
  {
    icon: <Calendar className="h-7 w-7" />,
    title: "Same-Day Service",
    description: "In most cases, we can schedule same-day service for emergency lockouts and urgent needs.",
    number: "02"
  },
  {
    icon: <DollarSign className="h-7 w-7" />,
    title: "Upfront Pricing",
    description: "No surprises. We explain all options and costs before we start any work.",
    number: "03"
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: "Professional Work",
    description: "Our licensed technicians arrive prepared with proper tools and quality parts.",
    number: "04"
  },
  {
    icon: <CheckCircle className="h-7 w-7" />,
    title: "Job Complete",
    description: "We test everything to ensure it works properly before we leave.",
    number: "05"
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "3-Month Warranty",
    description: "Every lock change comes with our 3-month workmanship guarantee.",
    number: "06"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function WhatToExpect() {
  return (
    <section className="py-20 bg-slate-50" aria-label="What to expect when you hire us">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What to Expect When You Call A Secure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent process from start to finish. No hidden fees, no surprises.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                        {step.icon}
                      </div>
                      <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-1.5">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
