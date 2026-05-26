import Link from 'next/link'
import { MessageCircle, Mail, Globe, ShieldCheck, Monitor, CheckCircle } from 'lucide-react'
import { CONTACT_INFO, SITE_CONFIG, NAV_LINKS, FOOTER_BADGES } from '@/lib/constants'
import { formatWhatsAppLink, formatMailtoLink } from '@/lib/utils'

const badgeIconMap = {
  'shield-check': <ShieldCheck size={24} aria-hidden="true" />,
  monitor: <Monitor size={24} aria-hidden="true" />,
  'check-circle': <CheckCircle size={24} aria-hidden="true" />,
}

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()
  const waLink = formatWhatsAppLink(CONTACT_INFO.whatsapp)
  const mailLink = formatMailtoLink(CONTACT_INFO.email, 'Contato via site Rotiv Tech')

  return (
    <footer id="contato" className="relative" aria-label="Rodapé e informações de contato">
      {/* Top border */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #39FF14, transparent)' }}
        aria-hidden="true"
      />

      {/* Trust badges strip */}
      <div
        className="py-6 border-b"
        style={{ background: 'rgba(10,20,10,0.9)', borderColor: 'rgba(57,255,20,0.15)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {FOOTER_BADGES.map((badge) => (
              <div key={badge.id} className="flex items-center gap-4 justify-center sm:justify-start">
                <div
                  className="w-10 h-10 flex items-center justify-center border border-[rgba(57,255,20,0.3)] flex-shrink-0"
                  style={{ color: '#39FF14' }}
                  aria-hidden="true"
                >
                  {badgeIconMap[badge.icon as keyof typeof badgeIconMap]}
                </div>
                <div>
                  <p
                    className="text-xs font-700 tracking-widest uppercase"
                    style={{ color: '#39FF14', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
                  >
                    {badge.line1}
                  </p>
                  <p
                    className="text-xs tracking-wider uppercase"
                    style={{ color: 'rgba(226,245,226,0.5)', fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {badge.line2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12" style={{ background: '#030703' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 flex items-center justify-center border"
                  style={{ borderColor: 'rgba(57,255,20,0.4)', background: 'rgba(57,255,20,0.08)' }}
                  aria-hidden="true"
                >
                  <span
                    className="font-700 text-lg"
                    style={{ color: '#39FF14', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
                  >
                    RT
                  </span>
                </div>
                <div>
                  <p
                    className="text-xl font-700 tracking-widest uppercase"
                    style={{ color: '#39FF14', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
                  >
                    Rotiv Tech
                  </p>
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'rgba(226,245,226,0.4)', fontFamily: 'Share Tech Mono, monospace' }}
                  >
                    {SITE_CONFIG.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(226,245,226,0.5)' }}>
                Serviço profissional de manutenção para Mac, Linux e Windows. Cuidado especializado
                para seu equipamento.
              </p>

              {/* Contact items */}
              <address className="not-italic flex flex-col gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-[#39FF14] transition-colors group"
                  style={{ color: 'rgba(226,245,226,0.7)' }}
                  aria-label={`WhatsApp: ${CONTACT_INFO.whatsapp}`}
                >
                  <MessageCircle
                    size={16}
                    style={{ color: '#39FF14' }}
                    className="flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{CONTACT_INFO.whatsapp}</span>
                </a>

                <a
                  href={mailLink}
                  className="flex items-center gap-3 text-sm hover:text-[#39FF14] transition-colors"
                  style={{ color: 'rgba(226,245,226,0.7)' }}
                  aria-label={`E-mail: ${CONTACT_INFO.email}`}
                >
                  <Mail
                    size={16}
                    style={{ color: '#39FF14' }}
                    className="flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{CONTACT_INFO.email}</span>
                </a>

                <span
                  className="flex items-center gap-3 text-sm"
                  style={{ color: 'rgba(226,245,226,0.7)' }}
                  aria-label={`Site: ${CONTACT_INFO.website}`}
                >
                  <Globe
                    size={16}
                    style={{ color: '#39FF14' }}
                    className="flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{CONTACT_INFO.website}</span>
                </span>
              </address>
            </div>

            {/* Nav links */}
            <nav aria-label="Links do rodapé">
              <h3
                className="text-sm font-700 tracking-widest uppercase mb-6"
                style={{ color: '#39FF14', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
              >
                Navegação
              </h3>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm tracking-wider hover:text-[#39FF14] transition-colors"
                      style={{ color: 'rgba(226,245,226,0.6)', fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA box */}
            <div className="tech-card tech-card-corner p-6 flex flex-col justify-between">
              <div>
                <h3
                  className="text-lg font-700 tracking-widest uppercase mb-3"
                  style={{ color: 'white', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
                >
                  Precisa de Ajuda?
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(226,245,226,0.6)' }}>
                  Entre em contato agora mesmo. Atendimento rápido e profissional com preço justo.
                </p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center text-sm"
                aria-label="Chamar no WhatsApp agora"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-4 border-t"
        style={{ background: '#020502', borderColor: 'rgba(57,255,20,0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-xs"
            style={{ color: 'rgba(226,245,226,0.35)', fontFamily: 'Share Tech Mono, monospace' }}
          >
            © {currentYear} Rotiv Tech. Todos os direitos reservados.
          </p>
          <p
            className="text-xs"
            style={{ color: 'rgba(226,245,226,0.25)', fontFamily: 'Share Tech Mono, monospace' }}
          >
            Tecnologia Que Move Você
          </p>
        </div>
      </div>
    </footer>
  )
}
