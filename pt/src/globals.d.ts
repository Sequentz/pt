// src/globals.d.ts

// Extend the Window interface to include Calendly
interface Window {
  Calendly: {
    initPopupWidget: (options: { url: string }) => void;
  };
}
