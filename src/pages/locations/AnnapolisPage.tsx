import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function AnnapolisPage() {
  const location = getLocationBySlug('annapolis');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
