'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle, Phone, ArrowRight, Hop as Home, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/utils/contact';

export default function ThankYouPage() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-8"
          >
            <CheckCircle className="h-14 w-14 text-green-600" />
            {showConfetti && (
              <>
                {[...Array(8)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 1, scale: 0 }}
                    animate={{
                      opacity: 0,
                      scale: 1,
                      x: Math.cos((i * Math.PI * 2) / 8) * 60,
                      y: Math.sin((i * Math.PI * 2) / 8) * 60,
                    }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'][i],
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground mb-4 leading-relaxed"
          >
            Your message has been received successfully. We appreciate you reaching out to us.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground mb-10"
          >
            A member of our team will review your inquiry and get back to you shortly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg border border-border p-8 mb-10"
          >
            <h2 className="text-xl font-semibold mb-6">What happens next?</h2>
            <div className="grid gap-6 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">We review your request</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team carefully reads every submission to understand your needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">We get in touch</h3>
                  <p className="text-sm text-muted-foreground">
                    Expect a response via phone or email, typically within a few hours during business hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">We solve your problem</h3>
                  <p className="text-sm text-muted-foreground">
                    We schedule a convenient time or dispatch a technician based on your needs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
          >
            <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
              <Clock className="h-5 w-5 text-primary mb-2" />
              <span className="text-sm font-medium">Fast Response</span>
              <span className="text-xs text-muted-foreground">Same-day replies</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
              <Shield className="h-5 w-5 text-primary mb-2" />
              <span className="text-sm font-medium">Licensed & Insured</span>
              <span className="text-xs text-muted-foreground">Full protection</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
              <Phone className="h-5 w-5 text-primary mb-2" />
              <span className="text-sm font-medium">Always Available</span>
              <span className="text-xs text-muted-foreground">During business hours</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-primary/5 rounded-xl p-6 border border-primary/10 mb-10"
          >
            <p className="text-muted-foreground mb-4">
              Need immediate assistance? Don&apos;t wait for a callback.
            </p>
            <Button size="lg" className="shadow-lg" asChild>
              <a href={`tel:${CONTACT.PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {CONTACT.PHONE_DISPLAY} Now
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
