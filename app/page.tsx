"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Gem, Award, Users, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import PageWrapper from '@/components/layout/page-wrapper'

const heroSlides = [
  {
    image: '/hero-slider-1.jpg',
    title: 'BARAKA MINING & MINERALS LTD',
    subtitle: 'Premium Tsavorite Gemstones from Kenya',
  },
  {
    image: '/hero-slider-21.jpg',
    title: 'The concealed treasures in the darkest places',
    subtitle: 'Discover the beauty hidden beneath the earth',
  },
  {
    image: '/hero-slider-3.jpg',
    title: 'From the mines to the market',
    subtitle: 'Ethical mining practices for sustainable future',
  },
]

const gemTypes = [
  {
    id: 'round-cut',
    image: '/service-1.png',
    title: 'Round Cut Tsavorite',
  },
  {
    id: 'pear-shaped',
    image: '/service-2.png',
    title: 'Pear Shaped Cut',
  },
  {
    id: 'emerald-shaped',
    image: '/service-3.jpg',
    title: 'Emerald Cut',
  },
]

const stats = [
  { icon: Award, label: 'Years of Excellence', value: '40+' },
  { icon: Users, label: 'Employees', value: '200+' },
  { icon: Globe, label: 'Countries Served', value: '10+' },
  { icon: Gem, label: 'Premium Gems', value: '1000+' },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
                <div className="max-w-4xl px-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-green-400">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 text-white hover:bg-green-600 transition-colors rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 text-white hover:bg-green-600 transition-colors rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Hero CTA */}
          <div className="absolute bottom-8 right-8 z-20">
            <Link href="/gems" className="block">
              <div className="bg-green-600 hover:bg-green-700 transition-colors p-6 rounded-full text-center text-white max-w-32">
                <Gem className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm font-bold">Beautiful Gems</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Gems Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-green-500 text-lg mb-4 font-semibold">Green Garnets</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
                Top Notch Green Garnets
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Green garnets, also known as Tsavorite gems, are a type of gemstones that display a beautiful green color.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gemTypes.map((gem, index) => (
                <Link key={index} href={`/gems/${gem.id}`}>
                  <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer">
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
                          <p className="text-green-400 text-sm mt-1">Click to view details →</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gray-900 relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/images/about-banner.jpg)' }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-green-500 font-playfair mb-8">"</div>
              <blockquote className="text-2xl md:text-3xl text-white font-playfair mb-8 leading-relaxed">
                The true beauty of a gemstone lies not just in its outward appearance, but in the stories it holds and the emotions it evokes
              </blockquote>
              <div className="flex justify-center space-x-2 mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  )
}
