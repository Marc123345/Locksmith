import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function BroadneckPage() {
  const location = getLocationBySlug('broadneck');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
