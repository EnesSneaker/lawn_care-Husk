import ContactSection from "@/components/contact-section-one";
import ContentSection5 from "@/components/content-5";
import ContentSection from "@/components/content-7";
import FAQsTwo from "@/components/faqs-2";
import Features1 from "@/components/features-1";
import Features from "@/components/features-5";
import FeaturesSection from "@/components/features-nine";
import FooterSection from "@/components/footer-one";
import HeroSection from "@/components/hero-section-one";
import IntegrationsSection from "@/components/integrations-1";
import StatsSection from "@/components/stats";
import WallOfLoveSection from "@/components/testimonials";
import TestimonialSection5 from "@/components/testimonials-five";
import TestimonialSection from "@/components/testimonials-two";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />;
      <FeaturesSection />
      <Features1 />
      <ContentSection />
      <ContentSection5 />
      <IntegrationsSection />
      <StatsSection />
      {/* <WallOfLoveSection /> */}
      <TestimonialSection5 />
      <FAQsTwo />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
