"use client";

import FadeIn from "@/animation/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { homeSection } from "@/data/translation";
import { useEffect, useState } from "react"


const jobTitles = ["Developer", "Engineer"];



export default function HomeSection() {
  const { lang } = useLanguage(); 
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(jobTitles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
      const currentWord = jobTitles[wordIndex];

      if (!isDeleting && displayedText === currentWord) {
        const pause = setTimeout(() => setIsDeleting(true), 1800);
        return () => clearTimeout(pause);
      }

      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % jobTitles.length);
        return;
      }

      const typingSpeed = isDeleting ? 55 : 55;

      const timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentWord.slice(0, displayedText.length - 1)
            : currentWord.slice(0, displayedText.length + 1)
        );
      }, typingSpeed);

      return () => clearTimeout(timer);
    }, [displayedText, isDeleting, wordIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full text-center">
        
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold text-texttitle text-shadow-lg">
            {homeSection.title[lang]}
          </h1>
          <h2 className="pt-3 text-4xl text-texttitle font-mono text-muted text-shadow-lg">
            Software{" "}
            <span
              className={`inline-block min-w-[9ch] text-left ${
                wordIndex === 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {displayedText}
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-[1em] translate-y-0.5 animate-pulse border-r-2 border-current"
              />
            </span>
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