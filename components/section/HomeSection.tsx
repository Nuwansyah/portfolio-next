"use client";

import FadeIn from "@/animation/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { homeSection } from "@/data/translation";

export default function HomeSection() {
  const { lang } = useLanguage(); 

  return (
    <section id="home" className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full text-center">
        
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold text-texttitle text-shadow-lg">
            {homeSection.title[lang]}
          </h1>
          <h2 className="text-4xl md:text-4xl pt-3 text-texttitle font-mono text-muted text-shadow-lg">
            Software Engineer
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 max-w-5xl mx-auto text-textdesc text-center text-lg text-shadow-lg">
            {homeSection.description[lang]}
          </p>
        </FadeIn>

      </div>
    </section>
  );
}