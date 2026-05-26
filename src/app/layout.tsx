import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { SEO_METADATA, SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: SEO_METADATA.title,
  description: SEO_METADATA.description,
  keywords: SEO_METADATA.keywords,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  metadataBase: new URL(SITE_CONFIG.url),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050a05',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-grid antialiased" style={{ backgroundSize: '50px 50px' }}>
        {/* Scan line effect — purely decorative, hidden from AT */}
        <div className="scanline" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
