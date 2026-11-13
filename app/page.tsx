import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SchedulePreview from "@/components/SchedulePreview";
import SimulatorSection from "@/components/SimulatorSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <SimulatorSection />
        <HowItWorksSection />
        <BenefitsSection />
        <SchedulePreview />
        <FAQSection />
      </main>
      <SiteFooter />
    </>
  );
}
