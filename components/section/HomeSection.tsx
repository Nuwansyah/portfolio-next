"use client";

import FadeIn from "@/animation/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { homeSection } from "@/data/translation";

export default function HomeSection() {
  const { lang } = useLanguage(); 

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold text-texttitle">
            {homeSection.title[lang]}
          </h1>
          <h2 className="text-4xl md:text-4xl pt-3 text-texttitle font-mono text-muted">
            Software Engineer
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 text-textdesc text-center pl-70 pr-70 text-lg">
            {homeSection.description[lang]}
          </p>
        </FadeIn>

      </div>
    </section>
  );
}