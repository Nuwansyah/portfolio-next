"use client";

import React from "react";

type Props = {
  label: string;
  value: string;
  href?: string;
  Icon: React.ElementType;
  copyable?: boolean; 
};

export default function ContactItem({
  label,
  value,
  href,
  Icon,
  copyable,
}: Props) {
  const handleCopy = () => {
    if (!copyable) return;
    navigator.clipboard.writeText(value);
  };

  const content = (
    <div
      onClick={handleCopy}
      className={`
        group flex items-start gap-3 
        bg-zinc-900 border border-zinc-800 
        rounded-lg p-4 
        transition-all duration-200
        hover:bg-zinc-800 hover:scale-[1.02] hover:shadow-lg
        ${copyable ? "cursor-pointer" : ""}
      `}
    >
      {/* ICON */}
      <div className="flex-shrink-0 mt-1">
        <Icon
          size={18}
          className="text-zinc-400 group-hover:text-white transition"
        />
      </div>

      {/* TEXT */}
      <div className="text-left">
        <p className="text-xs text-zinc-400">{label}</p>
        <p className="text-sm font-normal break-normal"> 
          {value}
        </p>
      </div>
    </div>
  );

  // kalau ada link → bungkus dengan <a>
  if (href && href !== "#") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        {content}
      </a>
    );
  }

  return content;
}