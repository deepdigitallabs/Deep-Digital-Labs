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
        logo: 'https://deepdigitallabs.com/logo.png',
        description: 'Engineering scalable SaaS, web platforms, and mobile apps for global brands. Built in Pune, India, deployed worldwide.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Pune',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411001',
          addressCountry: 'IN'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-091751-52244',
          contactType: 'Customer Support & Sales',
          email: 'deepdigitallabs@gmail.com',
          availableLanguage: ['English', 'Hindi', 'Marathi']
        },
        sameAs: [
          'https://www.instagram.com/deepdigitallabs/',
          'https://github.com/deepdigitallabs'
        ]
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://deepdigitallabs.com/#localbusiness',
        name: 'Deep Digital Labs Pune HQ',
        image: 'https://deepdigitallabs.com/office.jpg',
        telephone: '+91-091751-52244',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Pune',
          addressLocality: 'Pune',
          addressRegion: 'MH',
          postalCode: '411001',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 18.5596,
          longitude: 73.7797
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
          ],
          opens: '09:00',
          closes: '22:00'
        }
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
