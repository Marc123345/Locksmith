import { MapPin, Navigation } from 'lucide-react';
import { Card } from './ui/card';

interface DirectionsSectionProps {
  fromLocation: string;
  directions: string[];
  distance: string;
}

export default function DirectionsSection({
  fromLocation,
  directions,
  distance
}: DirectionsSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <Navigation className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Directions from {fromLocation}
          </h2>
          <p className="text-xl text-gray-600">
            Only {distance} from {fromLocation}
          </p>
        </div>

        <Card className="p-8">
          <div className="space-y-4">
            {directions.map((direction, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 pt-1">
                  {direction}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  A Secure Annapolis Locksmith
                </p>
                <p className="text-gray-700">
                  222 Severn Ave Ste 1 Building 7-6A<br />
                  Annapolis, MD 21403
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
