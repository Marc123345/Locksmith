import { Home, Car, Building2, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FAQ {
  q: string;
  a: string;
}

interface ServiceCluster {
  icon: typeof Home;
  title: string;
  color: string;
  bgColor: string;
  href: string;
  faqs: FAQ[];
}

const clusters: ServiceCluster[] = [
  {
    icon: Home,
    title: 'Residential',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 border-blue-200',
    href: '/services/lock-change',
    faqs: [
      {
        q: 'How much does it cost to rekey a house in Annapolis?',
        a: 'Rekeying starts at $39 per lock. Most homes have 3--5 exterior locks, so a full rekey typically runs $120--$200. We offer volume discounts.',
      },
      {
        q: 'Do you damage the door when changing locks?',
        a: 'No. We use proper tools and techniques to remove and install locks without damaging your door, frame, or finish.',
      },
      {
        q: 'What lock brands do you carry?',
        a: 'We stock Schlage, Kwikset, Yale, August, and other major brands. We can also install customer-supplied hardware.',
      },
    ],
  },
  {
    icon: Car,
    title: 'Automotive',
    color: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200',
    href: '/services/car-key-programming',
    faqs: [
      {
        q: 'Can you make a car key without the original?',
        a: 'Yes. We can cut and program a new key from scratch for most makes and models using your VIN and proof of ownership.',
      },
      {
        q: 'Is it cheaper than going to the dealership?',
        a: 'Typically 30--50% less. Plus we come to you -- no towing costs, no waiting at the service desk.',
      },
      {
        q: 'How long does car key programming take?',
        a: 'Most keys are cut and programmed in 20--45 minutes on-site. Complex fobs may take up to an hour.',
      },
    ],
  },
  {
    icon: Building2,
    title: 'Commercial',
    color: 'text-slate-700',
    bgColor: 'bg-slate-50 border-slate-200',
    href: '/services/lock-repair',
    faqs: [
      {
        q: 'Do you install master key systems?',
        a: 'Yes. We design and install master key systems for offices, retail spaces, and multi-unit buildings throughout Annapolis.',
      },
      {
        q: 'Can you rekey a whole office building?',
        a: 'We handle buildings of all sizes. We coordinate scheduling to minimize business disruption and can rekey after-hours.',
      },
      {
        q: 'Do you work with panic bars and exit hardware?',
        a: 'Yes. We install and repair panic bars, closers, push bars, and ADA-compliant hardware for commercial doors.',
      },
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Emergency',
    color: 'text-red-600',
    bgColor: 'bg-red-50 border-red-200',
    href: '/services/emergency-lockout',
    faqs: [
      {
        q: 'Do you charge extra for nights and weekends?',
        a: 'Emergency service rates may apply outside standard hours, but you\'ll always know the price before we start. No surprises.',
      },
      {
        q: 'What\'s your fastest response time?',
        a: 'In central Annapolis and Eastport, we can often arrive in 10--15 minutes. Most areas see a 20-minute average.',
      },
      {
        q: 'Will the locksmith verify my identity?',
        a: 'Yes. For all lockout services, we verify that you\'re authorized to access the property before opening the lock.',
      },
    ],
  },
];

export default function ServiceFAQClusters() {
  return (
    <section className="py-20 bg-white" aria-label="Frequently asked locksmith questions by service type">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Common Questions by Service Type
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real questions from Annapolis-area customers, answered by our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {clusters.map((cluster, index) => {
            const Icon = cluster.icon;
            return (
              <motion.div
                key={cluster.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-xl p-6 border ${cluster.bgColor}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <Icon className={`h-6 w-6 ${cluster.color}`} />
                  <h3 className="font-bold text-xl text-slate-900">{cluster.title}</h3>
                </div>
                <div className="space-y-4">
                  {cluster.faqs.map((faq) => (
                    <details key={faq.q} className="group">
                      <summary className="cursor-pointer font-semibold text-sm text-slate-800 flex justify-between items-center py-2 hover:text-blue-600 transition-colors">
                        <span className="pr-4">{faq.q}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0">
                          &#9660;
                        </span>
                      </summary>
                      <p className="text-sm text-slate-600 pb-2 leading-relaxed">{faq.a}</p>
                    </details>
                  ))}
                </div>
                <Link
                  to={cluster.href}
                  className={`inline-block mt-4 text-sm font-semibold ${cluster.color} hover:underline`}
                >
                  Learn more about {cluster.title.toLowerCase()} services
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
