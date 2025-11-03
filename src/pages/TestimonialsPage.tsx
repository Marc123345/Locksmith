import React from 'react';
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Star, Quote, Lock, ThumbsUp, Users, MessageSquare } from "lucide-react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jen Jamison",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Dispatch was courteous and super helpful, I knew the price and the time my tech was expected to arrive. I was at work and had lost my only key to my vehicle, and commute across the bridge for work so I was panicked.",
    date: "6 months ago",
    source: "Google",
    verified: true
  },
  {
    name: "Malorie",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "I highly recommend A Secure Annapolis Locksmith! They were by far the most responsive and efficient company I spoke to when I needed to replace my lock. Very easy to work with and reasonably priced.",
    date: "5 months ago",
    source: "Google",
    verified: true
  },
  {
    name: "Emma Cutler",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Thank you for offering such a great service for my son! Finding a company that actually called back and went the extra mile to accommodate our needs was such a relief. Professional, courteous and speedy.",
    date: "11 months ago",
    source: "Google",
    verified: true
  },
  {
    name: "Ben England",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Yes I've had to use this guy — twice. Both times when I was preparing to leave for a trip. He is fast, courteous, secure, respectful and — fast. I had to wait for him outside the house both times and the wait was very reasonable.",
    date: "10 months ago",
    source: "Google",
    verified: true
  },
  {
    name: "Rebecca Dorward",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Extremely fast, helpful, and reasonably priced service for door knob/lock changes for three house doors. The work looks clean and seamless. Thank you so much!",
    date: "11 months ago",
    source: "Google",
    verified: true
  },
  {
    name: "Desiree Henningsen",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "After calling another local locksmith and getting a estimate of 90 minutes till they could come and a hefty $149 price tag, I called A Secure Annapolis Locksmith to see what they could do. They quoted me $95 and were at my car in 15 minutes! Chris was professional, efficient, and quick!",
    date: "1 year ago",
    source: "Google",
    verified: true
  },
  {
    name: "Diane Dwyer",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "A Secure Annapolis Locksmith provided prompt service on our recent lock install. Despite having a miscommunication with the technician, the manager reached out and resolved our concern. We would definitely use this company again in the future.",
    date: "2 years ago",
    source: "Google",
    verified: true
  },
  {
    name: "Amanda Reynolds",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "I locked myself out of my house with 2 kids and a dog. Needless to say I was feeling a little silly and a lot stressed. The locksmith Jaylyn came quickly and had me back in my house in a jiffy. He was kind, professional and very helpful.",
    date: "3 years ago",
    source: "Google",
    verified: true
  },
  {
    name: "Alex Sanchez",
    location: "Annapolis, MD",
    rating: 5,
    testimonial: "Fast service and good customer service, was contacted by a technician right away, with updates on arrival, gave me options for installation of locks, and pricing was competitive. Would definitely use them for future locksmith service.",
    date: "5 years ago",
    source: "Google",
    verified: true
  }
];

const stats = [
  {
    icon: <Star className="h-8 w-8 text-yellow-400" />,
    value: "4.9",
    label: "Average Rating",
    description: "Based on 50+ reviews"
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    value: "98%",
    label: "Satisfaction Rate",
    description: "Happy customers"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "1000+",
    label: "Customers Served",
    description: "Since 2010"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    value: "50+",
    label: "Verified Reviews",
    description: "On Google"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Professional locksmith service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full">
                <Lock className="h-16 w-16 text-primary" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Customer Reviews</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              See what our satisfied customers in Annapolis have to say about our professional locksmith services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg h-12 px-8"
                asChild
              >
                <a href="https://g.page/r/asecureannapolis/review" target="_blank" rel="noopener noreferrer">
                  Write a Review
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg h-12 px-8"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/5 rounded-full">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                  <p className="font-medium text-sm mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative"
          >
            <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 text-primary/10 rotate-180" />
            <div className="bg-muted/30 rounded-xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground italic mb-8">
                "After calling another local locksmith and getting a estimate of 90 minutes till they could come and a hefty $149 price tag, I called A Secure Annapolis Locksmith to see what they could do. They quoted me $95 and were at my car in 15 minutes!"
              </p>
              <div>
                <p className="font-semibold text-lg">Desiree Henningsen</p>
                <p className="text-muted-foreground">Annapolis, MD</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read verified reviews from our satisfied customers in Annapolis and surrounding areas.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Experience Our Professional Service"
        subtitle="Join our satisfied customers and discover why we're Annapolis's most trusted locksmith."
        primaryButtonText="Contact Us"
        secondaryButtonText="View Services"
        variant="centered"
      />
    </>
  );
}