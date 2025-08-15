// app/api/contact/route.ts - FIXED VERSION

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Spam detection words
const spamKeywords = [
  'bitcoin', 'crypto', 'cryptocurrency', 'investment', 'loan', 'casino', 
  'gambling', 'viagra', 'cialis', 'weight loss', 'make money', 'get rich',
  'mlm', 'pyramid scheme', 'offshore', 'tax haven', 'free money',
  'click here', 'limited time', 'act now', 'congratulations you won'
]

interface ContactFormData {
  name: string
  email: string
  dimensions: string
  clarity: string
  shapes: string
  message: string
  captchaToken: string
  honeypot: string
}

// Verify reCAPTCHA
async function verifyRecaptcha(token: string): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('Verifying reCAPTCHA token:', token ? 'Token received' : 'No token')
    
    if (!token) {
      return { success: false, error: 'No CAPTCHA token provided' }
    }

    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error('RECAPTCHA_SECRET_KEY not found in environment variables')
      return { success: false, error: 'Server configuration error' }
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    })
    
    if (!response.ok) {
      console.error('reCAPTCHA API request failed:', response.status, response.statusText)
      return { success: false, error: 'CAPTCHA verification service unavailable' }
    }
    
    const data = await response.json()
    console.log('reCAPTCHA response:', data)
    
    if (!data.success) {
      const errorCodes = data['error-codes'] || []
      console.error('reCAPTCHA verification failed:', errorCodes)
      
      // Handle specific error codes
      if (errorCodes.includes('timeout-or-duplicate')) {
        return { success: false, error: 'CAPTCHA has expired. Please try again.' }
      } else if (errorCodes.includes('invalid-input-response')) {
        return { success: false, error: 'Invalid CAPTCHA response. Please try again.' }
      } else {
        return { success: false, error: 'CAPTCHA verification failed. Please try again.' }
      }
    }
    
    return { success: true }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return { success: false, error: 'CAPTCHA verification service error' }
  }
}

// Security validation
function validateSecurity(data: ContactFormData): { isValid: boolean; error?: string } {
  // 1. Honeypot check
  if (data.honeypot.trim()) {
    return { isValid: false, error: 'Security validation failed' }
  }

  // 2. Spam detection
  const fullText = `${data.name} ${data.email} ${data.message}`.toLowerCase()
  if (spamKeywords.some(keyword => fullText.includes(keyword))) {
    return { isValid: false, error: 'Message contains prohibited content' }
  }

  // 3. Suspicious patterns
  const hasRepeatedChars = /(.)\1{4,}/.test(fullText)
  const hasExcessiveLinks = (fullText.match(/http|www\./g) || []).length > 2
  const hasExcessiveCaps = (fullText.match(/[A-Z]/g) || []).length / fullText.length > 0.5
  
  if (hasRepeatedChars || hasExcessiveLinks || hasExcessiveCaps) {
    return { isValid: false, error: 'Please check your message format' }
  }

  return { isValid: true }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Received contact form submission')
    const formData: ContactFormData = await request.json()
    console.log('Form data received:', { 
      ...formData, 
      captchaToken: formData.captchaToken ? 'Present' : 'Missing',
      message: formData.message ? `${formData.message.substring(0, 50)}...` : 'Empty'
    })

    // 1. Validate required fields
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
      console.log('Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      )
    }

    // 2. Security validation
    const securityCheck = validateSecurity(formData)
    if (!securityCheck.isValid) {
      console.log('Security validation failed:', securityCheck.error)
      return NextResponse.json(
        { error: securityCheck.error }, 
        { status: 400 }
      )
    }

    // 3. Verify reCAPTCHA
    const captchaResult = await verifyRecaptcha(formData.captchaToken)
    if (!captchaResult.success) {
      console.log('CAPTCHA verification failed:', captchaResult.error)
      return NextResponse.json(
        { error: captchaResult.error || 'CAPTCHA verification failed' }, 
        { status: 400 }
      )
    }

    // 4. Create Zoho Mail transporter - FIXED THIS LINE
    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
      console.error('Missing Zoho email configuration')
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      )
    }

    console.log('Creating email transporter...')
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      },
      // Only enable debugging in development
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development'
    })

    if (process.env.NODE_ENV === 'development') {
      console.log('Testing SMTP connection...')
      try {
        await transporter.verify()
        console.log('SMTP connection verified successfully')
      } catch (verifyError) {
        console.error('SMTP connection failed:', verifyError)
        return NextResponse.json(
          { error: 'Email service connection failed' },
          { status: 500 }
        )
      }
    }

    // 5. Email content
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: #2d5a27; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .info-section { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #2d5a27; }
            .label { font-weight: bold; color: #2d5a27; }
            .message-box { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; border: 1px solid #ddd; }
            .footer { background: #333; color: white; padding: 10px; text-align: center; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>🟢 New Website Inquiry</h1>
            <p>Baraka Mining & Minerals Ltd</p>
        </div>
        
        <div class="content">
            <div class="info-section">
                <h3>Contact Information</h3>
                <p><span class="label">Name:</span> ${formData.name}</p>
                <p><span class="label">Email:</span> ${formData.email}</p>
                <p><span class="label">Date:</span> ${new Date().toLocaleString('en-KE', {
                  timeZone: 'Africa/Nairobi',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
            </div>

            ${formData.dimensions || formData.clarity || formData.shapes ? `
            <div class="info-section">
                <h3>Gemstone Requirements</h3>
                ${formData.dimensions ? `<p><span class="label">Dimensions:</span> ${formData.dimensions}</p>` : ''}
                ${formData.clarity ? `<p><span class="label">Clarity:</span> ${formData.clarity}</p>` : ''}
                ${formData.shapes ? `<p><span class="label">Shape:</span> ${formData.shapes}</p>` : ''}
            </div>
            ` : ''}

            <div class="message-box">
                <h3>Customer Message</h3>
                <p>${formData.message.replace(/\n/g, '<br>')}</p>
            </div>
        </div>

        <div class="footer">
            <p>This email was sent securely from your website contact form</p>
            <p>Baraka Mining & Minerals Ltd | Voi, Taita Taveta, Kenya</p>
        </div>
    </body>
    </html>
    `

    // 6. Send email
    console.log('Attempting to send email...')
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.ZOHO_EMAIL}>`,
      to: 'admin@barakaminingltd.co.ke',
      replyTo: formData.email, // Allows direct reply to customer
      subject: `🟢 New Inquiry from ${formData.name}`,
      html: htmlContent,
      text: `
New Website Inquiry

Contact Information:
Name: ${formData.name}
Email: ${formData.email}
Date: ${new Date().toLocaleString()}

${formData.dimensions || formData.clarity || formData.shapes ? `
Gemstone Requirements:
${formData.dimensions ? `Dimensions: ${formData.dimensions}` : ''}
${formData.clarity ? `Clarity: ${formData.clarity}` : ''}
${formData.shapes ? `Shape: ${formData.shapes}` : ''}
` : ''}

Message:
${formData.message}

---
This email was sent from your website contact form.
      `
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    })

  } catch (error) {
    console.error('Email sending failed:', error)
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      })
    }
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}