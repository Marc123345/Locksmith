import { Shield, Clock, Award, ThumbsUp, MapPin, Users } from 'lucide-react';

const benefits = [
  {
    icon: MapPin,
    title: 'Locally Owned & Operated',
    description: 'Based in Annapolis, serving the community for 15+ years'
  },
  {
    icon: Clock,
    title: 'Same-Day Emergency Service',
    description: 'Local technicians dispatched throughout Anne Arundel County'
  },
  {
    icon: Shield,
    title: 'Licensed, Bonded & Insured',
    description: 'Fully certified and covered for your protection'
  },
  {
    icon: Award,
    title: '15+ Years of Experience',
    description: 'Trusted expertise in all locksmith services'
  },
  {
    icon: ThumbsUp,
    title: 'Transparent Pricing',
    description: 'Clear, upfront rates with no hidden fees'
  },
  {
    icon: Users,
    title: 'Hundreds of 5-Star Reviews',
    description: 'Trusted by customers across Anne Arundel County'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose A Secure Annapolis Locksmith?
          </h2>
          <p className="text-xl text-blue-100">
            Your trusted local locksmith with a commitment to quality and security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
