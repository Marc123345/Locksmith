import { AlertTriangle, Phone, ShieldCheck, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/utils/contact';

const steps = [
  {
    number: '1',
    title: 'Stay calm and check all entry points',
    description: 'Try all doors, windows, and garage entries. Check if a family member or neighbor has a spare key.',
  },
  {
    number: '2',
    title: 'Do NOT force the lock or break a window',
    description: 'Forcing entry risks damaging your door, frame, or lock -- leading to costly repairs on top of the lockout.',
  },
  {
    number: '3',
    title: 'Call us with your address and lock type',
    description: 'Have your address ready and note what type of lock it is (deadbolt, knob, smart lock). This helps us bring the right tools.',
  },
  {
    number: '4',
    title: 'We arrive in ~20 minutes and get you inside',
    description: 'Our licensed tech opens your door without damage, verifies your identity, and you\'re back in. Typical visit: 15--30 minutes.',
  },
];

const doNots = [
  'Try to pick the lock with DIY tools',
  'Break a window (expensive and unsafe)',
  'Call an unlicensed "locksmith" from a random ad',
  'Leave your property unattended while locked out',
];

export default function LockoutGuide() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white border-t-4 border-red-500" aria-label="Emergency lockout guide">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Locked Out Right Now?
              </h2>
              <p className="text-slate-600 text-lg">Here's exactly what to do -- and what NOT to do.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Follow these steps:
              </h3>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{step.title}</p>
                      <p className="text-slate-600 text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-500" />
                Do NOT:
              </h3>
              <ul className="space-y-3 mb-8">
                {doNots.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                  <p className="font-bold text-slate-900">What a typical visit looks like:</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-400" />
                    Arrival: ~20 minutes from your call
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-400" />
                    Time on-site: 15--30 minutes
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-slate-400" />
                    ID verification before entry
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-slate-400" />
                    No damage to your lock or door
                  </li>
                </ul>
                <a
                  href={`tel:${CONTACT.PHONE}`}
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: {CONTACT.PHONE_DISPLAY}
                </a>
                <p className="text-xs text-slate-500 text-center mt-2">
                  Licensed, insured, and bonded. Payment: cash, card, Venmo, Zelle.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
