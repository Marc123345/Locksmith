import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Home, Car, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { CONTACT } from '@/utils/contact';

const pricingItems = [
  {
    icon: <Home className="h-6 w-6" />,
    service: "House Lockout",
    price: "$39",
    priceLabel: "Starting at",
    details: "Service call + labor. No hidden fees.",
    link: "/services/emergency-lockout",
    tag: "Most Popular"
  },
  {
    icon: <Home className="h-6 w-6" />,
    service: "Lock Change",
    price: "$75",
    priceLabel: "Starting at",
    details: "Includes basic hardware and installation.",
    link: "/services/lock-change",
    tag: null
  },
  {
    icon: <Home className="h-6 w-6" />,
    service: "Rekey Service",
    price: "$25",
    priceLabel: "Per lock from",
    details: "Discounts for multiple locks.",
    link: "/services/lock-rekey",
    tag: "Best Value"
  },
  {
    icon: <Car className="h-6 w-6" />,
    service: "Car Lockout",
    price: "$50",
    priceLabel: "Starting at",
    details: "No towing needed. We come to you.",
    link: "/services/lost-car-keys",
    tag: null
  },
  {
    icon: <Car className="h-6 w-6" />,
    service: "Car Key Programming",
    price: "$150",
    priceLabel: "Starting at",
    details: "Varies by make and model.",
    link: "/services/car-key-programming",
    tag: null
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    service: "Commercial Locks",
    price: "Quote",
    priceLabel: "Custom",
    details: "Contact us for commercial pricing.",
    link: "/services",
    tag: null
  }
];

const pricingFeatures = [
  "Upfront pricing before we start",
  "No hidden fees or surprise charges",
  "3-month warranty on all lock changes",
  "Same-day service in most cases",
  "No extra charge for credit card payment"
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

export default function PricingGuide() {
  return (
    <section className="py-20 bg-white" aria-label="Locksmith service pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Locksmith Pricing in Annapolis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No surprises, no hidden fees. Here's what you can expect to pay for common locksmith services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
        >
          {pricingItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link to={item.link} className="block h-full">
                <Card className="h-full border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                  {item.tag && (
                    <div className="absolute top-0 right-0">
                      <span className="inline-block bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                        {item.tag}
                      </span>
                    </div>
                  )}
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {item.service}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-1">{item.priceLabel}</p>
                        <p className="text-3xl font-bold text-primary">{item.price}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 pb-5">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-primary/10 max-w-3xl mx-auto bg-gradient-to-br from-slate-50 to-white">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-5 text-center">What's Included With Every Service</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-2">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6 pt-5 border-t">
                <p className="text-sm text-muted-foreground mb-3">
                  Final pricing depends on your specific needs.
                </p>
                <Button size="lg" asChild>
                  <a href={`tel:${CONTACT.PHONE}`} className="flex items-center justify-center">
                    Call for a Free Quote: {CONTACT.PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
