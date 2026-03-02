import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Quorax',
  description:
    'End-to-end technology solutions: AI & Machine Learning, Data Science, Cybersecurity, Software Development, and Technical Training.',
  openGraph: {
    title: 'Services | Quorax',
    description:
      'End-to-end technology solutions: AI & Machine Learning, Data Science, Cybersecurity, Software Development, and Technical Training.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
