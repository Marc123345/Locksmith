import React, { useEffect, useRef } from 'react';

interface ContactFormProps {
  pageSource?: string;
  serviceType?: string;
  locationPreference?: string;
}

const ContactForm = ({ pageSource, serviceType, locationPreference }: ContactFormProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current || !containerRef.current) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/253124306063446';
    script.async = true;

    containerRef.current.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      if (containerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full" />;
};

export default React.memo(ContactForm);