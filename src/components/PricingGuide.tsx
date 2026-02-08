import { DollarSign, Info, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/utils/contact';
import { Link } from 'react-router-dom';

const pricingRanges = [
  {
    category: 'Residential',
    items: [
      { service: 'House Lockout', range: '$95--$150', note: 'Depends on lock type' },
      { service: 'Lock Rekey', range: '$39--$75 per lock', note: 'Volume discounts available' },
      { service: 'Lock Change / New Install', range: '$120--$250', note: 'Includes hardware' },
      { service: 'Smart Lock Install', range: '$120--$200+', note: 'Customer-supplied or ours' },
    ],
    href: '/services/lock-change',
  },
  {
    category: 'Automotive',
    items: [
      { service: 'Car Lockout', range: '$95--$150', note: 'No towing needed' },
      { service: 'Standard Key Cut', range: '$120--$160', note: 'On-site mobile service' },
      { service: 'Transponder Key', range: '$150--$180', note: 'Includes programming' },
      { service: 'Key Fob Replacement', range: '$180--$250', note: 'Make/model dependent' },
    ],
    href: '/services/car-key-programming',
  },
  {
    category: 'Emergency',
    items: [
      { service: 'Emergency Lockout (Day)', range: 'Starting at $95', note: 'During business hours' },
      { service: 'Emergency Lockout (After-Hours)', range: '$95 + service fee', note: 'Evenings & weekends' },
      { service: 'Service Call Fee', range: '$39', note: 'Applied to all visits' },
    ],
    href: '/services/emergency-lockout',
  },
];

export default function PricingGuide() {
  return (
    <section className="py-20 bg-slate-50" aria-label="Locksmith pricing guide for Annapolis MD">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
            <DollarSign className="h-7 w-7 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Transparent Locksmith Pricing in Annapolis
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We believe in upfront pricing with no hidden fees. Here are typical ranges for common services.
            Final pricing depends on the specific lock, time of day, and complexity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingRanges.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="bg-slate-900 text-white px-6 py-4">
                <h3 className="font-bold text-lg">{group.category}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.service} className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-medium text-slate-900 text-sm">{item.service}</p>
                        <p className="text-xs text-slate-500">{item.note}</p>
                      </div>
                      <p className="font-bold text-slate-900 text-sm whitespace-nowrap">{item.range}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to={group.href}
                  className="block mt-6 text-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View {group.category} Services
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-10"
        >
          <div className="bg-blue-50 rounded-xl p-5 flex items-start gap-3 border border-blue-200">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-slate-700">
              <p className="font-semibold mb-1">Always get an upfront quote before work begins.</p>
              <p>
                These ranges cover most standard jobs in the Annapolis area. Pricing may vary for high-security
                locks, unusual hardware, or specialty vehicles. Call{' '}
                <a href={`tel:${CONTACT.PHONE}`} className="text-blue-600 font-semibold hover:underline">
                  {CONTACT.PHONE_DISPLAY}
                </a>{' '}
                for an exact quote.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
