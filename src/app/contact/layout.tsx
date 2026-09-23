import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Deep Digital Labs',
  description: 'Get in touch with Deep Digital Labs in Pune, India. Send us your project requirements or chat directly with our team.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
