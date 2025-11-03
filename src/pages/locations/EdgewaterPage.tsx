import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function EdgewaterPage() {
  const location = getLocationBySlug('edgewater');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
