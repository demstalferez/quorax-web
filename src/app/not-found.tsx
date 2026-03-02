'use client';

import Button from '@/components/ui/Button';
import DecorativeLogo from '@/components/ui/DecorativeLogo';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-navy relative overflow-hidden">
      <DecorativeLogo position="top-right" size={400} opacity={0.03} />
      <div className="text-center px-6">
        <p className="text-8xl font-black text-brand-blue mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          {t(language, 'notfound_title')}
        </h1>
        <p className="text-gray-mid text-lg mb-10 max-w-md mx-auto">
          {t(language, 'notfound_subtitle')}
        </p>
        <Button href="/" variant="primary" size="lg">
          {t(language, 'notfound_cta')}
        </Button>
      </div>
    </main>
  );
}
