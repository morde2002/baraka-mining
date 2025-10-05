import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Mine - Tsavorite Mining Operations | Baraka Mining Taita Taveta',
  description: 'Journey into our Tsavorite mines in Taita Taveta, Kenya. Witness sustainable mining operations, expert gemstone extraction, and our 71st Bangkok Gem Fair participation. Behind-the-scenes gallery of mining excellence spanning two generations.',
  keywords: 'Tsavorite mine Kenya, Taita Taveta mining, gemstone mining operations, sustainable mining Kenya, mining gallery, Bangkok Gem Fair 2025, gem extraction process, mining site tours, Tsavorite mining company, ethical mining practices, gem prospecting Kenya',
  openGraph: {
    title: 'The Mine - Sustainable Tsavorite Mining Operations in Kenya',
    description: 'Explore our mining operations in Taita Taveta. From geological exploration to premium gem extraction.',
    url: 'https://barakaminingltd.co.ke/mine',
    images: [
      {
        url: '/bg-mine.png',
        width: 1200,
        height: 630,
        alt: 'Baraka Mining Operations - Tsavorite Mining in Taita Taveta',
      }
    ],
  },
  alternates: {
    canonical: 'https://barakaminingltd.co.ke/mine',
  }
}

export default function MineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}