"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Gem, Award, Users, Globe, Star, ArrowRight, CheckCircle, Shield, Truck, Medal } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import PageWrapper from '@/components/layout/page-wrapper'

const heroSlides = [
  {
    image: '/hero-slider-1.jpg',
    title: 'BARAKA MINING & MINERALS LTD',
    subtitle: 'Premium Tsavorite Gemstones from Kenya',
    description: 'Discover the finest quality green garnets, ethically sourced from the heart of Kenya',
  },
  {
    image: '/hero-slider-21.jpg',
    title: 'The concealed treasures in the darkest places',
    subtitle: 'Discover the beauty hidden beneath the earth',
    description: 'Unveiling nature\'s most precious secrets through sustainable mining practices',
  },
  {
    image: '/hero-slider-3.jpg',
    title: 'From the mines to the market',
    subtitle: 'Ethical mining practices for sustainable future',
    description: 'Connecting authentic gemstones with discerning collectors worldwide',
  },
]

const gemTypes = [
  {
    id: 'round-cut',
    image: '/service-1.png',
    title: 'Round Cut Tsavorite',
    description: 'Classic round brilliance that maximizes light reflection',
  },
  {
    id: 'pear-shaped',
    image: '/service-2.png',
    title: 'Pear Shaped Cut',
    description: 'Elegant teardrop shape combining round and marquise cuts',
  },
  {
    id: 'emerald-shaped',
    image: '/service-3.jpg',
    title: 'Emerald Cut',
    description: 'Sophisticated step-cut showcasing clarity and color',
  },
]

const stats = [
  { icon: Award, label: 'Years of Excellence', value: '40+' },
  { icon: Users, label: 'Expert Team', value: '200+' },
  { icon: Globe, label: 'Global Reach', value: '10+' },
  { icon: Gem, label: 'Premium Gems', value: '1000+' },
]

const features = [
  {
    icon: CheckCircle,
    title: 'Certified Quality',
    description: 'Every gemstone comes with authenticity certificates'
  },
  {
    icon: Shield,
    title: 'Ethical Sourcing',
    description: 'Responsible mining practices that support local communities'
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description: 'Secure worldwide delivery with full insurance coverage'
  },
  {
    icon: Medal,
    title: 'Expert Curation',
    description: '40+ years of gemstone expertise and careful selection'
  }
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const scrollToGems = () => {
    document.getElementById('gems')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleGemClick = (gemId: string) => {
    // Original redirection approach - simulate Link component behavior
    window.location.href = `/gems/${gemId}`
  }

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        {/* Hero Section - Fixed height and better content positioning */}
        <section id="home" className="relative h-screen overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              
              {/* Content positioned to fit within viewport */}
              <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 pb-32">
                <div className="container mx-auto px-4 max-w-6xl">
                  <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="mb-4 md:mb-6">
                      <div className="inline-block bg-green-600/20 text-green-400 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm border border-green-600/30">
                        Premium Kenyan Gemstones
                      </div>
                    </div>
                    
                    {/* Main heading - responsive sizing */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-green-400 font-medium">
                      {slide.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl leading-relaxed">
                      {slide.description}
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg">
                      <button 
                        onClick={scrollToGems}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 flex items-center justify-center font-semibold group text-sm md:text-base shadow-lg hover:shadow-xl"
                      >
                        Explore Our Gems
                        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button 
                        onClick={handleContactClick}
                        className="border-2 border-white/30 hover:border-green-400 text-white hover:text-green-400 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 backdrop-blur-sm text-sm md:text-base hover:bg-green-400/10"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-black/40 backdrop-blur-sm text-white hover:bg-green-600/80 transition-all duration-300 rounded-full group border border-white/20"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-black/40 backdrop-blur-sm text-white hover:bg-green-600/80 transition-all duration-300 rounded-full group border border-white/20"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Slide Indicators - positioned better */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-green-500 w-6 md:w-8' 
                    : 'bg-white/50 w-2 md:w-3 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Removed the Beautiful Gems floating icon */}
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/10 border border-green-600/20 rounded-full mb-4 group-hover:bg-green-600/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Gems Section */}
        <section id="gems" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Premium Collection
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Exquisite Tsavorite Gemstones
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Discover our carefully curated collection of premium green garnets, each piece showcasing 
                the exceptional beauty and quality that Kenya's mines have to offer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gemTypes.map((gem, index) => (
                <a key={index} href={`/gems/${gem.id}`} className="block">
                  <div className="bg-gray-900 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 border border-gray-800 hover:border-green-600/50 cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={gem.image || "/placeholder.svg"}
                        alt={gem.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Premium
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg group-hover:text-green-400 transition-colors">
                          {gem.title}
                        </h3>
                        <p className="text-green-400 text-sm mt-1">Click to view details →</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/gems" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full transition-colors font-semibold">
                View Complete Collection
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Legacy in Numbers</h2>
              <p className="text-gray-400">Four decades of excellence in gemstone mining and trading</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600/10 border border-green-600/20 rounded-full mb-6 group-hover:bg-green-600/20 transition-colors">
                    <stat.icon className="h-10 w-10 text-green-500" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-green-400">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-black relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: 'url(/images/about-banner.jpg)' }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed italic">
                "The true beauty of a gemstone lies not just in its outward appearance, but in the stories 
                it holds, the craftsmanship it represents, and the emotions it evokes in those who behold it."
              </blockquote>
              <div className="text-green-400 font-semibold">— Master Gemologist, Baraka Mining</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-green-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Gemstone?</h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Connect with our expert team to discover the perfect Tsavorite gemstone for your collection or special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors">
                Request Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold transition-colors">
                View Catalog
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  )
}