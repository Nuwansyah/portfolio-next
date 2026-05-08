// data/contact.ts

import {
    DiscordLogoIcon,
    EnvelopeClosedIcon,
    GithubLogoIcon,
    LinkedinLogoIcon,
    MobileIcon,
  } from "@/components/icons";
  
  export const contacts = [
    {
      label: "Email",
      value: "nuwansyahbillah@gmail.com",
      href: "mailto:nuwansyahbillah@gmail.com",
      icon: EnvelopeClosedIcon,
      copyable: true,
    },
    {
      label: "LinkedIn",
      value: "Nuwansyah Billah Amantana",
      href: "https://linkedin.com/in/nuw4nsyah",
      icon: LinkedinLogoIcon,
    },
    {
      label: "GitHub",
      value: "Nuwansyah",
      href: "https://github.com/nuwansyah",
      icon: GithubLogoIcon,
    },
    {
      label: "Discord",
      value: "neira_11",
      href: "#",
      icon: DiscordLogoIcon,
      copyable: true,
    },
    {
      label: "Phone",
      value: "+62 812-9633-6796",
      href: "#",
      icon: MobileIcon,
      copyable: true,
    },
  ];