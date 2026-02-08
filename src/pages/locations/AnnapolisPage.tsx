import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';
import NotFoundPage from '@/pages/NotFoundPage';

export default function AnnapolisPage() {
  const location = getLocationBySlug('annapolis');

  if (!location) {
    return <NotFoundPage />;
  }

  return <LocationTemplate location={location} />;
}
