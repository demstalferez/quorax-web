'use client';

import { useState } from 'react';
import {
  MessageCircle,
  Smartphone,
  UserPlus,
  Globe,
  GraduationCap,
  BarChart3,
  Phone,
  Settings,
  Rocket,
  Check,
  ChevronDown,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { t } from '@/lib/translations';

export default function ClerkPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { icon: MessageCircle, titleKey: 'clerk_feature_1_title' as const, descKey: 'clerk_feature_1_desc' as const, color: '#0147FF' },
    { icon: Smartphone, titleKey: 'clerk_feature_2_title' as const, descKey: 'clerk_feature_2_desc' as const, color: '#25D366' },
    { icon: UserPlus, titleKey: 'clerk_feature_3_title' as const, descKey: 'clerk_feature_3_desc' as const, color: '#00D4FF' },
    { icon: Globe, titleKey: 'clerk_feature_4_title' as const, descKey: 'clerk_feature_4_desc' as const, color: '#8B5CF6' },
    { icon: GraduationCap, titleKey: 'clerk_feature_5_title' as const, descKey: 'clerk_feature_5_desc' as const, color: '#F59E0B' },
    { icon: BarChart3, titleKey: 'clerk_feature_6_title' as const, descKey: 'clerk_feature_6_desc' as const, color: '#10B981' },
  ];

  const setupFeatures = [
    'clerk_setup_f1' as const,
    'clerk_setup_f2' as const,
    'clerk_setup_f3' as const,
    'clerk_setup_f4' as const,
  ];

  const monthlyFeatures = [
    'clerk_monthly_f1' as const,
    'clerk_monthly_f2' as const,
    'clerk_monthly_f3' as const,
    'clerk_monthly_f4' as const,
    'clerk_monthly_f5' as const,
  ];

  const processSteps = [
    { icon: Phone, titleKey: 'clerk_process_1_title' as const, descKey: 'clerk_process_1_desc' as const },
    { icon: Settings, titleKey: 'clerk_process_2_title' as const, descKey: 'clerk_process_2_desc' as const },
    { icon: Rocket, titleKey: 'clerk_process_3_title' as const, descKey: 'clerk_process_3_desc' as const },
  ];

  const comparisonRows = [
    {
      label: 'clerk_compare_cost' as const,
      clerk: 'clerk_compare_cost_clerk' as const,
      employee: 'clerk_compare_cost_employee' as const,
      chatbot: 'clerk_compare_cost_chatbot' as const,
    },
    {
      label: 'clerk_compare_hours' as const,
      clerk: 'clerk_compare_hours_clerk' as const,
      employee: 'clerk_compare_hours_employee' as const,
      chatbot: 'clerk_compare_hours_chatbot' as const,
    },
    {
      label: 'clerk_compare_knows' as const,
      clerk: 'clerk_compare_yes' as const,
      employee: 'clerk_compare_yes' as const,
      chatbot: 'clerk_compare_no' as const,
    },
    {
      label: 'clerk_compare_whatsapp' as const,
      clerk: 'clerk_compare_yes' as const,
      employee: 'clerk_compare_yes' as const,
      chatbot: 'clerk_compare_no' as const,
    },
    {
      label: 'clerk_compare_languages' as const,
      clerk: 'clerk_compare_languages_clerk' as const,
      employee: 'clerk_compare_languages_employee' as const,
      chatbot: 'clerk_compare_languages_chatbot' as const,
    },
    {
      label: 'clerk_compare_vacations' as const,
      clerk: 'clerk_compare_never' as const,
      employee: 'clerk_compare_vacations_employee' as const,
      chatbot: 'clerk_compare_na' as const,
    },
  ];

  const faqs = [
    { q: 'clerk_faq_1_q' as const, a: 'clerk_faq_1_a' as const },
    { q: 'clerk_faq_2_q' as const, a: 'clerk_faq_2_a' as const },
    { q: 'clerk_faq_3_q' as const, a: 'clerk_faq_3_a' as const },
    { q: 'clerk_faq_4_q' as const, a: 'clerk_faq_4_a' as const },
    { q: 'clerk_faq_5_q' as const, a: 'clerk_faq_5_a' as const },
    { q: 'clerk_faq_6_q' as const, a: 'clerk_faq_6_a' as const },
    { q: 'clerk_faq_7_q' as const, a: 'clerk_faq_7_a' as const },
  ];

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #0A0E27 0%, #111633 50%, #0A0E27 100%)'
            : 'linear-gradient(135deg, #EEF2FF 0%, #F0F4FF 50%, #EEF2FF 100%)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              backgroundColor: isDark ? 'rgba(1,71,255,0.05)' : 'rgba(1,71,255,0.06)',
              animation: 'float-slow 15s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              backgroundColor: isDark ? 'rgba(0,212,255,0.03)' : 'rgba(0,212,255,0.05)',
              animation: 'float-slow-reverse 18s ease-in-out infinite',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'clerk_hero_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'clerk_hero_title')}{' '}
                <span className="text-brand-blue">{t(language, 'clerk_hero_title_highlight')}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p
                className="text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed"
                style={{ color: isDark ? '#C0C0C0' : '#4B5563' }}
              >
                {t(language, 'clerk_hero_subtitle')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Button href="/contact" variant="primary" size="lg">
                  {t(language, 'clerk_hero_cta')}
                </Button>
                <Button href="#pricing" variant="ghost" size="lg">
                  {t(language, 'clerk_hero_cta_secondary')}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Clerk Does */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'clerk_what_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'clerk_what_title')}
              </h2>
              <p
                className="text-base md:text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
              >
                {t(language, 'clerk_what_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.titleKey} delay={index * 80}>
                  <div
                    className="rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:translate-y-[-2px] group"
                    style={{
                      backgroundColor: isDark ? 'rgba(17,22,51,0.8)' : '#F9FAFB',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${feature.color}15` }}
                    >
                      <Icon size={24} style={{ color: feature.color }} />
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                    >
                      {t(language, feature.titleKey)}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, feature.descKey)}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'clerk_process_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'clerk_process_title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.titleKey} delay={index * 100}>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 relative"
                      style={{ backgroundColor: isDark ? 'rgba(0,212,255,0.1)' : 'rgba(1,71,255,0.08)' }}
                    >
                      <Icon size={28} style={{ color: isDark ? '#00D4FF' : '#0147FF' }} />
                      <span
                        className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          backgroundColor: '#0147FF',
                          color: '#FFFFFF',
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                    >
                      {t(language, step.titleKey)}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, step.descKey)}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-20 md:py-28 scroll-mt-20"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'clerk_pricing_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'clerk_pricing_title')}
              </h2>
              <p
                className="text-base md:text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
              >
                {t(language, 'clerk_pricing_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Setup Card */}
            <ScrollReveal delay={100}>
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  backgroundColor: isDark ? 'rgba(17,22,51,0.8)' : '#F9FAFB',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                }}
              >
                <p
                  className="text-sm font-mono uppercase tracking-widest mb-2"
                  style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                >
                  {t(language, 'clerk_pricing_setup_label')}
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className="text-5xl font-black"
                    style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                  >
                    $999
                  </span>
                  <span
                    className="text-base"
                    style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                  >
                    {t(language, 'clerk_pricing_one_time')}
                  </span>
                </div>
                <p
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: isDark ? '#C0C0C0' : '#4B5563' }}
                >
                  {t(language, 'clerk_pricing_setup_desc')}
                </p>
                <ul className="space-y-3">
                  {setupFeatures.map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                      <span className="text-sm" style={{ color: isDark ? '#C0C0C0' : '#4B5563' }}>
                        {t(language, key)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Monthly Card */}
            <ScrollReveal delay={200}>
              <div
                className="rounded-2xl p-8 h-full relative"
                style={{
                  backgroundColor: isDark ? 'rgba(10,14,39,0.9)' : '#FFFFFF',
                  border: `2px solid ${isDark ? 'rgba(0,212,255,0.25)' : 'rgba(1,71,255,0.2)'}`,
                  boxShadow: isDark
                    ? '0 8px 40px rgba(0,212,255,0.08)'
                    : '0 8px 40px rgba(1,71,255,0.08)',
                }}
              >
                <p
                  className="text-sm font-mono uppercase tracking-widest mb-2"
                  style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                >
                  {t(language, 'clerk_pricing_monthly_label')}
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className="text-5xl font-black"
                    style={{ color: '#00D4FF' }}
                  >
                    $299
                  </span>
                  <span
                    className="text-base"
                    style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                  >
                    {t(language, 'clerk_pricing_per_month')}
                  </span>
                </div>
                <p
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: isDark ? '#C0C0C0' : '#4B5563' }}
                >
                  {t(language, 'clerk_pricing_monthly_desc')}
                </p>
                <ul className="space-y-3">
                  {monthlyFeatures.map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#00D4FF' }} />
                      <span className="text-sm" style={{ color: isDark ? '#C0C0C0' : '#4B5563' }}>
                        {t(language, key)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="lg" className="w-full justify-center">
                    {t(language, 'clerk_pricing_cta')}
                  </Button>
                </div>
                <p
                  className="text-xs mt-4 text-center"
                  style={{ color: isDark ? '#8E8E93' : '#9CA3AF' }}
                >
                  {t(language, 'clerk_pricing_note')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'clerk_comparison_title')}
              </h2>
              <p
                className="text-base md:text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
              >
                {t(language, 'clerk_comparison_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr
                    style={{
                      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                    }}
                  >
                    <th className="text-left py-4 pr-4 font-bold" style={{ color: isDark ? '#8E8E93' : '#6B7280' }} />
                    <th className="text-left py-4 px-4 font-bold" style={{ color: '#00D4FF' }}>
                      {t(language, 'clerk_compare_col_clerk')}
                    </th>
                    <th className="text-left py-4 px-4 font-bold" style={{ color: isDark ? '#8E8E93' : '#6B7280' }}>
                      {t(language, 'clerk_compare_col_employee')}
                    </th>
                    <th className="text-left py-4 pl-4 font-bold" style={{ color: isDark ? '#8E8E93' : '#6B7280' }}>
                      {t(language, 'clerk_compare_col_chatbot')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.label}
                      style={{
                        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
                      }}
                    >
                      <td className="py-4 pr-4 font-medium" style={{ color: isDark ? '#C0C0C0' : '#374151' }}>
                        {t(language, row.label)}
                      </td>
                      <td className="py-4 px-4 font-semibold" style={{ color: '#00D4FF' }}>
                        {t(language, row.clerk)}
                      </td>
                      <td className="py-4 px-4" style={{ color: isDark ? '#8E8E93' : '#6B7280' }}>
                        {t(language, row.employee)}
                      </td>
                      <td className="py-4 pl-4" style={{ color: isDark ? '#8E8E93' : '#6B7280' }}>
                        {t(language, row.chatbot)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'clerk_faq_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'clerk_faq_title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.q} delay={index * 60}>
                <div
                  className="rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: isDark ? 'rgba(17,22,51,0.8)' : '#F9FAFB',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span
                      className="font-bold text-sm md:text-base pr-4"
                      style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                    >
                      {t(language, faq.q)}
                    </span>
                    <ChevronDown
                      size={18}
                      className="flex-shrink-0 transition-transform duration-300"
                      style={{
                        color: isDark ? '#8E8E93' : '#6B7280',
                        transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: openFaq === index ? '200px' : '0px',
                      opacity: openFaq === index ? 1 : 0,
                    }}
                  >
                    <p
                      className="px-5 pb-5 text-sm leading-relaxed"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, faq.a)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-banner py-20 md:py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black leading-tight cta-heading">
              {t(language, 'clerk_cta_title')}
            </h2>
            <p className="text-lg cta-description mt-6 max-w-2xl mx-auto leading-relaxed">
              {t(language, 'clerk_cta_subtitle')}
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary" size="lg">
                {t(language, 'clerk_cta_button')}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
