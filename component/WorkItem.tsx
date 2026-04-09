"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";
import { projects } from "@/data/project";

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
      
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">

        {/* LEFT: MEDIA */}
        <div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">

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
          <div className="flex justify-between mt-4">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
        </div>

        {/* RIGHT: INFO */}
        <div>
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
        </div>

      </div>
    </div>
  );
}