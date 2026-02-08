import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Heart } from 'lucide-react';

const values = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Licensed & Insured",
    description: "All technicians are fully licensed by the State of Maryland, bonded, and insured for your protection."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Locally Owned",
    description: "Based right here in Annapolis since 2010. We're your neighbors, serving our community."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Experienced Professionals",
    description: "Over 15 years of experience handling residential, commercial, and automotive locksmith needs."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Customer First",
    description: "Rated 4.9 stars across Google and Thumbtack with 100+ verified reviews from satisfied customers."
  }
];

export default function MeetTheTeam() {
  return (
    <section className="py-16 bg-white" aria-label="About our locksmith team">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose A Secure Annapolis Locksmith?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're not a national dispatch center sending whoever's available. We're a local team of licensed professionals who take pride in serving our Annapolis community with honest, reliable service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto bg-primary/5 rounded-xl p-8"
        >
          <p className="text-center text-lg leading-relaxed">
            Every member of our team is background-checked, fully trained, and committed to providing the honest, professional service that has earned us over 100 five-star reviews. When you call A Secure, you're working with people who live and work in this community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
