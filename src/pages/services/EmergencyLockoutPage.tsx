import { getServiceBySlug } from '@/data/services';
import { emergencyLockoutPricing } from '@/data/pricing';
import ServiceTemplate from './ServiceTemplate';
import NotFoundPage from '@/pages/NotFoundPage';

export default function EmergencyLockoutPage() {
  const service = getServiceBySlug('emergency-lockout');

  if (!service) {
    return <NotFoundPage />;
  }

  return <ServiceTemplate service={service} pricing={emergencyLockoutPricing} />;
}
