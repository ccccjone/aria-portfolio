export interface SocialLinkData {
  href: string;
  icon: string;
  alt: string;
  hoverColor?: 'blue' | 'gray' | 'purple' | 'red' | 'green';
  isExternal?: boolean;
}

export const socialLinks: SocialLinkData[] = [
  {
    href: "https://linkedin.com/in/aria-ccui",
    icon: "/icons/icons8-linkedin.svg",
    alt: "LinkedIn",
    hoverColor: "blue" as const
  },
  {
    href: "https://github.com/ccccjone",
    icon: "/icons/icons8-github.svg",
    alt: "GitHub",
    hoverColor: "gray" as const
  },
  {
    href: "https://discordapp.com/users/ccccjone",
    icon: "/icons/icons8-discord.svg",
    alt: "Discord",
    hoverColor: "purple" as const
  },
  {
    href: "mailto:ccjwcui@gmail.com",
    icon: "/icons/icons8-email.svg",
    alt: "Email",
    hoverColor: "red" as const,
    isExternal: false
  },
  {
    href: "https://drive.google.com/file/d/1rFL5wrfoSdZwPOD36E3zzjyBIMeE-Bw0/view?usp=sharing",
    icon: "https://img.icons8.com/wired/64/resume.png",
    alt: "Resume",
    hoverColor: "green" as const
  }
];