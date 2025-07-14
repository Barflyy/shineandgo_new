"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Import dynamique de CalendlyPopup avec ssr: false
const CalendlyPopup = dynamic(() => import('./CalendlyPopup'), {
  ssr: false
});

const CalendlyPopupClient = () => {
  return <CalendlyPopup />;
};

export default CalendlyPopupClient; 