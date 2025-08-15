// Create this file: app/api/health/route.ts

import { NextResponse } from 'next/server'

export async function GET() {
  console.log('Health check endpoint accessed')
  
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    environmentVariables: {
      hasZohoEmail: !!process.env.ZOHO_EMAIL,
      hasZohoPassword: !!process.env.ZOHO_PASSWORD,
      hasRecaptchaSecret: !!process.env.RECAPTCHA_SECRET_KEY,
      hasRecaptchaSiteKey: !!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    },
    message: 'API is working correctly'
  })
}

export async function POST() {
  console.log('Health check POST endpoint accessed')
  
  return NextResponse.json({
    status: 'ok',
    method: 'POST',
    message: 'POST endpoint is working'
  })
}