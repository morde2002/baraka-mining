import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get Quote | Baraka Mining Tsavorite Supplier Kenya',
  description: 'Contact Baraka Mining for premium Tsavorite gemstones. Request quotes, custom cutting, wholesale inquiries, or schedule mine visits. Located in Voi, Taita Taveta. Email: barakaminingmi4@gmail.com | Phone: +254 799 445 800',
  keywords: 'contact Tsavorite supplier, buy Tsavorite Kenya contact, gemstone dealer Kenya, Tsavorite wholesale inquiry, custom gem cutting quote, mining consultation Kenya, Baraka Mining contact, Taita Taveta gemstone supplier, Tsavorite price quote, gem sourcing Kenya',
  openGraph: {
    title: 'Contact Baraka Mining - Premium Tsavorite Supplier Kenya',
    description: 'Get in touch for Tsavorite gemstone inquiries, custom orders, and wholesale opportunities. Expert consultation available.',
    url: 'https://barakaminingltd.co.ke/contact',
    images: [
      {
        url: '/shop3.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Baraka Mining - Tsavorite Gemstone Supplier',
      }
    ],
  },
  alternates: {
    canonical: 'https://barakaminingltd.co.ke/contact',
  }
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}