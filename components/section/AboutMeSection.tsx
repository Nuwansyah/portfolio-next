"use client"

import FadeIn from "@/animation/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { aboutMeSection, homeSection } from "@/data/translation";

export default function AboutSection() {
  const { lang } = useLanguage();   
  return (
    <section id="about" className="min-h-screen px-6 md:px-20 py-30 flex flex-row">
      <div className="basis-3/5">
        
        <FadeIn>
          <h2 className="text-2xl font-bold mb-4 text-texttitle">
            {aboutMeSection.title[lang]}
          </h2>
        
          <div className="text-textdesc space-y-1 leading-relaxed text-justify">
            {aboutMeSection.description[lang].map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
  }