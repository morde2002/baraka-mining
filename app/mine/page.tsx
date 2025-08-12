"use client"

import { useState } from 'react'
import PageWrapper from '@/components/layout/page-wrapper'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Loader2, Camera, Mountain, Users, Shield } from 'lucide-react'

// Reversed order - newest images first (37 down to 19)
const initialImages = [
  { src: "/worker (37).jpg", number: 37, isHoliday: true },
  { src: "/worker (36).jpg", number: 36, isHoliday: true },
  { src: "/worker (35).jpg", number: 35, isHoliday: true },
  { src: "/worker (34).jpg", number: 34, isHoliday: false },
  { src: "/worker (33).jpg", number: 33, isHoliday: false },
  { src: "/worker (32).jpg", number: 32, isHoliday: false },
  { src: "/worker (31).jpg", number: 31, isHoliday: false },
  { src: "/worker (30).jpg", number: 30, isHoliday: false },
  { src: "/worker (29).jpg", number: 29, isHoliday: false },
  { src: "/worker (28).jpg", number: 28, isHoliday: false },
  { src: "/worker (27).jpg", number: 27, isHoliday: false },
  { src: "/worker (26).jpg", number: 26, isHoliday: false },
  { src: "/worker (25).jpg", number: 25, isHoliday: false },
  { src: "/worker (24).jpg", number: 24, isHoliday: false },
  { src: "/worker (23).jpg", number: 23, isHoliday: false },
  { src: "/worker (22).jpg", number: 22, isHoliday: false },
  { src: "/worker (21).jpg", number: 21, isHoliday: false },
  { src: "/worker (20).jpg", number: 20, isHoliday: false },
]

// Additional images in descending order (18 down to 1)
const additionalImages = [
  { src: "/worker (19).jpg", number: 19, isHoliday: false },
  { src: "/worker (18).jpg", number: 18, isHoliday: false },
  { src: "/worker (17).jpg", number: 17, isHoliday: false },
  { src: "/worker (16).jpg", number: 16, isHoliday: false },
  { src: "/worker (15).jpg", number: 15, isHoliday: false },
  { src: "/worker (14).jpg", number: 14, isHoliday: false },
  { src: "/worker (13).jpg", number: 13, isHoliday: false },
  { src: "/worker (12).jpg", number: 12, isHoliday: false },
  { src: "/worker (11).jpg", number: 11, isHoliday: false },
  { src: "/worker (10).jpg", number: 10, isHoliday: false },
  { src: "/worker (9).jpg", number: 9, isHoliday: false },
  { src: "/worker (8).jpg", number: 8, isHoliday: false },
  { src: "/worker (7).jpg", number: 7, isHoliday: false },
  { src: "/worker (6).jpg", number: 6, isHoliday: false },
  { src: "/worker (5).jpg", number: 5, isHoliday: false },
  { src: "/worker (4).jpg", number: 4, isHoliday: false },
  { src: "/worker (3).jpg", number: 3, isHoliday: false },
  { src: "/worker (2).jpg", number: 2, isHoliday: false },
  { src: "/worker (1).jpg", number: 1, isHoliday: false },
]

const processSteps = [
  {
    number: 1,
    title: "Geological Exploration",
    description: "Advanced geological surveys and prospecting techniques to identify potential Tsavorite deposits in the Taita Hills region.",
    icon: Mountain,
    details: ["Geological mapping", "Soil sampling", "Ground surveys", "Deposit analysis"]
  },
  {
    number: 2,
    title: "Sustainable Extraction",
    description: "Environmentally responsible mining methods that preserve the ecosystem while extracting premium gemstones.",
    icon: Shield,
    details: ["Selective mining", "Environmental protection", "Waste management", "Land rehabilitation"]
  },
  {
    number: 3,
    title: "Expert Processing",
    description: "Skilled artisans sort, grade, and process raw gemstone materials with precision and care.",
    icon: Users,
    details: ["Hand sorting", "Quality grading", "Initial cutting", "Size classification"]
  },
  {
    number: 4,
    title: "Quality Assurance",
    description: "Rigorous quality control and certification processes ensure only the finest Tsavorite reaches our clients.",
    icon: Camera,
    details: ["Gemological testing", "Certification", "Documentation", "Final inspection"]
  }
]

export default function MinePage() {
  const [displayedImages, setDisplayedImages] = useState(initialImages)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreImages = () => {
    setIsLoading(true)
    
    setTimeout(() => {
      const remainingImages = additionalImages.length - currentIndex
      const imagesToLoad = Math.min(9, remainingImages)
      const nextImages = additionalImages.slice(currentIndex, currentIndex + imagesToLoad)
      setDisplayedImages(prev => [...prev, ...nextImages])
      setCurrentIndex(prev => prev + imagesToLoad)
      setIsLoading(false)
    }, 1000)
  }

  const hasMoreImages = currentIndex < additionalImages.length

  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Fixed Header Spacing */}
        <div className="h-20" />
        
        {/* Enhanced Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/bg-mine.png)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-500" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30 mb-6 text-sm font-medium px-4 py-2">
              <Mountain className="h-4 w-4 mr-2" />
              Premium Mining Operations
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white font-playfair mb-6 leading-tight">
              THE MINE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Journey deep into the heart of Taita Taveta, Kenya, where three generations of expertise 
              have perfected the art of extracting the world's most coveted Tsavorite gemstones.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <span>Sustainable Mining Practices</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <span>Expert Craftsmanship</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Mine Gallery */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30 mb-4">
                <Camera className="h-4 w-4 mr-2" />
                Behind the Scenes
              </Badge>
              <h2 className="text-4xl font-bold text-white font-playfair mb-4">Mining Operations Gallery</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Witness the dedication and skill of our mining team as they extract Tsavorite gemstones 
                from the rich deposits of Taita Taveta. <span className="text-green-400">Latest images shown first.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedImages.map((image, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl hover:border-green-600/50">
                  <CardContent className="p-0 relative">
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={`Mining operation ${image.number}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Holiday Badge */}
                      {image.isHoliday && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                          🏖️ Holiday
                        </div>
                      )}
                      
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white text-sm font-medium">
                          {image.isHoliday ? "Workers on Holiday" : `Mining Operation #${image.number}`}
                        </p>
                        <p className="text-gray-300 text-xs">
                          {image.isHoliday ? "Well-deserved break time" : "Taita Taveta, Kenya"}
                        </p>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {hasMoreImages && (
              <div className="text-center mt-16">
                <Button
                  onClick={loadMoreImages}
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Loading More Images...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Camera className="h-5 w-5 mr-2" />
                      Load More Images ({additionalImages.length - currentIndex} remaining)
                    </div>
                  )}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Enhanced Mining Process Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-400/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-20">
              <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30 mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Our Methodology
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
                Mining Process Excellence
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From exploration to extraction, we follow sustainable and ethical mining practices 
                refined over three generations of expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-600/50 transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-8 text-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <span className="text-white text-2xl font-bold">{step.number}</span>
                        </div>
                        
                        <div className="mb-4">
                          <Icon className="h-8 w-8 text-green-400 mx-auto mb-3" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-4 font-playfair">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center justify-center text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-500">60+</div>
                <div className="text-gray-400">Years of Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-500">1000+</div>
                <div className="text-gray-400">Gems Extracted</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-500">50+</div>
                <div className="text-gray-400">Countries Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-500">3</div>
                <div className="text-gray-400">Generations</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  )
}