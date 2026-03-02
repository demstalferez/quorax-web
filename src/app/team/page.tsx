'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import DecorativeLogo from '@/components/ui/DecorativeLogo';
import TechPill from '@/components/ui/TechPill';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MetricsCounter from '@/components/ui/MetricsCounter';
import { skills } from '@/data/skills';
import { collaborators } from '@/data/team';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { t } from '@/lib/translations';
import {
  ArrowRight,
  Linkedin,
  Code2,
  Brain,
  Cloud,
  Database,
  Globe,
  Zap,
  BarChart3,
} from 'lucide-react';

const memberColors = ['#0147FF', '#00D4FF', '#6366F1', '#10B981', '#F59E0B', '#EC4899'];

const skillIcons: Record<string, React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>> = {
  Languages: Code2,
  'AI & Machine Learning': Brain,
  'Cloud & DevOps': Cloud,
  'Data & Databases': Database,
  'Web Development': Globe,
  Automation: Zap,
  'Business Intelligence': BarChart3,
};

const skillColors: Record<string, string> = {
  Languages: '#0147FF',
  'AI & Machine Learning': '#6366F1',
  'Cloud & DevOps': '#00D4FF',
  'Data & Databases': '#10B981',
  'Web Development': '#F59E0B',
  Automation: '#EF4444',
  'Business Intelligence': '#8B5CF6',
};

export default function TeamPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const statsData = [
    { value: 5, suffix: '+', label: t(language, 'team_stats_disciplines') },
    { value: 10, suffix: '+', label: t(language, 'team_stats_years') },
    { value: 3, suffix: '', label: t(language, 'team_stats_continents') },
    { value: 6, suffix: '', label: t(language, 'team_stats_specialists') },
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
                  {t(language, 'team_label')}
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'team_title')}
              </h1>
              <p
                className="text-lg mt-6 leading-relaxed max-w-xl"
                style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
              >
                {t(language, 'team_subtitle')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Stats Bar */}
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

      {/* 3. Team Grid */}
      <section
        className="py-24"
        style={{ backgroundColor: isDark ? '#111633' : '#F9FAFB' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'team_collaborators_label')}
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'team_collaborators_title')}
              </h2>
              <p
                className="text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
              >
                {t(language, 'team_collaborators_text')}
              </p>
            </div>
          </ScrollReveal>

          {/* Team cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1160px] mx-auto">
            {collaborators.map((member, index) => {
              const color = memberColors[index];
              return (
                <ScrollReveal key={member.id} delay={index * 100} className="h-full">
                  <div
                    className="rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:translate-y-[-4px] group"
                    style={{
                      backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                      borderTop: `3px solid ${color}`,
                      boxShadow: isDark
                        ? '0 4px 20px rgba(0,0,0,0.3)'
                        : '0 4px 20px rgba(0,0,0,0.06)',
                    }}
                  >
                    {/* Photo */}
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100%, (max-width: 1024px) 50%, 360px"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: isDark
                            ? 'linear-gradient(180deg, transparent 40%, rgba(10,14,39,0.8) 100%)'
                            : 'linear-gradient(180deg, transparent 40%, rgba(255,255,255,0.6) 100%)',
                        }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${color}12 0%, ${color}05 100%)`,
                          mixBlendMode: 'overlay',
                        }}
                      />
                      {isDark && (
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{ boxShadow: `inset 0 0 0 1px ${color}33` }}
                        />
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3
                        className="text-xl font-bold"
                        style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                      >
                        {member.name}
                      </h3>
                      <p className="text-brand-blue text-sm font-medium mt-1">
                        {language === 'es' ? member.roleEs : member.role}
                      </p>
                      <p
                        className="text-sm leading-relaxed mt-3"
                        style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                      >
                        {language === 'es' ? member.bioEs : member.bio}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {member.specialties.map((s) => (
                          <TechPill key={s} label={s} variant={index % 2 === 0 ? 'cyan' : 'blue'} />
                        ))}
                      </div>
                      {member.linkedin && (
                        <div
                          className="flex items-center gap-3 mt-auto pt-5"
                          style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'}` }}
                        >
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-300 hover:text-brand-cyan"
                            style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                          >
                            <Linkedin size={18} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* CTA Button */}
          <ScrollReveal>
            <div className="text-center mt-16">
              <Button href="/contact" variant="primary">
                {t(language, 'team_collaborators_cta')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Skills & Technologies */}
      <section
        className="py-24"
        style={{ backgroundColor: isDark ? '#0A0E27' : '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand-cyan/60" />
                <span className="text-brand-cyan text-xs font-mono tracking-[0.2em] uppercase">
                  {t(language, 'about_skills_label')}
                </span>
                <div className="h-px w-10 bg-brand-cyan/60" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                {t(language, 'about_skills_title')}
              </h2>
              <p
                className="text-lg mt-4"
                style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
              >
                {t(language, 'team_skills_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => {
              const variant = groupIndex % 2 === 0 ? 'cyan' : 'blue';
              const Icon = skillIcons[skillGroup.category];
              const color = skillColors[skillGroup.category] || '#0147FF';

              return (
                <ScrollReveal key={skillGroup.category} delay={groupIndex * 80}>
                  <div
                    className="rounded-xl p-6 h-full transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      backgroundColor: isDark ? 'rgba(10,14,39,0.8)' : '#FFFFFF',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                      boxShadow: isDark
                        ? '0 4px 20px rgba(0,0,0,0.3)'
                        : '0 4px 20px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        {Icon && <Icon className="w-5 h-5" style={{ color }} />}
                      </div>
                      <h3
                        className="text-lg font-bold"
                        style={{ color: isDark ? '#FFFFFF' : '#111827' }}
                      >
                        {language === 'es' ? skillGroup.categoryEs : skillGroup.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <TechPill key={skill} label={skill} variant={variant} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
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
              {t(language, 'team_cta_title')}
            </h2>
            <p
              className="text-lg mt-4 mb-10"
              style={{ color: isDark ? '#8E8E93' : '#4B5563' }}
            >
              {t(language, 'team_cta_subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                {t(language, 'hero_cta_primary')}
                <ArrowRight className="w-4 h-4 ml-2" />
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
