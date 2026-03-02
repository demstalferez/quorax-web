import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training | Quorax',
  description:
    'Professional tech training programs in AI, Data Science, Cybersecurity, and Full Stack Development. Powered by Upgrade Hub.',
  openGraph: {
    title: 'Training | Quorax',
    description:
      'Professional tech training programs in AI, Data Science, Cybersecurity, and Full Stack Development. Powered by Upgrade Hub.',
  },
};

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
