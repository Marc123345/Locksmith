import React, { useEffect } from 'react';

const ContactForm = () => {
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
    <div className="w-full overflow-visible">
      <iframe
        id="JotFormIFrame-253124306063446"
        title="Contact Form"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/253124306063446"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          height: '800px',
          border: 'none',
        }}
      />
    </div>
  );
};

export default React.memo(ContactForm);
