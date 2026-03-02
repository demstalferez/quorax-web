'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TechPill from './TechPill';
import {
  Brain,
  BarChart3,
  Shield,
  Code2,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  technologies: string[];
  learnMoreText?: string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Brain,
  BarChart3,
  Shield,
  Code2,
  GraduationCap,
};

const ServiceCard = ({
  icon,
  title,
  description,
  href,
  technologies,
  learnMoreText = 'Learn more',
  className,
}: ServiceCardProps) => {
  const IconComponent = iconMap[icon];

  return (
    <div
      className={cn(
        'service-card-bg rounded-2xl p-6 h-full flex flex-col',
        'border border-white/[0.08]',
        'backdrop-blur-sm',
        className
      )}
    >
      {IconComponent && (
        <div className="mb-4 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-brand-blue" />
        </div>
      )}
      <h3 className="font-bold text-lg text-white mb-3">{title}</h3>
      <p className="text-gray-mid text-sm mb-6 leading-relaxed line-clamp-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {technologies.slice(0, 3).map((tech, index) => (
          <TechPill key={index} label={tech} variant="blue" />
        ))}
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-cyan transition-colors duration-300"
      >
        {learnMoreText}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
