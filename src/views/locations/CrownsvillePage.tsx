import { getLocationBySlug } from '@/data/locations';
import LocationTemplate from './LocationTemplate';
import NotFoundPage from '@/views/NotFoundPage';

export default function CrownsvillePage() {
  const location = getLocationBySlug('crownsville');

  if (!location) {
    return <NotFoundPage />;
  }

  return <LocationTemplate location={location} />;
}
