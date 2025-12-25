import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CONTACT } from "@/utils/contact";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://ik.imagekit.io/qcvroy8xpd/b7d05ff9-8ea5-4fbd-be55-91559f1ba0ef_vPmkbx7Fe.jpeg?tr=f-auto,q-auto"
          alt="Professional locksmith in Annapolis"
          className="object-cover w-full h-full opacity-60 scale-105 motion-safe:animate-[subtle-zoom_30s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Trust Badge / Google Review */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl shadow-2xl">
              <img 
                src="https://ik.imagekit.io/qcvroy8xpd/Google_Review_(1).svg" 
                alt="Google Reviews" 
                className="h-6 w-auto"
              />
              <div className="flex flex-col items-start leading-none">
                <span className="text-white font-bold text-sm">4.9 Rating</span>
                <span className="text-neutral-400 text-[10px] uppercase tracking-wider">60+ Verified Reviews</span>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            A Secure <span className="text-primary italic">Annapolis</span> <br className="hidden md:block" /> Locksmith
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto"
          >
            Trusted local experts providing 24/7 residential, commercial, and automotive lock services. Fast response, fair pricing, and professional care.
          </motion.p>
          
          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
            <Button 
              size="xl" 
              className="h-16 px-10 text-xl rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all shadow-lg shadow-primary/20 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              asChild
            >
              <a href={`tel:${CONTACT.PHONE}`}>
                <Phone className="mr-2 h-6 w-6" />
                Call {CONTACT.PHONE_DISPLAY}
                <ArrowRight className={`ml-2 h-6 w-6 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="h-16 px-10 text-xl rounded-full border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10"
              asChild
            >
              <Link to="/contact">Book Online</Link>
            </Button>
          </motion.div>
          
          {/* Feature Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left border-t border-white/10 pt-12"
          >
            <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Shield className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Licensed & Insured</h3>
                <p className="text-neutral-400 text-sm">Full protection for every job.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Clock className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Fast Response</h3>
                <p className="text-neutral-400 text-sm">On-site in 20 mins or less.</p>
              </div>
            </div>

            {/* Address Card */}
            <a 
              href="https://goo.gl/maps/YOUR_MAP_LINK_HERE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="text-primary h-6 w-6" />
              </div>
              <div className="relative">
                <h3 className="text-white font-semibold flex items-center gap-1">
                  Visit Us <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <address className="text-neutral-400 text-xs not-italic leading-relaxed">
                  222 Severn Ave Ste 1, Bldg 7-6A<br />
                  Annapolis, MD 21403
                </address>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};