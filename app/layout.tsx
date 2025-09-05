import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Baraka Mining & Minerals LTD - Premium Tsavorite Gemstones | Sustainable Gem Mining Kenya',
  description: 'Embark on a gem-hunting adventure with Baraka Mining & Minerals LTD. Explore our sustainable gem mining sites and uncover rare treasures from Kenya. Premium tsavorite, emeralds, and precious minerals.',
  keywords: [
    'tsavorite gemstones Kenya',
    'gem mining Kenya',
    'precious minerals',
    'sustainable mining',
    'emeralds Kenya',
    'rare gemstones',
    'mineral exploration',
    'gem hunting adventure',
    'Baraka Mining',
    'Kenya mining company',
    'precious stones',
    'gemstone dealer',
    'mining tourism',
    'geological exploration'
  ].join(', '),
  authors: [{ name: 'Xelerated Tech', url: 'https://barakaminingltd.co.ke' }],
  creator: 'Xelerated Tech',
  publisher: 'Xelerated Tech',
  category: 'Mining & Minerals',
  classification: 'Business',
  metadataBase: new URL('https://barakaminingltd.co.ke'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'hsc9LA33RuNuoR2xkU_n1Vy_cOKcO1f2xioZKNkUm8k'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://barakaminingltd.co.ke',
    siteName: 'Baraka Mining & Minerals LTD',
    title: 'Baraka Mining & Minerals LTD - Premium Tsavorite & Gemstones from Kenya',
    description: 'Discover rare and precious gemstones through sustainable mining practices. Premium tsavorite, emeralds, and minerals from Kenya. Gem hunting adventures available.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Baraka Mining & Minerals LTD - Premium Gemstones',
      },
      {
        url: '/tsavorite-gems.jpg',
        width: 1200,
        height: 800,
        alt: 'Premium Tsavorite Gemstones from Baraka Mining',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@barakamining',
    creator: '@barakamining',
    title: 'Baraka Mining & Minerals LTD - Premium Gemstones Kenya',
    description: 'Sustainable gem mining company in Kenya. Premium tsavorite, emeralds, and precious minerals. Gem hunting adventures and mineral exploration.',
    images: ['/twitter-gems.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  other: {
    'geo.region': 'KE',
    'geo.placename': 'Kenya',
    'ICBM': '-0.023559, 37.906193', // Central Kenya coordinates
    'industry': 'Mining and Minerals',
    'business-type': 'Gemstone Mining Company',
    'specialization': 'Tsavorite, Emeralds, Precious Minerals',
    'theme-color': '#059669', // Green theme for mining/nature
    'msapplication-TileColor': '#059669',
    'application-name': 'Baraka Mining',
    'apple-mobile-web-app-title': 'Baraka Mining',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
    'contact': 'info@barakaminingltd.co.ke',
    'copyright': `© ${new Date().getFullYear()} Baraka Mining & Minerals LTD. All rights reserved.`,
    'language': 'English',
    'rating': 'General',
    'distribution': 'Global',
    'revisit-after': '14 days',
    'target-audience': 'Gemstone Collectors, Jewelry Manufacturers, Mining Enthusiasts, Investors',
    'services': 'Gemstone Mining, Mineral Exploration, Gem Hunting Tours, Wholesale Gemstones'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
