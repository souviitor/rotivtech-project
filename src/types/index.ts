// =========================================
// ROTIV TECH - Global Type Definitions
// =========================================

export interface ServiceFeature {
  id: string
  icon: string
  title: string
  subtitle: string
  description: string
}

export interface SupportedSystem {
  id: string
  name: string
  color: string
  versions: string
  services: string
}

export interface Problem {
  id: string
  label: string
}

export interface ContactInfo {
  whatsapp: string
  email: string
  website: string
}

export interface NavLink {
  href: string
  label: string
}

export interface SeoMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
}
