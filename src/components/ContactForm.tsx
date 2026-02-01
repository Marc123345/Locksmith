import React, { useEffect } from 'react';

interface ContactFormProps {
  pageSource?: string;
  serviceType?: string;
  locationPreference?: string;
}

const ContactForm = ({ pageSource, serviceType, locationPreference }: ContactFormProps = {}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-253124306063446']", "https://form.jotform.com/");
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <iframe
        id="JotFormIFrame-253124306063446"
        title="Royi Locksmith Form"
        onLoad={() => window.parent.scrollTo(0,0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/253124306063446"
        frameBorder="0"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          height: '539px',
          border: 'none'
        }}
        scrolling="no"
      />
    </div>
  );
};

export default React.memo(ContactForm);
