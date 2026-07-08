import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MenuSection } from "@/components/menu-section"
import { OrderSection } from "@/components/order-section"
import { PromoSection } from "@/components/promo-section"
import { FaqSection } from "@/components/faq-section"
import { ContactFooter } from "@/components/contact-footer"
import { WaveDivider } from "@/components/wave-divider"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      {/* wave into the tinted About section */}
      <WaveDivider className="text-secondary/40" flip />
      <AboutSection />
      {/* wave back out to the white Menu section */}
      <WaveDivider className="text-secondary/40" />
      <MenuSection />
      {/* Order section with WhatsApp & GrabFood */}
      <WaveDivider className="text-secondary/40" flip />
      <OrderSection />
      <WaveDivider className="text-secondary/40" />
      <PromoSection />
      {/* wave into the tinted FAQ section */}
      <WaveDivider className="text-secondary/40" flip />
      <FaqSection />
      <ContactFooter />
    </main>
  )
}
