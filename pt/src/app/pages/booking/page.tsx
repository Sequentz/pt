"use client";
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Personal Training</h1>
      <section>
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/wouterkvandenbossche" 
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </section>
    </div>
  );
}

export default Page;
