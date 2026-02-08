"use client";

import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  date: string;
  source?: string;
  verified?: boolean;
}

const TestimonialCard = ({
  name,
  location,
  rating,
  testimonial,
  date,
  source = "Google",
  verified = false,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-2 hover:border-primary/20 transition-all duration-200 overflow-hidden">
        <CardContent className="pt-6 flex-grow relative">
          <div className="absolute top-0 right-0 text-primary/10">
            <Quote className="h-24 w-24 rotate-180" />
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-5 w-5",
                    i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  )}
                />
              ))}
            </div>
            {verified && (
              <div className="flex items-center text-primary">
                <BadgeCheck className="h-5 w-5 mr-1" />
                <span className="text-sm">Verified</span>
              </div>
            )}
          </div>

          <blockquote className="text-muted-foreground relative z-10">
            "{testimonial}"
          </blockquote>
        </CardContent>

        <CardFooter className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center w-full">
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center text-sm text-muted-foreground">
                <img
                  src={source === "Google" ? "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" : "https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg"}
                  alt={`${source} review platform logo`}
                  width="16"
                  height="16"
                  className="h-4 w-4 mr-1"
                  loading="lazy"
                />
                {source}
              </div>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default TestimonialCard;