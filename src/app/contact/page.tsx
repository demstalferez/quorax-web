'use client';

import Button from '@/components/ui/Button';
import DecorativeLogo from '@/components/ui/DecorativeLogo';
import ContactForm from '@/components/ui/ContactForm';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { t, type TranslationKey } from '@/lib/translations';

const WHATSAPP_URL = 'https://wa.me/18653076200';

export default function ContactPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const trustPoints: TranslationKey[] = [
    'contact_trust_1',
    'contact_trust_2',
    'contact_trust_3',
    'contact_trust_4',
  ];

  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <DecorativeLogo isDark={isDark} position="top-right" size={350} opacity={0.03} />
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'contact_label')}
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'contact_title')}
              </h1>
              <p
                className="text-lg mt-6 leading-relaxed max-w-xl"
                style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
              >
                {t(language, 'contact_subtitle')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Form + Info — 2-column layout */}
      <section
        className="py-20"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — takes 3 columns */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-10 bg-brand-cyan/60" />
                    <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                      {t(language, 'contact_form_label')}
                    </span>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-black tracking-tight"
                    style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                  >
                    {t(language, 'contact_form_title')}
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div
                  className="rounded-2xl p-6 md:p-8"
                  style={{
                    backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    boxShadow: isDark
                      ? '0 4px 20px rgba(0,0,0,0.3)'
                      : '0 4px 20px rgba(0,0,0,0.06)',
                  }}
                >
                  <ContactForm isDark={isDark} />
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar — takes 2 columns, aligned to bottom of form */}
            <div className="lg:col-span-2 flex flex-col justify-end space-y-8">
              {/* Logo */}
              <ScrollReveal delay={150}>
                <div className="flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/quorax-logo.svg"
                    alt="Quorax"
                    width={48}
                    height={48}
                    style={{
                      filter: isDark ? 'brightness(0) invert(1)' : 'brightness(0)',
                      opacity: 0.15,
                    }}
                    draggable={false}
                  />
                </div>
              </ScrollReveal>

              {/* WhatsApp card */}
              <ScrollReveal delay={200}>
                <div
                  className="rounded-2xl p-6 md:p-8"
                  style={{
                    backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    boxShadow: isDark
                      ? '0 4px 20px rgba(0,0,0,0.3)'
                      : '0 4px 20px rgba(0,0,0,0.06)',
                  }}
                >
                  <h3
                    className="text-xl font-bold"
                    style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                  >
                    {t(language, 'contact_whatsapp_title')}
                  </h3>
                  <p
                    className="text-sm mt-2 leading-relaxed"
                    style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                  >
                    {t(language, 'contact_whatsapp_desc')}
                  </p>

                  <div className="mt-6">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                      style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                    >
                      <MessageCircle size={18} />
                      {t(language, 'contact_whatsapp_cta')}
                    </a>
                    <p
                      className="text-xs mt-3 text-center"
                      style={{ color: isDark ? 'rgba(142,142,147,0.5)' : 'rgba(107,114,128,0.5)' }}
                    >
                      {t(language, 'contact_whatsapp_note')}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Address & Phone card */}
              <ScrollReveal delay={300}>
                <div
                  className="rounded-2xl p-6 md:p-8"
                  style={{
                    backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    boxShadow: isDark
                      ? '0 4px 20px rgba(0,0,0,0.3)'
                      : '0 4px 20px rgba(0,0,0,0.06)',
                  }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-brand-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                        >
                          Quorax LLC
                        </p>
                        <p
                          className="text-sm mt-0.5"
                          style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                        >
                          {t(language, 'footer_address')}<br />
                          {t(language, 'footer_address_city')}
                        </p>
                      </div>
                    </div>
                    <a
                      href="tel:+18653076200"
                      className="flex items-center gap-3 transition-colors duration-300 hover:text-brand-cyan"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      <Phone size={18} className="text-brand-cyan flex-shrink-0" />
                      <span className="text-sm">{t(language, 'footer_phone')}</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Trust signals card */}
              <ScrollReveal delay={400}>
                <div
                  className="rounded-2xl p-6 md:p-8"
                  style={{
                    backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    boxShadow: isDark
                      ? '0 4px 20px rgba(0,0,0,0.3)'
                      : '0 4px 20px rgba(0,0,0,0.06)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px w-8 bg-brand-cyan/60" />
                    <span className="text-brand-cyan text-[10px] font-mono tracking-[0.2em] uppercase">
                      {t(language, 'contact_trust_label')}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {trustPoints.map((key) => (
                      <li key={key} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-brand-cyan flex-shrink-0" />
                        <span
                          className="text-sm"
                          style={{ color: isDark ? '#C0C0C0' : '#374151' }}
                        >
                          {t(language, key)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Final CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #0A0E27 0%, #111633 100%)'
            : 'linear-gradient(135deg, #EEF2FF 0%, #F8FAFC 100%)',
        }}
      >
        <DecorativeLogo isDark={isDark} position="bottom-right" size={200} opacity={0.03} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight"
              style={{ color: isDark ? '#FFFFFF' : '#111827' }}
            >
              {t(language, 'contact_cta_title')}
            </h2>
            <p
              className="text-lg mt-4 mb-10"
              style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
            >
              {t(language, 'contact_cta_subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              >
                <MessageCircle size={18} />
                {t(language, 'contact_whatsapp_cta')}
              </a>
              <Button href="/portfolio" variant="ghost" size="lg">
                {t(language, 'hero_cta_secondary')}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
