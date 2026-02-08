import { Phone, Clock, Truck, ClipboardCheck, CreditCard, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/utils/contact';

const processSteps = [
  {
    icon: Phone,
    title: 'Call or Text Us',
    description: 'Reach a real person -- not a call center. We\'ll ask about your situation, location, and lock type to send the right tech.',
    detail: 'Average hold time: under 30 seconds',
  },
  {
    icon: ClipboardCheck,
    title: 'Get an Upfront Quote',
    description: 'Before anyone is dispatched, you\'ll know the price range for your service. No surprises, no bait-and-switch.',
    detail: 'Service call fee: $39 (applied to final bill)',
  },
  {
    icon: Truck,
    title: 'Tech Dispatched to You',
    description: 'Your assigned locksmith heads to your location in a marked vehicle with all the tools needed for the job.',
    detail: 'Average arrival: 20 minutes in Annapolis',
  },
  {
    icon: Clock,
    title: 'Work Completed On-Site',
    description: 'Most jobs take 15--45 minutes. Your tech explains what they\'re doing and confirms the work before finishing.',
    detail: 'ID verification required for lockouts',
  },
  {
    icon: CreditCard,
    title: 'Pay When Satisfied',
    description: 'We accept cash, all major credit cards, Venmo, Zelle, and Google Pay. You only pay the quoted price -- nothing more.',
    detail: 'Invoice provided for every job',
  },
  {
    icon: ThumbsUp,
    title: '90-Day Warranty',
    description: 'Every lock change and installation is backed by a 90-day warranty on parts and labor. If something isn\'t right, we fix it free.',
    detail: 'Covers parts and labor',
  },
];

export default function WhatToExpect() {
  return (
    <section className="py-20 bg-slate-50" aria-label="What to expect when you call a locksmith">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What to Expect When You Call
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From your first call to job completion, here's exactly how it works -- no guesswork, no hidden steps.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200" />

            <div className="space-y-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative flex gap-6"
                  >
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white items-center justify-center z-10 shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2 md:hidden">
                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900">{step.title}</h3>
                      </div>
                      <h3 className="hidden md:block font-bold text-lg text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                      <p className="text-sm text-blue-600 font-medium mt-2">{step.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href={`tel:${CONTACT.PHONE}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Call {CONTACT.PHONE_DISPLAY} to Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
