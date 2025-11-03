import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function EastportPage() {
  const location = getLocationBySlug('eastport');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
