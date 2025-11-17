'use client';

import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Analytics() {
  return (
    <>
      {/* Vercel Analytics - Page views, clicks, and custom events */}
      <VercelAnalytics />
      
      {/* Vercel Speed Insights - Real user performance metrics */}
      <SpeedInsights />

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
          gtag('config', 'AW-16970215254');
          gtag('config', 'G-9MZK3M3Z7T', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'business_type',
              'custom_parameter_2': 'service_area'
            }
          });

          // Configuration pour le business local
          gtag('config', 'G-9MZK3M3Z7T', {
            business_type: 'car_wash',
            service_area: 'herve_verviers_dison_spa',
            custom_map: {
              'custom_parameter_3': 'service_type',
              'custom_parameter_4': 'city'
            }
          });

          // Track WhatsApp clicks
          document.addEventListener('click', function(e) {
            if (e.target.closest('a[href*="wa.me"]')) {
              gtag('event', 'click', {
                event_category: 'engagement',
                event_label: 'whatsapp_contact',
                value: 1,
                custom_parameter_1: 'whatsapp',
                custom_parameter_2: 'contact'
              });
            }
          });

          // Track phone calls
          document.addEventListener('click', function(e) {
            if (e.target.closest('a[href^="tel:"]')) {
              gtag('event', 'click', {
                event_category: 'engagement',
                event_label: 'phone_call',
                value: 1,
                custom_parameter_1: 'phone',
                custom_parameter_2: 'contact'
              });
            }
          });

          // Track devis form interactions
          document.addEventListener('click', function(e) {
            if (e.target.closest('a[href*="#devis"]')) {
              gtag('event', 'click', {
                event_category: 'conversion',
                event_label: 'devis_request',
                value: 1,
                custom_parameter_1: 'devis',
                custom_parameter_2: 'lead'
              });
            }
          });

          // Track transformation section views
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                gtag('event', 'view_item', {
                  event_category: 'engagement',
                  event_label: 'transformations_section',
                  value: 1,
                  custom_parameter_1: 'transformations',
                  custom_parameter_2: 'content'
                });
                observer.unobserve(entry.target);
              }
            });
          });

          // Observe transformation section
          const transformationSection = document.querySelector('#transformations');
          if (transformationSection) {
            observer.observe(transformationSection);
          }

          // Track scroll depth
          let maxScroll = 0;
          window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll) {
              maxScroll = scrollPercent;
              if (maxScroll % 25 === 0) { // Track every 25%
                gtag('event', 'scroll', {
                  event_category: 'engagement',
                  event_label: 'scroll_depth_' + maxScroll,
                  value: maxScroll,
                  custom_parameter_1: 'scroll_depth',
                  custom_parameter_2: maxScroll.toString()
                });
              }
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
          })(window,document,'script','dataLayer','GTM-WL8K9XZ');
        `}
      </Script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WL8K9XZ"
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
          fbq('init', '1234567890123456');
          fbq('track', 'PageView');

          // Track custom events for nettoyage voiture premium business
          document.addEventListener('click', function(e) {
            if (e.target.closest('a[href*="wa.me"]')) {
              fbq('track', 'Lead', {
                content_name: 'WhatsApp Contact',
                content_category: 'Contact',
                value: 1.00,
                currency: 'EUR'
              });
            }
          });

          document.addEventListener('click', function(e) {
            if (e.target.closest('a[href^="tel:"]')) {
              fbq('track', 'Lead', {
                content_name: 'Phone Call',
                content_category: 'Contact',
                value: 1.00,
                currency: 'EUR'
              });
            }
          });

          document.addEventListener('click', function(e) {
            if (e.target.closest('a[href*="#devis"]')) {
              fbq('track', 'Lead', {
                content_name: 'Devis Request',
                content_category: 'Lead',
                value: 5.00,
                currency: 'EUR'
              });
            }
          });
        `}
      </Script>
    </>
  );
} 