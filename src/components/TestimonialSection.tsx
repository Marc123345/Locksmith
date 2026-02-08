import { Star, Quote, CheckCircle, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import type { Testimonial } from '../data/testimonials';

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function TestimonialSection({
  testimonials,
  title = 'What Our Clients Say',
  subtitle = 'Trusted by homeowners and businesses across Anne Arundel County'
}: TestimonialSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
            <Quote className="h-6 w-6 text-yellow-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            {subtitle}
          </p>
          <a
            href="https://g.co/kgs/2jLLkKi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            Read all our Google reviews
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                {testimonial.verified && (
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">Verified</span>
                  </div>
                )}
              </div>
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
                {testimonial.date && (
                  <p className="text-sm text-gray-500">
                    {testimonial.date}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://g.co/kgs/2jLLkKi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            View All Google Reviews
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
