import { Phone, MapPin, Clock, Shield, Star } from 'lucide-react';
import { CONTACT } from '@/utils/contact';

export default function BusinessSnapshot() {
  return (
    <section className="bg-slate-900 text-white py-3 border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-400 flex-shrink-0" />
            <span className="text-slate-300">Licensed MD Locksmith</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
            <span className="text-slate-300">4.9 Rating -- 100+ Verified Reviews</span>
          </div>
          <a
            href={`tel:${CONTACT.PHONE}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
            <span className="font-semibold text-white">{CONTACT.PHONE_DISPLAY}</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
            <span className="text-slate-300">Mon--Thu 7AM--8PM | Fri 7AM--2:30PM | Sun 7AM--7PM | 24/7 Emergency</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
            <span className="text-slate-300">Annapolis & Anne Arundel County</span>
          </div>
        </div>
      </div>
    </section>
  );
}
