'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { language } = useLanguage();
  const retried = useRef(false);

  useEffect(() => {
    // Auto-recover from hydration errors caused by browser extensions
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
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-brand-navy">
      <h2 className="text-2xl font-bold text-white">
        {t(language, 'error_title')}
      </h2>
      <p className="text-gray-mid text-sm max-w-md text-center">
        {t(language, 'error_subtitle')}
      </p>
      <button
        onClick={reset}
        className="bg-brand-blue btn-primary-text text-sm px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        {t(language, 'error_cta')}
      </button>
    </div>
  );
}
