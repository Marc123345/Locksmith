'use client';

import { useSearchParams } from 'next/navigation';
import { Phone, MessageSquare, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import { CONTACT } from '@/utils/contact';
import { useState, Suspense, useEffect, useCallback } from 'react';
import { googleReviews } from '@/data/reviews';

function detectServiceType(keyword: string): string {
  const lowerKeyword = keyword.toLowerCase();

  if (lowerKeyword.includes('car') ||
      lowerKeyword.includes('auto') ||
      lowerKeyword.includes('key') ||
      lowerKeyword.includes('keys') ||
      lowerKeyword.includes('replacement car keys')) {
    return 'Automotive Locksmith';
  }

  if (lowerKeyword.includes('house') ||
      lowerKeyword.includes('home') ||
      lowerKeyword.includes('apartment') ||
      lowerKeyword.includes('residential')) {
    return 'Residential Locksmith';
  }

  if (lowerKeyword.includes('business') ||
      lowerKeyword.includes('office') ||
      lowerKeyword.includes('commercial')) {
    return 'Commercial Locksmith';
  }

  return 'Emergency Locksmith';
}

function detectLocation(keyword: string): string {
  const lowerKeyword = keyword.toLowerCase();

  if (lowerKeyword.includes('annapolis')) return 'Annapolis';
  if (lowerKeyword.includes('arnold')) return 'Arnold';
  if (lowerKeyword.includes('edgewater')) return 'Edgewater';
  if (lowerKeyword.includes('severna park')) return 'Severna Park';
  if (lowerKeyword.includes('crownsville')) return 'Crownsville';
  if (lowerKeyword.includes('parole')) return 'Parole';
  if (lowerKeyword.includes('eastport')) return 'Eastport';
  if (lowerKeyword.includes('bay ridge')) return 'Bay Ridge';
  if (lowerKeyword.includes('hillsmere')) return 'Hillsmere Shores';
  if (lowerKeyword.includes('cape st claire') || lowerKeyword.includes('cape st. claire')) return 'Cape St. Claire';
  if (lowerKeyword.includes('broadneck')) return 'Broadneck';
  if (lowerKeyword.includes('mayo')) return 'Mayo';
  if (lowerKeyword.includes('riva')) return 'Riva';
  if (lowerKeyword.includes('howard county')) return 'Howard County';
  if (lowerKeyword.includes('catonsville')) return 'Catonsville';
  if (lowerKeyword.includes('baltimore city') || lowerKeyword.includes('baltimore')) return 'Baltimore';

  return 'Your Area';
}

function trackPhoneClick(keyword: string, campaign: string, serviceType: string, location: string) {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', 'phone_click', {
        keyword: keyword,
        campaign: campaign,
        service_type: serviceType,
        location: location,
        event_category: 'engagement',
        event_label: 'Call Button Click'
      });
    }

    if (window.plausible) {
      window.plausible('Phone Click', {
        props: {
          keyword: keyword,
          campaign: campaign,
          service_type: serviceType,
          location: location
        }
      });
    }
  }
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function ReviewCard({ name, testimonial, date }: { name: string; testimonial: string; date: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.length > 140;

  return (
    <div className="flex-shrink-0 w-[300px] md:w-auto md:flex-1">
      <div className="bg-[#191919] rounded-xl p-5 h-full border border-[#191919] hover:-translate-y-1 transition-transform duration-300">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white font-semibold text-sm">
            {name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-semibold text-sm truncate">{name}</div>
            <div className="text-[#8a8a8a] text-xs">{date}</div>
          </div>
          <img
            src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
            alt="Google"
            width={18}
            height={18}
          />
        </div>
        <StarRating />
        <div className={`mt-3 text-[15px] leading-relaxed text-white/90 ${!expanded && isLong ? 'line-clamp-4' : ''}`}>
          {testimonial}
        </div>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-white/50 text-[13px] mt-2 hover:text-white/80 transition-colors"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    </div>
  );
}

function LocksmithCampaignContent() {
  const searchParams = useSearchParams();
  const [showForm, setShowForm] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const rawKeyword = (searchParams.get('keyword') || '').toLowerCase().trim();
  const utmCampaign = searchParams.get('utm_campaign') || '';
  const matchType = searchParams.get('matchtype') || '';

  const serviceType = detectServiceType(rawKeyword);
  const location = detectLocation(rawKeyword);

  const headline = `${serviceType} in ${location}`;

  let subheadline = '';
  if (rawKeyword) {
    subheadline = `Fast, reliable help for "${rawKeyword}"`;
  } else {
    subheadline = `Fast, reliable ${serviceType.toLowerCase()} services when you need them most.`;
  }

  const handlePhoneClick = () => {
    trackPhoneClick(rawKeyword, utmCampaign, serviceType, location);
  };

  const visibleReviews = googleReviews.slice(0, 6);
  const reviewsPerPage = 3;
  const maxIndex = Math.max(0, visibleReviews.length - reviewsPerPage);

  const nextReview = useCallback(() => {
    setReviewIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevReview = useCallback(() => {
    setReviewIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, [nextReview]);

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: '"Inter", sans-serif' }}>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80)' }}
        />
        <div className="absolute inset-0 bg-black/[.58]" />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-4 font-medium">
            Licensed & Insured | Same-Day Service
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Montserrat", sans-serif' }}>
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          <div className="flex flex-col items-center gap-5">
            <a
              href={`tel:${CONTACT.PHONE}`}
              onClick={handlePhoneClick}
              className="inline-flex items-center gap-3 bg-white text-black font-bold text-lg px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-100"
            >
              <Phone className="h-5 w-5" />
              Call {CONTACT.PHONE_DISPLAY}
            </a>

            <p className="text-white/60 text-sm">
              Available Now &middot; 20-30 Minute Response
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#111] border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <Clock className="h-6 w-6 text-white/60 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white">20-30</div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-wide mt-1">Min Response</div>
            </div>
            <div>
              <Shield className="h-6 w-6 text-white/60 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white">Licensed</div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-wide mt-1">& Insured</div>
            </div>
            <div>
              <Star className="h-6 w-6 text-white/60 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white">4.8</div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-wide mt-1">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-black py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: '"Montserrat", sans-serif' }}>
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Emergency Lockout Service',
              'Lock Rekeying & Installation',
              'Car Key Replacement',
              'Smart Lock Installation',
              'Commercial Lock Systems',
              'Automotive Locksmith Services',
            ].map((service) => (
              <div key={service} className="flex items-center gap-3 py-3 px-4 rounded-lg bg-[#111] border border-white/5">
                <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-white/90 text-[15px]">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Toggle */}
      <section className="bg-[#0a0a0a] py-12">
        <div className="max-w-xl mx-auto px-4 text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            {showForm ? 'Hide Contact Form' : 'Prefer to send a message? Click here'}
          </button>

          {showForm && (
            <div className="mt-8 text-left">
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);

                if (window.gtag) {
                  window.gtag('event', 'form_submit', {
                    keyword: rawKeyword,
                    campaign: utmCampaign,
                    service_type: serviceType,
                    location: location,
                    event_category: 'engagement',
                    event_label: 'Contact Form Submission'
                  });
                }

                if (window.plausible) {
                  window.plausible('Form Submit', {
                    props: {
                      keyword: rawKeyword,
                      campaign: utmCampaign,
                      service_type: serviceType,
                      location: location
                    }
                  });
                }

                alert('Thank you! We will contact you shortly at ' + formData.get('phone'));
              }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/60 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-[#191919] border border-white/10 rounded-lg text-white placeholder-white/30 focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-white/60 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-[#191919] border border-white/10 rounded-lg text-white placeholder-white/30 focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm text-white/60 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue={serviceType}
                    className="w-full px-4 py-3 bg-[#191919] border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none transition-all"
                  >
                    <option value="Emergency Locksmith">Emergency Locksmith</option>
                    <option value="Automotive Locksmith">Automotive Locksmith</option>
                    <option value="Residential Locksmith">Residential Locksmith</option>
                    <option value="Commercial Locksmith">Commercial Locksmith</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-white/60 mb-1.5">
                    Brief Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 bg-[#191919] border border-white/10 rounded-lg text-white placeholder-white/30 focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us what you need help with..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-3.5 px-6 rounded-lg transition-all hover:bg-white/90"
                >
                  Send Message
                </button>
                <p className="text-xs text-white/40 text-center">
                  For immediate assistance, call {CONTACT.PHONE_DISPLAY}
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-black py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

            {/* Reviews Summary */}
            <div className="lg:w-[240px] flex-shrink-0 text-center lg:text-left mx-auto lg:mx-0 lg:mt-12">
              <div className="text-2xl font-bold text-white uppercase tracking-wide mb-2">Excellent</div>
              <div className="flex items-center gap-1 justify-center lg:justify-start mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-7 w-7 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-white/70 text-[15px] mb-4">
                Based on <strong className="text-white">47 reviews</strong>
              </div>
              <img
                src="https://cdn.trustindex.io/assets/platform/Google/logo-dark.svg"
                alt="Google"
                width={110}
                height={35}
                className="mx-auto lg:mx-0"
              />
            </div>

            {/* Reviews Carousel */}
            <div className="flex-1 relative min-w-0">
              <h2
                className="text-3xl md:text-[40px] font-medium text-center mb-8 uppercase"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                Our Reviews
              </h2>

              {/* Desktop carousel */}
              <div className="hidden md:block overflow-hidden">
                <div
                  className="flex gap-4 transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${reviewIndex * (100 / reviewsPerPage)}%)` }}
                >
                  {visibleReviews.map((review, i) => (
                    <div key={i} className="flex-shrink-0" style={{ width: `calc((100% - 32px) / 3)` }}>
                      <ReviewCard name={review.name} testimonial={review.testimonial} date={review.date} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile horizontal scroll */}
              <div className="md:hidden flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                {visibleReviews.map((review, i) => (
                  <div key={i} className="snap-start">
                    <ReviewCard name={review.name} testimonial={review.testimonial} date={review.date} />
                  </div>
                ))}
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-center gap-3 mt-6">
                <button
                  onClick={prevReview}
                  aria-label="Previous review"
                  className="w-8 h-8 rounded-full bg-[#191919] border border-white/10 flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
                >
                  <svg className="w-3 h-3 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <div className="flex gap-1.5">
                  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${i === reviewIndex ? 'bg-white/80' : 'bg-white/20'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextReview}
                  aria-label="Next review"
                  className="w-8 h-8 rounded-full bg-[#191919] border border-white/10 flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
                >
                  <svg className="w-3 h-3 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&q=80)' }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Montserrat", sans-serif' }}>
            Need Help Now?
          </h2>
          <p className="text-white/70 mb-8">
            Call us now for fast, professional locksmith service in {location}.
          </p>
          <a
            href={`tel:${CONTACT.PHONE}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-3 bg-white text-black font-bold text-lg px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-100"
          >
            <Phone className="h-5 w-5" />
            Call {CONTACT.PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white/40 text-sm">
            A Secure Annapolis Locksmith &middot; {CONTACT.ADDRESS}
          </p>
        </div>
      </footer>

      {/* Debug Box */}
      <div className="bg-[#111] border-t border-white/10 px-4 py-4 text-xs">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-bold text-white/50 mb-2 uppercase tracking-wide text-[11px]">Debug</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-white/40">
            <span>Keyword: {rawKeyword || '(none)'}</span>
            <span>Campaign: {utmCampaign || '(none)'}</span>
            <span>Match: {matchType || '(none)'}</span>
            <span>Service: {serviceType}</span>
            <span>Location: {location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LocksmithCampaignPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg text-white/60">Loading...</div>
        </div>
      </div>
    }>
      <LocksmithCampaignContent />
    </Suspense>
  );
}
