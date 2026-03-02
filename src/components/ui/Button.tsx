'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const variantClasses = {
    primary:
      'bg-brand-blue btn-primary-text hover:bg-blue-600 hover:shadow-lg hover:shadow-brand-blue/25',
    ghost:
      'border border-brand-blue text-brand-blue hover:bg-brand-blue/10',
    outline:
      'border border-white/20 text-white hover:bg-white/10 hover:border-white/40',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = cn(
    'rounded-lg font-semibold inline-flex items-center justify-center',
    'transition-all duration-300',
    'hover:scale-[1.02] active:scale-[0.98]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy'
  );

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
