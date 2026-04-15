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
          <h1 className="text-4xl md:text-6xl font-bold">
            {homeSection.title[lang]}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 text-zinc-400">
            {homeSection.description[lang]}
          </p>
        </FadeIn>

      </div>
    </section>
  );
}