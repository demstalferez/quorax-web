'use client';
import { cn } from '@/lib/utils';
import TechPill from './TechPill';

interface TimelineItemProps {
  date: string;
  location: string;
  role: string;
  org: string;
  description: string;
  side: 'left' | 'right';
  className?: string;
}

const TimelineItem = ({
  date,
  location,
  role,
  org,
  description,
  side,
  className,
}: TimelineItemProps) => {
  return (
    <div
      className={cn(
        'flex gap-8 mb-12',
        side === 'right' && 'flex-row-reverse',
        className
      )}
    >
      {/* Content Card */}
      <div className="flex-1">
        <div className="bg-brand-navy-mid rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300">
          <p className="text-brand-cyan font-mono text-sm mb-2">{date}</p>
          <div className="mb-3">
            <TechPill label={location} variant="gray" />
          </div>
          <h3 className="font-bold text-white mb-1">{role}</h3>
          <p className="text-gray-mid text-sm mb-3">{org}</p>
          <p className="text-gray-mid text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="flex flex-col items-center">
        <div className="relative mt-6">
          <div className="w-3 h-3 rounded-full bg-brand-blue" />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-brand-blue animate-ping opacity-20" />
        </div>
        <div className="w-0.5 h-32 bg-gradient-to-b from-brand-blue to-transparent" />
      </div>
    </div>
  );
};

export default TimelineItem;
