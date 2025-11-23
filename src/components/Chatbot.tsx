import { useEffect, useRef } from 'react';

export const Chatbot = () => {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/019ab103b2af759da4917e3c20560e16c861/embed.js';
    script.async = true;

    document.body.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default Chatbot;
