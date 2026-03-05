import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clerk | Quorax',
  description:
    'Your first digital employee. Lives on your website, takes orders on WhatsApp. Attends customers 24/7, captures leads, books appointments. $999 setup + $299/month.',
  openGraph: {
    title: 'Quorax Clerk — Your First Digital Employee',
    description:
      'An employee that lives on your website and takes orders on WhatsApp. Attends customers 24/7. $299/month.',
  },
};

export default function ClerkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
