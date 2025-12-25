import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, MapPin, Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CONTACT } from "@/utils/contact";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background with a sophisticated vignette */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://ik.imagekit.io/qcvroy8xpd/b7d05ff9-8ea5-4fbd-be55-91559f1ba0ef_vPmkbx7Fe.jpeg?tr=f-auto,q-auto"
          alt="Annapolis Locksmith"
          className="object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_80%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Top Location Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                Serving Downtown Annapolis & Beyond
              </span>
            </div>
          </motion.div>

          {/* Elegant Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[0.95]"
          >
            A Secure <span className="font-serif italic font-light text-primary">Annapolis</span> <br /> Locksmith
          </motion.h1>

          {/* Balanced Google Review Proof */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-10">
            <div className="inline-flex items-center gap-5 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-colors hover:bg-white/[0.06]">
              <img 
                src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" 
                alt="Google" 
                className="h-5 opacity-90"
              />
              <div className="w-[1px] h-4 bg-white/20" />
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9</span>
                <span className="text-white/40 text-sm font-light">60+ Local Reviews</span>
              </div>
            </div>
          </motion.div>

          {/* Centered Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Expert security solutions for your home, business, and vehicle. 
            Licensed professionals available 24/7.
          </motion.p>
          
          {/* Symmetrical Action Block */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col items-center gap-8 mb-20"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button 
                size="xl" 
                className="h-16 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all hover:scale-[1.02] active:scale-95"
                asChild
              >
                <a href={`tel:${CONTACT.PHONE}`}>
                  <Phone className="mr-2 h-5 w-5 fill-current" />
                  Call {CONTACT.PHONE_DISPLAY}
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="xl" 
                className="h-16 px-10 text-lg rounded-full text-white hover:bg-white/5 border border-transparent hover:border-white/10"
                asChild
              >
                <Link to="/contact">Request Quote <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>

            {/* Subtle Address Text */}
            <div className="flex items-center gap-2 text-white/40 text-sm font-light italic">
              <MapPin className="h-3 w-3" />
              <span>222 Severn Ave Ste 1 Building 7-6A, Annapolis, MD 21403</span>
            </div>
          </motion.div>
          
          {/* Harmonized Trust Bar */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-4 max-w-4xl mx-auto border-t border-white/5 pt-12"
          >
            {[
              { icon: Shield, title: "Fully Licensed", sub: "MD Registered #4920" },
              { icon: Clock, title: "Rapid Response", sub: "Average 15-20 Mins" },
              { icon: Star, title: "Top Rated", sub: "Annapolis Choice 2024" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="mb-4 p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                  <feature.icon className="h-5 w-5 text-white/70 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-white font-medium text-sm tracking-wide mb-1">{feature.title}</h3>
                <p className="text-white/30 text-[12px] uppercase tracking-widest font-bold">{feature.sub}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};