const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deepdigitallabs.vercel.app';

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Deep Digital Labs',
        url: siteUrl,
        logo: `${siteUrl}/icon.png`,
        image: `${siteUrl}/og-image.png`,
        description: 'Deep Digital Labs is a website and software development company in Pune, building fast, modern websites, custom ERPs, and mobile apps for growing businesses.',
        founder: {
          '@type': 'Person',
          name: 'Deepak Dukare',
          jobTitle: 'Founder & Lead Software Engineer',
          url: `${siteUrl}/about`
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
        '@id': `${siteUrl}/#localbusiness`,
        name: 'Deep Digital Labs - Website & Software Development Company in Pune',
        image: `${siteUrl}/og-image.png`,
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
        '@id': `${siteUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do I own the code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. After final payment you get the source code, domain, hosting and database access. Nothing stays locked with us. You own everything with no monthly fees to keep your site online.'
            }
          },
          {
            '@type': 'Question',
            name: 'How fast can you deliver?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most business websites go live in 2 to 4 weeks. Custom software and apps are planned in phases, and we give a timeline after the first call.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can you connect WhatsApp and automate follow-ups?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Website enquiries can go straight to your WhatsApp, with click-to-chat buttons, instant lead notifications, and automated replies.'
            }
          },
          {
            '@type': 'Question',
            name: 'Where are you based and can we meet in Pune?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We are based right here in Pune, Maharashtra. We work with clients across Baner, Hinjewadi, Kothrud, Viman Nagar, Pimpri-Chinchwad, and across Maharashtra through direct WhatsApp, phone calls, and in-person consultations.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does Deep Digital Labs differ from generic agencies or WordPress freelancers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You talk directly with Deepak Dukare and senior engineers—no junior middlemen or account managers. We build with modern, high-performance tech stacks (Next.js, React, Flutter, PostgreSQL) that load in under 1 second and are built to scale.'
            }
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Deep Digital Labs',
        publisher: {
          '@id': `${siteUrl}/#organization`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/case-studies?search={search_term_string}`,
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
