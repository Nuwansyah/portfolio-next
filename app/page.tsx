
import Navbar from "@/component/page/NavBar";
import HomeSection from "@/component/section/HomeSection";
import AboutSection from "@/component/section/AboutMeSection";
import WorksSection from "@/component/section/WorksSection";
import ContactSection from "@/component/section/ContactMeSection";

export default function Home() {
  return (
    
    <main>
      
      <Navbar />

      <HomeSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
      
    </main>
  );
}
