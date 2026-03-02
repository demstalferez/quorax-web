'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import TechPill from '@/components/ui/TechPill';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { caseStudies } from '@/data/cases';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { t } from '@/lib/translations';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export default function CaseStudyPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const params = useParams();
  const slug = params.slug as string;

  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <main
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <p style={{ color: isDark ? '#8E8E93' : '#6B7280' }} className="text-lg">
          {t(language, 'case_not_found')}
        </p>
      </main>
    );
  }

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const previousCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCase = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const subtitle = language === 'es' ? caseStudy.subtitleEs : caseStudy.subtitle;
  const sector = language === 'es' ? caseStudy.sectorEs : caseStudy.sector;
  const challenge = language === 'es' ? caseStudy.challengeEs : caseStudy.challenge;
  const approach = language === 'es' ? caseStudy.approachEs : caseStudy.approach;
  const deliverables = language === 'es' ? caseStudy.deliverablesEs : caseStudy.deliverables;
  const impact = language === 'es' ? caseStudy.impactEs : caseStudy.impact;
  const imageAlt = language === 'es' ? caseStudy.imageAltEs : caseStudy.imageAlt;
  const duration = language === 'es' ? caseStudy.durationEs : caseStudy.duration;

  return (
    <main>
      {/* Hero with Image */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px]">
        <Image
          src={caseStudy.image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-5xl mx-auto px-6 pb-12 w-full">
            <ScrollReveal>
              <Link
                href="/portfolio"
                className="group text-white/70 text-sm hover:text-white transition-colors mb-6 inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {t(language, 'case_back_portfolio')}
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.tags.map((tag, index) => (
                  <TechPill key={index} label={tag} variant="cyan" />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-sm uppercase tracking-widest mb-3" style={{ color: caseStudy.color }}>
                {caseStudy.client}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {subtitle}
              </h1>
              <div className="flex items-center gap-4 mt-3">
                <p className="text-white/60 text-base">{sector}</p>
                <span className="text-white/30">|</span>
                <span className="inline-flex items-center gap-1.5 text-white/60 text-base">
                  <Clock size={14} />
                  {duration}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section
        className="relative z-10 -mt-8 px-6"
        style={{ marginBottom: 0 }}
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 text-center"
                  style={{
                    backgroundColor: isDark ? 'rgba(17,22,51,0.95)' : '#FFFFFF',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    boxShadow: isDark
                      ? '0 4px 30px rgba(0,0,0,0.4)'
                      : '0 4px 20px rgba(0,0,0,0.08)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <p className="text-3xl font-black" style={{ color: caseStudy.color }}>
                    {metric.value}
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                  >
                    {language === 'es' ? metric.labelEs : metric.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Challenge */}
      <section
        className="py-16"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: isDark ? '#00D4FF' : '#0147FF' }}
                >
                  {t(language, 'case_challenge')}
                </p>
                <div className="w-12 h-1 rounded" style={{ backgroundColor: caseStudy.color }} />
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{ color: isDark ? '#C0C0C0' : '#374151' }}
              >
                {challenge}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Approach */}
      <section
        className="py-16"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: isDark ? '#00D4FF' : '#0147FF' }}
                >
                  {t(language, 'case_approach')}
                </p>
                <div className="w-12 h-1 rounded" style={{ backgroundColor: caseStudy.color }} />
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{ color: isDark ? '#C0C0C0' : '#374151' }}
              >
                {approach}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Deliverables */}
      <section
        className="py-16"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-8"
              style={{ color: isDark ? '#00D4FF' : '#0147FF' }}
            >
              {t(language, 'case_deliverables')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: caseStudy.color }}
                  />
                  <span
                    className="text-base"
                    style={{ color: isDark ? '#C0C0C0' : '#374151' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        className="py-16"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-8"
              style={{ color: isDark ? '#00D4FF' : '#0147FF' }}
            >
              {t(language, 'case_tech')}
            </p>
            <div className="flex flex-wrap gap-3">
              {caseStudy.techStack.map((tech, i) => (
                <TechPill key={i} label={tech} variant="blue" />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact */}
      <section
        className="py-16"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div
              className="rounded-2xl p-8 lg:p-12"
              style={{
                backgroundColor: isDark ? `${caseStudy.color}08` : `${caseStudy.color}06`,
                borderLeft: `4px solid ${caseStudy.color}`,
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: caseStudy.color }}
              >
                {t(language, 'case_impact')}
              </p>
              <p
                className="text-xl leading-relaxed font-medium"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {impact}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Previous / Next Navigation */}
      <section
        className="py-12"
        style={{
          backgroundColor: isDark ? '#111633' : '#F9FAFB',
          borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)'}`,
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousCase ? (
              <Link href={`/portfolio/${previousCase.slug}`} className="group">
                <div
                  className="flex items-center gap-4 p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                  }}
                >
                  <ArrowLeft
                    className="w-5 h-5 flex-shrink-0 transition-transform group-hover:-translate-x-1"
                    style={{ color: previousCase.color }}
                  />
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={previousCase.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-xs mb-1"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, 'case_previous')}
                    </p>
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                    >
                      {language === 'es' ? previousCase.subtitleEs : previousCase.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextCase ? (
              <Link href={`/portfolio/${nextCase.slug}`} className="group">
                <div
                  className="flex items-center justify-end gap-4 p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-right"
                  style={{
                    backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                  }}
                >
                  <div className="min-w-0">
                    <p
                      className="text-xs mb-1"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {t(language, 'case_next')}
                    </p>
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                    >
                      {language === 'es' ? nextCase.subtitleEs : nextCase.subtitle}
                    </p>
                  </div>
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={nextCase.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <ArrowRight
                    className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1"
                    style={{ color: nextCase.color }}
                  />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #0A0E27 0%, #111633 100%)'
            : 'linear-gradient(135deg, #EEF2FF 0%, #F8FAFC 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight"
              style={{ color: isDark ? '#FFFFFF' : '#111827' }}
            >
              {t(language, 'case_cta_title')}
            </h2>
            <p
              className="text-lg mt-4 mb-10"
              style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
            >
              {t(language, 'case_cta_subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                {t(language, 'hero_cta_primary')}
              </Button>
              <Button href="/portfolio" variant="ghost" size="lg">
                {t(language, 'portfolio_all_projects')}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
