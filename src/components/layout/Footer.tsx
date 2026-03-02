'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { t } from '@/lib/translations';

export function Footer() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const quickLinks = [
    { label: t(language, 'nav_home'), href: '/' },
    { label: t(language, 'nav_services'), href: '/services' },
    { label: t(language, 'nav_portfolio'), href: '/portfolio' },
    { label: t(language, 'nav_training'), href: '/training' },
    { label: t(language, 'nav_team'), href: '/team' },
    { label: t(language, 'nav_boost'), href: '/boost' },
    { label: t(language, 'nav_contact'), href: '/contact' },
  ];

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:deme@quorax.ai',
      text: 'deme@quorax.ai',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/demstalfer',
      text: 'LinkedIn',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/demstalferez',
      text: 'GitHub',
    },
  ];

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: isDark ? '#0A0E27' : '#F9FAFB',
        borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div>
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4">
              <Image
                src="/images/quorax-logo.svg"
                alt="Quorax Logo"
                width={32}
                height={32}
              />
              <span
                className="font-bold text-lg tracking-wider"
                style={{ color: isDark ? '#FFFFFF' : '#111827' }}
              >
                QUORAX
              </span>
            </Link>

            <p
              className="text-sm mb-4"
              style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
            >
              {t(language, 'footer_tagline')}
            </p>

            <p
              className="text-xs"
              style={{ color: isDark ? '#8E8E93' : '#9CA3AF' }}
            >
              {t(language, 'footer_copyright')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: isDark ? '#FFFFFF' : '#111827' }}
            >
              {t(language, 'footer_quick_links')}
            </h3>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-300 hover:text-brand-cyan"
                  style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: isDark ? '#FFFFFF' : '#111827' }}
            >
              {t(language, 'footer_connect')}
            </h3>

            <div className="flex flex-col gap-3">
              {/* Address */}
              <div
                className="flex items-start gap-2 text-sm"
                style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
              >
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>
                  {t(language, 'footer_address')}<br />
                  {t(language, 'footer_address_city')}
                </span>
              </div>

              {/* Phone */}
              <a
                href="tel:+18653076200"
                className="flex items-center gap-2 text-sm transition-colors duration-300 hover:text-brand-cyan"
                style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
              >
                <Phone size={16} />
                <span>{t(language, 'footer_phone')}</span>
              </a>

              {/* Social links */}
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.label !== 'Email' ? '_blank' : undefined}
                    rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-sm transition-colors duration-300 hover:text-brand-cyan"
                    style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
                  >
                    <Icon size={16} />
                    <span>{social.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="border-t mt-12 pt-6 text-center text-xs"
          style={{
            borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
            color: isDark ? '#8E8E93' : '#9CA3AF',
          }}
        >
          {t(language, 'footer_location')}
        </div>
      </div>
    </footer>
  );
}
