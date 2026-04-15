"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";
import { Button } from "@/components/ui/button"
import FadeIn from "@/animation/FadeIn";

type Props = {
    project: Project;
  };

export default function WorkItem({ project }: Props) {
  const [mediaIndex, setMediaIndex] = useState(0);

  const next = () => {
    setMediaIndex((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1
    );
  };
  
  const prev = () => {
    setMediaIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen flex items-center px-6 md:px-20 py-20 border-b border-zinc-800">
      
      <div className="grid grid-cols-[2fr_1fr] gap-6 items-center w-full"> 

        {/* LEFT: MEDIA */}
        <FadeIn>
        <div >
          <div className="relative w-full aspect-2/1 rounded-xl overflow-hidden">
    
            <AnimatePresence mode="wait">
              <motion.div
                key={project.media[mediaIndex]}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.media[mediaIndex]}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

          </div>
          
          {/* MEDIA CONTROL */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <Button onClick={prev} variant="secondary">Prev</Button>
            <Button onClick={next} variant="secondary">Next</Button>
          </div>
        </div>
        </FadeIn>
        {/* RIGHT: INFO */}
        <div className="">
          <FadeIn>
          <h2 className="text-3xl font-bold">{project.title}</h2>

          <p className="mt-4 text-zinc-400">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 bg-zinc-800 rounded"
              >
                {t}
              </span>
            ))}
          </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}