"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

import { DialogTitle } from "@/components/ui/dialog";

type Props = {
  project: any;
  children: React.ReactNode; // trigger (card)
};

export default function ProjectDialog({ project, children }: Props) {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  };

  const current = project.media[index];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="w-[90vw]! max-w-none! h-[90vh] p-0 overflow-hidden bg-black text-white border border-zinc-800 rounded-xl">
        <DialogTitle className="hidden">
          {project.title[lang]}
        </DialogTitle>
        
        <div className="grid md:grid-cols-[1.3fr_1fr] h-full w-full">

          {/* LEFT: MEDIA */}
          <div className="flex flex-col h-full bg-black">
            
            {/* MEDIA */}
            <div className="relative flex-1 flex items-center justify-center p-6 ">
            {current.includes("youtube") ? (
              <iframe
                src={current}
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
              ) : (
                <div className="relative w-[800px] h-[450px] ">
                  <Image
                    src={current}
                    alt=""  
                    fill
                    className="object-contain shadow-xl/30 shadow-gray-50/30 "
                  />
                </div>
              )}
            </div>
          
            {/* CONTROLS */}
              <div className="flex justify-center gap-4 p-4 border-t border-black bg-black">
                <button
                  onClick={prev}
                  className="px-4 py-2  hover:bg-muted hover:text-black transition rounded"
                >
                  Prev
                </button>
                <button
                  onClick={next}
                  className="px-4 py-2 hover:bg-muted hover:text-black transition rounded"
                >
                  Next
                </button>
              </div>
            </div>    
            {/* RIGHT: DETAIL */}
            <div className="p-6 flex flex-col justify-center">
              
              <h2 className="text-2xl font-bold">
                {project.title[lang]}
              </h2>

              <p className="mt-4 text-zinc-400">
                {project.description[lang]}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-zinc-800 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}