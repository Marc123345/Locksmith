import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCluster {
  category: string;
  faqs: FAQ[];
}

const faqClusters: FAQCluster[] = [
  {
    category: "Emergency Lockout",
    faqs: [
      {
        question: "How fast can you respond to a lockout in Annapolis?",
        answer: "We provide 20-minute average response times for emergency lockouts throughout the Annapolis area, including Downtown, Eastport, Bay Ridge, and Parole."
      },
      {
        question: "Do you charge extra for emergency service?",
        answer: "While emergency service rates may apply outside regular business hours, we always provide upfront pricing before we start. No hidden fees or surprise charges."
      },
      {
        question: "Can you unlock my car without damaging it?",
        answer: "Yes, our technicians use professional tools and techniques to safely unlock vehicles without causing damage to your car."
      }
    ]
  },
  {
    category: "Lock Changes & Rekeying",
    faqs: [
      {
        question: "What's the difference between rekeying and changing locks?",
        answer: "Rekeying changes the internal pins so old keys won't work, but keeps the same lock. Changing locks means installing completely new hardware. Rekeying is usually more affordable."
      },
      {
        question: "How long does it take to change a lock?",
        answer: "A standard lock change typically takes 15-30 minutes per lock. Rekeying is usually faster, around 10-15 minutes per lock."
      },
      {
        question: "Do you offer a warranty on lock changes?",
        answer: "Yes, every residential and commercial lock change comes with a 3-month workmanship warranty. If something isn't right, we'll make it right at no additional charge."
      }
    ]
  },
  {
    category: "Car Keys & Programming",
    faqs: [
      {
        question: "Can you make a new car key if I've lost all my keys?",
        answer: "Yes, we can create new keys even if you've lost all your originals. We have the tools and expertise to program transponder keys for most vehicle makes and models."
      },
      {
        question: "How much does car key programming cost?",
        answer: "Pricing varies by vehicle make, model, and year. Basic keys start around $150, while high-security and smart keys may cost more. We provide upfront quotes before starting work."
      },
      {
        question: "Do you come to me for car key service?",
        answer: "Yes! We provide mobile service throughout Annapolis and Anne Arundel County. No towing needed."
      }
    ]
  }
];

export default function ServiceFAQClusters() {
  const [openIndices, setOpenIndices] = useState<Set<string>>(new Set());

  const toggleFAQ = (clusterIndex: number, faqIndex: number) => {
    const key = `${clusterIndex}-${faqIndex}`;
    const newOpenIndices = new Set(openIndices);
    if (newOpenIndices.has(key)) {
      newOpenIndices.delete(key);
    } else {
      newOpenIndices.add(key);
    }
    setOpenIndices(newOpenIndices);
  };

  return (
    <section className="py-16 bg-background" aria-label="Frequently asked questions by service type">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Questions About Locksmith Services in Annapolis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to frequently asked questions organized by service type
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {faqClusters.map((cluster, clusterIndex) => (
            <motion.div
              key={clusterIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: clusterIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">{cluster.category}</h3>
              <div className="space-y-3">
                {cluster.faqs.map((faq, faqIndex) => {
                  const key = `${clusterIndex}-${faqIndex}`;
                  const isOpen = openIndices.has(key);

                  return (
                    <div
                      key={faqIndex}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(clusterIndex, faqIndex)}
                        className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg hover:text-primary transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`ml-4 flex-shrink-0 text-primary transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 pt-2 text-muted-foreground"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
