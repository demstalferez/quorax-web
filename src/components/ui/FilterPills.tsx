'use client';
import { cn } from '@/lib/utils';

interface FilterPillsProps {
  categories: string[];
  activeFilter: string;
  onChange: (filter: string) => void;
  isDark?: boolean;
  className?: string;
}

const FilterPills = ({
  categories,
  activeFilter,
  onChange,
  isDark = true,
  className,
}: FilterPillsProps) => {
  return (
    <div
      className={cn(
        'flex gap-3 overflow-x-auto pb-2 scrollbar-hide',
        className
      )}
    >
      {categories.map((category) => {
        const isActive = activeFilter === category;
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={cn(
              'rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-300 min-h-[44px]',
              isActive && 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20'
            )}
            style={
              isActive
                ? undefined
                : {
                    backgroundColor: isDark ? '#111633' : '#F3F4F6',
                    color: isDark ? '#8E8E93' : '#4B5563',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)'}`,
                  }
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default FilterPills;
