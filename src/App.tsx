import { HeroSection } from "./sections/HeroSection";
import { MarqueeSection } from "./sections/MarqueeSection";
import { StatsSection } from "./sections/StatsSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactSection } from "./sections/ContactSection";
import { ContactProvider } from "./components/ContactModal";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

function App() {
  return (
    <ContactProvider>
      <div className="bg-[#0C0C0C]" style={{ overflowX: "clip" }}>
        <HeroSection />
        <MarqueeSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <WhatsAppFloat />
      </div>
    </ContactProvider>
  );
}

export default App;
