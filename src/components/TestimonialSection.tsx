import { Star, Quote } from 'lucide-react';
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
  subtitle = 'Trusted by hundreds of satisfied customers in Anne Arundel County'
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
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
