import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Home, Car, Building2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingItems = [
  {
    icon: <Home className="h-6 w-6" />,
    service: "House Lockout",
    price: "Starting at $39",
    details: "Service call + labor. No hidden fees.",
    link: "/services/emergency-lockout"
  },
  {
    icon: <Home className="h-6 w-6" />,
    service: "Lock Change",
    price: "Starting at $75",
    details: "Includes basic hardware and installation",
    link: "/services/lock-change"
  },
  {
    icon: <Home className="h-6 w-6" />,
    service: "Rekey Service",
    price: "Starting at $25/lock",
    details: "Discounts for multiple locks",
    link: "/services/lock-rekey"
  },
  {
    icon: <Car className="h-6 w-6" />,
    service: "Car Lockout",
    price: "Starting at $50",
    details: "No towing needed. We come to you.",
    link: "/services/lost-car-keys"
  },
  {
    icon: <Car className="h-6 w-6" />,
    service: "Car Key Programming",
    price: "Starting at $150",
    details: "Varies by make and model",
    link: "/services/car-key-programming"
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    service: "Commercial Locks",
    price: "Custom Quote",
    details: "Contact us for commercial pricing",
    link: "/services"
  }
];

const pricingFeatures = [
  "Upfront pricing before we start",
  "No hidden fees or surprise charges",
  "3-month warranty on all lock changes",
  "Same-day service in most cases",
  "No extra charge for credit card payment"
];

export default function PricingGuide() {
  return (
    <section className="py-16 bg-white" aria-label="Locksmith service pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
            <DollarSign className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Locksmith Pricing in Annapolis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No surprises, no hidden fees. Here's what you can expect to pay for common locksmith services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.link}
                className="block bg-slate-50 rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all group h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {item.service}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-1">{item.price}</p>
                    <p className="text-sm text-muted-foreground">{item.details}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {pricingFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            Final pricing depends on your specific needs. Call or text for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
