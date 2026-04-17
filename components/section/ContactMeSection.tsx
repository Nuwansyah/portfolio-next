"use client"

import FadeIn from "@/animation/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { aboutMeSection, contactMeSection, homeSection } from "@/data/translation";

export default function ContactSection() {
  const { lang } = useLanguage();    
    return (
      <section id="contact" className="min-h-screen px-6 md:px-20 py-30">
        <FadeIn>
            <h2 className="text-2xl font-bold mb-4 text-texttitle">{contactMeSection.title[lang]}</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
            <p className="text-textdesc">{contactMeSection.description[lang]}</p>
        </FadeIn>
        
      </section>
    );
  }