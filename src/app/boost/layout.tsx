import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boost | Quorax',
  description:
    'Your tech team for €149/month. Website, dedicated agent, servers, email, and software updates — all included. Enterprise technology at a fraction of the cost.',
  openGraph: {
    title: 'Quorax Boost — Your Tech Team for €149/month',
    description:
      'A cutting-edge website, a dedicated agent, servers, email, and software updates — all included.',
  },
};

export default function BoostLayout({ children }: { children: React.ReactNode }) {
  return children;
}
