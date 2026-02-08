import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';
import NotFoundPage from '@/pages/NotFoundPage';

export default function MayoPage() {
  const location = getLocationBySlug('mayo');

  if (!location) {
    return <NotFoundPage />;
  }

  return <LocationTemplate location={location} />;
}
