import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function EdgewaterBeachPage() {
  const location = getLocationBySlug('edgewater-beach');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
