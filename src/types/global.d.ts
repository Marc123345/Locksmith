interface Window {
  jotformEmbedHandler?: (selector: string, url: string) => void;
  gtag?: (
    command: 'config' | 'event' | 'set',
    targetId: string,
    config?: Record<string, string | number | boolean | Record<string, unknown>>
  ) => void;
  plausible?: (
    eventName: string,
    options?: {
      props?: Record<string, string | number>;
      callback?: () => void;
    }
  ) => void;
}
