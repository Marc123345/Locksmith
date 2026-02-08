import { getServiceBySlug } from '@/data/services';
import { lockRepairPricing } from '@/data/pricing';
import ServiceTemplate from './ServiceTemplate';
import NotFoundPage from '@/pages/NotFoundPage';

export default function LockRepairPage() {
  const service = getServiceBySlug('lock-repair');

  if (!service) {
    return <NotFoundPage />;
  }

  return <ServiceTemplate service={service} pricing={lockRepairPricing} />;
}
