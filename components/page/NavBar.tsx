"use client";

import Link from "next/link";
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



export default function Navbar() {
  const { lang } = useLanguage();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-sm text-white">
        
        {/* Logo */}
        <span className="font-semibold">Nuwansyah</span>

        {/* Menu */}  
        <div className="flex items-center gap-4">
  
        <NavigationMenu>
          <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="#home">{navText.home[lang]}</a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()} >
              <a href="#about">{navText.about[lang]}</a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="#works">{navText.works[lang]}</a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="#contact">{navText.contact[lang]}</a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

  {/* 🔥 Language Switch */}
  <LanguageSwitch />

        </div>

      </div>
    </nav>
  );
}