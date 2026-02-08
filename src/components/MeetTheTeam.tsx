import { Shield, Award, MapPin, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Royi',
    role: 'Lead Locksmith & Owner',
    experience: '15+ years in the trade',
    areas: 'Eastport, Bay Ridge, Annapolis',
    specialties: ['Residential lock systems', 'Car lockouts', 'Smart lock installations'],
    bio: 'Royi founded A Secure Annapolis Locksmith in 2010 and has been the go-to locksmith for Annapolis-area homeowners ever since. Customers consistently praise his professionalism, speed, and attention to detail.',
  },
  {
    name: 'Alan',
    role: 'Senior Technician',
    experience: '10+ years in the trade',
    areas: 'Severna Park, Arnold, Cape St. Claire',
    specialties: ['Lock rekeying', 'High-security systems', 'Commercial locks'],
    bio: 'Alan handles complex rekeying jobs and high-security installations across the Broadneck Peninsula. He\'s known for coming back to make sure everything works perfectly -- no shortcuts.',
  },
  {
    name: 'Chris',
    role: 'Automotive Specialist',
    experience: '8+ years in the trade',
    areas: 'Edgewater, Crownsville, Parole',
    specialties: ['Transponder key programming', 'Car key replacement', 'Ignition repair'],
    bio: 'Chris is our go-to for car key emergencies. From transponder programming to key fob replacement, he handles the automotive side with speed and precision.',
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-20 bg-white" aria-label="Meet your locksmiths">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Meet Your Locksmiths
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real technicians with real experience -- not a faceless call center.
            Every tech is background-checked, licensed, and insured in the State of Maryland.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {member.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                {member.bio}
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{member.experience}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{member.areas}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Wrench className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{member.specialties.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-slate-200 mt-3">
                  <Shield className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                    Background-checked & insured
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
