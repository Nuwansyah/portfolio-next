"use client"

import FadeIn from "@/animation/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { contactMeSection } from "@/data/translation";
import ContactItem from "@/components/page/ContactItem";
import { contacts } from "@/data/contact";

export default function ContactSection() {
  const { lang } = useLanguage();    
  
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5/6 w-full flex flex-col items-center text-center space-y-6">
        
        {/* TITLE */}
        <FadeIn>
          <h2 className="text-4xl font-bold text-texttitle">
            {contactMeSection.title[lang]}
          </h2>
        </FadeIn>

        {/* DESCRIPTION */}
        <FadeIn delay={0.2}>
          <p className="text-textdesc">
            {contactMeSection.description[lang]}
          </p>
        </FadeIn>

        {/* CONTACT GRID */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] sm:grid-cols-3 gap-4 w-full mt-4 items-start">
            {contacts.map((item, i) => (
              <ContactItem
                key={i}
                label={item.label}
                value={item.value}
                href={item.href}
                Icon={item.icon}
                copyable={item.copyable}
              />
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}