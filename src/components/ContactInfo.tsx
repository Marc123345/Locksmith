import { CONTACT, formatPhoneNumber, obfuscateEmail } from '@/utils/contact';

export const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Contact</h3>
        <a 
          href={`tel:${CONTACT.PHONE}`}
          className="block hover:text-primary transition-colors"
        >
          {CONTACT.PHONE_DISPLAY}
        </a>
        <a 
          href={`mailto:${CONTACT.EMAIL}`}
          className="block hover:text-primary transition-colors"
        >
          {obfuscateEmail(CONTACT.EMAIL)}
        </a>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Address</h3>
        <a 
          href={CONTACT.MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-primary transition-colors"
        >
          {CONTACT.ADDRESS}
        </a>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Hours</h3>
        <ul className="space-y-1">
          {CONTACT.HOURS.map(({ day, hours }) => (
            <li key={day} className="flex justify-between text-sm">
              <span>{day}</span>
              <span className="text-muted-foreground">{hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};