"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Gems', href: '/gems' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Story', href: '/story' },
  { name: 'Mine', href: '/mine' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Main Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-green-600/20' 
          : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - Clean with only hover effect */}
            <Link href="/" className="group">
              <img 
                src="/baraka-mining-light.png" 
                alt="Baraka Mining & Minerals LTD" 
                className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-white hover:text-green-400 transition-all duration-300 relative font-medium px-3 py-2 rounded-md ${
                    (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))) 
                      ? 'text-green-400 bg-green-600/20 font-bold' 
                      : ''
                  }`}
                >
                  {item.name}
                  {(pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-green-400 rounded-full shadow-lg shadow-green-400/50" />
                  )}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-green-600 hover:bg-green-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link href="/gems" className="font-semibold">Find A Gem</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-green-400 transition-colors">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 backdrop-blur-md text-white border-l border-green-600/20">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                      <path fill="currentColor" d="M12,2L2,7V10C2,16.08 6.21,21.26 12,22C17.79,21.26 22,16.08 22,10V7L12,2M12,4.14L18.45,7.5C18.31,8.91 17.77,10.26 16.92,11.39C16.07,12.52 14.95,13.4 13.68,13.95C13.29,14.13 12.87,14.24 12.44,14.3C12.15,14.34 11.85,14.34 11.56,14.3C11.13,14.24 10.71,14.13 10.32,13.95C9.05,13.4 7.93,12.52 7.08,11.39C6.23,10.26 5.69,8.91 5.55,7.5L12,4.14Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Baraka Mining</div>
                    <div className="text-green-400 text-xs font-medium uppercase tracking-wide">Premium Gemstones</div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg hover:text-green-400 transition-colors font-medium px-4 py-2 rounded-md ${
                        (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)))
                          ? 'text-green-400 bg-green-600/20 font-bold' 
                          : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="bg-green-600 hover:bg-green-700 mt-6 shadow-lg">
                    <Link href="/gems">Find A Gem</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}