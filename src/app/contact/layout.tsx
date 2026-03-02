import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Quorax',
  description:
    'Get in touch with Quorax. Book a free consultation to discuss your AI, data science, or cybersecurity project.',
  openGraph: {
    title: 'Contact | Quorax',
    description:
      'Get in touch with Quorax. Book a free consultation to discuss your project.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
