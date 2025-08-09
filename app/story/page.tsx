import PageWrapper from '@/components/layout/page-wrapper'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'

const storyParts = [
  {
    title: "HER OWN WOMAN PART-1",
    content: `On the eve of 5th August 1935, a baby girl was born into the Kinyanjui's family. Unbeknown to them, their new-born child had a bright future despite all the challenges that were to come which conflicted with her culture. The Kinyanjui family decided to name her Elizabeth Wanjiru and this is her story.

Born in the year 1935, gender roles were strictly adhered to by the African communities where women were to stay home and do wifely duties while the men had to go out and search for ways to fend for their families. Despite Mama Wanjiru being raised in such a community, fate had other plans for her.

This lifestyle did not suit Mama Wanjiru because she was curious about what was happening in the outside world and wanted to become successful and independent. After much consideration, Mama Wanjiru decided to take a bold step and leave home in search of a better future for herself and for her generation to come.`,
    image: '/founder.png'
  },
  {
    title: "HER OWN WOMAN PART-2",
    content: `During this time, she would see brokers sell coloured stones not knowing what they were and make money, making her even more curious. With a good reputation as a skilled tailor, Mama Wanjiru attracted more customers and as the nature of women and the love for gossip, they also talked about the coloured stones, and that's when she heard they were called gemstones.

She got so intrigued. she started asking questions and doing her own research on gemstones. After months of research, she learned that her mother land, Kenya, also had gemstones and that is when she thought of returning to her homeland.

After 1963, after Kenya gained its independence, Mama Wanjiru knew it was time for her to relocate. Despite the gender roles preventing her from doing so, Mama Wanjiru was determined. With no one to help her and all odds against her, she decided to do the unthinkable.`,
    image: '/Wanjiru2.jpg'
  },
  {
    title: "HER OWN WOMAN PART-3",
    content: `With only 5 workers by her side, Mama Wanjiru was the only woman in Kenya who practiced mining at that time. Mama Wanjiru faced stiff competition from Greek companies that had already settled in Kenya, they also had all paraphernalia needed, market also and had employed most of the able-bodied Africans and it was hard for Wanjiru to get more employees.

Mama Wanjiru located a mining area that was very deep in the savannah where no one had settled yet. At the time TaitaTaveta was a very arid area that was sparsely populated and there was always a risk of encountering wild animals.

With not enough workforce, Mama Wanjiru was forced to fetch water and cook for her 5 workers daily. TaitaTaveta being a very arid area, finding a water source was next to impossible.`,
    image: '/Wanjiru3.jpg'
  }
]

export default function StoryPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section with Background */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/Wanjiru4.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The remarkable journey of Elizabeth Wanjiru, "The Queen of Green," and how she built a mining empire against all odds.
            </p>
          </div>
        </section>

        {/* Story Timeline */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {storyParts.map((part, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-green-500 font-playfair mb-6">
                          {part.title}
                        </h2>
                        <div className="text-gray-300 leading-relaxed space-y-4">
                          {part.content.split('\n\n').map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <img
                        src={part.image || "/placeholder.svg"}
                        alt={part.title}
                        className="w-full h-96 object-cover rounded-lg shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-6">
                  The Legacy Continues
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                  In 2013, Elizabeth Wanjiru, Queen of Green, had to retire from the company due to her deteriorating health 
                  condition and passed the mantle down to her daughter Gladwell Wangui. Having a good example set for her, Gladwell
                  decided to follow in the footsteps of her mother. The Baraka Mining Company is a family business inherited from Elizabeth
                  Mama Wanjiru to her kins, it runs under Gladwell Wangui, her husband Christopher Kilio Maina and her brother Moses Kinyanjui.
                </p>
                <p className="text-green-500 text-xl font-semibold">
                  "Continuing the Legacy of Excellence"
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  )
}
