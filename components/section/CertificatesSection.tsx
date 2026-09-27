"use client";

import { Eye } from "lucide-react";
import FadeIn from "@/animation/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { certificatesSection } from "@/data/translation";
import { certificates } from "@/data/certificate";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CertificatesSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="certificates"
      className="scroll-mt-20 px-6 py-24 md:py-30"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="mb-4 text-3xl font-bold">
            {certificatesSection.title[lang]}
          </h2>

          <p className="mb-10 text-texttitle">
            {certificatesSection.description[lang]}
          </p>
        </FadeIn>

        <FadeIn>
        <ScrollArea className="h-[min(60vh,28rem)] rounded-2xl border border-zinc-800 bg-zinc-950/70">
          <ul className="divide-y divide-zinc-800">
            {certificates.map((certificate) => {
              const formattedDate = new Intl.DateTimeFormat(
                lang === "id" ? "id-ID" : "en-US",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              ).format(new Date(`${certificate.date}T12:00:00`));
            
              return (
              <li
                key={certificate.id}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <h3 className="font-semibold text-white">
                    {certificate.name[lang]}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    {certificatesSection.dateLabel[lang]}: {formattedDate}
                  </p>
                </div>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${certificatesSection.viewLabel[lang]}: ${certificate.name[lang]}`}
                  className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-white/5 px-4 text-sm font-medium text-white transition hover:border-zinc-500 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <Eye className="size-4" />
                  <span>{certificatesSection.viewLabel[lang]}</span>
                </a>
              </li>
              );
            })}
          </ul>
        </ScrollArea>
          
        </FadeIn>
      </div>
    </section>
  );
}