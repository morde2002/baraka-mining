import PageWrapper from '@/components/layout/page-wrapper'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Crown, Heart, Mountain, Users, Award, Star } from 'lucide-react'

const storyParts = [
  {
    title: "HER OWN WOMAN PART-1",
    subtitle: "The Beginning of a Legend",
    content: `On the eve of 5th August 1935, a baby girl was born into the Kinyanjui's family. Unbeknown to them, their new-born child had a bright future despite all the challenges that were to come which conflicted with her culture. The Kinyanjui family decided to name her Elizabeth Wanjiru and this is her story.

Born in the year 1935, gender roles were strictly adhered to by the African communities where women were to stay home and do wifely duties while the men had to go out and search for ways to fend for their families. Despite Mama Wanjiru being raised in such a community, fate had other plans for her.

This lifestyle did not suit Mama Wanjiru because she was curious about what was happening in the outside world and wanted to become successful and independent. After much consideration, Mama Wanjiru decided to take a bold step and leave home in search of a better future for herself and for her generation to come.`,
    image: '/founder.png',
    icon: Crown,
    year: "1935"
  },
  {
    title: "HER OWN WOMAN PART-2",
    subtitle: "Discovery and Determination",
    content: `During this time, she would see brokers sell coloured stones not knowing what they were and make money, making her even more curious. With a good reputation as a skilled tailor, Mama Wanjiru attracted more customers and as the nature of women and the love for gossip, they also talked about the coloured stones, and that's when she heard they were called gemstones.

She got so intrigued. she started asking questions and doing her own research on gemstones. After months of research, she learned that her mother land, Kenya, also had gemstones and that is when she thought of returning to her homeland.

After 1963, after Kenya gained its independence, Mama Wanjiru knew it was time for her to relocate. Despite the gender roles preventing her from doing so, Mama Wanjiru was determined. With no one to help her and all odds against her, she decided to do the unthinkable.`,
    image: '/Wanjiru2.jpg',
    icon: Heart,
    year: "1963"
  },
  {
    title: "HER OWN WOMAN PART-3",
    subtitle: "Against All Odds",
    content: `With only 5 workers by her side, Mama Wanjiru was the only woman in Kenya who practiced mining at that time. Mama Wanjiru faced stiff competition from Greek companies that had already settled in Kenya, they also had all paraphernalia needed, market also and had employed most of the able-bodied Africans and it was hard for Wanjiru to get more employees.

Mama Wanjiru located a mining area that was very deep in the savannah where no one had settled yet. At the time TaitaTaveta was a very arid area that was sparsely populated and there was always a risk of encountering wild animals.

With not enough workforce, Mama Wanjiru was forced to fetch water and cook for her 5 workers daily. TaitaTaveta being a very arid area, finding a water source was next to impossible.`,
    image: '/Wanjiru3.jpg',
    icon: Mountain,
    year: "1970s"
  }
]

const legacyStats = [
  { number: "85+", label: "Years of Legacy", icon: Star },
  { number: "3", label: "Generations", icon: Users },
  { number: "1st", label: "Woman Miner in Kenya", icon: Crown },
  { number: "1000+", label: "Lives Impacted", icon: Heart }
]

export default function StoryPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Fixed Header Spacing */}
        <div className="h-20" />
        
        {/* Enhanced Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: 'url(/Wanjiru4.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-500" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30 mb-6 text-lg font-medium px-6 py-3">
              <Crown className="h-5 w-5 mr-2" />
              The Queen of Green Legacy
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white font-playfair mb-8 leading-tight">
              Our Story
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                The extraordinary journey of <span className="text-green-400 font-semibold">Elizabeth Wanjiru</span>, 
                "The Queen of Green," who defied all odds to build Kenya's first woman-owned mining empire.
              </p>
              <p className="text-lg text-gray-400">
                From a small village in 1935 to founding a gemstone dynasty that spans three generations, 
                this is the story of courage, determination, and the pursuit of excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Stats */}
        <section className="py-16 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {legacyStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-green-600/50">
                      <Icon className="h-8 w-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Story Timeline */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30 mb-6">
                <Mountain className="h-4 w-4 mr-2" />
                The Journey
              </Badge>
              <h2 className="text-4xl font-bold text-white font-playfair mb-4">A Story of Courage</h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                Follow Elizabeth Wanjiru's remarkable transformation from a curious young woman 
                to Kenya's pioneering female mining entrepreneur.
              </p>
            </div>

            <div className="space-y-20">
              {storyParts.map((part, index) => {
                const Icon = part.icon
                return (
                  <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    {/* Story Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <Card className="bg-gray-800 border-gray-700 hover:border-green-600/50 transition-all duration-300 shadow-2xl overflow-hidden">
                        <CardContent className="p-8 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                          
                          <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-center space-x-4 mb-6">
                              <div className="p-3 bg-green-600/20 rounded-xl">
                                <Icon className="h-6 w-6 text-green-400" />
                              </div>
                              <div>
                                <Badge variant="outline" className="border-green-600/50 text-green-400 mb-2">
                                  {part.year}
                                </Badge>
                                <h3 className="text-sm text-gray-400 font-medium">{part.subtitle}</h3>
                              </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-green-500 font-playfair mb-6">
                              {part.title}
                            </h2>

                            <div className="text-gray-300 leading-relaxed space-y-4">
                              {part.content.split('\n\n').map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-base leading-7">{paragraph}</p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Story Image */}
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-50" />
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-700 group-hover:border-green-600/50 transition-all duration-300">
                          <img
                            src={part.image || "/placeholder.svg"}
                            alt={part.title}
                            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Image Overlay */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                              <div className="text-green-400 text-sm font-medium mb-1">{part.year}</div>
                              <div className="text-white font-semibold">{part.subtitle}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Legacy Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <Card className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-700 shadow-2xl overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-green-400/5" />
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 bg-green-600/20 rounded-2xl">
                      <Award className="h-8 w-8 text-green-400" />
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30 text-lg px-6 py-2">
                    <Crown className="h-5 w-5 mr-2" />
                    The Legacy Continues
                  </Badge>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-white font-playfair leading-tight">
                    Three Generations of Excellence
                  </h2>
                  
                  <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      In 2013, Elizabeth Wanjiru, Queen of Green, had to retire from the company due to her deteriorating health 
                      condition and passed the mantle down to her daughter <span className="text-green-400 font-semibold">Gladwell Wangui</span>. 
                      Having a good example set for her, Gladwell decided to follow in the footsteps of her mother.
                    </p>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      The Baraka Mining Company is a family business inherited from Elizabeth Mama Wanjiru to her kins, 
                      it runs under Gladwell Wangui, her husband <span className="text-green-400 font-semibold">Christopher Kilio Maina </span> 
                      and her brother <span className="text-green-400 font-semibold">Moses Kinyanjui</span>.
                    </p>
                  </div>
                  
                  <div className="pt-8 border-t border-gray-700">
                    <div className="flex items-center justify-center space-x-2 text-green-400 text-xl font-semibold">
                      <Star className="h-6 w-6" />
                      <span>"Continuing the Legacy of Excellence"</span>
                      <Star className="h-6 w-6" />
                    </div>
                  </div>
                  
                  {/* Family Leadership */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-gray-700/50 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
                      <div className="text-green-400 font-semibold text-lg">Gladwell Wangui</div>
                      <div className="text-gray-400 text-sm">Managing Director</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
                      <div className="text-green-400 font-semibold text-lg">Christopher Kilio Maina</div>
                      <div className="text-gray-400 text-sm">Operations Director</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
                      <div className="text-green-400 font-semibold text-lg">Moses Kinyanjui</div>
                      <div className="text-gray-400 text-sm">Technical Director</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  )
}