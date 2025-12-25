import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CONTACT } from "@/utils/contact";

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" 
      role="banner"
    >
      {/* Background with subtle parallax effect simulation */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://ik.imagekit.io/qcvroy8xpd/b7d05ff9-8ea5-4fbd-be55-91559f1ba0ef_vPmkbx7Fe.jpeg?tr=f-auto,q-auto"
          alt="Professional locksmith"
          className="object-cover w-full h-full scale-110 motion-safe:animate-[subtle-zoom_20s_infinite_alternate]"
        />
        {/* Multi-layered overlay for depth */}
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/40 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Top Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary text-xs md:text-sm font-bold tracking-wider uppercase">Available Now In Annapolis</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Securing Your World, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-foreground to-primary italic">
              One Lock at a Time
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Licensed, bonded, and insured. We provide 24/7 premium locksmith solutions for residential, commercial, and automotive needs across Annapolis.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="group relative h-14 px-8 text-lg bg-primary hover:bg-primary/90 transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              asChild
            >
              <a href={`tel:${CONTACT.PHONE}`}>
                <Phone className="mr-2 h-5 w-5 fill-current" />
                <span>Call {CONTACT.PHONE_DISPLAY}</span>
                <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </a>
            </Button>

            <Button 
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg text-white border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all rounded-full"
              asChild
            >
              <Link to="/contact">Request Quote</Link>
            </Button>
          </motion.div>
          
          {/* Trust Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          >
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "MD License #4920" },
              { icon: Clock, title: "15-Min Response", desc: "Fastest in the city" },
              { icon: Star, title: "4.9/5 Rating", desc: "Based on 200+ jobs" }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <feature.icon className="h-8 w-8 text-primary mb-3 transition-transform group-hover:scale-110" />
                <h3 className="text-white font-bold text-lg">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};