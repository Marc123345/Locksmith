import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function CrownsvillePage() {
  const location = getLocationBySlug('crownsville');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
