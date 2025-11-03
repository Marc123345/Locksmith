import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function BayRidgePage() {
  const location = getLocationBySlug('bay-ridge');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
