import Link from 'next/link'

export default function NotFound(): JSX.Element {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ background: '#050a05' }}
      aria-label="Página não encontrada"
    >
      <div
        className="text-9xl font-900 mb-4"
        style={{
          fontFamily: 'Rajdhani, sans-serif',
          color: '#39FF14',
          textShadow: '0 0 30px rgba(57,255,20,0.6)',
          fontWeight: 900,
        }}
      >
        404
      </div>
      <h1
        className="text-2xl font-700 uppercase tracking-widest mb-4"
        style={{ fontFamily: 'Rajdhani, sans-serif', color: 'white', fontWeight: 700 }}
      >
        Página Não Encontrada
      </h1>
      <p className="mb-8" style={{ color: 'rgba(226,245,226,0.6)' }}>
        A página que você está procurando não existe.
      </p>
      <Link href="/" className="btn-primary">
        Voltar ao início
      </Link>
    </main>
  )
}
