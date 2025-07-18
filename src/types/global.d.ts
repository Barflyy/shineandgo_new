// Déclaration TypeScript globale pour Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initBadgeWidget: (options: any) => void;
    };
  }
}

export {};