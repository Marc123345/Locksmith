'use client';

import React, { useCallback } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
  className?: string;
}

const ServiceCard = React.memo(({ icon, title, description, features, image, href, className }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn("h-full", className)}
    >
      <Card 
        className="h-full flex flex-col border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-0 pb-[120%]">
          <Image
            src={image}
            alt={`${title} locksmith service in Annapolis MD`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <div className="bg-primary/20 backdrop-blur-sm p-5 rounded-full w-fit mb-5">
              {icon}
            </div>
            <h3 className="text-3xl font-semibold text-white mb-4">{title}</h3>
            <p className="text-white/90 text-xl leading-relaxed">{description}</p>
          </div>
        </div>
        <CardContent className="pt-12 pb-8 flex-grow">
          <div className="grid grid-cols-1 gap-5">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center bg-muted/50 p-6 rounded-lg"
              >
                <div className="h-3 w-3 rounded-full bg-primary mr-4 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-6 pb-10 px-10">
          <Button 
            variant="outline" 
            className="w-full group border-2 hover:bg-primary hover:text-primary-foreground h-16 text-xl"
            asChild
          >
            <Link
              href="/contact"
              className="flex items-center justify-center"
              aria-label={`Request ${title} service`}
            >
              Request Service
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="ml-2 h-6 w-6 group-hover:text-primary-foreground" aria-hidden="true" />
              </motion.div>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;