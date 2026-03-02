'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Globe,
  Users,
  Zap as HostingIcon,
  HelpCircle,
  RefreshCw,
  CalendarCheck,
  Rocket,
  MessageCircle,
  TrendingUp,
  Check,
  ChevronDown,
  Bot,
  ShoppingCart,
  FileText,
  CalendarDays,
  Search,
  Languages,
  Phone,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { t } from '@/lib/translations';

export default function BoostPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { icon: Globe, titleKey: 'boost_feature_1_title' as const, descKey: 'boost_feature_1_desc' as const, color: '#0147FF' },
    { icon: Users, titleKey: 'boost_feature_2_title' as const, descKey: 'boost_feature_2_desc' as const, color: '#00D4FF' },
    { icon: HostingIcon, titleKey: 'boost_feature_3_title' as const, descKey: 'boost_feature_3_desc' as const, color: '#8B5CF6' },
    { icon: HelpCircle, titleKey: 'boost_feature_4_title' as const, descKey: 'boost_feature_4_desc' as const, color: '#F59E0B' },
    { icon: RefreshCw, titleKey: 'boost_feature_5_title' as const, descKey: 'boost_feature_5_desc' as const, color: '#10B981' },
    { icon: CalendarCheck, titleKey: 'boost_feature_6_title' as const, descKey: 'boost_feature_6_desc' as const, color: '#EF4444' },
  ];

  const pricingFeatures = [
    'boost_pricing_f1' as const,
    'boost_pricing_f2' as const,
    'boost_pricing_f3' as const,
    'boost_pricing_f4' as const,
    'boost_pricing_f5' as const,
    'boost_pricing_f6' as const,
    'boost_pricing_f7' as const,
  ];

  const addons = [
    { icon: Bot, titleKey: 'boost_addon_chatbot_title' as const, descKey: 'boost_addon_chatbot_desc' as const, color: '#8B5CF6' },
    { icon: ShoppingCart, titleKey: 'boost_addon_ecommerce_title' as const, descKey: 'boost_addon_ecommerce_desc' as const, color: '#0147FF' },
    { icon: FileText, titleKey: 'boost_addon_blog_title' as const, descKey: 'boost_addon_blog_desc' as const, color: '#10B981' },
    { icon: CalendarDays, titleKey: 'boost_addon_booking_title' as const, descKey: 'boost_addon_booking_desc' as const, color: '#F59E0B' },
    { icon: Search, titleKey: 'boost_addon_seo_title' as const, descKey: 'boost_addon_seo_desc' as const, color: '#EF4444' },
    { icon: Languages, titleKey: 'boost_addon_multilingual_title' as const, descKey: 'boost_addon_multilingual_desc' as const, color: '#00D4FF' },
  ];

  const faqs = [
    { q: 'boost_faq_1_q' as const, a: 'boost_faq_1_a' as const },
    { q: 'boost_faq_2_q' as const, a: 'boost_faq_2_a' as const },
    { q: 'boost_faq_3_q' as const, a: 'boost_faq_3_a' as const },
    { q: 'boost_faq_4_q' as const, a: 'boost_faq_4_a' as const },
    { q: 'boost_faq_5_q' as const, a: 'boost_faq_5_a' as const },
    { q: 'boost_faq_6_q' as const, a: 'boost_faq_6_a' as const },
    { q: 'boost_faq_7_q' as const, a: 'boost_faq_7_a' as const },
  ];

  const processSteps = [
    { icon: MessageCircle, titleKey: 'boost_process_1_title' as const, descKey: 'boost_process_1_desc' as const },
    { icon: CalendarCheck, titleKey: 'boost_process_2_title' as const, descKey: 'boost_process_2_desc' as const },
    { icon: Rocket, titleKey: 'boost_process_3_title' as const, descKey: 'boost_process_3_desc' as const },
    { icon: TrendingUp, titleKey: 'boost_process_4_title' as const, descKey: 'boost_process_4_desc' as const },
  ];

  const comparisonRows = [
    {
      label: 'boost_compare_cost' as const,
      boost: 'boost_compare_cost_boost' as const,
      freelance: 'boost_compare_cost_freelance' as const,
      agency: 'boost_compare_cost_agency' as const,
      inhouse: 'boost_compare_cost_inhouse' as const,
    },
    {
      label: 'boost_compare_response' as const,
      boost: 'boost_compare_response_boost' as const,
      freelance: 'boost_compare_response_freelance' as const,
      agency: 'boost_compare_response_agency' as const,
      inhouse: 'boost_compare_response_inhouse' as const,
    },
    {
      label: 'boost_compare_tech' as const,
      boost: 'boost_compare_tech_boost' as const,
      freelance: 'boost_compare_tech_freelance' as const,
      agency: 'boost_compare_tech_agency' as const,
      inhouse: 'boost_compare_tech_inhouse' as const,
    },
    {
      label: 'boost_compare_hosting' as const,
      boost: 'boost_compare_yes' as const,
      freelance: 'boost_compare_no' as const,
      agency: 'boost_compare_sometimes' as const,
      inhouse: 'boost_compare_no' as const,
    },
    {
      label: 'boost_compare_addons' as const,
      boost: 'boost_compare_yes' as const,
      freelance: 'boost_compare_no' as const,
      agency: 'boost_compare_sometimes' as const,
      inhouse: 'boost_compare_no' as const,
    },
  ];

  const scopeItems = [
    'boost_scope_1' as const,
    'boost_scope_2' as const,
    'boost_scope_3' as const,
    'boost_scope_4' as const,
    'boost_scope_5' as const,
    'boost_scope_6' as const,
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
                  {t(language, 'boost_hero_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'boost_hero_title')}{' '}
                <span className="text-brand-blue">{t(language, 'boost_hero_title_highlight')}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p
                className="text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed"
                style={{ color: isDark ? '#C0C0C0' : '#4B5563' }}
              >
                {t(language, 'boost_hero_subtitle')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Button href="/contact" variant="primary" size="lg">
                  {t(language, 'boost_hero_cta')}
                </Button>
                <Button href="#pricing" variant="ghost" size="lg">
                  {t(language, 'boost_hero_cta_secondary')}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What You Get */}
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
                  {t(language, 'boost_what_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'boost_what_title')}
              </h2>
              <p
                className="text-base md:text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
              >
                {t(language, 'boost_what_subtitle')}
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

      {/* Scope — What We Build */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'boost_scope_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'boost_scope_title')}
              </h2>
              <p
                className="text-base md:text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
              >
                {t(language, 'boost_scope_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {scopeItems.map((key) => (
                <div key={key} className="flex items-center gap-3">
                  <Check size={16} style={{ color: '#10B981' }} className="flex-shrink-0" />
                  <span
                    className="text-sm"
                    style={{ color: isDark ? '#C0C0C0' : '#4B5563' }}
                  >
                    {t(language, key)}
                  </span>
                </div>
              ))}
            </div>
            <p
              className="text-center text-sm mt-8"
              style={{ color: isDark ? '#8E8E93' : '#9CA3AF' }}
            >
              {t(language, 'boost_scope_note').split(language === 'es' ? 'Desarrollo de Software' : 'Software Development')[0]}
              <Link
                href="/services"
                className="text-brand-cyan hover:underline"
              >
                {language === 'es' ? 'Desarrollo de Software' : 'Software Development'}
              </Link>
              {t(language, 'boost_scope_note').split(language === 'es' ? 'Desarrollo de Software' : 'Software Development')[1] || '.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-20 md:py-28 scroll-mt-20"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'boost_pricing_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'boost_pricing_title')}
              </h2>
              <p
                className="text-base md:text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
              >
                {t(language, 'boost_pricing_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div
              className="rounded-2xl p-8 md:p-12 relative"
              style={{
                backgroundColor: isDark ? 'rgba(10,14,39,0.9)' : '#FFFFFF',
                border: `2px solid ${isDark ? 'rgba(0,212,255,0.2)' : 'rgba(1,71,255,0.15)'}`,
                boxShadow: isDark
                  ? '0 8px 40px rgba(0,212,255,0.08)'
                  : '0 8px 40px rgba(1,71,255,0.08)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left — Price & description */}
                <div>
                  <p
                    className="text-sm font-mono uppercase tracking-widest mb-2"
                    style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                  >
                    {t(language, 'boost_pricing_from')}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-6xl md:text-7xl font-black"
                      style={{ color: '#00D4FF' }}
                    >
                      {t(language, 'boost_pricing_price')}
                    </span>
                    <span
                      className="text-xl"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, 'boost_pricing_month')}
                    </span>
                  </div>
                  <p
                    className="text-sm mt-6 leading-relaxed"
                    style={{ color: isDark ? '#C0C0C0' : '#4B5563' }}
                  >
                    {t(language, 'boost_pricing_desc')}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button href="/contact" variant="primary" size="lg">
                      <Phone size={16} className="mr-2" />
                      {t(language, 'boost_pricing_cta')}
                    </Button>
                  </div>
                  <p
                    className="text-xs mt-4"
                    style={{ color: isDark ? '#8E8E93' : '#9CA3AF' }}
                  >
                    {t(language, 'boost_pricing_note')}
                  </p>
                </div>

                {/* Right — What's included */}
                <div>
                  <p
                    className="text-sm font-bold uppercase tracking-wider mb-4"
                    style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                  >
                    {t(language, 'boost_pricing_includes')}
                  </p>
                  <ul className="space-y-3">
                    {pricingFeatures.map((key) => (
                      <li key={key} className="flex items-start gap-3">
                        <Check
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: '#00D4FF' }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: isDark ? '#C0C0C0' : '#4B5563' }}
                        >
                          {t(language, key)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Add-ons */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'boost_addons_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'boost_addons_title')}
              </h2>
              <p
                className="text-base md:text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
              >
                {t(language, 'boost_addons_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <ScrollReveal key={addon.titleKey} delay={index * 80}>
                  <div
                    className="rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:translate-y-[-2px] group"
                    style={{
                      backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${addon.color}15` }}
                    >
                      <Icon size={24} style={{ color: addon.color }} />
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                    >
                      {t(language, addon.titleKey)}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, addon.descKey)}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'boost_comparison_title')}
              </h2>
              <p
                className="text-base md:text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
              >
                {t(language, 'boost_comparison_subtitle')}
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
                    <th
                      className="text-left py-4 pr-4 font-bold"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, 'boost_compare_feature')}
                    </th>
                    <th
                      className="text-left py-4 px-4 font-bold"
                      style={{ color: '#00D4FF' }}
                    >
                      {t(language, 'boost_compare_boost')}
                    </th>
                    <th
                      className="text-left py-4 px-4 font-bold"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, 'boost_compare_freelance')}
                    </th>
                    <th
                      className="text-left py-4 px-4 font-bold"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, 'boost_compare_agency')}
                    </th>
                    <th
                      className="text-left py-4 pl-4 font-bold"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, 'boost_compare_inhouse')}
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
                      <td
                        className="py-4 pr-4 font-medium"
                        style={{ color: isDark ? '#C0C0C0' : '#374151' }}
                      >
                        {t(language, row.label)}
                      </td>
                      <td
                        className="py-4 px-4 font-semibold"
                        style={{ color: '#00D4FF' }}
                      >
                        {t(language, row.boost)}
                      </td>
                      <td
                        className="py-4 px-4"
                        style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                      >
                        {t(language, row.freelance)}
                      </td>
                      <td
                        className="py-4 px-4"
                        style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                      >
                        {t(language, row.agency)}
                      </td>
                      <td
                        className="py-4 pl-4"
                        style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                      >
                        {t(language, row.inhouse)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works — 4 Steps */}
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
                  {t(language, 'boost_process_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'boost_process_title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
                  {t(language, 'boost_faq_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'boost_faq_title')}
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
              {t(language, 'boost_cta_title')}
            </h2>
            <p className="text-lg cta-description mt-6 max-w-2xl mx-auto leading-relaxed">
              {t(language, 'boost_cta_subtitle')}
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary" size="lg">
                {t(language, 'boost_cta_button')}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
