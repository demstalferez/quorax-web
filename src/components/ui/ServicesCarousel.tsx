'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { services } from '@/data/services';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';
import ServiceCard from './ServiceCard';

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const animationRef = useRef<number>(0);
  const scrollPos = useRef(0);

  // Duplicate items for seamless loop
  const items = [...services, ...services, ...services];

  const animate = useCallback(() => {
    const track = trackRef.current;
    if (!track || isPaused) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    scrollPos.current += 0.5;

    // Reset position seamlessly when we've scrolled through one full set
    const singleSetWidth = track.scrollWidth / 3;
    if (scrollPos.current >= singleSetWidth) {
      scrollPos.current -= singleSetWidth;
    }

    track.scrollLeft = scrollPos.current;
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  // Sync scrollPos when user manually scrolls
  const syncScroll = () => {
    const track = trackRef.current;
    if (track && isPaused) {
      scrollPos.current = track.scrollLeft;
    }
  };

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    dragStart.current = { x: e.pageX, scrollLeft: trackRef.current?.scrollLeft ?? 0 };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.pageX - dragStart.current.x;
    trackRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      syncScroll();
      setTimeout(() => setIsPaused(false), 1500);
    }
  };

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    dragStart.current = { x: e.touches[0].pageX, scrollLeft: trackRef.current?.scrollLeft ?? 0 };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    const dx = e.touches[0].pageX - dragStart.current.x;
    trackRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onTouchEnd = () => {
    syncScroll();
    setTimeout(() => setIsPaused(false), 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const track = trackRef.current;
    if (!track) return;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setIsPaused(true);
      scrollPos.current += 400;
      track.scrollLeft = scrollPos.current;
      setTimeout(() => setIsPaused(false), 2000);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setIsPaused(true);
      scrollPos.current -= 400;
      track.scrollLeft = scrollPos.current;
      setTimeout(() => setIsPaused(false), 2000);
    }
  };

  return (
    <div
      className="relative w-full cursor-grab active:cursor-grabbing px-2"
      style={{ overflow: 'clip', overflowClipMargin: '20px' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => { setIsDragging(false); setIsPaused(false); }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Services carousel"
    >
      <div
        ref={trackRef}
        className="flex items-stretch gap-8 overflow-x-hidden py-6"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((service, i) => (
          <div
            key={`${service.id}-${i}`}
            className="shrink-0 w-[85vw] sm:w-[360px] lg:w-[380px]"
          >
            <ServiceCard
              icon={service.icon}
              title={language === 'es' ? service.titleEs : service.title}
              description={language === 'es' ? service.descriptionEs : service.description}
              href={`/services#${service.id}`}
              technologies={service.technologies}
              learnMoreText={t(language, 'services_learn_more')}
              className="h-full select-none"
            />
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10" style={{ background: 'linear-gradient(to right, var(--color-brand-navy), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-20 pointer-events-none z-10" style={{ background: 'linear-gradient(to left, var(--color-brand-navy), transparent)' }} />
    </div>
  );
}
