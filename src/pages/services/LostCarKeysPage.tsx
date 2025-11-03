import { getServiceBySlug } from '@/data/services';
import { carKeyPricing } from '@/data/pricing';
import ServiceTemplate from './ServiceTemplate';

export default function LostCarKeysPage() {
  const service = getServiceBySlug('lost-car-keys');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceTemplate service={service} pricing={carKeyPricing} />;
}
