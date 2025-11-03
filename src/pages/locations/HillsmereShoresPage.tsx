import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function HillsmereShoresPage() {
  const location = getLocationBySlug('hillsmere-shores');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
