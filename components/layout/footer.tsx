import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black/95 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="space-y-2">
            <Link href="/" className="inline-block group">
              <img 
                src="/baraka-mining-light.png" 
                alt="Baraka Mining & Minerals LTD" 
                className="h-40 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <h3 className="text-lg font-semibold text-green-400">
              Baraka Mining & Minerals Ltd
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premier supplier of authentic Tsavorite gemstones from Kenya, 
              committed to ethical mining and exceptional quality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Our Gems', href: '/gems' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Story', href: '/story' },
                { name: 'The Mine', href: '/mine' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="block text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3 text-sm">
              
              <div className="flex items-center space-x-3 text-gray-300">
                <a href='https://www.google.com/maps/search/?api=1&query=Voi,+Taita+Taveta,+Kenya' target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-green-400 transition-colors">
                  <MapPin className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Voi, Taita Taveta, Kenya</span>
                </a>
              </div>
              
              <a 
                href="mailto:barakaminingmi4@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>barakaminingmi4@gmail.com</span>
              </a>
              
              <a 
                href="tel:+254799445800"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>+254 799 445 800</span>
              </a>
              
              <a 
                href="tel:+254769411649"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>+254 769 411 649</span>
              </a>

              {/* Social Media */}
              <div className="pt-2">
                <a 
                  href="#" 
                  className="inline-flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span>@barakamining</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Baraka Mining & Minerals Ltd. All Rights Reserved
            </p>
            <p className="text-gray-400 text-sm">
              Crafted by <a 
                href="https://xeleratedtech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                XeleratedTech.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}