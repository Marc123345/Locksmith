import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';

export default function CapeStClairePage() {
  const location = getLocationBySlug('cape-st-claire');

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationTemplate location={location} />;
}
