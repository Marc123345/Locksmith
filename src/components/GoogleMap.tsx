import React from 'react';
import { CONTACT } from '@/utils/contact';

const MapComponent = () => {
  const handleMapClick = () => {
    window.open(CONTACT.MAPS_LINK, '_blank');
  };

  return (
    <div className="w-full h-full relative">
      {/* Primary: Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.9069273455244!2d-76.48348684836126!3d38.97269447946033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f7debf1d014d%3A0x9fa6fee227462373!2sA%20Secure%20Annapolis%20Locksmith!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="A Secure Annapolis Locksmith Location"
      />
      
      {/* Interactive overlay */}
      <div 
        className="absolute inset-0 cursor-pointer bg-transparent"
        onClick={handleMapClick}
        role="button"
        aria-label="Open in Google Maps"
      />
    </div>
  );
};

export default React.memo(MapComponent);