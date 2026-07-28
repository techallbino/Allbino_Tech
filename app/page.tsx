import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ContactSection } from '@/components/contact-section'
import { AboutSection } from '@/components/about-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <AboutSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  )
}
