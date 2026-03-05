'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  honeypot: string;
}

const ContactForm = ({ className, isDark = true }: { className?: string; isDark?: boolean }) => {
  const { language } = useLanguage();
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formState.honeypot) return;

    if (!formState.name.trim()) {
      setErrorMessage(t(language, 'form_error_name'));
      setSubmitStatus('error');
      return;
    }

    if (!formState.email.trim() || !validateEmail(formState.email)) {
      setErrorMessage(t(language, 'form_error_email'));
      setSubmitStatus('error');
      return;
    }

    if (!formState.message.trim() || formState.message.length < 10) {
      setErrorMessage(t(language, 'form_error_message'));
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          service: formState.service,
          budget: formState.budget,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', company: '', service: '', budget: '', message: '', honeypot: '' });
        setErrorMessage('');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(t(language, 'form_error_generic'));
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage(t(language, 'form_error_network'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: isDark ? '#111633' : '#F9FAFB',
    color: isDark ? '#FFFFFF' : '#111827',
    borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)',
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='${isDark ? '%238E8E93' : '%236B7280'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    paddingRight: '36px',
  };

  const labelColor = isDark ? '#8E8E93' : '#6B7280';
  const placeholderClass = isDark ? 'placeholder:text-[#8E8E93]/60' : 'placeholder:text-[#9CA3AF]';

  const inputClasses = cn(
    'w-full rounded-lg px-4 py-3 border text-sm',
    placeholderClass,
    'focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:shadow-lg focus:shadow-brand-blue/10',
    'outline-none transition-all duration-300'
  );

  const optionalBadge = (
    <span
      className="text-xs font-normal ml-1.5"
      style={{ color: isDark ? 'rgba(142,142,147,0.5)' : 'rgba(107,114,128,0.5)' }}
    >
      ({t(language, 'form_optional')})
    </span>
  );

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-5', className)}>
      {/* Honeypot */}
      <input
        type="text"
        name="honeypot"
        value={formState.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="text-sm mb-1.5 block font-medium" style={{ color: labelColor }}>
            {t(language, 'form_name')} <span className="text-brand-blue">{t(language, 'form_required')}</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder={t(language, 'form_name_placeholder')}
            required
            className={inputClasses}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm mb-1.5 block font-medium" style={{ color: labelColor }}>
            {t(language, 'form_email')} <span className="text-brand-blue">{t(language, 'form_required')}</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder={t(language, 'form_email_placeholder')}
            required
            className={inputClasses}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="text-sm mb-1.5 block font-medium" style={{ color: labelColor }}>
          {t(language, 'form_company')} {optionalBadge}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formState.company}
          onChange={handleChange}
          placeholder={t(language, 'form_company_placeholder')}
          className={inputClasses}
          style={inputStyle}
        />
      </div>

      {/* Service + Budget in row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="text-sm mb-1.5 block font-medium" style={{ color: labelColor }}>
            {t(language, 'form_service')} {optionalBadge}
          </label>
          <select
            id="service"
            name="service"
            value={formState.service}
            onChange={handleChange}
            className={inputClasses}
            style={selectStyle}
          >
            <option value="">{t(language, 'form_select_service')}</option>
            <option value="ai-ml">{t(language, 'form_service_aiml')}</option>
            <option value="data-science">{t(language, 'form_service_datascience')}</option>
            <option value="cybersecurity">{t(language, 'form_service_cybersecurity')}</option>
            <option value="software">{t(language, 'form_service_software')}</option>
            <option value="clerk">{t(language, 'form_service_clerk')}</option>
            <option value="training">{t(language, 'form_service_training')}</option>
            <option value="other">{t(language, 'form_service_other')}</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="text-sm mb-1.5 block font-medium" style={{ color: labelColor }}>
            {t(language, 'form_budget')} {optionalBadge}
          </label>
          <select
            id="budget"
            name="budget"
            value={formState.budget}
            onChange={handleChange}
            className={inputClasses}
            style={selectStyle}
          >
            <option value="">{t(language, 'form_select_budget')}</option>
            <option value="under-5k">{t(language, 'form_budget_under5k')}</option>
            <option value="5k-15k">{t(language, 'form_budget_5k_15k')}</option>
            <option value="15k-50k">{t(language, 'form_budget_15k_50k')}</option>
            <option value="50k-plus">{t(language, 'form_budget_50k_plus')}</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="text-sm mb-1.5 block font-medium" style={{ color: labelColor }}>
          {t(language, 'form_message')} <span className="text-brand-blue">{t(language, 'form_required')}</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder={t(language, 'form_message_placeholder')}
          required
          minLength={10}
          rows={5}
          className={cn(inputClasses, 'resize-none')}
          style={inputStyle}
        />
        <p
          className="text-xs mt-1 text-right"
          style={{ color: isDark ? 'rgba(142,142,147,0.5)' : 'rgba(107,114,128,0.5)' }}
        >
          {formState.message.length} {t(language, 'form_characters')}
        </p>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-lg p-4 text-sm flex items-center gap-3"
          style={{
            backgroundColor: isDark ? 'rgba(34,197,94,0.1)' : 'rgba(34,197,94,0.08)',
            border: `1px solid ${isDark ? 'rgba(34,197,94,0.3)' : 'rgba(34,197,94,0.25)'}`,
            color: isDark ? '#4ADE80' : '#16A34A',
          }}
        >
          <CheckCircle2 size={18} className="flex-shrink-0" />
          {t(language, 'form_success')}
        </div>
      )}

      {submitStatus === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-lg p-4 text-sm flex items-center gap-3"
          style={{
            backgroundColor: isDark ? 'rgba(239,68,68,0.1)' : 'rgba(239,68,68,0.08)',
            border: `1px solid ${isDark ? 'rgba(239,68,68,0.3)' : 'rgba(239,68,68,0.25)'}`,
            color: isDark ? '#F87171' : '#DC2626',
          }}
        >
          <AlertCircle size={18} className="flex-shrink-0" />
          {errorMessage || t(language, 'form_error_generic')}
        </div>
      )}

      {/* Submit */}
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? t(language, 'form_submitting') : t(language, 'form_submit')}
      </Button>
    </form>
  );
};

export default ContactForm;
