import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import SystemsSection from '@/components/sections/SystemsSection'
import ProblemsInvestmentSection from '@/components/sections/ProblemsInvestmentSection'

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#39FF14] focus:text-black focus:font-bold"
        >
          Ir para o conteúdo principal
        </a>

        <HeroSection />
        <ServicesSection />
        <SystemsSection />
        <ProblemsInvestmentSection />
      </main>

      <Footer />
    </>
  )
}
