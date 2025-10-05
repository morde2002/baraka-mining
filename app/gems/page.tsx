import { Metadata } from 'next'
import PageWrapper from '@/components/layout/page-wrapper'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Premium Tsavorite Gemstones - Cut & Rough | Baraka Mining Kenya',
  description: 'Explore our exquisite collection of premium Tsavorite gemstones. Expert cut stones (round, pear, trilliant, oval, emerald, cushion) and natural rough crystals. Ethically sourced from Taita Taveta, Kenya. Wholesale and custom cutting available.',
  keywords: 'buy Tsavorite Kenya, Tsavorite gemstones for sale, rough Tsavorite crystals, cut Tsavorite stones, round cut Tsavorite, pear shaped Tsavorite, premium gemstones Kenya, natural Tsavorite rough, gemstone wholesale Kenya, custom gem cutting, Tsavorite supplier, investment grade gemstones',
  openGraph: {
    title: 'Premium Tsavorite Collection - Cut & Rough Gemstones | Baraka Mining',
    description: 'Premium cut and rough Tsavorite gemstones directly from Kenyan mines. Investment-grade quality with expert craftsmanship.',
    url: 'https://barakaminingltd.co.ke/gems',
    images: [
      {
        url: '/service-1.png',
        width: 1200,
        height: 630,
        alt: 'Premium Tsavorite Gemstone Collection - Baraka Mining',
      }
    ],
  },
  alternates: {
    canonical: 'https://barakaminingltd.co.ke/gems',
  }
}

const gemCuts = [
  {
    id: 'round-cut',
    image: '/round cut.jpg',
    title: 'Round Cut',
    description: 'Classic round brilliant cut showcasing maximum sparkle'
  },
  {
    id: 'pear-shaped',
    image: '/pear shaped tsavorite cut.jpg',
    title: 'Pear Shaped Tsavorite Cut',
    description: 'Elegant teardrop shape combining round and marquise cuts'
  },
  {
    id: 'trilliant-shaped',
    image: '/trilliant shaped tsavorite cut.jpg',
    title: 'Trilliant Shaped Tsavorite Cut',
    description: 'Triangular cut with brilliant faceting for exceptional fire'
  },
  {
    id: 'oval-shaped',
    image: '/oval shaped tsavorite cut.jpg',
    title: 'Oval Shaped Tsavorite Cut',
    description: 'Elongated oval shape creating an elegant appearance'
  },
  {
    id: 'emerald-shaped',
    image: '/emerald shaped tsavorite cut.jpg',
    title: 'Emerald Shaped Tsavorite Cut',
    description: 'Rectangular step cut highlighting clarity and color'
  },
  {
    id: 'cushion-shaped',
    image: '/cushion shaped cut tsavorite.jpg',
    title: 'Cushion Shaped Tsavorite Cut',
    description: 'Square cut with rounded corners for vintage appeal'
  }
]

const roughTsavorites = [
  {
    id: 'rough-tsavorite-1',
    image: '/rough-tsavorite1.jpg',
    title: 'Premium Rough Tsavorite',
    description: 'High-quality natural crystal formation'
  },
  {
    id: 'rough-tsavorite-2',
    image: '/rough-tsavorite2.jpg',
    title: 'Natural Tsavorite Crystal',
    description: 'Pristine uncut specimen with excellent color'
  },
  {
    id: 'rough-tsavorite-3',
    image: '/rough-tsavorite3.jpg',
    title: 'Raw Tsavorite Specimen',
    description: 'Natural formation showcasing vivid green hues'
  }
]

export default function GemsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section with Background - Fixed spacing for header */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/service-1.png)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="inline-block bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-green-600/30">
              Premium Collection
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
              OUR GEMS
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our exquisite collection of premium Tsavorite gemstones, each carefully cut and polished to perfection.
            </p>
          </div>
        </section>

        {/* Cut Gems Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4">
                Premium Cut Gemstones
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Each gemstone is expertly cut to maximize brilliance and showcase the natural beauty of Kenyan Tsavorite.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gemCuts.map((gem, index) => (
                <Link key={index} href={`/gems/${gem.id}`}>
                  <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer hover:border-green-600/50">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={gem.image || "/placeholder.svg"}
                          alt={gem.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4">
                          <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Premium
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                          {gem.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">{gem.description}</p>
                        <div className="text-green-500 font-medium flex items-center">
                          View Details 
                          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Rough Tsavorites Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Natural Beauty
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mb-6">
                Rough Tsavorites
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Natural, uncut Tsavorite crystals in their raw form, showcasing the pure beauty of nature's creation straight from our mines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {roughTsavorites.map((gem, index) => (
                <Link key={index} href={`/gems/${gem.id}`}>
                  <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer hover:border-green-600/50">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={gem.image || "/placeholder.svg"}
                          alt={gem.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <div className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Natural
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                          {gem.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">{gem.description}</p>
                        <div className="text-green-500 font-medium flex items-center">
                          View Details 
                          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link href="/contact">Inquire About Our Gems</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  )
}