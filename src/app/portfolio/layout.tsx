import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Quorax',
  description:
    'Real projects, real impact. Explore our case studies across AI, data science, cybersecurity, and software development.',
  openGraph: {
    title: 'Portfolio | Quorax',
    description:
      'Real projects, real impact. Explore our case studies across AI, data science, cybersecurity, and software development.',
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
