// =========================================
// ROTIV TECH - Site Constants & Data
// =========================================

import type {
  ServiceFeature,
  SupportedSystem,
  Problem,
  ContactInfo,
  NavLink,
  SeoMetadata,
} from '@/types'

export const SITE_CONFIG = {
  name: 'Rotiv Tech',
  tagline: 'Tecnologia Que Move Você',
  description:
    'Serviço profissional de manutenção de computadores para Mac, Linux e Windows. Atendimento especializado com preço justo.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rotivtech.com.br',
  price: 'R$ 100,00',
} as const

export const SEO_METADATA: SeoMetadata = {
  title: 'Rotiv Tech - Manutenção Profissional de Computadores | Mac, Linux, Windows',
  description:
    'Serviço profissional de manutenção para Mac, Linux e Windows. Limpeza, desempenho, segurança, instalação de sistemas e suporte técnico especializado. A partir de R$ 100,00.',
  keywords: [
    'manutenção de computadores',
    'manutenção mac',
    'manutenção linux',
    'manutenção windows',
    'suporte técnico',
    'formatação de computador',
    'remoção de vírus',
    'otimização de pc',
    'rotiv tech',
    'assistência técnica computadores',
  ],
}

export const CONTACT_INFO: ContactInfo = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? '+34 610 4242 38',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'contato@rotivtech.com.br',
  website: process.env.NEXT_PUBLIC_WEBSITE ?? 'www.rotivtech.com.br',
}

export const NAV_LINKS: NavLink[] = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sistemas', label: 'Sistemas' },
  { href: '#problemas', label: 'Problemas' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#contato', label: 'Contato' },
]

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    id: 'limpeza',
    icon: 'settings',
    title: 'Limpeza',
    subtitle: 'Interna e Externa',
    description: 'Remoção de poeira e otimização térmica.',
  },
  {
    id: 'desempenho',
    icon: 'gauge',
    title: 'Desempenho',
    subtitle: 'Mais Velocidade',
    description: 'Otimização do sistema e aumento de performance.',
  },
  {
    id: 'seguranca',
    icon: 'shield-check',
    title: 'Segurança',
    subtitle: 'Proteção Completa',
    description: 'Remoção de vírus, atualizações e configuração segura.',
  },
  {
    id: 'sistema',
    icon: 'download',
    title: 'Sistema',
    subtitle: 'Estável e Atualizado',
    description: 'Instalação e configuração de sistemas e softwares essenciais.',
  },
  {
    id: 'suporte',
    icon: 'wrench',
    title: 'Suporte',
    subtitle: 'Técnico Especializado',
    description: 'Atendimento dedicado para resolver qualquer problema.',
  },
]

export const SUPPORTED_SYSTEMS: SupportedSystem[] = [
  {
    id: 'windows',
    name: 'Windows',
    color: '#0078d4',
    versions: 'Windows 11 / 10 / 8 / 7',
    services: 'Instalação, manutenção e otimização completa.',
  },
  {
    id: 'linux',
    name: 'Linux',
    color: '#f5a623',
    versions: 'Ubuntu, Linux Mint, Debian e outras distros',
    services: 'Instalação, configuração e suporte especializado.',
  },
  {
    id: 'mac',
    name: 'Mac',
    color: '#a78bfa',
    versions: 'macOS Sonoma, Ventura, Monterey e anteriores',
    services: 'Manutenção, limpeza e otimização.',
  },
]

export const PROBLEMS_LEFT: Problem[] = [
  { id: 'lento', label: 'Computador lento' },
  { id: 'superaquecimento', label: 'Superaquecimento' },
  { id: 'tela-azul', label: 'Tela azul / travamentos' },
]

export const PROBLEMS_RIGHT: Problem[] = [
  { id: 'virus', label: 'Vírus e malwares' },
  { id: 'falhas', label: 'Falhas no sistema' },
  { id: 'instalacao', label: 'Instalação de programas' },
]

export const FOOTER_BADGES = [
  { id: 'rapido', icon: 'shield-check', line1: 'Atendimento Rápido', line2: 'e Confiável' },
  { id: 'sistemas', icon: 'monitor', line1: 'Suporte Para', line2: 'Todos os Sistemas' },
  { id: 'satisfacao', icon: 'check-circle', line1: 'Satisfação', line2: 'Garantida' },
] as const
