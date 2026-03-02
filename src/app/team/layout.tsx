import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team | Quorax',
  description:
    'Meet the Quorax team. Technology consultants specializing in AI, data science, and cybersecurity across Uruguay, Europe, and Asia Pacific.',
  openGraph: {
    title: 'Team | Quorax',
    description:
      'Meet the Quorax team. Technology consultants specializing in AI, data science, and cybersecurity.',
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
