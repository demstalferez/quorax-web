'use client';
import { cn } from '@/lib/utils';

interface TechPillProps {
  label: string;
  variant?: 'blue' | 'cyan' | 'gray';
  className?: string;
}

const TechPill = ({
  label,
  variant = 'blue',
  className,
}: TechPillProps) => {
  const variantClasses = {
    blue: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
    cyan: 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20',
    gray: 'bg-brand-navy-mid text-gray-mid border border-white/10',
  };

  return (
    <span
      className={cn(
        'px-3 py-1 text-xs font-medium rounded-full inline-block',
        'hover:brightness-125 transition-all duration-200',
        variantClasses[variant],
        className
      )}
    >
      {label}
    </span>
  );
};

export default TechPill;
