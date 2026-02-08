import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { CONTACT } from "@/utils/contact";

interface CallToActionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  variant?: 'default' | 'centered';
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  variant = 'default'
}) => {
  const isCallNow = primaryButtonText.toLowerCase().includes('call');

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Expert Locksmith Services</h2>
          <p className="text-lg text-muted-foreground mb-8">Professional locksmith solutions for all your security needs. Licensed, bonded, and insured.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="xl" 
              className="shadow-lg hover:shadow-xl min-w-[200px]" 
              asChild
            >
              {isCallNow ? (
                <a href={`tel:${CONTACT.PHONE}`} className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </a>
              ) : (
                <Link href="/contact">Contact Us</Link>
              )}
            </Button>
            <Button 
              size="xl" 
              variant="secondary"
              className="shadow-lg hover:shadow-xl min-w-[200px] bg-black text-white hover:bg-black/90" 
              asChild
            >
              <Link href="/contact">Request Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;