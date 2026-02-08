import { Shield, FileCheck, BadgeCheck, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LicensingSection() {
  return (
    <section className="py-16 bg-white border-y border-slate-200" aria-label="Maryland licensing and insurance credentials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Maryland Licensed & Insured Locksmith
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                A Secure Annapolis Locksmith is a licensed locksmith operating under Maryland law.
                We are fully bonded and carry general liability insurance, protecting you and your
                property during every service call. All our technicians are background-checked and
                maintain proper credentials as required by the State of Maryland.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Maryland requires locksmiths to be registered with the Department of Labor. This means
                every job we perform is backed by state oversight, giving you peace of mind that your
                home, business, or vehicle is in qualified hands.
              </p>
            </div>

            <div className="w-full md:w-80 flex-shrink-0">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">State of Maryland</p>
                    <p className="text-xs text-slate-500">Registered Locksmith</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Fully Insured</p>
                    <p className="text-xs text-slate-500">General liability coverage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Bonded</p>
                    <p className="text-xs text-slate-500">Financial protection for clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Locally Owned Since 2010</p>
                    <p className="text-xs text-slate-500">222 Severn Ave, Annapolis, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
