'use client';

interface DecorativeLogoProps {
  position?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
  size?: number;
  opacity?: number;
  isDark?: boolean;
  className?: string;
}

const positionClasses: Record<string, string> = {
  'top-right': 'top-20 right-[20%]',
  'bottom-right': 'bottom-0 right-[20%]',
  'bottom-left': 'bottom-0 left-[20%]',
  'top-left': 'top-20 left-[20%]',
};

const DecorativeLogo = ({
  position = 'top-right',
  size = 300,
  opacity = 0.04,
  isDark = true,
  className = '',
}: DecorativeLogoProps) => {
  return (
    <div
      className={`absolute pointer-events-none select-none ${positionClasses[position]} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/quorax-logo.svg"
        alt=""
        width={size}
        height={size}
        style={{
          filter: isDark
            ? 'brightness(0) invert(1)'
            : 'brightness(0)',
        }}
        draggable={false}
      />
    </div>
  );
};

export default DecorativeLogo;
