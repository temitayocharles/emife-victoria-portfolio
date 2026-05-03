import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import MetricsDashboard from "@/components/sections/MetricsDashboard";
import PortfolioCarousel from "@/components/sections/PortfolioCarousel";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TimelineScroller from "@/components/sections/TimelineScroller";
import Footer from "@/components/site/Footer";
import Navbar from "@/components/site/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MetricsDashboard />
        <ServicesSection />
        <PortfolioCarousel />
        <TimelineScroller />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
