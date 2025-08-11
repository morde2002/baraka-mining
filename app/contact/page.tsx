"use client"

import { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Award } from 'lucide-react'

const clarityOptions = [
  'IF (Internally Flawless)',
  'VVS1 (Very, Very Slightly Included 1)',
  'VVS2 (Very, Very Slightly Included 2)',
  'VS1 (Very Slightly Included 1)',
  'VS2 (Very Slightly Included 2)',
  'SI1 (Slightly Included 1)',
  'SI2 (Slightly Included 2)',
]

const shapeOptions = [
  'Round Cut',
  'Pear shaped tsavorite cut',
  'Trilliant shaped tsavorite cut',
  'Oval shaped tsavorite cut',
  'Emerald shaped tsavorite cut',
  'Cushion shaped tsavorite cut',
]

interface FormData {
  name: string
  email: string
  dimensions: string
  clarity: string
  shapes: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    dimensions: '',
    clarity: '',
    shapes: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Auto-hide message after 10 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [message])

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return undefined
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return undefined
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return undefined
      default:
        return undefined
    }
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Validate field if it has been touched
    if (touchedFields.has(name)) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (name: string) => {
    setTouchedFields(prev => new Set(prev).add(name))
    const error = validateField(name, formData[name as keyof FormData])
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const isFormValid = () => {
    const requiredFields = ['name', 'email', 'message']
    return requiredFields.every(field => {
      const value = formData[field as keyof FormData]
      return value.trim() && !validateField(field, value)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          dimensions: formData.dimensions,
          clarity: formData.clarity,
          shapes: formData.shapes,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Thank you for your inquiry! We will get back to you within 24 hours.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          dimensions: '',
          clarity: '',
          shapes: '',
          message: ''
        })
        setTouchedFields(new Set())
        setErrors({})
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to send message. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Fixed Header Spacing */}
      <div className="h-20" />
      
      {/* Hero Section with Enhanced Background */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(/shop3.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/20 text-green-400 text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4 mr-2" />
            Get In Touch Today
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discover premium Tsavorite gemstones? Connect with our experts for personalized consultations, 
            custom orders, and professional gemstone services.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <Card className="bg-gray-800 border-gray-700 shadow-2xl hover:border-green-600/50 transition-all duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-white flex items-center">
                  <Send className="h-6 w-6 text-green-500 mr-3" />
                  Send Us A Message
                </CardTitle>
                <p className="text-gray-400">Fill out the form below and we'll respond within 24 hours.</p>
              </CardHeader>
              <CardContent className="pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-200 ${
                          errors.name ? 'border-red-500 ring-red-500' : ''
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-2 flex items-center">
                          <span className="w-1 h-1 bg-red-400 rounded-full mr-2" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email Address *"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-200 ${
                          errors.email ? 'border-red-500 ring-red-500' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-2 flex items-center">
                          <span className="w-1 h-1 bg-red-400 rounded-full mr-2" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Input
                      placeholder="Preferred Dimensions (mm) - Optional"
                      value={formData.dimensions}
                      onChange={(e) => handleInputChange('dimensions', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Select value={formData.clarity} onValueChange={(value) => handleInputChange('clarity', value)}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white h-12 focus:ring-2 focus:ring-green-500">
                          <SelectValue placeholder="Select Clarity Grade" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          {clarityOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-white hover:bg-gray-600">
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select value={formData.shapes} onValueChange={(value) => handleInputChange('shapes', value)}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white h-12 focus:ring-2 focus:ring-green-500">
                          <SelectValue placeholder="Select Preferred Shape" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          {shapeOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-white hover:bg-gray-600">
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Tell us about your requirements, budget, or any specific questions *"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 transition-all duration-200 ${
                        errors.message ? 'border-red-500 ring-red-500' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-2 flex items-center">
                        <span className="w-1 h-1 bg-red-400 rounded-full mr-2" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={!isFormValid() || isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                  
                  {/* Enhanced Message Display */}
                  {message && (
                    <div className={`mt-4 p-4 rounded-lg text-sm border-l-4 ${
                      message.type === 'success' 
                        ? 'bg-green-900/20 text-green-300 border-green-500 border-l-green-500' 
                        : 'bg-red-900/20 text-red-300 border-red-500 border-l-red-500'
                    }`}>
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <span className="font-medium">{message.text}</span>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl hover:border-green-600/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <Users className="h-6 w-6 text-green-500 mr-3" />
                    Get In Touch
                  </CardTitle>
                  <p className="text-gray-400">Multiple ways to reach our gemstone experts</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200">
                    <div className="p-3 bg-green-600/20 rounded-lg">
                      <Phone className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Phone Numbers</h3>
                      <p className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">+254 799 445 800</p>
                      <p className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">+254 769 411 649</p>
                      <p className="text-gray-500 text-sm mt-1">Available 8:00 AM - 10:00 PM EAT</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200">
                    <div className="p-3 bg-green-600/20 rounded-lg">
                      <Mail className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Email Address</h3>
                      <p className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">barakaminingmi4@gmail.com</p>
                      <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200">
                    <div className="p-3 bg-green-600/20 rounded-lg">
                      <MapPin className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Our Location</h3>
                      <p className="text-gray-300">
                        Baraka Mining & Minerals Ltd<br />
                        Voi, Taita Taveta, Kenya
                      </p>
                      <p className="text-gray-500 text-sm mt-1">Visit by appointment only</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200">
                    <div className="p-3 bg-green-600/20 rounded-lg">
                      <Clock className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Business Hours</h3>
                      <p className="text-gray-300">Daily: 8:00 AM to 10:00 PM</p>
                      <p className="text-gray-500 text-sm mt-1">East Africa Time (GMT+3)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Map */}
              <Card className="bg-gray-800 border-gray-700 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-700 relative overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2308.2292165270364!2d39.68341304027766!3d-4.0456333571099945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012f3ab14e4a1%3A0x6520ad3f99ae32f7!2sKarama%20Chemist!5e0!3m2!1sen!2ske!4v1664952585513!5m2!1sen!2ske"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="hover:opacity-90 transition-opacity duration-200"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm">
                      📍 Taita Taveta, Kenya
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}