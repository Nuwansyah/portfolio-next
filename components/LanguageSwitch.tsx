"use client";

import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { lang, toggle } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      {/* ID */}
      <span className={`text-sm ${lang === "id" ? "font-semibold" : "opacity-50"}`}>
        🇮🇩
      </span>

      <Switch
        checked={lang === "en"}
        onCheckedChange={toggle}
      />

      {/* EN */}
      <span className={`text-sm ${lang === "en" ? "font-semibold" : "opacity-50"}`}>
        🇺🇸
      </span>
    </div>
  );
}