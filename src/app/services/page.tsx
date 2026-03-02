'use client';

import { useRef } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TechPill from '@/components/ui/TechPill';
import Button from '@/components/ui/Button';
import DecorativeLogo from '@/components/ui/DecorativeLogo';
import { services } from '@/data/services';
import { caseStudies } from '@/data/cases';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { t, type TranslationKey } from '@/lib/translations';
import {
  Brain,
  BarChart3,
  Shield,
  Code2,
  GraduationCap,
  CheckCircle2,
  TrendingUp,
  Search,
  Lightbulb,
  Hammer,
  Rocket,
  HeadphonesIcon,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Brain,
  BarChart3,
  Shield,
  Code2,
  GraduationCap,
};

const processIcons = [Search, Lightbulb, Hammer, Rocket, HeadphonesIcon];

export default function ServicesPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollToService = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
                  {t(language, 'services_page_label')}
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'services_page_title')}
              </h1>
              <p
                className="text-lg mt-6 leading-relaxed max-w-2xl"
                style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
              >
                {t(language, 'services_page_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Service navigation pills */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-3 mt-10">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(index)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: isDark ? 'rgba(1,71,255,0.1)' : 'rgba(1,71,255,0.08)',
                      color: isDark ? '#FFFFFF' : '#111827',
                      border: `1px solid ${isDark ? 'rgba(1,71,255,0.2)' : 'rgba(1,71,255,0.15)'}`,
                    }}
                  >
                    {Icon && <Icon size={16} className="text-brand-blue" />}
                    {language === 'es' ? service.titleEs : service.title}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const Icon = iconMap[service.icon];
        const isReversed = index % 2 !== 0;
        const highlights = language === 'es' ? service.highlightsEs : service.highlights;
        const relatedCase = service.relatedCases[0]
          ? caseStudies.find((cs) => cs.slug === service.relatedCases[0])
          : null;
        const impactStat = language === 'es' ? service.impactStatEs : service.impactStat;
        const imageAlt = language === 'es' ? service.imageAltEs : service.imageAlt;

        return (
          <section
            key={service.id}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="py-20 md:py-28 scroll-mt-20"
            style={{
              backgroundColor: isDark
                ? (index % 2 === 0 ? '#0A0E27' : '#111633')
                : (index % 2 === 0 ? '#FFFFFF' : '#F9FAFB'),
            }}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Text side */}
                <ScrollReveal delay={0} className={isReversed ? 'lg:order-2' : ''}>
                  <div>
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-6">
                      {Icon && (
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{
                            backgroundColor: isDark ? 'rgba(1,71,255,0.15)' : 'rgba(1,71,255,0.1)',
                          }}
                        >
                          <Icon className="w-7 h-7 text-brand-blue" />
                        </div>
                      )}
                      <h2
                        className="text-3xl md:text-4xl font-black tracking-tight"
                        style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                      >
                        {language === 'es' ? service.titleEs : service.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p
                      className="text-base md:text-lg leading-relaxed mb-8"
                      style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
                    >
                      {language === 'es' ? service.descriptionEs : service.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-4"
                        style={{ color: isDark ? '#00D4FF' : '#0147FF' }}
                      >
                        {t(language, 'services_what_we_deliver')}
                      </p>
                      <ul className="space-y-3">
                        {highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2
                              size={18}
                              className="text-brand-blue mt-0.5 flex-shrink-0"
                            />
                            <span
                              className="text-sm"
                              style={{ color: isDark ? '#C0C0C0' : '#374151' }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.technologies.map((tech, i) => (
                        <TechPill key={i} label={tech} variant="blue" />
                      ))}
                    </div>

                    {/* CTA */}
                    <Button href="/contact" variant="primary" size="md">
                      {t(language, 'services_talk_project')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </ScrollReveal>

                {/* Image side */}
                <ScrollReveal delay={200} className={isReversed ? 'lg:order-1' : ''}>
                  <div className="relative">
                    {/* Main image container */}
                    <div
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                      style={{
                        boxShadow: isDark
                          ? '0 8px 40px rgba(0,0,0,0.4), 0 0 60px -10px rgba(1,71,255,0.15)'
                          : '0 8px 40px rgba(0,0,0,0.1), 0 0 60px -10px rgba(1,71,255,0.06)',
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: isDark
                            ? 'linear-gradient(160deg, rgba(10,14,39,0.1) 0%, rgba(10,14,39,0.3) 50%, rgba(10,14,39,0.7) 100%)'
                            : 'linear-gradient(160deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.4) 100%)',
                        }}
                      />

                      {/* Brand tint overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(135deg, rgba(1,71,255,0.08) 0%, rgba(0,212,255,0.05) 100%)',
                          mixBlendMode: 'overlay',
                        }}
                      />

                      {/* Inner border glow (dark mode) */}
                      {isDark && (
                        <div
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          style={{
                            boxShadow: 'inset 0 0 0 1px rgba(1,71,255,0.2)',
                          }}
                        />
                      )}

                      {/* Impact stat badge */}
                      {impactStat && (
                        <div
                          className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[280px] rounded-xl p-4"
                          style={{
                            backgroundColor: isDark
                              ? 'rgba(10,14,39,0.85)'
                              : 'rgba(255,255,255,0.9)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                          }}
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <TrendingUp size={14} className="text-brand-cyan" />
                            <p
                              className="text-[10px] font-bold uppercase tracking-widest"
                              style={{ color: isDark ? '#00D4FF' : '#0147FF' }}
                            >
                              {t(language, 'services_real_impact')}
                            </p>
                          </div>
                          <p
                            className="text-sm font-bold leading-snug"
                            style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                          >
                            {impactStat}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Related case card */}
                    {relatedCase && (
                      <div
                        className="mt-4 rounded-xl p-5"
                        style={{
                          backgroundColor: isDark
                            ? 'rgba(17,22,51,0.8)'
                            : '#FFFFFF',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                          boxShadow: isDark
                            ? '0 4px 20px rgba(0,0,0,0.2)'
                            : '0 4px 16px rgba(0,0,0,0.06)',
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="min-w-0 flex-1">
                            <p
                              className="text-[10px] font-bold uppercase tracking-widest mb-1"
                              style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}
                            >
                              {t(language, 'services_related')}
                            </p>
                            <p
                              className="font-bold text-base truncate"
                              style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                            >
                              {relatedCase.client}
                            </p>
                            <p
                              className="text-xs mt-0.5 truncate"
                              style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                            >
                              {language === 'es' ? relatedCase.subtitleEs : relatedCase.subtitle}
                            </p>
                          </div>
                          <a
                            href={`/portfolio/${relatedCase.slug}`}
                            className="flex-shrink-0 ml-4 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                            style={{
                              backgroundColor: isDark
                                ? 'rgba(1,71,255,0.15)'
                                : 'rgba(1,71,255,0.1)',
                            }}
                          >
                            <ArrowRight size={16} className="text-brand-blue" />
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Decorative floating dot */}
                    <div
                      className="absolute -top-3 -right-3 w-6 h-6 rounded-full hidden lg:block"
                      style={{
                        backgroundColor: isDark ? 'rgba(0,212,255,0.2)' : 'rgba(1,71,255,0.15)',
                        animation: 'float-slow 6s ease-in-out infinite',
                      }}
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Section */}
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
                  {t(language, 'services_process_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'services_process_title')}
              </h2>
              <p
                className="text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
              >
                {t(language, 'services_process_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Process timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {[1, 2, 3, 4, 5].map((step, index) => {
              const StepIcon = processIcons[index];
              return (
                <ScrollReveal key={step} delay={index * 100}>
                  <div className="text-center relative">
                    {/* Connector arrow (not on last item) */}
                    {index < 4 && (
                      <div
                        className="hidden lg:block absolute top-10 -right-3 w-6 text-center"
                        style={{ color: isDark ? 'rgba(1,71,255,0.4)' : 'rgba(1,71,255,0.3)' }}
                      >
                        <ArrowRight size={16} />
                      </div>
                    )}

                    {/* Step icon */}
                    <div
                      className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                      style={{
                        backgroundColor: isDark ? 'rgba(1,71,255,0.12)' : 'rgba(1,71,255,0.08)',
                        border: `1px solid ${isDark ? 'rgba(1,71,255,0.25)' : 'rgba(1,71,255,0.15)'}`,
                      }}
                    >
                      <StepIcon className="w-8 h-8 text-brand-blue" />
                    </div>

                    {/* Step number */}
                    <p
                      className="text-xs font-mono mb-2"
                      style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}
                    >
                      0{step}
                    </p>

                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                    >
                      {t(language, `services_process_${step}_title` as TranslationKey)}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, `services_process_${step}_desc` as TranslationKey)}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              {t(language, 'services_final_cta_title')}
            </h2>
            <p
              className="text-lg mt-4 mb-10"
              style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
            >
              {t(language, 'services_final_cta_subtitle')}
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
