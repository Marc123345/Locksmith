import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, MapPin, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { CONTACT } from '@/utils/contact';

const steps = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    description: "Reach us 7 days a week during business hours for immediate assistance"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "20-Min Response",
    description: "Average response time for emergency lockouts across Annapolis"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "We Come to You",
    description: "Mobile service throughout Anne Arundel County"
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Problem Solved",
    description: "Fast, professional service with upfront pricing"
  }
];

export default function LockoutGuide() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5" aria-label="Emergency lockout response process">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Locked Out? Here's What Happens Next
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fast, reliable emergency lockout service with transparent pricing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-md p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" asChild>
            <a href={`tel:${CONTACT.PHONE}`} className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: {CONTACT.PHONE_DISPLAY}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
