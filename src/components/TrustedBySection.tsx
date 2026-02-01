import { motion } from "framer-motion";
import { Shield, Award, Clock, Users } from "lucide-react";

export const TrustedBySection = () => {
  const trustIndicators = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      subtitle: "Maryland Certified"
    },
    {
      icon: Award,
      title: "Upfront Pricing",
      subtitle: "No hidden fees"
    },
    {
      icon: Clock,
      title: "Rapid Response",
      subtitle: "20-min dispatch"
    },
    {
      icon: Users,
      title: "Satisfaction Guaranteed",
      subtitle: "We make it right"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-muted/30 to-white border-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Why Annapolis Trusts Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg mb-1 text-center">{indicator.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground text-center">{indicator.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};