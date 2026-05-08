"use client"

import FadeIn from "@/animation/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { aboutMeSection, homeSection } from "@/data/translation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"

export default function AboutSection() {
  const { lang } = useLanguage();   
  return (
    <section
  id="about"
  className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16"
>
  <div className="max-w-6xl mx-auto">
    
    <div className="grid md:grid-cols-2 gap-12 items-start">

      {/* LEFT: ABOUT */}
      <div className="max-w-2xl">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-texttitle">
            {aboutMeSection.title[lang]}
          </h2>

          <div className="text-textdesc space-y-4 leading-relaxed text-justify">
            {aboutMeSection.description[lang].map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* RIGHT: SKILLS */}
      <div>
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
              {aboutMeSection.skills.map((skill, i) => (
                <Card key={i} className="">
            
                  <CardHeader>
                    <CardTitle>
                      {skill.title[lang]}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-wrap gap-2">
                    {skill.desc[lang].map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-zinc-800 rounded"
                      >
                        {item}
                      </span>
                   ))}
                  </CardContent>

                </Card>
              ))}
          </div>
        </FadeIn>
      </div>

    </div>

  </div>
    </section>
  );
  }