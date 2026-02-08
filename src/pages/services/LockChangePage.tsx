import { getServiceBySlug } from '@/data/services';
import { standardPricing } from '@/data/pricing';
import ServiceTemplate from './ServiceTemplate';
import NotFoundPage from '@/pages/NotFoundPage';

export default function LockChangePage() {
  const service = getServiceBySlug('lock-change');

  if (!service) {
    return <NotFoundPage />;
  }

  return <ServiceTemplate service={service} pricing={standardPricing} />;
}
