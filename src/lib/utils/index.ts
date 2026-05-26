// =========================================
// ROTIV TECH - Utility Functions
// =========================================

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes safely without conflicts
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Sanitize string to prevent XSS — strips HTML tags
 */
export function sanitizeString(input: string): string {
  return input.replace(/[<>&"']/g, (char) => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;',
      "'": '&#x27;',
    }
    return entities[char] ?? char
  })
}

/**
 * Format WhatsApp link with message
 */
export function formatWhatsAppLink(phone: string, message?: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const encoded = message ? encodeURIComponent(message) : ''
  return `https://wa.me/${cleaned}${encoded ? `?text=${encoded}` : ''}`
}

/**
 * Format mailto link
 */
export function formatMailtoLink(email: string, subject?: string): string {
  const sanitizedEmail = sanitizeString(email)
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `mailto:${sanitizedEmail}${params}`
}
