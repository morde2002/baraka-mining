import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 mining-texture opacity-10" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <img 
                src="/baraka-mining-logo2.jpg" 
                alt="Baraka Mining & Minerals LTD" 
                className="h-16 w-auto mb-6"
              />
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    Baraka Mining & Minerals Ltd, Voi, Taita Taveta, Kenya
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <a href="mailto:barakaminingmi4@gmail.com" className="text-gray-300 hover:text-green-500 transition-colors">
                    barakaminingmi4@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <div className="space-y-1">
                    <a href="tel:+254799445800" className="block text-gray-300 hover:text-green-500 transition-colors">
                      +254 799 445 800
                    </a>
                    <a href="tel:+254769411649" className="block text-gray-300 hover:text-green-500 transition-colors">
                      +254 769 411 649
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-green-500">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/" className="text-gray-300 hover:text-green-500 transition-colors">
                  Home
                </Link>
                <Link href="/gems" className="text-gray-300 hover:text-green-500 transition-colors">
                  Our Gems
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-green-500 transition-colors">
                  About Us
                </Link>
                <Link href="/story" className="text-gray-300 hover:text-green-500 transition-colors">
                  Our Story
                </Link>
                <Link href="/mine" className="text-gray-300 hover:text-green-500 transition-colors">
                  The Mine
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-green-500">Get In Touch</h3>
              <p className="text-gray-300">
                Ready to discover premium Tsavorite gemstones? Contact us today for inquiries and custom orders.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700 w-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
              
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2024 BARAKA MINING & MINERALS LTD. All Rights Reserved
              </p>
              <p className="text-gray-400 text-sm">
                Made by{' '}
                <a 
                  href="https://xeleratedtech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 transition-colors"
                >
                  xeleratedtech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
