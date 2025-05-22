"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, ThumbsUp, Wrench, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Licensed & Insured",
    description: "All our technicians are fully licensed, bonded, and insured for your peace of mind.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Same-Day Service",
    description: "We're available for emergency locksmith services when you need them most.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "5-Star Rated",
    description: "Consistently rated 5 stars by our satisfied customers across Google and Yelp.",
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary" />,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a 100% satisfaction guarantee on all services.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Experienced Technicians",
    description: "Our locksmiths have years of experience handling all types of lock and security issues.",
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: "Upfront Pricing",
    description: "No hidden fees or surprises. We provide clear, upfront pricing before any work begins.",
  },
];

export const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We pride ourselves on providing exceptional locksmith services with integrity, professionalism, and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-200">
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};