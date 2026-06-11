'use client';

import Image from 'next/image';
import { Phone, Shield, Clock, BadgeCheck, Star, MapPin, CheckCircle2, Car, Home, Building2, KeyRound } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/utils/contact';
import { testimonials } from '@/data/testimonials';
import type { PpcCity } from '@/data/ppc-cities';

const PHONE_HREF = `tel:${CONTACT.PHONE}`;

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

function CallButton({ label, className = '' }: { label?: string; className?: string }) {
  return (
    <Button asChild size="xl" className={`gap-3 ${className}`}>
      <a href={PHONE_HREF} aria-label={`Call A Secure Annapolis Locksmith at ${CONTACT.PHONE_DISPLAY}`}>
        <Phone className="h-5 w-5" />
        {label ?? `Call ${CONTACT.PHONE_DISPLAY}`}
      </a>
    </Button>
  );
}

const services = [
  {
    title: 'Emergency Lockouts',
    icon: KeyRound,
    image: 'https://ik.imagekit.io/qcvroy8xpd/image-gen%20(3)_B7OOO72hK.jpg?tr=f-auto,q-auto',
    alt: 'Locksmith helping a customer during an emergency home lockout',
    items: ['Home & apartment lockouts', 'Car lockouts', 'Business lockouts', 'Broken key extraction', 'Same-day response'],
  },
  {
    title: 'Residential',
    icon: Home,
    image: 'https://ik.imagekit.io/qcvroy8xpd/image-gen%20(4)_iYsRLa_HJp.jpg?tr=f-auto,q-auto',
    alt: 'Professional locksmith installing a new deadbolt lock on a home door',
    items: ['Lock installation & repair', 'Lock rekeying', 'Smart locks & keyless entry', 'Security assessments', 'Mailbox & cabinet locks'],
  },
  {
    title: 'Automotive',
    icon: Car,
    image: 'https://ik.imagekit.io/qcvroy8xpd/image-gen%20(5)_KvdECyJQ5g.jpg?tr=f-auto,q-auto',
    alt: 'Automotive locksmith programming a replacement car key fob',
    items: ['Lost car key replacement', 'Key fob programming', 'Transponder keys', 'Ignition repair', 'Broken key extraction'],
  },
  {
    title: 'Commercial',
    icon: Building2,
    image: 'https://ik.imagekit.io/qcvroy8xpd/image-gen%20(6)_54ouVneOuu.jpg?tr=f-auto,q-auto',
    alt: 'Commercial locksmith servicing a high-security lock for a local business',
    items: ['Master key systems', 'High-security locks', 'Panic bars & exit devices', 'Lock maintenance', 'Office rekeying'],
  },
];

const whyUs = [
  { icon: BadgeCheck, title: 'Quoted Price Is What You Pay', text: 'Upfront pricing before any work begins. No hidden fees, no surprises at the door.' },
  { icon: Clock, title: 'Fast Local Response', text: 'We are based in Annapolis, not a national call center. Same-day service for emergencies.' },
  { icon: Shield, title: 'Licensed & Insured', text: 'Fully licensed, bonded, and insured Maryland locksmith. Every job backed by a 3-month workmanship guarantee.' },
  { icon: Star, title: '4.9 Rating, 100+ Reviews', text: 'Verified reviews across Google and Thumbtack from your neighbors.' },
];

const faqs = [
  {
    q: 'How fast can you get to me?',
    a: 'For emergency lockouts in our service area we offer same-day response, and in most cases a technician is on the way shortly after your call. Call now and we will give you an accurate arrival time.',
  },
  {
    q: 'How much does a locksmith cost?',
    a: 'Every job is quoted upfront before work begins, and the price you are quoted is the price you pay. Call us with your situation and we will give you a clear estimate over the phone.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. We are a fully licensed, bonded, and insured Maryland locksmith, and our technicians are professionally trained.',
  },
  {
    q: 'Can you make a new car key if I lost mine?',
    a: 'Yes. We cut and program replacement keys and fobs for most makes and models on-site, including transponder keys, so you avoid an expensive dealership visit.',
  },
  {
    q: 'Do you damage the lock to open my door?',
    a: 'In almost all cases, no. We use professional non-destructive entry techniques first, so your lock and door stay intact.',
  },
];

interface PpcLandingPageProps {
  city: PpcCity;
}

export default function PpcLandingPage({ city }: PpcLandingPageProps) {
  const cityTestimonials = testimonials
    .filter((t) => t.locationTag === city.testimonialTag)
    .slice(0, 3);
  const shownTestimonials = cityTestimonials.length >= 3 ? cityTestimonials : testimonials.slice(0, 3);

  return (
    <div className="bg-white text-slate-900">
      {/* ===== Hero ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10 pb-28 md:pb-16">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://ik.imagekit.io/qcvroy8xpd/b7d05ff9-8ea5-4fbd-be55-91559f1ba0ef_vPmkbx7Fe.jpeg?tr=f-auto,q-auto"
            alt={`Professional locksmith working on a lock in ${city.name}, MD`}
            fill
            sizes="100vw"
            className="object-cover opacity-40 select-none scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/40 to-white" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto text-center">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-md mb-8">
              <div className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700">Rated 4.9/5 by 100+ customers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] mb-6">
              24/7 Emergency <span className="text-primary italic font-serif font-medium">Locksmith</span>
              <br /> in {city.name}, MD
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Locked out? Lost your keys? Your trusted local locksmith serving {city.area}. Upfront pricing and fast, same-day help — guaranteed.
            </p>

            <div className="flex flex-col items-center gap-4">
              <CallButton className="text-lg md:text-xl h-16 px-12 shadow-2xl" />
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
                <span className="inline-flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" /> Licensed &amp; Insured</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> Same-Day Service</span>
                <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" /> Upfront Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary italic font-serif font-medium">Services</span>
            </h2>
            <p className="text-slate-600">Complete residential, commercial, and automotive locksmith services in {city.name}.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="relative h-44">
                  <Image src={s.image} alt={s.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <s.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-bold">{s.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={PHONE_HREF} className="mt-auto text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1.5">
                    <Phone className="h-4 w-4" /> {CONTACT.PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Mid-page CTA banner ===== */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Affordable &amp; Quick Assistance — Guaranteed</h2>
          <p className="text-primary-foreground/85 mb-8 max-w-xl mx-auto">
            One call and a licensed local locksmith is on the way to you in {city.name}.
          </p>
          <Button asChild size="xl" variant="white" className="gap-3 text-lg h-14 px-10">
            <a href={PHONE_HREF} aria-label={`Call A Secure Annapolis Locksmith at ${CONTACT.PHONE_DISPLAY}`}>
              <Phone className="h-5 w-5" />
              Call {CONTACT.PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      </section>

      {/* ===== Why choose us ===== */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-primary italic font-serif font-medium">Choose Us</span>?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-lightest text-primary mb-4">
                  <w.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold mb-2">{w.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Reviews ===== */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary italic font-serif font-medium">Reviews</span>
            </h2>
            <p className="text-slate-600">4.9 rating across 100+ verified reviews on Google and Thumbtack.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {shownTestimonials.map((t) => (
              <figure key={t.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div className="flex mb-3" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <blockquote className="text-sm text-slate-700 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</blockquote>
                <figcaption className="text-sm font-semibold text-slate-900">
                  {t.name} <span className="font-normal text-slate-500">— {t.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Service area ===== */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-lightest text-primary mb-6">
              <MapPin className="h-7 w-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving <span className="text-primary italic font-serif font-medium">{city.name}</span> &amp; Beyond
            </h2>
            <p className="text-slate-600 mb-8">
              We proudly serve {city.area} — including Annapolis, Eastport, Arnold, Severna Park, Edgewater, Cape St. Claire, Crownsville, Riva, Mayo, and the surrounding Anne Arundel County communities.
            </p>
            <CallButton />
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common <span className="text-primary italic font-serif font-medium">Questions</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="text-sm text-slate-600 leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Locked Out in {city.name}? <span className="text-brand-gold italic font-serif font-medium">We&rsquo;re On Our Way.</span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto">
            Licensed, insured, and local. Call now for upfront pricing and same-day service.
          </p>
          <Button asChild size="xl" variant="white" className="gap-3 text-lg md:text-xl h-16 px-12">
            <a href={PHONE_HREF} aria-label={`Call A Secure Annapolis Locksmith at ${CONTACT.PHONE_DISPLAY}`}>
              <Phone className="h-5 w-5" />
              Call {CONTACT.PHONE_DISPLAY}
            </a>
          </Button>
          <p className="mt-12 text-sm text-slate-400">
            A Secure Annapolis Locksmith &middot; {CONTACT.ADDRESS} &middot; Licensed &amp; Insured
          </p>
        </div>
      </section>

      {/* ===== Sticky mobile call bar ===== */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
        <Button asChild size="xl" className="w-full gap-3 text-lg">
          <a href={PHONE_HREF} aria-label={`Call A Secure Annapolis Locksmith at ${CONTACT.PHONE_DISPLAY}`}>
            <Phone className="h-5 w-5" />
            Call Now {CONTACT.PHONE_DISPLAY}
          </a>
        </Button>
      </div>
    </div>
  );
}
