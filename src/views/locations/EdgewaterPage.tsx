import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';
import NotFoundPage from '@/views/NotFoundPage';

export default function EdgewaterPage() {
  const location = getLocationBySlug('edgewater');

  if (!location) {
    return <NotFoundPage />;
  }

  return <LocationTemplate location={location} />;
}
