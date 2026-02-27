import { Tag } from 'lucide-react';

export default function SpecialOfferBanner() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-center">
          <Tag className="h-6 w-6 text-white mr-3 flex-shrink-0" />
          <p className="text-lg font-bold text-white">
            Licensed &amp; Insured — Upfront pricing provided before work begins. Call for a free quote!
          </p>
        </div>
      </div>
    </div>
  );
}
