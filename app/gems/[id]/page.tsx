import { notFound } from 'next/navigation'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Star, Gem, Ruler, Palette, Award } from 'lucide-react'

const gemData = {
  'round-cut': {
    id: 'round-cut',
    name: 'Round Cut Tsavorite',
    image: '/service-1.png',
    gallery: ['/service-1.png', '/service-2.png', '/service-3.jpg'],
    price: 'Contact for pricing',
    description: 'Classic round brilliant cut showcasing maximum sparkle and fire. This timeless cut maximizes the natural beauty of Tsavorite with its 57 facets.',
    specifications: {
      shape: 'Round Brilliant',
      cut: 'Excellent',
      clarity: 'VVS1 - SI2',
      color: 'Vivid Green',
      origin: 'Taita Taveta, Kenya',
      hardness: '7.0 - 7.5 Mohs',
      refractive_index: '1.734 - 1.759',
      specific_gravity: '3.61'
    },
    features: [
      'Maximum brilliance and fire',
      'Timeless and versatile design',
      'Excellent light performance',
      'Perfect for all jewelry types'
    ]
  },
  'pear-shaped': {
    id: 'pear-shaped',
    name: 'Pear Shaped Tsavorite Cut',
    image: '/service-2.png',
    gallery: ['/service-2.png', '/service-1.png', '/service-3.jpg'],
    price: 'Contact for pricing',
    description: 'Elegant teardrop shape combining the brilliance of round and marquise cuts. Perfect for creating sophisticated and unique jewelry pieces.',
    specifications: {
      shape: 'Pear/Teardrop',
      cut: 'Excellent',
      clarity: 'VVS1 - SI2',
      color: 'Vivid Green',
      origin: 'Taita Taveta, Kenya',
      hardness: '7.0 - 7.5 Mohs',
      refractive_index: '1.734 - 1.759',
      specific_gravity: '3.61'
    },
    features: [
      'Elegant teardrop silhouette',
      'Combines round and marquise brilliance',
      'Creates illusion of longer fingers',
      'Unique and sophisticated appearance'
    ]
  },
  'trilliant-shaped': {
    id: 'trilliant-shaped',
    name: 'Trilliant Shaped Tsavorite Cut',
    image: '/service-3.jpg',
    gallery: ['/service-3.jpg', '/service-1.png', '/service-2.png'],
    price: 'Contact for pricing',
    description: 'Triangular cut with brilliant faceting for exceptional fire and scintillation. A modern and bold choice for contemporary jewelry designs.',
    specifications: {
      shape: 'Triangular',
      cut: 'Excellent',
      clarity: 'VVS1 - SI2',
      color: 'Vivid Green',
      origin: 'Taita Taveta, Kenya',
      hardness: '7.0 - 7.5 Mohs',
      refractive_index: '1.734 - 1.759',
      specific_gravity: '3.61'
    },
    features: [
      'Bold triangular shape',
      'Exceptional fire and brilliance',
      'Modern and contemporary design',
      'Perfect for statement pieces'
    ]
  },
  'oval-shaped': {
    id: 'oval-shaped',
    name: 'Oval Shaped Tsavorite Cut',
    image: '/service-1.png',
    gallery: ['/service-1.png', '/service-2.png', '/service-3.jpg'],
    price: 'Contact for pricing',
    description: 'Elongated oval shape creating an elegant appearance with excellent brilliance. Classic yet distinctive choice for fine jewelry.',
    specifications: {
      shape: 'Oval',
      cut: 'Excellent',
      clarity: 'VVS1 - SI2',
      color: 'Vivid Green',
      origin: 'Taita Taveta, Kenya',
      hardness: '7.0 - 7.5 Mohs',
      refractive_index: '1.734 - 1.759',
      specific_gravity: '3.61'
    },
    features: [
      'Elegant elongated silhouette',
      'Excellent brilliance and fire',
      'Flattering on all hand shapes',
      'Classic yet distinctive'
    ]
  },
  'emerald-shaped': {
    id: 'emerald-shaped',
    name: 'Emerald Shaped Tsavorite Cut',
    image: '/service-2.png',
    gallery: ['/service-2.png', '/service-3.jpg', '/service-1.png'],
    price: 'Contact for pricing',
    description: 'Rectangular step cut highlighting clarity and color intensity. Sophisticated choice that emphasizes the natural beauty of Tsavorite.',
    specifications: {
      shape: 'Rectangular',
      cut: 'Step Cut',
      clarity: 'VVS1 - VS2',
      color: 'Vivid Green',
      origin: 'Taita Taveta, Kenya',
      hardness: '7.0 - 7.5 Mohs',
      refractive_index: '1.734 - 1.759',
      specific_gravity: '3.61'
    },
    features: [
      'Sophisticated step cut faceting',
      'Emphasizes color and clarity',
      'Art Deco inspired elegance',
      'Perfect for vintage-style settings'
    ]
  },
  'cushion-shaped': {
    id: 'cushion-shaped',
    name: 'Cushion Shaped Tsavorite Cut',
    image: '/service-3.jpg',
    gallery: ['/service-3.jpg', '/service-1.png', '/service-2.png'],
    price: 'Contact for pricing',
    description: 'Square cut with rounded corners for vintage appeal and romantic charm. Combines old-world elegance with modern brilliance.',
    specifications: {
      shape: 'Cushion/Pillow',
      cut: 'Modified Brilliant',
      clarity: 'VVS1 - SI2',
      color: 'Vivid Green',
      origin: 'Taita Taveta, Kenya',
      hardness: '7.0 - 7.5 Mohs',
      refractive_index: '1.734 - 1.759',
      specific_gravity: '3.61'
    },
    features: [
      'Romantic cushion silhouette',
      'Vintage-inspired elegance',
      'Excellent light performance',
      'Soft, rounded corners'
    ]
  }
}

export async function generateStaticParams() {
  const ids = Object.keys(gemData);
  return ids.map((id) => ({ id }));
}

export default function GemDetailPage({ params }: { params: { id: string } }) {
  const gem = gemData[params.id as keyof typeof gemData]
  
  if (!gem) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <Link href="/gems" className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Gems
          </Link>
        </div>
      </section>

      {/* Gem Detail */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-800">
                <img
                  src={gem.image || "/placeholder.svg"}
                  alt={gem.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {gem.gallery.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-800">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${gem.name} view ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Gem Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-white font-playfair mb-4">
                  {gem.name}
                </h1>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-400">Premium Quality</span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {gem.description}
                </p>
              </div>

              {/* Features */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Award className="h-5 w-5 text-green-500 mr-2" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {gem.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Gem className="h-5 w-5 text-green-500 mr-2" />
                    Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(gem.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400 capitalize">
                          {key.replace('_', ' ')}:
                        </span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Price and CTA */}
              <div className="space-y-4">
                <div className="text-2xl font-bold text-green-500">
                  {gem.price}
                </div>
                <div className="flex space-x-4">
                  <Button asChild className="bg-green-600 hover:bg-green-700 flex-1">
                    <Link href={`/contact?gem=${gem.id}`}>Inquire About This Gem</Link>
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
