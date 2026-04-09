import Image from "next/image";
import { projects } from "@/data/project";
import ProjectCard from "@/component/ProjectCard";
import Navbar from "@/component/NavBar";
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
