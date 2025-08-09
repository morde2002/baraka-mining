"use client"

import { useState } from 'react'
import PageWrapper from '@/components/layout/page-wrapper'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const initialImages = [
  "/worker (1).jpg", 
  "/worker (2).jpg", 
  "/worker (3).jpg", 
  "/worker (4).jpg",
  "/worker (5).jpg",
  "/worker (6).jpg",
  "/worker (7).jpg",
  "/worker (8).jpg",
  "/worker (9).jpg",
  "/worker (10).jpg",
  "/worker (11).jpg",
  "/worker (12).jpg",
  "/worker (13).jpg",
  "/worker (14).jpg",
  "/worker (15).jpg",
  "/worker (16).jpg",
  "/worker (17).jpg",
  "/worker (18).jpg",]

const additionalImages = [
  
  "/worker (19).jpg",
  "/worker (20).jpg",
  "/worker (21).jpg",
  "/worker (22).jpg",
  "/worker (23).jpg",
  "/worker (24).jpg",
  "/worker (25).jpg",
  "/worker (26).jpg",
  "/worker (27).jpg",
  "/worker (28).jpg",
  "/worker (29).jpg",
  "/worker (30).jpg",
  "/worker (31).jpg",
  "/worker (32).jpg",
  "/worker (33).jpg",
  "/worker (34).jpg",
  "/worker (35).jpg",
  "/worker (36).jpg",
  "/worker (37).jpg",
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
        
        {/* Hero Section with Background */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/bg-mine.png)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <p className="text-green-500 text-lg mb-4 font-semibold">View Our Gemstone Mine</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-6">
              THE MINE
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a virtual tour of our mining operations in Taita Taveta, Kenya, where we extract the world's finest Tsavorite gemstones.
            </p>
          </div>
        </section>

        {/* Mine Gallery */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedImages.map((image, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Mining operation ${index + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {hasMoreImages && (
              <div className="text-center mt-12">
                <Button
                  onClick={loadMoreImages}
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  {isLoading ? 'Loading...' : 'Load More'}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Mining Process Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
                Our Mining Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From exploration to extraction, we follow sustainable and ethical mining practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Exploration</h3>
                  <p className="text-gray-300">
                    Geological surveys and prospecting to identify potential gemstone deposits.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Extraction</h3>
                  <p className="text-gray-300">
                    Careful extraction of Tsavorite gemstones using sustainable mining methods.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Processing</h3>
                  <p className="text-gray-300">
                    Sorting, grading, and initial processing of raw gemstone materials.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Quality Control</h3>
                  <p className="text-gray-300">
                    Rigorous quality assessment and certification of finished gemstones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  )
}
