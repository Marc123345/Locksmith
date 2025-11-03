import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CONTACT } from "@/utils/contact";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="relative min-h-[85vh] flex items-center pt-16 md:pt-20" 
      role="banner"
      aria-label="Main hero section"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=2000&auto=format&fit=crop&q=80&fm=webp"
          alt="Professional locksmith working on a lock"
          className="object-cover w-full h-full"
          role="img"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"
          aria-hidden="true"
        />
      </div>

      <div className="relative w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
              Professional Local{" "}
              <span className="text-primary">Locksmith Services</span>
              {" "}in Annapolis
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Licensed and insured locksmith solutions for residential, commercial, and automotive needs. Same-day service available with fast response times.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 mb-6 md:mb-12 justify-center">
              <Button 
                size="xl" 
                variant="white"
                className="shadow-lg hover:shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                asChild
              >
                <a href={`tel:${CONTACT.PHONE}`} aria-label="Call our emergency number" className="flex items-center justify-center w-full">
                  <Phone className="mr-2 h-4 w-4 xs:h-5 xs:w-5" aria-hidden="true" /> 
                  Call {CONTACT.PHONE_DISPLAY}
                  <motion.span
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    <ArrowRight className="ml-2 h-4 w-4 xs:h-5 xs:w-5" />
                  </motion.span>
                </a>
              </Button>
              <Button 
                size="xl" 
                variant="transparent"
                className="shadow-lg hover:shadow-xl"
                asChild
              >
                <Link to="/contact" className="flex items-center justify-center">
                  Request Service
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 xs:gap-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4"
              >
                <Shield className="h-5 w-5 xs:h-6 xs:w-6 md:h-8 md:w-8 text-primary mr-2 xs:mr-3 flex-shrink-0" aria-hidden="true" />
                <div className="text-left">
                  <p className="font-semibold text-xs xs:text-sm md:text-base text-white">Licensed & Insured</p>
                  <p className="text-xs md:text-sm text-white/80">For your protection</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4"
              >
                <Clock className="h-5 w-5 xs:h-6 xs:w-6 md:h-8 md:w-8 text-primary mr-2 xs:mr-3 flex-shrink-0" aria-hidden="true" />
                <div className="text-left">
                  <p className="font-semibold text-xs xs:text-sm md:text-base text-white">Same-Day Service</p>
                  <p className="text-xs md:text-sm text-white/80">Fast response times</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 col-span-1 xs:col-span-2 sm:col-span-1 mx-auto xs:mx-0 w-full"
              >
                <Award className="h-5 w-5 xs:h-6 xs:w-6 md:h-8 md:w-8 text-primary mr-2 xs:mr-3 flex-shrink-0" aria-hidden="true" />
                <div className="text-left">
                  <p className="font-semibold text-xs xs:text-sm md:text-base text-white">4.9 Star Rated</p>
                  <p className="text-xs md:text-sm text-white/80">50+ reviews</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};