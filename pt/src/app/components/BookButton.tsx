"use client";
import { useEffect, useState } from 'react';

export default function AppointmentButton() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = "https://calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = "https://calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      console.log('Calendly script loaded');
      setIsCalendlyLoaded(true);
    };
    script.onerror = () => console.error('Failed to load Calendly script');
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const openCalendlyPopup = () => {
    if (isCalendlyLoaded && window.Calendly) {
      console.log("Button clicked - Calendly is loaded");
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/wouterkvandenbossche' });
      return false; // Prevent default behavior
    } else {
      console.error("Calendly script is not loaded or not available");
      return false; // Prevent default behavior
    }
  };

  return (
    <button
      type="button"
      onClick={openCalendlyPopup}
      className="bg-red-500 hover:bg-red-600 text-white px-6 py-1 mt-8 rounded-lg"
    >
      Maak afspraak
    </button>
  );
}
