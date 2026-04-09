
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
    children: React.ReactNode;
    delay?: number;
  };

export default function FadeIn({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 40,
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}