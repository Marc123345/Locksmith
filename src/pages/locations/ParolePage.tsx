import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';
import NotFoundPage from '@/pages/NotFoundPage';

export default function ParolePage() {
  const location = getLocationBySlug('parole');

  if (!location) {
    return <NotFoundPage />;
  }

  return <LocationTemplate location={location} />;
}
