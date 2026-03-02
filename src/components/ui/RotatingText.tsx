'use client';

import { useState, useEffect, useRef } from 'react';

interface RotatingTextProps {
  items: string[];
  className?: string;
}

export default function RotatingText({ items, className }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    // If reduced motion, just show full text and cycle slowly
    if (reducedMotion.current) {
      setDisplayText(items[currentIndex]);
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const currentItem = items[currentIndex];

    if (!isDeleting) {
      if (displayText.length < currentItem.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentItem.substring(0, displayText.length + 1));
        }, 70);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), 2200);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
    }
  }, [displayText, isDeleting, currentIndex, items]);

  return (
    <span className={className}>
      {displayText}
      <span
        className="inline-block w-[2px] h-[1.1em] bg-brand-cyan ml-0.5 align-middle"
        style={{ animation: 'cursor-blink 1s step-end infinite' }}
      />
    </span>
  );
}
