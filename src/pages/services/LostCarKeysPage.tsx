import { getServiceBySlug } from '@/data/services';
import { carKeyPricing } from '@/data/pricing';
import ServiceTemplate from './ServiceTemplate';
import NotFoundPage from '@/pages/NotFoundPage';

export default function LostCarKeysPage() {
  const service = getServiceBySlug('lost-car-keys');

  if (!service) {
    return <NotFoundPage />;
  }

  return <ServiceTemplate service={service} pricing={carKeyPricing} />;
}
