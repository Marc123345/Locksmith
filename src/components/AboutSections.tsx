import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Certification {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AboutSectionsProps {
  certifications: Certification[];
}

const AboutSections: React.FC<AboutSectionsProps> = ({ certifications }) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We maintain the highest standards of professional certification and insurance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white border-2 hover:border-primary/20 transition-all duration-200 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                      <p className="text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSections;