import { DollarSign } from 'lucide-react';
import { Card } from './ui/card';
import type { PricingItem } from '../data/pricing';

interface PricingSectionProps {
  pricing: PricingItem[];
  showDiscount?: boolean;
}

export default function PricingSection({ pricing, showDiscount = true }: PricingSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <DollarSign className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Clear, upfront pricing with no hidden fees
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pricing.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.service}
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">
                {item.price}
              </p>
              {item.description && (
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              )}
            </Card>
          ))}
        </div>

        {showDiscount && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-white mb-2">
              Special Offer: Save 10% When You Book Online!
            </p>
            <p className="text-blue-100">
              Use our contact form to schedule service and receive an instant discount
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
