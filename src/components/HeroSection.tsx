import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CONTACT } from "@/utils/contact";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-20">
      {/* Background with subtle zoom */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://ik.imagekit.io/qcvroy8xpd/b7d05ff9-8ea5-4fbd-be55-91559f1ba0ef_vPmkbx7Fe.jpeg?tr=f-auto,q-auto"
          alt="Secure Annapolis Locksmith"
          className="object-cover w-full h-full opacity-50 scale-105 motion-safe:animate-[subtle-zoom_25s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/20 to-neutral-950" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-none"
          >
            A Secure <span className="text-primary italic">Annapolis</span> <br /> Locksmith
          </motion.h1>

          {/* PROMINENT GOOGLE REVIEW BADGE */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center justify-center mb-10"
          >
            <div className="group relative flex items-center gap-6 bg-white/5 backdrop-blur-2xl border border-white/20 p-4 md:p-6 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all hover:border-primary/50">
              {/* Gold Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-amber-500/20 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              
              <div className="relative flex items-center gap-4">
                <img 
                  src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" 
                  alt="Google" 
                  className="w-20 md:w-24"
                />
                <div className="h-10 w-[1px] bg-white/20" />
                <div className="text-left">
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-white font-bold text-sm md:text-lg leading-none">
                    4.9 <span className="text-neutral-400 font-medium ml-1">Rating (60+ Reviews)</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Providing expert residential, commercial, and automotive security solutions from our Severn Ave headquarters.
          </motion.p>
          
          {/* Action Row */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-20 justify-center items-center">
            <Button 
              size="xl" 
              className="h-20 px-12 text-2xl rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-black transition-all shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-105 active:scale-95 group"
              asChild
            >
              <a href={`tel:${CONTACT.PHONE}`}>
                <Phone className="mr-3 h-7 w-7 fill-current animate-pulse" />
                Call Now
              </a>
            </Button>
            
            <div className="flex flex-col items-start px-4">
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1 font-bold">Fast Response To:</p>
                <div className="flex items-center gap-2 text-white font-medium">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>222 Severn Ave, Annapolis</span>
                </div>
            </div>
          </motion.div>
          
          {/* Trust Footer Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-white/10 pt-12"
          >
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 transition-all hover:bg-white/10">
              <Shield className="text-primary h-10 w-10 mb-4" />
              <h3 className="text-white font-bold text-xl mb-1">Licensed & Insured</h3>
              <p className="text-neutral-400">MD State Registered Locksmith Professionals.</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 transition-all hover:bg-white/10">
              <Clock className="text-primary h-10 w-10 mb-4" />
              <h3 className="text-white font-bold text-xl mb-1">24/7 Service</h3>
              <p className="text-neutral-400">Emergencies don't wait. Neither do we.</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 transition-all hover:bg-white/10">
              <Star className="text-primary h-10 w-10 mb-4" />
              <h3 className="text-white font-bold text-xl mb-1">Elite Rated</h3>
              <p className="text-neutral-400">Consistently voted best in Annapolis, MD.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};