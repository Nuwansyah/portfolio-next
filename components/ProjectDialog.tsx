"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useState } from "react";
import type { Project } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Loader2 } from "lucide-react";

type Props = {
  project: Project;
  children: React.ReactNode;
};

export default function ProjectDialog({ project, children }: Props) {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const next = () => {
    setLoading(true);
    setIndex((prev) => (prev === project.media.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setLoading(true);
    setIndex((prev) => (prev === 0 ? project.media.length - 1 : prev - 1));
  };

  const current = project.media[index];

  return (
    
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="w-[calc(100vw-2rem)]! max-w-6xl! h-160! max-h-[calc(100vh-2rem)]! p-0 overflow-hidden bg-black text-white border border-zinc-800 rounded-xl">
        <DialogTitle className="sr-only">
          {project.title[lang]}
        </DialogTitle>
        <div className="grid h-full min-h-0 grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
            {/* LEFT: MEDIA */}
            <div className="min-h-0 flex flex-col bg-black p-4 sm:p-6">
              <div className="">
                <div className="relative w-full max-w-4xl aspect-video max-h-full rounded-lg overflow-hidden bg-zinc-950">
                  {loading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Loader2 className="w-8 h-8 animate-spin text-white" />
                    </div>
                  )}

                  {current.includes("youtube") ? (
                    <iframe
                      src={current}
                      className="w-full h-full"
                      allowFullScreen
                      onLoad={() => setLoading(false)}
                    />
                  ) : (
                    <Image
                      src={current}
                      alt={project.title[lang]}
                      fill
                      sizes="(max-width: 1024px) calc(100vw - 4rem), 60vw"
                      onLoadingComplete={() => setLoading(false)}
                      className={`
                        object-contain
                        transition-opacity duration-300
                        ${loading ? "opacity-0" : "opacity-100"}
                      `}
                    />
                  )}
                </div>
              </div>

              <div className="flex shrink-0 justify-center gap-3 pt-4">
                <button
                  onClick={prev}
                  className="rounded px-4 py-2 bg-white/10 hover:bg-white hover:text-black transition"
                >
                  Prev
                </button>
                <button
                  onClick={next}
                  className="rounded px-4 py-2 bg-white/10 hover:bg-white hover:text-black transition"
                >
                  Next
                </button>
              </div>
            </div>

            {/* RIGHT: DETAIL */}
            <div className="min-h-0 flex flex-col border-t border-zinc-800 p-5 sm:p-6 lg:border-l lg:border-t-0">
              <div className="shrink-0 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold leading-tight pr-10">
                  {project.title[lang]}
                </h2>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-zinc-800 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ScrollArea className="mt-5 min-h-0 flex-1 pr-4">
                <div className="space-y-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.description[lang].map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
                </div>
                {project.keyContribution?.[lang]?.length > 0 && (
                <div className="space-y-3 pt-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                    {lang === "id" ? "Kontribusi Utama" : "Key Contributions"}
                  </h3>

                  <ul className="list-disc space-y-2 pl-5 pt-1">
                    {project.keyContribution[lang].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                )}
              </ScrollArea>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}