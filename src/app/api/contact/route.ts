import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}

// Simple in-memory rate limiter (per-IP, resets on deploy)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // 5 requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Escape HTML entities to prevent XSS in email output
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'deme@quorax.ai';

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body: ContactPayload = await request.json();

    // Validate required fields
    if (!body.name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email?.trim() || !emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    if (!body.message?.trim() || body.message.length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters' }, { status: 400 });
    }

    // Sanitize all user inputs
    const safeName = escapeHtml(body.name.trim());
    const safeEmail = escapeHtml(body.email.trim());
    const safeCompany = escapeHtml(body.company?.trim() || 'N/A');
    const safeService = escapeHtml(body.service?.trim() || 'N/A');
    const safeBudget = escapeHtml(body.budget?.trim() || 'N/A');
    const safeMessage = escapeHtml(body.message.trim()).replace(/\n/g, '<br />');

    // Send email via Resend (or log for now if RESEND_API_KEY not set)
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'Quorax Contact <no-reply@quorax.ai>',
          to: [CONTACT_EMAIL],
          subject: `New contact: ${safeName} — ${safeService}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Company:</strong> ${safeCompany}</p>
            <p><strong>Service:</strong> ${safeService}</p>
            <p><strong>Budget:</strong> ${safeBudget}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${safeMessage}</p>
          `,
          reply_to: body.email.trim(),
        }),
      });

      if (!res.ok) {
        console.error('Resend API error:', await res.text());
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
      }
    } else {
      // Log to console when no email service configured
      console.log('--- CONTACT FORM SUBMISSION ---');
      console.log('Name:', body.name);
      console.log('Email:', body.email);
      console.log('Company:', body.company);
      console.log('Service:', body.service);
      console.log('Budget:', body.budget);
      console.log('Message:', body.message);
      console.log('--- END ---');
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
