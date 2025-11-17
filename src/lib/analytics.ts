// Tracking GA4 utilities
export const track = (name: string, params?: Record<string, any>) => {
  // @ts-ignore
  window.gtag?.('event', name, params);
};

export const trackCTA = (label: string, location: string) => {
  track('cta_click', { 
    label, 
    location,
    value: 1
  });
};

export const trackWhatsApp = (location: string) => {
  track('whatsapp_click', { 
    location,
    value: 1
  });
};

export const trackCall = (location: string) => {
  track('call_click', { 
    location,
    value: 1
  });
};

export const trackCalendly = (location: string) => {
  track('calendly_open', { 
    location,
    value: 1
  });
};

export const trackLead = (source: string) => {
  track('generate_lead', { 
    source,
    value: 10
  });
}; 