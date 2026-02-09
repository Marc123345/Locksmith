import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Clock, Users, Wrench, Shield } from "lucide-react";

const stats = [
  {
    number: "15+",
    label: "Years Experience",
    icon: <Clock className="h-8 w-8 text-primary" />,
    description: "Serving Annapolis since 2010"
  },
  {
    number: "4.9/5",
    label: "Top-Rated",
    icon: <Users className="h-8 w-8 text-primary" />,
    description: "Based on 60+ verified reviews"
  },
  {
    number: "20-Min",
    label: "Response Time",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    description: "Fast emergency service"
  },
  {
    number: "#143",
    label: "MD Registry",
    icon: <Shield className="h-8 w-8 text-primary" />,
    description: "Licensed & insured"
  }
];

export const StatsSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-16 bg-gradient-to-b from-muted/50 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
                    {stat.icon}
                  </div>
                  <motion.h3 
                    className="text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="font-semibold text-lg mb-2">{stat.label}</p>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};