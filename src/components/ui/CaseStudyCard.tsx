'use client';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import TechPill from './TechPill';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  slug: string;
  client: string;
  title: string;
  tags: string[];
  excerpt: string;
  image: string;
  imageAlt: string;
  color: string;
  isDark: boolean;
  className?: string;
}

const CaseStudyCard = ({
  slug,
  client,
  title,
  tags,
  excerpt,
  image,
  imageAlt,
  color,
  isDark,
  className,
}: CaseStudyCardProps) => {
  return (
    <Link href={`/portfolio/${slug}`} className="group block h-full">
      <div
        className={cn(
          'rounded-xl overflow-hidden h-full flex flex-col',
          'hover:-translate-y-1 transition-all duration-300',
          className
        )}
        style={{
          backgroundColor: isDark ? '#111633' : '#FFFFFF',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
          boxShadow: isDark
            ? '0 4px 20px rgba(0,0,0,0.3)'
            : '0 4px 20px rgba(0,0,0,0.06)',
        }}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${isDark ? '#111633' : '#FFFFFF'} 0%, transparent 50%)`,
            }}
          />
          <div
            className="absolute top-4 left-4 w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color }}
          >
            {client}
          </p>
          <h3
            className="text-lg font-bold mb-2 leading-snug group-hover:text-brand-cyan transition-colors duration-300"
            style={{ color: isDark ? '#FFFFFF' : '#111827' }}
          >
            {title}
          </h3>
          <p
            className="text-sm leading-relaxed mb-4 line-clamp-2 flex-1"
            style={{ color: isDark ? '#8E8E93' : '#6B7280' }}
          >
            {excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map((tag, index) => (
                <TechPill key={index} label={tag} variant="cyan" />
              ))}
            </div>
            <ArrowRight
              size={16}
              className="text-brand-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
