'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { t } from '@/lib/translations';

function FlagUS({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className={className}>
      <path fill="#bd3d44" d="M0 0h640v37h-640zm0 73.9h640v37h-640zm0 73.8h640v37h-640zm0 73.8h640v37h-640zm0 74h640v36.8h-640zm0 73.7h640v37h-640zm0 73.9h640v37h-640z" />
      <path fill="#fff" d="M0 37h640v36.9h-640zm0 73.8h640v36.9h-640zm0 73.8h640v37h-640zm0 73.9h640v37h-640zm0 73.8h640v37h-640zm0 73.8h640v37h-640z" />
      <path fill="#192f5d" d="M0 0h364.8v258.5h-364.8z" />
      <g fill="#fff">
        <g id="us-d"><g id="us-c"><g id="us-b"><g id="us-a"><path d="M30.4 11l3.4 10.3h10.6l-8.6 6.3 3.3 10.3-8.7-6.4-8.6 6.3 3.2-10.3-8.5-6.3h10.6z" /><path d="M71 11l3.4 10.3h10.6l-8.6 6.3 3.3 10.3-8.7-6.4-8.6 6.3 3.2-10.3-8.5-6.3h10.6z" /></g><path d="M152 11l3.4 10.3h10.6l-8.5 6.3 3.2 10.3-8.6-6.4-8.7 6.3 3.3-10.3-8.6-6.3h10.6z" /></g><path d="M232.8 11l3.3 10.3h10.6l-8.5 6.3 3.2 10.3-8.6-6.4-8.7 6.3 3.3-10.3-8.6-6.3h10.7z" /></g><path d="M313.5 11l3.3 10.3h10.6l-8.5 6.3 3.2 10.3-8.6-6.4-8.7 6.3 3.3-10.3-8.5-6.3h10.6z" /></g>
        <g id="us-h"><g id="us-g"><g id="us-f"><path d="M50.6 36.9l3.4 10.2h10.6l-8.6 6.4 3.3 10.2-8.7-6.3-8.6 6.3 3.2-10.3-8.5-6.3h10.6z" /><path d="M91.2 36.9l3.4 10.2h10.6l-8.6 6.4 3.3 10.2-8.7-6.3-8.6 6.3 3.2-10.3-8.5-6.3h10.6z" /></g><path d="M172.2 36.9l3.3 10.2h10.6l-8.5 6.4 3.2 10.2-8.6-6.3-8.7 6.3 3.3-10.3-8.6-6.3h10.7z" /></g><path d="M253 36.9l3.4 10.2h10.6l-8.5 6.4 3.2 10.2-8.7-6.3-8.6 6.3 3.3-10.3-8.6-6.3h10.6z" /></g>
        <path d="M333.8 36.9l3.3 10.2h10.6l-8.5 6.4 3.2 10.2-8.6-6.3-8.7 6.3 3.3-10.3-8.5-6.3h10.6z" />
        <use xlinkHref="#us-d" y="73.9" /><use xlinkHref="#us-h" y="73.8" /><use xlinkHref="#us-d" y="147.7" /><use xlinkHref="#us-h" y="147.6" />
      </g>
    </svg>
  );
}

function FlagES({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className={className}>
      <path fill="#AA151B" d="M0 0h640v480H0z" />
      <path fill="#F1BF00" d="M0 120h640v240H0z" />
    </svg>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { label: t(language, 'nav_home'), href: '/' },
    { label: t(language, 'nav_services'), href: '/services' },
    { label: t(language, 'nav_portfolio'), href: '/portfolio' },
    { label: t(language, 'nav_training'), href: '/training' },
    { label: t(language, 'nav_team'), href: '/team' },
    { label: t(language, 'nav_boost'), href: '/boost' },
    { label: t(language, 'nav_contact'), href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isDark = theme === 'dark';

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500',
          scrolled ? 'glass-solid' : 'glass'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/images/quorax-logo.svg"
              alt="Quorax Logo"
              width={44}
              height={44}
              priority
            />
            <span
              className="font-bold text-lg tracking-wider hidden sm:inline"
              style={{ color: isDark ? '#FFFFFF' : '#111827' }}
            >
              QUORAX
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm transition-colors duration-300 relative py-1',
                  isActive(link.href)
                    ? isDark ? 'text-white' : 'text-gray-900'
                    : isDark ? 'text-gray-mid hover:text-white' : 'text-gray-500 hover:text-gray-900'
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-cyan rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Language Toggle - Flags */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  'w-8 h-6 rounded overflow-hidden border-2 transition-all duration-300',
                  language === 'en'
                    ? 'border-brand-cyan scale-110 shadow-sm'
                    : 'border-transparent opacity-50 hover:opacity-80'
                )}
                aria-label="English"
              >
                <FlagUS className="w-full h-full" />
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={cn(
                  'w-8 h-6 rounded overflow-hidden border-2 transition-all duration-300',
                  language === 'es'
                    ? 'border-brand-cyan scale-110 shadow-sm'
                    : 'border-transparent opacity-50 hover:opacity-80'
                )}
                aria-label="Español"
              >
                <FlagES className="w-full h-full" />
              </button>
            </div>

            {/* Theme Toggle Switch */}
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={cn(
                'relative w-14 h-7 rounded-full p-0.5 transition-all duration-500 flex items-center',
                isDark
                  ? 'bg-gray-dark/80 border border-white/10'
                  : 'bg-yellow-100 border border-yellow-300/50'
              )}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div
                className={cn(
                  'w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 shadow-md',
                  isDark
                    ? 'translate-x-0 bg-brand-navy-mid'
                    : 'translate-x-6'
                )}
                style={!isDark ? { backgroundColor: '#FFFFFF' } : undefined}
              >
                {isDark ? (
                  <Moon size={12} className="text-brand-cyan" />
                ) : (
                  <Sun size={12} className="text-yellow-500" />
                )}
              </div>
            </button>

            {/* Book a Call CTA - Desktop */}
            <Link
              href="/contact"
              className={cn(
                'hidden md:block',
                'bg-brand-blue text-sm px-4 py-2 rounded-lg',
                'hover:bg-blue-600 hover:scale-105 active:scale-95',
                'transition-all duration-300',
                'font-medium'
              )}
              style={{ color: '#FFFFFF' }}
            >
              {t(language, 'nav_book_call')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label={t(language, 'nav_toggle_menu')}
            >
              {isMenuOpen ? (
                <X size={24} style={{ color: isDark ? '#FFFFFF' : '#111827' }} />
              ) : (
                <Menu size={24} style={{ color: isDark ? '#FFFFFF' : '#111827' }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-brand-navy/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 pt-20 transition-all duration-500',
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label={t(language, 'nav_close_menu')}
        >
          <X size={24} className="text-white" />
        </button>

        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'text-2xl font-bold transition-all duration-500',
                isActive(link.href) ? 'text-brand-cyan' : 'text-white hover:text-brand-cyan',
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: isMenuOpen ? `${index * 100 + 100}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Language Toggle + Theme Toggle - Mobile */}
        <div
          className={cn(
            'flex items-center gap-6 text-lg transition-all duration-500',
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: isMenuOpen ? '500ms' : '0ms' }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                'w-10 h-7 rounded overflow-hidden border-2 transition-all duration-300',
                language === 'en'
                  ? 'border-brand-cyan scale-110 shadow-sm'
                  : 'border-transparent opacity-50 hover:opacity-80'
              )}
              aria-label="English"
            >
              <FlagUS className="w-full h-full" />
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={cn(
                'w-10 h-7 rounded overflow-hidden border-2 transition-all duration-300',
                language === 'es'
                  ? 'border-brand-cyan scale-110 shadow-sm'
                  : 'border-transparent opacity-50 hover:opacity-80'
              )}
              aria-label="Español"
            >
              <FlagES className="w-full h-full" />
            </button>
          </div>

          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={cn(
              'relative w-14 h-7 rounded-full p-0.5 transition-all duration-500 flex items-center',
              isDark
                ? 'bg-gray-dark/80 border border-white/10'
                : 'bg-yellow-100 border border-yellow-300/50'
            )}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div
              className={cn(
                'w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 shadow-md',
                isDark
                  ? 'translate-x-0 bg-brand-navy-mid'
                  : 'translate-x-6'
              )}
              style={!isDark ? { backgroundColor: '#FFFFFF' } : undefined}
            >
              {isDark ? (
                <Moon size={12} className="text-brand-cyan" />
              ) : (
                <Sun size={12} className="text-yellow-500" />
              )}
            </div>
          </button>
        </div>

        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            'bg-brand-blue text-sm px-6 py-3 rounded-lg',
            'hover:bg-blue-600 transition-all duration-500',
            'font-medium mt-4',
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ color: '#FFFFFF', transitionDelay: isMenuOpen ? '600ms' : '0ms' }}
        >
          {t(language, 'nav_book_call')}
        </Link>
      </div>
    </>
  );
}
