
import Navbar from "@/components/page/NavBar";
import HomeSection from "@/components/section/HomeSection";
import AboutSection from "@/components/section/AboutMeSection";
import WorksSection from "@/components/section/WorksSection";
import ContactSection from "@/components/section/ContactMeSection";
import CertificatesSection from "@/components/section/CertificatesSection";

export default function Home() {
  return (
    
    <main>
      
      <Navbar />

      <HomeSection />
      <AboutSection />
      <WorksSection />
      <CertificatesSection />
      <ContactSection />
      
    </main>
  );
}
