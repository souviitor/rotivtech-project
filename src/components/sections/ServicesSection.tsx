import { Settings, Gauge, ShieldCheck, Download, Wrench } from 'lucide-react'
import { SERVICE_FEATURES } from '@/lib/constants'
import type { ServiceFeature } from '@/types'

const iconMap: Record<string, JSX.Element> = {
  settings: <Settings size={32} aria-hidden="true" />,
  gauge: <Gauge size={32} aria-hidden="true" />,
  'shield-check': <ShieldCheck size={32} aria-hidden="true" />,
  download: <Download size={32} aria-hidden="true" />,
  wrench: <Wrench size={32} aria-hidden="true" />,
}

function ServiceCard({ feature, index }: { feature: ServiceFeature; index: number }): JSX.Element {
  return (
    <article
      className="tech-card tech-card-corner flex flex-col items-center text-center p-6 gap-4 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
      aria-label={`Serviço: ${feature.title} - ${feature.subtitle}`}
    >
      {/* Icon */}
      <div
        className="w-16 h-16 flex items-center justify-center relative"
        style={{ color: '#39FF14' }}
        aria-hidden="true"
      >
        {/* Hexagon background */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <polygon
            points="32,4 60,18 60,46 32,60 4,46 4,18"
            stroke="#39FF14"
            strokeWidth="1"
            fill="rgba(57,255,20,0.08)"
          />
        </svg>
        <span className="relative z-10">{iconMap[feature.icon]}</span>
      </div>

      {/* Title */}
      <div>
        <h3
          className="text-xl font-700 tracking-widest uppercase"
          style={{ fontFamily: 'Rajdhani, sans-serif', color: 'white', fontWeight: 700 }}
        >
          {feature.title}
        </h3>
        <p
          className="text-sm font-600 tracking-wider uppercase mt-1"
          style={{ color: '#39FF14', fontFamily: 'Rajdhani, sans-serif' }}
        >
          {feature.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(226,245,226,0.65)' }}>
        {feature.description}
      </p>
    </article>
  )
}

export default function ServicesSection(): JSX.Element {
  return (
    <section
      id="servicos"
      className="py-20 relative"
      aria-labelledby="services-heading"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.4), transparent)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.4), transparent)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(10,20,10,0.6)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-3"
            style={{ color: '#39FF14', fontFamily: 'Share Tech Mono, monospace' }}
          >
            // O que fazemos
          </p>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl font-900 uppercase"
            style={{ fontFamily: 'Rajdhani, sans-serif', color: 'white', fontWeight: 900 }}
          >
            Nossos{' '}
            <span style={{ color: '#39FF14', textShadow: '0 0 20px rgba(57,255,20,0.5)' }}>
              Serviços
            </span>
          </h2>
          <div
            className="w-24 h-0.5 mx-auto mt-4"
            style={{ background: 'linear-gradient(90deg, transparent, #39FF14, transparent)' }}
            aria-hidden="true"
          />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" role="list">
          {SERVICE_FEATURES.map((feature, index) => (
            <div key={feature.id} role="listitem">
              <ServiceCard feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
