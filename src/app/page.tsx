'use client';

import { useMemo } from 'react';
import Button from '@/components/ui/Button';
import ServicesCarousel from '@/components/ui/ServicesCarousel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import HeroBackground from '@/components/ui/HeroBackground';
import RotatingText from '@/components/ui/RotatingText';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { t } from '@/lib/translations';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const serviceItems = useMemo(
    () => [
      t(language, 'hero_service_1'),
      t(language, 'hero_service_2'),
      t(language, 'hero_service_3'),
      t(language, 'hero_service_4'),
      t(language, 'hero_service_5'),
    ],
    [language]
  );

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Fine grid pattern */}
          <div className="absolute inset-0 hero-grid" />
          {/* Canvas particle network */}
          <HeroBackground />
          {/* Subtle ambient glow (dark mode only) */}
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/[0.03] rounded-full blur-3xl dark-only-glow"
            style={{ animation: 'float-slow 15s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/[0.02] rounded-full blur-3xl dark-only-glow"
            style={{ animation: 'float-slow-reverse 18s ease-in-out infinite' }}
          />
          {/* Radial vignette for depth */}
          <div className="absolute inset-0 hero-vignette" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text content */}
            <div>
              {/* Eyebrow */}
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-brand-cyan/60" />
                  <p className="hero-eyebrow text-brand-cyan/80 text-xs font-mono tracking-[0.2em] uppercase">
                    {t(language, 'hero_eyebrow')}
                  </p>
                </div>
              </ScrollReveal>

              {/* Main headline */}
              <ScrollReveal delay={100}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
                  <span className="hero-heading text-white">{t(language, 'hero_title_line1')}</span>
                  <br />
                  <span className="text-brand-blue">{t(language, 'hero_title_line2')}</span>
                </h1>
              </ScrollReveal>

              {/* Rotating service line */}
              <ScrollReveal delay={200}>
                <div className="mt-8 text-base md:text-lg font-mono h-8 flex items-center">
                  <span className="hero-prompt text-white/30 select-none mr-2">{'>'}</span>
                  <RotatingText
                    items={serviceItems}
                    className="text-brand-cyan"
                  />
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal delay={300}>
                <p className="text-xl md:text-2xl font-bold text-white mt-8 max-w-xl leading-snug hero-description">
                  {t(language, 'hero_subtitle')}
                </p>
              </ScrollReveal>

              {/* CTAs */}
              <ScrollReveal delay={400}>
                <div className="flex flex-wrap gap-4 mt-10">
                  <Button href="/contact" variant="primary" size="lg">
                    {t(language, 'hero_cta_primary')}
                  </Button>
                  <Button href="/portfolio" variant="ghost" size="lg">
                    {t(language, 'hero_cta_secondary')}
                  </Button>
                </div>
              </ScrollReveal>

            </div>

            {/* Right — 3D Q Logo */}
            <div className="hidden lg:flex items-center justify-center">
              <ScrollReveal delay={300}>
                <div style={{ perspective: '1200px' }}>
                  <div
                    className="relative"
                    style={{
                      animation: 'hero-q-float 8s ease-in-out infinite',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/quorax-logo.svg"
                      alt=""
                      width={520}
                      height={520}
                      className="select-none hero-logo-filter"
                      aria-hidden="true"
                      draggable={false}
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </div>
        {/* Services — same background, subtle lighten as you scroll */}
        {/* Services carousel */}
        <div className="relative pb-24">
          <div className="absolute inset-0 pointer-events-none hero-bottom-fade" />
          <div className="relative z-10">
            <ServicesCarousel />
          </div>
        </div>
      </section>



      {/* Metrics Bar */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #111633 0%, #0A0E27 50%, #111633 100%)'
            : 'linear-gradient(135deg, #EEF2FF 0%, #F8FAFC 50%, #EEF2FF 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { value: '10+', label: t(language, 'home_metrics_years') },
                { value: '50K+', label: t(language, 'home_metrics_lives') },
                { value: '100%', label: t(language, 'home_metrics_retention') },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-black text-brand-blue">{stat.value}</p>
                  <p className="text-sm mt-1 text-gray-mid">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Active Projects Banner */}
      <section
        className="py-10"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <p
              className="text-center text-sm md:text-base font-medium tracking-wide"
              style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
            >
              {language === 'es'
                ? 'Proyectos activos en Asia, Europa y América'
                : 'Active projects across Asia, Europe & the Americas'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sector Impact */}
      <section
        className="py-20"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'impact_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'impact_title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                metric: '50K+',
                sector: language === 'es' ? 'Tercer Sector' : 'Third Sector',
                desc: language === 'es'
                  ? 'Registros protegidos. Plataforma web, sistema de IA RAG y auditoría de seguridad integral para una ONG nacional.'
                  : 'Records protected. Web platform, RAG AI system, and comprehensive security audit for a national NGO.',
                color: '#0147FF',
              },
              {
                metric: '500+',
                sector: language === 'es' ? 'Investigación Pública' : 'Public Research',
                desc: language === 'es'
                  ? 'Estudiantes formados en IA. Currículo, plataforma cloud y programa de formación para un organismo científico nacional.'
                  : 'Students trained in AI. Curriculum, cloud platform, and training program for a national science institution.',
                color: '#00D4FF',
              },
              {
                metric: '15K+',
                sector: language === 'es' ? 'Educación Superior' : 'Higher Education',
                desc: language === 'es'
                  ? 'Usuarios concurrentes soportados. Plataforma académica que unificó 5 sistemas heredados con 95% de adopción.'
                  : 'Concurrent users supported. Academic platform that unified 5 legacy systems with 95% faculty adoption.',
                color: '#8B5CF6',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.sector} delay={index * 100}>
                <div
                  className="rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:translate-y-[-2px]"
                  style={{
                    backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    boxShadow: isDark
                      ? '0 4px 20px rgba(0,0,0,0.3)'
                      : '0 4px 20px rgba(0,0,0,0.06)',
                    borderTop: `3px solid ${item.color}`,
                  }}
                >
                  <p
                    className="text-4xl font-black mb-1"
                    style={{ color: item.color }}
                  >
                    {item.metric}
                  </p>
                  <p
                    className="text-xs font-mono uppercase tracking-widest mb-4"
                    style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                  >
                    {item.sector}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: isDark ? '#C0C0C0' : '#4B5563' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clerk Banner */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div
              className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(1,71,255,0.1) 0%, rgba(0,212,255,0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(1,71,255,0.06) 0%, rgba(0,212,255,0.03) 100%)',
                border: `1px solid ${isDark ? 'rgba(1,71,255,0.2)' : 'rgba(1,71,255,0.12)'}`,
              }}
            >
              <div className="flex-1">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ backgroundColor: '#0147FF', color: '#FFFFFF' }}
                >
                  {t(language, 'home_clerk_label')}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-black tracking-tight"
                  style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                >
                  {t(language, 'home_clerk_title')}
                </h3>
                <p
                  className="text-sm md:text-base mt-3 max-w-lg leading-relaxed"
                  style={{ color: isDark ? '#C0C0C0' : '#4B5563' }}
                >
                  {t(language, 'home_clerk_subtitle')}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button href="/clerk" variant="primary" size="lg">
                  {t(language, 'home_clerk_cta')}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-brand-cyan/60" />
                  <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                    {t(language, 'cta_label')}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black leading-tight cta-heading">
                  {t(language, 'cta_title')}
                </h2>
                <p className="text-lg cta-description mt-6 max-w-lg leading-relaxed">
                  {t(language, 'cta_subtitle')}
                </p>
                <div className="flex flex-wrap gap-4 mt-10">
                  <Button href="/contact" variant="primary" size="lg">
                    {t(language, 'hero_cta_primary')}
                  </Button>
                  <Button href="/portfolio" variant="ghost" size="lg">
                    {t(language, 'hero_cta_secondary')}
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Process Steps */}
            <ScrollReveal delay={200}>
              <div className="space-y-4">
                {[
                  { step: '01', title: t(language, 'home_process_1'), desc: t(language, 'home_process_1_desc') },
                  { step: '02', title: t(language, 'home_process_2'), desc: t(language, 'home_process_2_desc') },
                  { step: '03', title: t(language, 'home_process_3'), desc: t(language, 'home_process_3_desc') },
                  { step: '04', title: t(language, 'home_process_4'), desc: t(language, 'home_process_4_desc') },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 p-4 rounded-xl cta-process-card transition-all duration-300 hover:translate-x-1">
                    <span className="text-brand-blue font-mono text-sm font-bold mt-0.5">{item.step}</span>
                    <div>
                      <p className="font-bold cta-heading text-sm">{item.title}</p>
                      <p className="text-sm cta-description mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
