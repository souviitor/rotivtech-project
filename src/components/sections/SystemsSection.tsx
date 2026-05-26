import { SUPPORTED_SYSTEMS } from '@/lib/constants'
import type { SupportedSystem } from '@/types'

function SystemCard({ system, index }: { system: SupportedSystem; index: number }): JSX.Element {
  return (
    <article
      className="tech-card tech-card-corner p-8 flex flex-col items-center text-center gap-4 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
      aria-label={`Sistema: ${system.name}`}
    >
      {/* OS Icon */}
      <div className="w-16 h-16 flex items-center justify-center" aria-hidden="true">
        {system.id === 'windows' && <WindowsLogo color={system.color} />}
        {system.id === 'linux' && <LinuxLogo color={system.color} />}
        {system.id === 'mac' && <MacLogo color={system.color} />}
      </div>

      {/* Name */}
      <h3
        className="text-2xl font-700 tracking-wider uppercase"
        style={{ fontFamily: 'Rajdhani, sans-serif', color: system.color, fontWeight: 700 }}
      >
        {system.name}
      </h3>

      {/* Divider */}
      <div
        className="w-12 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${system.color}, transparent)` }}
        aria-hidden="true"
      />

      {/* Versions */}
      <p className="text-sm font-500" style={{ color: 'rgba(226,245,226,0.8)' }}>
        {system.versions}
      </p>

      {/* Services */}
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(226,245,226,0.55)' }}>
        {system.services}
      </p>
    </article>
  )
}

function WindowsLogo({ color }: { color: string }): JSX.Element {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill={color} aria-label="Windows">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.551H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.949" />
    </svg>
  )
}

function LinuxLogo({ color }: { color: string }): JSX.Element {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill={color} aria-label="Linux">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.346-.106 1.79.174.443.571.797.97.958.428.155.907.117 1.256-.05.243.021.49.04.72.104.422.121.842.349 1.228.658.614.466 1.172 1.118 1.815 1.502 1.031.628 2.127.686 3.277.272.571-.2 1.174-.586 1.714-1.073.28-.248.546-.53.817-.8a5.02 5.02 0 01.707-.595c.274-.173.556-.245.835-.176.137.025.263.101.37.23.303.33.516.772.69 1.198.086.208.168.42.238.627.135.374.214.728.276 1.02.05.236.075.487.067.665-.01.223-.057.39-.134.52-.162.287-.47.407-.823.453l-.16.01c.112.198.228.379.353.539.263.33.55.585.876.742.322.155.677.207 1.045.131.369-.076.735-.265 1.059-.52.33-.254.621-.567.856-.92.237-.352.41-.74.499-1.15.087-.41.083-.85.014-1.28-.068-.43-.195-.855-.354-1.23-.155-.38-.334-.715-.522-1.016-.19-.3-.39-.57-.59-.81a.5.5 0 00-.15-.13c-.19-.11-.38-.11-.56-.02a.7.7 0 00-.22.2c-.07.1-.12.2-.14.32-.02.13-.01.27.01.4.04.23.1.46.18.68.13.37.27.74.41 1.1.07.18.14.35.19.52.05.16.08.32.07.46a.44.44 0 01-.08.27.53.53 0 01-.24.17c-.2.08-.47.08-.72.02-.26-.06-.52-.17-.73-.33-.22-.15-.39-.34-.5-.55-.12-.21-.17-.44-.17-.67 0-.16.02-.32.07-.48.05-.15.12-.3.21-.44.09-.13.2-.26.32-.37.12-.11.26-.21.41-.29a1.5 1.5 0 01.51-.16c.18-.02.38-.01.57.04.19.05.37.13.54.25.17.11.33.26.47.44.14.17.26.38.36.62.1.23.17.49.21.78.04.28.04.59.01.9-.04.31-.1.63-.22.93-.11.3-.27.59-.47.85-.2.26-.44.49-.72.68-.28.19-.59.34-.93.44-.33.1-.69.15-1.06.13-.37-.02-.74-.1-1.1-.23-.35-.14-.69-.33-1-.57-.3-.23-.57-.51-.79-.84-.11-.16-.2-.33-.28-.51a4.78 4.78 0 01-.48.64c-.18.2-.39.39-.62.54-.23.15-.48.27-.75.35-.28.08-.57.11-.88.09-.3-.02-.62-.1-.92-.23a3.46 3.46 0 01-.82-.52c-.24-.21-.44-.47-.59-.77a2.86 2.86 0 01-.25-.98c-.03-.35 0-.71.08-1.05.08-.34.21-.66.36-.95.16-.29.34-.55.54-.78.2-.23.41-.43.63-.6a3.4 3.4 0 01.67-.38c.22-.09.44-.16.64-.2.19-.04.37-.05.52-.04.15.01.27.05.36.12.09.07.15.17.17.3.02.13 0 .28-.04.43-.04.15-.1.3-.18.44a2.5 2.5 0 01-.26.39c-.1.12-.2.24-.29.36a2.5 2.5 0 00-.24.42c-.06.16-.09.33-.09.51 0 .19.04.38.1.56.07.18.17.34.3.47.12.13.28.24.46.32.18.07.38.11.6.11.21 0 .43-.04.63-.12.2-.08.38-.2.53-.35.15-.15.27-.34.35-.55.08-.21.12-.44.12-.69v-.03c.31.3.61.57.92.81.31.24.63.45.96.62.33.17.67.3 1.02.39.35.09.7.14 1.04.14.33 0 .65-.04.95-.12.3-.08.59-.2.85-.36.26-.16.49-.35.69-.57.2-.22.37-.47.5-.75.12-.28.2-.59.23-.92.03-.32.02-.67-.04-1.01-.06-.35-.16-.7-.3-1.04-.13-.34-.3-.67-.5-.99a7.5 7.5 0 00-.7-.93 7.08 7.08 0 00-.89-.81 6.37 6.37 0 00-1.04-.62 5.47 5.47 0 00-1.17-.38 4.71 4.71 0 00-1.26-.07" />
    </svg>
  )
}

function MacLogo({ color }: { color: string }): JSX.Element {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill={color} aria-label="Apple Mac">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  )
}

export default function SystemsSection(): JSX.Element {
  return (
    <section id="sistemas" className="py-20 relative" aria-labelledby="systems-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-4 mb-6" aria-hidden="true">
            <div
              className="flex-1 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.4))' }}
            />
            <p
              className="text-sm font-700 tracking-[0.4em] uppercase px-4"
              style={{ color: '#39FF14', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}
            >
              ◆ Sistemas Que Atendo ◆
            </p>
            <div
              className="flex-1 h-px"
              style={{ background: 'linear-gradient(90deg, rgba(57,255,20,0.4), transparent)' }}
            />
          </div>

          <h2
            id="systems-heading"
            className="text-4xl sm:text-5xl font-900 uppercase"
            style={{ fontFamily: 'Rajdhani, sans-serif', color: 'white', fontWeight: 900 }}
          >
            Suporte{' '}
            <span style={{ color: '#39FF14', textShadow: '0 0 20px rgba(57,255,20,0.5)' }}>
              Multi-Plataforma
            </span>
          </h2>
        </div>

        {/* Systems grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {SUPPORTED_SYSTEMS.map((system, index) => (
            <div key={system.id} role="listitem">
              <SystemCard system={system} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
