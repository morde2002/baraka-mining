import PageWrapper from '@/components/layout/page-wrapper'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section with Background - Fixed spacing for header */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/Wanjiru7.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="inline-block bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-green-600/30">
              Our Journey
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learn about our journey, our values, and the remarkable people behind Baraka Mining & Minerals LTD.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mb-6">
                  Every Journey Tells a Story
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  This story is based on true life events embracing an African woman whose upbringing and will to be successful in life
                  had so many obstacles and difficulties but armed with the attitude of welcoming changes, was able to take on challenges
                  that came with the African customary law and was able to conquer all and provide an example for all her generations to come.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Founded by the remarkable Elizabeth Wanjiru, known as "The Queen of Green," Baraka Mining & Minerals LTD has been
                  a pioneer in the Kenyan gemstone industry for over four decades.
                </p>
              </div>
              <div className="space-y-6">
                <Card className="bg-gray-800 border-gray-700 hover:border-green-600/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <img
                      src="/mr-and-mrs-kilio.jpg"
                      alt="Mr and Mrs Kilio - Directors"
                      className="w-full h-[380px] object-cover rounded-lg mb-4"
                    />
                    <p className="text-white text-center font-semibold">
                      Mr and Mrs Kilio - Directors Baraka Mining Ltd
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Leadership
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mb-6">
                Our Leadership
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionary leaders who continue the legacy of excellence in gemstone mining.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-gray-700 hover:border-green-600/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <img
                    src="/founder.png"
                    alt="Mama Wanjiru"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-600/30"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">Mama Wanjiru</h3>
                  <p className="text-green-500 mb-3 font-medium">Founder</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The visionary founder who broke barriers and established Baraka Mining as a leading gemstone company in Kenya.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-green-600/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <img
                    src="/mrs-kilio.jpg"
                    alt="Gladwell Wangui"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-600/30"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">Gladwell Wangui</h3>
                  <p className="text-green-500 mb-3 font-medium">Managing Director</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Following in her mother's footsteps, she leads the company with the same passion and dedication.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-green-600/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <img
                    src="/mr-kilio.jpg"
                    alt="Christopher Kilio Maina"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-600/30"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">Christopher Kilio Maina</h3>
                  <p className="text-green-500 mb-3 font-medium">Director</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Brings expertise in operations and international business development to the company.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Core Values
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair mb-6">
                Our Values
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do at Baraka Mining & Minerals LTD.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-gray-700 hover:border-green-600/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white text-2xl font-bold">E</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We strive for excellence in every aspect of our operations, from mining to customer service.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-green-600/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white text-2xl font-bold">I</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We conduct our business with honesty, transparency, and ethical practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-green-600/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white text-2xl font-bold">S</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Sustainability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We are committed to sustainable mining practices that protect our environment.
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