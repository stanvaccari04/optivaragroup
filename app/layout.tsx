import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://optivaragroup.com'),
  title: {
    default: 'Optivara Group | Executive Performance Infrastructure',
    template: '%s | Optivara Group',
  },
  description:
    'Optivara builds measurable health infrastructure that protects and scales executive performance inside high-performing organizations. Integrated. Governed. Measurable.',
  keywords: [
    'executive health',
    'executive performance',
    'health infrastructure',
    'C-suite health',
    'leadership performance',
    'corporate health strategy',
  ],
  authors: [{ name: 'Optivara Group' }],
  creator: 'Optivara Group',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://optivaragroup.com',
    siteName: 'Optivara Group',
    title: 'Optivara Group | Executive Performance Infrastructure',
    description:
      'Measurable health infrastructure that protects and scales executive performance inside high-performing organizations.',
    images: [
      {
        url: '/images/logo-stacked.jpeg',
        width: 1200,
        height: 630,
        alt: 'Optivara Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optivara Group | Executive Performance Infrastructure',
    description:
      'Measurable health infrastructure that protects and scales executive performance inside high-performing organizations.',
    images: ['/images/logo-stacked.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
