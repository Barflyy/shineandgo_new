'use client';

import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

export default function Analytics() {
  return (
    <>
      {/* Vercel Analytics */}
      <VercelAnalytics />

      {/* Google Analytics 4 - Balise officielle Google */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9MZK3M3Z7T"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9MZK3M3Z7T');

          // Track WhatsApp clicks
          document.addEventListener('click', function(e) {
            if (e.target.closest('a[href*="wa.me"]')) {
              gtag('event', 'click', {
                event_category: 'engagement',
                event_label: 'whatsapp_contact',
                value: 1
              });
            }
          });

          // Track phone calls
          document.addEventListener('click', function(e) {
            if (e.target.closest('a[href^="tel:"]')) {
              gtag('event', 'click', {
                event_category: 'engagement',
                event_label: 'phone_call',
                value: 1
              });
            }
          });

          // Track devis form interactions
          document.addEventListener('click', function(e) {
            if (e.target.closest('a[href*="#devis"]')) {
              gtag('event', 'click', {
                event_category: 'engagement',
                event_label: 'devis_request',
                value: 1
              });
            }
          });
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </Script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
} 