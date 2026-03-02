'use client';
import { cn } from '@/lib/utils';

const ClientLogoStrip = ({ className, isDark = true }: { className?: string; isDark?: boolean }) => {
  const clients = [
    'CSIC',
    'ACCEM',
    'Upgrade Hub',
    'Universidad de la República',
    'NETpc',
  ];

  // Duplicate for seamless infinite scroll
  const allClients = [...clients, ...clients];

  return (
    <div className={cn('relative overflow-hidden py-8', className)}>
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: `linear-gradient(to right, ${isDark ? 'var(--color-brand-navy)' : '#FFFFFF'}, transparent)` }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: `linear-gradient(to left, ${isDark ? 'var(--color-brand-navy)' : '#FFFFFF'}, transparent)` }} />

      {/* Scrolling track */}
      <div
        className="flex items-center gap-16 hover:[animation-play-state:paused]"
        style={{ animation: 'marquee 25s linear infinite', width: 'max-content' }}
      >
        {allClients.map((client, index) => (
          <div
            key={index}
            className="text-gray-mid font-semibold text-sm tracking-wider uppercase opacity-40 hover:opacity-80 transition-opacity duration-300 whitespace-nowrap"
          >
            {client}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogoStrip;
