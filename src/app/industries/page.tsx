import React from 'react';
import type { Metadata } from 'next';
import { IndustriesPageClient } from './IndustriesPageClient';

export const metadata: Metadata = {
  title: 'Digital Solutions by Industry | Deep Digital Labs',
  description: 'Explore 50+ industry-specific digital solutions from Deep Digital Labs, including websites, SaaS platforms, business software, mobile apps, AI automation, e-commerce and custom digital products.',
  openGraph: {
    title: 'Digital Solutions by Industry | Deep Digital Labs',
    description: 'Explore 50+ industry-specific digital solutions from Deep Digital Labs, including websites, SaaS platforms, business software, mobile apps, AI automation, e-commerce and custom digital products.',
    type: 'website',
  },
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
