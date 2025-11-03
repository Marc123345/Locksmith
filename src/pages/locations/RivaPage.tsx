import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function RivaPage() {
  const location = getLocationBySlug('riva');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
