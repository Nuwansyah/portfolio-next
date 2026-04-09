"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-sm text-white">
        
        <span className="font-semibold">Nera</span>

        <div className="flex gap-6">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#works">My Works</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}