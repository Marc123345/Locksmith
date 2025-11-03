import { getServiceBySlug } from '@/data/services';
import { standardPricing } from '@/data/pricing';
import ServiceTemplate from './ServiceTemplate';

export default function LockRekeyPage() {
  const service = getServiceBySlug('lock-rekey');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceTemplate service={service} pricing={standardPricing} />;
}
