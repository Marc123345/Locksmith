import { getServiceBySlug } from '@/data/services';
import { emergencyLockoutPricing } from '@/data/pricing';
import ServiceTemplate from './ServiceTemplate';

export default function EmergencyLockoutPage() {
  const service = getServiceBySlug('emergency-lockout');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceTemplate service={service} pricing={emergencyLockoutPricing} />;
}
