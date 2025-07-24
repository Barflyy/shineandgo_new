// Déclaration TypeScript globale pour Calendly et GA4
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initBadgeWidget: (options: any) => void;
    };
    gtag?: (
      command: 'event',
      eventName: string,
      eventParameters: {
        event_category: string;
        event_label: string;
        value?: number;
      }
    ) => void;
  }
}

export {};