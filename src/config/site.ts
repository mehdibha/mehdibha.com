import { ISiteConfig } from "@/types"
import { portfolio } from "./portfolio"

export const siteConfig: ISiteConfig = {
  name: "Notionfol.io",
  description:
    "Make your own portfolio + Notion-powered blog in minutes with Next.js and Vercel.",
  nav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  links: {
    mail: "mehdibenhadjali@gmail.com",
    linkedin: "https://linkedin.com/mehdibha",
    github: "https://github.com/mehdibha",
    twitter: "https://twitter.com/mehdibha_",
  },
  portfolio: portfolio,
}
