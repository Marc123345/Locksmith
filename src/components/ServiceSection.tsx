import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Building, Car, AlertTriangle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ServiceSection = () => {
  const [activeService, setActiveService] = useState<string | null>("residential");

  const services = {
    residential: {
      title: "Residential Services",
      description: "Comprehensive security solutions for your home, from basic locks to advanced smart systems.",
      image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(4)_iYsRLa_HJp.jpg?tr=f-auto,q-auto",
      icon: <Home className="h-5 w-5 sm:h-6 sm:w-6" />,
      features: [
        "Lock installation & repair",
        "Rekeying services",
        "Smart lock installation",
        "Security assessments",
        "Emergency lockout service",
        "Master key systems",
      ],
    },
    commercial: {
      title: "Commercial Services",
      description: "Advanced security solutions to protect your business and assets.",
      image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(8)_Y1KJcwdRO.png?tr=f-auto,q-auto",
      icon: <Building className="h-5 w-5 sm:h-6 sm:w-6" />,
      features: [
        "High-security locks",
        "Master key systems",
        "Panic bars & exit devices",
        "Door closers",
        "Security consultation",
      ],
    },
    automotive: {
      title: "Automotive Services",
      description: "Fast and reliable solutions for all vehicle lock and key issues.",
      image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(7)_l8viIEP0Wf.jpg?tr=f-auto,q-auto",
      icon: <Car className="h-5 w-5 sm:h-6 sm:w-6" />,
      features: [
        "Car lockout assistance",
        "Key cutting & programming",
        "FOB programming",
        "Ignition repair",
        "High-security keys",
        "Transponder keys",
      ],
    },
    emergency: {
      title: "Emergency Services",
      description: "Same-day emergency locksmith service across Annapolis and Anne Arundel County.",
      image: "https://ik.imagekit.io/qcvroy8xpd/image-gen%20(3)_B7OOO72hK.jpg?tr=f-auto,q-auto",
      icon: <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6" />,
      features: [
        "Same-day availability",
        "20-minute average response",
        "All types of lockouts",
        "Lock repairs",
        "Emergency rekeying",
        "Break-in repairs",
      ],
    }
  };

  const handleServiceClick = (serviceKey: string) => {
    setActiveService(activeService === serviceKey ? null : serviceKey);
  };

  // Generate responsive Cloudinary URL
  const getResponsiveImage = (url: string) => {
    // For Unsplash images, use their built-in responsive parameters
    if (url.includes('unsplash.com')) {
      const baseUrl = url.split('?')[0];
      return {
        small: `${baseUrl}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        medium: `${baseUrl}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
        large: `${baseUrl}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80`
      };
    }
    // Fallback for other image sources
    return { small: url, medium: url, large: url };
  };

  return (
    <div className="space-y-8">
      {Object.entries(services).map(([key, service]) => {
        const isActive = activeService === key;
        const responsiveImage = getResponsiveImage(service.image);

        return (
          <div
            key={key}
            className="rounded-xl border-2 overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
            id={key}
          >
            <button
              className={cn(
                "w-full px-10 py-8 flex items-center justify-between bg-background hover:bg-muted/50 transition-colors",
                isActive && "bg-muted/50"
              )}
              onClick={() => handleServiceClick(key)}
              aria-expanded={isActive}
              aria-controls={`content-${key}`}
            >
              <div className="flex items-center gap-6">
                <div className={cn(
                  "p-4 rounded-full transition-colors",
                  isActive ? "bg-primary text-white" : "bg-muted text-primary"
                )}>
                  {service.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-2xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-base">{service.description}</p>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "h-8 w-8 transition-transform duration-200 flex-shrink-0 ml-6",
                  isActive && "transform rotate-180"
                )}
              />
            </button>

            <motion.div
              initial={false}
              animate={{
                height: isActive ? "auto" : 0,
                opacity: isActive ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
              id={`content-${key}`}
            >
              <div className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div className="order-2 lg:order-1">
                    <div 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
                      role="list"
                      aria-label={`${service.title} features`}
                    >
                      {service.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-center bg-muted/50 p-6 rounded-lg"
                          role="listitem"
                        >
                          <div 
                            className="h-3 w-3 rounded-full bg-primary mr-4 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                    <div className="relative w-full h-0 pb-[120%]">
                      <img 
                        src={responsiveImage.medium}
                        srcSet={`
                          ${responsiveImage.small} 1000w,
                          ${responsiveImage.medium} 1200w,
                          ${responsiveImage.large} 1400w
                        `}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                        alt={`${service.title} illustration`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSection;