import { getServiceBySlug } from '@/data/services';
import { carKeyPricing } from '@/data/pricing';
import ServiceTemplate from './ServiceTemplate';
import NotFoundPage from '@/views/NotFoundPage';

export default function CarKeyProgrammingPage() {
  const service = getServiceBySlug('car-key-programming');

  if (!service) {
    return <NotFoundPage />;
  }

  return <ServiceTemplate service={service} pricing={carKeyPricing} />;
}
