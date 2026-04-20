"use client"

import FadeIn from "@/animation/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { aboutMeSection, homeSection } from "@/data/translation";

export default function AboutSection() {
  const { lang } = useLanguage();   
  return (
      <section id="about" className="min-h-screen px-6 md:px-20 py-30">
        <div className="max-w-4xl">
            <FadeIn>
               <h2 className="text-2xl font-bold mb-4 text-texttitle">{aboutMeSection.title[lang]}</h2> 
            </FadeIn>
            <FadeIn delay={0.2}>
                <p className="text-textdesc">
                  {aboutMeSection.description1[lang]},
                  {aboutMeSection.description2[lang]},
                  {aboutMeSection.description3[lang]},
                  {aboutMeSection.description4[lang]}
                </p>
            </FadeIn>
          
        </div>
      </section>
    );
  }