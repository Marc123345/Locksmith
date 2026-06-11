'use client';

import { Phone, Shield, Clock, Star, CircleCheck as CheckCircle2, MapPin, Hop as Home, Building2, Car, TriangleAlert as AlertTriangle, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import type { PPCCity } from '@/data/ppc-cities';

const PHONE = '4108496069';
const PHONE_DISPLAY = '410-849-6069';

function CallButton({ size = 'large', className = '' }: { size?: 'large' | 'medium' | 'small'; className?: string }) {
  const sizes = {
    large: 'h-16 md:h-20 px-8 md:px-12 text-xl md:text-2xl',
    medium: 'h-14 px-8 text-lg',
    small: 'h-12 px-6 text-base',
  };

  return (
    <a
      href={`tel:${PHONE}`}
      className={`inline-flex items-center justify-center font-bold rounded-full bg-green-600 hover:bg-green-700 text-white transition-all shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 hover:scale-[1.02] active:scale-[0.98] ${sizes[size]} ${className}`}
    >
      <Phone className="mr-3 h-6 w-6 fill-current" />
      {PHONE_DISPLAY}
    </a>
  );
}

function TrustBadge({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-white font-bold text-sm leading-tight">{title}</p>
        <p className="text-white/70 text-xs">{subtitle}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-800/50 transition-colors"
      >
        <span className="font-semibold text-white pr-4">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-300 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function PPCLandingPage({ city }: { city: PPCCity }) {
  const faqs = [
    {
      question: `How fast can a locksmith get to me in ${city.name}?`,
      answer: `We dispatch the nearest available technician to your location in ${city.name}. Our mobile locksmith vans are stocked with everything needed to resolve your issue on the spot — no second trips.`,
    },
    {
      question: 'How much does a locksmith cost?',
      answer: 'We provide upfront pricing before any work begins. You will know exactly what it costs before we start — no hidden fees, no surprise charges. Call us for a free estimate.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes. We are a fully licensed Maryland locksmith, bonded, and insured. All technicians undergo background checks and carry proper credentials.',
    },
    {
      question: 'Do you charge extra for emergency or after-hours service?',
      answer: 'We are transparent about all pricing. While emergency rates may apply outside regular business hours, you will always know the cost before we begin any work.',
    },
    {
      question: 'Can you make car keys on the spot?',
      answer: 'Yes. Our mobile units carry the equipment needed to cut and program most car keys, transponder keys, and key fobs on-site. No towing to a dealer required.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80"
            alt="Professional locksmith service"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900" />
        </div>

        <div className="relative z-10 px-4 pt-8 pb-16 md:pt-12 md:pb-24">
          {/* Logo / Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-sm font-semibold text-white">A Secure Annapolis Locksmith</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/40 mb-6">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
              <span className="text-amber-200 text-sm font-semibold">Locked Out? We Can Help Right Now</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              {city.heroHeadline}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              {city.heroSubheadline}
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 mb-12">
              <CallButton size="large" />
              <p className="text-slate-400 text-sm">
                Free estimates &middot; No obligation &middot; Available now
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
              <TrustBadge icon={Shield} title="Licensed & Insured" subtitle="MD Certified" />
              <TrustBadge icon={Clock} title="24/7 Emergency" subtitle="Fast Dispatch" />
              <TrustBadge icon={CheckCircle2} title="Same-Day Service" subtitle="No Extra Fees" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Full-Service Locksmith in {city.name}</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From emergency lockouts to complete security upgrades — we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Residential */}
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80"
                  alt="Residential locksmith services - home lock installation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              </div>
              <div className="relative p-8 min-h-[280px] flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Home className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Residential</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> House & apartment lockouts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Lock changes & rekeying</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Deadbolt installation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Smart lock upgrades</li>
                </ul>
              </div>
            </div>

            {/* Commercial */}
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Commercial locksmith services - office security"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              </div>
              <div className="relative p-8 min-h-[280px] flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Commercial</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Office & storefront lockouts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Master key systems</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> High-security locks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Access control</li>
                </ul>
              </div>
            </div>

            {/* Automotive */}
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0220?w=800&q=80"
                  alt="Automotive locksmith services - car key replacement"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              </div>
              <div className="relative p-8 min-h-[280px] flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Car className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Automotive</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Car lockouts — no tow needed</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Key cutting & programming</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Transponder & key fob</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Ignition repair</li>
                </ul>
              </div>
            </div>

            {/* Emergency */}
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1590856029620-81a4e042b0c4?w=800&q=80"
                  alt="Emergency lockout service - fast response"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              </div>
              <div className="relative p-8 min-h-[280px] flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-amber-500/30 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Emergency Lockouts</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Available 24/7 for emergencies</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Fast dispatch to {city.name}</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> No damage to your locks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> Upfront pricing before we start</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <CallButton size="medium" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why {city.name} Trusts Us</h2>
            <p className="text-slate-400 text-lg">Over 15 years serving Anne Arundel County homeowners and businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="h-16 w-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Upfront Pricing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                You know the cost before we start. No hidden fees, no bait-and-switch, no surprise charges on your bill.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="h-16 w-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-5">
                <Clock className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Arrival</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Mobile locksmith vans dispatched from Annapolis. We come to you fully equipped — one trip, problem solved.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="h-16 w-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-5">
                <Shield className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">3-Month Guarantee</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every lock change and installation comes with a 3-month workmanship warranty. If something is not right, we fix it free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 px-4 bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white ml-2">4.9</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">100+ Verified Reviews</h2>
            <p className="text-slate-400 text-lg">Trusted by homeowners and businesses across {city.county}.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                &ldquo;Called at 9pm locked out of my house. They were there in under 30 minutes and had me inside in no time. Very professional and the price was exactly what they quoted on the phone.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">DH</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Desiree H.</p>
                  <p className="text-slate-500 text-xs">Google Review</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                &ldquo;Had all the locks rekeyed on our new home in Annapolis. Fast, friendly, and significantly cheaper than the other quotes we got. Highly recommend for anyone moving into a new place.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">AP</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Alexandra P.</p>
                  <p className="text-slate-500 text-xs">Google Review</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                &ldquo;Locked my keys in the car at the mall. Called and they were there before I even finished my coffee. No damage to the car and very reasonable price. Will definitely use again.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">RM</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">RM Moreno</p>
                  <p className="text-slate-500 text-xs">Thumbtack Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving {city.name} & {city.county}</h2>
            <p className="text-slate-400 text-lg">{city.serviceAreaDescription}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {city.neighborhoods.map((n) => (
              <span key={n} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300">
                <MapPin className="h-3 w-3 text-green-400" />
                {n}
              </span>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.9069273455244!2d-76.48348684836126!3d38.97269447946033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f7debf1d014d%3A0x9fa6fee227462373!2sA%20Secure%20Annapolis%20Locksmith!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`A Secure Annapolis Locksmith serving ${city.name}`}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 bg-slate-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Quick answers for {city.name} residents.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Locksmith in {city.name}?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Do not wait — call now for fast, professional locksmith service. Licensed, insured, and trusted by your neighbors.
          </p>
          <CallButton size="large" />
          <p className="text-slate-500 text-sm mt-4">
            A Secure Annapolis Locksmith &middot; 222 Severn Ave, Annapolis, MD 21403
          </p>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700 p-3 safe-area-inset-bottom">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-3 w-full h-14 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg shadow-lg shadow-green-600/30 active:scale-[0.98] transition-all"
        >
          <Phone className="h-5 w-5 fill-current" />
          Call {PHONE_DISPLAY} Now
        </a>
      </div>

      {/* Bottom padding for sticky bar on mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
