'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const toggleMobile = useCallback(() => {
    setIsMobileOpen((prev) => !prev)
  }, [])

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#050a05]/95 backdrop-blur-md border-b border-[rgba(57,255,20,0.15)] shadow-[0_2px_20px_rgba(57,255,20,0.1)]'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={`${SITE_CONFIG.name} - Página inicial`}
          >
            <div
              className="relative w-10 h-10 flex items-center justify-center"
              aria-hidden="true"
            >
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                <polygon
                  points="20,2 38,11 38,29 20,38 2,29 2,11"
                  stroke="#39FF14"
                  strokeWidth="1.5"
                  fill="rgba(57,255,20,0.08)"
                />
                <text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#39FF14"
                  fontSize="16"
                  fontFamily="Rajdhani, sans-serif"
                  fontWeight="700"
                >
                  RT
                </text>
              </svg>
            </div>
            <div>
              <span
                className="font-heading font-700 text-xl tracking-widest uppercase"
                style={{ fontFamily: 'Rajdhani, sans-serif', color: '#39FF14' }}
              >
                Rotiv Tech
              </span>
              <p
                className="text-[10px] tracking-widest uppercase"
                style={{ color: 'rgba(226,245,226,0.5)', fontFamily: 'Share Tech Mono, monospace' }}
              >
                {SITE_CONFIG.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-semibold text-sm tracking-widest uppercase transition-colors duration-200 group"
                style={{
                  color: 'rgba(226,245,226,0.7)',
                  fontFamily: 'Rajdhani, sans-serif',
                }}
              >
                <span className="group-hover:text-[#39FF14] transition-colors">{link.label}</span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#39FF14] group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contato"
              className="btn-primary text-sm"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Falar com Técnico
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#39FF14] border border-[rgba(57,255,20,0.3)] hover:border-[#39FF14] transition-colors"
            onClick={toggleMobile}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300',
          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!isMobileOpen}
      >
        <nav
          className="border-t border-[rgba(57,255,20,0.15)] bg-[#050a05]/98 backdrop-blur-md px-6 py-4 flex flex-col gap-4"
          aria-label="Navegação mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="py-2 font-semibold tracking-widest uppercase text-sm border-b border-[rgba(57,255,20,0.1)] hover:text-[#39FF14] transition-colors"
              style={{ color: 'rgba(226,245,226,0.8)', fontFamily: 'Rajdhani, sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
          <a href="#contato" onClick={closeMobile} className="btn-primary text-center mt-2">
            Falar com Técnico
          </a>
        </nav>
      </div>
    </header>
  )
}
