import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function SevernaParkPage() {
  const location = getLocationBySlug('severna-park');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
