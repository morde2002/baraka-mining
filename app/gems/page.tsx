import PageWrapper from '@/components/layout/page-wrapper'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
    image: '/rough-tsavorite1.jpg',
    title: 'Premium Rough Tsavorite'
  },
  {
    image: '/rough-tsavorite2.jpg',
    title: 'Natural Tsavorite Crystal'
  },
  {
    image: '/rough-tsavorite3.jpg',
    title: 'Raw Tsavorite Specimen'
  }
]

export default function GemsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section with Background */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/service-1.png)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-6">
              OUR GEMS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our exquisite collection of premium Tsavorite gemstones, each carefully cut and polished to perfection.
            </p>
          </div>
        </section>

        {/* Cut Gems Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gemCuts.map((gem, index) => (
                <Link key={index} href={`/gems/${gem.id}`}>
                  <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={gem.image || "/placeholder.svg"}
                          alt={gem.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{gem.title}</h3>
                        <p className="text-gray-300 text-sm">{gem.description}</p>
                        <div className="mt-4 text-green-500 font-medium">
                          View Details →
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
              <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
                Rough Tsavorites
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Natural, uncut Tsavorite crystals in their raw form, showcasing the beauty of nature's creation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {roughTsavorites.map((gem, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={gem.image || "/placeholder.svg"}
                        alt={gem.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg">{gem.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
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
