import { getServiceBySlug } from '@/data/services';
import { lockRepairPricing } from '@/data/pricing';
import ServiceTemplate from './ServiceTemplate';

export default function LockRepairPage() {
  const service = getServiceBySlug('lock-repair');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceTemplate service={service} pricing={lockRepairPricing} />;
}
