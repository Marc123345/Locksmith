import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function MayoPage() {
  const location = getLocationBySlug('mayo');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
