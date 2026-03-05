'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TechPill from '@/components/ui/TechPill';
import Button from '@/components/ui/Button';
import DecorativeLogo from '@/components/ui/DecorativeLogo';
import MetricsCounter from '@/components/ui/MetricsCounter';
import ContactForm from '@/components/ui/ContactForm';
import {
  trainingPrograms,
  methodologySteps,
  targetAudiences,
  careerOutcomes,
  upgradeHubPartnership,
} from '@/data/training';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { t } from '@/lib/translations';
import {
  Brain,
  BarChart3,
  Code2,
  Sparkles,
  Hammer,
  Users,
  Target,
  Cloud,
  Award,
  Building2,
  BookOpen,
  UserCog,
  Landmark,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Layers,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/18653076200';

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>> = {
  Brain,
  BarChart3,
  Code2,
  Sparkles,
  Hammer,
  Users,
  Target,
  Cloud,
  Award,
  Building2,
  BookOpen,
  UserCog,
  Landmark,
};

const moduleColors = ['#0147FF', '#00D4FF', '#6366F1', '#10B981'];
const audienceColors = ['#0147FF', '#6366F1', '#10B981', '#F59E0B'];

export default function TrainingPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const statsData = [
    { value: 3000, suffix: '+', label: t(language, 'training_stats_students') },
    { value: 90, suffix: '%', label: t(language, 'training_stats_placement') },
    { value: 500, suffix: '+', label: t(language, 'training_stats_institutions') },
    { value: 18, suffix: '', label: t(language, 'training_stats_bootcamp_weeks') },
  ];

  return (
    <main>
      {/* Hero — 2-column with image */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <DecorativeLogo isDark={isDark} position="top-right" size={350} opacity={0.03} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-brand-cyan/60" />
                  <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                    {t(language, 'training_hero_label')}
                  </span>
                </div>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
                  style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                >
                  {t(language, 'training_hero_title')}
                </h1>
                <p
                  className="text-lg mt-6 leading-relaxed max-w-xl"
                  style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
                >
                  {t(language, 'training_hero_subtitle')}
                </p>

                {/* Key tech pills */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {['Python', 'SQL', 'Power BI', 'Microsoft Fabric', 'Azure ML', 'LLMs & RAG', 'YOLO', 'n8n'].map((tech) => (
                    <TechPill key={tech} label={tech} variant="blue" />
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <Button href="#contact-form" variant="primary" size="lg">
                    {t(language, 'training_cta_primary')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <a
                    href={upgradeHubPartnership.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:opacity-80"
                    style={{
                      color: isDark ? '#8E8E93' : '#6B7280',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)'}`,
                    }}
                  >
                    {t(language, 'training_partner_cta')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Hero image */}
            <ScrollReveal delay={200}>
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                style={{
                  boxShadow: isDark
                    ? '0 8px 40px rgba(0,0,0,0.4), 0 0 60px -10px rgba(1,71,255,0.15)'
                    : '0 8px 40px rgba(0,0,0,0.1)',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                  alt={language === 'es' ? 'Estudiantes colaborando en un entorno de formación tecnológica' : 'Students collaborating in a tech training environment'}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: isDark
                      ? 'linear-gradient(160deg, rgba(10,14,39,0.1) 0%, rgba(10,14,39,0.4) 100%)'
                      : 'linear-gradient(160deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%)',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(1,71,255,0.08) 0%, rgba(0,212,255,0.05) 100%)',
                    mixBlendMode: 'overlay',
                  }}
                />
                {isDark && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(1,71,255,0.2)' }}
                  />
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #111633 0%, #0A0E27 50%, #111633 100%)'
            : 'linear-gradient(135deg, #EEF2FF 0%, #F8FAFC 50%, #EEF2FF 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, i) => (
              <MetricsCounter
                key={i}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Programs — Prework + 2x2 grid */}
      <section
        className="py-20"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'training_programs_label')}
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'training_programs_title')}
              </h2>
              <p
                className="text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
              >
                {t(language, 'training_programs_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Prework banner */}
          <ScrollReveal>
            <div
              className="rounded-2xl p-6 mb-6 flex items-start gap-4"
              style={{
                backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                boxShadow: isDark
                  ? '0 4px 20px rgba(0,0,0,0.3)'
                  : '0 4px 20px rgba(0,0,0,0.06)',
                borderLeft: '3px solid #8B5CF6',
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(139,92,246,0.12)' }}
              >
                <Layers className="w-5 h-5" style={{ color: '#8B5CF6' }} />
              </div>
              <div>
                <h3
                  className="font-bold text-base"
                  style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                >
                  {t(language, 'training_programs_prework')}
                </h3>
                <p
                  className="text-sm mt-1 leading-relaxed"
                  style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                >
                  {t(language, 'training_programs_prework_desc')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Bootcamp modules — 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingPrograms.map((module, index) => {
              const Icon = iconMap[module.icon];
              const color = moduleColors[index];
              const topics = language === 'es' ? module.topicsEs : module.topics;
              const isModule = index < 3;

              return (
                <ScrollReveal key={module.id} delay={index * 100}>
                  <div
                    className="rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                      boxShadow: isDark
                        ? '0 4px 20px rgba(0,0,0,0.3)'
                        : '0 4px 20px rgba(0,0,0,0.06)',
                      borderTop: `3px solid ${color}`,
                    }}
                  >
                    {/* Header row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        {Icon && <Icon className="w-6 h-6" style={{ color }} />}
                        {isModule && (
                          <span
                            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                            style={{ backgroundColor: color }}
                          >
                            {index + 1}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3
                          className="text-lg font-bold"
                          style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                        >
                          {isModule && <span className="text-xs font-mono mr-2" style={{ color }}>{language === 'es' ? 'Módulo' : 'Module'} {index + 1}</span>}
                          {language === 'es' ? module.titleEs : module.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="text-xs" style={{ color: isDark ? '#8E8E93' : '#6B7280' }}>
                            {language === 'es' ? module.durationEs : module.duration}
                          </span>
                          <span className="text-xs" style={{ color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }}>|</span>
                          <span className="text-xs" style={{ color: isDark ? '#8E8E93' : '#6B7280' }}>
                            {language === 'es' ? module.levelEs : module.level}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {language === 'es' ? module.descriptionEs : module.description}
                    </p>

                    {/* Topics */}
                    <div className="flex-1">
                      <ul className="space-y-2">
                        {topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color }} />
                            <span
                              className="text-sm"
                              style={{ color: isDark ? '#C0C0C0' : '#374151' }}
                            >
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certification badge */}
                    {module.certification && (
                      <div
                        className="mt-5 pt-4 flex items-center gap-2"
                        style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
                      >
                        <Award size={14} className="text-brand-cyan flex-shrink-0" />
                        <span className="text-xs" style={{ color: isDark ? '#00D4FF' : '#0147FF' }}>
                          {t(language, 'training_programs_cert_label')}: {language === 'es' ? module.certificationEs : module.certification}
                        </span>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section
        className="py-20"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'training_method_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'training_method_title')}
              </h2>
              <p
                className="text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
              >
                {t(language, 'training_method_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Center line */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
              style={{
                background: isDark
                  ? 'linear-gradient(180deg, rgba(1,71,255,0.4) 0%, rgba(0,212,255,0.2) 100%)'
                  : 'linear-gradient(180deg, rgba(1,71,255,0.25) 0%, rgba(0,212,255,0.1) 100%)',
              }}
            />

            <div className="space-y-12">
              {methodologySteps.map((step, index) => {
                const Icon = iconMap[step.icon];
                const isEven = index % 2 === 0;

                return (
                  <ScrollReveal key={step.id} delay={index * 100}>
                    <div className="relative flex items-start gap-6 md:gap-0">
                      {/* Dot on timeline */}
                      <div
                        className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1.5 md:-translate-x-1.5 top-6 z-10"
                        style={{
                          backgroundColor: '#0147FF',
                          boxShadow: isDark ? '0 0 12px rgba(1,71,255,0.5)' : '0 0 8px rgba(1,71,255,0.3)',
                        }}
                      />

                      <div className={`
                        ml-14 md:ml-0 md:w-1/2
                        ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}
                      `}>
                        <div
                          className="rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px]"
                          style={{
                            backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                            boxShadow: isDark
                              ? '0 4px 20px rgba(0,0,0,0.3)'
                              : '0 4px 16px rgba(0,0,0,0.06)',
                          }}
                        >
                          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{
                                backgroundColor: isDark ? 'rgba(1,71,255,0.12)' : 'rgba(1,71,255,0.08)',
                              }}
                            >
                              {Icon && <Icon className="w-5 h-5 text-brand-blue" />}
                            </div>
                            <div className={isEven ? 'md:text-right flex-1' : 'flex-1'}>
                              <span
                                className="text-[10px] font-mono block"
                                style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}
                              >
                                0{index + 1}
                              </span>
                              <h3
                                className="font-bold text-base"
                                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                              >
                                {language === 'es' ? step.titleEs : step.title}
                              </h3>
                            </div>
                          </div>
                          <p
                            className={`text-sm leading-relaxed ${isEven ? 'md:text-right' : ''}`}
                            style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                          >
                            {language === 'es' ? step.descriptionEs : step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Hub Partnership */}
      <section
        className="py-20"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-10 bg-brand-cyan/60" />
              <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                {t(language, 'training_partner_label')}
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <ScrollReveal>
              <div
                className="relative aspect-[16/10] rounded-2xl overflow-hidden group"
                style={{
                  boxShadow: isDark
                    ? '0 8px 40px rgba(0,0,0,0.4), 0 0 60px -15px rgba(1,71,255,0.15)'
                    : '0 8px 40px rgba(0,0,0,0.1)',
                }}
              >
                <Image
                  src={upgradeHubPartnership.image}
                  alt={language === 'es' ? upgradeHubPartnership.imageAltEs : upgradeHubPartnership.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: isDark
                      ? 'linear-gradient(160deg, rgba(10,14,39,0.05) 0%, rgba(10,14,39,0.3) 100%)'
                      : 'linear-gradient(160deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%)',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={200}>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-black tracking-tight mb-2"
                  style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                >
                  {t(language, 'training_partner_title')}
                </h2>

                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: '#0147FF' }}
                >
                  {language === 'es' ? upgradeHubPartnership.roleEs : upgradeHubPartnership.role}
                </p>

                <div className="mb-4">
                  <TechPill label={t(language, 'training_partner_selected')} variant="cyan" />
                </div>

                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
                >
                  {t(language, 'training_partner_description')}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {(language === 'es' ? upgradeHubPartnership.highlightsEs : upgradeHubPartnership.highlights).map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-brand-cyan flex-shrink-0" />
                      <span
                        className="text-sm"
                        style={{ color: isDark ? '#C0C0C0' : '#374151' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Partner stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {upgradeHubPartnership.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-2xl font-black text-brand-blue">
                        {stat.value}
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                      >
                        {language === 'es' ? stat.labelEs : stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* External link */}
                <a
                  href={upgradeHubPartnership.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-brand-blue/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t(language, 'training_partner_cta')}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
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
                  {t(language, 'training_careers_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'training_careers_title')}
              </h2>
              <p
                className="text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
              >
                {t(language, 'training_careers_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerOutcomes.map((career, index) => {
              const Icon = iconMap[career.icon];
              return (
                <ScrollReveal key={career.id} delay={index * 80}>
                  <div
                    className="rounded-xl p-5 flex items-start gap-4 transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                      boxShadow: isDark
                        ? '0 4px 20px rgba(0,0,0,0.3)'
                        : '0 4px 20px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: isDark ? 'rgba(1,71,255,0.12)' : 'rgba(1,71,255,0.08)' }}
                    >
                      {Icon && <Icon className="w-5 h-5 text-brand-blue" />}
                    </div>
                    <div>
                      <h3
                        className="font-bold text-base"
                        style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                      >
                        {language === 'es' ? career.titleEs : career.title}
                      </h3>
                      <p
                        className="text-sm mt-1 leading-relaxed"
                        style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                      >
                        {language === 'es' ? career.descriptionEs : career.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section
        className="py-20"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'training_audience_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'training_audience_title')}
              </h2>
              <p
                className="text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
              >
                {t(language, 'training_audience_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((audience, index) => {
              const Icon = iconMap[audience.icon];
              const color = audienceColors[index];
              return (
                <ScrollReveal key={audience.id} delay={index * 100}>
                  <div
                    className="rounded-xl p-6 h-full text-center transition-all duration-300 hover:translate-y-[-2px] group"
                    style={{
                      backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                      boxShadow: isDark
                        ? '0 4px 20px rgba(0,0,0,0.3)'
                        : '0 4px 20px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div
                      className="w-10 h-1 rounded-full mx-auto mb-5"
                      style={{ backgroundColor: color }}
                    />
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      {Icon && <Icon className="w-7 h-7" style={{ color }} />}
                    </div>
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                    >
                      {language === 'es' ? audience.titleEs : audience.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                    >
                      {language === 'es' ? audience.descriptionEs : audience.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form — Inline */}
      <section
        id="contact-form"
        className="py-20"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — 3 columns */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-10 bg-brand-cyan/60" />
                    <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                      {t(language, 'training_form_label')}
                    </span>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-black tracking-tight"
                    style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                  >
                    {t(language, 'training_form_title')}
                  </h2>
                  <p
                    className="text-base mt-2"
                    style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
                  >
                    {t(language, 'training_form_subtitle')}
                  </p>
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

            {/* Sidebar — 2 columns */}
            <div className="lg:col-span-2 flex flex-col justify-end space-y-8">
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
                    {language === 'es' ? 'Prefiere WhatsApp?' : 'Prefer WhatsApp?'}
                  </h3>
                  <p
                    className="text-sm mt-2 leading-relaxed"
                    style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                  >
                    {language === 'es'
                      ? 'Escríbenos directamente por WhatsApp y te respondemos en menos de 24 horas.'
                      : 'Message us directly on WhatsApp and we will reply within 24 hours.'}
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
                      {t(language, 'training_cta_whatsapp')}
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Upgrade Hub contact info */}
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-brand-cyan/60" />
                    <span className="text-brand-cyan text-[10px] font-mono tracking-[0.2em] uppercase">
                      Upgrade Hub
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                  >
                    {upgradeHubPartnership.contact.address}
                  </p>
                  <div className="mt-3 space-y-1">
                    <a
                      href={`tel:${upgradeHubPartnership.contact.phone.replace(/\s/g, '')}`}
                      className="text-sm block transition-colors hover:text-brand-cyan"
                      style={{ color: isDark ? '#C0C0C0' : '#374151' }}
                    >
                      {upgradeHubPartnership.contact.phone}
                    </a>
                    <a
                      href={`mailto:${upgradeHubPartnership.contact.email}`}
                      className="text-sm block transition-colors hover:text-brand-cyan"
                      style={{ color: isDark ? '#C0C0C0' : '#374151' }}
                    >
                      {upgradeHubPartnership.contact.email}
                    </a>
                  </div>
                  <a
                    href={upgradeHubPartnership.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold mt-4 transition-colors hover:text-brand-blue"
                    style={{ color: isDark ? '#0147FF' : '#0147FF' }}
                  >
                    {t(language, 'training_partner_cta')}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
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
              {t(language, 'training_cta_title')}
            </h2>
            <p
              className="text-lg mt-4 mb-10"
              style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
            >
              {t(language, 'training_cta_subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#contact-form" variant="primary" size="lg">
                {t(language, 'training_cta_primary')}
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              >
                <MessageCircle size={18} />
                {t(language, 'training_cta_whatsapp')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
