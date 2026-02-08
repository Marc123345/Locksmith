import { getServiceBySlug } from '@/data/services';
import { standardPricing } from '@/data/pricing';
import ServiceTemplate from './ServiceTemplate';
import NotFoundPage from '@/views/NotFoundPage';

export default function LockRekeyPage() {
  const service = getServiceBySlug('lock-rekey');

  if (!service) {
    return <NotFoundPage />;
  }

  return <ServiceTemplate service={service} pricing={standardPricing} />;
}
