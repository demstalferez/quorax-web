import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ClientProviders from "@/components/ClientProviders";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Quorax | AI, Data & Security Consulting",
    template: "%s | Quorax",
  },
  description:
    "End-to-end technology consulting: AI & Machine Learning, Data Science, Cybersecurity, and Software Development. From strategy to production systems that deliver measurable impact.",
  keywords: [
    "AI consulting",
    "Machine Learning",
    "Data Science",
    "Cybersecurity",
    "OSINT",
    "Software Development",
    "data analytics training",
    "technology consulting Spain",
    "Quorax",
  ],
  authors: [{ name: "Quorax" }],
  creator: "Quorax",
  metadataBase: new URL("https://quorax.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quorax.ai",
    siteName: "Quorax",
    title: "Quorax | AI, Data & Security Consulting",
    description:
      "End-to-end technology consulting: AI, Data Science, Cybersecurity, and Software Development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quorax | AI, Data & Security Consulting",
    description:
      "End-to-end technology consulting: AI, Data Science, Cybersecurity, and Software Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/images/quorax-logo.svg', type: 'image/svg+xml' },
      { url: '/images/quorax-logo.png', type: 'image/png' },
    ],
    apple: '/images/quorax-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('quorax-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <ClientProviders>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </ClientProviders>
      </body>
    </html>
  );
}
