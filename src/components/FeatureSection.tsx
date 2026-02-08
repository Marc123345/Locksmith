"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, ThumbsUp, Wrench, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Licensed & Insured",
    description: "Maryland licensed (Registry #413), bonded, and fully insured. All technicians carry valid state credentials.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "20-Minute Response",
    description: "Fast dispatch for emergency lockouts. We minimize your wait time and get you back inside quickly.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Top-Rated Service",
    description: "4.9/5 rating based on 100+ verified reviews across Google and Thumbtack from actual customers in Annapolis.",
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary" />,
    title: "90-Day Workmanship Guarantee",
    description: "We stand behind our work. If the job isn't done right, we'll return and make it right.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "15+ Years Experience",
    description: "Serving Annapolis since 2010 with expertise in residential, commercial, and automotive locks.",
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: "Upfront Pricing",
    description: "No hidden fees. You'll know the cost before we start—no surprise charges added to the bill.",
  },
];

export const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not a dispatch center—we're a locally owned locksmith business with real technicians, transparent pricing, and verifiable credentials.
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