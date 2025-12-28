import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, MapPin, Star, CheckCircle2 } from "lucide-react";
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background with optimized visibility */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://ik.imagekit.io/qcvroy8xpd/b7d05ff9-8ea5-4fbd-be55-91559f1ba0ef_vPmkbx7Fe.jpeg?tr=f-auto,q-auto"
          alt="Annapolis Locksmith Professional"
          className="object-cover w-full h-full opacity-50 select-none scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Main Headline - Now the clear starting point */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[0.9] drop-shadow-sm"
          >
            Locksmith <span className="text-primary italic font-serif font-medium">Annapolis</span>
          </motion.h1>

          {/* Prominent Google Review Badge */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-6 px-6 py-4 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-transform hover:scale-[1.02]">
              <div className="flex flex-col items-start border-r border-slate-200 pr-6">
                <img 
                  src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" 
                  alt="Google" 
                  className="h-5 mb-1"
                />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Verified Business</span>
              </div>
              <div className="flex flex-col items-start leading-none">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-slate-900 font-bold text-lg md:text-xl">
                  4.9 <span className="text-slate-500 font-normal text-sm md:text-base ml-1">Out of 60+ Reviews</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Row */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col items-center gap-6 mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Button 
                size="xl" 
                className="h-16 md:h-20 px-10 md:px-12 text-xl md:text-2xl rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all shadow-xl shadow-primary/25 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                asChild
              >
                <a href={`tel:${CONTACT.PHONE}`}>
                  <Phone className="mr-3 h-6 w-6 md:h-7 md:w-7 fill-current" />
                  Call {CONTACT.PHONE_DISPLAY}
                  <ArrowRight className={`ml-2 h-6 w-6 transition-transform ${isHovered ? 'translate-x-2' : ''}`} />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="h-16 md:h-20 px-10 md:px-12 text-xl md:text-2xl rounded-full border-slate-300 text-slate-700 bg-white/80 backdrop-blur-sm hover:bg-white transition-all shadow-sm"
                asChild
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>

            {/* Harmonized Address Text */}
            <div className="flex items-center gap-2 text-slate-600 text-sm md:text-base font-medium bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm border border-white/50">
              <MapPin className="h-4 w-4 text-primary" />
              <span>222 Severn Ave Ste 1 Building 7-6A, Annapolis, MD 21403</span>
            </div>
          </motion.div>
          
          {/* Bottom Trust Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto border-t border-slate-200/60 pt-12"
          >
            {[
              { icon: Shield, title: "Licensed & Insured", sub: "MD Registry #4920" },
              { icon: Clock, title: "20-Min Response", sub: "Local Emergency Service" },
              { icon: CheckCircle2, title: "Price Guarantee", sub: "No Hidden Service Fees" }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 rounded-3xl bg-white/40 backdrop-blur-[2px] transition-colors hover:bg-white/80">
                <div className="h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-slate-900 font-bold text-sm md:text-base leading-tight">{feature.title}</h3>
                  <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">{feature.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};