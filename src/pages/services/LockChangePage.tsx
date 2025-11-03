import { getServiceBySlug } from '@/data/services';
import { standardPricing } from '@/data/pricing';
import ServiceTemplate from './ServiceTemplate';

export default function LockChangePage() {
  const service = getServiceBySlug('lock-change');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceTemplate service={service} pricing={standardPricing} />;
}
