import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';
import NotFoundPage from '@/pages/NotFoundPage';

export default function EastportPage() {
  const location = getLocationBySlug('eastport');

  if (!location) {
    return <NotFoundPage />;
  }

  return <LocationTemplate location={location} />;
}
