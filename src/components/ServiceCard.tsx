import React, { useCallback } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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

  // Generate responsive Cloudinary URL
  const getResponsiveImage = (url: string) => {
    if (url.includes('cloudinary')) {
      // Extract base URL and image path
      const baseUrl = url.split('/upload/')[0] + '/upload/';
      const imagePath = url.split('/upload/')[1];
      
      // Define transformations for different sizes
      return {
        small: `${baseUrl}c_fill,g_center,h_1200,w_1200/f_auto,q_auto/${imagePath}`,
        medium: `${baseUrl}c_fill,g_center,h_1400,w_1400/f_auto,q_auto/${imagePath}`,
        large: `${baseUrl}c_fill,g_center,h_1600,w_1600/f_auto,q_auto/${imagePath}`
      };
    }
    return { small: url, medium: url, large: url };
  };

  const responsiveImage = getResponsiveImage(image);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn("h-full", className)}
    >
      <Card 
        className="h-full flex flex-col border-2 hover:border-primary/50 transition-all duration-200 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-0 pb-[120%]">
          <img 
            src={responsiveImage.medium}
            srcSet={`
              ${responsiveImage.small} 1200w,
              ${responsiveImage.medium} 1400w,
              ${responsiveImage.large} 1600w
            `}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={`${title} service`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
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
              to="/contact"
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