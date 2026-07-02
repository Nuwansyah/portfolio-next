"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useLanguage } from "@/context/LanguageContext";
import { navText } from "@/data/translation";
import LanguageSwitch from "@/components/LanguageSwitch";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
export default function Navbar() {
  const { lang } = useLanguage();

  const navItems = [
    { href: "#home", label: navText.home[lang] },
    { href: "#about", label: navText.about[lang] },
    { href: "#works", label: navText.works[lang] },
    { href: "#contact", label: navText.contact[lang] },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-sm text-white">
        <span className="font-semibold">Nuwansyah</span>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href={item.href}>{item.label}</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <LanguageSwitch />
        </div>

        {/* MOBILE MENU */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitch />

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className={cn(
                            "inline-flex size-10 items-center justify-center rounded-lg",
                            "border border-white/10 bg-white/5 text-white",
                            "shadow-sm shadow-black/30 backdrop-blur",
                            "transition-all duration-200",
                            "hover:bg-white/10 hover:border-white/20 hover:scale-105",
                            "active:scale-95 active:bg-white/15",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                          )}
                aria-label="Open navigation menu"
              >
                <Menu className="size-5 transition-transform duration-200" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-72 bg-zinc-950 text-white border-zinc-800"
            >
              <SheetTitle className="text-left uppercase pt-5 pl-3 outline text-white">
                Nuwansyah
              </SheetTitle>

              <div className="mt-8 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300",
                      "transition-all duration-200",
                      "hover:bg-white/10 hover:text-white hover:translate-x-1",
                      "active:scale-[0.98] active:bg-white/15",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}