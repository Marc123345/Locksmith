import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';
import NotFoundPage from '@/pages/NotFoundPage';

export default function SevernaParkPage() {
  const location = getLocationBySlug('severna-park');

  if (!location) {
    return <NotFoundPage />;
  }

  return <LocationTemplate location={location} />;
}
