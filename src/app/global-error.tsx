'use client';

import { useEffect, useRef } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const retried = useRef(false);

  useEffect(() => {
    const isHydrationError =
      error.message?.includes('removeChild') ||
      error.message?.includes('insertBefore') ||
      error.message?.includes('Hydration') ||
      error.message?.includes('hydrating');

    if (isHydrationError && !retried.current) {
      retried.current = true;
      reset();
    }
  }, [error, reset]);

  return (
    <html lang="en">
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          backgroundColor: '#0a0f1e',
          fontFamily: 'system-ui, sans-serif',
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
            Something went wrong
          </h2>
          <button
            onClick={reset}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              fontSize: '0.875rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
