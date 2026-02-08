'use client';

import { Star, ExternalLink } from 'lucide-react';
import { allReviews, GOOGLE_BUSINESS_URL, THUMBTACK_URL } from '@/data/reviews';

interface ReviewsSectionProps {
  locationName: string;
  maxReviews?: number;
}

export default function ReviewsSection({ locationName, maxReviews = 6 }: ReviewsSectionProps) {
  const reviews = allReviews.slice(0, maxReviews);

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-lg font-bold text-gray-900">5.0</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What {locationName} Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from verified customers on Google and Thumbtack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className={`ml-auto text-xs font-medium px-2.5 py-0.5 rounded-full ${
                  review.source === 'Google' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                }`}>
                  {review.source}
                </span>
              </div>
              <blockquote className="text-gray-600 text-sm leading-relaxed mb-4">
                &ldquo;{review.testimonial}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
                {review.service && (
                  <span className="text-xs text-gray-400">{review.service}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-5 py-3 text-sm font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-colors shadow-sm"
          >
            See all Google reviews
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={THUMBTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-5 py-3 text-sm font-semibold text-gray-700 hover:border-green-300 hover:text-green-700 transition-colors shadow-sm"
          >
            See all Thumbtack reviews
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
