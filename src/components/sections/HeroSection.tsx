import { formatWhatsAppLink } from '@/lib/utils'
import { CONTACT_INFO } from '@/lib/constants'
import { MessageCircle, ChevronDown } from 'lucide-react'

export default function HeroSection(): JSX.Element {
  const waLink = formatWhatsAppLink(
    CONTACT_INFO.whatsapp,
    'Olá! Gostaria de agendar uma manutenção para meu computador.'
  )

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Apresentação Rotiv Tech"
    >
      {/* Background layers */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Deep dark bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030703] via-[#050a05] to-[#0a130a]" />
        {/* Radial green glow center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(57,255,20,0.08) 0%, rgba(57,255,20,0.03) 40%, transparent 70%)',
          }}
        />
        {/* Top right corner glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px]"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(57,255,20,0.12) 0%, transparent 60%)',
          }}
        />
        {/* Bottom left glow */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px]"
          style={{
            background:
              'radial-gradient(circle at bottom left, rgba(57,255,20,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Matrix rain columns (decorative) */}
      <MatrixRain />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 border border-[rgba(57,255,20,0.3)] bg-[rgba(57,255,20,0.05)] text-xs tracking-widest uppercase mb-6"
              style={{ color: '#39FF14', fontFamily: 'Share Tech Mono, monospace' }}
              aria-label="Identificação da empresa"
            >
              <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
              Serviço Profissional de
            </div>

            {/* Main Heading */}
            <h1
              className="font-heading font-900 uppercase leading-none mb-4"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              <span
                className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white"
                style={{ textShadow: '0 0 40px rgba(255,255,255,0.1)' }}
              >
                Manuten
              </span>
              <span
                className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl"
                style={{
                  color: '#39FF14',
                  textShadow:
                    '0 0 20px rgba(57,255,20,0.8), 0 0 40px rgba(57,255,20,0.4), 0 0 80px rgba(57,255,20,0.2)',
                  animation: 'glowPulse 2s ease-in-out infinite alternate',
                }}
              >
                ção
              </span>
            </h1>

            {/* OS subtitle */}
            <p
              className="text-2xl sm:text-3xl lg:text-4xl font-700 tracking-widest uppercase mb-6"
              style={{
                color: '#39FF14',
                fontFamily: 'Rajdhani, sans-serif',
                fontWeight: 700,
              }}
            >
              MAC • LINUX • WINDOWS
            </p>

            {/* Description */}
            <p
              className="text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ color: 'rgba(226,245,226,0.7)' }}
            >
              Cuidado especializado para seu equipamento,{' '}
              <span style={{ color: '#39FF14', fontWeight: 600 }}>seja qual for o sistema.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
                aria-label="Chamar no WhatsApp para agendar manutenção"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Chamar no WhatsApp
              </a>
              <a href="#servicos" className="btn-outline text-base">
                Ver Serviços
              </a>
            </div>

            {/* Price pill */}
            <div className="mt-8 inline-flex items-center gap-3">
              <span style={{ color: 'rgba(226,245,226,0.5)', fontSize: '0.875rem' }}>
                A partir de
              </span>
              <span
                className="text-3xl font-900"
                style={{
                  color: '#39FF14',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 900,
                  textShadow: '0 0 15px rgba(57,255,20,0.6)',
                }}
              >
                R$ 100,00
              </span>
            </div>
          </div>

          {/* Right: Visual device showcase */}
          <div className="relative hidden lg:flex items-center justify-center">
            <DeviceShowcase />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
        aria-hidden="true"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: 'rgba(57,255,20,0.5)', fontFamily: 'Share Tech Mono, monospace' }}
        >
          Scroll
        </span>
        <ChevronDown size={20} style={{ color: '#39FF14' }} />
      </div>
    </section>
  )
}

function DeviceShowcase(): JSX.Element {
  return (
    <div className="relative w-full max-w-lg">
      {/* Glow behind devices */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(57,255,20,0.15) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Circular ring decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border"
        style={{
          borderColor: 'rgba(57,255,20,0.15)',
          boxShadow: '0 0 40px rgba(57,255,20,0.1)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border"
        style={{
          borderColor: 'rgba(57,255,20,0.07)',
          borderStyle: 'dashed',
        }}
        aria-hidden="true"
      />

      {/* OS Logos in circles */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Windows */}
        <div
          className="tech-card tech-card-corner w-48 h-36 flex flex-col items-center justify-center gap-3 animate-float"
          style={{ animationDelay: '0s' }}
        >
          <WindowsIcon />
          <span
            className="text-lg font-700 tracking-wider"
            style={{ color: '#0078d4', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
          >
            Windows
          </span>
          <span className="text-xs" style={{ color: 'rgba(226,245,226,0.5)' }}>
            11 / 10 / 8 / 7
          </span>
        </div>

        {/* Linux + Mac row */}
        <div className="flex gap-4">
          <div
            className="tech-card tech-card-corner w-36 h-28 flex flex-col items-center justify-center gap-2 animate-float"
            style={{ animationDelay: '1s' }}
          >
            <LinuxIcon />
            <span
              className="text-base font-700 tracking-wider"
              style={{ color: '#f5a623', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
            >
              Linux
            </span>
          </div>
          <div
            className="tech-card tech-card-corner w-36 h-28 flex flex-col items-center justify-center gap-2 animate-float"
            style={{ animationDelay: '2s' }}
          >
            <MacIcon />
            <span
              className="text-base font-700 tracking-wider"
              style={{ color: '#a78bfa', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
            >
              Mac
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function WindowsIcon(): JSX.Element {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="#0078d4" aria-label="Windows">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.551H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.949" />
    </svg>
  )
}

function LinuxIcon(): JSX.Element {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#f5a623" aria-label="Linux Tux">
      <path d="M12.504 0C12.336 0 12.156.003 12 .01 7.807.1 4.46 3.45 4.46 7.577c0 1.38.49 2.77 1.196 3.977-.023.12-.03.245-.03.368 0 .53.146 1.057.396 1.54-.052.085-.098.178-.14.275C4.42 15.19 3.42 18.065 3.42 19.8c0 2.54 1.826 4.2 4.69 4.2 1.28 0 2.59-.33 3.64-.98.85-.5 1.67-.61 2.62-.61.97 0 1.8.11 2.65.62 1.05.65 2.35.97 3.64.97 2.85 0 4.69-1.66 4.69-4.2 0-1.73-1-4.61-2.46-6.02-.04-.1-.09-.19-.14-.28.26-.49.41-1.02.41-1.56a2.52 2.52 0 00-.03-.37c.7-1.2 1.2-2.6 1.2-3.98C24 3.45 20.65.1 16.46.01 16.3.003 16.14 0 15.99 0zm-.03 1.48c.26 0 .52.006.78.02 3.25.173 5.88 2.82 5.88 6.07 0 1.12-.34 2.25-1 3.26-.21.32-.18.74.08 1.03.2.22.3.53.3.84 0 .29-.08.56-.21.8-.29.45-.28 1.04.04 1.47.55.78 1.48 2.41 1.48 4.8 0 1.65-1.17 2.72-3.21 2.72-.98 0-2.04-.27-2.84-.78-.95-.59-2.03-.76-3.26-.76-1.2 0-2.29.17-3.24.75-.8.5-1.86.79-2.85.79-2.02 0-3.21-1.07-3.21-2.72 0-2.4.93-4.02 1.48-4.8.32-.43.33-1.02.04-1.47a1.77 1.77 0 01-.21-.8c0-.3.1-.61.3-.84.26-.29.29-.71.08-1.03-.66-1.01-1-2.14-1-3.26 0-3.25 2.63-5.9 5.88-6.07.26-.014.52-.02.78-.02z" />
    </svg>
  )
}

function MacIcon(): JSX.Element {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#a78bfa" aria-label="Apple Mac">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  )
}

function MatrixRain(): JSX.Element {
  const columns = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${(i / 8) * 100}%`,
    delay: `${i * 1.3}s`,
    duration: `${12 + i * 2}s`,
    chars: '01アイウエオカキクケコ10101',
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {columns.map((col) => (
        <div
          key={col.id}
          className="matrix-column"
          style={{
            left: col.left,
            animationDuration: col.duration,
            animationDelay: col.delay,
            writingMode: 'vertical-rl',
          }}
        >
          {col.chars}
        </div>
      ))}
    </div>
  )
}
