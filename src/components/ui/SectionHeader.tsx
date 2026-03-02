'use client';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({
  label,
  title,
  subtitle,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn('', className)}>
      <div className="mb-4">
        <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-2">
          {label}
        </p>
        <div className="w-12 h-1 bg-brand-blue rounded" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-mid text-lg">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
