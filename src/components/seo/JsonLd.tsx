import React from 'react';

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://deepdigitallabs.com/#organization',
        name: 'Deep Digital Labs',
        url: 'https://deepdigitallabs.com',
        logo: 'https://deepdigitallabs.com/icon.png',
        image: 'https://deepdigitallabs.com/og-image.png',
        description: 'Deep Digital Labs is a website and software development company in Pune, building fast, modern websites, custom ERPs, and mobile apps for growing businesses.',
        founder: {
          '@type': 'Person',
          name: 'Deepak Dukare',
          jobTitle: 'Founder & Lead Software Engineer',
          url: 'https://deepdigitallabs.com/about'
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Pune City',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411001',
          addressCountry: 'IN'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-77560-63128',
          contactType: 'Customer Support & Sales',
          email: 'deepdigitallabs@gmail.com',
          availableLanguage: ['English', 'Hindi', 'Marathi']
        },
        sameAs: [
          'https://www.instagram.com/deepdigitallabs/',
          'https://www.linkedin.com/company/deepdigitallabs/',
          'https://github.com/deepdigitallabs'
        ]
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://deepdigitallabs.com/#localbusiness',
        name: 'Deep Digital Labs - Website & Software Development Company in Pune',
        image: 'https://deepdigitallabs.com/og-image.png',
        telephone: '+91-77560-63128',
        email: 'deepdigitallabs@gmail.com',
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'UPI, Net Banking, Credit Card, Bank Transfer',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Pune City',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411001',
          addressCountry: 'IN'
        },
        areaServed: [
          'Pune',
          'Kothrud',
          'Baner',
          'Hinjewadi',
          'Wakad',
          'Pimpri-Chinchwad',
          'Viman Nagar',
          'Kharadi',
          'Hadapsar',
          'Shivajinagar',
          'Maharashtra'
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 18.5204,
          longitude: 73.8567
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '18',
          bestRating: '5',
          worstRating: '1'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web & Software Development Services in Pune',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Website Development & Web Portals in Pune',
                description: 'Custom, high-speed business websites with 100% code ownership, 2-3 weeks delivery, and direct developer access.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Business Software & SaaS ERPs',
                description: 'Tailored billing software, inventory systems, CRMs, and dispatch portals for Pune and Indian businesses.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cross-Platform Mobile App Development',
                description: 'Flutter and React Native iOS and Android mobile applications with offline-first capabilities.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Local Search Optimization (Pune SEO & Google Business Profile)',
                description: 'Technical SEO, Google Business Profile ranking, and high-converting search visibility.'
              }
            }
          ]
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          opens: '09:00',
          closes: '21:00'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://deepdigitallabs.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does Deep Digital Labs differ from generic agencies or WordPress freelancers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We do not build with fragile plugins or generic templates that break over time. Every digital product is engineered using modern, high-performance tech stacks (Next.js, React, Flutter, and PostgreSQL). You receive clean source code, pages that load in under 1 second, and direct communication with Deepak Dukare and senior engineers.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do I own 100% of my source code and infrastructure?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, unconditionally. Upon delivery, you retain complete ownership of all repository code, domain registrations, databases, and deployment pipelines. You own everything with no monthly platform fees to keep your site online.'
            }
          },
          {
            '@type': 'Question',
            name: 'How fast can a business website or custom platform be delivered?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Standard bespoke corporate websites typically launch within 2 to 3 weeks. Custom business software, ERP systems, and mobile applications follow structured milestone sprint releases.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can you integrate WhatsApp lead capture and business automation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. We specialize in connecting websites and forms directly with WhatsApp Business APIs, automated CRM logging, and instant alerts so your sales team never misses a qualified lead.'
            }
          },
          {
            '@type': 'Question',
            name: 'Where are you based and can we meet in Pune?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We are based right here in Pune, Maharashtra. We work with clients across Baner, Hinjewadi, Kothrud, Viman Nagar, Pimpri-Chinchwad, and across Maharashtra through direct WhatsApp, phone calls, and in-person consultations.'
            }
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://deepdigitallabs.com/#website',
        url: 'https://deepdigitallabs.com',
        name: 'Deep Digital Labs',
        publisher: {
          '@id': 'https://deepdigitallabs.com/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://deepdigitallabs.com/case-studies?search={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
