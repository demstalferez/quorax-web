'use client';

import { useState } from 'react';
import FilterPills from '@/components/ui/FilterPills';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import DecorativeLogo from '@/components/ui/DecorativeLogo';
import { caseStudies } from '@/data/cases';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { t } from '@/lib/translations';

export default function PortfolioPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeKey, setActiveKey] = useState('All');

  const filterMap = [
    { key: 'All', label: t(language, 'portfolio_filter_all') },
    { key: 'AI/ML', label: t(language, 'portfolio_filter_aiml') },
    { key: 'Data Science', label: t(language, 'portfolio_filter_datascience') },
    { key: 'Cybersecurity', label: t(language, 'portfolio_filter_cybersecurity') },
    { key: 'Software', label: t(language, 'portfolio_filter_software') },
    { key: 'Training', label: t(language, 'portfolio_filter_training') },
  ];

  const categories = filterMap.map((f) => f.label);
  const activeLabel = filterMap.find((f) => f.key === activeKey)?.label ?? categories[0];

  const handleFilterChange = (label: string) => {
    const entry = filterMap.find((f) => f.label === label);
    setActiveKey(entry ? entry.key : 'All');
  };

  const filteredCases =
    activeKey === 'All'
      ? caseStudies
      : caseStudies.filter((cs) =>
          cs.tags.some(
            (tag) =>
              tag.toLowerCase() === activeKey.toLowerCase() ||
              (activeKey === 'AI/ML' && (tag === 'AI' || tag === 'Machine Learning')) ||
              (activeKey === 'Data Science' &&
                (tag === 'Data Science' || tag === 'Analytics' || tag === 'Business Intelligence')) ||
              (activeKey === 'Cybersecurity' &&
                (tag === 'Cybersecurity' || tag === 'Security' || tag === 'OSINT')) ||
              (activeKey === 'Software' && tag === 'Software Development') ||
              (activeKey === 'Training' && tag === 'Training')
          )
        );

  const stats = [
    { value: '5', label: t(language, 'portfolio_stats_industries') },
    { value: '3', label: t(language, 'portfolio_stats_countries') },
    { value: '100%', label: t(language, 'portfolio_stats_satisfaction') },
  ];

  return (
    <main>
      {/* Hero */}
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
                  {t(language, 'portfolio_hero_label')}
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'portfolio_hero_title')}
              </h1>
              <p
                className="text-lg mt-6 leading-relaxed max-w-2xl"
                style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
              >
                {t(language, 'portfolio_hero_subtitle')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="py-12"
        style={{
          backgroundColor: isDark ? '#0A0E27' : '#FFFFFF',
          borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)'}`,
          borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)'}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p
                    className="text-3xl md:text-4xl font-black"
                    style={{ color: isDark ? '#0147FF' : '#0147FF' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section
        className="py-16"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <ScrollReveal>
            <div className="flex items-center justify-between gap-4 flex-wrap mb-10">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'portfolio_all_projects')}
                </span>
              </div>
              <p
                className="text-sm whitespace-nowrap"
                style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
              >
                {t(language, 'portfolio_showing')} {filteredCases.length} {t(language, 'portfolio_projects')}
              </p>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={100}>
            <div className="mb-10">
              <FilterPills
                categories={categories}
                activeFilter={activeLabel}
                onChange={handleFilterChange}
                isDark={isDark}
              />
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((cs, index) => (
              <ScrollReveal key={cs.slug} delay={index * 100}>
                <CaseStudyCard
                  slug={cs.slug}
                  client={cs.client}
                  title={language === 'es' ? cs.subtitleEs : cs.subtitle}
                  tags={cs.tags}
                  excerpt={
                    (language === 'es' ? cs.challengeEs : cs.challenge).substring(0, 150) + '...'
                  }
                  image={cs.image}
                  imageAlt={language === 'es' ? cs.imageAltEs : cs.imageAlt}
                  color={cs.color}
                  isDark={isDark}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #0A0E27 0%, #111633 100%)'
            : 'linear-gradient(135deg, #EEF2FF 0%, #F8FAFC 100%)',
        }}
      >
        <DecorativeLogo isDark={isDark} position="bottom-right" size={280} opacity={0.03} />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight"
              style={{ color: isDark ? '#FFFFFF' : '#111827' }}
            >
              {t(language, 'portfolio_cta_title')}
            </h2>
            <p
              className="text-lg mt-4 mb-10"
              style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
            >
              {t(language, 'portfolio_cta_subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                {t(language, 'hero_cta_primary')}
              </Button>
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
