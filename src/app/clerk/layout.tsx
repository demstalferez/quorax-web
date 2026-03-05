import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clerk | Quorax',
  description:
    'Your first digital employee. Managed via WhatsApp. Creates documents, attends customers, captures leads. $999 setup + $299/month.',
  openGraph: {
    title: 'Quorax Clerk — Your First Digital Employee',
    description:
      'A digital employee managed via WhatsApp. Creates documents, attends customers 24/7. $299/month.',
  },
};

export default function ClerkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
