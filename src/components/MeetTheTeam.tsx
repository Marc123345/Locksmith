import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Heart, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const values = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Licensed & Insured",
    description: "All technicians are fully licensed by the State of Maryland, bonded, and insured for your protection.",
    stat: "MD #4920"
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Locally Owned",
    description: "Based right here in Annapolis since 2010. We're your neighbors, serving our community.",
    stat: "Since 2010"
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Experienced Pros",
    description: "Over 15 years handling residential, commercial, and automotive locksmith needs.",
    stat: "15+ Years"
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Customer First",
    description: "Rated 4.9 stars across Google and Thumbtack with 100+ verified reviews.",
    stat: "4.9 Stars"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function MeetTheTeam() {
  return (
    <section className="py-20 bg-white" aria-label="About our locksmith team">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose A Secure Annapolis Locksmith?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're not a national dispatch center sending whoever's available. We're a local team of licensed professionals who take pride in serving our Annapolis community.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary/5 rounded-full w-fit mx-auto group-hover:bg-primary/10 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{value.title}</h3>
                  <motion.span
                    className="inline-block text-2xl font-bold text-primary mb-3"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {value.stat}
                  </motion.span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-primary/10 max-w-4xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0">
              <div className="bg-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-4xl font-bold text-primary">100+</p>
                  <p className="text-sm text-muted-foreground font-medium">Verified Reviews</p>
                </div>
              </div>
              <CardContent className="pt-6 flex items-center">
                <p className="text-muted-foreground leading-relaxed">
                  Every member of our team is background-checked, fully trained, and committed to providing the honest, professional service that has earned us over 100 five-star reviews. When you call A Secure, you're working with people who live and work in this community -- not a random dispatch from out of state.
                </p>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
