'use client';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface MetricsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  className?: string;
  isDark?: boolean;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const MetricsCounter = ({
  value,
  label,
  suffix = '',
  className,
  isDark = true,
}: MetricsCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value]);

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-4xl md:text-5xl font-bold tabular-nums" style={{ color: isDark ? '#FFFFFF' : '#111827' }}>
          {count}
        </span>
        {suffix && (
          <span className="text-brand-cyan text-2xl md:text-3xl font-bold">
            {suffix}
          </span>
        )}
      </div>
      <p className="text-gray-mid text-sm uppercase tracking-wider mt-2">
        {label}
      </p>
    </div>
  );
};

export default MetricsCounter;
