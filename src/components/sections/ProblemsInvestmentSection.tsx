import { CheckCircle } from 'lucide-react'
import { PROBLEMS_LEFT, PROBLEMS_RIGHT, SITE_CONFIG, CONTACT_INFO } from '@/lib/constants'
import { formatWhatsAppLink } from '@/lib/utils'
import type { Problem } from '@/types'

function ProblemItem({ problem }: { problem: Problem }): JSX.Element {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle
        size={18}
        className="flex-shrink-0"
        style={{ color: '#39FF14' }}
        aria-hidden="true"
      />
      <span className="text-sm" style={{ color: 'rgba(226,245,226,0.8)' }}>
        {problem.label}
      </span>
    </li>
  )
}

export default function ProblemsInvestmentSection(): JSX.Element {
  const waLink = formatWhatsAppLink(
    CONTACT_INFO.whatsapp,
    'Olá! Gostaria de resolver um problema com meu computador. Qual a disponibilidade?'
  )

  return (
    <section
      id="problemas"
      className="py-20 relative"
      aria-labelledby="problems-heading"
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.4), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problems card */}
          <div className="tech-card tech-card-corner p-8">
            {/* Card header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1 h-8"
                style={{ background: '#39FF14', boxShadow: '0 0 10px rgba(57,255,20,0.6)' }}
                aria-hidden="true"
              />
              <h2
                id="problems-heading"
                className="text-xl font-700 tracking-widest uppercase"
                style={{ fontFamily: 'Rajdhani, sans-serif', color: '#39FF14', fontWeight: 700 }}
              >
                Problemas Que Resolvo
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="flex flex-col gap-3" aria-label="Problemas de hardware e sistema">
                {PROBLEMS_LEFT.map((p) => (
                  <ProblemItem key={p.id} problem={p} />
                ))}
              </ul>
              <ul className="flex flex-col gap-3" aria-label="Problemas de software e vírus">
                {PROBLEMS_RIGHT.map((p) => (
                  <ProblemItem key={p.id} problem={p} />
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center text-sm"
                aria-label="Agendar diagnóstico via WhatsApp"
              >
                Agendar Diagnóstico Gratuito
              </a>
            </div>
          </div>

          {/* Investment card */}
          <div
            id="investimento"
            className="tech-card tech-card-corner p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            {/* Background glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(57,255,20,0.08) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <p
                className="text-sm tracking-[0.4em] uppercase mb-2"
                style={{ color: 'rgba(226,245,226,0.6)', fontFamily: 'Share Tech Mono, monospace' }}
              >
                Investimento
              </p>

              {/* Price */}
              <div className="flex items-start justify-center gap-1 mb-2" aria-label="Preço: R$ 100,00">
                <span
                  className="text-3xl font-700 mt-3"
                  style={{
                    color: '#39FF14',
                    fontFamily: 'Rajdhani, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  R$
                </span>
                <span
                  className="price-tag text-8xl sm:text-9xl"
                  style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}
                >
                  100
                </span>
                <span
                  className="text-4xl font-700 mt-4"
                  style={{ color: '#39FF14', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
                >
                  ,00
                </span>
              </div>

              <p
                className="text-xs tracking-[0.3em] uppercase font-600 mb-6"
                style={{ color: '#39FF14', fontFamily: 'Rajdhani, sans-serif' }}
              >
                Atendimento Profissional com Preço Justo!
              </p>

              {/* What's included */}
              <div
                className="border border-[rgba(57,255,20,0.2)] p-4 mb-6 text-left"
                role="note"
                aria-label="O que está incluído"
              >
                <p
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: 'rgba(226,245,226,0.5)' }}
                >
                  Incluído no atendimento:
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    'Diagnóstico completo',
                    'Manutenção preventiva',
                    'Suporte pós-atendimento',
                    'Garantia no serviço',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: 'rgba(226,245,226,0.7)' }}
                    >
                      <CheckCircle size={14} style={{ color: '#39FF14' }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                aria-label="Chamar no WhatsApp para agendar serviço"
              >
                Agendar Agora — {SITE_CONFIG.price}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
