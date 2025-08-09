"use server"

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Invalid email address'),
  dimensions: z.string().optional(),
  clarity: z.string().optional(),
  shapes: z.string().optional(),
  message: z.string().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
})

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      dimensions: formData.get('dimensions') as string,
      clarity: formData.get('clarity') as string,
      shapes: formData.get('shapes') as string,
      message: formData.get('message') as string,
    }

    // Validate the data
    const validatedData = contactSchema.parse(data)

    // Here you would typically send an email or save to database
    // For now, we'll simulate a successful submission
    console.log('Contact form submission:', validatedData)

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
      success: true,
      message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Please check your form data and try again.',
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    }
  }
}
