import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function ParolePage() {
  const location = getLocationBySlug('parole');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
