import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies | SaaS & App Development Portfolio',
  description: 'Explore the digital products, SaaS platforms, and mobile apps engineered by Deep Digital Labs. See real metrics, tech stacks, and design solutions.',
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
