import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { CONTACT } from '@/utils/contact';

const steps = [
  {
    icon: <Phone className="h-7 w-7" />,
    title: "Call Us",
    description: "Reach us 7 days a week during business hours for immediate assistance.",
    accent: "bg-blue-500"
  },
  {
    icon: <Clock className="h-7 w-7" />,
    title: "20-Min Response",
    description: "Average response time for emergency lockouts across Annapolis.",
    accent: "bg-teal-500"
  },
  {
    icon: <MapPin className="h-7 w-7" />,
    title: "We Come to You",
    description: "Mobile service throughout Anne Arundel County -- no towing needed.",
    accent: "bg-amber-500"
  },
  {
    icon: <CheckCircle className="h-7 w-7" />,
    title: "Problem Solved",
    description: "Fast, professional service with upfront pricing by licensed technicians.",
    accent: "bg-emerald-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function LockoutGuide() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white" aria-label="Emergency lockout response process">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Emergency Service
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Locked Out? Here's What Happens Next
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps from your call to getting back inside -- fast, reliable, and transparent.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl overflow-visible group">
                <div className={`absolute -top-4 left-6 h-8 w-8 rounded-lg ${step.accent} text-white flex items-center justify-center font-bold text-sm shadow-lg`}>
                  {index + 1}
                </div>
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/10 transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                  <ArrowRight className="h-5 w-5 text-slate-300" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" asChild>
            <a href={`tel:${CONTACT.PHONE}`} className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: {CONTACT.PHONE_DISPLAY}
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Service call fee starts at {CONTACT.SERVICE_CALL_FEE}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
